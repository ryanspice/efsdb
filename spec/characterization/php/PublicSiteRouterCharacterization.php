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

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase1-public-router';
$bootstrapSecret = 'phase1-public-router-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$workspace = $app->getPublicWorkspace();
$router = $app->getPublicSiteRouter();

$failures = [];

$workspace->writeFile('production', '/docs.php', '<?php return "exact-doc";', [
    'mime' => 'application/x-httpd-php',
]);
$workspace->writeFile('production', '/docs/index.php', '<?php return "<h1>fallback</h1>";', [
    'mime' => 'application/x-httpd-php',
]);
$workspace->writeFile('production', '/users/[id].php', '<?php return "user:" . (($efsdbRequest["params"]["id"] ?? ""));', [
    'mime' => 'application/x-httpd-php',
]);
$workspace->writeFile('production', '/assets/space name.html', '<h1>decoded</h1>', [
    'mime' => 'text/html; charset=utf-8',
]);
$workspace->setRootConfig('staging', ['visibility' => 'restricted', 'allowedActualRoles' => ['tenant_admin']]);
$workspace->writeFile('staging', '/secret.php', '<?php return "<h1>staging</h1>";', [
    'mime' => 'application/x-httpd-php',
]);

$get = $router->handle('/docs', 'GET', User::guest());
$getAsset = $router->handle('/assets/space%20name.html', 'GET', User::guest());
$head = $router->handle('/assets/space%20name.html', 'HEAD', User::guest());
$etag = is_array($getAsset) ? phase1_router_header($getAsset['headers'] ?? [], 'ETag') : null;
$lastModified = is_array($getAsset) ? phase1_router_header($getAsset['headers'] ?? [], 'Last-Modified') : null;
$revalidated = $etag !== null
    ? $router->handle('/assets/space%20name.html', 'GET', User::guest(), ['if-none-match' => $etag])
    : null;
$decoded = $router->handle('/assets/space%20name.html', 'GET', User::guest());
$normalized = $router->handle('//assets///space%20name.html', 'GET', User::guest());
$dynamicRoute = $router->handle('/users/999', 'GET', User::guest());
$traversal = $router->handle('/../secrets.txt', 'GET', User::guest());
$stagingDenied = $router->handle('/staging/secret', 'GET', User::guest());

phase0_assert(
    is_array($get) && ($get['status'] ?? null) === 200 && ($get['body'] ?? null) === 'exact-doc',
    'Public router prefers exact path matches before /index.html fallback',
    $failures
);

phase0_assert(
    is_array($head)
        && ($head['status'] ?? null) === ($getAsset['status'] ?? null)
        && ($head['body'] ?? null) === ''
        && phase1_router_header($head['headers'] ?? [], 'Content-Type') === phase1_router_header($getAsset['headers'] ?? [], 'Content-Type')
        && phase1_router_header($head['headers'] ?? [], 'X-EFSDB-Manifest') === phase1_router_header($getAsset['headers'] ?? [], 'X-EFSDB-Manifest')
        && phase1_router_header($getAsset['headers'] ?? [], 'Cache-Control') === 'public, max-age=0, must-revalidate'
        && is_string($etag) && $etag !== ''
        && is_string($lastModified) && $lastModified !== '',
    'HEAD uses the same route resolution and meaningful headers as GET while returning no body',
    $failures
);

phase0_assert(
    is_array($revalidated)
        && ($revalidated['status'] ?? null) === 304
        && (($revalidated['body'] ?? null) === '')
        && phase1_router_header($revalidated['headers'] ?? [], 'ETag') === $etag,
    'Public router honors conditional revalidation for unchanged content using ETag-based 304 responses',
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
    is_array($dynamicRoute) && ($dynamicRoute['status'] ?? null) === 200 && (($dynamicRoute['body'] ?? null) === 'user:999'),
    'Public router resolves dynamic route segments and hydrates request params for PHP route files',
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
$adapterHashedAsset = $router->handle('/_app/immutable/app.12345678.js', 'GET', User::guest());

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

phase0_assert(
    is_array($adapterHashedAsset)
        && ($adapterHashedAsset['status'] ?? null) === 200
        && phase1_router_header($adapterHashedAsset['headers'] ?? [], 'Cache-Control') === 'public, max-age=31536000, immutable',
    'Public router marks fingerprinted adapter assets as immutable so repeated asset requests skip unnecessary revalidation',
    $failures
);

$scopedDataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase1-public-router-scoped';
$scopedBootstrapSecret = 'phase1-public-router-scoped-secret';

Phase0Harness::resetDir($scopedDataDir);
$scopedApp = phase4_seed_adapter_root($scopedDataDir, $scopedBootstrapSecret, 'production', [
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
