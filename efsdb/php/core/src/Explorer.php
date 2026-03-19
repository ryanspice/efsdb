<?php
declare(strict_types=1);

require_once __DIR__ . '/Permissions.php';
require_once __DIR__ . '/Store.php';
require_once __DIR__ . '/User.php';

final class Explorer
{
    public function __construct(
        private readonly Store $store,
        private readonly Permissions $perms
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
            foreach ($visibleEntities as $entity) {
                $items[] = [
                    'name' => $entity,
                    'type' => 'dir',
                    'size' => 0,
                    'rawPath' => $entity,
                    'kind' => str_starts_with($entity, 'system_') ? 'system' : 'entity',
                ];
            }

            return ['path' => '', 'mode' => $mode, 'items' => $items];
        }

        $entity = array_shift($segments);
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
            'logicalPath' => $manifest['logicalPath'] ?? null,
            'manifestId' => $manifest['id'],
        ];

        if ($mode === 'raw') {
            $response['storage'] = [
                'manifest' => $manifest,
                'chunkCount' => count($manifest['chunks'] ?? []),
                'chunkHashes' => array_map(
                    static fn(array $chunk): string => (string)$chunk['hash'],
                    array_slice($manifest['chunks'] ?? [], 0, 8)
                ),
            ];
        }

        return $response;
    }

    public function hasFile(User $user, string $relPath, string $mode = 'natural'): bool
    {
        if (!$this->canUseMode($user, $mode)) {
            return false;
        }

        $resolved = $this->resolveItem($user, $relPath, $mode);
        return $resolved !== null && $resolved['type'] === 'file';
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

        $segments = explode('/', $relPath);
        $entity = array_shift($segments);
        if ($entity === null || !in_array($entity, $this->visibleEntities($user, $mode), true)) {
            return null;
        }

        $needle = implode('/', $segments);
        if ($needle === '') {
            return ['type' => 'dir', 'entity' => $entity, 'path' => $entity];
        }

        foreach ($this->manifestsForMode($entity, $mode) as $manifest) {
            $logical = $this->manifestPathForExplorer($manifest);
            if ($logical === $needle) {
                return [
                    'type' => 'file',
                    'entity' => $entity,
                    'path' => $entity . '/' . $logical,
                    'manifest' => $manifest,
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
     * @return array<int,array<string,mixed>>
     */
    private function listEntityChildren(string $entity, string $subpath, string $mode): array
    {
        $subpath = $this->normalizePath($subpath);
        $children = [];

        foreach ($this->manifestsForMode($entity, $mode) as $manifest) {
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
                ];
                continue;
            }

            $children[$name] = [
                'name' => $name,
                'type' => 'file',
                'size' => (int)$manifest['size'],
                'rawPath' => $childPath,
                'kind' => $this->kindFromMime((string)$manifest['mime']),
                'manifestId' => $manifest['id'],
            ];
        }

        ksort($children, SORT_STRING);
        return array_values($children);
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

    private function canInspectSystemStorage(User $user): bool
    {
        return $this->perms->canManageUsers($user)
            || $this->perms->canManageRoles($user)
            || $this->perms->canManageSettings($user);
    }

    private function isPreviewableText(string $mime, string $ext): bool
    {
        if (str_starts_with($mime, 'text/')) {
            return true;
        }

        return in_array(strtolower($ext), ['json', 'txt', 'md', 'php', 'js', 'css', 'html', 'xml', 'log'], true);
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
