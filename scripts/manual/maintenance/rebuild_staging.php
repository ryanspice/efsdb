<?php
require_once dirname(__DIR__, 3) . '/efsdb/php/core/src/App.php';
require_once dirname(__DIR__, 3) . '/efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$app->getSiteBuildService()->buildEnvironment('staging');
