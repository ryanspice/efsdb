<?php
declare(strict_types=1);

$args = getopt('', [
    'src:',
    'web:',
    'chunk:',
    'prefix:',
    'root:',
    'delivery-mode:',
    'base-path:',
    'trailing-slash:',
    'app-dir:',
]);

$src = $args['src'] ?? null;
$web = $args['web'] ?? null;
$chunk = isset($args['chunk']) ? (int)$args['chunk'] : 262144;
$prefix = $args['prefix'] ?? '';
$root = $args['root'] ?? 'production';
$deliveryMode = $args['delivery-mode'] ?? null;
$basePath = $args['base-path'] ?? null;
$trailingSlash = $args['trailing-slash'] ?? null;
$appDir = $args['app-dir'] ?? null;

if (!is_string($src) || trim($src) === '' || !is_string($web) || trim($web) === '') {
    fwrite(STDERR, "Missing --src or --web\n");
    exit(2);
}

$normalizePath = static function (string $path): string {
    return rtrim(str_replace('\\', '/', $path), '/');
};

$src = $normalizePath($src);
$web = $normalizePath($web);
$dataDir = getenv('EFSDB_DATA_DIR');
if (!is_string($dataDir) || trim($dataDir) === '') {
    $dataDir = dirname($web) . '/.efsdb';
}
$dataDir = $normalizePath($dataDir);

$schemaDir = getenv('EFSDB_SCHEMA_DIR');
if (!is_string($schemaDir) || trim($schemaDir) === '') {
    $schemaDir = dirname(__DIR__) . '/schema';
}
$schemaDir = $normalizePath($schemaDir);

$_SERVER['EFSDB_DATA_DIR'] = $dataDir;
$_ENV['EFSDB_DATA_DIR'] = $dataDir;
putenv('EFSDB_DATA_DIR=' . $dataDir);

$_SERVER['EFSDB_SCHEMA_DIR'] = $schemaDir;
$_ENV['EFSDB_SCHEMA_DIR'] = $schemaDir;
putenv('EFSDB_SCHEMA_DIR=' . $schemaDir);

require_once dirname(__DIR__) . '/src/App.php';

$app = new App($dataDir, $schemaDir);
$importer = $app->getPublicSiteImport();

$context = $prefix === ''
    ? "Importing public-site content from {$src} into {$root}"
    : "Importing public-site assets from {$src} into {$root} with prefix {$prefix}";
fwrite(STDOUT, $context . "...\n");

$summary = $importer->importDirectory($src, [
    'root' => $root,
    'prefix' => $prefix,
    'chunkSize' => $chunk,
    'deliveryMode' => $deliveryMode,
    'basePath' => $basePath,
    'trailingSlash' => $trailingSlash,
    'appDir' => $appDir,
]);

fwrite(STDOUT, 'Imported ' . (int)($summary['imported'] ?? 0) . " files into shared public workspace\n");
