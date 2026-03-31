<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
require_once 'efsdb/php/core/src/User.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$user = new User('mock-id', 'mock-user', 'operator_root', 'operator_root', 2000, 2000, ['operator'], ['operator'], [], 'operator_root', true);
$res = $app->getExplorer()->list($user, 'projects/examples/react', 'natural');
echo "Count: " . count($res['items'] ?? []) . "\n";
