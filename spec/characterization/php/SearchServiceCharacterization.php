<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase2-search-service';
$bootstrapSecret = 'phase2-search-service-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$products = $app->getProductService();
$search = $app->getSearchService();
$identity = $app->getIdentity();
$failures = [];

$products->upsert([
    'id' => 'prod-search-a',
    'sku' => 'SKU-SEARCH-A',
    'name' => 'Desk Lamp',
    'category' => 'lighting',
    'brand' => 'north',
    'tags' => ['led', 'new'],
    'price' => ['amount' => 49.99, 'currency' => 'usd'],
]);
$products->upsert([
    'id' => 'prod-search-b',
    'sku' => 'SKU-SEARCH-B',
    'name' => 'Office Chair',
    'category' => 'seating',
    'brand' => 'axis',
    'tags' => ['ergonomic'],
    'price' => ['amount' => 129.99, 'currency' => 'usd'],
]);

$member = $identity->createUser([
    'username' => 'phase2-search-member',
    'name' => 'Phase 2 Search Member',
    'roleId' => 'member_standard',
]);
$memberUser = $app->getIdentity()->getUserById((string)$member['user']['id']);
$adminUser = $app->getIdentity()->getUserById('tenant-admin');

$productResults = $search->search($memberUser, [
    'entity' => 'products',
    'q' => 'lamp',
    'limit' => 10,
]);

$defaultEntityResults = $search->search($memberUser, [
    'q' => 'chair',
    'limit' => 10,
]);

$systemUserDenied = false;
try {
    $search->search($memberUser, [
        'entity' => Store::ENTITY_SYSTEM_USERS,
        'q' => 'tenant',
    ]);
} catch (Throwable) {
    $systemUserDenied = true;
}

$systemUserAllowed = $search->search($adminUser, [
    'entity' => Store::ENTITY_SYSTEM_USERS,
    'q' => 'tenant',
    'limit' => 10,
]);

phase0_assert(
    ($productResults['results'][0]['id'] ?? null) === 'prod-search-a'
        && (($productResults['meta']['strategy'] ?? null) !== null),
    'Search service uses schema-driven search over products with honest strategy metadata',
    $failures
);

phase0_assert(
    ($defaultEntityResults['meta']['entity'] ?? null) === 'products',
    'Missing search entity temporarily defaults to products for compatibility during Phase 2',
    $failures
);

phase0_assert(
    $systemUserDenied,
    'Schema presence alone does not expose system entities to search for non-admin accounts',
    $failures
);

phase0_assert(
    is_array($systemUserAllowed['results'] ?? null),
    'Allowlisted admin search can query approved system entities',
    $failures
);

phase0_finish($failures);
