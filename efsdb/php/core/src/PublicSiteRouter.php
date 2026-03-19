<?php
declare(strict_types=1);

require_once __DIR__ . '/DeliveryModeResolver.php';
require_once __DIR__ . '/PublicWorkspace.php';
require_once __DIR__ . '/User.php';

final class PublicSiteRouter
{
    /**
     * @var list<string>
     */
    private const EXACT_FILE_EXTENSIONS = [
        'css',
        'gif',
        'htm',
        'html',
        'ico',
        'jpeg',
        'jpg',
        'js',
        'json',
        'map',
        'mjs',
        'cjs',
        'otf',
        'png',
        'svg',
        'ttf',
        'wasm',
        'webp',
        'woff',
        'woff2',
        'xml',
        'txt',
    ];

    private const TRAILING_ALWAYS = 'always';
    private const TRAILING_NEVER = 'never';
    private const TRAILING_IGNORE = 'ignore';

    public function __construct(
        private readonly PublicWorkspace $workspace,
        private readonly DeliveryModeResolver $deliveryModes
    ) {}

    /**
     * @return array{status:int,headers:array<string,string>,body:string}|null
     */
    public function handle(string $uriPath, string $method, User $user): ?array
    {
        [$root, $relativePath] = $this->selectRoot($uriPath);
        if ($root === 'published' && !$this->workspace->isRootEnabled('published')) {
            return null;
        }

        if (!$this->workspace->canReadRoot($root, $user)) {
            return $this->notFound($method);
        }

        $mode = $this->deliveryModes->resolve($root);
        $request = $this->normalizeRequest($relativePath);
        if ($request === null) {
            return $this->badRequest($method);
        }

        if (!in_array($method, ['GET', 'HEAD'], true)) {
            return null;
        }

        if ($mode === 'php-html') {
            return $this->serveCandidates($root, $method, $this->phpHtmlCandidates($request));
        }

        if ($mode === 'sveltekit-php-adapter') {
            $adapter = $this->adapterConfig($root);
            $adapterRequest = $this->applyAdapterBasePath($request, $adapter['basePath']);
            if ($adapterRequest === null) {
                return $this->notFound($method);
            }

            if ($this->isUnsupportedActionPath($adapterRequest['normalized'])) {
                return $this->notImplemented($method);
            }

            return $this->serveCandidates($root, $method, $this->adapterCandidates($adapterRequest, $adapter));
        }

        if ($mode !== 'php-html') {
            return $this->serviceUnavailable($method);
        }

        return $this->serviceUnavailable($method);
    }

    /**
     * @param list<string> $candidates
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function serveCandidates(string $root, string $method, array $candidates): array
    {
        foreach ($candidates as $candidate) {
            $item = $this->workspace->readFile($root, $candidate);
            if ($item === null) {
                continue;
            }

            return $this->success($method, $item['manifest'], (string)$item['bytes']);
        }

        return $this->notFound($method);
    }

    /**
     * @return array{0:string,1:string}
     */
    private function selectRoot(string $uriPath): array
    {
        if ($uriPath === '/staging' || str_starts_with($uriPath, '/staging/')) {
            $relative = substr($uriPath, strlen('/staging'));
            return ['staging', $relative === false ? '/' : $relative];
        }

        return ['published', $uriPath];
    }

    /**
     * @return list<string>|null
     */
    private function normalizeRequest(string $relativePath): ?array
    {
        $decoded = rawurldecode($relativePath);
        $decoded = str_replace('\\', '/', $decoded);
        $hadTrailingSlash = $decoded !== '' && str_ends_with($decoded, '/');
        $normalized = preg_replace('#/+#', '/', $decoded) ?? $decoded;
        $normalized = ltrim($normalized, '/');
        $segments = $normalized === '' ? [] : explode('/', trim($normalized, '/'));
        foreach ($segments as $segment) {
            if ($segment === '.' || $segment === '..') {
                return null;
            }
        }

        return [
            'normalized' => $normalized,
            'hadTrailingSlash' => $hadTrailingSlash,
        ];
    }

    /**
     * @param array{normalized:string,hadTrailingSlash:bool} $request
     * @return list<string>
     */
    private function phpHtmlCandidates(array $request): array
    {
        $normalized = $request['normalized'];
        $hadTrailingSlash = $request['hadTrailingSlash'];

        if ($normalized === '') {
            return ['index.html'];
        }

        $base = ltrim($normalized, '/');
        if ($hadTrailingSlash) {
            $dir = rtrim($base, '/');
            return [$dir . '/', $dir . '/index.html'];
        }

        return [$base, $base . '/index.html'];
    }

    /**
     * @param array{normalized:string,hadTrailingSlash:bool} $request
     * @return list<string>
     */
    private function adapterCandidates(array $request, array $adapter): array
    {
        $normalized = $request['normalized'];
        $hadTrailingSlash = $request['hadTrailingSlash'];
        $trailingSlash = $adapter['trailingSlash'] ?? self::TRAILING_IGNORE;

        if ($normalized === '') {
            return ['index.html'];
        }

        $base = ltrim($normalized, '/');
        $routeBase = rtrim($base, '/');
        if ($routeBase === '') {
            return ['index.html'];
        }

        if ($this->isExactAdapterFilePath($routeBase)) {
            return [$routeBase];
        }

        if ($trailingSlash === self::TRAILING_ALWAYS) {
            return [$routeBase . '/index.html'];
        }

        if ($trailingSlash === self::TRAILING_NEVER) {
            return [$routeBase . '.html'];
        }

        if ($hadTrailingSlash) {
            return [$routeBase . '/index.html', $routeBase . '.html', $routeBase];
        }

        return [$routeBase, $routeBase . '.html', $routeBase . '/index.html'];
    }

    private function isExactAdapterFilePath(string $path): bool
    {
        $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));
        return $extension !== '' && in_array($extension, self::EXACT_FILE_EXTENSIONS, true);
    }

    private function isUnsupportedActionPath(string $path): bool
    {
        return (bool)preg_match('#(^|/)__action(?:/|$)#', $path);
    }

    /**
     * @return array{basePath:string,trailingSlash:string,appDir:string,assetPrefixes:list<string>}
     */
    private function adapterConfig(string $root): array
    {
        $rootDoc = $this->workspace->getRoot($root, false);
        $adapter = is_array($rootDoc['adapter'] ?? null) ? $rootDoc['adapter'] : [];
        $appDir = trim((string)($adapter['appDir'] ?? '_app'), '/');
        $assetPrefixes = is_array($adapter['assetPrefixes'] ?? null)
            ? array_values(array_unique(array_filter(array_map(
                static fn(mixed $value): string => trim((string)$value, '/'),
                $adapter['assetPrefixes']
            ), static fn(string $value): bool => $value !== '')))
            : [];
        if ($appDir !== '' && !in_array($appDir, $assetPrefixes, true)) {
            array_unshift($assetPrefixes, $appDir);
        }

        return [
            'basePath' => $this->normalizeBasePath($adapter['basePath'] ?? '/'),
            'trailingSlash' => $this->normalizeTrailingSlash($adapter['trailingSlash'] ?? self::TRAILING_IGNORE),
            'appDir' => $appDir === '' ? '_app' : $appDir,
            'assetPrefixes' => $assetPrefixes,
        ];
    }

    /**
     * @param array{normalized:string,hadTrailingSlash:bool} $request
     * @return array{normalized:string,hadTrailingSlash:bool}|null
     */
    private function applyAdapterBasePath(array $request, string $basePath): ?array
    {
        if ($basePath === '/') {
            return $request;
        }

        $prefix = trim($basePath, '/');
        $normalized = $request['normalized'];
        if ($normalized === $prefix) {
            return [
                'normalized' => '',
                'hadTrailingSlash' => $request['hadTrailingSlash'],
            ];
        }

        if (!str_starts_with($normalized . '/', $prefix . '/')) {
            return null;
        }

        $stripped = ltrim(substr($normalized, strlen($prefix)), '/');
        return [
            'normalized' => $stripped,
            'hadTrailingSlash' => $request['hadTrailingSlash'],
        ];
    }

    private function normalizeBasePath(mixed $value): string
    {
        if (!is_scalar($value)) {
            return '/';
        }

        $value = trim((string)$value);
        if ($value === '' || $value === '/') {
            return '/';
        }

        $value = '/' . trim(str_replace('\\', '/', $value), '/');
        return $value === '/' ? '/' : rtrim($value, '/');
    }

    private function normalizeTrailingSlash(mixed $value): string
    {
        if (!is_scalar($value)) {
            return self::TRAILING_IGNORE;
        }

        $value = strtolower(trim((string)$value));
        return match ($value) {
            self::TRAILING_ALWAYS => self::TRAILING_ALWAYS,
            self::TRAILING_NEVER => self::TRAILING_NEVER,
            default => self::TRAILING_IGNORE,
        };
    }

    /**
     * @param array<string,mixed> $manifest
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function success(string $method, array $manifest, string $bytes): array
    {
        return [
            'status' => 200,
            'headers' => [
                'Content-Type' => (string)($manifest['mime'] ?? 'application/octet-stream'),
                'Content-Length' => (string)strlen($bytes),
                'X-EFSDB-Manifest' => (string)($manifest['id'] ?? ''),
                'X-EFSDB-Logical-Path' => (string)($manifest['logicalPath'] ?? ''),
            ],
            'body' => $method === 'HEAD' ? '' : $bytes,
        ];
    }

    /**
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function notFound(string $method): array
    {
        return [
            'status' => 404,
            'headers' => [],
            'body' => $method === 'HEAD' ? '' : '404 Not Found (EFSDB)',
        ];
    }

    /**
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function badRequest(string $method): array
    {
        return [
            'status' => 400,
            'headers' => [],
            'body' => $method === 'HEAD' ? '' : '400 Bad Request (EFSDB)',
        ];
    }

    /**
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function notImplemented(string $method): array
    {
        return [
            'status' => 501,
            'headers' => ['Content-Type' => 'text/plain; charset=utf-8'],
            'body' => $method === 'HEAD' ? '' : '501 Not Implemented (EFSDB)',
        ];
    }

    /**
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function serviceUnavailable(string $method): array
    {
        return [
            'status' => 503,
            'headers' => ['Content-Type' => 'text/plain; charset=utf-8'],
            'body' => $method === 'HEAD' ? '' : '503 Service Unavailable (EFSDB adapter pending)',
        ];
    }
}
