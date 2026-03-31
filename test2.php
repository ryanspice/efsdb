<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
$entries = array_keys((fn() => $this->siteWorkspaceEntries('staging'))->bindTo($ws, $ws)());
print_r(array_filter($entries, fn($e) => str_starts_with($e, 'components/')));
