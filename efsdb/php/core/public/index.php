<?php
declare(strict_types=1);

if (php_sapi_name() === 'cli-server') {
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (is_string($path) && is_file(__DIR__ . $path)) {
        return false;
    }
}

$startTime = microtime(true);

require_once __DIR__ . '/../src/Analytics.php';
require_once __DIR__ . '/../src/App.php';
require_once __DIR__ . '/../src/Auth.php';
require_once __DIR__ . '/../src/Config.php';
require_once __DIR__ . '/../src/Permissions.php';

date_default_timezone_set('America/Toronto');

$dataDir = Config::getDataDir();
$schemaDir = Config::getSchemaDir();

register_shutdown_function(function () use ($startTime, $dataDir): void {
    if (defined('STDIN')) {
        return;
    }

    $duration = microtime(true) - $startTime;
    $bytes = ob_get_length() ?: 0;
    $method = $_SERVER['REQUEST_METHOD'] ?? 'UNKNOWN';
    $uri = $_SERVER['REQUEST_URI'] ?? '/';

    try {
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

$uriPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if (str_starts_with($uriPath, '/api/')) {
    if ($uriPath === '/api/health') {
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

    if ($method === 'POST' && $uriPath === '/api/auth/login') {
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

    if ($method === 'POST' && $uriPath === '/api/auth/refresh') {
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

    if ($method === 'POST' && $uriPath === '/api/auth/logout') {
        $auth->logout();
        efsdb_json_response(['status' => 'ok']);
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($uriPath === '/api/auth/whoami') {
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

    if ($method === 'POST' && $uriPath === '/api/auth/display-mode') {
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

    if (str_starts_with($uriPath, '/api/admin/')) {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/api/admin/users') {
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

        if ($uriPath === '/api/admin/roles') {
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

        if ($uriPath === '/api/admin/settings') {
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

        if ($uriPath === '/api/admin/public-workspace/root') {
            if (!$perms->canManageSettings($user)) {
                efsdb_json_response(efsdb_error('forbidden', 'Public workspace management requires tenant admin access'), 403);
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

        if ($uriPath === '/api/admin/public-workspace/file') {
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

        if ($uriPath === '/api/admin/public-workspace/delete') {
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

        if ($uriPath === '/api/admin/public-workspace/restore') {
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

        if ($uriPath === '/api/admin/gc') {
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

        efsdb_json_response(efsdb_error('not_found', 'Admin endpoint not found'), 404);
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if (str_starts_with($uriPath, '/api/explorer/')) {
        $path = (string)($_GET['path'] ?? '');
        $mode = (string)($_GET['mode'] ?? 'natural');

        if ($uriPath === '/api/explorer/download') {
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

        if ($uriPath === '/api/explorer/list') {
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

        if ($uriPath === '/api/explorer/details') {
            $result = $app->getExplorer()->details($user, $path, $mode);
            if ($result === null) {
                efsdb_json_response(efsdb_error('not_found', 'Explorer item not found'), 404);
            } else {
                efsdb_json_response($result);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if ($uriPath === '/api/explorer/ticket') {
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

    if ($method === 'GET' && str_starts_with($uriPath, '/api/products')) {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        if (preg_match('#^/api/products/([^/?]+)#', $uriPath, $matches)) {
            $id = $matches[1];
            try {
                $doc = $app->getStore()->readDocument('products', $id);
                efsdb_json_response(['result' => $doc]);
            } catch (Throwable) {
                efsdb_json_response(efsdb_error('not_found', 'Not Found'), 404);
            }
            if (!defined('EFSDB_TEST_MODE')) {
                exit;
            }
            return;
        }

        $scan = $app->getStore()->scanManifests('products', min(100, max(1, (int)($_GET['limit'] ?? 20))), $_GET['cursor'] ?? null);
        efsdb_json_response($scan);
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'GET' && $uriPath === '/api/search') {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
        } else {
            $q = strtolower(substr((string)($_GET['q'] ?? ''), 0, 256));
            $results = [];
            foreach ($app->getStore()->scanAllManifests('products', 1000) as $manifest) {
                $indexes = $manifest['indexes'] ?? [];
                foreach ($indexes as $value) {
                    if (is_string($value) && str_contains(strtolower($value), $q)) {
                        $results[] = $manifest;
                        break;
                    }
                }
            }
            efsdb_json_response([
                'results' => $results,
                'meta' => [
                    'total' => count($results),
                    'limit' => count($results),
                    'offset' => 0,
                    'took' => 0,
                ],
            ]);
        }
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    if ($method === 'GET' && $uriPath === '/api/facets') {
        $user = $auth->authenticate(true);
        if ($user->isGuest()) {
            efsdb_json_response(efsdb_error('unauthorized', 'Unauthorized'), 401);
        } else {
            efsdb_json_response(['category' => [], 'ownerId' => []]);
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

if (isset($_POST['login_key'])) {
    $result = $auth->login((string)$_POST['login_key']);
    if ($result !== null) {
        $target = $_GET['action'] ?? 'admin';
        header('Location: ?action=' . urlencode((string)$target));
        if (!defined('EFSDB_TEST_MODE')) {
            exit;
        }
        return;
    }

    $loginError = 'Invalid login key';
}

if (isset($_GET['logout'])) {
    $auth->logout();
    header('Location: ?');
    if (!defined('EFSDB_TEST_MODE')) {
        exit;
    }
    return;
}

if (!isset($_GET['action'])) {
    $publicResponse = $app->getPublicSiteRouter()->handle($uriPath, $method, $auth->authenticate());
    if ($publicResponse !== null) {
        http_response_code((int)$publicResponse['status']);
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

$action = (string)($_GET['action'] ?? 'home');
$user = $auth->authenticate();
$isGuest = $user->isGuest();

if ($isGuest && !in_array($action, ['home', 'login'], true)) {
    $action = 'login';
}

$viewFile = __DIR__ . '/views/' . $action . '.php';
require __DIR__ . '/views/header.php';

if (file_exists($viewFile)) {
    require $viewFile;
} else {
    echo "<div class='shell-card'><div class='shell-card__body'><h2 class='shell-title'>View not found</h2><p class='shell-copy'>" . htmlspecialchars($action) . "</p></div></div>";
}

require __DIR__ . '/views/footer.php';
