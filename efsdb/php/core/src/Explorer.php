<?php
declare(strict_types=1);

require_once __DIR__ . '/Permissions.php';
require_once __DIR__ . '/PublicWorkspace.php';
require_once __DIR__ . '/Store.php';
require_once __DIR__ . '/User.php';

final class Explorer
{
    private const RAW_MANIFESTS_DIR = 'manifests';
    private const RAW_CHUNKS_DIR = 'chunks';
    private const INLINE_PREVIEW_BYTES = 512;
    private const NATURAL_SITE_DIRS = ['routes', 'layouts', 'components', 'content', 'assets', 'meta'];

    public function __construct(
        private readonly Store $store,
        private readonly Permissions $perms,
        private readonly ?PublicWorkspace $workspace = null
    ) {}

    /**
     * @return array<string,mixed>
     */
    public function list(User $user, string $relPath, string $mode = 'natural'): array
    {
        if (!$this->canUseMode($user, $mode)) {
            return [
                'error' => $mode === 'raw' ? 'PAYWALL' : 'FORBIDDEN',
                'message' => $mode === 'raw'
                    ? 'Raw inspection requires elevated access.'
                    : 'Natural view is not available for this account.',
            ];
        }

        $relPath = $this->normalizePath($relPath);
        $segments = $relPath === '' ? [] : explode('/', $relPath);
        $visibleEntities = $this->visibleEntities($user, $mode);

        if ($segments === []) {
            $items = [];
            if ($mode === 'raw') {
                foreach ($visibleEntities as $entity) {
                    $items[] = [
                        'name' => $entity,
                        'type' => 'dir',
                        'size' => 0,
                        'rawPath' => $entity,
                        'kind' => 'bucket',
                        'entity' => $entity,
                        'storage' => ['kind' => 'raw-dir'],
                    ];
                }
            } else {
                $items[] = [
                    'name' => 'site',
                    'type' => 'dir',
                    'size' => 0,
                    'rawPath' => 'site',
                    'kind' => 'site',
                    'entity' => PublicWorkspace::FILE_ENTITY,
                ];

                $items[] = [
                    'name' => 'projects',
                    'type' => 'dir',
                    'size' => 0,
                    'rawPath' => 'projects',
                    'kind' => 'projects',
                    'entity' => 'project_files',
                ];

                if ($this->hasNaturalSystemResources($user)) {
                    $items[] = [
                        'name' => 'system',
                        'type' => 'dir',
                        'size' => 0,
                        'rawPath' => 'system',
                        'kind' => 'system',
                        'entity' => 'system',
                    ];
                }
            }

            return ['path' => '', 'mode' => $mode, 'items' => $items];
        }

        $entity = array_shift($segments);
        if ($mode === 'raw') {
            if ($entity === null || !in_array($entity, $visibleEntities, true)) {
                return ['path' => $relPath, 'mode' => $mode, 'items' => []];
            }

            $bucketId = $this->store->bucketIdForEntity($entity);
            $children = $this->listRawEntityChildren($entity, $bucketId, implode('/', $segments));
            return ['path' => $relPath, 'mode' => $mode, 'items' => $children];
        }

        if ($mode === 'natural' && $entity === 'system') {
            $children = $this->listNaturalSystemChildren($user, implode('/', $segments));
            return ['path' => $relPath, 'mode' => $mode, 'items' => $children];
        }

        if ($mode === 'natural' && $entity === 'site') {
            $children = $this->listNaturalSiteChildren(implode('/', $segments));
            return ['path' => $relPath, 'mode' => $mode, 'items' => $children];
        }

        if ($mode === 'natural' && $entity === 'projects') {
            $children = $this->listNaturalProjectsChildren(implode('/', $segments));
            return ['path' => $relPath, 'mode' => $mode, 'items' => $children];
        }

        if ($entity === null || !in_array($entity, $visibleEntities, true)) {
            return ['path' => $relPath, 'mode' => $mode, 'items' => []];
        }

        $children = $this->listEntityChildren($entity, implode('/', $segments), $mode);
        return ['path' => $relPath, 'mode' => $mode, 'items' => $children];
    }

    /**
     * @return array<string,mixed>|null
     */
    public function details(User $user, string $relPath, string $mode = 'natural'): ?array
    {
        if (!$this->canUseMode($user, $mode)) {
            return null;
        }

        $resolved = $this->resolveItem($user, $relPath, $mode);
        if ($resolved === null || $resolved['type'] !== 'file') {
            return null;
        }

        $storageType = (string)($resolved['storageType'] ?? 'logical');
        return match ($storageType) {
            'manifest' => $this->manifestStorageDetails($resolved),
            'chunk' => $this->chunkStorageDetails($resolved),
            default => $this->logicalFileDetails($resolved, $mode),
        };
    }

    /**
     * @return array<string,mixed>|null
     */
    public function save(User $user, string $relPath, string $mode, string $content, ?string $mime = null): ?array
    {
        if ($mode !== 'natural') {
            throw new DomainException('Saving is only available in natural view.');
        }

        if (!$this->canUseMode($user, $mode)) {
            throw new DomainException('Natural view is not available for this account.');
        }

        $resolved = $this->resolveItem($user, $relPath, $mode);
        if ($resolved === null || $resolved['type'] !== 'file') {
            return null;
        }

        $manifest = $resolved['manifest'];
        $logicalPath = trim((string)($resolved['logicalPath'] ?? $this->manifestPathForExplorer($manifest)), '/');
        if (!$this->perms->canEditNaturalPath($user, $logicalPath)) {
            throw new DomainException('Editing this natural resource is not allowed for the current role.');
        }

        $name = basename($logicalPath !== '' ? $logicalPath : (string)$resolved['path']);
        $currentMime = (string)($manifest['mime'] ?? 'application/octet-stream');
        $extension = strtolower(pathinfo($logicalPath !== '' ? $logicalPath : $name, PATHINFO_EXTENSION));

        if (!$this->isEditableText($currentMime, $extension)) {
            throw new InvalidArgumentException('Only natural text and code files can be edited from the explorer.');
        }

        $updatedMime = trim((string)($mime ?? ''));
        if ($updatedMime === '') {
            $updatedMime = $currentMime;
        }

        $indexesSource = is_array($manifest['indexes'] ?? null) ? $manifest['indexes'] : [];
        $lookupFields = [];
        foreach (($manifest['lookupValues'] ?? []) as $entry) {
            if (!is_array($entry)) {
                continue;
            }

            $field = isset($entry['field']) ? trim((string)$entry['field']) : '';
            if ($field !== '') {
                $lookupFields[] = $field;
            }
        }

        $meta = [
            'id' => (string)($manifest['id'] ?? ''),
            'name' => $name,
            'mime' => $updatedMime,
            'indexesSource' => $indexesSource,
            'lookupFields' => array_values(array_unique($lookupFields)),
        ];

        if ($logicalPath !== '') {
            $meta['logicalPath'] = $logicalPath;
        }

        if (isset($manifest['chunking']['size'])) {
            $meta['chunkSize'] = (int)$manifest['chunking']['size'];
        }

        if (isset($manifest['lifecycle']) && is_array($manifest['lifecycle'])) {
            $meta['lifecycle'] = $manifest['lifecycle'];
        }

        $updatedManifest = $this->store->storeFile((string)$resolved['entity'], $content, $meta);
        $resolved['manifest'] = $updatedManifest;

        return $this->logicalFileDetails($resolved, 'natural');
    }

    private const NATURAL_SITE_AREAS = ['routes', 'layouts', 'components', 'content', 'assets', 'meta'];

    private const EDITABLE_EXTENSIONS = [
        'php',
        'phtml',
        'css',
        'scss',
        'sass',
        'less',
        'html',
        'htm',
        'svelte',
        'vue',
        'jsx',
        'tsx',
        'json',
        'jsonc',
        'xml',
        'yaml',
        'yml',
        'toml',
        'md',
        'markdown',
        'txt',
        'text',
        'csv',
        'js',
        'mjs',
        'ts',
        'mts',
        'svg',
        'ico',
        'bmp',
        'gif',
        'png',
        'jpg',
        'jpeg',
        'webp',
    ];

    private function isEditableText(string $mime, string $extension): bool
    {
        if (in_array($extension, self::EDITABLE_EXTENSIONS, true)) {
            return true;
        }

        $textMimes = ['text/', 'application/json', 'application/xml', 'application/yaml'];
        foreach ($textMimes as $prefix) {
            if (str_starts_with($mime, $prefix)) {
                return true;
            }
        }

        return str_contains($mime, 'javascript') || str_contains($mime, 'json');
    }

    /**
     * Create or replace a natural logical file at the given path.
     *
     * @return array{created: bool, manifest: array<string,mixed>}
     */
    public function put(User $user, string $relPath, string $content, ?string $mime = null): array
    {
        if (!$this->canUseMode($user, 'natural')) {
            throw new DomainException('Natural view is not available for this account.');
        }

        $relPath = $this->normalizePath($relPath);
        if ($relPath === '' || !str_starts_with($relPath, 'site/')) {
            throw new InvalidArgumentException('PUT path must be under site/.');
        }

        $segments = explode('/', $relPath);
        if (count($segments) < 4) {
            throw new InvalidArgumentException('PUT path must be site/{environment}/{area}/{filename}.');
        }

        $env   = $segments[1];
        $area  = $segments[2];
        $fname = basename($relPath);

        if (!in_array($env, ['staging', 'production'], true)) {
            throw new InvalidArgumentException('PUT environment must be staging or production.');
        }

        if (!in_array($area, self::NATURAL_SITE_AREAS, true)) {
            throw new InvalidArgumentException('PUT area must be one of: ' . implode(', ', self::NATURAL_SITE_AREAS) . '.');
        }

        $logicalPath = $relPath;
        if (!$this->perms->canEditNaturalPath($user, $logicalPath)) {
            throw new DomainException('Editing this natural resource is not allowed for the current role.');
        }

        $existing = $this->resolveItem($user, $relPath, 'natural');
        if ($existing !== null && isset($existing['logicalPath'])) {
            $logicalPath = $existing['logicalPath'];
            $fname = basename($logicalPath);
        }

        $extension = strtolower(pathinfo($fname, PATHINFO_EXTENSION));
        $finalMime = trim((string)($mime ?? ''));
        if ($finalMime === '') {
            $finalMime = $this->mimeFromExtension($extension);
        }

        if (!$this->isEditableText($finalMime, $extension)) {
            throw new InvalidArgumentException("Extension '.{$extension}' is not an editable text type.");
        }

        $siteTarget = $this->siteTargetForPath($relPath);
        if ($siteTarget !== null && $this->workspace !== null) {
            $this->workspace->writeSiteFile($siteTarget['environment'], $siteTarget['relativePath'], $content, [
                'mime' => $finalMime,
            ]);

            $resolved = $this->resolveItem($user, $relPath, 'natural');
            if ($resolved === null || $resolved['type'] !== 'file') {
                throw new RuntimeException('Failed to resolve newly written site file.');
            }

            return [
                'created' => $existing === null,
                'details' => $this->logicalFileDetails($resolved, 'natural'),
            ];
        }

        $id = ($existing !== null && isset($existing['manifest']['id']))
            ? (string)$existing['manifest']['id']
            : $this->store->generateId();

        $meta = [
            'id' => $id,
            'name' => $fname,
            'mime' => $finalMime,
            'logicalPath' => $logicalPath,
        ];

        $updatedManifest = $this->store->storeFile(PublicWorkspace::FILE_ENTITY, $content, $meta);
        $resolved = [
            'type' => 'file',
            'entity' => PublicWorkspace::FILE_ENTITY,
            'path' => $relPath,
            'manifest' => $updatedManifest,
            'storageType' => 'logical',
        ];

        return [
            'created' => $existing === null,
            'details' => $this->logicalFileDetails($resolved, 'natural'),
        ];
    }

    public function hasFile(User $user, string $relPath, string $mode = 'natural'): bool
    {
        if (!$this->canUseMode($user, $mode)) {
            return false;
        }

        $resolved = $this->resolveItem($user, $relPath, $mode);
        return $resolved !== null && $resolved['type'] === 'file';
    }

    public function delete(User $user, string $relPath): bool
    {
        if (!$this->canUseMode($user, 'natural')) {
            throw new DomainException('Natural view is not available for this account.');
        }

        $relPath = $this->normalizePath($relPath);
        if ($relPath === '' || !str_starts_with($relPath, 'site/')) {
            throw new InvalidArgumentException('Delete path must be under site/.');
        }

        if (!$this->perms->canEditNaturalPath($user, $relPath)) {
            throw new DomainException('Editing this natural resource is not allowed for the current role.');
        }

        $resolved = $this->resolveItem($user, $relPath, 'natural');
        if ($resolved === null || $resolved['type'] !== 'file') {
            return false;
        }

        if (($resolved['storageType'] ?? '') === 'synthetic' && ($resolved['manifest']['id'] ?? '') === 'synthetic-component') {
            $prefix = $resolved['path'] . '/';
            foreach ($this->store->scanVisibleManifests(PublicWorkspace::FILE_ENTITY, PHP_INT_MAX, false) as $m) {
                $displayPath = $this->naturalSiteDisplayPath($m);
                if (str_starts_with($displayPath, $prefix)) {
                    $this->store->tombstone(PublicWorkspace::FILE_ENTITY, (string)$m['id'], [
                        'actorId' => $user->id,
                        'reason' => 'explorer delete component folder'
                    ]);
                }
            }
            return true;
        }

        $logicalPath = (string)($resolved['logicalPath'] ?? $resolved['path'] ?? '');
        $siteTarget = $this->siteTargetForPath($logicalPath);
        if ($siteTarget !== null && $this->workspace !== null) {
            return $this->workspace->tombstoneSiteFile($siteTarget['environment'], $siteTarget['relativePath'], [
                'actorId' => $user->id,
                'reason' => 'explorer delete',
            ]) !== null;
        }

        $manifest = $resolved['manifest'];
        if (isset($manifest['id'])) {
            $this->store->tombstone((string)$resolved['entity'], (string)$manifest['id'], [
                'actorId' => $user->id,
                'reason' => 'explorer delete'
            ]);
            return true;
        }
        return false;
    }

    public function rename(User $user, string $relPath, string $newRelPath): array
    {
        return $this->copyOrMove($user, $relPath, $newRelPath, true);
    }

    public function duplicate(User $user, string $relPath, string $newRelPath): array
    {
        return $this->copyOrMove($user, $relPath, $newRelPath, false);
    }

    private function copyOrMove(User $user, string $relPath, string $newRelPath, bool $isMove): array
    {
        if (!$this->canUseMode($user, 'natural')) {
            throw new DomainException('Natural view is not available for this account.');
        }

        $relPath = $this->normalizePath($relPath);
        $newRelPath = $this->normalizePath($newRelPath);

        if ($relPath === '' || !str_starts_with($relPath, 'site/')) {
            throw new InvalidArgumentException('Source path must be under site/.');
        }
        if ($newRelPath === '' || !str_starts_with($newRelPath, 'site/')) {
            throw new InvalidArgumentException('Target path must be under site/.');
        }

        $segments = explode('/', $newRelPath);
        if (count($segments) < 4) {
            throw new InvalidArgumentException('Target path must be site/{environment}/{area}/{filename}.');
        }

        if (!$this->perms->canEditNaturalPath($user, $relPath) || !$this->perms->canEditNaturalPath($user, $newRelPath)) {
            throw new DomainException('Editing these natural resources is not allowed for the current role.');
        }

        $resolved = $this->resolveItem($user, $relPath, 'natural');
        if ($resolved === null || $resolved['type'] !== 'file') {
            throw new InvalidArgumentException('Source file not found.');
        }

        if (($resolved['storageType'] ?? '') === 'synthetic' && ($resolved['manifest']['id'] ?? '') === 'synthetic-component') {
            $prefix = $resolved['path'] . '/';
            $newPrefix = $newRelPath . '/';
            foreach ($this->store->scanVisibleManifests(PublicWorkspace::FILE_ENTITY, PHP_INT_MAX, false) as $m) {
                $displayPath = $this->naturalSiteDisplayPath($m);
                if (str_starts_with($displayPath, $prefix)) {
                    $childRel = substr($displayPath, strlen($prefix));
                    $targetPath = $newPrefix . $childRel;
                    
                    $content = $this->store->readContent(PublicWorkspace::FILE_ENTITY, (string)$m['id']);
                    $id = $isMove ? (string)$m['id'] : $this->store->generateId();
                    
                    $meta = [
                        'id' => $id,
                        'name' => basename($targetPath),
                        'mime' => (string)($m['mime'] ?? 'application/octet-stream'),
                        'logicalPath' => $targetPath,
                    ];
                    $this->store->storeFile(PublicWorkspace::FILE_ENTITY, $content, $meta);
                }
            }

            return [
                'type' => 'file',
                'entity' => PublicWorkspace::FILE_ENTITY,
                'path' => $newRelPath,
                'manifest' => $resolved['manifest'],
                'storageType' => 'synthetic',
                'syntheticContent' => str_replace($resolved['path'], $newRelPath, (string)($resolved['syntheticContent'] ?? ''))
            ];
        }

        $sourceLogicalPath = (string)($resolved['logicalPath'] ?? $relPath);
        $sourceSiteTarget = $this->siteTargetForPath($sourceLogicalPath);
        $targetSiteTarget = $this->siteTargetForPath($newRelPath);
        if ($sourceSiteTarget !== null && $targetSiteTarget !== null && $this->workspace !== null) {
            $sourceFile = $this->workspace->readSiteFile(
                $sourceSiteTarget['environment'],
                $sourceSiteTarget['relativePath'],
                false,
                true
            );
            if ($sourceFile === null) {
                throw new InvalidArgumentException('Source file not found.');
            }

            $sourceManifest = $sourceFile['manifest'] ?? [];
            $mime = (string)($sourceManifest['mime'] ?? 'application/octet-stream');
            $bytes = (string)($sourceFile['bytes'] ?? '');

            $this->workspace->writeSiteFile($targetSiteTarget['environment'], $targetSiteTarget['relativePath'], $bytes, [
                'mime' => $mime,
            ]);

            if (
                $isMove
                && (
                    $sourceSiteTarget['environment'] !== $targetSiteTarget['environment']
                    || $sourceSiteTarget['relativePath'] !== $targetSiteTarget['relativePath']
                )
            ) {
                $this->workspace->tombstoneSiteFile($sourceSiteTarget['environment'], $sourceSiteTarget['relativePath'], [
                    'actorId' => $user->id,
                    'reason' => 'explorer rename',
                ]);
            }

            $newResolved = $this->resolveItem($user, $newRelPath, 'natural');
            if ($newResolved === null || $newResolved['type'] !== 'file') {
                throw new RuntimeException('Failed to resolve copied site file.');
            }

            return [
                'details' => $this->logicalFileDetails($newResolved, 'natural'),
            ];
        }

        $manifest = $resolved['manifest'];
        $content = $this->store->readContent((string)$resolved['entity'], (string)$manifest['id']);
        $mime = (string)($manifest['mime'] ?? 'application/octet-stream');

        // Target path details
        $fname = basename($newRelPath);
        $id = $isMove ? (string)($manifest['id'] ?? $this->store->generateId()) : $this->store->generateId();

        $meta = [
            'id' => $id,
            'name' => $fname,
            'mime' => $mime,
            'logicalPath' => $newRelPath,
        ];

        // Perform move by just writing with the same ID, or new ID for duplicate
        $updatedManifest = $this->store->storeFile(PublicWorkspace::FILE_ENTITY, $content, $meta);

        // If it's a move and we are changing logical path but not ID, we don't necessarily need to tombstone the old one
        // if we updated the same document ID. But if the ID changed or we want to be safe, tombstone if different ID.
        // Wait, storeFile with the same ID overwrites the manifest (adds new version). So logicalPath updates correctly.

        $newResolved = [
            'type' => 'file',
            'entity' => PublicWorkspace::FILE_ENTITY,
            'path' => $newRelPath,
            'manifest' => $updatedManifest,
            'storageType' => 'logical',
        ];

        return [
            'details' => $this->logicalFileDetails($newResolved, 'natural'),
        ];
    }

    /**
     * @return array{environment:string,relativePath:string}|null
     */
    private function siteTargetForPath(string $path): ?array
    {
        $parsed = PublicWorkspace::parseSiteLogicalPath($path);
        if ($parsed === null || $parsed['relativePath'] === '') {
            return null;
        }

        return [
            'environment' => $parsed['environment'],
            'relativePath' => $parsed['relativePath'],
        ];
    }

    /**
     * @return array{mime: string, bytes: string, filename: string}|null
     */
    public function download(User $user, string $relPath, string $mode = 'natural'): ?array
    {
        if (!$this->canUseMode($user, $mode)) {
            return null;
        }

        $resolved = $this->resolveItem($user, $relPath, $mode);
        if ($resolved === null || $resolved['type'] !== 'file') {
            return null;
        }

        $storageType = (string)($resolved['storageType'] ?? 'logical');
        if ($storageType === 'synthetic') {
            return [
                'mime' => (string)($resolved['manifest']['mime'] ?? 'application/octet-stream'),
                'bytes' => (string)($resolved['syntheticContent'] ?? ''),
                'filename' => basename($resolved['path']),
            ];
        }

        if ($storageType === 'manifest') {
            $bytes = @file_get_contents((string)$resolved['filePath']);
            if ($bytes === false) {
                return null;
            }

            return [
                'mime' => 'application/octet-stream',
                'bytes' => $bytes,
                'filename' => basename($resolved['path']),
            ];
        }

        if ($storageType === 'chunk') {
            $bytes = @file_get_contents((string)$resolved['filePath']);
            if ($bytes === false) {
                return null;
            }

            return [
                'mime' => 'application/octet-stream',
                'bytes' => $bytes,
                'filename' => basename($resolved['path']),
            ];
        }

        $manifest = $resolved['manifest'];
        return [
            'mime' => (string)$manifest['mime'],
            'bytes' => $this->store->readContent($resolved['entity'], (string)$manifest['id']),
            'filename' => basename($resolved['path']),
        ];
    }

    /**
     * @return array<string,mixed>|null
     */
    private function resolveItem(User $user, string $relPath, string $mode): ?array
    {
        $relPath = $this->normalizePath($relPath);
        if ($relPath === '') {
            return null;
        }

        if ($mode === 'natural' && ($relPath === 'system' || str_starts_with($relPath, 'system/'))) {
            return $this->resolveNaturalSystemItem($user, $relPath);
        }

        if ($mode === 'natural' && ($relPath === 'site' || str_starts_with($relPath, 'site/'))) {
            return $this->resolveNaturalSiteItem($relPath);
        }

        if ($mode === 'natural' && ($relPath === 'projects' || str_starts_with($relPath, 'projects/'))) {
            return $this->resolveNaturalProjectsItem($relPath);
        }

        $segments = explode('/', $relPath);
        if ($mode === 'raw') {
            $entity = array_shift($segments);
            if ($entity === null || !in_array($entity, $this->visibleEntities($user, $mode), true)) {
                return null;
            }

            $bucketId = $this->store->bucketIdForEntity($entity);

            $needle = implode('/', $segments);
            if ($needle === '') {
                return ['type' => 'dir', 'entity' => $entity, 'path' => $entity];
            }

            return $this->resolveRawStorageItem($entity, $bucketId, $needle);
        }

        $entity = array_shift($segments);
        if ($entity === null || !in_array($entity, $this->visibleEntities($user, $mode), true)) {
            return null;
        }

        $needle = implode('/', $segments);
        if ($needle === '') {
            return ['type' => 'dir', 'entity' => $entity, 'path' => $entity];
        }

        return $this->resolveLogicalItem($entity, $needle, $mode === 'raw');
    }

    /**
     * @return array<string,mixed>|null
     */
    private function resolveNaturalProjectsItem(string $relPath): ?array
    {
        $relPath = $this->normalizePath($relPath);
        if ($relPath === 'projects') {
            return ['type' => 'dir', 'entity' => 'project_files', 'path' => 'projects'];
        }

        // If asking for a synthetic project.json
        if (str_ends_with($relPath, '/project.json')) {
            $basePath = substr($relPath, 0, -13);
            return [
                'type' => 'file',
                'entity' => 'project_files',
                'path' => $relPath,
                'manifest' => [
                    'id' => 'synthetic-project-json',
                    'mime' => 'application/json',
                    'size' => 100,
                ],
                'storageType' => 'synthetic',
                'syntheticContent' => json_encode([
                    'type' => 'sveltekit',
                    'path' => $basePath
                ])
            ];
        }

        $needle = substr($relPath, 9); // strip 'projects/'
        foreach ($this->store->scanVisibleManifests('project_files', PHP_INT_MAX, false) as $manifest) {
            $logical = ltrim($this->manifestPathForExplorer($manifest), '/');
            $fullPath = str_starts_with($logical, 'projects/') ? $logical : 'projects/' . $logical;

            if ($fullPath === $relPath) {
                return [
                    'type' => 'file',
                    'entity' => 'project_files',
                    'path' => $relPath,
                    'manifest' => $manifest,
                    'storageType' => 'logical',
                ];
            }

            if (str_starts_with($fullPath, $relPath . '/')) {
                return [
                    'type' => 'dir',
                    'entity' => 'project_files',
                    'path' => $relPath,
                ];
            }
        }

        return null;
    }

    private function listNaturalProjectsChildren(string $subpath): array
    {
        $subpath = $this->normalizePath($subpath);

        $basePath = $subpath === '' ? 'projects' : 'projects/' . $subpath;
        $prefix = $basePath . '/';
        $children = [];

        $isProjectRoot = false;
        foreach ($this->store->scanVisibleManifests('project_files', PHP_INT_MAX, false) as $manifest) {
            $logical = ltrim($this->manifestPathForExplorer($manifest), '/');
            $fullPath = str_starts_with($logical, 'projects/') ? $logical : 'projects/' . $logical;
            if ($fullPath === $basePath . '/svelte.config.js' || $fullPath === $basePath . '/package.json') {
                $isProjectRoot = true;
                break;
            }
        }

        foreach ($this->store->scanVisibleManifests('project_files', PHP_INT_MAX, false) as $manifest) {
            $logical = ltrim($this->manifestPathForExplorer($manifest), '/');
            $fullPath = str_starts_with($logical, 'projects/') ? $logical : 'projects/' . $logical;

            if ($fullPath === $basePath || !str_starts_with($fullPath, $prefix)) {
                continue;
            }

            $relativeChild = substr($fullPath, strlen($prefix));
            if ($relativeChild === false || $relativeChild === '') {
                continue;
            }

            $parts = explode('/', $relativeChild);
            $name = $parts[0];
            if ($name === '') {
                continue;
            }

            if ($isProjectRoot) {
                if (in_array($name, ['node_modules', '.svelte-kit'], true)) {
                    continue;
                }
            }

            if (count($parts) > 1) {
                $children[$name] ??= [
                    'name' => $name,
                    'type' => 'dir',
                    'size' => 0,
                    'rawPath' => trim($basePath . '/' . $name, '/'),
                    'kind' => 'folder',
                    'entity' => 'project_files',
                ];
                continue;
            }

            $children[$name] = [
                'name' => $name,
                'type' => 'file',
                'size' => (int)($manifest['contentLength'] ?? 0),
                'rawPath' => $fullPath,
                'mime' => (string)($manifest['mime'] ?? 'application/octet-stream'),
                'updatedAt' => (string)($manifest['createdAt'] ?? ''),
                'ext' => pathinfo($name, PATHINFO_EXTENSION),
                'kind' => 'file',
                'entity' => 'project_files',
            ];
        }

        if ($isProjectRoot) {
            $children['project.json'] = [
                'name' => 'project.json',
                'type' => 'file',
                'size' => 100,
                'rawPath' => $basePath . '/project.json',
                'mime' => 'application/json',
                'updatedAt' => date('c'),
                'ext' => 'json',
                'kind' => 'file',
                'entity' => 'project_files',
                'synthetic' => true
            ];
        }

        ksort($children, SORT_STRING);
        return array_values($children);
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function listEntityChildren(string $entity, string $subpath, string $mode): array
    {
        if ($mode === 'raw') {
            return $this->listRawEntityChildren($entity, $this->store->bucketIdForEntity($entity), $subpath);
        }

        return $this->listLogicalChildren($entity, $subpath, false);
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function listLogicalChildren(string $entity, string $subpath, bool $includeTombstoned): array
    {
        $subpath = $this->normalizePath($subpath);
        $children = [];

        foreach ($this->store->scanVisibleManifests($entity, PHP_INT_MAX, $includeTombstoned) as $manifest) {
            $fullPath = $this->manifestPathForExplorer($manifest);
            if ($subpath !== '') {
                if ($fullPath === $subpath) {
                    continue;
                }

                if (!str_starts_with($fullPath, $subpath . '/')) {
                    continue;
                }

                $relative = substr($fullPath, strlen($subpath) + 1);
            } else {
                $relative = $fullPath;
            }

            $parts = explode('/', $relative);
            $name = $parts[0];
            if ($name === '') {
                continue;
            }

            $childPath = trim($entity . '/' . ($subpath !== '' ? $subpath . '/' : '') . $name, '/');
            if (count($parts) > 1) {
                $children[$name] ??= [
                    'name' => $name,
                    'type' => 'dir',
                    'size' => 0,
                    'rawPath' => $childPath,
                    'kind' => 'folder',
                    'entity' => $entity,
                ];
                continue;
            }

            $children[$name] = $this->logicalFileListItem($entity, $name, $childPath, $manifest);
        }

        ksort($children, SORT_STRING);
        return array_values($children);
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function listRawEntityChildren(string $entity, string $bucketId, string $subpath): array
    {
        $subpath = $this->normalizePath($subpath);
        if ($subpath === '') {
            $items = $this->listLogicalChildren($entity, $subpath, true);
            if ($this->entityHasManifests($entity)) {
                $items[] = $this->rawStorageDirItem($entity, self::RAW_MANIFESTS_DIR);
            }
            if ($this->entityHasChunks($entity)) {
                $items[] = $this->rawStorageDirItem($entity, self::RAW_CHUNKS_DIR);
            }

            return $items;
        }

        if ($subpath === self::RAW_MANIFESTS_DIR) {
            return $this->listRawManifestFiles($entity, $bucketId);
        }

        if ($subpath === self::RAW_CHUNKS_DIR || str_starts_with($subpath, self::RAW_CHUNKS_DIR . '/')) {
            $relative = ltrim(substr($subpath, strlen(self::RAW_CHUNKS_DIR)), '/');
            return $this->listRawChunkChildren($entity, $bucketId, $relative);
        }

        return $this->listLogicalChildren($entity, $subpath, true);
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function listNaturalSiteChildren(string $subpath): array
    {
        $subpath = $this->normalizePath($subpath);
        if ($subpath === '') {
            return array_map(
                fn(string $root): array => $this->naturalSiteDirItem($root, 'site/' . $root, 'environment'),
                PublicWorkspace::environmentRoots()
            );
        }

        $segments = explode('/', $subpath);
        $rawEnvironment = (string)array_shift($segments);
        $environment = PublicWorkspace::normalizeEnvironmentRoot($rawEnvironment);
        if ($environment !== $rawEnvironment && $rawEnvironment !== 'published') {
            return [];
        }

        $relative = $this->normalizePath(implode('/', $segments));
        if ($relative === '') {
            return array_map(
                fn(string $dir): array => $this->naturalSiteDirItem($dir, 'site/' . $environment . '/' . $dir, 'workspace'),
                self::NATURAL_SITE_DIRS
            );
        }

        $basePath = 'site/' . $environment . '/' . $relative;
        $prefix = 'site/' . $environment . '/';
        $children = [];

        $componentFolders = [];
        foreach ($this->store->scanVisibleManifests(PublicWorkspace::FILE_ENTITY, PHP_INT_MAX, false) as $manifest) {
            $fullPath = $this->naturalSiteDisplayPath($manifest);
            if (!str_starts_with($fullPath, $prefix)) {
                continue;
            }

            if ($fullPath === $basePath || !str_starts_with($fullPath, $basePath . '/')) {
                continue;
            }

            $relativeChild = substr($fullPath, strlen($basePath) + 1);
            if ($relativeChild === false || $relativeChild === '') {
                continue;
            }

            $parts = explode('/', $relativeChild);
            $name = $parts[0];
            if ($name === '') {
                continue;
            }

            // If we are listing the contents of a component folder directly
            if ($name === '_app') {
                $hasAppFolder = true;
                continue;
            }

            if (count($parts) > 1) {
                if ($parts[1] === '_app') {
                    $componentFolders[$name] = true;
                    continue;
                }
                $children[$name] ??= $this->naturalSiteDirItem($name, trim($basePath . '/' . $name, '/'));
                continue;
            }

            $item = $this->naturalSiteFileListItem($name, $fullPath, $manifest);
            
            if ($relative === 'routes') {
                $ext = pathinfo($name, PATHINFO_EXTENSION);
                if (in_array(strtolower($ext), ['php', 'html', 'htm'])) {
                    // Check if it's a nominated route
                    $content = $this->store->readContent(PublicWorkspace::FILE_ENTITY, (string)$manifest['id']);
                    if (str_contains($content, 'Nominated Route for')) {
                        // Skip it in the routes folder
                        continue;
                    }
                    
                    $nameWithoutExt = preg_replace('/\.(php|html|htm)$/i', '', $name);
                    $item['name'] = $nameWithoutExt;
                    $item['rawPath'] = $basePath . '/' . $nameWithoutExt;
                    $item['ext'] = 'route';
                    $children[$nameWithoutExt] = $item;
                    continue;
                }
            }

            $children[$name] = $item;
        }

        foreach ($componentFolders as $compName => $_) {
            $children[$compName] = [
                'name' => $compName,
                'type' => 'file',
                'size' => 150,
                'rawPath' => $basePath . '/' . $compName,
                'mime' => 'application/json',
                'updatedAt' => date('c'),
                'ext' => 'component',
                'kind' => 'file',
                'entity' => PublicWorkspace::FILE_ENTITY,
                'synthetic' => true
            ];
        }

        if (isset($hasAppFolder) && $hasAppFolder) {
            $children['component.json'] = [
                'name' => 'component.json',
                'type' => 'file',
                'size' => 150,
                'rawPath' => $basePath . '/component.json',
                'mime' => 'application/json',
                'updatedAt' => date('c'),
                'ext' => 'json',
                'kind' => 'file',
                'entity' => PublicWorkspace::FILE_ENTITY,
                'synthetic' => true
            ];
        }

        // If we are listing a component folder, check for nominated routes
        if (str_starts_with($relative, 'components/') && count(explode('/', $relative)) === 2) {
            $componentName = explode('/', $relative)[1];
            foreach ($this->store->scanVisibleManifests(PublicWorkspace::FILE_ENTITY, PHP_INT_MAX, false) as $manifest) {
                $logicalPath = $this->naturalSiteDisplayPath($manifest);
                if (str_starts_with($logicalPath, "site/$environment/routes/")) {
                    $content = $this->store->readContent(PublicWorkspace::FILE_ENTITY, (string)$manifest['id']);
                    if (str_contains($content, "Nominated Route for $componentName")) {
                        $routeName = basename($logicalPath);
                        $nameWithoutExt = preg_replace('/\.(php|html|htm)$/i', '', $routeName);
                        $children[$nameWithoutExt . '.route'] = [
                            'name' => $nameWithoutExt,
                            'type' => 'file',
                            'size' => (int)($manifest['contentLength'] ?? 0),
                            'rawPath' => $logicalPath,
                            'logicalPath' => $logicalPath,
                            'mime' => (string)($manifest['mime'] ?? 'application/x-httpd-php'),
                            'updatedAt' => (string)($manifest['createdAt'] ?? ''),
                            'ext' => 'route',
                            'kind' => 'file',
                            'entity' => PublicWorkspace::FILE_ENTITY,
                            'manifest' => $manifest,
                            'storageType' => 'logical',
                            'synthetic' => false // It's a real file, just shown in a different place
                        ];
                    }
                }
            }
        }

        ksort($children, SORT_STRING);
        return array_values($children);
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function listNaturalSystemChildren(User $user, string $subpath): array
    {
        $subpath = $this->normalizePath($subpath);
        $resources = $this->naturalSystemEntities($user);
        if ($subpath === '') {
            $items = [];
            foreach ($resources as $name => $entity) {
                $items[] = [
                    'name' => $name,
                    'type' => 'dir',
                    'size' => 0,
                    'rawPath' => 'system/' . $name,
                    'kind' => 'folder',
                    'entity' => $entity,
                ];
            }

            usort($items, static fn(array $a, array $b): int => strcmp((string)$a['name'], (string)$b['name']));
            return $items;
        }

        $segments = explode('/', $subpath);
        $namespace = array_shift($segments);
        if ($namespace === null || !isset($resources[$namespace])) {
            return [];
        }

        $entity = $resources[$namespace];
        $relative = $this->normalizePath(implode('/', $segments));
        return $this->listNaturalSystemNamespaceChildren($entity, $namespace, $relative);
    }

    /**
     * @return array<array<string,mixed>>
     */
    private function manifestsForMode(string $entity, string $mode): array
    {
        if ($mode === 'raw') {
            return $this->store->scanAllManifests($entity, PHP_INT_MAX);
        }

        return $this->store->scanVisibleManifests($entity, PHP_INT_MAX);
    }

    /**
     * @param array<string,mixed> $manifest
     */
    private function manifestPathForExplorer(array $manifest): string
    {
        $logical = trim((string)($manifest['logicalPath'] ?? ''));
        if ($logical !== '') {
            return $logical;
        }

        $mime = (string)($manifest['mime'] ?? 'application/octet-stream');
        $suffix = str_contains($mime, 'json') ? '.json' : '.bin';
        return (string)$manifest['id'] . $suffix;
    }

    private function normalizePath(string $path): string
    {
        $path = trim(str_replace('\\', '/', $path));
        $path = preg_replace('#/+#', '/', $path) ?? $path;
        return trim($path, '/');
    }

    private function canUseMode(User $user, string $mode): bool
    {
        if ($mode === 'raw') {
            return $this->perms->canUseRawView($user);
        }

        return $this->perms->canUseNaturalView($user);
    }

    /**
     * @return string[]
     */
    private function visibleEntities(User $user, string $mode): array
    {
        $includeSystem = $mode === 'raw' && $this->canInspectSystemStorage($user);
        return $this->store->listEntities($includeSystem);
    }

    /**
     * @return array<string,mixed>|null
     */
    private function resolveLogicalItem(string $entity, string $needle, bool $includeTombstoned): ?array
    {
        $needle = $this->normalizePath($needle);
        if ($needle === '') {
            return ['type' => 'dir', 'entity' => $entity, 'path' => $entity];
        }

        foreach ($this->store->scanVisibleManifests($entity, PHP_INT_MAX, $includeTombstoned) as $manifest) {
            $logical = $this->manifestPathForExplorer($manifest);
            if ($logical === $needle) {
                return [
                    'type' => 'file',
                    'entity' => $entity,
                    'path' => $entity . '/' . $logical,
                    'manifest' => $manifest,
                    'storageType' => 'logical',
                ];
            }

            if (str_starts_with($logical, $needle . '/')) {
                return [
                    'type' => 'dir',
                    'entity' => $entity,
                    'path' => $entity . '/' . $needle,
                ];
            }
        }

        return null;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function resolveNaturalSystemItem(User $user, string $relPath): ?array
    {
        $relPath = $this->normalizePath($relPath);
        if ($relPath === 'system') {
            return ['type' => 'dir', 'entity' => 'system', 'path' => 'system'];
        }

        $segments = explode('/', $relPath);
        if (count($segments) < 2 || $segments[0] !== 'system') {
            return null;
        }

        $resources = $this->naturalSystemEntities($user);
        $namespace = $segments[1] ?? null;
        if ($namespace === null || !isset($resources[$namespace])) {
            return null;
        }

        $entity = $resources[$namespace];
        if (count($segments) === 2) {
            return ['type' => 'dir', 'entity' => $entity, 'path' => $relPath];
        }

        foreach ($this->store->scanVisibleManifests($entity, PHP_INT_MAX, false) as $manifest) {
            $displayPath = $this->naturalSystemDisplayPath($namespace, $manifest);
            if ($displayPath === $relPath) {
                return [
                    'type' => 'file',
                    'entity' => $entity,
                    'path' => $relPath,
                    'logicalPath' => $displayPath,
                    'manifest' => $manifest,
                    'storageType' => 'logical',
                ];
            }

            if (str_starts_with($displayPath, $relPath . '/')) {
                return [
                    'type' => 'dir',
                    'entity' => $entity,
                    'path' => $relPath,
                ];
            }
        }

        return null;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function resolveNaturalSiteItem(string $relPath): ?array
    {
        $relPath = $this->normalizePath($relPath);
        if ($relPath === 'site') {
            return ['type' => 'dir', 'entity' => PublicWorkspace::FILE_ENTITY, 'path' => 'site'];
        }

        $segments = explode('/', $relPath);
        if (($segments[0] ?? null) !== 'site' || count($segments) < 2) {
            return null;
        }

        $rawEnvironment = (string)($segments[1] ?? '');
        $environment = PublicWorkspace::normalizeEnvironmentRoot($rawEnvironment);
        if ($environment !== $rawEnvironment && $rawEnvironment !== 'published') {
            return null;
        }

        if (count($segments) === 2) {
            return ['type' => 'dir', 'entity' => PublicWorkspace::FILE_ENTITY, 'path' => $relPath];
        }

        if (count($segments) === 3 && in_array($segments[2], self::NATURAL_SITE_DIRS, true)) {
            return ['type' => 'dir', 'entity' => PublicWorkspace::FILE_ENTITY, 'path' => $relPath];
        }

        if (str_ends_with($relPath, '/component.json') && str_contains($relPath, '/components/')) {
            $basePath = substr($relPath, 0, -15);
            return [
                'type' => 'file',
                'entity' => PublicWorkspace::FILE_ENTITY,
                'path' => $relPath,
                'manifest' => [
                    'id' => 'synthetic-component-json',
                    'mime' => 'application/json',
                    'size' => 150,
                ],
                'storageType' => 'synthetic',
                'syntheticContent' => json_encode([
                    'type' => 'sveltekit-component',
                    'path' => $basePath,
                    'exports' => ['default'],
                    'isRoute' => true,
                    'isLayout' => true,
                    'slots' => ['default']
                ])
            ];
        }

        // If the item itself is a component folder, treat it as a synthetic file
        $isComponentFolder = false;
        if (str_contains($relPath, '/components/')) {
            foreach ($this->store->scanVisibleManifests(PublicWorkspace::FILE_ENTITY, PHP_INT_MAX, false) as $manifest) {
                $displayPath = $this->naturalSiteDisplayPath($manifest);
                if (str_starts_with($displayPath, $relPath . '/_app/')) {
                    $isComponentFolder = true;
                    break;
                }
            }
        }

        if ($isComponentFolder) {
            return [
                'type' => 'file',
                'entity' => PublicWorkspace::FILE_ENTITY,
                'path' => $relPath,
                'manifest' => [
                    'id' => 'synthetic-component',
                    'mime' => 'application/json',
                    'size' => 150,
                ],
                'storageType' => 'synthetic',
                'syntheticContent' => json_encode([
                    'type' => 'sveltekit-component',
                    'path' => $relPath,
                    'exports' => ['default'],
                    'isRoute' => true,
                    'isLayout' => true,
                    'slots' => ['default']
                ])
            ];
        }

        foreach ($this->store->scanVisibleManifests(PublicWorkspace::FILE_ENTITY, PHP_INT_MAX, false) as $manifest) {
            $displayPath = $this->naturalSiteDisplayPath($manifest);
            $matchPath = $displayPath;
            
            // Allow routes to be addressed without extension in natural mode
            if (str_starts_with($displayPath, 'site/' . $environment . '/routes/') && 
                (str_ends_with($displayPath, '.php') || str_ends_with($displayPath, '.html') || str_ends_with($displayPath, '.htm'))) {
                $matchPath = preg_replace('/\.(php|html|htm)$/i', '', $displayPath);
            }

            if ($displayPath === $relPath || $matchPath === $relPath) {
                return [
                    'type' => 'file',
                    'entity' => PublicWorkspace::FILE_ENTITY,
                    'path' => $matchPath === $relPath ? $matchPath : $relPath,
                    'logicalPath' => $displayPath,
                    'manifest' => $manifest,
                    'storageType' => 'logical',
                ];
            }

            if (str_starts_with($displayPath, $relPath . '/')) {
                return [
                    'type' => 'dir',
                    'entity' => PublicWorkspace::FILE_ENTITY,
                    'path' => $relPath,
                ];
            }
        }

        return null;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function resolveRawStorageItem(string $entity, string $bucketId, string $needle): ?array
    {
        $needle = $this->normalizePath($needle);
        if ($needle === self::RAW_MANIFESTS_DIR || $needle === self::RAW_CHUNKS_DIR) {
            return [
                'type' => 'dir',
                'entity' => $entity,
                'path' => $entity . '/' . $needle,
            ];
        }

        if (str_starts_with($needle, self::RAW_MANIFESTS_DIR . '/')) {
            $relative = substr($needle, strlen(self::RAW_MANIFESTS_DIR) + 1);
            if ($relative === false || str_contains($relative, '/')) {
                return null;
            }

            if (!preg_match('/^([^\/]+)\.m$/', $relative, $matches)) {
                return null;
            }

            $storageId = $matches[1];
            $manifest = $this->store->getManifestByStorageId($entity, $storageId);
            if ($manifest === null) {
                return null;
            }

            return [
                'type' => 'file',
                'entity' => $entity,
                'path' => $entity . '/' . $needle,
                'manifest' => $manifest,
                'filePath' => $this->rawManifestPath($entity, $storageId),
                'storageType' => 'manifest',
            ];
        }

        if ($needle === self::RAW_CHUNKS_DIR || str_starts_with($needle, self::RAW_CHUNKS_DIR . '/')) {
            $relative = ltrim(substr($needle, strlen(self::RAW_CHUNKS_DIR)), '/');
            $fullPath = $this->rawChunkPathFromRelative($entity, $relative);
            if ($fullPath === null) {
                return null;
            }

            if (is_dir($fullPath)) {
                return [
                    'type' => 'dir',
                    'entity' => $entity,
                    'path' => $entity . '/' . $needle,
                ];
            }

            if (is_file($fullPath) && str_ends_with($fullPath, '.c')) {
                return [
                    'type' => 'file',
                    'entity' => $entity,
                    'path' => $entity . '/' . $needle,
                    'filePath' => $fullPath,
                    'chunkHash' => basename($fullPath, '.c'),
                    'storageType' => 'chunk',
                ];
            }
        }

        return $this->resolveLogicalItem($entity, $needle, true);
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function listRawManifestFiles(string $entity, string $bucketId): array
    {
        $items = [];
        foreach ($this->store->scanAllManifests($entity, PHP_INT_MAX) as $manifest) {
            $storageId = trim((string)($manifest['storageId'] ?? ''));
            if ($storageId === '') {
                continue;
            }

            $fileName = $storageId . '.m';
            $items[] = [
                'name' => $this->rawManifestDisplayName($storageId),
                'type' => 'file',
                'size' => $this->filesystemSize($this->rawManifestPath($entity, $storageId)),
                'rawPath' => $entity . '/' . self::RAW_MANIFESTS_DIR . '/' . $fileName,
                'kind' => 'manifest',
                'manifestId' => $storageId,
                'entity' => $entity,
                'mime' => 'application/octet-stream',
                'ext' => 'm',
                'storage' => [
                    'kind' => 'manifest',
                    'chunkCount' => count($manifest['chunks'] ?? []),
                ],
            ];
        }

        usort($items, static fn(array $a, array $b): int => strcmp((string)$a['name'], (string)$b['name']));
        return $items;
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function listRawChunkChildren(string $entity, string $bucketId, string $relative): array
    {
        $dir = $this->rawChunkPathFromRelative($entity, $relative);
        if ($dir === null || !is_dir($dir)) {
            return [];
        }

        $items = [];
        $entries = scandir($dir);
        if ($entries === false) {
            return [];
        }

        foreach ($entries as $entry) {
            if ($entry === '.' || $entry === '..') {
                continue;
            }

            $childRelative = trim($relative === '' ? $entry : ($relative . '/' . $entry), '/');
            $fullPath = $dir . '/' . $entry;

            if (is_dir($fullPath)) {
                $items[] = [
                    'name' => $entry,
                    'type' => 'dir',
                    'size' => 0,
                    'rawPath' => $entity . '/' . self::RAW_CHUNKS_DIR . '/' . $childRelative,
                    'kind' => 'folder',
                    'entity' => $entity,
                    'storage' => ['kind' => 'raw-dir'],
                ];
                continue;
            }

            if (is_file($fullPath) && str_ends_with($entry, '.c')) {
                $items[] = [
                    'name' => $entry,
                    'type' => 'file',
                    'size' => $this->filesystemSize($fullPath),
                    'rawPath' => $entity . '/' . self::RAW_CHUNKS_DIR . '/' . $childRelative,
                    'kind' => 'chunk',
                    'entity' => $entity,
                    'mime' => 'application/octet-stream',
                    'ext' => 'c',
                    'storage' => ['kind' => 'chunk'],
                ];
            }
        }

        usort($items, static function (array $a, array $b): int {
            if (($a['type'] ?? '') !== ($b['type'] ?? '')) {
                return ($a['type'] ?? '') === 'dir' ? -1 : 1;
            }

            return strcmp((string)$a['name'], (string)$b['name']);
        });

        return $items;
    }

    /**
     * @return array<string,mixed>
     */
    private function logicalFileDetails(array $resolved, string $mode): array
    {
        if (($resolved['storageType'] ?? '') === 'synthetic') {
            return [
                'name' => basename($resolved['path']),
                'rawPath' => $resolved['path'],
                'entity' => $resolved['entity'],
                'mime' => (string)($resolved['manifest']['mime'] ?? 'application/octet-stream'),
                'size' => (int)($resolved['manifest']['size'] ?? 0),
                'ext' => pathinfo($resolved['path'], PATHINFO_EXTENSION),
                'preview' => $resolved['syntheticContent'] ?? null,
                'logicalPath' => $resolved['path'],
                'manifestId' => $resolved['manifest']['id'] ?? '',
            ];
        }

        $manifest = $resolved['manifest'];
        $mime = (string)$manifest['mime'];
        $ext = pathinfo($resolved['path'], PATHINFO_EXTENSION);
        $isText = $this->isPreviewableText($mime, $ext);
        $preview = null;
        if ($isText) {
            $content = $this->store->readContent($resolved['entity'], (string)$manifest['id']);
            $preview = mb_strimwidth($content, 0, 4000, '...');
        }

        $response = [
            'name' => basename($resolved['path']),
            'rawPath' => $resolved['path'],
            'entity' => $resolved['entity'],
            'mime' => $mime,
            'size' => (int)$manifest['size'],
            'ext' => $ext,
            'preview' => $preview,
            'logicalPath' => $resolved['logicalPath'] ?? $manifest['logicalPath'] ?? null,
            'manifestId' => $manifest['id'],
        ];

        if ($mode === 'raw') {
            $response['preview'] = null;
            $response['logicalPath'] = null;
            $response['storage'] = [
                'kind' => 'manifest',
                'chunkCount' => count($manifest['chunks'] ?? []),
                'chunkHashes' => array_map(
                    static fn(array $chunk): string => (string)$chunk['hash'],
                    array_slice($manifest['chunks'] ?? [], 0, 8)
                ),
            ];
        }

        return $response;
    }

    /**
     * @return array<string,mixed>
     */
    private function manifestStorageDetails(array $resolved): array
    {
        $manifest = $resolved['manifest'];
        $manifestId = (string)($manifest['storageId'] ?? basename((string)$resolved['path']));
        return [
            'name' => $this->rawManifestDisplayName($manifestId),
            'rawPath' => (string)$resolved['path'],
            'entity' => (string)$resolved['entity'],
            'mime' => 'application/octet-stream',
            'size' => $this->filesystemSize((string)$resolved['filePath']),
            'ext' => 'm',
            'preview' => null,
            'logicalPath' => null,
            'manifestId' => $manifestId,
            'storage' => [
                'kind' => 'manifest',
                'chunkCount' => count($manifest['chunks'] ?? []),
                'chunkHashes' => array_map(
                    static fn(array $chunk): string => (string)$chunk['hash'],
                    array_slice($manifest['chunks'] ?? [], 0, 8)
                ),
            ],
        ];
    }

    /**
     * @return array<string,mixed>
     */
    private function chunkStorageDetails(array $resolved): array
    {
        $chunkHash = (string)($resolved['chunkHash'] ?? '');
        $entity = (string)$resolved['entity'];
        $references = $entity === '' ? [] : $this->chunkReferences($entity, $chunkHash);

        return [
            'name' => basename((string)$resolved['path']),
            'rawPath' => (string)$resolved['path'],
            'entity' => (string)$resolved['entity'],
            'mime' => 'application/octet-stream',
            'size' => $this->filesystemSize((string)$resolved['filePath']),
            'ext' => 'c',
            'preview' => $this->hexPreview((string)$resolved['filePath']),
            'logicalPath' => null,
            'manifestId' => $references[0]['manifestId'] ?? $chunkHash,
            'storage' => [
                'kind' => 'chunk',
                'chunkHash' => $chunkHash,
                'referenceCount' => count($references),
                'references' => $references,
            ],
        ];
    }

    /**
     * @return array<int,array<string,string>>
     */
    private function chunkReferences(string $entity, string $chunkHash): array
    {
        $references = [];
        $bucketId = $this->store->bucketIdForEntity($entity);
        foreach ($this->store->scanAllManifests($entity, PHP_INT_MAX) as $manifest) {
            $hashes = $this->store->manifestChunkHashes($manifest);
            if (!in_array($chunkHash, $hashes, true)) {
                continue;
            }

            $references[] = [
                'entity' => $bucketId,
                'manifestId' => (string)($manifest['storageId'] ?? ''),
            ];
        }

        return $references;
    }

    private function prettyJson(array $value): string
    {
        return (string)json_encode($value, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }

    private function hexPreview(string $filePath): ?string
    {
        $bytes = @file_get_contents($filePath);
        if ($bytes === false || $bytes === '') {
            return null;
        }

        $sample = substr($bytes, 0, 96);
        $hex = trim(chunk_split(bin2hex($sample), 2, ' '));
        return strlen($bytes) > 96 ? $hex . ' ...' : $hex;
    }

    private function rawStorageDirItem(string $entityName, string $name): array
    {
        return [
            'name' => $name,
            'type' => 'dir',
            'size' => 0,
            'rawPath' => $entityName . '/' . $name,
            'kind' => 'folder',
            'entity' => $entityName,
            'storage' => ['kind' => 'raw-dir'],
        ];
    }

    private function rawManifestDisplayName(string $manifestId): string
    {
        return $manifestId;
    }

    /**
     * @return array<string,mixed>
     */
    private function naturalSiteDirItem(string $name, string $logicalPath, string $kind = 'folder'): array
    {
        return [
            'name' => $name,
            'type' => 'dir',
            'size' => 0,
            'rawPath' => $logicalPath,
            'kind' => $kind,
            'entity' => PublicWorkspace::FILE_ENTITY,
            'logicalPath' => $logicalPath,
        ];
    }

    /**
     * @param array<string,mixed> $manifest
     * @return array<string,mixed>
     */
    private function logicalFileListItem(string $entity, string $name, string $childPath, array $manifest): array
    {
        $mime = (string)($manifest['mime'] ?? 'application/octet-stream');
        $logicalPath = (string)($manifest['logicalPath'] ?? $name);
        $ext = strtolower(pathinfo($logicalPath, PATHINFO_EXTENSION));
        $item = [
            'name' => $name,
            'type' => 'file',
            'size' => (int)($manifest['size'] ?? 0),
            'rawPath' => $childPath,
            'kind' => $this->kindFromMime($mime),
            'manifestId' => (string)($manifest['id'] ?? ''),
            'entity' => $entity,
            'mime' => $mime,
            'logicalPath' => $logicalPath,
            'storage' => [
                'kind' => 'logical',
                'chunkCount' => count($manifest['chunks'] ?? []),
            ],
        ];

        if ($ext !== '') {
            $item['ext'] = $ext;
        }

        $preview = $this->cheapInlinePreview($entity, $manifest, $mime, $ext);
        if ($preview !== null) {
            $item['preview'] = $preview;
        }

        return $item;
    }

    /**
     * @param array<string,mixed> $manifest
     */
    private function naturalSiteDisplayPath(array $manifest): string
    {
        $logicalPath = $this->normalizePath((string)($manifest['logicalPath'] ?? ''));
        if ($logicalPath !== '' && str_starts_with($logicalPath, 'site/')) {
            return $logicalPath;
        }

        if ($logicalPath !== '' && preg_match('#^public/[^/]+/([^/]+)/(.*)$#', $logicalPath, $matches)) {
            return PublicWorkspace::siteLogicalPathForStoredPath($matches[1], $matches[2]);
        }

        $indexes = is_array($manifest['indexes'] ?? null) ? $manifest['indexes'] : [];
        $root = (string)($indexes['root'] ?? PublicWorkspace::ROOT_PRODUCTION);
        $publicPath = (string)($indexes['publicPath'] ?? '');
        if ($publicPath === '') {
            $publicPath = basename((string)($manifest['id'] ?? 'index.html'));
        }

        return PublicWorkspace::siteLogicalPathForStoredPath($root, $publicPath);
    }

    /**
     * @param array<string,mixed> $manifest
     * @return array<string,mixed>
     */
    private function naturalSiteFileListItem(string $name, string $logicalPath, array $manifest): array
    {
        $mime = (string)($manifest['mime'] ?? 'application/octet-stream');
        $ext = strtolower(pathinfo($logicalPath, PATHINFO_EXTENSION));
        $item = [
            'name' => $name,
            'type' => 'file',
            'size' => (int)($manifest['size'] ?? 0),
            'rawPath' => $logicalPath,
            'kind' => $this->kindFromMime($mime),
            'manifestId' => (string)($manifest['id'] ?? ''),
            'entity' => PublicWorkspace::FILE_ENTITY,
            'mime' => $mime,
            'logicalPath' => $logicalPath,
            'storage' => [
                'kind' => 'logical',
                'chunkCount' => count($manifest['chunks'] ?? []),
            ],
        ];

        if ($ext !== '') {
            $item['ext'] = $ext;
        }

        $preview = $this->cheapInlinePreview(PublicWorkspace::FILE_ENTITY, $manifest, $mime, $ext);
        if ($preview !== null) {
            $item['preview'] = $preview;
        }

        return $item;
    }

    private function entityHasManifests(string $entity): bool
    {
        return $this->store->scanAllManifests($entity, 1) !== [];
    }

    private function entityHasChunks(string $entity): bool
    {
        return is_dir($this->rawChunksRoot($entity));
    }

    private function rawManifestPath(string $entity, string $manifestId): string
    {
        return $this->store->rawManifestFilePath($entity, $manifestId);
    }

    private function rawChunksRoot(string $entity): string
    {
        return $this->store->rawChunksRoot($entity);
    }

    private function rawChunkPathFromRelative(string $entity, string $relative): ?string
    {
        $relative = $this->normalizePath($relative);
        if ($relative !== '' && preg_match('#(^|/)\.\.(?:/|$)#', $relative)) {
            return null;
        }

        $root = $this->rawChunksRoot($entity);
        return $relative === '' ? $root : ($root . '/' . $relative);
    }

    private function filesystemSize(string $path): int
    {
        $size = @filesize($path);
        return $size === false ? 0 : (int)$size;
    }

    private function canInspectSystemStorage(User $user): bool
    {
        return $this->perms->canInspectSystemStorage($user);
    }

    /**
     * @return array<string,string>
     */
    private function naturalSystemEntities(User $user): array
    {
        $entities = [];

        if ($this->perms->canViewUsers($user) && $this->store->scanVisibleManifests(Store::ENTITY_SYSTEM_USERS, 1) !== []) {
            $entities['users'] = Store::ENTITY_SYSTEM_USERS;
        }

        if ($this->perms->canViewRoles($user) && $this->store->scanVisibleManifests(Store::ENTITY_SYSTEM_ROLES, 1) !== []) {
            $entities['roles'] = Store::ENTITY_SYSTEM_ROLES;
        }

        if ($this->perms->canViewSettings($user) && $this->store->scanVisibleManifests(Store::ENTITY_SYSTEM_SETTINGS, 1) !== []) {
            $entities['settings'] = Store::ENTITY_SYSTEM_SETTINGS;
        }

        return $entities;
    }

    private function rawBucketEntity(User $user, string $bucketId): ?string
    {
        $bucketId = trim($bucketId);
        if ($bucketId === '') {
            return null;
        }

        foreach ($this->visibleEntities($user, 'raw') as $entity) {
            if ($this->store->bucketIdForEntity($entity) === $bucketId) {
                return $entity;
            }
        }

        return null;
    }

    private function rawBucketEntityFromValue(string $bucketId): ?string
    {
        $bucketId = trim($bucketId);
        if ($bucketId === '') {
            return null;
        }

        foreach ($this->store->listEntities(true) as $entity) {
            if ($this->store->bucketIdForEntity($entity) === $bucketId) {
                return $entity;
            }
        }

        return null;
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function listNaturalSystemNamespaceChildren(string $entity, string $namespace, string $subpath): array
    {
        $prefix = trim('system/' . $namespace, '/');
        $subpath = $this->normalizePath($subpath);
        $basePath = $subpath === '' ? $prefix : ($prefix . '/' . $subpath);
        $children = [];

        foreach ($this->store->scanVisibleManifests($entity, PHP_INT_MAX, false) as $manifest) {
            $fullPath = $this->naturalSystemDisplayPath($namespace, $manifest);
            if ($subpath !== '') {
                if ($fullPath === $basePath) {
                    continue;
                }

                if (!str_starts_with($fullPath, $basePath . '/')) {
                    continue;
                }

                $relative = substr($fullPath, strlen($basePath) + 1);
            } else {
                if (!str_starts_with($fullPath, $prefix . '/')) {
                    continue;
                }

                $relative = substr($fullPath, strlen($prefix) + 1);
            }

            if ($relative === false || $relative === '') {
                continue;
            }

            $parts = explode('/', $relative);
            $name = $parts[0];
            if ($name === '') {
                continue;
            }

            if (count($parts) > 1) {
                $children[$name] ??= [
                    'name' => $name,
                    'type' => 'dir',
                    'size' => 0,
                    'rawPath' => trim($basePath . '/' . $name, '/'),
                    'kind' => 'folder',
                    'entity' => $entity,
                ];
                continue;
            }

            $children[$name] = $this->naturalSystemFileListItem($entity, $name, $fullPath, $manifest);
        }

        ksort($children, SORT_STRING);
        return array_values($children);
    }

    /**
     * @param array<string,mixed> $manifest
     */
    private function naturalSystemDisplayPath(string $namespace, array $manifest): string
    {
        $manifestId = (string)($manifest['id'] ?? '');
        if ($namespace === 'settings' && $manifestId === 'tenant') {
            return 'system/settings/settings.json';
        }

        $logicalPath = trim((string)($manifest['logicalPath'] ?? ''));
        $prefix = 'system/' . $namespace . '/';
        if ($logicalPath !== '' && str_starts_with($logicalPath, $prefix)) {
            return $logicalPath;
        }

        return trim($prefix . ($manifestId !== '' ? $manifestId . '.json' : 'unknown.json'), '/');
    }

    /**
     * @param array<string,mixed> $manifest
     * @return array<string,mixed>
     */
    private function naturalSystemFileListItem(string $entity, string $name, string $logicalPath, array $manifest): array
    {
        $mime = (string)($manifest['mime'] ?? 'application/octet-stream');
        $ext = strtolower(pathinfo($logicalPath, PATHINFO_EXTENSION));
        $item = [
            'name' => $name,
            'type' => 'file',
            'size' => (int)($manifest['size'] ?? 0),
            'rawPath' => $entity . '/' . $logicalPath,
            'kind' => $this->kindFromMime($mime),
            'manifestId' => (string)($manifest['id'] ?? ''),
            'entity' => $entity,
            'mime' => $mime,
            'logicalPath' => $logicalPath,
            'storage' => [
                'kind' => 'logical',
                'chunkCount' => count($manifest['chunks'] ?? []),
            ],
        ];

        if ($ext !== '') {
            $item['ext'] = $ext;
        }

        $preview = $this->cheapInlinePreview($entity, $manifest, $mime, $ext);
        if ($preview !== null) {
            $item['preview'] = $preview;
        }

        return $item;
    }

    private function hasNaturalSystemResources(User $user): bool
    {
        return $this->naturalSystemEntities($user) !== [];
    }

    private function isPreviewableText(string $mime, string $ext): bool
    {
        if (str_starts_with($mime, 'text/')) {
            return true;
        }

        return in_array(
            strtolower($ext),
            ['json', 'txt', 'md', 'php', 'js', 'jsx', 'ts', 'tsx', 'css', 'html', 'xml', 'log', 'sql', 'yml', 'yaml', 'sh', 'bat', 'ps1', 'svelte'],
            true
        );
    }

    private function cheapInlinePreview(string $entity, array $manifest, string $mime, string $ext): ?string
    {
        $size = (int)($manifest['size'] ?? 0);
        $chunks = is_array($manifest['chunks'] ?? null) ? $manifest['chunks'] : [];
        if ($size <= 0 || $size > self::INLINE_PREVIEW_BYTES || count($chunks) !== 1) {
            return null;
        }

        if (!$this->isPreviewableText($mime, $ext)) {
            return null;
        }

        try {
            return mb_strimwidth($this->store->readContentFromManifest($entity, $manifest), 0, 512, '...');
        } catch (Throwable) {
            return null;
        }
    }

    private function kindFromMime(string $mime): string
    {
        if (str_starts_with($mime, 'image/')) {
            return 'image';
        }
        if (str_starts_with($mime, 'video/')) {
            return 'video';
        }
        if (str_contains($mime, 'json') || str_starts_with($mime, 'text/')) {
            return 'text';
        }

        return 'file';
    }
}
