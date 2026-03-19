<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$schema = new Schema(Phase0Harness::SCHEMA_DIR);
$failures = [];

$normalized = $schema->normalizeDocument('products', [
    'id' => 'prod-one',
    'sku' => ' SKU-ONE ',
    'name' => '  Desk Lamp  ',
    'category' => ' Lighting ',
    'brand' => ' North ',
    'tags' => [' New ', 'LED'],
    'price' => [
        'amount' => '49.99',
        'currency' => 'usd',
    ],
]);

phase0_assert(
    ($normalized['type'] ?? null) === 'product'
        && ($normalized['sku'] ?? null) === 'sku-one'
        && ($normalized['name'] ?? null) === 'Desk Lamp'
        && ($normalized['category'] ?? null) === 'lighting'
        && ($normalized['brand'] ?? null) === 'north'
        && ($normalized['tags'][0] ?? null) === 'new'
        && (($normalized['price']['currency'] ?? null) === 'USD'),
    'Write-time schema normalization applies defaults and coercion authoritatively',
    $failures
);

$missingRequired = false;
try {
    $schema->normalizeDocument('products', [
        'id' => 'prod-missing',
        'name' => 'Broken Product',
    ]);
} catch (Throwable) {
    $missingRequired = true;
}

phase0_assert(
    $missingRequired,
    'Schema validation rejects missing required product fields on write',
    $failures
);

$legacy = $schema->shapeDocumentForResponse('products', [
    'id' => 'legacy-product',
    'sku' => 'legacy',
    'name' => 'Legacy Product',
    'price' => ['amount' => 12.5, 'currency' => 'USD'],
]);

phase0_assert(
    ($legacy['type'] ?? null) === 'product'
        && ($legacy['status'] ?? null) === 'draft',
    'Read-time response shaping may be tolerant without silently rewriting legacy stored records',
    $failures
);

phase0_finish($failures);
