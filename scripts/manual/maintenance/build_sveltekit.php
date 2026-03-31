<?php
declare(strict_types=1);

$repoRoot = dirname(__DIR__, 3);

require $repoRoot . '/efsdb/php/core/src/Config.php';
require $repoRoot . '/efsdb/php/core/src/App.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$store = $app->getStore();

$tmpDir = $repoRoot . '/.cache/efsdb/workspaces/builds/sveltekit';
if (!is_dir($tmpDir)) {
    mkdir($tmpDir, 0777, true);
}

echo "Exporting SvelteKit project to $tmpDir...\n";

foreach ($store->scanAllManifests('project_files') as $manifest) {
    $logicalPath = $manifest['logicalPath'] ?? '';
    if (!str_starts_with($logicalPath, 'projects/examples/sveltekit/')) {
        continue;
    }

    $relPath = substr($logicalPath, strlen('projects/examples/sveltekit/'));
    if ($relPath === '') {
        continue;
    }

    $targetPath = $tmpDir . '/' . $relPath;
    $dir = dirname($targetPath);
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }

    $content = $store->readContent('project_files', $manifest['id']);
    file_put_contents($targetPath, $content);
}

$dataDir = Config::getDataDir();
$schemaDir = Config::getSchemaDir();

putenv('EFSDB_DATA_DIR=' . $dataDir);
putenv('EFSDB_SCHEMA_DIR=' . $schemaDir);

$tmpDirReal = realpath($tmpDir);
if ($tmpDirReal === false) {
    throw new RuntimeException('Temporary build directory could not be resolved.');
}

if (file_exists($tmpDirReal . '/bun.lock')) {
    unlink($tmpDirReal . '/bun.lock');
}

echo "Linking cached node_modules to $tmpDirReal...\n";
$app->getNodeEnvironmentService()->linkTemplateCache('sveltekit', $tmpDirReal);

echo "Running bun run build in $tmpDirReal...\n";
$output = [];
$returnVar = 0;
exec('cd ' . escapeshellarg($tmpDirReal) . ' && bun run build --efsdb-process-id=sveltekit-build 2>&1', $output, $returnVar);
echo implode("\n", $output) . "\n";

echo "Done.\n";
