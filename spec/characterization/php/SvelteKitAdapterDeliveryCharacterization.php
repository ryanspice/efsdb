<?php
declare(strict_types=1);

require_once __DIR__ . '/AdapterHarness.php';

/**
 * @param array<string,string> $headers
 */
function phase4_header(array $headers, string $name): ?string
{
    $target = strtolower($name);
    foreach ($headers as $headerName => $value) {
        if (strtolower($headerName) === $target) {
            return $value;
        }
    }

    return null;
}

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase4-adapter-delivery';
$bootstrapSecret = 'phase4-adapter-delivery-secret';

Phase0Harness::resetDir($dataDir);
phase4_seed_adapter_root($dataDir, $bootstrapSecret);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$router = $app->getPublicSiteRouter();

$failures = [];

$root = $router->handle('/', 'GET', User::guest());
$blog = $router->handle('/blog', 'GET', User::guest());
$blogSlash = $router->handle('/blog/', 'GET', User::guest());
$data = $router->handle('/blog/__data.json', 'GET', User::guest());
$dataHead = $router->handle('/blog/__data.json', 'HEAD', User::guest());
$missingHtml = $router->handle('/missing', 'GET', User::guest());
$unsupportedAction = $router->handle('/blog/__action', 'GET', User::guest());

phase0_assert(
    is_array($root)
        && ($root['status'] ?? null) === 200
        && str_contains((string)($root['body'] ?? ''), 'Adapter root')
        && phase4_header($root['headers'] ?? [], 'Content-Type') === 'text/html; charset=utf-8',
    'Adapter-mode router serves imported prerendered HTML from the production root',
    $failures
);

phase0_assert(
    is_array($blog)
        && ($blog['status'] ?? null) === 200
        && str_contains((string)($blog['body'] ?? ''), 'Adapter blog')
        && is_array($blogSlash)
        && ($blogSlash['status'] ?? null) === 200
        && str_contains((string)($blogSlash['body'] ?? ''), 'Adapter blog'),
    'Adapter-mode router resolves both /path and /path/ to imported prerendered HTML without changing the host path model',
    $failures
);

phase0_assert(
    is_array($data)
        && ($data['status'] ?? null) === 200
        && ($data['body'] ?? null) === '{"type":"data","slug":"blog"}'
        && phase4_header($data['headers'] ?? [], 'Content-Type') === 'application/json; charset=utf-8',
    'Adapter-mode router serves imported __data.json as JSON rather than falling back to HTML',
    $failures
);

phase0_assert(
    is_array($dataHead)
        && ($dataHead['status'] ?? null) === 200
        && ($dataHead['body'] ?? null) === ''
        && phase4_header($dataHead['headers'] ?? [], 'Content-Type') === phase4_header($data['headers'] ?? [], 'Content-Type')
        && phase4_header($dataHead['headers'] ?? [], 'X-EFSDB-Manifest') === phase4_header($data['headers'] ?? [], 'X-EFSDB-Manifest'),
    'HEAD on adapter-mode __data.json uses the same route resolution and meaningful headers as GET without returning a body',
    $failures
);

phase0_assert(
    is_array($missingHtml)
        && ($missingHtml['status'] ?? null) === 404
        && (($missingHtml['body'] ?? null) === '404 Not Found (EFSDB)'),
    'Missing adapter HTML routes return the standard public 404 response',
    $failures
);

phase0_assert(
    is_array($unsupportedAction)
        && ($unsupportedAction['status'] ?? null) === 501
        && (($unsupportedAction['body'] ?? null) === '501 Not Implemented (EFSDB)'),
    'Adapter-mode __action paths return one stable 501 Not Implemented response',
    $failures
);

$scopedDataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase4-adapter-delivery-scoped';
$scopedBootstrapSecret = 'phase4-adapter-delivery-scoped-secret';

Phase0Harness::resetDir($scopedDataDir);
phase4_seed_adapter_root($scopedDataDir, $scopedBootstrapSecret, 'published', [
    'basePath' => '/docs',
    'trailingSlash' => 'never',
]);
$scopedRouter = Phase0Harness::bootApp($scopedDataDir, $scopedBootstrapSecret)->getPublicSiteRouter();

$scopedRoot = $scopedRouter->handle('/docs', 'GET', User::guest());
$scopedRootSlash = $scopedRouter->handle('/docs/', 'GET', User::guest());
$scopedBlog = $scopedRouter->handle('/docs/blog', 'GET', User::guest());
$scopedBlogSlash = $scopedRouter->handle('/docs/blog/', 'GET', User::guest());
$scopedData = $scopedRouter->handle('/docs/blog/__data.json', 'GET', User::guest());
$scopedHead = $scopedRouter->handle('/docs/blog/__data.json', 'HEAD', User::guest());
$scopedMissingBase = $scopedRouter->handle('/blog', 'GET', User::guest());
$scopedAction = $scopedRouter->handle('/docs/blog/__action', 'GET', User::guest());

phase0_assert(
    is_array($scopedRoot)
        && ($scopedRoot['status'] ?? null) === 200
        && str_contains((string)($scopedRoot['body'] ?? ''), 'Adapter root')
        && is_array($scopedRootSlash)
        && ($scopedRootSlash['status'] ?? null) === 200
        && str_contains((string)($scopedRootSlash['body'] ?? ''), 'Adapter root'),
    'Adapter-mode router respects a configured base path for root HTML delivery',
    $failures
);

phase0_assert(
    is_array($scopedBlog)
        && ($scopedBlog['status'] ?? null) === 200
        && str_contains((string)($scopedBlog['body'] ?? ''), 'Adapter blog')
        && is_array($scopedBlogSlash)
        && ($scopedBlogSlash['status'] ?? null) === 200
        && str_contains((string)($scopedBlogSlash['body'] ?? ''), 'Adapter blog'),
    'Adapter-mode router uses trailingSlash=never metadata to resolve route HTML from .html files under a base path',
    $failures
);

phase0_assert(
    is_array($scopedData)
        && ($scopedData['status'] ?? null) === 200
        && (($scopedData['body'] ?? null) === '{"type":"data","slug":"blog"}')
        && is_array($scopedHead)
        && ($scopedHead['status'] ?? null) === 200
        && (($scopedHead['body'] ?? null) === '')
        && phase4_header($scopedHead['headers'] ?? [], 'Content-Type') === phase4_header($scopedData['headers'] ?? [], 'Content-Type'),
    'Adapter-mode router preserves base-path __data.json delivery and HEAD parity when trailingSlash metadata is applied',
    $failures
);

phase0_assert(
    is_array($scopedMissingBase)
        && ($scopedMissingBase['status'] ?? null) === 404
        && (($scopedMissingBase['body'] ?? null) === '404 Not Found (EFSDB)'),
    'Adapter-mode router does not serve scoped HTML outside the configured base path',
    $failures
);

phase0_assert(
    is_array($scopedAction)
        && ($scopedAction['status'] ?? null) === 501
        && (($scopedAction['body'] ?? null) === '501 Not Implemented (EFSDB)'),
    'Adapter-mode __action keeps the same stable 501 response inside a configured base path',
    $failures
);

phase0_finish($failures);
