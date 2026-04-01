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
    public const ROOT_STAGING = 'staging';
    public const ROOT_PRODUCTION = 'production';

    /**
     * @return list<string>
     */
    public static function environmentRoots(): array
    {
        return [self::ROOT_STAGING, self::ROOT_PRODUCTION];
    }

    public static function normalizeEnvironmentRoot(string $root): string
    {
        $root = strtolower(trim($root));
        return $root === self::ROOT_STAGING ? self::ROOT_STAGING : self::ROOT_PRODUCTION;
    }

    public static function siteLogicalPathForStoredPath(string $root, string $storedPath): string
    {
        $root = self::normalizeEnvironmentRoot($root);
        $storedPath = trim(str_replace('\\', '/', $storedPath), '/');
        if ($storedPath === '') {
            $storedPath = 'index.php';
        }

        return 'site/' . $root . '/' . self::canonicalSiteRelativePath($storedPath);
    }

    public static function canonicalSiteRelativePath(string $storedPath): string
    {
        $storedPath = trim(str_replace('\\', '/', $storedPath), '/');
        if ($storedPath === '') {
            return 'routes/index.php';
        }

        foreach (['routes', 'layouts', 'components', 'content', 'assets', 'meta'] as $prefix) {
            if ($storedPath === $prefix || str_starts_with($storedPath, $prefix . '/')) {
                return $storedPath;
            }
        }

        $ext = strtolower(pathinfo($storedPath, PATHINFO_EXTENSION));
        if ($ext === 'php') {
            return 'routes/' . $storedPath;
        }

        if ($ext === 'svelte') {
            return 'components/' . $storedPath;
        }

        if (in_array($ext, ['json', 'md', 'txt', 'xml', 'yaml', 'yml'], true)) {
            $fileName = strtolower(basename($storedPath));
            if (in_array($fileName, ['seo.json', 'robots.json', 'sitemap.json', 'manifest.json'], true)) {
                return 'meta/' . $storedPath;
            }

            return 'content/' . $storedPath;
        }

        if (in_array($ext, ['html', 'htm'], true)) {
            return 'routes/' . $storedPath;
        }

        return 'assets/' . $storedPath;
    }

    /**
     * @return array{environment:string,relativePath:string,area:string}|null
     */
    public static function parseSiteLogicalPath(string $logicalPath): ?array
    {
        $logicalPath = trim(str_replace('\\', '/', $logicalPath), '/');
        if ($logicalPath === '' || !str_starts_with($logicalPath, 'site/')) {
            return null;
        }

        $segments = explode('/', $logicalPath);
        if (count($segments) < 2) {
            return null;
        }

        $rawEnvironment = (string)($segments[1] ?? '');
        if (!in_array($rawEnvironment, [self::ROOT_STAGING, self::ROOT_PRODUCTION, 'published'], true)) {
            return null;
        }

        $environment = self::normalizeEnvironmentRoot($rawEnvironment);
        $area = (string)($segments[2] ?? '');
        $relativePath = implode('/', array_slice($segments, 2));

        return [
            'environment' => $environment,
            'relativePath' => trim($relativePath, '/'),
            'area' => trim($area, '/'),
        ];
    }

    public static function isSiteComponentLogicalPath(string $logicalPath): bool
    {
        $sitePath = self::parseSiteLogicalPath($logicalPath);
        if ($sitePath === null) {
            return false;
        }

        return $sitePath['area'] === 'components'
            && str_ends_with(strtolower($sitePath['relativePath']), '.svelte');
    }

    public static function previewUrlForLogicalPath(string $logicalPath): ?string
    {
        $sitePath = self::parseSiteLogicalPath($logicalPath);
        if ($sitePath === null) {
            return null;
        }

        $basePath = $sitePath['environment'] === self::ROOT_STAGING ? '/staging' : '';
        $relativePath = $sitePath['relativePath'];
        if ($relativePath === '' || $sitePath['area'] !== 'routes') {
            return null;
        }

        $routePath = trim(substr($relativePath, strlen('routes')), '/');
        if ($routePath === '' || $routePath === 'index.php' || $routePath === 'index.html' || $routePath === 'index.htm') {
            return $basePath !== '' ? $basePath : '/';
        }

        if ($routePath === '404.php' || $routePath === '404.html' || $routePath === '404.htm') {
            return null;
        }

        if (str_ends_with($routePath, '/index.php') || str_ends_with($routePath, '/index.html') || str_ends_with($routePath, '/index.htm')) {
            $routePath = substr($routePath, 0, strrpos($routePath, '/index.'));
        } elseif (str_ends_with($routePath, '.php')) {
            $routePath = substr($routePath, 0, -4);
        } elseif (str_ends_with($routePath, '.html')) {
            $routePath = substr($routePath, 0, -5);
        } elseif (str_ends_with($routePath, '.htm')) {
            $routePath = substr($routePath, 0, -4);
        }

        $routePath = trim((string)$routePath, '/');
        if ($routePath === '') {
            return $basePath !== '' ? $basePath : '/';
        }

        // Replace dynamic parameters with 'preview' so they route dynamically
        // instead of hitting exact-match file paths which leaves $params empty
        $routePath = preg_replace('/\[([^\]]+)\]/', 'preview', $routePath);

        return ($basePath !== '' ? $basePath : '') . '/' . $routePath;
    }

    public static function workspaceAreaForSiteRelativePath(string $relativePath): ?string
    {
        $relativePath = trim(str_replace('\\', '/', $relativePath), '/');
        if ($relativePath === '') {
            return null;
        }

        $area = trim((string)strtok($relativePath, '/'));
        return in_array($area, ['routes', 'layouts', 'components', 'content', 'assets', 'meta'], true)
            ? $area
            : null;
    }

    public static function resourceKindForSiteRelativePath(string $relativePath): string
    {
        $relativePath = trim(str_replace('\\', '/', $relativePath), '/');
        $area = self::workspaceAreaForSiteRelativePath($relativePath);
        if ($area === 'routes') {
            return 'route';
        }

        if ($area === 'layouts') {
            return 'layout';
        }

        if ($area === 'components') {
            return 'component';
        }

        if ($area === 'content') {
            return str_starts_with($relativePath, 'content/locales/') ? 'locale' : 'content';
        }

        if ($area === 'assets') {
            return 'asset';
        }

        if ($area === 'meta') {
            return 'meta';
        }

        return 'site-file';
    }

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

    public function ensureInitialized(): void
    {
        $this->ensureRoot(self::ROOT_STAGING);
        $this->ensureRoot(self::ROOT_PRODUCTION);
    }

    public function isRootEnabled(string $root): bool
    {
        $doc = $this->getRoot($root, false);
        return $doc !== null && (bool)($doc['enabled'] ?? true);
    }

    private function hasHomepageRoute(string $root): bool
    {
        foreach (['routes/index.php', 'routes/index.html', 'routes/index.htm'] as $candidate) {
            if ($this->readSiteFile($root, $candidate, false, false) !== null) {
                return true;
            }
        }

        return false;
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

        if (isset($updates['adapter']) && is_array($updates['adapter'])) {
            $doc['adapter'] = $updates['adapter'];
        }

        $doc['updatedAt'] = gmdate('c');
        return $this->persistRoot($doc);
    }

    public function canReadRoot(string $root, User|callable $userResolver): bool
    {
        $doc = $this->getRoot($root, false) ?? $this->defaultRootDocument($this->tenantKey(), $this->normalizeRoot($root));
        if (($doc['visibility'] ?? 'restricted') === 'public') {
            return true;
        }

        $user = is_callable($userResolver) ? $userResolver() : $userResolver;
        if ($user->isGuest()) {
            return false;
        }

        return in_array($user->actualRole, array_values(array_map('strval', $doc['allowedActualRoles'] ?? [])), true);
    }

    /**
     * @param array<string,mixed> $meta
     * @return array<string,mixed>
     */
    public function invalidateWorkspaceFingerprint(string $root): void
    {
        unset($this->siteWorkspaceEntriesCache[$root]);
        $cacheFile = $this->materializedWorkspaceBaseDir($root) . '/.fingerprint-cache';
        if (is_file($cacheFile)) {
            rename($cacheFile, $cacheFile . '.bak');
        }
    }

    public function writeFile(string $root, string $path, string $bytes, array $meta = []): array
    {
        $root = $this->normalizeRoot($root);
        $this->invalidateWorkspaceFingerprint($root);
        $normalizedPath = $this->normalizeStoredPath($path);
        $siteRelativePath = self::canonicalSiteRelativePath($normalizedPath);
        $workspaceArea = self::workspaceAreaForSiteRelativePath($siteRelativePath);
        $resourceKind = self::resourceKindForSiteRelativePath($siteRelativePath);
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
            'chunkSize' => $meta['chunkSize'] ?? null,
            'logicalPath' => $this->logicalPath($tenantKey, $root, $normalizedPath),
            'indexesSource' => [
                'tenantKey' => $tenantKey,
                'root' => $root,
                'publicPath' => $normalizedPath,
                'visibility' => $rootDoc['visibility'] ?? 'restricted',
                'logicalPath' => $this->logicalPath($tenantKey, $root, $normalizedPath),
                'workspaceArea' => $workspaceArea,
                'resourceKind' => $resourceKind,
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
     * @return array{manifest: array<string,mixed>, bytes?: string}|null
     */
    public function readFile(string $root, string $path, bool $includeTombstoned = false, bool $includeBytes = true): ?array
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

        $result = ['manifest' => $manifest];
        if ($includeBytes) {
            $result['bytes'] = $this->store->readContentFromManifest(self::FILE_ENTITY, $manifest);
        }

        return $result;
    }

    public function siteLogicalPath(string $root, string $relativePath): string
    {
        $root = $this->normalizeRoot($root);
        $relativePath = $this->normalizeSiteRelativePath($relativePath);
        return 'site/' . $root . ($relativePath !== '' ? '/' . $relativePath : '');
    }

    public function tenantKeyForRuntime(): string
    {
        return $this->tenantKey();
    }

    /**
     * @return array{manifest: array<string,mixed>, logicalPath:string, relativePath:string, bytes?: string}|null
     */
    public function readSiteFile(string $root, string $relativePath, bool $includeTombstoned = false, bool $includeBytes = true): ?array
    {
        $root = $this->normalizeRoot($root);
        $relativePath = $this->normalizeSiteRelativePath($relativePath);
        $manifest = $this->findSiteManifestByRelativePath($root, $relativePath);
        if ($manifest === null) {
            return null;
        }

        if (!$includeTombstoned && $this->store->isTombstonedManifest($manifest)) {
            return null;
        }

        $result = [
            'manifest' => $manifest,
            'logicalPath' => $this->siteLogicalPath($root, $relativePath),
            'relativePath' => $relativePath,
        ];

        if ($includeBytes) {
            $result['bytes'] = $this->store->readContentFromManifest(self::FILE_ENTITY, $manifest);
        }

        return $result;
    }

    /**
     * @param array<string,mixed> $meta
     * @return array<string,mixed>
     */
    public function writeSiteFile(string $root, string $relativePath, string $bytes, array $meta = []): array
    {
        $root = $this->normalizeRoot($root);
        $this->invalidateWorkspaceFingerprint($root);
        $relativePath = $this->normalizeSiteRelativePath($relativePath);
        if ($relativePath === '') {
            throw new InvalidArgumentException('Logical site file path is required');
        }

        $tenantKey = $this->tenantKey();
        $canonicalId = $this->fileId($tenantKey, $root, $relativePath);
        $existing = $this->findSiteManifestByRelativePath($root, $relativePath);
        if (
            $existing !== null
            && !$this->store->isTombstonedManifest($existing)
            && (string)($existing['id'] ?? '') !== $canonicalId
        ) {
            $this->store->tombstone(self::FILE_ENTITY, (string)$existing['id'], [
                'reason' => 'canonical site path rewrite',
            ]);
        }

        return $this->writeFile($root, $relativePath, $bytes, $meta);
    }

    /**
     * @param array<string,mixed> $options
     * @return array<string,mixed>|null
     */
    public function tombstoneSiteFile(string $root, string $relativePath, array $options = []): ?array
    {
        $root = $this->normalizeRoot($root);
        $this->invalidateWorkspaceFingerprint($root);
        $relativePath = $this->normalizeSiteRelativePath($relativePath);
        if ($relativePath === '') {
            return null;
        }

        $manifest = $this->findSiteManifestByRelativePath($root, $relativePath);
        if ($manifest === null) {
            return null;
        }

        $result = $this->store->tombstone(self::FILE_ENTITY, (string)($manifest['id'] ?? ''), $options);
        $this->audit->record('public_workspace.site_file_tombstoned', [
            'root' => $root,
            'relativePath' => $relativePath,
            'manifestId' => $manifest['id'] ?? '',
        ]);

        return $result;
    }

    /**
     * @return array{environment:string,fileCount:int,fingerprint:string,files:list<array<string,mixed>>}
     */
    public function exportSiteWorkspaceState(string $root): array
    {
        $root = $this->normalizeRoot($root);
        $entries = $this->siteWorkspaceEntries($root);
        $files = [];

        foreach ($entries as $relativePath => $manifest) {
            $files[] = [
                'relativePath' => $relativePath,
                'logicalPath' => $this->siteLogicalPath($root, $relativePath),
                'mime' => (string)($manifest['mime'] ?? 'application/octet-stream'),
                'bytes' => $this->store->readContentFromManifest(self::FILE_ENTITY, $manifest),
            ];
        }

        return [
            'environment' => $root,
            'fileCount' => count($files),
            'fingerprint' => $this->siteStateFingerprint($files),
            'files' => $files,
        ];
    }

    /**
     * @param list<array<string,mixed>> $files
     * @param array<string,mixed> $options
     * @return array{environment:string,fileCount:int,written:int,tombstoned:int,fingerprint:string}
     */
    public function replaceSiteWorkspaceState(string $root, array $files, array $options = []): array
    {
        $root = $this->normalizeRoot($root);
        $this->invalidateWorkspaceFingerprint($root);
        $desired = [];
        foreach ($files as $file) {
            $relativePath = $this->normalizeSiteRelativePath((string)($file['relativePath'] ?? ''));
            if ($relativePath === '') {
                continue;
            }

            $desired[$relativePath] = [
                'relativePath' => $relativePath,
                'mime' => (string)($file['mime'] ?? 'application/octet-stream'),
                'bytes' => (string)($file['bytes'] ?? ''),
            ];
        }

        ksort($desired, SORT_STRING);

        $current = $this->exportSiteWorkspaceState($root);
        $currentPaths = [];
        foreach ($current['files'] as $file) {
            $relativePath = (string)($file['relativePath'] ?? '');
            if ($relativePath !== '') {
                $currentPaths[$relativePath] = true;
            }
        }

        $written = 0;
        foreach ($desired as $relativePath => $file) {
            $this->writeSiteFile($root, $relativePath, (string)$file['bytes'], [
                'mime' => $file['mime'],
            ]);
            $written++;
        }

        $tombstoned = 0;
        foreach (array_keys($currentPaths) as $relativePath) {
            if (isset($desired[$relativePath])) {
                continue;
            }

            if ($this->tombstoneSiteFile($root, $relativePath, [
                'actorId' => $options['actorId'] ?? null,
                'reason' => $options['reason'] ?? 'environment state replace',
            ]) !== null) {
                $tombstoned++;
            }
        }

        $state = $this->exportSiteWorkspaceState($root);
        return [
            'environment' => $root,
            'fileCount' => (int)$state['fileCount'],
            'written' => $written,
            'tombstoned' => $tombstoned,
            'fingerprint' => (string)$state['fingerprint'],
        ];
    }

    private function copyDirectory(string $src, string $dst): void
    {
        if (!is_dir($dst)) {
            mkdir($dst, 0775, true);
        }
        $dir = opendir($src);
        if ($dir !== false) {
            while (($file = readdir($dir)) !== false) {
                if ($file === '.' || $file === '..') {
                    continue;
                }
                $srcPath = $src . '/' . $file;
                $dstPath = $dst . '/' . $file;
                if (is_dir($srcPath)) {
                    $this->copyDirectory($srcPath, $dstPath);
                } else {
                    copy($srcPath, $dstPath);
                }
            }
            closedir($dir);
        }
    }

    /**
     * @return array{path:string,fingerprint:string,fileCount:int}
     */
    public function materializeSiteWorkspace(string $root): array
    {
        $root = $this->normalizeRoot($root);

        $cacheFile = $this->materializedWorkspaceBaseDir($root) . '/.fingerprint-cache';
        $oldCached = null;
        if (is_file($cacheFile)) {
            $cached = json_decode((string)file_get_contents($cacheFile), true);
            if (is_array($cached) && isset($cached['fingerprint']) && isset($cached['fileCount']) && isset($cached['path'])) {
                $targetDir = $cached['path'];
                $readyMarker = $targetDir . '/.efsdb-ready';
                if (is_file($readyMarker)) {
                    return $cached;
                }
                $oldCached = $cached;
            }
        } elseif (is_file($cacheFile . '.bak')) {
            $oldCached = json_decode((string)file_get_contents($cacheFile . '.bak'), true);
        }

        $entries = $this->siteWorkspaceEntries($root);
        $fingerprint = $this->siteWorkspaceFingerprint($entries);
        $targetDir = $this->materializedWorkspaceBaseDir($root) . '/' . $fingerprint;
        $readyMarker = $targetDir . '/.efsdb-ready';

        if (!is_file($readyMarker)) {
            if (is_dir($targetDir)) {
                $this->resetDir($targetDir);
            }

            mkdir($targetDir, 0775, true);
            foreach ($entries as $relativePath => $manifest) {
                $absolutePath = $targetDir . '/' . str_replace('/', DIRECTORY_SEPARATOR, $relativePath);
                $parent = dirname($absolutePath);
                if (!is_dir($parent)) {
                    mkdir($parent, 0775, true);
                }

                file_put_contents($absolutePath, $this->store->readContentFromManifest(self::FILE_ENTITY, $manifest), LOCK_EX);
            }

            // Copy dist and node_modules from previous workspace to preserve build artifacts
            if ($oldCached && isset($oldCached['path']) && is_dir($oldCached['path'] . '/components')) {
                $oldComponentsDir = $oldCached['path'] . '/components';
                $newComponentsDir = $targetDir . '/components';
                if (is_dir($newComponentsDir)) {
                    $components = scandir($oldComponentsDir);
                    if ($components !== false) {
                        foreach ($components as $compName) {
                            if ($compName === '.' || $compName === '..') {
                                continue;
                            }
                            $oldCompDir = $oldComponentsDir . '/' . $compName;
                            $newCompDir = $newComponentsDir . '/' . $compName;

                            if (is_dir($oldCompDir) && is_dir($newCompDir)) {
                                // Symlink node_modules if it exists
                                if (is_dir($oldCompDir . '/node_modules') || is_link($oldCompDir . '/node_modules')) {
                                    $linkTarget = is_link($oldCompDir . '/node_modules') ? readlink($oldCompDir . '/node_modules') : null;
                                    if ($linkTarget && is_dir($linkTarget)) {
                                        // It's a symlink to a template cache
                                        if (PHP_OS_FAMILY === 'Windows') {
                                            exec(sprintf('mklink /D "%s" "%s"', str_replace('/', '\\', $newCompDir . '/node_modules'), str_replace('/', '\\', $linkTarget)));
                                        } else {
                                            symlink($linkTarget, $newCompDir . '/node_modules');
                                        }
                                    }
                                }

                                // Copy dist directory if it exists
                                if (is_dir($oldCompDir . '/dist')) {
                                    $this->copyDirectory($oldCompDir . '/dist', $newCompDir . '/dist');
                                }
                            }
                        }
                    }
                }
            }

            file_put_contents($readyMarker, gmdate('c'), LOCK_EX);
        }

        $result = [
            'path' => $targetDir,
            'fingerprint' => $fingerprint,
            'fileCount' => count($entries),
        ];

        file_put_contents($cacheFile, json_encode($result, JSON_UNESCAPED_SLASHES), LOCK_EX);

        return $result;
    }

    /**
     * @param array<string,mixed> $options
     * @return array<string,mixed>|null
     */
    public function tombstoneFile(string $root, string $path, array $options = []): ?array
    {
        $root = $this->normalizeRoot($root);
        $this->invalidateWorkspaceFingerprint($root);
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
        $this->invalidateWorkspaceFingerprint($root);
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
        return self::normalizeEnvironmentRoot($root);
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
        return self::siteLogicalPathForStoredPath($root, $normalizedPath);
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
            return 'index.php';
        }

        if ($hadTrailingSlash) {
            return $normalized . '/index.html';
        }

        return $normalized;
    }

    private function normalizeSiteRelativePath(string $path): string
    {
        $path = rawurldecode($path);
        $path = trim(str_replace('\\', '/', $path));
        $path = preg_replace('#/+#', '/', $path) ?? $path;
        $path = trim($path, '/');
        if ($path === '') {
            return '';
        }

        foreach (explode('/', $path) as $segment) {
            if ($segment === '.' || $segment === '..') {
                throw new RuntimeException('Invalid logical site path');
            }
        }

        return $path;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function findSiteManifestByRelativePath(string $root, string $relativePath): ?array
    {
        $logicalPath = $this->siteLogicalPath($root, $relativePath);
        $manifest = $this->store->findManifestByLogicalPath(self::FILE_ENTITY, $logicalPath);
        if ($manifest !== null) {
            return $manifest;
        }

        // Try the legacy public path format before doing a full scan
        $tenantKey = $this->tenantKey();
        $legacyPath = 'public/' . $tenantKey . '/' . $this->normalizeRoot($root) . '/' . ltrim($relativePath, '/');
        $manifest = $this->store->findManifestByLogicalPath(self::FILE_ENTITY, $legacyPath);
        if ($manifest !== null) {
            return $manifest;
        }

        return null;
    }

    /**
     * @return list<string>
     */
    public function listRoutePaths(string $root): array
    {
        $routes = [];
        foreach ($this->siteWorkspaceEntries($root) as $relativePath => $manifest) {
            if (str_starts_with($relativePath, 'routes/')) {
                $routes[] = $relativePath;
            }
        }
        return $routes;
    }

    /** @var array<string,array<string,array<string,mixed>>> */
    private array $siteWorkspaceEntriesCache = [];

    /**
     * @return array<string,array<string,mixed>>
     */
    private function siteWorkspaceEntries(string $root): array
    {
        if (isset($this->siteWorkspaceEntriesCache[$root])) {
            return $this->siteWorkspaceEntriesCache[$root];
        }

        $entries = [];
        foreach ($this->store->scanVisibleManifests(self::FILE_ENTITY, PHP_INT_MAX, false) as $manifest) {
            $relativePath = $this->siteRelativePathFromManifest($root, $manifest);
            if ($relativePath === null || $relativePath === '') {
                continue;
            }

            $entries[$relativePath] = $manifest;
        }

        ksort($entries, SORT_STRING);
        $this->siteWorkspaceEntriesCache[$root] = $entries;
        return $entries;
    }

    private function siteRelativePathFromManifest(string $root, array $manifest): ?string
    {
        $logicalPath = $this->normalizeSiteRelativePath((string)($manifest['logicalPath'] ?? ''));
        $prefix = 'site/' . $root . '/';
        if ($logicalPath !== '' && str_starts_with($logicalPath, $prefix)) {
            return ltrim(substr($logicalPath, strlen($prefix)), '/');
        }

        if ($logicalPath !== '' && preg_match('#^public/[^/]+/([^/]+)/(.*)$#', $logicalPath, $matches)) {
            if (self::normalizeEnvironmentRoot((string)$matches[1]) === $root) {
                return self::canonicalSiteRelativePath((string)$matches[2]);
            }
        }

        $indexes = is_array($manifest['indexes'] ?? null) ? $manifest['indexes'] : [];
        $manifestRoot = isset($indexes['root']) ? self::normalizeEnvironmentRoot((string)$indexes['root']) : null;
        $publicPath = trim((string)($indexes['publicPath'] ?? ''));
        if ($manifestRoot === $root && $publicPath !== '') {
            return self::canonicalSiteRelativePath($publicPath);
        }

        return null;
    }

    /**
     * @param array<string,array<string,mixed>> $entries
     */
    private function siteWorkspaceFingerprint(array $entries): string
    {
        $hash = hash_init('sha256');
        foreach ($entries as $relativePath => $manifest) {
            hash_update($hash, $relativePath . "\n");
            hash_update($hash, (string)($manifest['id'] ?? '') . "\n");
            hash_update($hash, (string)($manifest['storageId'] ?? '') . "\n");
            hash_update($hash, (string)($manifest['mtime'] ?? '') . "\n");
            hash_update($hash, (string)($manifest['size'] ?? '') . "\n");
        }

        return hash_final($hash);
    }

    /**
     * @param list<array<string,mixed>> $files
     */
    private function siteStateFingerprint(array $files): string
    {
        $hash = hash_init('sha256');
        foreach ($files as $file) {
            $relativePath = (string)($file['relativePath'] ?? '');
            $mime = (string)($file['mime'] ?? 'application/octet-stream');
            $bytes = (string)($file['bytes'] ?? '');
            hash_update($hash, $relativePath . "\n");
            hash_update($hash, $mime . "\n");
            hash_update($hash, hash('sha256', $bytes) . "\n");
        }

        return hash_final($hash);
    }

    private function materializedWorkspaceBaseDir(string $root): string
    {
        $tenantHash = substr(sha1($this->tenantKey()), 0, 16);
        $baseDir = Config::getCacheRoot() . '/workspaces/materialized/' . $tenantHash . '/' . $root;

        if (!is_dir($baseDir)) {
            mkdir($baseDir, 0775, true);
        }

        return $baseDir;
    }

    private function resetDir(string $path): void
    {
        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($path, RecursiveDirectoryIterator::SKIP_DOTS),
            RecursiveIteratorIterator::CHILD_FIRST
        );

        foreach ($iterator as $item) {
            if ($item->isDir()) {
                rmdir($item->getPathname());
            } else {
                unlink($item->getPathname());
            }
        }

        rmdir($path);
    }

    /**
     * @return array<string,mixed>
     */
    private function defaultRootDocument(string $tenantKey, string $root): array
    {
        $now = gmdate('c');
        return [
            'id' => $this->rootId($tenantKey, $root),
            'tenantKey' => $tenantKey,
            'root' => $root,
            'visibility' => 'public',
            'allowedActualRoles' => [],
            'deliveryMode' => 'php-html',
            'enabled' => true,
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
            'logicalPath' => 'builder/environments/' . ($doc['root'] ?? self::ROOT_PRODUCTION) . '.json',
        ]);
        return $doc;
    }
}
