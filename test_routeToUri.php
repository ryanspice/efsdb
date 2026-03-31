<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$method = new ReflectionMethod('GhostPreloadService', 'routeToUri');
$method->setAccessible(true);
echo $method->invoke($app->getGhostPreloadService(), 'staging', 'routes/index.php') . "\n";
echo $method->invoke($app->getGhostPreloadService(), 'staging', 'routes/login.php') . "\n";
