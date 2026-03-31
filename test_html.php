<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$snap = $app->getPublicWorkspace()->materializeSiteWorkspace('staging');
echo file_get_contents($snap['path'] . '/components/efsdb_homepage/index.html');
