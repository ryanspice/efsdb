<?php
require_once 'efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
echo $app->getPublicWorkspace()->siteLogicalPath('staging', 'components/efsdb_template/_app/immutable/nodes/2.DK2sirTH.js') . "\n";
