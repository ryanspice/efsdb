<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase0-render-compat';
$bootstrapSecret = 'phase0-render-compat-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$tenantUser = $app->getIdentity()->authenticateKey($bootstrapSecret);

$failures = [];

$home = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=home');
phase0_assert(
    $home['status'] === 200 && str_contains($home['body'], 'EFSDB Control'),
    'Home compatibility route renders the current control-plane shell',
    $failures
);

$login = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=login');
phase0_assert(
    $login['status'] === 200
        && str_contains($login['body'], '<script type="application/json" id="efsdb-bootstrap">')
        && str_contains($login['body'], '<efsdb-login></efsdb-login>'),
    'Login compatibility route renders the shipped login custom element host with the shared bootstrap payload contract',
    $failures
);

$guestExplorer = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=explorer');
phase0_assert(
    $guestExplorer['status'] === 200 && str_contains($guestExplorer['body'], '<efsdb-login'),
    'Guest access to explorer compatibility route falls back to the login host',
    $failures
);

if ($tenantUser === null) {
    phase0_assert(false, 'Tenant admin identity is available for render characterization', $failures);
    phase0_finish($failures);
}

$session = $app->getIdentity()->createRefreshSession($tenantUser);
$cookies = ['efsdb_refresh_token' => $session['token']];

$explorer = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=explorer', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $explorer['status'] === 200
        && str_contains($explorer['body'], '<script type="application/json" id="efsdb-bootstrap">')
        && str_contains($explorer['body'], '<efsdb-explorer></efsdb-explorer>'),
    'Authenticated explorer compatibility route renders the shipped explorer custom element host with the shared bootstrap payload contract',
    $failures
);

$admin = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=admin', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $admin['status'] === 200
        && str_contains($admin['body'], '<script type="application/json" id="efsdb-bootstrap">')
        && str_contains($admin['body'], '<efsdb-admin></efsdb-admin>'),
    'Authenticated admin compatibility route now renders the shipped admin custom element host by default',
    $failures
);

$adminLegacy = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=admin&ui=legacy', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $adminLegacy['status'] === 200
        && str_contains($adminLegacy['body'], 'Users, roles, and display modes')
        && !str_contains($adminLegacy['body'], '<efsdb-admin></efsdb-admin>'),
    'Authenticated admin legacy rollback route remains available only behind the explicit legacy toggle',
    $failures
);

$system = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=system', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $system['status'] === 200 && str_contains($system['body'], 'Control plane runtime posture'),
    'Authenticated system compatibility route renders the current system page',
    $failures
);

$products = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=products', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $products['status'] === 200 && str_contains($products['body'], 'Product management interface loading'),
    'Products compatibility route is currently a placeholder shell',
    $failures
);

$preview = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=preview', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $preview['status'] === 200 && str_contains($preview['body'], 'Preview interface loading'),
    'Preview compatibility route is currently a placeholder shell',
    $failures
);

$badFallbackLogin = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=admin', 'POST', [
    'post' => ['login_key' => 'wrong-secret'],
]);
phase0_assert(
    $badFallbackLogin['status'] === 200 && str_contains($badFallbackLogin['body'], 'Invalid login key'),
    'Fallback form POST preserves the current invalid login error rendering path',
    $failures
);

$logout = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?logout=1', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $logout['status'] === 302,
    'Compatibility logout route still redirects',
    $failures
);

phase0_finish($failures);
