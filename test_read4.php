<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$content = $app->getStore()->readContent('public_workspace_files', '6d7aaed3646f4e15d5b46a118079e4a1780970f376e21db84d859f9c6703db84');
echo substr($content, 0, 500);
