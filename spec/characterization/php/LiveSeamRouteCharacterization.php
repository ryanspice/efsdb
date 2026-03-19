<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase0-live-seam';
$bootstrapSecret = 'phase0-live-seam-secret';

Phase0Harness::resetDir($dataDir);
$failures = [];

$health = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/health');
phase0_assert(
    $health['status'] === 200 && is_array($health['json']) && ($health['json']['status'] ?? null) === 'ok',
    'GET /api/health returns the live seam health payload',
    $failures
);

$unknownApi = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/does-not-exist');
phase0_assert(
    $unknownApi['status'] === 404 && is_array($unknownApi['json']) && (($unknownApi['json']['error']['code'] ?? null) === 'not_found'),
    'Unknown /api/* routes fall through to JSON 404 not_found',
    $failures
);

$adminToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);

$wrongAdminMethod = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/admin/users', 'PUT', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $wrongAdminMethod['status'] === 405 && is_array($wrongAdminMethod['json']) && (($wrongAdminMethod['json']['error']['code'] ?? null) === 'method_not_allowed'),
    'Known admin routes return 405 on wrong methods',
    $failures
);

$wrongProductsMethod = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/products', 'POST', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $wrongProductsMethod['status'] === 404 && is_array($wrongProductsMethod['json']) && (($wrongProductsMethod['json']['error']['code'] ?? null) === 'not_found'),
    'Known GET-only routes like /api/products fall through to JSON 404 on wrong methods',
    $failures
);

$whoAmIPost = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/auth/whoami', 'POST', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $whoAmIPost['status'] === 200 && is_array($whoAmIPost['json']) && (($whoAmIPost['json']['actualRole'] ?? null) === 'tenant_admin'),
    'Current whoami branch is method-permissive and responds on POST',
    $failures
);

$explorerPost = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/explorer/list?mode=natural', 'POST', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $explorerPost['status'] === 200 && is_array($explorerPost['json']) && array_key_exists('items', $explorerPost['json']),
    'Current explorer list branch is method-permissive and responds on POST',
    $failures
);

$fallbackLoginFailure = Phase0Harness::request($dataDir, $bootstrapSecret, '/?action=admin', 'POST', [
    'post' => ['login_key' => 'wrong-secret'],
]);
phase0_assert(
    $fallbackLoginFailure['status'] === 200 && str_contains($fallbackLoginFailure['body'], 'Invalid login key'),
    'Fallback POST login_key renders the login error path when credentials are invalid',
    $failures
);

$fallbackLoginSuccess = Phase0Harness::request($dataDir, $bootstrapSecret, '/?action=admin', 'POST', [
    'post' => ['login_key' => $bootstrapSecret],
]);
phase0_assert(
    $fallbackLoginSuccess['status'] === 302,
    'Fallback POST login_key issues a redirect on successful login',
    $failures
);

$logout = Phase0Harness::request($dataDir, $bootstrapSecret, '/?logout=1');
phase0_assert(
    $logout['status'] === 302,
    'Compatibility logout path issues a redirect',
    $failures
);

phase0_finish($failures);
