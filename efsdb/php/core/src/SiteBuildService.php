<?php
declare(strict_types=1);

require_once __DIR__ . '/PublicWorkspace.php';
require_once __DIR__ . '/Store.php';

final class SiteBuildService
{
    public function __construct(
        private readonly Store $store,
        private readonly PublicWorkspace $workspace
    ) {}

    /**
     * @return array{preview: array<string,mixed>|null, build: array<string,mixed>|null}
     */
    public function describePath(string $logicalPath, string $mode = 'natural'): array
    {
        if ($mode !== 'natural') {
            return ['preview' => null, 'build' => null];
        }

        $sitePath = PublicWorkspace::parseSiteLogicalPath($logicalPath);
        if ($sitePath === null) {
            return ['preview' => null, 'build' => null];
        }

        $environment = $sitePath['environment'];
        $previewUrl = PublicWorkspace::previewUrlForLogicalPath($logicalPath);

        return [
            'preview' => $previewUrl === null ? null : [
                'environment' => $environment,
                'kind' => $sitePath['area'] === 'routes' ? 'route' : 'environment',
                'label' => ucfirst($environment) . ' runtime preview',
                'url' => $previewUrl,
            ],
            'build' => $this->readStatus($environment),
        ];
    }

    /**
     * @return array{preview: array<string,mixed>|null, build: array<string,mixed>|null}
     */
    public function handleSave(string $logicalPath, string $mode = 'natural'): array
    {
        if ($mode !== 'natural') {
            return ['preview' => null, 'build' => null];
        }

        $sitePath = PublicWorkspace::parseSiteLogicalPath($logicalPath);
        if ($sitePath === null) {
            return ['preview' => null, 'build' => null];
        }

        if (PublicWorkspace::isSiteComponentLogicalPath($logicalPath)) {
            $this->buildEnvironment($sitePath['environment']);
        } else {
            global $app;
            if (isset($app) && method_exists($app, 'getGhostPreloadService')) {
                $app->getGhostPreloadService()->preloadEnvironment($sitePath['environment']);
            }
        }

        return $this->describePath($logicalPath, $mode);
    }

    /**
     * @return array<string,mixed>
     */
    public function buildEnvironment(string $environment): array
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        $previous = $this->readStatus($environment);
        $startedAt = gmdate('c');

        $this->writeStatus($environment, [
            'environment' => $environment,
            'status' => 'building',
            'tool' => 'bun+svelte/compiler',
            'startedAt' => $startedAt,
            'updatedAt' => $startedAt,
            'finishedAt' => null,
            'lastSuccessfulAt' => $previous['lastSuccessfulAt'] ?? null,
            'lastFailureAt' => $previous['lastFailureAt'] ?? null,
            'lastGoodPreview' => $previous['lastGoodPreview'] ?? null,
            'componentCount' => (int)($previous['componentCount'] ?? 0),
            'error' => null,
        ]);

        try {
            $snapshot = $this->workspace->materializeSiteWorkspace($environment);

            global $app; // We might need app or just instantiate NodeEnvironmentService
            if (!isset($app)) {
                require_once __DIR__ . '/NodeEnvironmentService.php';
                $nodeEnv = new NodeEnvironmentService($this->store);
            } else {
                $nodeEnv = $app->getNodeEnvironmentService();
            }

            // 1. Svelte Custom Elements Build (Root Level)
            try {
                // Link standard sveltekit node_modules to the materialized workspace root
                $nodeEnv->linkTemplateCache('sveltekit', (string)$snapshot['path']);
            } catch (Throwable $e) {
                // Ignore if cache is not bootstrapped
            }

            $result = $this->runCompiler((string)$snapshot['path']);
            $componentCount = (int)($result['componentCount'] ?? 0);

            // 2. Full Builds for Framework Projects (React/Angular/SvelteKit inside components/)
            $componentsDir = $snapshot['path'] . '/components';
            if (is_dir($componentsDir)) {
                $dirs = array_filter(glob($componentsDir . '/*'), 'is_dir');
                foreach ($dirs as $dir) {
                    if (is_file($dir . '/package.json')) {
                        $pkg = json_decode((string)file_get_contents($dir . '/package.json'), true);
                        if (is_array($pkg) && isset($pkg['scripts']['build'])) {
                            // Determine framework cache to link
                            $deps = array_merge($pkg['dependencies'] ?? [], $pkg['devDependencies'] ?? []);
                            $framework = 'sveltekit';
                            if (isset($deps['react'])) $framework = 'react';
                            elseif (isset($deps['@angular/core'])) $framework = 'angular';
                            elseif (isset($deps['svelte']) && !isset($deps['@sveltejs/kit'])) $framework = 'svelte';

                            try {
                                $nodeEnv->linkTemplateCache($framework, $dir);
                            } catch (Throwable $e) {
                                // Ignore cache link errors
                            }

                            // Run full build
                            $output = [];
                            $code = 0;
                            $basePath = $environment === 'staging' ? '/staging' : '';
                            $phpIniPath = dirname(__DIR__) . '/php.ini';
                            $phpIniPath = str_replace('\\', '/', $phpIniPath);
                            $dataDir = $this->store->getDataDir();
                            $envVars = PHP_OS_FAMILY === 'Windows'
                                ? "set EFSDB_DATA_DIR={$dataDir}&& set EFSDB_BUILD_ROOT={$environment}&& set EFSDB_BASE_PATH={$basePath}&& set EFSDB_PHP_INI_PATH={$phpIniPath}&& "
                                : "EFSDB_DATA_DIR=" . escapeshellarg($dataDir) . " EFSDB_BUILD_ROOT=" . escapeshellarg($environment) . " EFSDB_BASE_PATH=" . escapeshellarg($basePath) . " EFSDB_PHP_INI_PATH=" . escapeshellarg($phpIniPath) . " ";
                            exec("cd " . escapeshellarg($dir) . " && {$envVars}bun --efsdb-process-id=site-build-component run build 2>&1", $output, $code);
                            if ($code !== 0) {
                                throw new RuntimeException("Component build failed for " . basename($dir) . ":\n" . implode("\n", $output));
                            }
                            $componentCount++;
                        }
                    }
                }
            }

            // Re-materialize the workspace now that new artifacts might have been imported to the DB
            $this->workspace->invalidateWorkspaceFingerprint($environment);
            $this->workspace->materializeSiteWorkspace($environment);

            $finishedAt = gmdate('c');

            if (($result['status'] ?? 'failed') === 'success') {
                $lastGoodPreview = $previous['lastGoodPreview'] ?? ($environment === PublicWorkspace::ROOT_STAGING ? '/staging' : '/');
                $ret = $this->writeStatus($environment, [
                    'environment' => $environment,
                    'status' => 'success',
                    'tool' => 'bun+svelte/compiler',
                    'startedAt' => $startedAt,
                    'updatedAt' => $finishedAt,
                    'finishedAt' => $finishedAt,
                    'lastSuccessfulAt' => $finishedAt,
                    'lastFailureAt' => $previous['lastFailureAt'] ?? null,
                    'lastGoodPreview' => $lastGoodPreview,
                    'componentCount' => $componentCount,
                    'error' => null,
                ]);

                if (isset($app) && method_exists($app, 'getGhostPreloadService')) {
                    $app->getGhostPreloadService()->preloadEnvironment($environment);
                }

                return $ret;
            }

            return $this->writeStatus($environment, [
                'environment' => $environment,
                'status' => 'failed',
                'tool' => 'bun+svelte/compiler',
                'startedAt' => $startedAt,
                'updatedAt' => $finishedAt,
                'finishedAt' => $finishedAt,
                'lastSuccessfulAt' => $previous['lastSuccessfulAt'] ?? null,
                'lastFailureAt' => $finishedAt,
                'lastGoodPreview' => $previous['lastGoodPreview'] ?? null,
                'componentCount' => (int)($result['componentCount'] ?? 0),
                'error' => $result['error'] ?? [
                    'message' => 'Svelte component build failed.',
                ],
            ]);
        } catch (Throwable $error) {
            $finishedAt = gmdate('c');

            return $this->writeStatus($environment, [
                'environment' => $environment,
                'status' => 'failed',
                'tool' => 'bun+svelte/compiler',
                'startedAt' => $startedAt,
                'updatedAt' => $finishedAt,
                'finishedAt' => $finishedAt,
                'lastSuccessfulAt' => $previous['lastSuccessfulAt'] ?? null,
                'lastFailureAt' => $finishedAt,
                'lastGoodPreview' => $previous['lastGoodPreview'] ?? null,
                'componentCount' => (int)($previous['componentCount'] ?? 0),
                'error' => [
                    'message' => $error->getMessage(),
                ],
            ]);
        }
    }

    /**
     * @return array<string,mixed>
     */
    private function readStatus(string $environment): array
    {
        $path = $this->statusFilePath($environment);
        if (!is_file($path)) {
            return $this->defaultStatus($environment);
        }

        $decoded = json_decode((string)file_get_contents($path), true);
        if (!is_array($decoded)) {
            return $this->defaultStatus($environment);
        }

        return $decoded + $this->defaultStatus($environment);
    }

    /**
     * @param array<string,mixed> $status
     * @return array<string,mixed>
     */
    private function writeStatus(string $environment, array $status): array
    {
        $status = $status + $this->defaultStatus($environment);
        $path = $this->statusFilePath($environment);
        $dir = dirname($path);
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }

        file_put_contents($path, json_encode($status, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
        return $status;
    }

    /**
     * @return array<string,mixed>
     */
    private function defaultStatus(string $environment): array
    {
        return [
            'environment' => $environment,
            'status' => 'idle',
            'tool' => 'bun+svelte/compiler',
            'startedAt' => null,
            'updatedAt' => null,
            'finishedAt' => null,
            'lastSuccessfulAt' => null,
            'lastFailureAt' => null,
            'lastGoodPreview' => null,
            'componentCount' => 0,
            'error' => null,
        ];
    }

    private function statusFilePath(string $environment): string
    {
        return $this->store->getDataDir() . '/runtime/site-builds/' . $environment . '.json';
    }

    /**
     * @return array<string,mixed>
     */
    private function runCompiler(string $workspaceRoot): array
    {
        $webRoot = $this->repoRoot() . '/web';
        $scriptPath = $webRoot . '/scripts/check-site-components.ts';
        if (!is_file($scriptPath)) {
            throw new RuntimeException('Tenant component compiler script is missing.');
        }

        $pipes = [];
        $process = proc_open(
            ['bun', 'scripts/check-site-components.ts', $workspaceRoot, '--efsdb-process-id=site-build'],
            [
                0 => ['pipe', 'r'],
                1 => ['pipe', 'w'],
                2 => ['pipe', 'w'],
            ],
            $pipes,
            $webRoot
        );

        if (!is_resource($process)) {
            throw new RuntimeException('Unable to start Bun component build.');
        }

        fclose($pipes[0]);
        $stdout = stream_get_contents($pipes[1]);
        $stderr = stream_get_contents($pipes[2]);
        fclose($pipes[1]);
        fclose($pipes[2]);
        $exitCode = proc_close($process);

        $payload = json_decode(trim((string)$stdout), true);
        if (is_array($payload)) {
            return $payload;
        }

        if ($exitCode === 0) {
            return [
                'status' => 'success',
                'componentCount' => 0,
            ];
        }

        return [
            'status' => 'failed',
            'componentCount' => 0,
            'error' => [
                'message' => trim((string)$stderr) !== '' ? trim((string)$stderr) : 'Svelte component build failed.',
            ],
        ];
    }

    private function repoRoot(): string
    {
        return rtrim(str_replace('\\', '/', dirname(__DIR__, 4)), '/');
    }
}
