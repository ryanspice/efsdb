<?php
declare(strict_types=1);

require_once __DIR__ . '/AdapterHarness.php';

/**
 * @param array<string,string> $headers
 */
function phase4_asset_header(array $headers, string $name): ?string
{
    $target = strtolower($name);
    foreach ($headers as $headerName => $value) {
        if (strtolower($headerName) === $target) {
            return $value;
        }
    }

    return null;
}

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase4-adapter-assets';
$bootstrapSecret = 'phase4-adapter-assets-secret';

Phase0Harness::resetDir($dataDir);
phase4_seed_adapter_root($dataDir, $bootstrapSecret);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$router = $app->getPublicSiteRouter();

$failures = [];

$js = $router->handle('/_app/immutable/app.js', 'GET', User::guest());
$css = $router->handle('/_app/immutable/app.css', 'GET', User::guest());
$jsonAsset = $router->handle('/_app/assets/site.json', 'GET', User::guest());
$svg = $router->handle('/_app/assets/logo.svg', 'GET', User::guest());
$missingAsset = $router->handle('/_app/immutable/missing.js', 'GET', User::guest());
$missingData = $router->handle('/blog/missing/__data.json', 'GET', User::guest());

phase0_assert(
    is_array($js)
        && ($js['status'] ?? null) === 200
        && ($js['body'] ?? null) === 'console.log("adapter app");'
        && phase4_asset_header($js['headers'] ?? [], 'Content-Type') === 'application/javascript; charset=utf-8',
    'Adapter-mode router serves app-dir JavaScript assets with the correct MIME type',
    $failures
);

phase0_assert(
    is_array($css)
        && ($css['status'] ?? null) === 200
        && phase4_asset_header($css['headers'] ?? [], 'Content-Type') === 'text/css; charset=utf-8'
        && is_array($jsonAsset)
        && ($jsonAsset['status'] ?? null) === 200
        && phase4_asset_header($jsonAsset['headers'] ?? [], 'Content-Type') === 'application/json; charset=utf-8'
        && is_array($svg)
        && ($svg['status'] ?? null) === 200
        && phase4_asset_header($svg['headers'] ?? [], 'Content-Type') === 'image/svg+xml',
    'Adapter-mode router serves CSS, JSON, and SVG assets as exact files with their expected MIME types',
    $failures
);

phase0_assert(
    is_array($missingAsset)
        && ($missingAsset['status'] ?? null) === 404
        && (($missingAsset['body'] ?? null) === '404 Not Found (EFSDB)')
        && !str_contains((string)($missingAsset['body'] ?? ''), 'Adapter root'),
    'Missing adapter assets return a direct 404 without falling back to HTML',
    $failures
);

phase0_assert(
    is_array($missingData)
        && ($missingData['status'] ?? null) === 404
        && (($missingData['body'] ?? null) === '404 Not Found (EFSDB)')
        && !str_contains((string)($missingData['body'] ?? ''), 'Adapter root'),
    'Missing adapter __data.json paths return a direct 404 without falling back to HTML',
    $failures
);

phase0_finish($failures);
