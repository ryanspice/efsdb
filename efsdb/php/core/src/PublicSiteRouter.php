<?php
declare(strict_types=1);

require_once __DIR__ . '/DeliveryModeResolver.php';
require_once __DIR__ . '/PublicWorkspace.php';
require_once __DIR__ . '/User.php';

final class PublicSiteRouter
{
    public function __construct(
        private readonly PublicWorkspace $workspace,
        private readonly DeliveryModeResolver $deliveryModes
    ) {}

    /**
     * @return array{status:int,headers:array<string,string>,body:string}|null
     */
    public function handle(string $uriPath, string $method, User $user): ?array
    {
        if (!in_array($method, ['GET', 'HEAD'], true)) {
            return null;
        }

        [$root, $relativePath] = $this->selectRoot($uriPath);
        if ($root === 'published' && !$this->workspace->isRootEnabled('published')) {
            return null;
        }

        if (!$this->workspace->canReadRoot($root, $user)) {
            return $this->notFound($method);
        }

        $mode = $this->deliveryModes->resolve($root);
        if ($mode !== 'php-html') {
            return $this->serviceUnavailable($method);
        }

        $candidates = $this->candidatePaths($relativePath);
        if ($candidates === null) {
            return $this->badRequest($method);
        }

        foreach ($candidates as $candidate) {
            $item = $this->workspace->readFile($root, $candidate);
            if ($item === null) {
                continue;
            }

            $manifest = $item['manifest'];
            $bytes = (string)$item['bytes'];
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
    private function candidatePaths(string $relativePath): ?array
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
    private function serviceUnavailable(string $method): array
    {
        return [
            'status' => 503,
            'headers' => ['Content-Type' => 'text/plain; charset=utf-8'],
            'body' => $method === 'HEAD' ? '' : '503 Service Unavailable (EFSDB adapter pending)',
        ];
    }
}
