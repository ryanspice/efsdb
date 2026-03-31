<?php
require_once 'efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
echo "STAGING ROUTES:\n";
print_r($ws->listRoutePaths('staging'));
echo "PRODUCTION ROUTES:\n";
print_r($ws->listRoutePaths('production'));
