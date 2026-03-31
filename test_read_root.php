<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
var_dump($ws->canReadRoot('production', User::guest()));
var_dump($ws->canReadRoot('staging', User::guest()));
