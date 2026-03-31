<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

/**
 * @param array<int,string> $arguments
 * @param array<string,string> $environment
 * @return array{code:int,output:string}
 */
function phase4_run_import(array $arguments, array $environment): array
{
    $php = escapeshellarg(PHP_BINARY);
    $script = escapeshellarg(__DIR__ . '/../../../efsdb/php/runtime/import.php');
    $ini = php_ini_loaded_file();

    $parts = [$php];
    if (is_string($ini) && $ini !== '') {
        $parts[] = '-c';
        $parts[] = escapeshellarg($ini);
    }
    $parts[] = $script;

    foreach ($arguments as $argument) {
        $parts[] = $argument;
    }

    $descriptors = [
        0 => ['pipe', 'r'],
        1 => ['pipe', 'w'],
        2 => ['pipe', 'w'],
    ];

    $originalEnv = [];
    foreach ($environment as $key => $value) {
        $originalEnv[$key] = $_ENV[$key] ?? getenv($key) ?: null;
        $_ENV[$key] = $value;
        putenv($key . '=' . $value);
    }

    $process = proc_open(implode(' ', $parts), $descriptors, $pipes, '' . __DIR__ . '/../../..');
    if (!is_resource($process)) {
        throw new RuntimeException('Unable to start public-site import process');
    }

    fclose($pipes[0]);
    $stdout = stream_get_contents($pipes[1]);
    fclose($pipes[1]);
    $stderr = stream_get_contents($pipes[2]);
    fclose($pipes[2]);

    $result = [
        'code' => proc_close($process),
        'output' => (string)$stdout . (string)$stderr,
    ];

    foreach ($originalEnv as $key => $value) {
        if ($value === null) {
            unset($_ENV[$key]);
            putenv($key);
            continue;
        }

        $_ENV[$key] = $value;
        putenv($key . '=' . $value);
    }

    return $result;
}

$cacheDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase4-public-site-import';
$webDir = $cacheDir . '/public';
$dataDir = $cacheDir . '/.efsdb';
$bootstrapSecret = 'phase4-public-site-import-secret';

Phase0Harness::resetDir($cacheDir);
mkdir($cacheDir, 0777, true);
mkdir($webDir, 0777, true);

$clientSrc = $cacheDir . '/client';
$prerenderSrc = $cacheDir . '/prerendered';
mkdir($clientSrc . '/immutable', 0777, true);
mkdir($prerenderSrc . '/blog', 0777, true);

file_put_contents($clientSrc . '/immutable/app.js', 'console.log("app");');
file_put_contents($clientSrc . '/immutable/app.css', 'body{color:#111;}');
file_put_contents($prerenderSrc . '/index.html', '<h1>Adapter root</h1>');
file_put_contents($prerenderSrc . '/blog/index.html', '<h1>Adapter blog</h1>');
file_put_contents($prerenderSrc . '/blog/__data.json', '{"type":"data","slug":"blog"}');

$environment = array_merge($_ENV, [
    'EFSDB_DATA_DIR' => $dataDir,
    'EFSDB_SCHEMA_DIR' => Phase0Harness::SCHEMA_DIR,
    'EFSDB_BOOTSTRAP_SECRET' => $bootstrapSecret,
    'EFSDB_ENV' => 'test',
    'EFSDB_WEB_ROOT' => $webDir,
]);

$clientImport = phase4_run_import([
    '--src', escapeshellarg($clientSrc),
    '--web', escapeshellarg($webDir),
    '--root', 'published',
    '--prefix', '_app',
    '--chunk=32',
    '--delivery-mode', 'sveltekit-php-adapter',
    '--app-dir', '_app',
    '--base-path', '/docs',
    '--trailing-slash', 'always',
], $environment);

$prerenderImport = phase4_run_import([
    '--src', escapeshellarg($prerenderSrc),
    '--web', escapeshellarg($webDir),
    '--root', 'published',
    '--chunk=32',
    '--delivery-mode', 'sveltekit-php-adapter',
    '--app-dir', '_app',
    '--base-path', '/docs',
    '--trailing-slash', 'always',
], $environment);

$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$workspace = $app->getPublicWorkspace();
$root = $workspace->getRoot('published', false);
$index = $workspace->readFile('published', '/index.html');
$blogIndex = $workspace->readFile('published', '/blog/index.html');
$blogData = $workspace->readFile('published', '/blog/__data.json');
$asset = $workspace->readFile('published', '/_app/immutable/app.js');
$assetCss = $workspace->readFile('published', '/_app/immutable/app.css');

$failures = [];

phase0_assert(
    $clientImport['code'] === 0
        && $prerenderImport['code'] === 0
        && str_contains($clientImport['output'], 'shared public workspace')
        && str_contains($prerenderImport['output'], 'shared public workspace'),
    'runtime/import.php exits successfully and reports shared public-workspace import activity',
    $failures
);

phase0_assert(
    is_array($root)
        && ($root['enabled'] ?? null) === true
        && (($root['deliveryMode'] ?? null) === 'sveltekit-php-adapter')
        && (($root['adapter']['kind'] ?? null) === 'static-prerender')
        && (($root['adapter']['appDir'] ?? null) === '_app')
        && (($root['adapter']['basePath'] ?? null) === '/docs')
        && (($root['adapter']['trailingSlash'] ?? null) === 'always')
        && (($root['adapter']['lastImportKind'] ?? null) === 'prerender')
        && is_array($root['adapter']['imports'] ?? null)
        && (($root['adapter']['imports']['assets']['pathCount'] ?? null) === 2)
        && (($root['adapter']['imports']['assets']['prefix'] ?? null) === '_app')
        && is_string($root['adapter']['imports']['assets']['importedAt'] ?? null)
        && (($root['adapter']['imports']['prerender']['pathCount'] ?? null) === 3)
        && is_string($root['adapter']['imports']['prerender']['importedAt'] ?? null)
        && in_array('_app', array_values(array_map('strval', $root['adapter']['assetPrefixes'] ?? [])), true),
    'shared public root records persist adapter import metadata instead of detached runtime-only state',
    $failures
);

phase0_assert(
    is_array($index)
        && is_array($blogIndex)
        && is_array($blogData)
        && is_array($asset)
        && is_array($assetCss)
        && (($index['manifest']['entity'] ?? null) === PublicWorkspace::FILE_ENTITY)
        && (($asset['manifest']['entity'] ?? null) === PublicWorkspace::FILE_ENTITY)
        && ($index['bytes'] ?? null) === '<h1>Adapter root</h1>'
        && ($blogData['bytes'] ?? null) === '{"type":"data","slug":"blog"}'
        && ($asset['bytes'] ?? null) === 'console.log("app");',
    'adapter imports land in public_workspace_files and are readable through the shared public workspace model',
    $failures
);

$bucketId = $app->getStore()->bucketIdForEntity(PublicWorkspace::FILE_ENTITY);

phase0_assert(
    is_dir($dataDir . '/obj/' . $bucketId . '/manifests')
        && !is_dir($dataDir . '/site_pages'),
    'adapter import no longer creates detached site_pages storage as active truth',
    $failures
);

phase0_finish($failures);
