<?php
declare(strict_types=1);

$repoRoot = dirname(__DIR__, 3);

require $repoRoot . '/efsdb/php/core/src/Config.php';
require $repoRoot . '/efsdb/php/core/src/App.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());

$dataDir = Config::getDataDir();
$schemaDir = Config::getSchemaDir();

putenv('EFSDB_DATA_DIR=' . $dataDir);
putenv('EFSDB_SCHEMA_DIR=' . $schemaDir);

$dir = $repoRoot . '/projects/efsdb_homepage';
echo "Linking cached node_modules to $dir...\n";
$app->getNodeEnvironmentService()->linkTemplateCache('sveltekit', $dir);

echo "Running bun run build in $dir...\n";
$output = [];
$returnVar = 0;
exec('cd ' . escapeshellarg($dir) . ' && bun --efsdb-process-id=template-build run build 2>&1', $output, $returnVar);
echo implode("\n", $output) . "\n";

if ($returnVar === 0) {
    echo "Copying staging to production to ensure identical fresh install...\n";
    try {
        $app->getEnvironmentOperations()->copy('staging', 'production', 'fresh_install', 'sys', 'Fresh install initialization');
    } catch (Throwable $e) {
        echo 'Warning: Could not copy to production: ' . $e->getMessage() . "\n";
    }

    echo "Updating ghost cache for both environments...\n";
    $app->getGhostPreloadService()->preloadEnvironment('staging');
    $app->getGhostPreloadService()->preloadEnvironment('production');
}

echo "Done.\n";
