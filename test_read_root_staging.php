<?php
require_once 'efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
print_r($app->getPublicWorkspace()->getRoot('staging'));
