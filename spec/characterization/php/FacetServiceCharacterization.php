<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase2-facet-service';
$bootstrapSecret = 'phase2-facet-service-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$products = $app->getProductService();
$facets = $app->getFacetService();
$identity = $app->getIdentity();
$failures = [];

$products->upsert([
    'id' => 'prod-facet-a',
    'sku' => 'SKU-FACET-A',
    'name' => 'Desk Lamp',
    'category' => 'lighting',
    'brand' => 'north',
    'tags' => ['led'],
    'status' => 'active',
    'price' => ['amount' => 49.99, 'currency' => 'usd'],
]);
$products->upsert([
    'id' => 'prod-facet-b',
    'sku' => 'SKU-FACET-B',
    'name' => 'Floor Lamp',
    'category' => 'lighting',
    'brand' => 'north',
    'tags' => ['sale'],
    'status' => 'active',
    'price' => ['amount' => 79.99, 'currency' => 'usd'],
]);
$products->upsert([
    'id' => 'prod-facet-c',
    'sku' => 'SKU-FACET-C',
    'name' => 'Office Chair',
    'category' => 'seating',
    'brand' => 'axis',
    'tags' => ['ergonomic'],
    'status' => 'draft',
    'price' => ['amount' => 129.99, 'currency' => 'usd'],
]);

$member = $identity->createUser([
    'username' => 'phase2-facet-member',
    'name' => 'Phase 2 Facet Member',
    'roleId' => 'member_standard',
]);
$memberUser = $app->getIdentity()->getUserById((string)$member['user']['id']);

$facetResults = $facets->compute($memberUser, [
    'entity' => 'products',
    'field' => ['category', 'brand'],
    'filter' => ['status' => 'active'],
]);

$badFieldRejected = false;
try {
    $facets->compute($memberUser, [
        'entity' => 'products',
        'field' => ['loginKeyHash'],
    ]);
} catch (Throwable) {
    $badFieldRejected = true;
}

phase0_assert(
    (($facetResults['results']['category'][0]['value'] ?? null) === 'lighting')
        && (($facetResults['results']['category'][0]['count'] ?? null) === 2),
    'Facet service returns schema-defined facet counts against filtered results',
    $failures
);

phase0_assert(
    $badFieldRejected,
    'Facet service rejects fields that are not schema-marked as facet-capable',
    $failures
);

phase0_finish($failures);
