<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase2-search-api';
$bootstrapSecret = 'phase2-search-api-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$products = $app->getProductService();
$identity = $app->getIdentity();
$failures = [];

$products->upsert([
    'id' => 'prod-api-search-a',
    'sku' => 'SKU-API-SEARCH-A',
    'name' => 'Desk Lamp',
    'category' => 'lighting',
    'brand' => 'north',
    'tags' => ['led'],
    'price' => ['amount' => 49.99, 'currency' => 'usd'],
]);

$member = $identity->createUser([
    'username' => 'phase2-search-api-member',
    'name' => 'Phase 2 Search API Member',
    'roleId' => 'member_standard',
]);

$adminToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);
$memberToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, (string)$member['loginKey']);

$defaultSearch = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/search?q=lamp', 'GET', ['bearer' => $memberToken]);
$productSearch = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/search?entity=products&q=lamp', 'GET', ['bearer' => $memberToken]);
$forbidden = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/search?entity=system_users&q=tenant', 'GET', ['bearer' => $memberToken]);
$adminSearch = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/search?entity=system_users&q=tenant', 'GET', ['bearer' => $adminToken]);

phase0_assert(
    $defaultSearch['status'] === 200
        && is_array($defaultSearch['json'])
        && (($defaultSearch['json']['meta']['entity'] ?? null) === 'public_workspace_files'),
    'Search API defaults to public_workspace_files behind the live seam',
    $failures
);

phase0_assert(
    $productSearch['status'] === 200
        && is_array($productSearch['json'])
        && (($productSearch['json']['meta']['entity'] ?? null) === 'products')
        && (($productSearch['json']['results'][0]['id'] ?? null) === 'prod-api-search-a'),
    'Search API returns schema-driven results for specific entities',
    $failures
);

phase0_assert(
    $forbidden['status'] === 403
        && is_array($forbidden['json'])
        && (($forbidden['json']['error']['code'] ?? null) === 'forbidden'),
    'Search API enforces entity allowlists and auth checks for system entities',
    $failures
);

phase0_assert(
    $adminSearch['status'] === 200
        && is_array($adminSearch['json'])
        && (($adminSearch['json']['meta']['entity'] ?? null) === Store::ENTITY_SYSTEM_USERS),
    'Search API allows approved system-entity searches for tenant admin access',
    $failures
);

phase0_finish($failures);
