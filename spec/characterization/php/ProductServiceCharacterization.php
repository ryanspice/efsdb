<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase2-product-service';
$bootstrapSecret = 'phase2-product-service-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$products = $app->getProductService();
$failures = [];

$products->upsert([
    'id' => 'prod-a',
    'sku' => 'SKU-A',
    'name' => 'Desk Lamp',
    'category' => 'lighting',
    'brand' => 'north',
    'tags' => ['led'],
    'price' => ['amount' => 49.99, 'currency' => 'usd'],
]);
sleep(1);
$products->upsert([
    'id' => 'prod-b',
    'sku' => 'SKU-B',
    'name' => 'Floor Lamp',
    'category' => 'lighting',
    'brand' => 'north',
    'tags' => ['sale'],
    'price' => ['amount' => 79.99, 'currency' => 'usd'],
]);

$fetched = $products->get('prod-a');
$pageOne = $products->list(['limit' => 1]);
$pageTwo = $products->list([
    'limit' => 1,
    'cursor' => $pageOne['meta']['nextCursor'] ?? null,
]);

phase0_assert(
    is_array($fetched)
        && ($fetched['sku'] ?? null) === 'sku-a'
        && (($fetched['price']['currency'] ?? null) === 'USD'),
    'Product service returns normalized encrypted product documents',
    $failures
);

phase0_assert(
    is_array($pageOne['results'] ?? null)
        && ($pageOne['results'][0]['id'] ?? null) === 'prod-b'
        && is_string($pageOne['meta']['nextCursor'] ?? null),
    'Product list defaults to updatedAt desc, id asc with an opaque cursor',
    $failures
);

phase0_assert(
    is_array($pageTwo['results'] ?? null)
        && ($pageTwo['results'][0]['id'] ?? null) === 'prod-a',
    'Product cursors encode stable boundary values rather than page numbers',
    $failures
);

phase0_finish($failures);
