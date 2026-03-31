<?php
require_once 'efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
echo "STAGING FILES:\n";
print_r($ws->exportSiteWorkspaceState('staging')['files']);
echo "\nPRODUCTION FILES:\n";
print_r($ws->exportSiteWorkspaceState('production')['files']);
