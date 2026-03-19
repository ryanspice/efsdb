<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

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
    include 'B:/Dev/PHPFS/efsdb/php/runtime/index.php';
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

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase1-runtime-entry';
$bootstrapSecret = 'phase1-runtime-entry-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$workspace = $app->getPublicWorkspace();
$workspace->writeFile('published', '/index.html', '<h1>Runtime published</h1>', [
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

phase0_finish($failures);
