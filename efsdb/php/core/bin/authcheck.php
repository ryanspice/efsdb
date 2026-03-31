<?php
declare(strict_types=1);

define('EFSDB_TEST_MODE', true);
ob_start();

$dataDir = __DIR__ . '/../../../../.cache/efsdb/tests/core/authcheck-data';
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
$_SERVER['EFSDB_BOOTSTRAP_SECRET'] = 'tenant-admin-auth-check';
$_ENV['EFSDB_DATA_DIR'] = $dataDir;
$_ENV['EFSDB_ENV'] = 'test';
$_ENV['EFSDB_BOOTSTRAP_SECRET'] = 'tenant-admin-auth-check';
putenv("EFSDB_DATA_DIR=$dataDir");
putenv('EFSDB_ENV=test');
putenv('EFSDB_BOOTSTRAP_SECRET=tenant-admin-auth-check');

require_once __DIR__ . '/../src/App.php';
require_once __DIR__ . '/../src/Auth.php';
require_once __DIR__ . '/../src/Config.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$auth = new Auth($app);
$identity = $app->getIdentity();

echo "Running Auth/Admin Checks...\n";
$failures = 0;
$checks = 0;

$tenantLogin = $auth->login('tenant-admin-auth-check');
$checks++;
if ($tenantLogin === null) {
    echo "[FAIL] Tenant admin login\n";
    $failures++;
} else {
    echo "[PASS] Tenant admin login\n";
}

$checks++;
if ($auth->login('test') !== null || $auth->login('test_free') !== null) {
    echo "[FAIL] Magic login keys rejected\n";
    $failures++;
} else {
    echo "[PASS] Magic login keys rejected\n";
}

$tenantUser = $identity->authenticateKey('tenant-admin-auth-check');
$checks++;
if ($tenantUser === null) {
    echo "[FAIL] Tenant admin hydration\n";
    $failures++;
} else {
    echo "[PASS] Tenant admin hydration\n";
}

$createdRole = $identity->createRole([
    'id' => 'member_auditor',
    'name' => 'Member Auditor',
    'entitlements' => ['NATURAL_VIEW'],
]);
$checks++;
if (($createdRole['id'] ?? null) !== 'member_auditor') {
    echo "[FAIL] Create custom role\n";
    $failures++;
} else {
    echo "[PASS] Create custom role\n";
}

$createdUser = $identity->createUser([
    'username' => 'auditor-jane',
    'name' => 'Auditor Jane',
    'roleId' => 'member_auditor',
]);
$checks++;
if (($createdUser['user']['username'] ?? null) !== 'auditor-jane') {
    echo "[FAIL] Create user\n";
    $failures++;
} else {
    echo "[PASS] Create user\n";
}

$auditorUser = $identity->authenticateKey((string)($createdUser['loginKey'] ?? ''));
$checks++;
if (($auditorUser?->id ?? null) !== ($createdUser['user']['id'] ?? null)) {
    echo "[FAIL] User login uses direct key lookup\n";
    $failures++;
} else {
    echo "[PASS] User login uses direct key lookup\n";
}

$rotatedUser = $identity->rotateUserKey((string)($createdUser['user']['id'] ?? ''));
$checks++;
if (
    $identity->authenticateKey((string)($createdUser['loginKey'] ?? '')) !== null ||
    ($identity->authenticateKey((string)($rotatedUser['loginKey'] ?? ''))?->id ?? null) !== ($createdUser['user']['id'] ?? null)
) {
    echo "[FAIL] Rotated user key revokes prior secret\n";
    $failures++;
} else {
    echo "[PASS] Rotated user key revokes prior secret\n";
}

$refresh = $identity->createRefreshSession($tenantUser);
$_COOKIE['efsdb_refresh_token'] = $refresh['token'];
$firstRefresh = $auth->refresh();
$_COOKIE['efsdb_refresh_token'] = $refresh['token'];
$secondRefresh = $auth->refresh();
$checks++;
if ($firstRefresh === null || $secondRefresh !== null) {
    echo "[FAIL] Refresh rotation is single use\n";
    $failures++;
} else {
    echo "[PASS] Refresh rotation is single use\n";
}

$displayChange = $auth->changeDisplayMode($tenantUser, 'member_standard');
$checks++;
if (($displayChange['user']['role'] ?? null) !== 'member_standard' || ($displayChange['user']['actualRole'] ?? null) !== 'tenant_admin') {
    echo "[FAIL] Display mode preserves actual role\n";
    $failures++;
} else {
    echo "[PASS] Display mode preserves actual role\n";
}

echo "\nSummary: " . ($checks - $failures) . " Passed, $failures Failed.\n";
ob_end_flush();
exit($failures > 0 ? 1 : 0);
