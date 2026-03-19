<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase2-search-api';
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

$search = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/search?q=lamp', 'GET', ['bearer' => $memberToken]);
$forbidden = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/search?entity=system_users&q=tenant', 'GET', ['bearer' => $memberToken]);
$adminSearch = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/search?entity=system_users&q=tenant', 'GET', ['bearer' => $adminToken]);

phase0_assert(
    $search['status'] === 200
        && is_array($search['json'])
        && (($search['json']['meta']['entity'] ?? null) === 'products')
        && (($search['json']['results'][0]['id'] ?? null) === 'prod-api-search-a'),
    'Search API defaults to products and returns schema-driven results behind the live seam',
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
