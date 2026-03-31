<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
$prop = new ReflectionProperty('PublicWorkspace', 'store');
$store = $prop->getValue($ws);
$manifests = $store->scanVisibleManifests('public_workspace_files', PHP_INT_MAX, false);
foreach ($manifests as $m) {
    if (str_contains($m['logicalPath'], 'test-angular/src/main.ts')) {
        echo $m['logicalPath'] . ' - ID: ' . $m['id'] . ' - MTIME: ' . ($m['mtime'] ?? '') . "\n";
    }
}
