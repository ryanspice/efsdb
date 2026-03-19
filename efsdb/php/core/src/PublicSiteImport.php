<?php
declare(strict_types=1);

require_once __DIR__ . '/Audit.php';
require_once __DIR__ . '/PublicWorkspace.php';

final class PublicSiteImport
{
    public function __construct(
        private readonly PublicWorkspace $workspace,
        private readonly Audit $audit
    ) {}

    /**
     * @param array<string,mixed> $options
     * @return array<string,mixed>
     */
    public function importDirectory(string $sourceDir, array $options = []): array
    {
        $sourceDir = $this->normalizeFilesystemPath($sourceDir);
        if (!is_dir($sourceDir)) {
            throw new RuntimeException("Import source directory does not exist: $sourceDir");
        }

        $root = $this->normalizeRoot((string)($options['root'] ?? 'published'));
        $prefix = $this->normalizePrefix((string)($options['prefix'] ?? ''));
        $chunkSize = isset($options['chunkSize']) ? max(1, (int)$options['chunkSize']) : null;
        $deliveryMode = $this->normalizeOptionalString($options['deliveryMode'] ?? null);
        $importedAt = gmdate('c');

        $rootDoc = $this->workspace->getRoot($root, true) ?? [];
        $existingAdapter = is_array($rootDoc['adapter'] ?? null) ? $rootDoc['adapter'] : [];
        $rootUpdates = ['enabled' => true];
        if ($deliveryMode !== null) {
            $rootUpdates['deliveryMode'] = $deliveryMode;
        }
        $this->workspace->setRootConfig($root, $rootUpdates);

        $imported = 0;
        $relativePaths = [];
        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($sourceDir, FilesystemIterator::SKIP_DOTS)
        );

        foreach ($iterator as $file) {
            if (!$file instanceof SplFileInfo || !$file->isFile()) {
                continue;
            }

            $absolutePath = $this->normalizeFilesystemPath($file->getPathname());
            $relativePath = ltrim(substr($absolutePath, strlen($sourceDir)), '/');
            if ($relativePath === '' || $this->isIgnoredFile($relativePath)) {
                continue;
            }

            $logicalPath = $prefix === '' ? $relativePath : ($prefix . '/' . $relativePath);
            $logicalPath = preg_replace('#/+#', '/', str_replace('\\', '/', $logicalPath)) ?? $logicalPath;
            $bytes = file_get_contents($absolutePath);
            if ($bytes === false) {
                throw new RuntimeException("Unable to read import file: $absolutePath");
            }

            $this->workspace->writeFile($root, $logicalPath, $bytes, [
                'mime' => $this->guessMime($logicalPath),
                'chunkSize' => $chunkSize,
            ]);

            $imported++;
            $relativePaths[] = ltrim(str_replace('\\', '/', $logicalPath), '/');
        }

        sort($relativePaths, SORT_STRING);

        $adapter = $this->buildAdapterMetadata($existingAdapter, $prefix, $options, $importedAt, $imported);
        $finalRootUpdates = [
            'enabled' => true,
            'adapter' => $adapter,
        ];
        if ($deliveryMode !== null) {
            $finalRootUpdates['deliveryMode'] = $deliveryMode;
        }
        $this->workspace->setRootConfig($root, $finalRootUpdates);

        $summary = [
            'root' => $root,
            'imported' => $imported,
            'prefix' => $prefix,
            'deliveryMode' => $deliveryMode,
            'adapter' => $adapter,
            'paths' => $relativePaths,
        ];

        $this->audit->record('public_site.imported', [
            'root' => $root,
            'imported' => $imported,
            'prefix' => $prefix,
            'deliveryMode' => $deliveryMode ?? ($rootDoc['deliveryMode'] ?? 'php-html'),
            'pathCount' => count($relativePaths),
        ]);

        return $summary;
    }

    /**
     * @param array<string,mixed> $existing
     * @param array<string,mixed> $options
     * @return array<string,mixed>
     */
    private function buildAdapterMetadata(array $existing, string $prefix, array $options, string $importedAt, int $imported): array
    {
        $assetPrefixes = is_array($existing['assetPrefixes'] ?? null)
            ? array_values(array_map('strval', $existing['assetPrefixes']))
            : [];
        if ($prefix !== '' && !in_array($prefix, $assetPrefixes, true)) {
            $assetPrefixes[] = $prefix;
            sort($assetPrefixes, SORT_STRING);
        }

        $adapter = $existing;
        $adapter['kind'] = 'static-prerender';
        $adapter['lastImportedAt'] = $importedAt;
        $adapter['lastImportKind'] = $prefix === '' ? 'prerender' : 'assets';
        $adapter['assetPrefixes'] = $assetPrefixes;
        $imports = is_array($existing['imports'] ?? null) ? $existing['imports'] : [];
        $imports[$prefix === '' ? 'prerender' : 'assets'] = array_filter([
            'importedAt' => $importedAt,
            'pathCount' => $imported,
            'prefix' => $prefix === '' ? null : $prefix,
        ], static fn(mixed $value): bool => $value !== null);
        $adapter['imports'] = $imports;

        $appDir = $this->normalizeOptionalString($options['appDir'] ?? null);
        if ($appDir !== null) {
            $adapter['appDir'] = $appDir;
        }

        $basePath = $this->normalizeBasePath($options['basePath'] ?? null);
        if ($basePath !== null) {
            $adapter['basePath'] = $basePath;
        }

        $trailingSlash = $this->normalizeTrailingSlash($options['trailingSlash'] ?? null);
        if ($trailingSlash !== null) {
            $adapter['trailingSlash'] = $trailingSlash;
        }

        return $adapter;
    }

    private function normalizeRoot(string $root): string
    {
        $root = strtolower(trim($root));
        return $root === 'staging' ? 'staging' : 'published';
    }

    private function normalizePrefix(string $prefix): string
    {
        $prefix = trim(str_replace('\\', '/', $prefix));
        $prefix = preg_replace('#/+#', '/', $prefix) ?? $prefix;
        return trim($prefix, '/');
    }

    private function normalizeBasePath(mixed $value): ?string
    {
        if ($value === null) {
            return null;
        }

        $value = $this->normalizeOptionalString($value);
        if ($value === null || $value === '') {
            return '/';
        }

        $value = '/' . trim(str_replace('\\', '/', $value), '/');
        return $value === '/' ? '/' : rtrim($value, '/');
    }

    private function normalizeTrailingSlash(mixed $value): ?string
    {
        $value = $this->normalizeOptionalString($value);
        if ($value === null) {
            return null;
        }

        $value = strtolower($value);
        return in_array($value, ['always', 'never', 'ignore'], true) ? $value : null;
    }

    private function normalizeOptionalString(mixed $value): ?string
    {
        if (!is_scalar($value)) {
            return null;
        }

        $value = trim((string)$value);
        return $value === '' ? null : $value;
    }

    private function normalizeFilesystemPath(string $path): string
    {
        return rtrim(str_replace('\\', '/', $path), '/');
    }

    private function isIgnoredFile(string $path): bool
    {
        $path = str_replace('\\', '/', $path);
        return str_ends_with($path, '.DS_Store') || str_ends_with($path, 'Thumbs.db');
    }

    private function guessMime(string $path): string
    {
        $path = strtolower($path);
        return match (true) {
            str_ends_with($path, '.html') => 'text/html; charset=utf-8',
            str_ends_with($path, '.json') => 'application/json; charset=utf-8',
            str_ends_with($path, '.txt') => 'text/plain; charset=utf-8',
            str_ends_with($path, '.css') => 'text/css; charset=utf-8',
            str_ends_with($path, '.js'), str_ends_with($path, '.mjs'), str_ends_with($path, '.cjs') => 'application/javascript; charset=utf-8',
            str_ends_with($path, '.map') => 'application/json; charset=utf-8',
            str_ends_with($path, '.svg') => 'image/svg+xml',
            str_ends_with($path, '.png') => 'image/png',
            str_ends_with($path, '.jpg'), str_ends_with($path, '.jpeg') => 'image/jpeg',
            str_ends_with($path, '.gif') => 'image/gif',
            str_ends_with($path, '.webp') => 'image/webp',
            str_ends_with($path, '.ico') => 'image/x-icon',
            str_ends_with($path, '.woff') => 'font/woff',
            str_ends_with($path, '.woff2') => 'font/woff2',
            str_ends_with($path, '.ttf') => 'font/ttf',
            str_ends_with($path, '.otf') => 'font/otf',
            str_ends_with($path, '.xml') => 'application/xml; charset=utf-8',
            str_ends_with($path, '.wasm') => 'application/wasm',
            default => 'application/octet-stream',
        };
    }
}
