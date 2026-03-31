<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
require_once 'efsdb/php/core/src/User.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
print_r($app->getExplorer()->list(User::guest(), 'projects/examples/react', 'natural'));
