<?php
require_once dirname(__DIR__, 3) . '/efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
$ws->setRootConfig('staging', ['visibility' => 'public']);
print_r($ws->getRoot('staging'));
