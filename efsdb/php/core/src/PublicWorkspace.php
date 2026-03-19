<?php
declare(strict_types=1);

require_once __DIR__ . '/Audit.php';
require_once __DIR__ . '/IdentityManager.php';
require_once __DIR__ . '/Store.php';
require_once __DIR__ . '/User.php';

final class PublicWorkspace
{
    public const ROOT_ENTITY = 'public_workspace_roots';
    public const FILE_ENTITY = 'public_workspace_files';

    public function __construct(
        private readonly Store $store,
        private readonly IdentityManager $identity,
        private readonly Audit $audit
    ) {}

    /**
     * @return array<string,mixed>|null
     */
    public function getRoot(string $root, bool $create = false): ?array
    {
        $root = $this->normalizeRoot($root);
        $tenantKey = $this->tenantKey();
        $doc = $this->store->getDocument(self::ROOT_ENTITY, $this->rootId($tenantKey, $root));
        if ($doc !== null || !$create) {
            return $doc;
        }

        return $this->persistRoot($this->defaultRootDocument($tenantKey, $root));
    }

    /**
     * @return array<string,mixed>
     */
    public function ensureRoot(string $root): array
    {
        return $this->getRoot($root, true) ?? $this->defaultRootDocument($this->tenantKey(), $this->normalizeRoot($root));
    }

    public function isRootEnabled(string $root): bool
    {
        $doc = $this->getRoot($root, false);
        return is_array($doc) && (bool)($doc['enabled'] ?? false);
    }

    /**
     * @param array<string,mixed> $updates
     * @return array<string,mixed>
     */
    public function setRootConfig(string $root, array $updates): array
    {
        $doc = $this->ensureRoot($root);

        if (isset($updates['deliveryMode']) && is_string($updates['deliveryMode'])) {
            $doc['deliveryMode'] = $updates['deliveryMode'];
        }

        if (isset($updates['visibility']) && in_array($updates['visibility'], ['public', 'restricted'], true)) {
            $doc['visibility'] = $updates['visibility'];
        }

        if (isset($updates['enabled'])) {
            $doc['enabled'] = (bool)$updates['enabled'];
        }

        if (isset($updates['allowedActualRoles']) && is_array($updates['allowedActualRoles'])) {
            $doc['allowedActualRoles'] = array_values(array_map('strval', $updates['allowedActualRoles']));
        }

        $doc['updatedAt'] = gmdate('c');
        return $this->persistRoot($doc);
    }

    public function canReadRoot(string $root, User $user): bool
    {
        $doc = $this->getRoot($root, false) ?? $this->defaultRootDocument($this->tenantKey(), $this->normalizeRoot($root));
        if (($doc['visibility'] ?? 'restricted') === 'public') {
            return true;
        }

        if ($user->isGuest()) {
            return false;
        }

        return in_array($user->actualRole, array_values(array_map('strval', $doc['allowedActualRoles'] ?? [])), true);
    }

    /**
     * @param array<string,mixed> $meta
     * @return array<string,mixed>
     */
    public function writeFile(string $root, string $path, string $bytes, array $meta = []): array
    {
        $root = $this->normalizeRoot($root);
        $normalizedPath = $this->normalizeStoredPath($path);
        $tenantKey = $this->tenantKey();
        $rootDoc = $this->ensureRoot($root);
        $id = $this->fileId($tenantKey, $root, $normalizedPath);

        if (!(bool)($rootDoc['enabled'] ?? false)) {
            $rootDoc['enabled'] = true;
            $rootDoc['updatedAt'] = gmdate('c');
            $rootDoc = $this->persistRoot($rootDoc);
        }

        $manifest = $this->store->storeFile(self::FILE_ENTITY, $bytes, [
            'id' => $id,
            'mime' => $meta['mime'] ?? 'application/octet-stream',
            'logicalPath' => $this->logicalPath($tenantKey, $root, $normalizedPath),
            'indexesSource' => [
                'tenantKey' => $tenantKey,
                'root' => $root,
                'publicPath' => $normalizedPath,
                'visibility' => $rootDoc['visibility'] ?? 'restricted',
            ],
        ]);

        $this->audit->record('public_workspace.file_written', [
            'tenantKey' => $tenantKey,
            'root' => $root,
            'path' => $normalizedPath,
            'manifestId' => $manifest['id'] ?? '',
        ]);

        return $manifest;
    }

    /**
     * @return array{manifest: array<string,mixed>, bytes: string}|null
     */
    public function readFile(string $root, string $path, bool $includeTombstoned = false): ?array
    {
        $root = $this->normalizeRoot($root);
        $normalizedPath = $this->normalizeStoredPath($path);
        $id = $this->fileId($this->tenantKey(), $root, $normalizedPath);
        if (!$this->store->hasManifest(self::FILE_ENTITY, $id)) {
            return null;
        }

        $manifest = $this->store->getManifest(self::FILE_ENTITY, $id);
        if (!$includeTombstoned && $this->store->isTombstonedManifest($manifest)) {
            return null;
        }

        return [
            'manifest' => $manifest,
            'bytes' => $this->store->readContent(self::FILE_ENTITY, $id),
        ];
    }

    /**
     * @param array<string,mixed> $options
     * @return array<string,mixed>|null
     */
    public function tombstoneFile(string $root, string $path, array $options = []): ?array
    {
        $root = $this->normalizeRoot($root);
        $normalizedPath = $this->normalizeStoredPath($path);
        $id = $this->fileId($this->tenantKey(), $root, $normalizedPath);
        if (!$this->store->hasManifest(self::FILE_ENTITY, $id)) {
            return null;
        }

        $manifest = $this->store->tombstone(self::FILE_ENTITY, $id, $options);
        $this->audit->record('public_workspace.file_tombstoned', [
            'root' => $root,
            'path' => $normalizedPath,
            'manifestId' => $id,
        ]);
        return $manifest;
    }

    /**
     * @param array<string,mixed> $options
     * @return array<string,mixed>|null
     */
    public function restoreFile(string $root, string $path, array $options = []): ?array
    {
        $root = $this->normalizeRoot($root);
        $normalizedPath = $this->normalizeStoredPath($path);
        $id = $this->fileId($this->tenantKey(), $root, $normalizedPath);
        if (!$this->store->hasManifest(self::FILE_ENTITY, $id)) {
            return null;
        }

        $manifest = $this->store->restore(self::FILE_ENTITY, $id, $options);
        $this->audit->record('public_workspace.file_restored', [
            'root' => $root,
            'path' => $normalizedPath,
            'manifestId' => $id,
        ]);
        return $manifest;
    }

    private function tenantKey(): string
    {
        $settings = $this->identity->getTenantSettings();
        $candidate = $settings['settings']['tenantKey'] ?? 'tenant';
        return is_scalar($candidate) && (string)$candidate !== '' ? (string)$candidate : 'tenant';
    }

    private function normalizeRoot(string $root): string
    {
        $root = strtolower(trim($root));
        return $root === 'staging' ? 'staging' : 'published';
    }

    private function rootId(string $tenantKey, string $root): string
    {
        return $this->store->fingerprint('public-root', $tenantKey . "\0" . $root);
    }

    private function fileId(string $tenantKey, string $root, string $normalizedPath): string
    {
        return $this->store->fingerprint('public-file', $tenantKey . "\0" . $root . "\0" . $normalizedPath);
    }

    private function logicalPath(string $tenantKey, string $root, string $normalizedPath): string
    {
        return 'public/' . $tenantKey . '/' . $root . '/' . $normalizedPath;
    }

    private function normalizeStoredPath(string $path): string
    {
        $path = rawurldecode($path);
        $path = str_replace('\\', '/', trim($path));
        $hadTrailingSlash = $path !== '' && str_ends_with($path, '/');
        $path = preg_replace('#/+#', '/', $path) ?? $path;
        $path = ltrim($path, '/');
        $segments = $path === '' ? [] : explode('/', rtrim($path, '/'));
        foreach ($segments as $segment) {
            if ($segment === '.' || $segment === '..') {
                throw new RuntimeException('Invalid public workspace path');
            }
        }

        $normalized = implode('/', $segments);
        if ($normalized === '') {
            return 'index.html';
        }

        if ($hadTrailingSlash) {
            return $normalized . '/index.html';
        }

        return $normalized;
    }

    /**
     * @return array<string,mixed>
     */
    private function defaultRootDocument(string $tenantKey, string $root): array
    {
        $now = gmdate('c');
        $restrictedRoles = ['tenant_admin', 'operator_root'];
        return [
            'id' => $this->rootId($tenantKey, $root),
            'tenantKey' => $tenantKey,
            'root' => $root,
            'visibility' => $root === 'published' ? 'public' : 'restricted',
            'allowedActualRoles' => $root === 'published' ? [] : $restrictedRoles,
            'deliveryMode' => 'php-html',
            'enabled' => false,
            'updatedAt' => $now,
            'createdAt' => $now,
        ];
    }

    /**
     * @param array<string,mixed> $doc
     * @return array<string,mixed>
     */
    private function persistRoot(array $doc): array
    {
        $doc['updatedAt'] = gmdate('c');
        $this->store->upsert(self::ROOT_ENTITY, $doc, [
            'logicalPath' => 'public-roots/' . ($doc['tenantKey'] ?? 'tenant') . '/' . ($doc['root'] ?? 'published') . '.json',
        ]);
        return $doc;
    }
}
