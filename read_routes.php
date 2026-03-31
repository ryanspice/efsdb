<?php
require_once 'efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
echo "STAGING routes/index.php:\n";
print_r($ws->readSiteFile('staging', 'routes/index.php', false, true)['bytes']);
echo "\nPRODUCTION routes/index.php:\n";
print_r($ws->readSiteFile('production', 'routes/index.php', false, true)['bytes']);
