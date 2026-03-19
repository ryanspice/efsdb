<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';
require_once __DIR__ . '/AdapterHarness.php';

/**
 * @param array<string,string> $headers
 */
function phase1_router_header(array $headers, string $name): ?string
{
    $target = strtolower($name);
    foreach ($headers as $headerName => $value) {
        if (strtolower($headerName) === $target) {
            return $value;
        }
    }

    return null;
}

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase1-public-router';
$bootstrapSecret = 'phase1-public-router-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$workspace = $app->getPublicWorkspace();
$router = $app->getPublicSiteRouter();

$failures = [];

$workspace->writeFile('published', '/docs', 'exact-doc', [
    'mime' => 'text/plain; charset=utf-8',
]);
$workspace->writeFile('published', '/docs/index.html', '<h1>fallback</h1>', [
    'mime' => 'text/html; charset=utf-8',
]);
$workspace->writeFile('published', '/assets/space name.html', '<h1>decoded</h1>', [
    'mime' => 'text/html; charset=utf-8',
]);
$workspace->writeFile('staging', '/secret/index.html', '<h1>staging</h1>', [
    'mime' => 'text/html; charset=utf-8',
]);

$get = $router->handle('/docs', 'GET', User::guest());
$head = $router->handle('/docs', 'HEAD', User::guest());
$decoded = $router->handle('/assets/space%20name.html', 'GET', User::guest());
$normalized = $router->handle('//assets///space%20name.html', 'GET', User::guest());
$traversal = $router->handle('/../secrets.txt', 'GET', User::guest());
$stagingDenied = $router->handle('/staging/secret/index.html', 'GET', User::guest());

phase0_assert(
    is_array($get) && ($get['status'] ?? null) === 200 && ($get['body'] ?? null) === 'exact-doc',
    'Public router prefers exact path matches before /index.html fallback',
    $failures
);

phase0_assert(
    is_array($head)
        && ($head['status'] ?? null) === ($get['status'] ?? null)
        && ($head['body'] ?? null) === ''
        && phase1_router_header($head['headers'] ?? [], 'Content-Type') === phase1_router_header($get['headers'] ?? [], 'Content-Type')
        && phase1_router_header($head['headers'] ?? [], 'X-EFSDB-Manifest') === phase1_router_header($get['headers'] ?? [], 'X-EFSDB-Manifest'),
    'HEAD uses the same route resolution and meaningful headers as GET while returning no body',
    $failures
);

phase0_assert(
    is_array($decoded) && ($decoded['status'] ?? null) === 200 && str_contains((string)($decoded['body'] ?? ''), 'decoded'),
    'Public router URL-decodes path segments before deterministic public-root resolution',
    $failures
);

phase0_assert(
    is_array($normalized) && ($normalized['status'] ?? null) === 200 && str_contains((string)($normalized['body'] ?? ''), 'decoded'),
    'Public router normalizes duplicate slashes before resolving public paths',
    $failures
);

phase0_assert(
    is_array($traversal) && ($traversal['status'] ?? null) === 400,
    'Public router rejects path traversal attempts before content resolution',
    $failures
);

phase0_assert(
    is_array($stagingDenied)
        && ($stagingDenied['status'] ?? null) === 404
        && (($stagingDenied['body'] ?? null) === '404 Not Found (EFSDB)'),
    'Restricted staging paths deny unauthenticated access with a consistent auth-first non-leaking response',
    $failures
);

phase4_seed_adapter_root($dataDir, $bootstrapSecret);

$adapterData = $router->handle('/blog/__data.json', 'GET', User::guest());
$adapterMissingAsset = $router->handle('/_app/immutable/missing.js', 'GET', User::guest());
$adapterAction = $router->handle('/blog/__action', 'GET', User::guest());

phase0_assert(
    is_array($adapterData)
        && ($adapterData['status'] ?? null) === 200
        && (($adapterData['body'] ?? null) === '{"type":"data","slug":"blog"}'),
    'Public router serves adapter-mode __data.json as an exact JSON file',
    $failures
);

phase0_assert(
    is_array($adapterMissingAsset)
        && ($adapterMissingAsset['status'] ?? null) === 404
        && (($adapterMissingAsset['body'] ?? null) === '404 Not Found (EFSDB)'),
    'Public router does not fall back to HTML for missing adapter assets',
    $failures
);

phase0_assert(
    is_array($adapterAction)
        && ($adapterAction['status'] ?? null) === 501
        && (($adapterAction['body'] ?? null) === '501 Not Implemented (EFSDB)'),
    'Public router returns a stable 501 for unsupported adapter __action paths',
    $failures
);

$scopedDataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase1-public-router-scoped';
$scopedBootstrapSecret = 'phase1-public-router-scoped-secret';

Phase0Harness::resetDir($scopedDataDir);
$scopedApp = phase4_seed_adapter_root($scopedDataDir, $scopedBootstrapSecret, 'published', [
    'basePath' => '/docs',
    'trailingSlash' => 'never',
    'appDir' => 'app',
]);
$scopedRouter = $scopedApp->getPublicSiteRouter();

$scopedHtml = $scopedRouter->handle('/docs/blog', 'GET', User::guest());
$scopedAsset = $scopedRouter->handle('/docs/app/immutable/app.js', 'GET', User::guest());
$scopedMissing = $scopedRouter->handle('/app/immutable/app.js', 'GET', User::guest());

phase0_assert(
    is_array($scopedHtml)
        && ($scopedHtml['status'] ?? null) === 200
        && str_contains((string)($scopedHtml['body'] ?? ''), 'Adapter blog')
        && is_array($scopedAsset)
        && ($scopedAsset['status'] ?? null) === 200
        && is_array($scopedMissing)
        && ($scopedMissing['status'] ?? null) === 404,
    'Public router consumes adapter basePath, trailingSlash, and appDir metadata when resolving scoped adapter content',
    $failures
);

phase0_finish($failures);
