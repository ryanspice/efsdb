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

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase4-adapter-delivery';
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
    'Adapter-mode router serves imported prerendered HTML from the published root',
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

phase0_finish($failures);
