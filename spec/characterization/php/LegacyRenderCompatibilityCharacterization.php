<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase0-render-compat';
$bootstrapSecret = 'phase0-render-compat-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$tenantUser = $app->getIdentity()->authenticateKey($bootstrapSecret);

$failures = [];

// The query-style action URLs now canonicalize to path-style control routes.
// Keep redirect coverage separate from rendering checks on their destinations.
foreach (['home', 'login', 'explorer', 'admin', 'system', 'products', 'preview'] as $legacyAction) {
    $legacy = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/?action=' . $legacyAction);
    phase0_assert($legacy['status'] === 301 && $legacy['body'] === '',
        'Legacy action URL redirects before rendering: ' . $legacyAction, $failures);
}

$home = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/');
phase0_assert(
    $home['status'] === 200 && str_contains($home['body'], '<efsdb-login'),
    'Guest home renders the login host before control-plane content',
    $failures
);

$login = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/login');
phase0_assert(
    $login['status'] === 200
        && str_contains($login['body'], '<script type="application/json" id="efsdb-bootstrap">')
        && str_contains($login['body'], '<efsdb-login></efsdb-login>'),
    'Login compatibility route renders the shipped login custom element host with the shared bootstrap payload contract',
    $failures
);

$guestExplorer = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/explorer');
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

$explorer = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/explorer', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $explorer['status'] === 200
        && str_contains($explorer['body'], '<script type="application/json" id="efsdb-bootstrap">')
        && str_contains($explorer['body'], '<efsdb-explorer></efsdb-explorer>'),
    'Authenticated explorer compatibility route renders the shipped explorer custom element host with the shared bootstrap payload contract',
    $failures
);

$admin = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/admin', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $admin['status'] === 200
        && str_contains($admin['body'], '<script type="application/json" id="efsdb-bootstrap">')
        && str_contains($admin['body'], '<efsdb-admin></efsdb-admin>'),
    'Authenticated admin compatibility route now renders the shipped admin custom element host by default',
    $failures
);

$adminLegacy = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/admin?ui=legacy', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $adminLegacy['status'] === 200
        && str_contains($adminLegacy['body'], 'Users, roles, and display modes')
        && !str_contains($adminLegacy['body'], '<efsdb-admin></efsdb-admin>'),
    'Authenticated admin legacy rollback route remains available only behind the explicit legacy toggle',
    $failures
);

$system = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/system', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $system['status'] === 200 && str_contains($system['body'], 'Control plane runtime posture'),
    'Authenticated system compatibility route renders the current system page',
    $failures
);

$products = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/products', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $products['status'] === 200 && str_contains($products['body'], 'Product management interface loading'),
    'Products compatibility route is currently a placeholder shell',
    $failures
);

$preview = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/preview', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $preview['status'] === 200 && str_contains($preview['body'], 'Preview interface loading'),
    'Preview compatibility route is currently a placeholder shell',
    $failures
);

$badFallbackLogin = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/admin', 'POST', [
    'post' => ['login_key' => 'wrong-secret'],
]);
phase0_assert(
    $badFallbackLogin['status'] === 200 && str_contains($badFallbackLogin['body'], 'Invalid login key'),
    'Fallback form POST preserves the current invalid login error rendering path',
    $failures
);

$logout = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/logout', 'GET', [
    'cookies' => $cookies,
]);
phase0_assert(
    $logout['status'] === 302,
    'Compatibility logout route still redirects',
    $failures
);

phase0_finish($failures);
