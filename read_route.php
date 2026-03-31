<?php
require_once 'efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
echo $app->getStore()->readContentFromManifest('public_workspace_files', $app->getStore()->findManifestByLogicalPath('public_workspace_files', 'site/staging/routes/index.php'));
