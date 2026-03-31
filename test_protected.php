<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
print_r($app->getPublicWorkspace()->readSiteFile('staging', 'routes/protected.php', false, false));
