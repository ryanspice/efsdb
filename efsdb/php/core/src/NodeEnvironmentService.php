<?php
declare(strict_types=1);

require_once __DIR__ . '/Store.php';

final class NodeEnvironmentService
{
    public function __construct(private readonly Store $store) {}

    /**
     * Bootstraps a common node_modules cache for a given template.
     */
    public function bootstrapTemplateCache(string $templateName, string $sourceDir): void
    {
        $cacheDir = $this->getCacheDir($templateName);
        if (!is_dir($cacheDir)) {
            mkdir($cacheDir, 0777, true);
        }

        // Copy package.json to cache dir
        foreach (['package.json'] as $file) {
            if (is_file($sourceDir . '/' . $file)) {
                $content = file_get_contents($sourceDir . '/' . $file);
                // Fix relative file: dependencies to point back to the right repo root
                // Assuming sourceDir is somewhere in the repo, and cacheDir is in efsdb-data/runtime/node-environments/templates/<templateName>
                // This is tricky, so let's just copy the files and see if we can resolve paths.

                if ($file === 'package.json') {
                    $json = json_decode($content, true);
                    if (isset($json['devDependencies']['@efsdb/adapter-php'])) {
                        // Hardcode the absolute path for the cache
                        $repoRoot = dirname(__DIR__, 4);
                        $json['devDependencies']['@efsdb/adapter-php'] = 'file:' . str_replace('\\', '/', $repoRoot) . '/efsdb/adapters/php';
                    }
                    $content = json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
                }

                file_put_contents($cacheDir . '/' . $file, $content);
            }
        }

        // Run bun install in the cache directory
        $output = [];
        $returnVar = 0;
        exec("cd /d " . escapeshellarg($cacheDir) . " && bun install --efsdb-process-id=node-env-install 2>&1", $output, $returnVar);

        if ($returnVar !== 0) {
            throw new RuntimeException("Failed to bootstrap template cache for $templateName: " . implode("\n", $output));
        }
    }

    /**
     * Links the cached node_modules to a target directory.
     */
    public function linkTemplateCache(string $templateName, string $targetDir): void
    {
        $cacheDir = $this->getCacheDir($templateName);
        $nodeModules = $cacheDir . '/node_modules';

        if (!is_dir($nodeModules)) {
            throw new RuntimeException("Template cache for $templateName is not bootstrapped.");
        }

        $targetNodeModules = rtrim($targetDir, '/\\') . '/node_modules';

        // Remove existing node_modules if any
        if (is_link($targetNodeModules) || is_dir($targetNodeModules)) {
            if (PHP_OS_FAMILY === 'Windows') {
                exec('rmdir /q /s ' . escapeshellarg($targetNodeModules) . ' 2>nul');
                // If it still exists, maybe it was a junction and needs different deletion
                if (is_dir($targetNodeModules)) {
                    @rmdir($targetNodeModules);
                }
            } else {
                exec('rm -rf ' . escapeshellarg($targetNodeModules));
            }
        }

        // Create symlink (junction on Windows or symlink on Linux)
        if (PHP_OS_FAMILY === 'Windows') {
            exec('mklink /J ' . escapeshellarg($targetNodeModules) . ' ' . escapeshellarg($nodeModules) . ' 2>nul');
        } else {
            symlink($nodeModules, $targetNodeModules);
        }
    }

    public function getCacheDir(string $templateName): string
    {
        return $this->store->getDataDir() . '/runtime/node-environments/templates/' . $templateName;
    }

    // --- Server Tracking ---

    /**
     * Registers a running dev server (e.g. Vite)
     */
    public function registerServer(string $id, int $pid, string $url, string $workspaceDir): void
    {
        $servers = $this->getServers();
        $servers[$id] = [
            'id' => $id,
            'pid' => $pid,
            'url' => $url,
            'workspaceDir' => $workspaceDir,
            'startedAt' => time(),
            'lastAccessedAt' => time(),
        ];
        $this->saveServers($servers);
    }

    /**
     * Updates the last accessed time for a server
     */
    public function touchServer(string $id): void
    {
        $servers = $this->getServers();
        if (isset($servers[$id])) {
            $servers[$id]['lastAccessedAt'] = time();
            $this->saveServers($servers);
        }
    }

    /**
     * Garbage collects servers that haven't been accessed in > 5 minutes
     */
    public function gcServers(int $timeoutSeconds = 300): void
    {
        $servers = $this->getServers();
        $now = time();
        $changed = false;

        foreach ($servers as $id => $server) {
            if ($now - $server['lastAccessedAt'] > $timeoutSeconds) {
                // Kill the process
                $this->killProcess((int)$server['pid']);
                unset($servers[$id]);
                $changed = true;
            }
        }

        if ($changed) {
            $this->saveServers($servers);
        }
    }

    private function killProcess(int $pid): void
    {
        if ($pid <= 0) return;

        if (PHP_OS_FAMILY === 'Windows') {
            exec("taskkill /F /T /PID $pid 2>nul");
        } else {
            exec("kill -9 $pid 2>/dev/null");
        }
    }

    /**
     * @return array<string, array<string,mixed>>
     */
    public function getServers(): array
    {
        $file = $this->serversFile();
        if (!is_file($file)) {
            return [];
        }
        $data = json_decode((string)file_get_contents($file), true);
        return is_array($data) ? $data : [];
    }

    private function saveServers(array $servers): void
    {
        $file = $this->serversFile();
        $dir = dirname($file);
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }
        file_put_contents($file, json_encode($servers, JSON_PRETTY_PRINT));
    }

    private function serversFile(): string
    {
        return $this->store->getDataDir() . '/runtime/node-environments/servers.json';
    }
}
