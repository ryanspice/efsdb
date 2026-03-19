<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase2-index-extraction';
$bootstrapSecret = 'phase2-index-extraction-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$schema = $app->getSchema();
$store = $app->getStore();
$failures = [];

$product = $schema->normalizeDocument('products', [
    'id' => 'prod-index',
    'sku' => 'SKU-INDEX',
    'name' => 'Index Product',
    'category' => 'Lighting',
    'brand' => 'North',
    'tags' => ['LED', 'sale'],
    'price' => ['amount' => '19.95', 'currency' => 'usd'],
]);

$manifest = $store->upsert('products', $product, [
    'lookupFields' => $schema->getLookupFields('products'),
    'logicalPath' => $schema->buildLogicalPath('products', $product),
]);

phase0_assert(
    ($manifest['indexes']['sku'] ?? null) === 'sku-index'
        && ($manifest['indexes']['category'] ?? null) === 'lighting'
        && ($manifest['indexes']['price_amount'] ?? null) === 19.95,
    'Schema-driven index extraction writes normalized manifest indexes',
    $failures
);

phase0_assert(
    $schema->getLookupFields('products') === ['sku', 'slug'],
    'Schema-driven lookup field extraction identifies explicit fast-path fields',
    $failures
);

phase0_finish($failures);
