<?php
declare(strict_types=1);

$repoRoot = dirname(__DIR__, 3);

require $repoRoot . '/efsdb/php/core/src/Config.php';
require $repoRoot . '/efsdb/php/core/src/App.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$store = $app->getStore();
$count = 0;

foreach ($store->scanAllManifests('public_workspace_files') as $manifest) {
    $logicalPath = $manifest['logicalPath'] ?? '';
    if (!str_contains($logicalPath, '_app') || str_starts_with($logicalPath, 'components/sveltekit/_app')) {
        continue;
    }

    echo "Deleting $logicalPath\n";
    $store->deleteManifest('public_workspace_files', $manifest['id']);
    $count++;
}

echo "Deleted $count files.\n";
