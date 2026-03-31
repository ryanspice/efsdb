<?php
declare(strict_types=1);

require_once __DIR__ . '/PublicWorkspace.php';
require_once __DIR__ . '/PublicSiteRouter.php';
require_once __DIR__ . '/User.php';
require_once __DIR__ . '/Store.php';

final class GhostPreloadService
{
    public function __construct(
        private readonly Store $store,
        private readonly PublicWorkspace $workspace,
        private readonly PublicSiteRouter $router
    ) {}

    public function preloadEnvironment(string $environment): void
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        
        $ghostDir = $this->ghostDir($environment);
        if (is_dir($ghostDir)) {
            $this->rmdirRecursive($ghostDir);
        }
        mkdir($ghostDir, 0775, true);

        $routes = $this->workspace->listRoutePaths($environment);
        
        foreach ($routes as $routePath) {
            if (str_contains($routePath, '[')) {
                continue; // Skip dynamic routes for now
            }

            $uriPath = $this->routeToUri($environment, $routePath);
            
            // Render it using the router directly
            $response = $this->router->handle($uriPath, 'GET', User::guest());
            if ($response !== null && $response['status'] === 200) {
                $body = $response['body'];
                
                // Remove any custom minification that breaks Svelte 5 hydration comments (<!--[-->)
                // and inline scripts/styles. SvelteKit already optimizes the output.
                
                $outFile = $this->cacheFilePath($environment, $uriPath);
                $outDir = dirname($outFile);
                if (!is_dir($outDir)) {
                    mkdir($outDir, 0775, true);
                }
                
                file_put_contents($outFile, $body);
                file_put_contents($outFile . '.gz', gzencode($body, 9));
            }
        }
    }
    
    /**
     * @return array{content:string, is_gzipped:bool}|null
     */
    public function serveIfCached(string $environment, string $uriPath, bool $acceptsGzip = false): ?array
    {
        $environment = PublicWorkspace::normalizeEnvironmentRoot($environment);
        
        // Normalize uriPath to match routeToUri logic
        $uriPath = rtrim($uriPath, '/');
        if ($uriPath === '' || $uriPath === '/staging') {
            $uriPath = $environment === PublicWorkspace::ROOT_STAGING ? '/staging' : '/';
        }
        
        $outFile = $this->cacheFilePath($environment, $uriPath);
        if ($acceptsGzip && is_file($outFile . '.gz')) {
            return [
                'content' => (string)file_get_contents($outFile . '.gz'),
                'is_gzipped' => true
            ];
        }
        if (is_file($outFile)) {
            return [
                'content' => (string)file_get_contents($outFile),
                'is_gzipped' => false
            ];
        }
        return null;
    }

    private function ghostDir(string $environment): string
    {
        return __DIR__ . '/../public/.ghost/' . $environment;
    }

    private function cacheFilePath(string $environment, string $uriPath): string
    {
        $hash = md5($uriPath);
        return $this->ghostDir($environment) . '/' . $hash . '.html';
    }

    private function routeToUri(string $environment, string $routePath): string
    {
        $baseRoute = substr($routePath, strlen('routes/'));
        if ($baseRoute === 'index.php' || $baseRoute === 'index.html' || $baseRoute === 'index.htm') {
            $baseRoute = '';
        } elseif (str_ends_with($baseRoute, '/index.php')) {
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
        }
        
        $baseRoute = trim($baseRoute, '/');
        $prefix = $environment === PublicWorkspace::ROOT_STAGING ? '/staging' : '';
        
        if ($baseRoute === '') {
            return $prefix === '' ? '/' : $prefix;
        }
        
        return $prefix . '/' . $baseRoute;
    }

    private function rmdirRecursive(string $dir): void
    {
        if (!is_dir($dir)) {
            return;
        }
        $files = array_diff(scandir($dir) ?: [], ['.', '..']);
        foreach ($files as $file) {
            $path = $dir . DIRECTORY_SEPARATOR . $file;
            if (is_dir($path)) {
                $this->rmdirRecursive($path);
            } else {
                unlink($path);
            }
        }
        rmdir($dir);
    }
}
