<?php
declare(strict_types=1);

error_reporting(E_ERROR | E_PARSE);
define('EFSDB_TEST_MODE', true);

/**
 * @return array{
 *   binary:string,
 *   version:string,
 *   sapi:string,
 *   ini:string,
 *   scanned:string,
 *   sodiumLoaded:bool,
 *   requiredFunctions:array<string,bool>
 * }
 */
function runtime_diagnostics(): array
{
    $requiredFunctions = [
        'sodium_crypto_kdf_derive_from_key',
        'sodium_crypto_aead_xchacha20poly1305_ietf_encrypt',
        'sodium_crypto_aead_xchacha20poly1305_ietf_decrypt',
    ];

    $functions = [];
    foreach ($requiredFunctions as $name) {
        $functions[$name] = function_exists($name);
    }

    return [
        'binary' => PHP_BINARY,
        'version' => PHP_VERSION,
        'sapi' => PHP_SAPI,
        'ini' => php_ini_loaded_file() ?: '(none)',
        'scanned' => php_ini_scanned_files() ?: '(none)',
        'sodiumLoaded' => extension_loaded('sodium'),
        'requiredFunctions' => $functions,
    ];
}

function require_crypto_runtime(): void
{
    $diag = runtime_diagnostics();
    $missing = [];

    if (!$diag['sodiumLoaded']) {
        $missing[] = 'extension:sodium';
    }

    foreach ($diag['requiredFunctions'] as $name => $present) {
        if (!$present) {
            $missing[] = $name;
        }
    }

    if ($missing === []) {
        echo "[PASS] Crypto Runtime Preflight\n";
        return;
    }

    fwrite(STDERR, "[FAIL] Crypto Runtime Preflight\n");
    fwrite(STDERR, "  Active PHP binary: {$diag['binary']}\n");
    fwrite(STDERR, "  PHP version: {$diag['version']} ({$diag['sapi']})\n");
    fwrite(STDERR, "  Loaded php.ini: {$diag['ini']}\n");
    fwrite(STDERR, "  Additional ini files: {$diag['scanned']}\n");
    fwrite(STDERR, "  Sodium extension loaded: " . ($diag['sodiumLoaded'] ? 'yes' : 'no') . "\n");
    fwrite(STDERR, "  Missing required crypto support: " . implode(', ', $missing) . "\n");
    fwrite(STDERR, "  apicheck.php requires a PHP runtime that loads sodium and exposes the FSDB crypto functions before bootstrap.\n");
    exit(1);
}

require_crypto_runtime();

if (!function_exists('efsdb_json_response')) {
    /**
     * @param array<string,mixed> $payload
     */
    function efsdb_json_response(array $payload, int $status = 200): void
    {
        $GLOBALS['EFSDB_TEST_RESPONSE_STATUS'] = $status;
        http_response_code($status);
        header('Content-Type: application/json');

        if (class_exists('RequestTiming')) {
            RequestTiming::current()?->emit();
        }

        echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    }
}

$dataDir = __DIR__ . '/../../../../.cache/efsdb/tests/core/apicheck-data';
if (is_dir($dataDir)) {
    $it = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dataDir, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::CHILD_FIRST
    );
    foreach ($it as $item) {
        ($item->isDir() ? 'rmdir' : 'unlink')($item->getRealPath());
    }
    rmdir($dataDir);
}

$_SERVER['EFSDB_DATA_DIR'] = $dataDir;
$_SERVER['EFSDB_ENV'] = 'test';
$_SERVER['EFSDB_BOOTSTRAP_SECRET'] = 'tenant-admin-api-check';
$_SERVER['HTTP_HOST'] = 'localhost';
$_SERVER['SERVER_PORT'] = 80;
$_SERVER['REMOTE_ADDR'] = '127.0.0.1';
$_ENV['EFSDB_DATA_DIR'] = $dataDir;
$_ENV['EFSDB_ENV'] = 'test';
$_ENV['EFSDB_BOOTSTRAP_SECRET'] = 'tenant-admin-api-check';
putenv("EFSDB_DATA_DIR=$dataDir");
putenv('EFSDB_ENV=test');
putenv('EFSDB_BOOTSTRAP_SECRET=tenant-admin-api-check');

require_once __DIR__ . '/../src/App.php';
require_once __DIR__ . '/../src/Config.php';
require_once __DIR__ . '/../src/Permissions.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$app->getIdentity()->createRole([
    'id' => 'site_editor',
    'name' => 'Site Editor',
    'description' => 'Site workspace editor',
    'entitlements' => [Permissions::ENT_NATURAL_VIEW, Permissions::ENT_SITE_EDIT],
]);
$app->getIdentity()->createRole([
    'id' => 'settings_admin',
    'name' => 'Settings Admin',
    'description' => 'System settings editor',
    'entitlements' => [
        Permissions::ENT_NATURAL_VIEW,
        Permissions::ENT_SYSTEM_SETTINGS_VIEW,
        Permissions::ENT_SYSTEM_SETTINGS_EDIT,
    ],
]);
$app->getIdentity()->createRole([
    'id' => 'publisher',
    'name' => 'Publisher',
    'description' => 'Environment operator',
    'entitlements' => [Permissions::ENT_NATURAL_VIEW, Permissions::ENT_ENVIRONMENT_CHANGE],
]);
$app->getIdentity()->createUser([
    'id' => 'site-editor',
    'username' => 'site-editor',
    'name' => 'Site Editor',
    'roleId' => 'site_editor',
], 'site-editor-api-check');
$app->getIdentity()->createUser([
    'id' => 'settings-admin',
    'username' => 'settings-admin',
    'name' => 'Settings Admin',
    'roleId' => 'settings_admin',
], 'settings-admin-api-check');
$app->getIdentity()->createUser([
    'id' => 'publisher-user',
    'username' => 'publisher-user',
    'name' => 'Publisher User',
    'roleId' => 'publisher',
], 'publisher-api-check');
$app->getPublicWorkspace()->writeFile(
    'production',
    'content/fixtures/sample.json',
    json_encode([
        'id' => 'apicheck-fixture',
        'kind' => 'apicheck',
        'message' => 'hello from apicheck',
    ], JSON_THROW_ON_ERROR),
    ['mime' => 'application/json; charset=utf-8']
);

$routeSource = <<<'PHP'
<?php
$page = json_decode((string)file_get_contents(dirname(__DIR__) . '/content/pages/index.json'), true, 512, JSON_THROW_ON_ERROR);
$title = (string)($page['title'] ?? 'Untitled');
$message = (string)($page['message'] ?? '');
$safeTitle = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$safeEnvironment = htmlspecialchars($efsdbSite->environment(), ENT_QUOTES, 'UTF-8');

return [
    'layout' => 'default.php',
    'title' => $title,
    'content' => "<main><h1>{$safeTitle}</h1><p>{$safeMessage}</p><small data-env=\"{$safeEnvironment}\">{$safeEnvironment}</small></main>",
];
PHP;

$layoutSource = <<<'PHP'
<?php
$pageTitle = isset($title) ? (string)$title : 'Untitled';
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8') ?></title>
  </head>
  <body data-env="<?= htmlspecialchars($efsdbSite->environment(), ENT_QUOTES, 'UTF-8') ?>">
    <?= $slot ?? '' ?>
  </body>
</html>
PHP;

$notFoundRouteSource = <<<'PHP'
<?php
return [
    'layout' => 'default.php',
    'title' => 'Not Found',
    'content' => '<main><h1>Not Found</h1></main>',
];
PHP;

$componentSource = <<<'SVELTE'
<script>
  let label = 'Welcome Island';
</script>

<section class="welcome-island">{label}</section>
SVELTE;

foreach (['production' => 'Production Home', 'staging' => 'Staging Home'] as $root => $title) {
    $app->getPublicWorkspace()->writeFile($root, 'routes/index.php', $routeSource, ['mime' => 'text/x-php; charset=utf-8']);
    $app->getPublicWorkspace()->writeFile($root, 'routes/404.php', $notFoundRouteSource, ['mime' => 'text/x-php; charset=utf-8']);
    $app->getPublicWorkspace()->writeFile($root, 'layouts/default.php', $layoutSource, ['mime' => 'text/x-php; charset=utf-8']);
    $app->getPublicWorkspace()->writeFile($root, 'components/WelcomeIsland.svelte', $componentSource, ['mime' => 'text/plain; charset=utf-8']);
    $app->getPublicWorkspace()->writeFile(
        $root,
        'content/pages/index.json',
        json_encode([
            'title' => $title,
            'message' => 'hello from ' . $root,
        ], JSON_THROW_ON_ERROR),
        ['mime' => 'application/json; charset=utf-8']
    );
}

$originalEnv = $_SERVER['EFSDB_ENV'];
$originalDataDir = $_SERVER['EFSDB_DATA_DIR'];
$originalWebRoot = $_SERVER['EFSDB_WEB_ROOT'] ?? null;

$_SERVER['EFSDB_ENV'] = 'production';
$_SERVER['EFSDB_DATA_DIR'] = __DIR__ . '/../public/.efsdb-public';
$_SERVER['EFSDB_WEB_ROOT'] = __DIR__ . '/../public';
$_ENV['EFSDB_ENV'] = 'production';
$_ENV['EFSDB_DATA_DIR'] = __DIR__ . '/../public/.efsdb-public';
$_ENV['EFSDB_WEB_ROOT'] = __DIR__ . '/../public';
putenv('EFSDB_ENV=production');
$publicDir = str_replace('\\', '/', realpath(__DIR__ . '/../public'));
putenv('EFSDB_DATA_DIR=' . $publicDir . '/.efsdb-public');
putenv('EFSDB_WEB_ROOT=' . $publicDir);
$rejectsPublicDataDir = false;

try {
    Config::getDataDir();
} catch (RuntimeException) {
    $rejectsPublicDataDir = true;
}

$_SERVER['EFSDB_ENV'] = $originalEnv;
$_SERVER['EFSDB_DATA_DIR'] = $originalDataDir;
$_ENV['EFSDB_ENV'] = $originalEnv;
$_ENV['EFSDB_DATA_DIR'] = $originalDataDir;
putenv("EFSDB_ENV=$originalEnv");
putenv("EFSDB_DATA_DIR=$originalDataDir");
if ($originalWebRoot === null) {
    unset($_SERVER['EFSDB_WEB_ROOT']);
    unset($_ENV['EFSDB_WEB_ROOT']);
    putenv('EFSDB_WEB_ROOT');
} else {
    $_SERVER['EFSDB_WEB_ROOT'] = $originalWebRoot;
    $_ENV['EFSDB_WEB_ROOT'] = $originalWebRoot;
    putenv("EFSDB_WEB_ROOT=$originalWebRoot");
}

function run_request(string $method, string $uri, ?array $body = null, ?string $bearer = null, array $headers = []): array
{
    if (str_starts_with($uri, '/api/')) {
        $uri = '/_efsdb' . $uri;
    }
    $GLOBALS['EFSDB_TEST_RESPONSE_STATUS'] = 200;

    foreach (array_keys($_SERVER) as $key) {
        if (!is_string($key)) {
            continue;
        }

        if (($key === 'CONTENT_TYPE' || $key === 'CONTENT_LENGTH' || str_starts_with($key, 'HTTP_')) && $key !== 'HTTP_HOST') {
            unset($_SERVER[$key]);
        }
    }

    $_SERVER['REQUEST_METHOD'] = $method;
    $_SERVER['REQUEST_URI'] = $uri;
    $_SERVER['HTTP_AUTHORIZATION'] = $bearer ? "Bearer $bearer" : '';
    http_response_code(200);
    $_GET = [];
    $_POST = [];
    $_COOKIE = [];

    $parts = parse_url($uri);
    if (isset($parts['query'])) {
        parse_str($parts['query'], $_GET);
    }

    foreach ($headers as $name => $value) {
        if (!is_string($name) || !is_scalar($value)) {
            continue;
        }

        $normalized = strtoupper(str_replace('-', '_', trim($name)));
        if ($normalized === 'CONTENT_TYPE' || $normalized === 'CONTENT_LENGTH') {
            $_SERVER[$normalized] = (string)$value;
            continue;
        }

        $_SERVER['HTTP_' . $normalized] = (string)$value;
    }

    if ($body !== null) {
        $GLOBALS['EFSDB_TEST_JSON_BODY'] = json_encode($body, JSON_THROW_ON_ERROR);
    } else {
        unset($GLOBALS['EFSDB_TEST_JSON_BODY']);
    }

    ob_start();
    include __DIR__ . '/../public/index.php';
    $output = ob_get_clean();
    $responseHeaders = headers_list();
    @header_remove();

    unset($GLOBALS['EFSDB_TEST_JSON_BODY']);

    return [
        'status' => (int)($GLOBALS['EFSDB_TEST_RESPONSE_STATUS'] ?? http_response_code() ?: 0),
        'json' => json_decode((string)$output, true),
        'raw' => (string)$output,
        'headers' => $responseHeaders,
    ];
}

$tests = [];

$tests[] = [
    'name' => 'Reject Public Data Dir In Production',
    'result' => ['status' => $rejectsPublicDataDir ? 200 : 500, 'raw' => $rejectsPublicDataDir ? 'rejected' : 'accepted'],
    'status' => 200,
];
$tests[] = ['name' => 'Health', 'result' => run_request('GET', '/api/health'), 'status' => 200];
$tests[] = ['name' => 'Login Rejects test', 'result' => run_request('POST', '/api/auth/login', ['key' => 'test']), 'status' => 401];

$login = run_request('POST', '/api/auth/login', ['key' => 'tenant-admin-api-check']);
$tests[] = ['name' => 'Tenant Admin Login', 'result' => $login, 'status' => 200];
$token = $login['json']['accessToken'] ?? null;
$siteEditorLogin = run_request('POST', '/api/auth/login', ['key' => 'site-editor-api-check']);
$tests[] = ['name' => 'Site Editor Login', 'result' => $siteEditorLogin, 'status' => 200];
$siteEditorToken = $siteEditorLogin['json']['accessToken'] ?? null;
$settingsAdminLogin = run_request('POST', '/api/auth/login', ['key' => 'settings-admin-api-check']);
$tests[] = ['name' => 'Settings Admin Login', 'result' => $settingsAdminLogin, 'status' => 200];
$settingsAdminToken = $settingsAdminLogin['json']['accessToken'] ?? null;
$publisherLogin = run_request('POST', '/api/auth/login', ['key' => 'publisher-api-check']);
$tests[] = ['name' => 'Publisher Login', 'result' => $publisherLogin, 'status' => 200];
$publisherToken = $publisherLogin['json']['accessToken'] ?? null;
$siteRootPath = 'site';
$productionPath = 'site/production';
$systemRootPath = 'system';
$fixtureDirPath = 'site/production/content/fixtures';
$fixturePath = $fixtureDirPath . '/sample.json';
$settingsPath = 'system/settings/settings.json';
$componentPath = 'site/staging/components/WelcomeIsland.svelte';

$tests[] = ['name' => 'Public Production Route', 'result' => run_request('GET', '/'), 'status' => 200];
$tests[] = ['name' => 'Public Staging Route', 'result' => run_request('GET', '/staging', null, $token), 'status' => 200];
$tests[] = ['name' => 'WhoAmI', 'result' => run_request('GET', '/api/auth/whoami', null, $token), 'status' => 200];
$tests[] = ['name' => 'Admin Users', 'result' => run_request('GET', '/api/admin/users', null, $token), 'status' => 200];
$tests[] = ['name' => 'Admin Bootstrap', 'result' => run_request('GET', '/api/admin/bootstrap', null, $token), 'status' => 200];
$tests[] = ['name' => 'Catalog Workspace', 'result' => run_request('GET', '/api/catalog/workspace?q=api&limit=5', null, $token), 'status' => 404];
$tests[] = ['name' => 'Explorer Natural', 'result' => run_request('GET', '/api/explorer/list?mode=natural', null, $token), 'status' => 200];
$tests[] = [
    'name' => 'Explorer Natural Site Root',
    'result' => run_request('GET', '/api/explorer/list?mode=natural&path=' . rawurlencode($siteRootPath), null, $token),
    'status' => 200,
];
$tests[] = [
    'name' => 'Site Editor Natural Root',
    'result' => run_request('GET', '/api/explorer/list?mode=natural', null, $siteEditorToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Settings Admin System Root',
    'result' => run_request('GET', '/api/explorer/list?mode=natural&path=' . rawurlencode($systemRootPath), null, $settingsAdminToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Explorer Natural Production Root',
    'result' => run_request('GET', '/api/explorer/list?mode=natural&path=' . rawurlencode($productionPath), null, $token),
    'status' => 200,
];
$tests[] = [
    'name' => 'Explorer Natural Enriched List',
    'result' => run_request('GET', '/api/explorer/list?mode=natural&path=' . rawurlencode($fixtureDirPath), null, $token),
    'status' => 200,
];
$tests[] = ['name' => 'Explorer Raw', 'result' => run_request('GET', '/api/explorer/list?mode=raw', null, $token), 'status' => 200];
$tests[] = [
    'name' => 'Explorer Details',
    'result' => run_request('GET', '/api/explorer/details?mode=natural&path=' . rawurlencode($fixturePath), null, $token),
    'status' => 200,
];
$tests[] = [
    'name' => 'Explorer Site Runtime Route',
    'result' => run_request('GET', '/api/explorer/site-runtime?mode=natural&path=' . rawurlencode('site/staging/routes/index.php'), null, $token),
    'status' => 200,
];
$updatedFixtureJson = json_encode([
    'id' => 'apicheck-fixture',
    'kind' => 'apicheck',
    'message' => 'hello after save',
], JSON_THROW_ON_ERROR);
$tests[] = [
    'name' => 'Explorer Save Natural Text',
    'result' => run_request('POST', '/api/explorer/save', [
        'mode' => 'natural',
        'path' => $fixturePath,
        'content' => $updatedFixtureJson,
        'mime' => 'application/json; charset=utf-8',
    ], $token),
    'status' => 200,
];
$tests[] = [
    'name' => 'Site Editor Save Site File',
    'result' => run_request('POST', '/api/explorer/save', [
        'mode' => 'natural',
        'path' => $fixturePath,
        'content' => json_encode([
            'id' => 'apicheck-fixture',
            'kind' => 'apicheck',
            'message' => 'hello from site editor',
        ], JSON_THROW_ON_ERROR),
        'mime' => 'application/json; charset=utf-8',
    ], $siteEditorToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Site Editor Save Svelte Component',
    'result' => run_request('POST', '/api/explorer/save', [
        'mode' => 'natural',
        'path' => $componentPath,
        'content' => "<script>\n  let label = 'Updated Island';\n</script>\n\n<section class=\"welcome-island\">{label}</section>\n",
        'mime' => 'text/plain; charset=utf-8',
    ], $siteEditorToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Explorer Site Runtime Component After Valid Save',
    'result' => run_request('GET', '/api/explorer/site-runtime?mode=natural&path=' . rawurlencode($componentPath), null, $token),
    'status' => 200,
];
$tests[] = [
    'name' => 'Site Editor Save Broken Svelte Component',
    'result' => run_request('POST', '/api/explorer/save', [
        'mode' => 'natural',
        'path' => $componentPath,
        'content' => "<script>\n  let label = ;\n</script>\n\n<section class=\"welcome-island\">{label}</section>\n",
        'mime' => 'text/plain; charset=utf-8',
    ], $siteEditorToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Explorer Site Runtime Component After Broken Save',
    'result' => run_request('GET', '/api/explorer/site-runtime?mode=natural&path=' . rawurlencode($componentPath), null, $token),
    'status' => 200,
];
$tests[] = [
    'name' => 'Site Editor Save System File Rejected',
    'result' => run_request('POST', '/api/explorer/save', [
        'mode' => 'natural',
        'path' => $settingsPath,
        'content' => json_encode([
            'id' => 'tenant',
            'settings' => ['defaultDisplayMode' => 'site_editor'],
            'updatedAt' => gmdate('c'),
        ], JSON_THROW_ON_ERROR),
        'mime' => 'application/json; charset=utf-8',
    ], $siteEditorToken),
    'status' => 404,
];
$tests[] = [
    'name' => 'Settings Admin Save System Settings',
    'result' => run_request('POST', '/api/explorer/save', [
        'mode' => 'natural',
        'path' => $settingsPath,
        'content' => json_encode([
            'id' => 'tenant',
            'settings' => [
                'defaultDisplayMode' => 'tenant_admin',
                'accent' => 'amber',
                'roleOrder' => ['tenant_admin', 'member_premium', 'member_standard', 'guest'],
            ],
            'updatedAt' => gmdate('c'),
        ], JSON_THROW_ON_ERROR),
        'mime' => 'application/json; charset=utf-8',
    ], $settingsAdminToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Settings Admin Save Site File Rejected',
    'result' => run_request('POST', '/api/explorer/save', [
        'mode' => 'natural',
        'path' => $fixturePath,
        'content' => $updatedFixtureJson,
        'mime' => 'application/json; charset=utf-8',
    ], $settingsAdminToken),
    'status' => 403,
];
$tests[] = [
    'name' => 'Explorer Save Raw Rejected',
    'result' => run_request('POST', '/api/explorer/save', [
        'mode' => 'raw',
        'path' => $fixturePath,
        'content' => $updatedFixtureJson,
    ], $token),
    'status' => 403,
];
$tests[] = [
    'name' => 'Site Editor Raw Rejected',
    'result' => run_request('GET', '/api/explorer/list?mode=raw', null, $siteEditorToken),
    'status' => 403,
];
$tests[] = [
    'name' => 'Site Editor Public Workspace Root Rejected',
    'result' => run_request('GET', '/api/admin/public-workspace/root?root=production', null, $siteEditorToken),
    'status' => 403,
];
$tests[] = [
    'name' => 'Publisher Public Workspace Root',
    'result' => run_request('GET', '/api/admin/public-workspace/root?root=production', null, $publisherToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Publisher Production History Initial',
    'result' => run_request('GET', '/api/admin/public-workspace/history?root=production&limit=5', null, $publisherToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Publisher Public Workspace File Write Rejected',
    'result' => run_request('POST', '/api/admin/public-workspace/file', [
        'root' => 'production',
        'path' => 'content/fixtures/publisher.json',
        'content' => '{"publisher":true}',
        'mime' => 'application/json; charset=utf-8',
    ], $publisherToken),
    'status' => 403,
];
$tests[] = [
    'name' => 'Publisher Promote Staging To Production',
    'result' => run_request('POST', '/api/admin/public-workspace/promote', [
        'reason' => 'apicheck promote',
    ], $publisherToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Publisher Production History After Promote',
    'result' => run_request('GET', '/api/admin/public-workspace/history?root=production&limit=5', null, $publisherToken),
    'status' => 200,
];
$tests[] = ['name' => 'Public Production Route After Promote', 'result' => run_request('GET', '/'), 'status' => 200];
$tests[] = [
    'name' => 'Publisher Rollback Production',
    'result' => run_request('POST', '/api/admin/public-workspace/rollback', [
        'root' => 'production',
        'reason' => 'apicheck rollback',
    ], $publisherToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Publisher Production History After Rollback',
    'result' => run_request('GET', '/api/admin/public-workspace/history?root=production&limit=5', null, $publisherToken),
    'status' => 200,
];
$tests[] = ['name' => 'Public Production Route After Rollback', 'result' => run_request('GET', '/'), 'status' => 200];
$tests[] = [
    'name' => 'Publisher Copy Production To Staging',
    'result' => run_request('POST', '/api/admin/public-workspace/copy', [
        'sourceRoot' => 'production',
        'targetRoot' => 'staging',
        'reason' => 'apicheck copy',
    ], $publisherToken),
    'status' => 200,
];
$tests[] = [
    'name' => 'Publisher Staging History After Copy',
    'result' => run_request('GET', '/api/admin/public-workspace/history?root=staging&limit=5', null, $publisherToken),
    'status' => 200,
];
$tests[] = ['name' => 'Public Staging Route After Copy', 'result' => run_request('GET', '/staging', null, $token), 'status' => 200];

$ticket = run_request('GET', '/api/explorer/ticket?mode=natural&path=' . rawurlencode($fixturePath), null, $token);
$tests[] = ['name' => 'Explorer Ticket', 'result' => $ticket, 'status' => 200];
$ticketValue = $ticket['json']['ticket'] ?? null;
if (is_string($ticketValue) && $ticketValue !== '') {
    $tests[] = [
        'name' => 'Explorer Download By Ticket',
        'result' => run_request(
            'GET',
            '/api/explorer/download?mode=natural&path=' . rawurlencode($fixturePath) . '&ticket=' . rawurlencode($ticketValue)
        ),
        'status' => 200,
    ];
}

$failed = 0;
$extraChecks = 0;
echo "Running Core API Checks...\n";
foreach ($tests as $test) {
    $ok = $test['result']['status'] === $test['status'];
    if ($ok) {
        echo "[PASS] {$test['name']}\n";
        continue;
    }

    $failed++;
    echo "[FAIL] {$test['name']}\n";
    echo "  Expected {$test['status']}, got {$test['result']['status']}\n";
    echo "  Output: {$test['result']['raw']}\n";
}

$rawList = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Raw') {
        $rawList = $test['result']['json']['items'] ?? null;
        break;
    }
}

$rawEntityList = null;

if (is_array($rawList)) {
    $extraChecks++;
    $hasEntityFolder = false;
    foreach ($rawList as $item) {
        $name = (string)($item['name'] ?? '');
        if ($name === 'public_workspace_files' || $name === 'system_users') {
            $hasEntityFolder = true;
            break;
        }
    }

    if ($hasEntityFolder) {
        echo "[PASS] Explorer Raw Exposes Entity Directories\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Raw Exposes Entity Directories\n";
        echo "  Expected entity directories at raw root\n";
    }

    $firstBucketPath = $rawList[0]['rawPath'] ?? null;
    if (is_string($firstBucketPath) && $firstBucketPath !== '') {
        $bucketResult = run_request('GET', '/api/explorer/list?mode=raw&path=' . rawurlencode($firstBucketPath), null, $token);
        $rawEntityList = $bucketResult['json']['items'] ?? null;
        if (($bucketResult['status'] ?? 500) === 200) {
            echo "[PASS] Explorer Raw Entity Root Loads\n";
        } else {
            $failed++;
            echo "[FAIL] Explorer Raw Entity Root Loads\n";
            echo "  Expected 200 from raw entity root, got {$bucketResult['status']}\n";
        }
        $extraChecks++;
    }
} else {
    $extraChecks++;
    $failed++;
    echo "[FAIL] Explorer Raw Exposes Entity Directories\n";
    echo "  Raw root listing did not return a JSON item list\n";
}

$naturalList = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Natural') {
        $naturalList = $test['result']['json']['items'] ?? null;
        break;
    }
}

if (is_array($naturalList)) {
    $extraChecks++;
    $hasSite = false;
    $hasSystemUsers = false;
    foreach ($naturalList as $item) {
        if (($item['name'] ?? null) === 'site') {
            $hasSite = true;
        }
        if (($item['name'] ?? null) === 'system_users') {
            $hasSystemUsers = true;
        }
    }

    if ($hasSite) {
        echo "[PASS] Explorer Natural Root Includes Site Workspace\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Natural Root Includes Site Workspace\n";
        echo "  Expected site namespace at natural root listing\n";
    }

    if (!$hasSystemUsers) {
        echo "[PASS] Explorer Natural Excludes System Entities\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Natural Excludes System Entities\n";
        echo "  Expected system_users to remain hidden in natural root view\n";
    }
} else {
    $extraChecks++;
    $failed++;
    echo "[FAIL] Explorer Natural Excludes System Entities\n";
    echo "  Natural root listing did not return a JSON item list\n";
}

$siteEditorNaturalList = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Site Editor Natural Root') {
        $siteEditorNaturalList = $test['result']['json']['items'] ?? null;
        break;
    }
}

if (is_array($siteEditorNaturalList)) {
    $extraChecks++;
    $names = array_values(array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $siteEditorNaturalList));
    sort($names, SORT_STRING);
    if ($names === ['site']) {
        echo "[PASS] Site Editor Natural Root Stays Site-Only\n";
    } else {
        $failed++;
        echo "[FAIL] Site Editor Natural Root Stays Site-Only\n";
        echo "  Expected only site for site editor, got: " . implode(', ', $names) . "\n";
    }
}

$settingsAdminSystemList = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Settings Admin System Root') {
        $settingsAdminSystemList = $test['result']['json']['items'] ?? null;
        break;
    }
}

if (is_array($settingsAdminSystemList)) {
    $extraChecks++;
    $names = array_values(array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $settingsAdminSystemList));
    sort($names, SORT_STRING);
    if ($names === ['settings']) {
        echo "[PASS] Settings Admin System Root Stays Namespace-Scoped\n";
    } else {
        $failed++;
        echo "[FAIL] Settings Admin System Root Stays Namespace-Scoped\n";
        echo "  Expected only settings for settings admin, got: " . implode(', ', $names) . "\n";
    }
}

$siteRootList = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Natural Site Root') {
        $siteRootList = $test['result']['json']['items'] ?? null;
        break;
    }
}

if (is_array($siteRootList)) {
    $extraChecks++;
    $names = array_values(array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $siteRootList));
    sort($names, SORT_STRING);
    if ($names === ['production', 'staging']) {
        echo "[PASS] Explorer Natural Site Root Exposes Environments\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Natural Site Root Exposes Environments\n";
        echo "  Expected staging/production under site root, got: " . implode(', ', $names) . "\n";
    }
} else {
    $extraChecks++;
    $failed++;
    echo "[FAIL] Explorer Natural Site Root Exposes Environments\n";
    echo "  Site root listing did not return a JSON item list\n";
}

$productionRootList = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Natural Production Root') {
        $productionRootList = $test['result']['json']['items'] ?? null;
        break;
    }
}

if (is_array($productionRootList)) {
    $extraChecks++;
    $names = array_values(array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $productionRootList));
    sort($names, SORT_STRING);
    if ($names === ['assets', 'components', 'content', 'layouts', 'meta', 'routes']) {
        echo "[PASS] Explorer Natural Environment Root Exposes Canonical Workspace Dirs\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Natural Environment Root Exposes Canonical Workspace Dirs\n";
        echo "  Expected canonical site workspace dirs, got: " . implode(', ', $names) . "\n";
    }
} else {
    $extraChecks++;
    $failed++;
    echo "[FAIL] Explorer Natural Environment Root Exposes Canonical Workspace Dirs\n";
    echo "  Production environment listing did not return a JSON item list\n";
}

if (is_array($rawEntityList)) {
      $extraChecks++;
      $names = array_values(array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $rawEntityList));
      if (in_array('chunks', $names, true) && in_array('manifests', $names, true)) {
          echo "[PASS] Explorer Raw Entity Root Exposes Storage Trees\n";
      } else {
          $failed++;
          echo "[FAIL] Explorer Raw Entity Root Exposes Storage Trees\n";
          echo "  Expected manifests/chunks at raw entity root, got: " . implode(', ', $names) . "\n";
      }
  } else {
      $extraChecks++;
      $failed++;
      echo "[FAIL] Explorer Raw Entity Root Exposes Storage Trees\n";
      echo "  Raw entity listing did not return a JSON item list\n";
  }

$enrichedList = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Natural Enriched List') {
        $enrichedList = $test['result']['json']['items'] ?? null;
        break;
    }
}

if (is_array($enrichedList)) {
    $extraChecks++;
    $sampleItem = $enrichedList[0] ?? null;
    if (
        is_array($sampleItem)
        && ($sampleItem['mime'] ?? null) === 'application/json; charset=utf-8'
        && ($sampleItem['logicalPath'] ?? null) === 'site/production/content/fixtures/sample.json'
        && (($sampleItem['storage']['kind'] ?? null) === 'logical')
    ) {
        echo "[PASS] Explorer Natural Enriched List Carries Lightweight Inspector Fields\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Natural Enriched List Carries Lightweight Inspector Fields\n";
        echo "  Expected mime, logicalPath, and storage.kind on natural list response items\n";
    }
}

$saveResult = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Save Natural Text') {
        $saveResult = $test['result']['json'] ?? null;
        break;
    }
}

if (is_array($saveResult)) {
    $extraChecks++;
    $preview = (string)($saveResult['preview'] ?? '');
    if (str_contains($preview, 'hello after save')) {
        echo "[PASS] Explorer Save Natural Text Updates Preview\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Save Natural Text Updates Preview\n";
        echo "  Expected updated preview content in save response\n";
    }
}

$siteEditorSaveResult = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Site Editor Save Site File') {
        $siteEditorSaveResult = $test['result']['json'] ?? null;
        break;
    }
}

if (is_array($siteEditorSaveResult)) {
    $extraChecks++;
    $preview = (string)($siteEditorSaveResult['preview'] ?? '');
    if (str_contains($preview, 'hello from site editor')) {
        echo "[PASS] Site Editor Save Uses Site Entitlement\n";
    } else {
        $failed++;
        echo "[FAIL] Site Editor Save Uses Site Entitlement\n";
        echo "  Expected site editor save response preview to reflect updated content\n";
    }
}

$siteRuntimeRouteResult = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Site Runtime Route') {
        $siteRuntimeRouteResult = $test['result']['json'] ?? null;
        break;
    }
}

if (is_array($siteRuntimeRouteResult)) {
    $extraChecks++;
    $preview = is_array($siteRuntimeRouteResult['preview'] ?? null) ? $siteRuntimeRouteResult['preview'] : [];
    if (($preview['url'] ?? null) === '/staging' && ($preview['environment'] ?? null) === 'staging') {
        echo "[PASS] Explorer Site Runtime Maps Staging Route To PHP Runtime URL\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Site Runtime Maps Staging Route To PHP Runtime URL\n";
        echo "  Expected staging preview URL to resolve to /staging\n";
    }
}

$validComponentSaveResult = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Site Editor Save Svelte Component') {
        $validComponentSaveResult = $test['result']['json'] ?? null;
        break;
    }
}

if (is_array($validComponentSaveResult)) {
    $extraChecks++;
    $siteRuntime = is_array($validComponentSaveResult['siteRuntime'] ?? null) ? $validComponentSaveResult['siteRuntime'] : [];
    $build = is_array($siteRuntime['build'] ?? null) ? $siteRuntime['build'] : [];
    if (($build['status'] ?? null) === 'success' && (int)($build['componentCount'] ?? 0) >= 1) {
        echo "[PASS] Svelte Save Triggers Successful Server Build\n";
    } else {
        $failed++;
        echo "[FAIL] Svelte Save Triggers Successful Server Build\n";
        echo "  Expected successful build metadata on Svelte save response\n";
    }
}

$validComponentRuntimeResult = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Site Runtime Component After Valid Save') {
        $validComponentRuntimeResult = $test['result']['json'] ?? null;
        break;
    }
}

if (is_array($validComponentRuntimeResult)) {
    $extraChecks++;
    $preview = is_array($validComponentRuntimeResult['preview'] ?? null) ? $validComponentRuntimeResult['preview'] : [];
    $build = is_array($validComponentRuntimeResult['build'] ?? null) ? $validComponentRuntimeResult['build'] : [];
    if (
        ($build['status'] ?? null) === 'success'
        && (($build['lastGoodPreview'] ?? null) === '/staging' || ($preview['url'] ?? null) === '/staging')
    ) {
        echo "[PASS] Explorer Site Runtime Exposes Preview Target After Successful Component Build\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Site Runtime Exposes Preview Target After Successful Component Build\n";
        echo "  Expected successful build status with a retained staging preview pointer after valid component save\n";
    }
}

$brokenComponentSaveResult = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Site Editor Save Broken Svelte Component') {
        $brokenComponentSaveResult = $test['result']['json'] ?? null;
        break;
    }
}

if (is_array($brokenComponentSaveResult)) {
    $extraChecks++;
    $siteRuntime = is_array($brokenComponentSaveResult['siteRuntime'] ?? null) ? $brokenComponentSaveResult['siteRuntime'] : [];
    $build = is_array($siteRuntime['build'] ?? null) ? $siteRuntime['build'] : [];
    if (($build['status'] ?? null) === 'failed' && is_array($build['error'] ?? null)) {
        echo "[PASS] Broken Svelte Save Records Failed Build Without Rejecting Save\n";
    } else {
        $failed++;
        echo "[FAIL] Broken Svelte Save Records Failed Build Without Rejecting Save\n";
        echo "  Expected failed build metadata on broken Svelte save response\n";
    }
}

$brokenComponentRuntimeResult = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Site Runtime Component After Broken Save') {
        $brokenComponentRuntimeResult = $test['result']['json'] ?? null;
        break;
    }
}

if (is_array($brokenComponentRuntimeResult)) {
    $extraChecks++;
    $preview = is_array($brokenComponentRuntimeResult['preview'] ?? null) ? $brokenComponentRuntimeResult['preview'] : [];
    $build = is_array($brokenComponentRuntimeResult['build'] ?? null) ? $brokenComponentRuntimeResult['build'] : [];
    if (
        ($build['status'] ?? null) === 'failed'
        && !empty($build['lastSuccessfulAt'])
        && (($build['lastGoodPreview'] ?? null) === '/staging' || ($preview['url'] ?? null) === '/staging')
    ) {
        echo "[PASS] Failed Svelte Build Preserves Last Good Preview Target\n";
    } else {
        $failed++;
        echo "[FAIL] Failed Svelte Build Preserves Last Good Preview Target\n";
        echo "  Expected failed build status with a retained lastSuccessfulAt timestamp and staging preview pointer\n";
    }
}

$settingsAdminSaveResult = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Settings Admin Save System Settings') {
        $settingsAdminSaveResult = $test['result']['json'] ?? null;
        break;
    }
}

if (is_array($settingsAdminSaveResult)) {
    $extraChecks++;
    if (($settingsAdminSaveResult['logicalPath'] ?? null) === 'system/settings/settings.json') {
        echo "[PASS] Settings Admin Save Stays In System Namespace\n";
    } else {
        $failed++;
        echo "[FAIL] Settings Admin Save Stays In System Namespace\n";
        echo "  Expected settings save response to remain in system/settings/settings.json\n";
    }
}

$downloadResult = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Explorer Download By Ticket') {
        $downloadResult = $test['result']['raw'] ?? null;
        break;
    }
}

if (is_string($downloadResult)) {
    $extraChecks++;
    if (str_contains($downloadResult, 'hello from site editor')) {
        echo "[PASS] Explorer Download By Ticket Returns Saved Bytes\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Download By Ticket Returns Saved Bytes\n";
        echo "  Expected updated explorer download payload after save\n";
    }
}

$publicProductionRoute = null;
$publicStagingRoute = null;
foreach ($tests as $test) {
    if ($test['name'] === 'Public Production Route') {
        $publicProductionRoute = $test['result']['raw'] ?? null;
    }
    if ($test['name'] === 'Public Staging Route') {
        $publicStagingRoute = $test['result']['raw'] ?? null;
    }
}

if (is_string($publicProductionRoute)) {
    $extraChecks++;
    if (
        str_contains($publicProductionRoute, '<title>Production Home</title>')
        && str_contains($publicProductionRoute, 'hello from production')
        && str_contains($publicProductionRoute, 'data-env="production"')
    ) {
        echo "[PASS] Public Production Route Renders PHP Route And Layout\n";
    } else {
        $failed++;
        echo "[FAIL] Public Production Route Renders PHP Route And Layout\n";
        echo "  Expected layout title, route content, and production environment marker\n";
    }
}

if (is_string($publicStagingRoute)) {
    $extraChecks++;
    if (
        str_contains($publicStagingRoute, '<title>Staging Home</title>')
        && str_contains($publicStagingRoute, 'hello from staging')
        && str_contains($publicStagingRoute, 'data-env="staging"')
    ) {
        echo "[PASS] Public Staging Route Uses Staging Workspace\n";
    } else {
        $failed++;
        echo "[FAIL] Public Staging Route Uses Staging Workspace\n";
        echo "  Expected layout title, route content, and staging environment marker\n";
    }
}

$productionHistoryInitial = null;
$productionHistoryAfterPromote = null;
$productionHistoryAfterRollback = null;
$stagingHistoryAfterCopy = null;
$publicProductionAfterPromote = null;
$publicProductionAfterRollback = null;
$publicStagingAfterCopy = null;

foreach ($tests as $test) {
    if ($test['name'] === 'Publisher Production History Initial') {
        $productionHistoryInitial = $test['result']['json']['result'] ?? null;
    }
    if ($test['name'] === 'Publisher Production History After Promote') {
        $productionHistoryAfterPromote = $test['result']['json']['result'] ?? null;
    }
    if ($test['name'] === 'Publisher Production History After Rollback') {
        $productionHistoryAfterRollback = $test['result']['json']['result'] ?? null;
    }
    if ($test['name'] === 'Publisher Staging History After Copy') {
        $stagingHistoryAfterCopy = $test['result']['json']['result'] ?? null;
    }
    if ($test['name'] === 'Public Production Route After Promote') {
        $publicProductionAfterPromote = $test['result']['raw'] ?? null;
    }
    if ($test['name'] === 'Public Production Route After Rollback') {
        $publicProductionAfterRollback = $test['result']['raw'] ?? null;
    }
    if ($test['name'] === 'Public Staging Route After Copy') {
        $publicStagingAfterCopy = $test['result']['raw'] ?? null;
    }
}

if (is_array($productionHistoryInitial)) {
    $extraChecks++;
    $head = is_array($productionHistoryInitial['head'] ?? null) ? $productionHistoryInitial['head'] : [];
    $snapshots = is_array($productionHistoryInitial['snapshots'] ?? null) ? $productionHistoryInitial['snapshots'] : [];
    if (!empty($head['activeSnapshotId']) && count($snapshots) >= 1) {
        echo "[PASS] Production History Seeds A Real Environment Head\n";
    } else {
        $failed++;
        echo "[FAIL] Production History Seeds A Real Environment Head\n";
        echo "  Expected an activeSnapshotId and at least one production snapshot\n";
    }
}

if (is_string($publicProductionAfterPromote)) {
    $extraChecks++;
    if (
        str_contains($publicProductionAfterPromote, '<title>Staging Home</title>')
        && str_contains($publicProductionAfterPromote, 'hello from staging')
        && str_contains($publicProductionAfterPromote, 'data-env="production"')
    ) {
        echo "[PASS] Promote Moves Staging Site State Into Production Runtime\n";
    } else {
        $failed++;
        echo "[FAIL] Promote Moves Staging Site State Into Production Runtime\n";
        echo "  Expected production runtime to render staging content after promote\n";
    }
}

if (is_array($productionHistoryAfterPromote)) {
    $extraChecks++;
    $head = is_array($productionHistoryAfterPromote['head'] ?? null) ? $productionHistoryAfterPromote['head'] : [];
    if (
        ($head['lastOperation'] ?? null) === 'promote'
        && !empty($head['activeSnapshotId'])
        && !empty($head['previousSnapshotId'])
    ) {
        echo "[PASS] Promote Updates Production Head With Previous Snapshot\n";
    } else {
        $failed++;
        echo "[FAIL] Promote Updates Production Head With Previous Snapshot\n";
        echo "  Expected production head to record active and previous snapshots after promote\n";
    }
}

if (is_string($publicProductionAfterRollback)) {
    $extraChecks++;
    if (
        str_contains($publicProductionAfterRollback, '<title>Production Home</title>')
        && str_contains($publicProductionAfterRollback, 'hello from production')
        && str_contains($publicProductionAfterRollback, 'data-env="production"')
    ) {
        echo "[PASS] Rollback Restores Prior Production Site State\n";
    } else {
        $failed++;
        echo "[FAIL] Rollback Restores Prior Production Site State\n";
        echo "  Expected production runtime to return to production content after rollback\n";
    }
}

if (is_array($productionHistoryAfterRollback)) {
    $extraChecks++;
    $head = is_array($productionHistoryAfterRollback['head'] ?? null) ? $productionHistoryAfterRollback['head'] : [];
    if (
        ($head['lastOperation'] ?? null) === 'rollback'
        && !empty($head['activeSnapshotId'])
        && !empty($head['previousSnapshotId'])
    ) {
        echo "[PASS] Rollback Records A New Production Head Event\n";
    } else {
        $failed++;
        echo "[FAIL] Rollback Records A New Production Head Event\n";
        echo "  Expected production head to record rollback with active and previous snapshots\n";
    }
}

if (is_string($publicStagingAfterCopy)) {
    $extraChecks++;
    if (
        str_contains($publicStagingAfterCopy, '<title>Production Home</title>')
        && str_contains($publicStagingAfterCopy, 'hello from production')
        && str_contains($publicStagingAfterCopy, 'data-env="staging"')
    ) {
        echo "[PASS] Copy Replaces Staging Site State Without Changing Environment Identity\n";
    } else {
        $failed++;
        echo "[FAIL] Copy Replaces Staging Site State Without Changing Environment Identity\n";
        echo "  Expected staging runtime to render production content while keeping staging environment markers\n";
    }
}

if (is_array($stagingHistoryAfterCopy)) {
    $extraChecks++;
    $head = is_array($stagingHistoryAfterCopy['head'] ?? null) ? $stagingHistoryAfterCopy['head'] : [];
    if (
        ($head['lastOperation'] ?? null) === 'copy'
        && ($head['sourceEnvironment'] ?? null) === 'production'
        && !empty($head['previousSnapshotId'])
    ) {
        echo "[PASS] Copy Records Staging Head Provenance\n";
    } else {
        $failed++;
        echo "[FAIL] Copy Records Staging Head Provenance\n";
        echo "  Expected staging head to record copy provenance from production\n";
    }

    $restoreSnapshotId = (string)($head['previousSnapshotId'] ?? '');
    if ($restoreSnapshotId !== '') {
        $restoreResult = run_request('POST', '/api/admin/public-workspace/restore-root', [
            'root' => 'staging',
            'snapshotId' => $restoreSnapshotId,
            'reason' => 'apicheck restore',
        ], $publisherToken);
        $extraChecks++;
        if (($restoreResult['status'] ?? 500) === 200) {
            echo "[PASS] Restore Root Endpoint Accepts Prior Staging Snapshot\n";
        } else {
            $failed++;
            echo "[FAIL] Restore Root Endpoint Accepts Prior Staging Snapshot\n";
            echo "  Expected 200 from restore-root, got {$restoreResult['status']}\n";
        }

        $restoredStagingRoute = run_request('GET', '/staging', null, $token);
        $extraChecks++;
        if (
            ($restoredStagingRoute['status'] ?? 500) === 200
            && str_contains((string)($restoredStagingRoute['raw'] ?? ''), '<title>Staging Home</title>')
            && str_contains((string)($restoredStagingRoute['raw'] ?? ''), 'hello from staging')
        ) {
            echo "[PASS] Restore Reapplies Prior Staging Snapshot To Runtime\n";
        } else {
            $failed++;
            echo "[FAIL] Restore Reapplies Prior Staging Snapshot To Runtime\n";
            echo "  Expected restored staging runtime to return to original staging content\n";
        }
    }
}

echo "\nSummary: " . ((count($tests) + $extraChecks) - $failed) . " Passed, $failed Failed.\n";
exit($failed > 0 ? 1 : 0);
