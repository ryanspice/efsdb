<?php
require_once 'efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
$rc = new ReflectionClass($ws);
$p = $rc->getProperty('store');
$p->setAccessible(true);
$store = $p->getValue($ws);
foreach ($store->scanVisibleManifests('public_workspace_files', PHP_INT_MAX, true) as $manifest) {
    if (str_starts_with($manifest['logicalPath'] ?? '', 'site/staging/')) {
        echo $manifest['logicalPath'] . " (Tombstoned: " . (isset($manifest['tombstonedAt']) ? 'Yes' : 'No') . ")\n";
    }
}
