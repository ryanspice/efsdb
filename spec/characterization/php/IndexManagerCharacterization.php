<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase2-index-manager';
$bootstrapSecret = 'phase2-index-manager-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$schema = $app->getSchema();
$store = $app->getStore();
$index = $app->getIndexManager();
$rebuilder = $app->getIndexRebuilder();
$failures = [];

$legacy = $schema->normalizeDocument('products', [
    'id' => 'prod-rebuild',
    'sku' => 'SKU-REBUILD',
    'name' => 'Rebuild Product',
    'category' => 'lighting',
    'brand' => 'north',
    'tags' => ['legacy'],
    'price' => ['amount' => 39.99, 'currency' => 'usd'],
]);

$store->upsert('products', $legacy, [
    'lookupFields' => $schema->getLookupFields('products'),
    'logicalPath' => $schema->buildLogicalPath('products', $legacy),
]);
$index->clearEntity('products');

$before = $index->query('products', [
    'q' => 'rebuild',
    'filters' => [],
    'limit' => 10,
    'searchableFields' => $schema->getSearchableFields('products'),
]);

$rebuilder->rebuildEntity('products');

$after = $index->query('products', [
    'q' => 'rebuild',
    'filters' => [],
    'limit' => 10,
    'searchableFields' => $schema->getSearchableFields('products'),
]);

phase0_assert(
    count($before['results'] ?? []) === 0,
    'Index completeness does not rely on lazy-on-read indexing for legacy records',
    $failures
);

phase0_assert(
    (($after['results'][0]['id'] ?? null) === 'prod-rebuild'),
    'Explicit rebuild indexes existing records for Phase 2 completeness',
    $failures
);

phase0_finish($failures);
