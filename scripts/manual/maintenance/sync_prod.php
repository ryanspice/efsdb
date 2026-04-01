<?php
require_once dirname(__DIR__, 3) . '/efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$app->getEnvironmentOperations()->copy('staging', 'production', 'fresh_install', 'sys', 'Sync adapter config');
echo "Done copying staging to production.\n";
