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

        if ($mode === 'sveltekit-php-adapter' && $this->isUnsupportedActionPath($request['normalized'])) {
            return $this->notImplemented($method);
        }

        if (!in_array($method, ['GET', 'HEAD'], true)) {
            return null;
        }

        if ($mode === 'php-html') {
            return $this->serveCandidates($root, $method, $this->phpHtmlCandidates($request));
        }

        if ($mode === 'sveltekit-php-adapter') {
            return $this->serveCandidates($root, $method, $this->adapterCandidates($request));
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
    private function adapterCandidates(array $request): array
    {
        $normalized = $request['normalized'];
        $hadTrailingSlash = $request['hadTrailingSlash'];

        if ($normalized === '') {
            return ['index.html'];
        }

        $base = ltrim($normalized, '/');
        if ($this->isExactAdapterFilePath($base)) {
            return [$base];
        }

        if ($hadTrailingSlash) {
            return [rtrim($base, '/') . '/index.html'];
        }

        return [$base, $base . '.html', $base . '/index.html'];
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
