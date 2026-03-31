<?php
declare(strict_types=1);

$repoRoot = dirname(__DIR__, 3);

require $repoRoot . '/efsdb/php/core/src/Config.php';
require $repoRoot . '/efsdb/php/core/src/App.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$app->getEnvironmentOperations()->promote('System', 'Initial sync');
echo "Synced\n";
