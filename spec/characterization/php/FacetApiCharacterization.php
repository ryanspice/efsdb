<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase2-facet-api';
$bootstrapSecret = 'phase2-facet-api-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$products = $app->getProductService();
$token = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);
$failures = [];

$products->upsert([
    'id' => 'prod-api-facet-a',
    'sku' => 'SKU-API-FACET-A',
    'name' => 'Desk Lamp',
    'category' => 'lighting',
    'brand' => 'north',
    'status' => 'active',
    'tags' => ['led'],
    'price' => ['amount' => 49.99, 'currency' => 'usd'],
]);
$products->upsert([
    'id' => 'prod-api-facet-b',
    'sku' => 'SKU-API-FACET-B',
    'name' => 'Floor Lamp',
    'category' => 'lighting',
    'brand' => 'north',
    'status' => 'active',
    'tags' => ['sale'],
    'price' => ['amount' => 79.99, 'currency' => 'usd'],
]);

$facet = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/facets?entity=products&field=category&filter[status]=active', 'GET', [
    'bearer' => $token,
]);
$badField = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/facets?entity=products&field=loginKeyHash', 'GET', [
    'bearer' => $token,
]);

phase0_assert(
    $facet['status'] === 200
        && is_array($facet['json'])
        && (($facet['json']['results']['category'][0]['value'] ?? null) === 'lighting')
        && (($facet['json']['results']['category'][0]['count'] ?? null) === 2),
    'Facet API returns schema-driven facet counts through the live seam',
    $failures
);

phase0_assert(
    $badField['status'] === 400
        && is_array($badField['json'])
        && (($badField['json']['error']['code'] ?? null) === 'invalid_facets'),
    'Facet API rejects non-facet fields instead of exposing placeholder behavior',
    $failures
);

phase0_finish($failures);
