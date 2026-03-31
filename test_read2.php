<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
$entries = $ws->siteWorkspaceEntries('staging');
echo "Manifest ID: " . $entries['components/test-angular/src/main.ts']['id'] . "\n";
echo "Store Read: " . substr($app->getStore()->readContentFromManifest(\EFSDB\Core\PublicWorkspace::FILE_ENTITY, $entries['components/test-angular/src/main.ts']), 0, 500) . "\n";
