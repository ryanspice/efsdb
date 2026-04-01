<?php
require_once dirname(__DIR__, 3) . '/efsdb/php/core/src/App.php';
require_once dirname(__DIR__, 3) . '/efsdb/php/core/src/Config.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
echo "Preloading staging...\n";
$app->getGhostPreloadService()->preloadEnvironment('staging');
echo "Preloading production...\n";
$app->getGhostPreloadService()->preloadEnvironment('production');
echo "Done.\n";
