<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';
require_once __DIR__ . '/AdapterHarness.php';

/**
 * @return array{status:int,body:string,headers:list<string>,headerMap:array<string,list<string>>}
 */
function phase1_runtime_request(string $dataDir, string $uri, string $method = 'GET', array $options = []): array
{
    $_SERVER['EFSDB_DATA_DIR'] = $dataDir;
    $_ENV['EFSDB_DATA_DIR'] = $dataDir;
    putenv('EFSDB_DATA_DIR=' . $dataDir);

    $_SERVER['REQUEST_URI'] = $uri;
    $_SERVER['REQUEST_METHOD'] = $method;
    $_SERVER['HTTP_AUTHORIZATION'] = '';
    $_GET = [];
    $_POST = [];
    $_COOKIE = [];

    if (isset($options['bearer']) && is_string($options['bearer']) && $options['bearer'] !== '') {
        $_SERVER['HTTP_AUTHORIZATION'] = 'Bearer ' . $options['bearer'];
    }

    @header_remove();
    @http_response_code(200);
    ob_start();
    include __DIR__ . '/../../../efsdb/php/runtime/index.php';
    $body = (string)ob_get_clean();
    $headers = headers_list();
    $headerMap = [];
    foreach ($headers as $header) {
        $parts = explode(':', $header, 2);
        if (count($parts) !== 2) {
            continue;
        }

        $name = strtolower(trim($parts[0]));
        $headerMap[$name] ??= [];
        $headerMap[$name][] = trim($parts[1]);
    }
    @header_remove();

    return [
        'status' => http_response_code(),
        'body' => $body,
        'headers' => $headers,
        'headerMap' => $headerMap,
    ];
}

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase1-runtime-entry';
$bootstrapSecret = 'phase1-runtime-entry-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$workspace = $app->getPublicWorkspace();
$workspace->ensureRoot('production', ['enabled' => true]);
$workspace->ensureRoot('staging', ['enabled' => true]);
$workspace->writeFile('production', '/index.html', '<h1>Runtime published</h1>', [
    'mime' => 'text/html; charset=utf-8',
]);
$workspace->writeFile('staging', '/secret/index.html', '<h1>Runtime staging</h1>', [
    'mime' => 'text/html; charset=utf-8',
]);

$adminToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);
$failures = [];

$published = phase1_runtime_request($dataDir, '/', 'GET');
phase0_assert(
    $published['status'] === 200 && str_contains($published['body'], 'Runtime published'),
    'Detached runtime wrapper serves published content through the shared public router',
    $failures
);

$publishedHead = phase1_runtime_request($dataDir, '/', 'HEAD');
phase0_assert(
    $publishedHead['status'] === 200
        && $publishedHead['body'] === ''
        && (($publishedHead['headerMap']['content-type'][0] ?? null) === ($published['headerMap']['content-type'][0] ?? null)),
    'Detached runtime wrapper preserves HEAD semantics from the shared public router',
    $failures
);

$stagingDenied = phase1_runtime_request($dataDir, '/staging/secret/index.html', 'GET');
phase0_assert(
    $stagingDenied['status'] === 404 && $stagingDenied['body'] === '404 Not Found (EFSDB)',
    'Detached runtime wrapper preserves the non-leaking staging denial behavior for guests',
    $failures
);

$stagingAuthorized = phase1_runtime_request($dataDir, '/staging/secret/index.html', 'GET', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $stagingAuthorized['status'] === 200 && str_contains($stagingAuthorized['body'], 'Runtime staging'),
    'Detached runtime wrapper allows authorized staging access through the shared public router',
    $failures
);

phase4_seed_adapter_root($dataDir, $bootstrapSecret, 'production');

$adapterPublished = phase4_runtime_request($dataDir, '/', 'GET');
phase0_assert(
    $adapterPublished['status'] === 200 && str_contains($adapterPublished['body'], 'Adapter root'),
    'Detached runtime wrapper serves adapter-mode published HTML through the shared public router',
    $failures
);

$adapterData = phase4_runtime_request($dataDir, '/blog/__data.json', 'GET');
phase0_assert(
    $adapterData['status'] === 200
        && $adapterData['body'] === '{"type":"data","slug":"blog"}',
    'Detached runtime wrapper serves adapter-mode __data.json without falling back to HTML',
    $failures
);

$adapterAction = phase4_runtime_request($dataDir, '/blog/__action', 'GET');
phase0_assert(
    $adapterAction['status'] === 501 && $adapterAction['body'] === '501 Not Implemented (EFSDB)',
    'Detached runtime wrapper preserves stable 501 behavior for unsupported adapter __action paths',
    $failures
);

$scopedDataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase1-runtime-entry-scoped';
$scopedBootstrapSecret = 'phase1-runtime-entry-scoped-secret';

Phase0Harness::resetDir($scopedDataDir);
phase4_seed_adapter_root($scopedDataDir, $scopedBootstrapSecret, 'production', [
    'basePath' => '/docs',
    'trailingSlash' => 'never',
    'appDir' => 'app',
]);

$scopedHtml = phase4_runtime_request($scopedDataDir, '/docs/blog', 'GET');
$scopedData = phase4_runtime_request($scopedDataDir, '/docs/blog/__data.json', 'GET');
$scopedAsset = phase4_runtime_request($scopedDataDir, '/docs/app/immutable/app.js', 'GET');
$scopedOutsideBase = phase4_runtime_request($scopedDataDir, '/blog', 'GET');

phase0_assert(
    $scopedHtml['status'] === 200
        && str_contains($scopedHtml['body'], 'Adapter blog')
        && $scopedData['status'] === 200
        && $scopedData['body'] === '{"type":"data","slug":"blog"}'
        && $scopedAsset['status'] === 200
        && $scopedOutsideBase['status'] === 404,
    'Detached runtime wrapper preserves adapter basePath, trailingSlash, and asset-prefix routing through the shared public router',
    $failures
);

phase0_finish($failures);
