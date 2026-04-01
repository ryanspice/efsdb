<?php
declare(strict_types=1);

if (php_sapi_name() === 'cli-server') {
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (is_string($path) && is_file(__DIR__ . $path)) {
        return false;
    }
}

// FAST PATH for static assets to avoid booting the entire framework for every image/js/css file
$fastPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
if (is_string($fastPath) && preg_match('#^/(staging|production)?/?(.*)$#', $fastPath, $matches)) {
    $env = $matches[1] === '' ? 'production' : $matches[1];
    $relPath = ltrim($matches[2], '/');
    if ($relPath !== '' && preg_match('#\.(css|js|mjs|woff2?|png|jpe?g|gif|svg|ico|json|map|txt|xml|wasm)$#i', $relPath)) {
        // We only attempt this if it's not a control plane request
        if (!str_starts_with($relPath, '_efsdb/')) {
            $repoRoot = dirname(__DIR__, 4);
            $tenantHash = substr(sha1('tenant'), 0, 16);
            $cacheFile = $repoRoot . '/.cache/efsdb/workspaces/materialized/' . $tenantHash . '/' . $env . '/.fingerprint-cache';

            if (is_file($cacheFile)) {
                $cached = json_decode((string)file_get_contents($cacheFile), true);
                if (is_array($cached) && isset($cached['path'])) {
                    $targetPath = $cached['path'] . '/' . str_replace('/', DIRECTORY_SEPARATOR, $relPath);
                    if (is_file($targetPath)) {
                        $ext = strtolower(pathinfo($targetPath, PATHINFO_EXTENSION));
                        $mimes = [
                            'css' => 'text/css; charset=utf-8',
                            'js' => 'application/javascript; charset=utf-8',
                            'mjs' => 'application/javascript; charset=utf-8',
                            'json' => 'application/json; charset=utf-8',
                            'map' => 'application/json; charset=utf-8',
                            'png' => 'image/png',
                            'jpg' => 'image/jpeg',
                            'jpeg' => 'image/jpeg',
                            'gif' => 'image/gif',
                            'svg' => 'image/svg+xml',
                            'ico' => 'image/x-icon',
                            'woff' => 'font/woff',
                            'woff2' => 'font/woff2',
                            'txt' => 'text/plain; charset=utf-8',
                            'xml' => 'application/xml; charset=utf-8',
                            'wasm' => 'application/wasm',
                        ];
                        if (isset($mimes[$ext])) {
                            header('Content-Type: ' . $mimes[$ext]);
                            if (str_contains($targetPath, '/immutable/') || preg_match('/(?:[.-])[a-f0-9]{8,}\.[a-z0-9]+$/i', basename($targetPath))) {
                                header('Cache-Control: public, max-age=31536000, immutable');
                            } else {
                                header('Cache-Control: public, max-age=0, must-revalidate');
                            }
                            header('X-EFSDB-Fast-Path: true');
                            readfile($targetPath);
                            if (!defined('EFSDB_TEST_MODE')) {
                                exit;
                            }
                            return;
                        }
                    }
                }
            }
        }
    }
}

// FAST PATH for Ghost HTML cache
if ($_SERVER['REQUEST_METHOD'] === 'GET' && !str_starts_with($fastPath, '/_efsdb/') && $fastPath !== '/_efsdb') {
    $env = str_starts_with($fastPath, '/staging') ? 'staging' : 'production';
    $ghostUri = rtrim($fastPath, '/');
    if ($ghostUri === '' || $ghostUri === '/staging') {
        $ghostUri = $env === 'staging' ? '/staging' : '/';
    }
    $ghostFile = __DIR__ . '/.ghost/' . $env . '/' . md5($ghostUri) . '.html';
    $acceptsGzip = str_contains($_SERVER['HTTP_ACCEPT_ENCODING'] ?? '', 'gzip');

    if ($acceptsGzip && is_file($ghostFile . '.gz')) {
        header('Content-Type: text/html; charset=utf-8');
        header('Content-Encoding: gzip');
        header('X-EFSDB-Ghost: fast');
        readfile($ghostFile . '.gz');
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    } elseif (is_file($ghostFile)) {
        header('Content-Type: text/html; charset=utf-8');
        header('X-EFSDB-Ghost: fast');
        readfile($ghostFile);
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }
}

$startTime = microtime(true);

require_once __DIR__ . '/../src/Analytics.php';
require_once __DIR__ . '/../src/App.php';
require_once __DIR__ . '/../src/Auth.php';
require_once __DIR__ . '/../src/Config.php';
require_once __DIR__ . '/../src/Permissions.php';
require_once __DIR__ . '/../src/RequestTiming.php';

date_default_timezone_set('America/Toronto');
$requestTiming = RequestTiming::install();

$dataDir = Config::getDataDir();
$schemaDir = Config::getSchemaDir();

register_shutdown_function(function () use ($startTime, $dataDir, $requestTiming): void {
    if (defined('STDIN')) {
        return;
    }

    $duration = microtime(true) - $startTime;
    $bytes = ob_get_length() ?: 0;
    $method = $_SERVER['REQUEST_METHOD'] ?? 'UNKNOWN';
    $uri = $_SERVER['REQUEST_URI'] ?? '/';

    try {
        $requestTiming->emit();
        $analytics = new Analytics($dataDir);
        $analytics->logRequest($method, $uri, null, $duration, $bytes);
    } catch (Throwable) {
    }
});

try {
    if (!is_dir($dataDir)) {
        @mkdir($dataDir, 0775, true);
    }
    if (!is_dir($schemaDir)) {
        @mkdir($schemaDir, 0775, true);
    }

    $app = new App($dataDir, $schemaDir);
    $auth = new Auth($app);
    $perms = new Permissions();
} catch (Throwable $e) {
    http_response_code(500);
    die("<h1>System Error</h1><p>" . htmlspecialchars((string)$e->getMessage()) . "</p>");
}

if (PHP_SAPI === 'cli-server' && Config::isDebugEnabled()) {
    $noticePath = Config::getServerNoticePath();
    $pid = (string)(getmypid() ?: '0');
    $lastPid = is_file($noticePath) ? trim((string)@file_get_contents($noticePath)) : '';

    if ($lastPid !== $pid) {
        @file_put_contents($noticePath, $pid, LOCK_EX);
        $notice = $app->getIdentity()->getConsoleBootstrapNotice();
        if (is_string($notice) && $notice !== '') {
            error_log($notice);
        }
    }
}

if (!function_exists('efsdb_json_body')) {
    /**
     * @return array<string,mixed>
     */
    function efsdb_json_body(): array
    {
        if (isset($GLOBALS['EFSDB_TEST_JSON_BODY']) && is_string($GLOBALS['EFSDB_TEST_JSON_BODY'])) {
            $decoded = json_decode($GLOBALS['EFSDB_TEST_JSON_BODY'], true);
            return is_array($decoded) ? $decoded : [];
        }

        $json = file_get_contents('php://input');
        if ($json === false || trim($json) === '') {
            return [];
        }

        $decoded = json_decode($json, true);
        return is_array($decoded) ? $decoded : [];
    }
}

if (!function_exists('efsdb_json_response')) {
    /**
     * @param array<string,mixed> $payload
     */
    function efsdb_json_response(array $payload, int $status = 200): void
    {
        http_response_code($status);
        header('Content-Type: application/json');
        echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    }
}

if (!function_exists('efsdb_error')) {
    /**
     * @return array<string,mixed>
     */
    function efsdb_error(string $code, string $message): array
    {
        return ['error' => ['code' => $code, 'message' => $message]];
    }
}

if (!function_exists('efsdb_control_plane_path')) {
    function efsdb_control_plane_path(string $action): string
    {
        if ($action === 'home') {
            return '/_efsdb/';
        }
        return '/_efsdb/' . urlencode($action);
    }
}

if (!function_exists('efsdb_sanitize_internal_target')) {
    function efsdb_sanitize_internal_target(mixed $target): ?string
    {
        if (!is_string($target) || trim($target) === '') {
            return null;
        }

        $target = trim($target);
        if (!str_starts_with($target, '/')) {
            return null;
        }

        $url = parse_url($target);
        if ($url === false || isset($url['host']) || isset($url['scheme'])) {
            return null;
        }

        return $target;
    }
}

if (!function_exists('efsdb_is_local_host')) {
    function efsdb_is_local_host(): bool
    {
        $host = strtolower((string)($_SERVER['HTTP_HOST'] ?? ''));
        return str_contains($host, 'localhost')
            || str_contains($host, '127.0.0.1')
            || str_contains($host, '::1');
    }
}

if (!function_exists('efsdb_site_runtime_label')) {
    function efsdb_site_runtime_label(): string
    {
        return efsdb_is_local_host() ? 'EFSDB Local Runtime' : 'EFSDB Website';
    }
}

if (!function_exists('efsdb_site_chrome')) {
    /**
     * @return array{
     *   variant:string,
     *   runtimeLabel:string,
     *   siteLabel:string,
     *   sitePathLabel:string,
     *   routeLabel:string,
     *   ctaLabel:string,
     *   ctaHref:string
     * }
     */
    function efsdb_site_chrome(string $variant, string $siteUrl, string $routeLabel, string $ctaLabel, string $ctaHref): array
    {
        $environmentLabel = $siteUrl === '/staging' ? 'Staging' : 'Production';

        return [
            'variant' => $variant,
            'runtimeLabel' => efsdb_site_runtime_label(),
            'siteLabel' => $environmentLabel . ' website',
            'sitePathLabel' => $siteUrl === '/staging' ? '/staging' : '/',
            'routeLabel' => $routeLabel,
            'ctaLabel' => $ctaLabel,
            'ctaHref' => $ctaHref,
        ];
    }
}

if (!function_exists('efsdb_sanitize_control_plane_target')) {
    function efsdb_sanitize_control_plane_target(mixed $target): ?string
    {
        $target = efsdb_sanitize_internal_target($target);
        if ($target === null) {
            return null;
        }

        $path = parse_url($target, PHP_URL_PATH);
        if (!is_string($path) || (!str_starts_with($path, '/_efsdb/') && $path !== '/_efsdb')) {
            return null;
        }

        return $target;
    }
}

if (!function_exists('efsdb_normalize_control_plane_target')) {
    function efsdb_normalize_control_plane_target(mixed $target): ?string
    {
        $target = efsdb_sanitize_control_plane_target($target);
        if ($target === null) {
            return null;
        }

        $parts = parse_url($target);
        if ($parts === false) {
            return null;
        }

        $path = (string)($parts['path'] ?? '');
        if ($path === '/_efsdb') {
            $path = '/_efsdb/';
        }

        $normalized = $path;
        if (isset($parts['query']) && $parts['query'] !== '') {
            $normalized .= '?' . $parts['query'];
        }
        if (isset($parts['fragment']) && $parts['fragment'] !== '') {
            $normalized .= '#' . $parts['fragment'];
        }

        return $normalized;
    }
}

if (!function_exists('efsdb_default_login_target')) {
    function efsdb_default_login_target(string $uriPath): string
    {
        $explicitTarget = efsdb_normalize_control_plane_target($_GET['next'] ?? null);
        if ($explicitTarget !== null) {
            return $explicitTarget;
        }

        $requestTarget = efsdb_normalize_control_plane_target($_SERVER['REQUEST_URI'] ?? null);
        if ($requestTarget !== null && str_starts_with($uriPath, '/_efsdb') && !in_array($uriPath, ['/_efsdb/login', '/_efsdb/logout'], true)) {
            return $requestTarget;
        }

        return '/_efsdb/admin';
    }
}

if (!function_exists('efsdb_public_site_destination_for_target')) {
    function efsdb_public_site_destination_for_target(?string $target): string
    {
        $normalized = strtolower((string)($target ?? ''));
        $decoded = strtolower(rawurldecode($normalized));

        if (str_starts_with($normalized, '/staging') || str_starts_with($decoded, '/staging')) {
            return '/staging';
        }

        foreach ([
            'site/staging',
            'root=staging',
            'environment=staging',
            'sourceenvironment=staging',
            'targetenvironment=staging',
        ] as $needle) {
            if (str_contains($normalized, $needle) || str_contains($decoded, $needle)) {
                return '/staging';
            }
        }

        return '/';
    }
}

if (!function_exists('efsdb_guest_overlay_context')) {
    /**
     * @return array{
     *   loginTarget:string,
     *   siteUrl:string,
     *   exitUrl:string,
     *   sitePathLabel:string,
     *   environmentLabel:string,
     *   runtimeLabel:string,
     *   routeLabel:string,
     *   siteLabel:string
     * }
     */
    function efsdb_guest_overlay_context(string $uriPath): array
    {
        $loginTarget = efsdb_default_login_target($uriPath);
        $siteUrl = efsdb_public_site_destination_for_target($loginTarget);
        $environmentLabel = $siteUrl === '/staging' ? 'Staging' : 'Production';
        $routeLabel = efsdb_normalize_control_plane_target($_SERVER['REQUEST_URI'] ?? null)
            ?? ($uriPath === '/_efsdb' ? '/_efsdb/' : $uriPath);

        return [
            'loginTarget' => $loginTarget,
            'siteUrl' => $siteUrl,
            'exitUrl' => $siteUrl,
            'sitePathLabel' => $siteUrl === '/staging' ? '/staging' : '/',
            'environmentLabel' => $environmentLabel,
            'runtimeLabel' => efsdb_site_runtime_label(),
            'routeLabel' => $routeLabel,
            'siteLabel' => $environmentLabel . ' website',
        ];
    }
}

$uriPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if (str_starts_with($uriPath, '/_efsdb/api/')) {
    if ($uriPath === '/_efsdb/api/health') {
        efsdb_json_response([
            'status' => 'ok',
            'version' => '2.0.0',
            'php' => PHP_VERSION,
            'env' => Config::getEnv(),
            'debug' => Config::isDebugEnabled(),
            'timestamp' => gmdate('c'),
        ]);
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'POST' && $uriPath === '/_efsdb/api/auth/login') {
        $input = efsdb_json_body();
        $key = (string)($input['key'] ?? '');
        $result = $auth->login($key);
        if ($result === null) {
            efsdb_json_response(efsdb_error('invalid_credentials', 'Invalid login key'), 401);
        } else {
            efsdb_json_response($result);
        }
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'POST' && $uriPath === '/_efsdb/api/auth/refresh') {
        $result = $auth->refresh();
        if ($result === null) {
            efsdb_json_response(efsdb_error('invalid_refresh', 'Invalid refresh session'), 401);
        } else {
            efsdb_json_response($result);
        }
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'POST' && $uriPath === '/_efsdb/api/auth/logout') {
        $auth->logout();
        efsdb_json_response(['status' => 'ok']);
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($uriPath === '/_efsdb/api/auth/whoami') {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
        } else {
            efsdb_json_response($user->toApi());
        }
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'POST' && $uriPath === '/_efsdb/api/auth/display-mode') {
        $user = $auth->authenticate(true);
        if ($user->isGuest() || !$perms->canImpersonate($user)) {
            efsdb_json_response(efsdb_error('forbidden', 'Display mode change not allowed'), 403);
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        $input = efsdb_json_body();
        $roleId = (string)($input['roleId'] ?? '');
        try {
            $result = $auth->changeDisplayMode($user, $roleId);
            efsdb_json_response($result);
        } catch (Throwable $e) {
            efsdb_json_response(efsdb_error('invalid_display_mode', $e->getMessage()), 400);
        }
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'POST' && $uriPath === '/_efsdb/api/auth/verify-key') {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        $input = efsdb_json_body();
        $key = (string)($input['passphrase'] ?? $input['key'] ?? '');
        if (!$auth->verifyCurrentKey($user, $key)) {
            efsdb_json_response(efsdb_error('invalid_credentials', 'Invalid passphrase'), 401);
        } else {
            efsdb_json_response(['status' => 'ok']);
        }
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if (str_starts_with($uriPath, '/_efsdb/api/admin/')) {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/users') {
            if (!$perms->canManageUsers($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'User management requires tenant admin access'), 403);
            } elseif ($method === 'GET') {
                efsdb_json_response(['results' => $app->getIdentity()->listUsers()]);
            } elseif ($method === 'POST') {
                try {
                    $payload = efsdb_json_body();
                    $result = $app->getIdentity()->createUser($payload, isset($payload['loginKey']) ? (string)$payload['loginKey'] : null);
                    efsdb_json_response($result, 201);
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_user', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/roles') {
            if (!$perms->canManageRoles($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Role management requires tenant admin access'), 403);
            } elseif ($method === 'GET') {
                efsdb_json_response(['results' => $app->getIdentity()->listRoles(false)]);
            } elseif ($method === 'POST') {
                try {
                    $result = $app->getIdentity()->createRole(efsdb_json_body());
                    efsdb_json_response(['result' => $result], 201);
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_role', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/settings') {
            if (!$perms->canManageSettings($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Settings management requires tenant admin access'), 403);
            } elseif ($method === 'GET') {
                efsdb_json_response(['result' => $app->getIdentity()->getTenantSettings()]);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                try {
                    $result = $app->getIdentity()->writeTenantSetting((string)($payload['key'] ?? ''), $payload['value'] ?? null);
                    efsdb_json_response(['result' => $result]);
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_setting', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/public-workspace/root') {
            if (!$perms->canViewEnvironmentHistory($user) && !$perms->canManageSettings($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Public workspace root requires environment view access'), 403);
            } elseif ($method === 'GET') {
                $root = (string)($_GET['root'] ?? 'published');
                efsdb_json_response(['result' => $app->getPublicWorkspace()->ensureRoot($root)]);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                $root = (string)($payload['root'] ?? 'published');
                try {
                    efsdb_json_response(['result' => $app->getPublicWorkspace()->setRootConfig($root, $payload)], 200);
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_public_root', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/public-workspace/file') {
            if (!$perms->canManageSettings($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Public workspace management requires tenant admin access'), 403);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                $root = (string)($payload['root'] ?? 'published');
                $path = (string)($payload['path'] ?? '/');
                $content = (string)($payload['content'] ?? '');
                $mime = (string)($payload['mime'] ?? 'application/octet-stream');

                try {
                    $manifest = $app->getPublicWorkspace()->writeFile($root, $path, $content, ['mime' => $mime]);
                    efsdb_json_response(['result' => $manifest], 201);
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_public_file', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/public-workspace/delete') {
            if (!$perms->canManageSettings($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Public workspace management requires tenant admin access'), 403);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                $root = (string)($payload['root'] ?? 'published');
                $path = (string)($payload['path'] ?? '/');
                $result = $app->getPublicWorkspace()->tombstoneFile($root, $path, [
                    'actorId' => $user->id,
                    'reason' => isset($payload['reason']) ? (string)$payload['reason'] : 'manual delete',
                    'retainUntil' => isset($payload['retainUntil']) ? (string)$payload['retainUntil'] : null,
                ]);

                if ($result === null) {
                    efsdb_json_response(efsdb_error('not_found', 'Public workspace file not found'), 404);
                } else {
                    efsdb_json_response(['result' => $result]);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/public-workspace/restore') {
            if (!$perms->canManageSettings($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Public workspace management requires tenant admin access'), 403);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                $root = (string)($payload['root'] ?? 'published');
                $path = (string)($payload['path'] ?? '/');
                $result = $app->getPublicWorkspace()->restoreFile($root, $path, [
                    'actorId' => $user->id,
                ]);

                if ($result === null) {
                    efsdb_json_response(efsdb_error('not_found', 'Public workspace file not found'), 404);
                } else {
                    efsdb_json_response(['result' => $result]);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/gc') {
            if (!$perms->canManageSettings($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Garbage collection requires tenant admin access'), 403);
            } elseif ($method === 'POST') {
                efsdb_json_response(['result' => $app->getGarbageCollector()->collectExpired()]);
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/index/rebuild') {
            if (!$perms->canManageSettings($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Index rebuild requires tenant admin access'), 403);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                try {
                    if (isset($payload['entity']) && is_string($payload['entity']) && $payload['entity'] !== '') {
                        efsdb_json_response(['result' => $app->getIndexRebuilder()->rebuildEntity($payload['entity'])]);
                    } elseif (isset($payload['entities']) && is_array($payload['entities'])) {
                        efsdb_json_response(['result' => $app->getIndexRebuilder()->rebuildAll(array_values(array_map('strval', $payload['entities'])))]);
                    } else {
                        efsdb_json_response(['result' => $app->getIndexRebuilder()->rebuildAll()]);
                    }
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_index_rebuild', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/bootstrap') {
            if ($method === 'GET') {
                efsdb_json_response([
                    'user' => $user->toApi(),
                    'users' => $perms->canManageUsers($user) ? $app->getIdentity()->listUsers() : [],
                    'roles' => $perms->canManageRoles($user) ? $app->getIdentity()->listRoles(false) : [],
                    'settings' => $perms->canManageSettings($user) ? $app->getIdentity()->getTenantSettings() : [],
                ]);
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/analyze/runtime') {
            $canAnalyze = $perms->canManageUsers($user)
                || $perms->canManageSettings($user)
                || $perms->canViewEnvironmentHistory($user);

            if (!$canAnalyze) {
                efsdb_json_response(efsdb_error('forbidden', 'Analyze runtime access requires operator permissions.'), 403);
            } elseif ($method === 'GET') {
                $force = in_array(strtolower((string)($_GET['force'] ?? '')), ['1', 'true', 'yes', 'on'], true);
                efsdb_json_response($app->getRuntimeMonitorService()->snapshot($force));
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/analyze/export') {
            $canAnalyze = $perms->canManageUsers($user)
                || $perms->canManageSettings($user)
                || $perms->canViewEnvironmentHistory($user);

            if (!$canAnalyze) {
                efsdb_json_response(efsdb_error('forbidden', 'Analyze export access requires operator permissions.'), 403);
            } elseif ($method === 'GET') {
                $hours = max(1, min(168, (int)($_GET['hours'] ?? 24)));
                $download = !in_array(strtolower((string)($_GET['download'] ?? '1')), ['0', 'false', 'no', 'off'], true);
                $payload = $app->getRuntimeMonitorService()->exportHistory($hours);

                if ($download) {
                    $timestamp = gmdate('Ymd-His');
                    http_response_code(200);
                    header('Content-Type: application/json');
                    header('Content-Disposition: attachment; filename="efsdb-analyze-' . $hours . 'h-' . $timestamp . '.json"');
                    echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
                } else {
                    efsdb_json_response($payload);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/analyze/process/kill') {
            $canKill = $perms->canManageUsers($user) || $perms->canManageSettings($user);

            if (!$canKill) {
                efsdb_json_response(efsdb_error('forbidden', 'Analyze kill switches require tenant admin access.'), 403);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                $pid = (int)($payload['pid'] ?? 0);

                try {
                    efsdb_json_response(['result' => $app->getRuntimeMonitorService()->killProcess($pid)]);
                } catch (InvalidArgumentException $e) {
                    efsdb_json_response(efsdb_error('invalid_process', $e->getMessage()), 404);
                } catch (RuntimeException $e) {
                    efsdb_json_response(efsdb_error('kill_failed', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/public-workspace/history') {
            if (!$perms->canViewEnvironmentHistory($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Public workspace history requires environment view access'), 403);
            } elseif ($method === 'GET') {
                $root = (string)($_GET['root'] ?? 'published');
                $limit = (int)($_GET['limit'] ?? 10);
                try {
                    efsdb_json_response($app->getEnvironmentOperations()->history($root, $limit));
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_history_request', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/public-workspace/promote') {
            if (!$perms->canChangeEnvironment($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Public workspace promote requires environment change access'), 403);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                try {
                    $result = $app->getEnvironmentOperations()->promote($user->id, $payload['reason'] ?? null);
                    $app->getGhostPreloadService()->preloadEnvironment('production');
                    efsdb_json_response($result);
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_promote_request', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/public-workspace/rollback') {
            if (!$perms->canChangeEnvironment($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Public workspace rollback requires environment change access'), 403);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                $root = (string)($payload['root'] ?? 'production');
                try {
                    $result = $app->getEnvironmentOperations()->rollback($root, $user->id, $payload['reason'] ?? null);
                    $app->getGhostPreloadService()->preloadEnvironment($root);
                    efsdb_json_response($result);
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_rollback_request', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/admin/public-workspace/copy') {
            if (!$perms->canChangeEnvironment($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Public workspace copy requires environment change access'), 403);
            } elseif ($method === 'POST') {
                $payload = efsdb_json_body();
                $sourceRoot = (string)($payload['sourceRoot'] ?? '');
                $targetRoot = (string)($payload['targetRoot'] ?? '');
                try {
                    $result = $app->getEnvironmentOperations()->copy($sourceRoot, $targetRoot, 'copy', $user->id, $payload['reason'] ?? null);
                    $app->getGhostPreloadService()->preloadEnvironment($targetRoot);
                    efsdb_json_response($result);
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('invalid_copy_request', $e->getMessage()), 400);
                }
            } else {
                efsdb_json_response(efsdb_error('method_not_allowed', 'Method not allowed'), 405);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        efsdb_json_response(efsdb_error('not_found', 'Admin endpoint not found'), 404);
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if (str_starts_with($uriPath, '/_efsdb/api/explorer/')) {
        $path = (string)($_GET['path'] ?? '');
        $mode = (string)($_GET['mode'] ?? 'natural');

        if ($uriPath === '/_efsdb/api/explorer/download') {
            $ticket = (string)($_GET['ticket'] ?? '');
            $user = $ticket !== ''
                ? ($auth->authenticateExplorerTicket($ticket, $path, $mode) ?? User::guest())
                : $auth->authenticate(true);

            if ($user->isGuest()) {
                efsdb_json_response(efsdb_error('unauthorized', 'Explorer download requires a bearer token or valid ticket'), 401);
            } else {
                $result = $app->getExplorer()->download($user, $path, $mode);
                if ($result === null) {
                    efsdb_json_response(efsdb_error('not_found', 'Explorer item not found'), 404);
                } else {
                    header('Content-Type: ' . $result['mime']);
                    header('Content-Length: ' . strlen($result['bytes']));
                    header('Content-Disposition: inline; filename="' . basename($result['filename']) . '"');
                    echo $result['bytes'];
                }
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Bearer token required'), 401);
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/explorer/list') {
            $result = $app->getExplorer()->list($user, $path, $mode);
            if (isset($result['error'])) {
                efsdb_json_response($result['error'] === 'PAYWALL'
                    ? efsdb_error('paywall', (string)$result['message'])
                    : efsdb_error('forbidden', (string)$result['message']), $result['error'] === 'PAYWALL' ? 403 : 403);
            } else {
                efsdb_json_response($result);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($method === 'POST' && $uriPath === '/_efsdb/api/explorer/delete') {
            $input = efsdb_json_body();
            $path = (string)($input['path'] ?? '');
            $confirmKey = (string)($input['confirmPassphrase'] ?? $input['confirmKey'] ?? '');

            if (!$auth->verifyCurrentKey($user, $confirmKey)) {
                efsdb_json_response(efsdb_error('invalid_credentials', 'Delete requires the current user passphrase'), 401);
                if (!defined('EFSDB_TEST_MODE')) {
                    exit;
                }
                return;
            }

            try {
                $deleted = $app->getExplorer()->delete($user, $path);
                if (!$deleted) {
                    efsdb_json_response(efsdb_error('not_found', 'Explorer item not found'), 404);
                } else {
                    $siteRuntime = $app->getSiteBuildService()->handleSave($path, 'natural');

                    $app->getAudit()->record('explorer.deleted', [
                        'actor' => $user->id,
                        'path' => $path
                    ]);

                    efsdb_json_response([
                        'deleted' => true,
                        'path' => $path,
                        'siteRuntime' => $siteRuntime,
                    ]);
                }
            } catch (DomainException $e) {
                efsdb_json_response(efsdb_error('forbidden', $e->getMessage()), 403);
            } catch (Throwable $e) {
                efsdb_json_response(efsdb_error('server_error', $e->getMessage()), 500);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($method === 'POST' && $uriPath === '/_efsdb/api/explorer/rename') {
            $input = efsdb_json_body();
            $path = (string)($input['path'] ?? '');
            $newPath = (string)($input['newPath'] ?? '');

            try {
                $result = $app->getExplorer()->rename($user, $path, $newPath);
                $logicalPath = $result['details']['logicalPath'] ?? $newPath;
                $result['siteRuntime'] = $app->getSiteBuildService()->handleSave((string)$logicalPath, 'natural');

                $app->getAudit()->record('explorer.renamed', [
                    'actor' => $user->id,
                    'path' => $path,
                    'newPath' => $newPath
                ]);

                efsdb_json_response($result['details'] + [
                    'siteRuntime' => $result['siteRuntime'],
                ]);
            } catch (DomainException $e) {
                efsdb_json_response(efsdb_error('forbidden', $e->getMessage()), 403);
            } catch (InvalidArgumentException $e) {
                efsdb_json_response(efsdb_error('invalid_path', $e->getMessage()), 400);
            } catch (Throwable $e) {
                efsdb_json_response(efsdb_error('server_error', $e->getMessage()), 500);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($method === 'POST' && $uriPath === '/_efsdb/api/explorer/duplicate') {
            $input = efsdb_json_body();
            $path = (string)($input['path'] ?? '');
            $newPath = (string)($input['newPath'] ?? '');

            try {
                $result = $app->getExplorer()->duplicate($user, $path, $newPath);
                $logicalPath = $result['details']['logicalPath'] ?? $newPath;
                $result['siteRuntime'] = $app->getSiteBuildService()->handleSave((string)$logicalPath, 'natural');

                $app->getAudit()->record('explorer.duplicated', [
                    'actor' => $user->id,
                    'path' => $path,
                    'newPath' => $newPath
                ]);

                efsdb_json_response($result['details'] + [
                    'siteRuntime' => $result['siteRuntime'],
                ]);
            } catch (DomainException $e) {
                efsdb_json_response(efsdb_error('forbidden', $e->getMessage()), 403);
            } catch (InvalidArgumentException $e) {
                efsdb_json_response(efsdb_error('invalid_path', $e->getMessage()), 400);
            } catch (Throwable $e) {
                efsdb_json_response(efsdb_error('server_error', $e->getMessage()), 500);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if (($method === 'PUT' || $method === 'POST') && $uriPath === '/_efsdb/api/explorer/put') {
            $input = efsdb_json_body();
            $relPath = (string)($input['relPath'] ?? '');
            $content = (string)($input['content'] ?? '');
            $mime = isset($input['mime']) ? (string)$input['mime'] : null;

            try {
                $result = $app->getExplorer()->put($user, $relPath, $content, $mime);
                $logicalPath = $result['details']['logicalPath'] ?? $relPath;
                $result['details']['siteRuntime'] = $app->getSiteBuildService()->handleSave((string)$logicalPath, 'natural');
                efsdb_json_response($result);
            } catch (DomainException $e) {
                efsdb_json_response(efsdb_error('forbidden', $e->getMessage()), 403);
            } catch (InvalidArgumentException $e) {
                efsdb_json_response(efsdb_error('invalid_path', $e->getMessage()), 400);
            } catch (Throwable $e) {
                efsdb_json_response(efsdb_error('server_error', $e->getMessage()), 500);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($method === 'POST' && $uriPath === '/_efsdb/api/explorer/save') {
            $input = efsdb_json_body();
            $path = (string)($input['path'] ?? '');
            $mode = (string)($input['mode'] ?? 'natural');
            $content = (string)($input['content'] ?? '');
            $mime = isset($input['mime']) ? (string)$input['mime'] : null;

            try {
                $result = $app->getExplorer()->save($user, $path, $mode, $content, $mime);
                if ($result === null) {
                    efsdb_json_response(efsdb_error('not_found', 'Explorer item not found'), 404);
                } else {
                    $logicalPath = $result['logicalPath'] ?? $path;
                    $result['siteRuntime'] = $app->getSiteBuildService()->handleSave($logicalPath, $mode);
                    efsdb_json_response($result);
                }
            } catch (DomainException $e) {
                efsdb_json_response(efsdb_error('forbidden', $e->getMessage()), 403);
            } catch (Throwable $e) {
                efsdb_json_response(efsdb_error('server_error', $e->getMessage()), 500);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($method === 'POST' && $uriPath === '/_efsdb/api/explorer/create-component') {
            $input = efsdb_json_body();
            $name = (string)($input['name'] ?? '');
            $framework = strtolower((string)($input['framework'] ?? 'sveltekit'));
            $env = (string)($input['env'] ?? 'staging');

            $name = preg_replace('/[^a-zA-Z0-9_-]/', '-', $name);
            if ($name === '') {
                efsdb_json_response(efsdb_error('invalid_name', 'Invalid component name'), 400);
                if (!defined('EFSDB_TEST_MODE')) exit;
                return;
            }

            try {
                $explorer = $app->getExplorer();
                $nodeEnv = $app->getNodeEnvironmentService();

                // Read the template directory from projects/examples
                $templatePath = rtrim(str_replace('\\', '/', dirname(__DIR__, 4)), '/') . "/projects/examples/$framework";

                if (!is_dir($templatePath)) {
                    // Fallback to single file generation if template doesn't exist
                    $ext = 'svelte';
                    $content = '';
                    if ($framework === 'sveltekit' || $framework === 'svelte') {
                        $ext = 'svelte';
                        $content = <<<SVELTE
<script lang="ts">
    let { title = '{$name}' } = \$props();
    let count = \$state(0);
</script>

<div class="template-container">
    <header class="hero">
        <h1>{title}</h1>
        <p class="subtitle">A cohesive component spreading data from EFSDB.</p>
    </header>

    <main class="content">
        <section class="features-grid">
            <div class="feature-card">
                <h3>SvelteKit Component</h3>
                <p>This component was generated for the SvelteKit framework.</p>
            </div>
            <div class="feature-card">
                <h3>Public Workspace Access</h3>
                <p>Powered by the EFSDB runtime and public workspace.</p>
            </div>
        </section>

        <section class="interactive-section">
            <h2>Interactive Counter</h2>
            <p>State is preserved and hydrating works perfectly.</p>
            <button class="action-btn" onclick={() => count++}>
                Clicked {count} times
            </button>
        </section>
    </main>
</div>

<style>
    .template-container { font-family: system-ui, -apple-system, sans-serif; color: #111827; background: #f9fafb; min-height: 100vh; }
    .hero { background: #1f2937; color: white; padding: 4rem 2rem; text-align: center; }
    .hero h1 { margin: 0; font-size: 3rem; font-weight: 800; letter-spacing: -0.025em; }
    .subtitle { margin-top: 1rem; font-size: 1.25rem; color: #d1d5db; }
    .content { max-width: 1000px; margin: 0 auto; padding: 3rem 2rem; }
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; }
    .feature-card { background: white; padding: 1.5rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    .feature-card h3 { margin-top: 0; color: #374151; }
    .feature-card p { color: #6b7280; line-height: 1.5; margin-bottom: 0; }
    .interactive-section { background: white; padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); text-align: center; }
    .action-btn { background: #3b82f6; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; transition: background-color 0.2s; }
    .action-btn:hover { background: #2563eb; }
</style>
SVELTE;
                    } elseif ($framework === 'react') {
                        $ext = 'tsx';
                        $content = <<<REACT
import React, { useState } from 'react';

export default function {$name}() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#111827', background: '#f9fafb', minHeight: '100vh' }}>
            <header style={{ background: '#1f2937', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
                <h1 style={{ margin: 0, fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.025em' }}>{$name}</h1>
                <p style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#d1d5db' }}>A cohesive component spreading data from EFSDB.</p>
            </header>

            <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 2rem' }}>
                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                        <h3 style={{ marginTop: 0, color: '#374151' }}>React Component</h3>
                        <p style={{ color: '#6b7280', lineHeight: 1.5, marginBottom: 0 }}>This component was generated for the React framework.</p>
                    </div>
                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                        <h3 style={{ marginTop: 0, color: '#374151' }}>Public Workspace Access</h3>
                        <p style={{ color: '#6b7280', lineHeight: 1.5, marginBottom: 0 }}>Powered by the EFSDB runtime and public workspace.</p>
                    </div>
                </section>

                <section style={{ background: 'white', padding: '2rem', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                    <h2>Interactive Counter</h2>
                    <p>State is preserved and hydrating works perfectly.</p>
                    <button
                        onClick={() => setCount(count + 1)}
                        style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}
                    >
                        Clicked {count} times
                    </button>
                </section>
            </main>
        </div>
    );
}
REACT;
                    } elseif ($framework === 'angular') {
                        $ext = 'ts';
                        $content = <<<ANGULAR
import { Component } from '@angular/core';

@Component({
  selector: 'app-{$name}',
  standalone: true,
  template: `
    <div style="font-family: system-ui, -apple-system, sans-serif; color: #111827; background: #f9fafb; min-height: 100vh;">
        <header style="background: #1f2937; color: white; padding: 4rem 2rem; text-align: center;">
            <h1 style="margin: 0; font-size: 3rem; font-weight: 800; letter-spacing: -0.025em;">{$name}</h1>
            <p style="margin-top: 1rem; font-size: 1.25rem; color: #d1d5db;">A cohesive component spreading data from EFSDB.</p>
        </header>

        <main style="max-width: 1000px; margin: 0 auto; padding: 3rem 2rem;">
            <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <h3 style="margin-top: 0; color: #374151;">Angular Component</h3>
                    <p style="color: #6b7280; line-height: 1.5; margin-bottom: 0;">This component was generated for the Angular framework.</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <h3 style="margin-top: 0; color: #374151;">Public Workspace Access</h3>
                    <p style="color: #6b7280; line-height: 1.5; margin-bottom: 0;">Powered by the EFSDB runtime and public workspace.</p>
                </div>
            </section>

            <section style="background: white; padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); text-align: center;">
                <h2>Interactive Counter</h2>
                <p>State is preserved and hydrating works perfectly.</p>
                <button
                    (click)="increment()"
                    style="background: #3b82f6; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer;"
                >
                    Clicked {{count}} times
                </button>
            </section>
        </main>
    </div>
  `
})
export class {$name}Component {
  count = 0;
  increment() {
    this.count++;
  }
}
ANGULAR;
                    }

                    $relPath = "site/$env/components/$name.$ext";
                    $result = $explorer->put($user, $relPath, $content, 'text/plain');
                    $logicalPath = $result['details']['logicalPath'] ?? $relPath;
                } else {
                    // Copy full template directory from disk
                    $ws = $app->getPublicWorkspace();
                    $copyDir = function (string $src, string $dstPath) use (&$copyDir, $ws, $env) {
                        $items = scandir($src);
                        if ($items === false) return;
                        foreach ($items as $item) {
                            if ($item === '.' || $item === '..' || $item === 'node_modules') continue;

                            $itemSrc = "$src/$item";
                            $itemDst = "$dstPath/$item";

                            if (is_dir($itemSrc)) {
                                $copyDir($itemSrc, $itemDst);
                            } else {
                                $bytes = file_get_contents($itemSrc);
                                if ($bytes !== false) {
                                    $mime = 'application/octet-stream';
                                    if (str_ends_with($item, '.json')) $mime = 'application/json';
                                    elseif (str_ends_with($item, '.js') || str_ends_with($item, '.ts') || str_ends_with($item, '.tsx') || str_ends_with($item, '.jsx')) $mime = 'application/javascript';
                                    elseif (str_ends_with($item, '.css')) $mime = 'text/css';
                                    elseif (str_ends_with($item, '.html')) $mime = 'text/html';
                                    elseif (str_ends_with($item, '.md')) $mime = 'text/markdown';
                                    elseif (str_ends_with($item, '.svg')) $mime = 'image/svg+xml';

                                    // dstPath is like site/staging/components/my-new-route2
                                    $wsRelPath = substr($itemDst, strlen("site/$env/"));
                                    $ws->writeSiteFile($env, $wsRelPath, $bytes, ['mime' => $mime]);
                                }
                            }
                        }
                    };

                    $targetPath = "site/$env/components/$name";
                    $copyDir($templatePath, $targetPath);
                    $logicalPath = $targetPath;
                    $result = ['details' => ['logicalPath' => $logicalPath]];

                    // Update package.json name if it exists
                    $pkgPath = "components/$name/package.json";
                    $pkgBytes = $ws->readSiteFile($env, $pkgPath);
                    if ($pkgBytes !== null && isset($pkgBytes['bytes'])) {
                        $pkgJson = json_decode($pkgBytes['bytes'], true);
                        if (is_array($pkgJson)) {
                            $pkgJson['name'] = $name;
                            $ws->writeSiteFile($env, $pkgPath, json_encode($pkgJson, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), ['mime' => 'application/json']);
                        }
                    }

                    // Note: NodeEnvironmentService handles `node_modules` symlinks dynamically in SiteBuildService
                }

                $result['details']['siteRuntime'] = $app->getSiteBuildService()->handleSave((string)$logicalPath, 'natural');

                $app->getAudit()->record('component.created', [
                    'actor' => $user->id,
                    'name' => $name,
                    'framework' => $framework,
                    'env' => $env,
                    'logicalPath' => $logicalPath
                ]);

                efsdb_json_response($result);
            } catch (DomainException $e) {
                efsdb_json_response(efsdb_error('forbidden', $e->getMessage()), 403);
            } catch (InvalidArgumentException $e) {
                efsdb_json_response(efsdb_error('invalid_path', $e->getMessage()), 400);
            } catch (Throwable $e) {
                efsdb_json_response(efsdb_error('server_error', $e->getMessage()), 500);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($method === 'POST' && $uriPath === '/_efsdb/api/explorer/import-component') {
            $name = (string)($_POST['name'] ?? '');
            $env = (string)($_POST['env'] ?? 'staging');
            $source = (string)($_POST['source'] ?? '');

            $name = preg_replace('/[^a-zA-Z0-9_-]/', '-', $name);
            if ($name === '') {
                efsdb_json_response(efsdb_error('invalid_name', 'Invalid component name'), 400);
                if (!defined('EFSDB_TEST_MODE')) exit;
                return;
            }

            try {
                $ws = $app->getPublicWorkspace();
                $tempDir = sys_get_temp_dir() . '/efsdb_import_' . uniqid();
                mkdir($tempDir, 0777, true);

                $zipFile = $tempDir . '/archive.zip';

                $isTar = false;
                if ($source === 'github') {
                    $githubUrl = rtrim((string)($_POST['githubUrl'] ?? ''), '/');
                    if (!$githubUrl) {
                        throw new InvalidArgumentException('GitHub URL is required');
                    }

                    // Basic GitHub repo URL to zip download (assuming main branch)
                    // e.g. https://github.com/user/repo -> https://github.com/user/repo/archive/refs/heads/main.zip
                    $downloadUrl = $githubUrl . '/archive/refs/heads/main.zip';

                    $opts = [
                        "http" => [
                            "method" => "GET",
                            "header" => "User-Agent: EFSDB-Importer\r\n"
                        ]
                    ];
                    $context = stream_context_create($opts);
                    $zipContent = @file_get_contents($downloadUrl, false, $context);

                    if ($zipContent === false) {
                        // Fallback to master branch
                        $downloadUrl = $githubUrl . '/archive/refs/heads/master.zip';
                        $zipContent = @file_get_contents($downloadUrl, false, $context);
                        if ($zipContent === false) {
                            throw new RuntimeException("Failed to download repository from GitHub. Check the URL or branch name.");
                        }
                    }
                    file_put_contents($zipFile, $zipContent);
                } elseif ($source === 'upload') {
                    if (!isset($_FILES['archive']) || $_FILES['archive']['error'] !== UPLOAD_ERR_OK) {
                        throw new RuntimeException("Upload failed or no file provided");
                    }
                    $fileName = $_FILES['archive']['name'];
                    if (str_ends_with(strtolower($fileName), '.tar.gz') || str_ends_with(strtolower($fileName), '.tgz') || str_ends_with(strtolower($fileName), '.tar')) {
                        $isTar = true;
                        $zipFile = $tempDir . '/archive.tar' . (str_contains(strtolower($fileName), 'gz') ? '.gz' : '');
                    }
                    if (!move_uploaded_file($_FILES['archive']['tmp_name'], $zipFile)) {
                        // Some environments might not allow move_uploaded_file easily, fallback to copy
                        if (!copy($_FILES['archive']['tmp_name'], $zipFile)) {
                            throw new RuntimeException("Failed to save uploaded file");
                        }
                    }
                } else {
                    throw new InvalidArgumentException("Invalid source mode");
                }

                $extractDir = $tempDir . '/extracted';
                mkdir($extractDir);

                if ($isTar) {
                    try {
                        $phar = new PharData($zipFile);
                        $phar->extractTo($extractDir);
                    } catch (Exception $e) {
                        throw new RuntimeException("Failed to extract TAR archive: " . $e->getMessage());
                    }
                } else {
                    $zip = new ZipArchive();
                    if ($zip->open($zipFile) === true) {
                        $zip->extractTo($extractDir);
                        $zip->close();
                    } else {
                        throw new RuntimeException("Failed to open zip archive");
                    }
                }

                // GitHub zips contain a single root folder (e.g. repo-main)
                $items = array_values(array_diff(scandir($extractDir), ['.', '..']));
                $sourcePath = $extractDir;
                if (count($items) === 1 && is_dir($extractDir . '/' . $items[0])) {
                    $sourcePath = $extractDir . '/' . $items[0];
                }

                $copyDir = function (string $src, string $dstPath) use (&$copyDir, $ws, $env) {
                    $items = scandir($src);
                    if ($items === false) return;
                    foreach ($items as $item) {
                        if ($item === '.' || $item === '..' || $item === 'node_modules') continue;

                        $itemSrc = "$src/$item";
                        $itemDst = "$dstPath/$item";

                        if (is_dir($itemSrc)) {
                            $copyDir($itemSrc, $itemDst);
                        } else {
                            $bytes = file_get_contents($itemSrc);
                            if ($bytes !== false) {
                                $mime = 'application/octet-stream';
                                if (str_ends_with($item, '.json')) $mime = 'application/json';
                                elseif (str_ends_with($item, '.js') || str_ends_with($item, '.ts') || str_ends_with($item, '.tsx') || str_ends_with($item, '.jsx')) $mime = 'application/javascript';
                                elseif (str_ends_with($item, '.css')) $mime = 'text/css';
                                elseif (str_ends_with($item, '.html')) $mime = 'text/html';
                                elseif (str_ends_with($item, '.md')) $mime = 'text/markdown';
                                elseif (str_ends_with($item, '.svg')) $mime = 'image/svg+xml';

                                $wsRelPath = substr($itemDst, strlen("site/$env/"));
                                $ws->writeSiteFile($env, $wsRelPath, $bytes, ['mime' => $mime]);
                            }
                        }
                    }
                };

                $targetPath = "site/$env/components/$name";
                $copyDir($sourcePath, $targetPath);
                $logicalPath = $targetPath;

                // Update package.json name if it exists
                $pkgPath = "components/$name/package.json";
                $pkgBytes = $ws->readSiteFile($env, $pkgPath);
                if ($pkgBytes !== null && isset($pkgBytes['bytes'])) {
                    $pkgJson = json_decode($pkgBytes['bytes'], true);
                    if (is_array($pkgJson)) {
                        $pkgJson['name'] = $name;
                        $ws->writeSiteFile($env, $pkgPath, json_encode($pkgJson, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), ['mime' => 'application/json']);
                    }
                }

                $siteRuntime = $app->getSiteBuildService()->handleSave((string)$logicalPath, 'natural');

                $app->getAudit()->record('component.imported', [
                    'actor' => $user->id,
                    'name' => $name,
                    'source' => $source,
                    'env' => $env,
                    'logicalPath' => $logicalPath
                ]);

                // Cleanup
                // Quick recursive delete function for cleanup
                $deleteDir = function ($dir) use (&$deleteDir) {
                    if (!file_exists($dir)) return;
                    $files = array_diff(scandir($dir), ['.', '..']);
                    foreach ($files as $file) {
                        (is_dir("$dir/$file")) ? $deleteDir("$dir/$file") : unlink("$dir/$file");
                    }
                    rmdir($dir);
                };
                $deleteDir($tempDir);

                efsdb_json_response(['details' => ['logicalPath' => $logicalPath, 'siteRuntime' => $siteRuntime]]);
            } catch (Throwable $e) {
                efsdb_json_response(efsdb_error('server_error', $e->getMessage()), 500);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($method === 'POST' && $uriPath === '/_efsdb/api/explorer/nominate-route') {
            $input = efsdb_json_body();
            $path = (string)($input['path'] ?? '');
            $routePath = (string)($input['routePath'] ?? '');
            $access = (string)($input['access'] ?? 'public');

            // Expected path: site/staging/components/my-app
            $segments = explode('/', $path);
            if (count($segments) >= 4 && $segments[0] === 'site' && $segments[2] === 'components') {
                $env = $segments[1];
                $componentName = implode('/', array_slice($segments, 3));

                $routeFile = trim($routePath, '/');
                if ($routeFile === '') {
                    $routeFile = 'index';
                }
                if (!str_ends_with(strtolower($routeFile), '.php')) {
                    $routeFile .= '.php';
                }

                $routeLogicalPath = "site/$env/routes/$routeFile";

                $authGuard = '';
                if ($access === 'protected') {
                    $authGuard = <<<PHP
\$user = \$efsdbApp->getAuth()->authenticate(false);
if (\$user->isGuest()) {
    http_response_code(401);
    echo "<h1>Unauthorized</h1><p>You must be logged in to access this route.</p>";
    return;
}
PHP;
                }

                $phpContent = <<<PHP
<?php
// Auto-generated by EFSDB - Nominated Route for {$componentName}
{$authGuard}
\$componentName = '{$componentName}';
\$basePath = rtrim(\$efsdbSite->basePath(), '/');
\$componentDir = \$efsdbSite->workspacePath('components/' . \$componentName);
\$componentFile = \$efsdbSite->workspacePath('components/' . \$componentName);

if (is_dir(\$componentDir)) {
    if (file_exists(\$componentDir . '/dist/index.html')) {
        \$html = file_get_contents(\$componentDir . '/dist/index.html');
    } elseif (file_exists(\$componentDir . '/dist/browser/index.html')) {
        \$html = file_get_contents(\$componentDir . '/dist/browser/index.html');
    } elseif (file_exists(\$componentDir . '/index.html')) {
        \$rawHtml = file_get_contents(\$componentDir . '/index.html');
        if (str_contains(\$rawHtml, 'type="module"') && preg_match('/\\.(ts|tsx|jsx|svelte|vue)["\']/', \$rawHtml)) {
            \$html = "<!DOCTYPE html><html><head><title>Building...</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"></head><body style=\"font-family: system-ui, sans-serif; padding: 2rem; background: #f9fafb;\"><div style=\"max-width: 600px; margin: 0 auto; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);\"><h2>Component is building...</h2><p>The component <b>{\$componentName}</b> is currently being built or failed to build.</p><p>Please wait a moment and refresh the page. If this persists, check the component build logs.</p></div></body></html>";
        } else {
            \$html = \$rawHtml;
        }
    }
}

if (isset(\$html)) {
    \$componentPath = \$basePath . '/components/' . \$componentName;

    \$dependencies = [];
    \$packageJsonPath = \$componentDir . '/package.json';
    if (file_exists(\$packageJsonPath)) {
        \$pkg = json_decode(file_get_contents(\$packageJsonPath), true);
        if (is_array(\$pkg)) {
            \$allDeps = array_merge(\$pkg['dependencies'] ?? [], \$pkg['devDependencies'] ?? []);
            \$importantKeys = ['react', 'react-dom', '@angular/core', '@angular/cli', '@sveltejs/kit', 'svelte', 'd3', 'vue', 'nuxt', 'vite'];
            foreach (\$importantKeys as \$key) {
                if (isset(\$allDeps[\$key])) {
                    \$dependencies[\$key] = \$allDeps[\$key];
                }
            }
        }
    }

    \$efsdbData = json_encode([
        'env' => \$efsdbSite->environment(),
        'route' => \$componentName,
        'basePath' => \$basePath,
        'dependencies' => \$dependencies,
        'timestamp' => time()
    ]);

    // Base path hydration
    \$html = str_replace('__EFSDB_BASE_PATH__', \$basePath, \$html);
    \$html = str_replace('</head>', "<script>window.__EFSDB__ = " . \$efsdbData . ";</script></head>", \$html);

    // Fallback relative path replacements just in case
    \$html = str_replace('href="./_app/', 'href="' . \$componentPath . '/_app/', \$html);
    \$html = str_replace('src="./_app/', 'src="' . \$componentPath . '/_app/', \$html);
    \$html = str_replace('import("./_app/', 'import("' . \$componentPath . '/_app/', \$html);
    \$html = str_replace('href="/_app/', 'href="' . \$componentPath . '/_app/', \$html);
    \$html = str_replace('src="/_app/', 'src="' . \$componentPath . '/_app/', \$html);
    \$html = str_replace('import("/_app/', 'import("' . \$componentPath . '/_app/', \$html);

    // React/Angular unbuilt replacements
    \$html = str_replace('src="/src/', 'src="' . \$componentPath . '/src/', \$html);
    \$html = str_replace('href="/src/', 'href="' . \$componentPath . '/src/', \$html);

    // React/Angular dist replacements
    \$html = str_replace('href="/assets/', 'href="' . \$componentPath . '/dist/assets/', \$html);
    \$html = str_replace('src="/assets/', 'src="' . \$componentPath . '/dist/assets/', \$html);
    \$html = str_replace('href="/favicon', 'href="' . \$componentPath . '/dist/favicon', \$html);
    \$html = str_replace('href="/vite.svg', 'href="' . \$componentPath . '/dist/vite.svg', \$html);
    \$html = str_replace('href="/icons.svg', 'href="' . \$componentPath . '/dist/icons.svg', \$html);



    // Fallback for public favicon in unbuilt mode
    if (!str_contains(\$html, \$componentPath . '/dist/favicon')) {
        \$html = str_replace('href="/favicon', 'href="' . \$componentPath . '/public/favicon', \$html);
    }

    return [
        'body' => \$html,
        'contentType' => 'text/html; charset=utf-8'
    ];
} elseif (file_exists(\$componentFile) && !is_dir(\$componentFile)) {
    // Handle single-file components
    \$ext = strtolower(pathinfo(\$componentName, PATHINFO_EXTENSION));

    if (in_array(\$ext, ['jsx', 'tsx'])) {
        \$rawCode = file_get_contents(\$componentFile);
        \$cleanCode = preg_replace('/^import\s+.*?;?\s*$/m', '', \$rawCode);
        \$cleanCode = preg_replace('/export\s+default\s+(function|class|const|let|var)\s+(\w+)?/m', '$1 $2', \$cleanCode);

        \$compName = 'App';
        if (preg_match('/function\s+(\w+)/', \$cleanCode, \$m)) {
            \$compName = \$m[1];
        }

        \$html = "<!DOCTYPE html><html><head><title>Preview: {\$componentName}</title>";
        \$html .= '<meta name="viewport" content="width=device-width, initial-scale=1">';
        \$html .= '<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>';
        \$html .= '<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>';
        \$html .= '<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>';
        \$html .= "<style>body { font-family: system-ui, sans-serif; margin: 0; padding: 0; background: #fff; }</style>";
        \$html .= "</head><body><div id='root'></div>";
        \$html .= "<script type='text/babel' data-type='module'>";
        \$html .= \$cleanCode;
        \$html .= "\nconst root = ReactDOM.createRoot(document.getElementById('root'));";
        \$html .= "\nroot.render(React.createElement({\$compName}));";
        \$html .= "</script></body></html>";
    } else {
        \$html = "<!DOCTYPE html><html><head><title>Preview: {\$componentName}</title>";
        \$html .= "<style>body { font-family: system-ui, sans-serif; padding: 2rem; background: #f9fafb; } .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }</style>";
        \$html .= "</head><body><div class='card'>";
        \$html .= "<h2>{\$componentName}</h2>";
        \$html .= "<p>This is a single-file component. In a full build, this would be compiled by Vite.</p>";
        \$html .= "<div style='margin-top: 1rem; padding: 1rem; background: #f3f4f6; border-radius: 4px; overflow-x: auto;'><pre><code>";
        \$html .= htmlspecialchars(file_get_contents(\$componentFile));
        \$html .= "</code></pre></div></div></body></html>";
    }

    return [
        'body' => \$html,
        'contentType' => 'text/html; charset=utf-8'
    ];
}

return null;
PHP;

                try {
                    $result = $app->getExplorer()->put($user, $routeLogicalPath, $phpContent, 'application/x-httpd-php');
                    // Inform the site build service about the new route
                    $app->getSiteBuildService()->handleSave($routeLogicalPath, 'natural');
                    $app->getGhostPreloadService()->preloadEnvironment($env);

                    $app->getAudit()->record('component.nominated_route', [
                        'actor' => $user->id,
                        'componentName' => $componentName,
                        'routePath' => $routePath,
                        'access' => $access,
                        'logicalPath' => $routeLogicalPath
                    ]);

                    efsdb_json_response($result);
                } catch (Throwable $e) {
                    efsdb_json_response(efsdb_error('server_error', $e->getMessage()), 500);
                }
            } else {
                efsdb_json_response(efsdb_error('invalid_path', 'Path must be a valid component path'), 400);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/explorer/site-runtime') {
            $result = $app->getExplorer()->details($user, $path, $mode);
            if ($result === null) {
                efsdb_json_response(efsdb_error('not_found', 'Explorer item not found'), 404);
            } else {
                $logicalPath = $result['logicalPath'] ?? $path;
                efsdb_json_response($app->getSiteBuildService()->describePath($logicalPath, $mode));
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/explorer/details') {
            $result = $app->getExplorer()->details($user, $path, $mode);
            if ($result === null) {
                efsdb_json_response(efsdb_error('not_found', 'Explorer item not found'), 404);
            } else {
                $logicalPath = $result['logicalPath'] ?? $path;
                $result['siteRuntime'] = $app->getSiteBuildService()->describePath($logicalPath, $mode);
                efsdb_json_response($result);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/_efsdb/api/explorer/ticket') {
            if (!$app->getExplorer()->hasFile($user, $path, $mode)) {
                efsdb_json_response(efsdb_error('not_found', 'Explorer item not found'), 404);
            } else {
                efsdb_json_response($auth->issueExplorerTicket($user, $path, $mode));
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        efsdb_json_response(efsdb_error('not_found', 'Explorer endpoint not found'), 404);
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'GET' && str_starts_with($uriPath, '/_efsdb/api/products')) {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if (preg_match('#^/_efsdb/api/products/([^/?]+)#', $uriPath, $matches)) {
            $id = $matches[1];
            $doc = $app->getProductService()->get($id);
            if ($doc === null) {
                efsdb_json_response(efsdb_error('not_found', 'Not Found'), 404);
            } else {
                efsdb_json_response(['result' => $doc]);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        try {
            efsdb_json_response($app->getProductService()->list($_GET));
        } catch (InvalidArgumentException $e) {
            efsdb_json_response(efsdb_error('invalid_products_request', $e->getMessage()), 400);
        }
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'GET' && $uriPath === '/_efsdb/api/search') {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
        } else {
            try {
                efsdb_json_response($app->getSearchService()->search($user, $_GET));
            } catch (InvalidArgumentException $e) {
                efsdb_json_response(efsdb_error('invalid_search', $e->getMessage()), 400);
            } catch (RuntimeException $e) {
                efsdb_json_response(efsdb_error('forbidden', $e->getMessage()), 403);
            }
        }
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'GET' && $uriPath === '/_efsdb/api/facets') {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
        } else {
            try {
                efsdb_json_response($app->getFacetService()->compute($user, $_GET));
            } catch (InvalidArgumentException $e) {
                efsdb_json_response(efsdb_error('invalid_facets', $e->getMessage()), 400);
            } catch (RuntimeException $e) {
                efsdb_json_response(efsdb_error('forbidden', $e->getMessage()), 403);
            }
        }
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    efsdb_json_response(efsdb_error('not_found', 'Endpoint not found'), 404);
    if (!defined('EFSDB_TEST_MODE')) {
        exit;
    }
    return;
}

if (isset($_POST['login_key']) || $uriPath === '/_efsdb/login') {
    if (isset($_POST['login_key'])) {
        $result = $auth->login((string)$_POST['login_key']);
        if ($result !== null) {
            $target = efsdb_default_login_target($uriPath);
            header('Location: ' . $target);
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }
        $loginError = 'Invalid login key';
    }
}

if ($uriPath === '/_efsdb/logout') {
    $auth->logout();
    header('Location: /_efsdb/');
    if (!defined('EFSDB_TEST_MODE')) {
        exit;
    }
    return;
}

$isControlPlane = str_starts_with($uriPath, '/_efsdb/') || $uriPath === '/_efsdb';

if (isset($_GET['action']) && is_string($_GET['action'])) {
    if ($uriPath === '/' || $uriPath === '/_efsdb/' || $uriPath === '/_efsdb') {
        $legacyAction = $_GET['action'];
        $target = $legacyAction === 'home' ? '/_efsdb/' : '/_efsdb/' . urlencode($legacyAction);
        header('Location: ' . $target, true, 301);
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }
}

if (!$isControlPlane) {
    // The fast path should have handled the Ghost HTML already, but if it fell through for some reason
    // we still let the router handle it
    $publicResponse = $app->getPublicSiteRouter()->handle($uriPath, $method, fn() => $auth->authenticate());
    if ($publicResponse !== null) {
        $isRootPath = $uriPath === '/' || $uriPath === '' || $uriPath === '/staging' || $uriPath === '/staging/';
        if ($publicResponse['status'] === 404 && $isRootPath && trim((string)($publicResponse['body'] ?? '')) === '404 Not Found (EFSDB)') {
            // Fall through to the welcome page
        } else {
            http_response_code((int)$publicResponse['status']);
            header('Connection: close');
            foreach ($publicResponse['headers'] as $name => $value) {
                header($name . ': ' . $value);
            }
            echo $publicResponse['body'];
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }
    }
}

$action = '';
if ($isControlPlane) {
    if ($uriPath === '/_efsdb') {
        $subPath = '';
    } else {
        $subPath = trim(substr($uriPath, 8), '/');
    }
    if ($subPath === '' && isset($_GET['action'])) {
        $action = (string)$_GET['action'];
    } elseif ($subPath === '') {
        $action = 'home';
    } else {
        $action = $subPath;
    }
}

$user = $auth->authenticate();
$isGuest = $user->isGuest();
$shellMode = 'default';
$loginRedirectTarget = efsdb_default_login_target($uriPath);
$loginHomeTarget = efsdb_control_plane_path('home');
$overlayRequestedRoute = $uriPath === '/_efsdb' ? '/_efsdb/' : $uriPath;
$authOverlaySiteUrl = '/';
$siteChrome = [];

if ($isControlPlane) {
    if ($isGuest && !in_array($action, ['login'], true)) {
        $action = 'login';
    }

    if ($isGuest) {
        $overlayContext = efsdb_guest_overlay_context($uriPath);
        $shellMode = 'guest-overlay';
        $loginRedirectTarget = $overlayContext['loginTarget'];
        $loginHomeTarget = $overlayContext['exitUrl'];
        $overlayRequestedRoute = $overlayContext['routeLabel'];
        $authOverlaySiteUrl = $overlayContext['siteUrl'];
        $siteChrome = efsdb_site_chrome(
            'compact',
            $overlayContext['siteUrl'],
            $overlayContext['routeLabel'],
            'Exit to website',
            $overlayContext['exitUrl'],
        );
    } elseif (!$isGuest && in_array($action, ['login'], true)) {
        $action = 'home';
    }

    $viewFile = __DIR__ . '/views/' . $action . '.php';

    if (!file_exists($viewFile)) {
        header('Location: /_efsdb/');
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    require __DIR__ . '/views/header.php';
    require $viewFile;
    require __DIR__ . '/views/footer.php';
} else {
    // Let the router try to serve the request first
    $siteResponse = $app->getPublicSiteRouter()->handle($uriPath, $method, User::guest(), getallheaders());

    // If it was found, return it.
    if ($siteResponse !== null) {
        foreach ($siteResponse['headers'] as $name => $value) {
            header($name . ': ' . $value);
        }
        http_response_code($siteResponse['status']);
        echo $siteResponse['body'];
        return;
    }

    http_response_code(404);
    echo "404 Not Found (EFSDB)";
}
