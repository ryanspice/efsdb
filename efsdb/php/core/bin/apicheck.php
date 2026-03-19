<?php
declare(strict_types=1);

error_reporting(E_ERROR | E_PARSE);
define('EFSDB_TEST_MODE', true);

$dataDir = __DIR__ . '/../.cache/apicheck-data';
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
require_once __DIR__ . '/../src/Store.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$fixtureEntity = 'apicheck_assets';
$app->upsert($fixtureEntity, [
    'id' => 'apicheck-fixture',
    'logicalPath' => 'fixtures/sample.json',
    'kind' => 'apicheck',
    'message' => 'hello from apicheck',
]);

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
putenv('EFSDB_DATA_DIR=' . __DIR__ . '/../public/.efsdb-public');
putenv('EFSDB_WEB_ROOT=' . __DIR__ . '/../public');
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

function run_request(string $method, string $uri, ?array $body = null, ?string $bearer = null): array
{
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

    if ($body !== null) {
        $GLOBALS['EFSDB_TEST_JSON_BODY'] = json_encode($body, JSON_THROW_ON_ERROR);
    } else {
        unset($GLOBALS['EFSDB_TEST_JSON_BODY']);
    }

    ob_start();
    include __DIR__ . '/../public/index.php';
    $output = ob_get_clean();

    unset($GLOBALS['EFSDB_TEST_JSON_BODY']);

    return [
        'status' => http_response_code(),
        'json' => json_decode((string)$output, true),
        'raw' => (string)$output,
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
$fixturePath = $fixtureEntity . '/fixtures/sample.json';

$tests[] = ['name' => 'WhoAmI', 'result' => run_request('GET', '/api/auth/whoami', null, $token), 'status' => 200];
$tests[] = ['name' => 'Admin Users', 'result' => run_request('GET', '/api/admin/users', null, $token), 'status' => 200];
$tests[] = ['name' => 'Explorer Natural', 'result' => run_request('GET', '/api/explorer/list?mode=natural', null, $token), 'status' => 200];
$tests[] = ['name' => 'Explorer Raw', 'result' => run_request('GET', '/api/explorer/list?mode=raw', null, $token), 'status' => 200];
$tests[] = [
    'name' => 'Explorer Details',
    'result' => run_request('GET', '/api/explorer/details?mode=natural&path=' . rawurlencode($fixturePath), null, $token),
    'status' => 200,
];

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

if (is_array($rawList)) {
    $extraChecks++;
    $hasSystemUsers = false;
    foreach ($rawList as $item) {
        if (($item['name'] ?? null) === 'system_users') {
            $hasSystemUsers = true;
            break;
        }
    }

    if ($hasSystemUsers) {
        echo "[PASS] Explorer Raw Includes System Entities\n";
    } else {
        $failed++;
        echo "[FAIL] Explorer Raw Includes System Entities\n";
        echo "  Expected system_users at root for tenant admin raw view\n";
    }
} else {
    $extraChecks++;
    $failed++;
    echo "[FAIL] Explorer Raw Includes System Entities\n";
    echo "  Raw root listing did not return a JSON item list\n";
}

echo "\nSummary: " . ((count($tests) + $extraChecks) - $failed) . " Passed, $failed Failed.\n";
exit($failed > 0 ? 1 : 0);
