<?php
declare(strict_types=1);

require_once __DIR__ . '/DeliveryModeResolver.php';
require_once __DIR__ . '/PublicWorkspace.php';
require_once __DIR__ . '/User.php';

final class PublicSiteRuntimeContext
{
    public function __construct(
        private readonly string $environment,
        private readonly string $workspaceRoot,
        private readonly string $requestPath,
        private readonly string $routePath
    ) {}

    public function environment(): string
    {
        return $this->environment;
    }

    public function isStaging(): bool
    {
        return $this->environment === PublicWorkspace::ROOT_STAGING;
    }

    public function basePath(): string
    {
        return $this->isStaging() ? '/staging' : '';
    }

    public function requestPath(): string
    {
        return $this->requestPath === '' ? '/' : '/' . ltrim($this->requestPath, '/');
    }

    public function routePath(): string
    {
        return $this->routePath;
    }

    public function workspacePath(string $relativePath = ''): string
    {
        $relativePath = trim(str_replace('\\', '/', $relativePath), '/');
        if ($relativePath === '') {
            return $this->workspaceRoot;
        }

        return $this->workspaceRoot . '/' . str_replace('/', DIRECTORY_SEPARATOR, $relativePath);
    }

    public function assetUrl(string $relativePath): string
    {
        $relativePath = trim(str_replace('\\', '/', $relativePath), '/');
        if ($relativePath === '') {
            return $this->basePath() === '' ? '/' : $this->basePath() . '/';
        }

        return ($this->basePath() === '' ? '' : $this->basePath()) . '/' . $relativePath;
    }

    /**
     * @return array<string,mixed>
     */
    public function readJson(string $relativePath): array
    {
        $path = $this->workspacePath($relativePath);
        if (!is_file($path)) {
            throw new RuntimeException("JSON resource not found: $relativePath");
        }

        $decoded = json_decode((string)file_get_contents($path), true, 512, JSON_THROW_ON_ERROR);
        return is_array($decoded) ? $decoded : [];
    }

    /**
     * @return array<string,mixed>
     */
    public function content(string $lang = 'en'): array
    {
        try {
            return $this->readJson("content/{$lang}.json");
        } catch (Throwable) {
            return [];
        }
    }

    public function meta(?string $key = null, mixed $default = null): mixed
    {
        try {
            $data = $this->readJson('meta/seo.json');
            if ($key === null) {
                return $data;
            }
            return array_key_exists($key, $data) ? $data[$key] : $default;
        } catch (Throwable) {
            return $key === null ? [] : $default;
        }
    }
}

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
    public function handle(string $uriPath, string $method, User|callable $userResolver, array $requestHeaders = []): ?array
    {
        $resolvedUser = null;
        $getUser = function() use (&$resolvedUser, $userResolver): User {
            if ($resolvedUser === null) {
                $resolvedUser = is_callable($userResolver) ? $userResolver() : $userResolver;
            }
            return $resolvedUser;
        };

        [$root, $relativePath] = $this->selectRoot($uriPath);
        if (!$this->workspace->isRootEnabled($root)) {
            return null;
        }

        if (!$this->workspace->canReadRoot($root, $getUser)) {
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
            $staticResponse = $this->serveLogicalCandidates($root, $method, $this->assetCandidates($request), $requestHeaders);
            if ($staticResponse !== null) {
                return $staticResponse;
            }

            $routeResponse = $this->renderCanonicalRoute($root, $method, $request, $requestHeaders, $getUser());
            if ($routeResponse !== null) {
                return $routeResponse;
            }

            $missingRoute = $this->renderMissingPhpRoute($root, $method, $request, $requestHeaders, $getUser());

            return $missingRoute ?? $this->notFound($method);
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

            return $this->serveStoredCandidates($root, $method, $this->adapterCandidates($adapterRequest, $adapter), $requestHeaders);
        }

        if ($mode !== 'php-html') {
            return $this->serviceUnavailable($method);
        }

        return $this->serviceUnavailable($method);
    }

    /**
     * @return array{status:int,headers:array<string,string>,body:string}|null
     */
    private function renderCanonicalRoute(string $root, string $method, array $request, array $requestHeaders, User $user): ?array
    {
        $candidates = $this->canonicalRoutePathCandidates($request);
        foreach ($candidates as $routePath) {
            $routeResponse = $this->renderPhpRoute($root, $routePath, $method, $request, $requestHeaders, 200, [], $user);
            if ($routeResponse !== null) {
                return $routeResponse;
            }
        }

        $normalized = $request['normalized'];
        $base = trim($normalized, '/');
        $requestSegments = $base === '' ? [] : explode('/', $base);

        $routes = $this->workspace->listRoutePaths($root);

        // Sort dynamic routes to prioritize more specific (fewer dynamic segments) paths
        usort($routes, static function(string $a, string $b): int {
            $dynA = substr_count($a, '[');
            $dynB = substr_count($b, '[');
            if ($dynA !== $dynB) {
                return $dynA <=> $dynB;
            }
            return strcmp($a, $b);
        });

        foreach ($routes as $routePath) {
            $params = $this->matchDynamicRoute($requestSegments, $routePath);
            if ($params !== null) {
                $routeResponse = $this->renderPhpRoute($root, $routePath, $method, $request, $requestHeaders, 200, $params, $user);
                if ($routeResponse !== null) {
                    return $routeResponse;
                }
            }
        }

        return null;
    }

    /**
     * @param list<string> $requestSegments
     * @return array<string,string>|null
     */
    private function matchDynamicRoute(array $requestSegments, string $routePath): ?array
    {
        if (!str_starts_with($routePath, 'routes/')) {
            return null;
        }

        $baseRoute = substr($routePath, strlen('routes/'));
        if (str_ends_with($baseRoute, '/index.php')) {
            $baseRoute = substr($baseRoute, 0, -10);
        } elseif (str_ends_with($baseRoute, '.php')) {
            $baseRoute = substr($baseRoute, 0, -4);
        } elseif (str_ends_with($baseRoute, '/index.html')) {
            $baseRoute = substr($baseRoute, 0, -11);
        } elseif (str_ends_with($baseRoute, '.html')) {
            $baseRoute = substr($baseRoute, 0, -5);
        } elseif (str_ends_with($baseRoute, '/index.htm')) {
            $baseRoute = substr($baseRoute, 0, -10);
        } elseif (str_ends_with($baseRoute, '.htm')) {
            $baseRoute = substr($baseRoute, 0, -4);
        } else {
            return null;
        }

        $routeSegments = $baseRoute === '' ? [] : explode('/', $baseRoute);
        if (count($requestSegments) !== count($routeSegments)) {
            return null;
        }

        $params = [];
        foreach ($routeSegments as $i => $rs) {
            $rq = $requestSegments[$i];
            if (preg_match('/^\[([^\]]+)\]$/', $rs, $matches)) {
                $params[$matches[1]] = $rq;
            } elseif ($rs !== $rq) {
                return null;
            }
        }

        return $params;
    }

    /**
     * @return array{status:int,headers:array<string,string>,body:string}|null
     */
    private function renderMissingPhpRoute(string $root, string $method, array $request, array $requestHeaders, User $user): ?array
    {
        $candidates = ['routes/404.php', 'routes/404.html', 'routes/404.htm'];
        foreach ($candidates as $routePath) {
            $response = $this->renderPhpRoute($root, $routePath, $method, $request, $requestHeaders, 404, [], $user);
            if ($response !== null) {
                return $response;
            }
        }
        return null;
    }

    /**
     * @return array{status:int,headers:array<string,string>,body:string}|null
     */
    private function renderPhpRoute(
        string $root,
        string $routePath,
        string $method,
        array $request,
        array $requestHeaders,
        int $defaultStatus = 200,
        array $params = [],
        ?User $user = null
    ): ?array {
        $route = $this->workspace->readSiteFile($root, $routePath, false, false);
        if ($route === null) {
            return null;
        }

        try {
            $snapshot = $this->workspace->materializeSiteWorkspace($root);
            $workspaceRoot = (string)$snapshot['path'];
            $routeFile = $workspaceRoot . '/' . str_replace('/', DIRECTORY_SEPARATOR, $routePath);
            if (!is_file($routeFile)) {
                return null;
            }

            $site = new PublicSiteRuntimeContext($root, $workspaceRoot, (string)($request['normalized'] ?? ''), $routePath);
            $routeRequest = $this->routeRequestPayload(
                $root,
                $request,
                $method,
                $requestHeaders,
                $params
            );
            $rendered = $this->includePhpTemplate($routeFile, [
                'efsdbSite' => $site,
                'efsdbRequest' => $routeRequest,
            ]);

            return $this->normalizePhpRouteResponse(
                $root,
                $routePath,
                $workspaceRoot,
                $site,
                $routeRequest,
                $rendered,
                $method,
                $defaultStatus
            );
        } catch (Throwable $error) {
            return $this->serverError($method, $error);
        }
    }

    /**
     * @param array{return:mixed,output:string} $rendered
     * @param array<string,mixed> $routeRequest
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function normalizePhpRouteResponse(
        string $root,
        string $routePath,
        string $workspaceRoot,
        PublicSiteRuntimeContext $site,
        array $routeRequest,
        array $rendered,
        string $method,
        int $defaultStatus
    ): array {
        $routeReturn = $rendered['return'];
        $routeOutput = $rendered['output'];
        $status = $defaultStatus;
        $body = $routeOutput;
        $layout = null;
        $headers = [];
        $contentType = 'text/html; charset=utf-8';
        $layoutVars = [];

        if (is_array($routeReturn)) {
            if (isset($routeReturn['status'])) {
                $status = max(100, min(599, (int)$routeReturn['status']));
            }

            $layout = isset($routeReturn['layout']) && is_scalar($routeReturn['layout'])
                ? trim((string)$routeReturn['layout'])
                : null;
            $headers = $this->normalizeResponseHeaders($routeReturn['headers'] ?? []);

            $candidateType = $routeReturn['contentType'] ?? $routeReturn['mime'] ?? null;
            if (is_scalar($candidateType) && trim((string)$candidateType) !== '') {
                $contentType = trim((string)$candidateType);
            }

            if (array_key_exists('body', $routeReturn)) {
                $body = (string)$routeReturn['body'];
            } elseif (array_key_exists('content', $routeReturn)) {
                $body = (string)$routeReturn['content'];
            }

            $layoutVars = $routeReturn;
            foreach (['status', 'layout', 'headers', 'contentType', 'mime', 'body', 'content'] as $reserved) {
                unset($layoutVars[$reserved]);
            }
        } elseif (is_string($routeReturn)) {
            $body = (string)$routeReturn;
        } elseif (is_numeric($routeReturn) && $routeReturn !== 1) {
            $body = (string)$routeReturn;
        } elseif (is_bool($routeReturn) && $routeReturn === false) {
            $body = '';
        }

        if (is_string($layout) && $layout !== '') {
            $body = $this->renderLayout($workspaceRoot, $layout, $body, $site, $routeRequest, $layoutVars);
        }

        $headers = array_merge([
            'Content-Type' => $contentType,
            'Cache-Control' => 'public, max-age=0, must-revalidate',
            'X-EFSDB-Environment' => $root,
            'X-EFSDB-Route' => $routePath,
        ], $headers);

        return [
            'status' => $status,
            'headers' => $headers + ['Content-Length' => (string)strlen($body)],
            'body' => $method === 'HEAD' ? '' : $body,
        ];
    }

    /**
     * @param array<string,mixed> $layoutVars
     */
    private function renderLayout(
        string $workspaceRoot,
        string $layout,
        string $slot,
        PublicSiteRuntimeContext $site,
        array $routeRequest,
        array $layoutVars
    ): string {
        $layoutPath = $this->resolveLayoutPath($layout);
        $layoutFile = $workspaceRoot . '/' . str_replace('/', DIRECTORY_SEPARATOR, $layoutPath);
        if (!is_file($layoutFile)) {
            throw new RuntimeException("Layout not found: $layoutPath");
        }

        $layoutRender = $this->includePhpTemplate($layoutFile, $layoutVars + [
            'slot' => $slot,
            'efsdbSite' => $site,
            'efsdbRequest' => $routeRequest,
        ]);

        if (is_string($layoutRender['return']) && $layoutRender['return'] !== '') {
            return $layoutRender['return'];
        }

        return $layoutRender['output'];
    }

    private function resolveLayoutPath(string $layout): string
    {
        $layout = trim(str_replace('\\', '/', $layout), '/');
        if ($layout === '') {
            throw new RuntimeException('Layout path cannot be empty');
        }

        if (!str_starts_with($layout, 'layouts/')) {
            $layout = 'layouts/' . $layout;
        }

        if (!str_ends_with(strtolower($layout), '.php')) {
            $layout .= '.php';
        }

        return $layout;
    }

    /**
     * @param array<string,mixed> $request
     * @param array<string,string> $requestHeaders
     * @return array<string,mixed>
     */
    private function routeRequestPayload(string $root, array $request, string $method, array $requestHeaders, array $params = []): array
    {
        $normalized = trim((string)($request['normalized'] ?? ''), '/');
        return [
            'environment' => $root,
            'method' => $method,
            'path' => $normalized === '' ? '/' : '/' . $normalized,
            'headers' => $requestHeaders,
            'query' => $_GET,
            'params' => $params,
        ];
    }

    /**
     * @return array{return:mixed,output:string}
     */
    private function includePhpTemplate(string $file, array $vars = []): array
    {
        $runner = static function (string $__efsdb_file, array $__efsdb_vars) {
            extract($__efsdb_vars, EXTR_SKIP);
            return include $__efsdb_file;
        };

        ob_start();
        try {
            $result = $runner($file, $vars);
        } catch (Throwable $error) {
            ob_end_clean();
            throw $error;
        }

        return [
            'return' => $result,
            'output' => (string)ob_get_clean(),
        ];
    }

    /**
     * @return array<string,string>
     */
    private function normalizeResponseHeaders(mixed $headers): array
    {
        if (!is_array($headers)) {
            return [];
        }

        $normalized = [];
        foreach ($headers as $name => $value) {
            if (!is_scalar($name) || !is_scalar($value)) {
                continue;
            }

            $headerName = trim((string)$name);
            if ($headerName === '') {
                continue;
            }

            $normalized[$headerName] = (string)$value;
        }

        return $normalized;
    }

    /**
     * @param list<string> $candidates
     * @return array{status:int,headers:array<string,string>,body:string}|null
     */
    private function serveLogicalCandidates(string $root, string $method, array $candidates, array $requestHeaders): ?array
    {
        foreach ($candidates as $candidate) {
            $item = $this->workspace->readSiteFile($root, $candidate, false, false);
            if ($item === null) {
                continue;
            }

            $manifest = $item['manifest'];
            if (!is_array($manifest)) {
                continue;
            }

            $headers = $this->cacheHeaders($manifest, $candidate);
            if ($this->isNotModified($requestHeaders, $headers)) {
                return $this->notModified($headers);
            }

            if ($method === 'HEAD') {
                return $this->success($method, $manifest, '', $headers);
            }

            $withBytes = $this->workspace->readSiteFile($root, $candidate, false, true);
            if ($withBytes === null) {
                continue;
            }

            return $this->success($method, $manifest, (string)($withBytes['bytes'] ?? ''), $headers);
        }

        return null;
    }

    /**
     * @param list<string> $candidates
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function serveStoredCandidates(string $root, string $method, array $candidates, array $requestHeaders): array
    {
        foreach ($candidates as $candidate) {
            $item = $this->workspace->readFile($root, $candidate, false, false);
            if ($item === null) {
                continue;
            }

            $manifest = $item['manifest'];
            if (!is_array($manifest)) {
                continue;
            }

            $headers = $this->cacheHeaders($manifest, $candidate);
            if ($this->isNotModified($requestHeaders, $headers)) {
                return $this->notModified($headers);
            }

            if ($method === 'HEAD') {
                return $this->success($method, $manifest, '', $headers);
            }

            $withBytes = $this->workspace->readFile($root, $candidate, false, true);
            if ($withBytes === null) {
                continue;
            }

            return $this->success($method, $manifest, (string)($withBytes['bytes'] ?? ''), $headers);
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
            return [PublicWorkspace::ROOT_STAGING, $relative === false ? '/' : $relative];
        }

        return [PublicWorkspace::ROOT_PRODUCTION, $uriPath];
    }

    /**
     * @return array{normalized:string,hadTrailingSlash:bool}|null
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
     * @return list<string>
     */
    private function canonicalRoutePathCandidates(array $request): array
    {
        $normalized = $request['normalized'];
        $hadTrailingSlash = $request['hadTrailingSlash'] ?? false;

        if ($normalized === '') {
            return ['routes/index.php', 'routes/index.html', 'routes/index.htm'];
        }

        $base = trim($normalized, '/');
        if ($base === '') {
            return ['routes/index.php', 'routes/index.html', 'routes/index.htm'];
        }

        // Tighten: Prevent raw extension access so `test.php` must be accessed as `/test`
        $lowerBase = strtolower($base);
        if (str_ends_with($lowerBase, '.php') || str_ends_with($lowerBase, '.html') || str_ends_with($lowerBase, '.htm')) {
            return [];
        }

        $candidates = [];

        // If the route has an extension, it might be an exact file match or it might just be a path with a dot
        if (!str_contains(basename($base), '.')) {
            if ($hadTrailingSlash) {
                // folder-style PHP route structure
                $candidates[] = 'routes/' . $base . '/index.php';
                // folder-style HTML route structure
                $candidates[] = 'routes/' . $base . '/index.html';
                // folder-style HTM route structure
                $candidates[] = 'routes/' . $base . '/index.htm';
                // single-file PHP route fallback
                $candidates[] = 'routes/' . $base . '.php';
                // single-file HTML route fallback
                $candidates[] = 'routes/' . $base . '.html';
                // single-file HTM route fallback
                $candidates[] = 'routes/' . $base . '.htm';
            } else {
                // single-file PHP route like test.php resolving to /test
                $candidates[] = 'routes/' . $base . '.php';
                // single-file HTML route
                $candidates[] = 'routes/' . $base . '.html';
                // single-file HTM route
                $candidates[] = 'routes/' . $base . '.htm';
                // folder-style PHP route structure
                $candidates[] = 'routes/' . $base . '/index.php';
                // folder-style HTML route structure
                $candidates[] = 'routes/' . $base . '/index.html';
                // folder-style HTM route structure
                $candidates[] = 'routes/' . $base . '/index.htm';
            }
        } else {
            // It has a dot. E.g. /feed.xml
            $candidates[] = 'routes/' . $base;
            $candidates[] = 'routes/' . $base . '.php';
            $candidates[] = 'routes/' . $base . '.html';
            $candidates[] = 'routes/' . $base . '.htm';
            $candidates[] = 'routes/' . $base . '/index.php';
            $candidates[] = 'routes/' . $base . '/index.html';
            $candidates[] = 'routes/' . $base . '/index.htm';
        }

        return $candidates;
    }

    /**
     * @param array{normalized:string,hadTrailingSlash:bool} $request
     * @return list<string>
     */
    private function assetCandidates(array $request): array
    {
        $normalized = trim((string)$request['normalized'], '/');
        if ($normalized === '') {
            return [];
        }

        $extension = strtolower(pathinfo($normalized, PATHINFO_EXTENSION));
        if ($extension === '') {
            return [];
        }

        $candidates = [];
        $candidates[] = $normalized;
        if (str_starts_with($normalized, 'assets/')) {
            $candidates[] = $normalized;
        } else {
            $candidates[] = 'assets/' . $normalized;
        }

        if (preg_match('#^(?:_app|app|immutable)/#i', $normalized)) {
            $candidates[] = 'assets/' . $normalized;
        }

        return array_values(array_unique($candidates));
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
    private function success(string $method, array $manifest, string $bytes, array $headers): array
    {
        return [
            'status' => 200,
            'headers' => $headers + ['Content-Length' => (string)($method === 'HEAD' ? (int)($manifest['size'] ?? strlen($bytes)) : strlen($bytes))],
            'body' => $method === 'HEAD' ? '' : $bytes,
        ];
    }

    /**
     * @param array<string,mixed> $manifest
     * @return array<string,string>
     */
    private function cacheHeaders(array $manifest, string $candidate): array
    {
        $etag = $this->etag((string)($manifest['id'] ?? ''));
        $lastModified = $this->httpDate((string)($manifest['mtime'] ?? ''));

        return [
            'Content-Type' => (string)($manifest['mime'] ?? 'application/octet-stream'),
            'Cache-Control' => $this->cacheControlForPath($candidate),
            'ETag' => $etag,
            'Last-Modified' => $lastModified,
            'X-EFSDB-Manifest' => (string)($manifest['id'] ?? ''),
            'X-EFSDB-Logical-Path' => (string)($manifest['logicalPath'] ?? ''),
        ];
    }

    /**
     * @param array<string,string> $requestHeaders
     * @param array<string,string> $responseHeaders
     */
    private function isNotModified(array $requestHeaders, array $responseHeaders): bool
    {
        $ifNoneMatch = trim((string)($requestHeaders['if-none-match'] ?? ''));
        $etag = (string)($responseHeaders['ETag'] ?? '');
        if ($ifNoneMatch !== '') {
            foreach (explode(',', $ifNoneMatch) as $candidate) {
                $candidate = trim($candidate);
                if ($candidate === '*' || $candidate === $etag) {
                    return true;
                }
            }
        }

        $ifModifiedSince = trim((string)($requestHeaders['if-modified-since'] ?? ''));
        $lastModified = trim((string)($responseHeaders['Last-Modified'] ?? ''));
        if ($ifModifiedSince === '' || $lastModified === '') {
            return false;
        }

        $requestTime = strtotime($ifModifiedSince);
        $resourceTime = strtotime($lastModified);
        if ($requestTime === false || $resourceTime === false) {
            return false;
        }

        return $requestTime >= $resourceTime;
    }

    /**
     * @param array<string,string> $headers
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function notModified(array $headers): array
    {
        return [
            'status' => 304,
            'headers' => $headers,
            'body' => '',
        ];
    }

    private function cacheControlForPath(string $candidate): string
    {
        if ($this->isImmutableAssetPath($candidate)) {
            return 'public, max-age=31536000, immutable';
        }

        return 'public, max-age=0, must-revalidate';
    }

    private function isImmutableAssetPath(string $candidate): bool
    {
        $normalized = trim(str_replace('\\', '/', $candidate), '/');
        if (!preg_match('/(^|\/)(?:_app|app|assets|immutable)(\/|$)/i', $normalized)) {
            return false;
        }

        $basename = basename($normalized);
        return (bool)preg_match('/(?:[.-])[a-f0-9]{8,}\.[a-z0-9]+$/i', $basename);
    }

    private function etag(string $manifestId): string
    {
        return '"' . addcslashes($manifestId, "\"\\") . '"';
    }

    private function httpDate(string $timestamp): string
    {
        $unix = strtotime($timestamp);
        if ($unix === false) {
            $unix = time();
        }

        return gmdate('D, d M Y H:i:s', $unix) . ' GMT';
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

    /**
     * @return array{status:int,headers:array<string,string>,body:string}
     */
    private function serverError(string $method, Throwable $error): array
    {
        return [
            'status' => 500,
            'headers' => ['Content-Type' => 'text/plain; charset=utf-8'],
            'body' => $method === 'HEAD' ? '' : '500 Internal Server Error (EFSDB route runtime): ' . $error->getMessage(),
        ];
    }
}
