<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase2-product-api';
$bootstrapSecret = 'phase2-product-api-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$app->getProductService()->upsert([
    'id' => 'prod-api',
    'sku' => 'SKU-API',
    'name' => 'API Product',
    'category' => 'lighting',
    'brand' => 'north',
    'tags' => ['api'],
    'price' => ['amount' => 9.99, 'currency' => 'usd'],
]);
$token = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);
$failures = [];

$list = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/products', 'GET', ['bearer' => $token]);
$get = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/products/prod-api', 'GET', ['bearer' => $token]);

phase0_assert(
    $list['status'] === 200
        && is_array($list['json'])
        && ($list['json']['results'][0]['id'] ?? null) === 'prod-api',
    'Products API list returns normalized product summaries behind the live seam',
    $failures
);

phase0_assert(
    $get['status'] === 200
        && is_array($get['json'])
        && (($get['json']['result']['sku'] ?? null) === 'sku-api'),
    'Products API get returns a normalized product document',
    $failures
);

phase0_finish($failures);
