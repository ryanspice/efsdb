<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$res = $app->getPublicWorkspace()->readSiteFile('staging', 'routes/my-new-route2.php');
echo $res['bytes'] ?? '';
