<?php
require_once 'efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
echo $app->getDeliveryModeResolver()->resolve('staging') . "\n";
