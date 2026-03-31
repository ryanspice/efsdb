<?php
require_once 'efsdb/php/core/src/App.php'; 
require_once 'efsdb/php/core/src/Config.php'; 
$app = new App(Config::getDataDir(), Config::getSchemaDir()); 
$m = $app->getPublicWorkspace()->materializeSiteWorkspace('staging');
print_r($m);
if (isset($m['path'])) {
    echo "Content of routes/index.php:\n";
    echo file_get_contents($m['path'] . '/routes/index.php');
}
