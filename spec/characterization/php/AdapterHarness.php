<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

/**
 * @param array<string,mixed> $options
 */
function phase4_seed_adapter_root(string $dataDir, string $bootstrapSecret, string $root = 'published', array $options = []): App
{
    $app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
    $importer = $app->getPublicSiteImport();
    $fixtureRoot = dirname($dataDir) . '/adapter-fixtures-' . md5($dataDir . "\0" . $root);
    $clientDir = $fixtureRoot . '/client';
    $prerenderDir = $fixtureRoot . '/prerendered';

    Phase0Harness::resetDir($fixtureRoot);
    mkdir($clientDir . '/immutable', 0777, true);
    mkdir($clientDir . '/assets', 0777, true);
    mkdir($prerenderDir . '/blog', 0777, true);

    file_put_contents($clientDir . '/immutable/app.js', 'console.log("adapter app");');
    file_put_contents($clientDir . '/immutable/app.css', 'body{color:#111;}');
    file_put_contents($clientDir . '/assets/site.json', '{"asset":true}');
    file_put_contents($clientDir . '/assets/logo.svg', '<svg xmlns="http://www.w3.org/2000/svg"></svg>');

    file_put_contents($prerenderDir . '/index.html', '<h1>Adapter root</h1>');
    file_put_contents($prerenderDir . '/blog/index.html', '<h1>Adapter blog</h1>');
    file_put_contents($prerenderDir . '/blog/__data.json', '{"type":"data","slug":"blog"}');

    $deliveryOptions = [
        'root' => $root,
        'deliveryMode' => 'sveltekit-php-adapter',
        'appDir' => (string)($options['appDir'] ?? '_app'),
        'basePath' => $options['basePath'] ?? null,
        'trailingSlash' => $options['trailingSlash'] ?? null,
    ];

    $importer->importDirectory($clientDir, array_merge($deliveryOptions, [
        'prefix' => (string)($options['appDir'] ?? '_app'),
    ]));
    $importer->importDirectory($prerenderDir, $deliveryOptions);

    return $app;
}

/**
 * @return array{status:int,body:string,headers:list<string>,headerMap:array<string,list<string>>}
 */
function phase4_runtime_request(string $dataDir, string $uri, string $method = 'GET', array $options = []): array
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
