<?php
declare(strict_types=1);

require_once __DIR__ . '/Audit.php';
require_once __DIR__ . '/PublicWorkspace.php';
require_once __DIR__ . '/SiteBuildService.php';
require_once __DIR__ . '/Store.php';

final class EnvironmentOperationsService
{
    public function __construct(
        private readonly Store $store,
        private readonly PublicWorkspace $workspace,
        private readonly SiteBuildService $siteBuilds,
        private readonly Audit $audit
    ) {}

    /**
     * @return array{environment:string,head:array<string,mixed>,snapshots:list<array<string,mixed>>}
     */
    public function history(string $environment, int $limit = 10): array
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        $head = $this->ensureHeadInitialized($environment);

        return [
            'environment' => $environment,
            'head' => $head,
            'snapshots' => $this->listSnapshotSummaries($environment, $head, $limit),
        ];
    }

    /**
     * @return array<string,mixed>
     */
    public function promote(?string $actorId = null, ?string $reason = null): array
    {
        return $this->copy(
            PublicWorkspace::ROOT_STAGING,
            PublicWorkspace::ROOT_PRODUCTION,
            'promote',
            $actorId,
            $reason
        );
    }

    /**
     * @return array<string,mixed>
     */
    public function copy(string $sourceEnvironment, string $targetEnvironment, string $operation = 'copy', ?string $actorId = null, ?string $reason = null): array
    {
        $sourceEnvironment = PublicWorkspace::normalizeEnvironmentRoot($sourceEnvironment);
        $targetEnvironment = PublicWorkspace::normalizeEnvironmentRoot($targetEnvironment);
        if ($sourceEnvironment === $targetEnvironment) {
            throw new InvalidArgumentException('Source and target environments must differ.');
        }

        $sourceHead = $this->ensureHeadInitialized($sourceEnvironment);
        $targetHead = $this->ensureHeadInitialized($targetEnvironment);

        $sourceSnapshot = $this->captureCurrentEnvironmentSnapshot($sourceEnvironment, [
            'operation' => 'snapshot',
            'actorId' => $actorId,
            'reason' => $reason,
        ]);
        $sourceHead = $this->writeHead($sourceEnvironment, [
            'activeSnapshotId' => $sourceSnapshot['snapshotId'],
            'previousSnapshotId' => $sourceHead['activeSnapshotId'] !== $sourceSnapshot['snapshotId']
                ? $sourceHead['activeSnapshotId']
                : ($sourceHead['previousSnapshotId'] ?? null),
            'updatedAt' => gmdate('c'),
            'lastOperation' => 'snapshot',
            'sourceEnvironment' => $sourceEnvironment,
        ]);

        $applyResult = $this->applySnapshotToEnvironment($targetEnvironment, $sourceSnapshot, [
            'actorId' => $actorId,
            'reason' => $reason ?? $operation,
        ]);

        $sourceRootDoc = $this->workspace->getRoot($sourceEnvironment, false);
        if (is_array($sourceRootDoc)) {
            $updates = [];
            if (isset($sourceRootDoc['adapter'])) {
                $updates['adapter'] = $sourceRootDoc['adapter'];
            }
            if (isset($sourceRootDoc['deliveryMode'])) {
                $updates['deliveryMode'] = $sourceRootDoc['deliveryMode'];
            }
            if (!empty($updates)) {
                $this->workspace->setRootConfig($targetEnvironment, $updates);
            }
        }

        $targetSnapshot = $this->captureCurrentEnvironmentSnapshot($targetEnvironment, [
            'operation' => $operation,
            'actorId' => $actorId,
            'reason' => $reason,
            'sourceEnvironment' => $sourceEnvironment,
            'sourceSnapshotId' => $sourceSnapshot['snapshotId'],
        ]);

        $targetHead = $this->writeHead($targetEnvironment, [
            'activeSnapshotId' => $targetSnapshot['snapshotId'],
            'previousSnapshotId' => $targetHead['activeSnapshotId'] ?? null,
            'updatedAt' => gmdate('c'),
            'lastOperation' => $operation,
            'sourceEnvironment' => $sourceEnvironment,
        ]);

        $this->audit->record('public_workspace.environment_' . $operation, [
            'sourceEnvironment' => $sourceEnvironment,
            'targetEnvironment' => $targetEnvironment,
            'actorId' => $actorId,
            'reason' => $reason,
            'sourceSnapshotId' => $sourceSnapshot['snapshotId'],
            'targetSnapshotId' => $targetSnapshot['snapshotId'],
        ]);

        return [
            'operation' => $operation,
            'sourceEnvironment' => $sourceEnvironment,
            'targetEnvironment' => $targetEnvironment,
            'head' => $targetHead,
            'snapshot' => $this->snapshotSummary($targetSnapshot, $targetHead),
            'apply' => $applyResult['state'],
            'build' => $applyResult['build'],
        ];
    }

    /**
     * @return array<string,mixed>
     */
    public function restore(string $environment, string $snapshotId, ?string $actorId = null, ?string $reason = null, string $operation = 'restore'): array
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        $head = $this->ensureHeadInitialized($environment);
        $snapshot = $this->readSnapshot($environment, $snapshotId);
        if ($snapshot === null) {
            throw new InvalidArgumentException('Snapshot not found for environment.');
        }

        $applyResult = $this->applySnapshotToEnvironment($environment, $snapshot, [
            'actorId' => $actorId,
            'reason' => $reason ?? $operation,
        ]);

        $restoredSnapshot = $this->captureCurrentEnvironmentSnapshot($environment, [
            'operation' => $operation,
            'actorId' => $actorId,
            'reason' => $reason,
            'restoredFromSnapshotId' => $snapshotId,
        ]);

        $head = $this->writeHead($environment, [
            'activeSnapshotId' => $restoredSnapshot['snapshotId'],
            'previousSnapshotId' => $head['activeSnapshotId'] ?? null,
            'updatedAt' => gmdate('c'),
            'lastOperation' => $operation,
            'sourceEnvironment' => $snapshot['sourceEnvironment'] ?? $environment,
        ]);

        $this->audit->record('public_workspace.environment_' . $operation, [
            'environment' => $environment,
            'actorId' => $actorId,
            'reason' => $reason,
            'snapshotId' => $snapshotId,
            'resultSnapshotId' => $restoredSnapshot['snapshotId'],
        ]);

        return [
            'operation' => $operation,
            'environment' => $environment,
            'restoredFromSnapshotId' => $snapshotId,
            'head' => $head,
            'snapshot' => $this->snapshotSummary($restoredSnapshot, $head),
            'apply' => $applyResult['state'],
            'build' => $applyResult['build'],
        ];
    }

    /**
     * @return array<string,mixed>
     */
    public function rollback(string $environment, ?string $actorId = null, ?string $reason = null): array
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        $head = $this->ensureHeadInitialized($environment);
        $previousSnapshotId = (string)($head['previousSnapshotId'] ?? '');
        if ($previousSnapshotId === '') {
            throw new InvalidArgumentException('No previous environment snapshot is available for rollback.');
        }

        return $this->restore($environment, $previousSnapshotId, $actorId, $reason, 'rollback');
    }

    /**
     * @return array<string,mixed>
     */
    private function ensureHeadInitialized(string $environment): array
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        $head = $this->readHead($environment);
        $activeSnapshotId = (string)($head['activeSnapshotId'] ?? '');
        if ($activeSnapshotId !== '' && $this->readSnapshot($environment, $activeSnapshotId) !== null) {
            return $head;
        }

        $snapshot = $this->captureCurrentEnvironmentSnapshot($environment, [
            'operation' => 'seed',
            'reason' => 'initial environment head',
        ]);

        return $this->writeHead($environment, [
            'activeSnapshotId' => $snapshot['snapshotId'],
            'previousSnapshotId' => null,
            'updatedAt' => gmdate('c'),
            'lastOperation' => 'seed',
            'sourceEnvironment' => $environment,
        ]);
    }

    /**
     * @param array<string,mixed> $metadata
     * @return array<string,mixed>
     */
    private function captureCurrentEnvironmentSnapshot(string $environment, array $metadata = []): array
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        $state = $this->workspace->exportSiteWorkspaceState($environment);
        $createdAt = gmdate('c');
        $snapshotId = bin2hex(random_bytes(12));

        $snapshot = [
            'snapshotId' => $snapshotId,
            'environment' => $environment,
            'sourceEnvironment' => (string)($metadata['sourceEnvironment'] ?? $environment),
            'sourceSnapshotId' => $metadata['sourceSnapshotId'] ?? null,
            'operation' => (string)($metadata['operation'] ?? 'snapshot'),
            'reason' => isset($metadata['reason']) ? (string)$metadata['reason'] : null,
            'actorId' => isset($metadata['actorId']) ? (string)$metadata['actorId'] : null,
            'restoredFromSnapshotId' => isset($metadata['restoredFromSnapshotId']) ? (string)$metadata['restoredFromSnapshotId'] : null,
            'createdAt' => $createdAt,
            'fileCount' => (int)($state['fileCount'] ?? 0),
            'fingerprint' => (string)($state['fingerprint'] ?? ''),
            'files' => array_map(static function (array $file): array {
                return [
                    'relativePath' => (string)($file['relativePath'] ?? ''),
                    'mime' => (string)($file['mime'] ?? 'application/octet-stream'),
                    'contentBase64' => base64_encode((string)($file['bytes'] ?? '')),
                ];
            }, $state['files'] ?? []),
        ];

        $path = $this->snapshotFilePath($environment, $snapshotId);
        $dir = dirname($path);
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }

        file_put_contents($path, json_encode($snapshot, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
        return $snapshot;
    }

    /**
     * @param array<string,mixed> $snapshot
     * @param array<string,mixed> $options
     * @return array{state:array<string,mixed>,build:array<string,mixed>}
     */
    private function applySnapshotToEnvironment(string $environment, array $snapshot, array $options = []): array
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        $files = [];
        foreach (($snapshot['files'] ?? []) as $file) {
            if (!is_array($file)) {
                continue;
            }

            $files[] = [
                'relativePath' => (string)($file['relativePath'] ?? ''),
                'mime' => (string)($file['mime'] ?? 'application/octet-stream'),
                'bytes' => base64_decode((string)($file['contentBase64'] ?? ''), true) ?: '',
            ];
        }

        $state = $this->workspace->replaceSiteWorkspaceState($environment, $files, [
            'actorId' => $options['actorId'] ?? null,
            'reason' => $options['reason'] ?? 'environment restore',
        ]);
        $build = $this->siteBuilds->buildEnvironment($environment);

        return [
            'state' => $state,
            'build' => $build,
        ];
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readSnapshot(string $environment, string $snapshotId): ?array
    {
        $path = $this->snapshotFilePath($environment, $snapshotId);
        if (!is_file($path)) {
            return null;
        }

        $decoded = json_decode((string)file_get_contents($path), true);
        return is_array($decoded) ? $decoded : null;
    }

    /**
     * @param array<string,mixed> $head
     * @return list<array<string,mixed>>
     */
    private function listSnapshotSummaries(string $environment, array $head, int $limit): array
    {
        $paths = glob($this->snapshotDir($environment) . '/*.json') ?: [];
        $snapshots = [];
        foreach ($paths as $path) {
            if (!is_string($path) || !is_file($path)) {
                continue;
            }

            $decoded = json_decode((string)file_get_contents($path), true);
            if (!is_array($decoded)) {
                continue;
            }

            $snapshots[] = $decoded;
        }

        usort($snapshots, static function (array $left, array $right): int {
            return strcmp((string)($right['createdAt'] ?? ''), (string)($left['createdAt'] ?? ''));
        });

        $snapshots = array_slice($snapshots, 0, max(1, $limit));
        return array_map(fn(array $snapshot): array => $this->snapshotSummary($snapshot, $head), $snapshots);
    }

    /**
     * @return array<string,mixed>
     */
    private function readHead(string $environment): array
    {
        $path = $this->headFilePath($environment);
        if (!is_file($path)) {
            return $this->defaultHead($environment);
        }

        $decoded = json_decode((string)file_get_contents($path), true);
        if (!is_array($decoded)) {
            return $this->defaultHead($environment);
        }

        return $decoded + $this->defaultHead($environment);
    }

    /**
     * @param array<string,mixed> $head
     * @return array<string,mixed>
     */
    private function writeHead(string $environment, array $head): array
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        $payload = $head + $this->defaultHead($environment);
        $path = $this->headFilePath($environment);
        $dir = dirname($path);
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }

        file_put_contents($path, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
        return $payload;
    }

    /**
     * @return array<string,mixed>
     */
    private function defaultHead(string $environment): array
    {
        return [
            'environment' => $environment,
            'activeSnapshotId' => null,
            'previousSnapshotId' => null,
            'updatedAt' => null,
            'lastOperation' => null,
            'sourceEnvironment' => $environment,
        ];
    }

    private function tenantRuntimeDir(): string
    {
        $tenantHash = substr(sha1($this->workspace->tenantKeyForRuntime()), 0, 16);
        $dir = $this->store->getDataDir() . '/runtime/environment-operations/' . $tenantHash;
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }

        return $dir;
    }

    private function snapshotDir(string $environment): string
    {
        return $this->tenantRuntimeDir() . '/snapshots/' . $environment;
    }

    private function snapshotFilePath(string $environment, string $snapshotId): string
    {
        return $this->snapshotDir($environment) . '/' . preg_replace('/[^a-f0-9]/i', '', $snapshotId) . '.json';
    }

    private function headFilePath(string $environment): string
    {
        return $this->tenantRuntimeDir() . '/heads/' . $environment . '.json';
    }

    /**
     * @param array<string,mixed> $snapshot
     * @param array<string,mixed> $head
     * @return array<string,mixed>
     */
    private function snapshotSummary(array $snapshot, array $head): array
    {
        return [
            'snapshotId' => (string)($snapshot['snapshotId'] ?? ''),
            'environment' => (string)($snapshot['environment'] ?? ''),
            'sourceEnvironment' => (string)($snapshot['sourceEnvironment'] ?? ''),
            'sourceSnapshotId' => $snapshot['sourceSnapshotId'] ?? null,
            'operation' => (string)($snapshot['operation'] ?? 'snapshot'),
            'reason' => $snapshot['reason'] ?? null,
            'actorId' => $snapshot['actorId'] ?? null,
            'restoredFromSnapshotId' => $snapshot['restoredFromSnapshotId'] ?? null,
            'createdAt' => (string)($snapshot['createdAt'] ?? ''),
            'fileCount' => (int)($snapshot['fileCount'] ?? 0),
            'fingerprint' => (string)($snapshot['fingerprint'] ?? ''),
            'active' => ($head['activeSnapshotId'] ?? null) === ($snapshot['snapshotId'] ?? null),
            'previous' => ($head['previousSnapshotId'] ?? null) === ($snapshot['snapshotId'] ?? null),
        ];
    }
}
