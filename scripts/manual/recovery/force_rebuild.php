<?php
require_once dirname(__DIR__, 3) . '/efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
$rc = new ReflectionClass($ws);
$m = $rc->getMethod('materializedWorkspaceBaseDir');
$dir = $m->invoke($ws, 'staging');
$cache = $dir . '/.fingerprint-cache';
if (is_file($cache)) {
    unlink($cache);
    echo "Deleted staging cache\n";
}
$dir = $m->invoke($ws, 'production');
$cache = $dir . '/.fingerprint-cache';
if (is_file($cache)) {
    unlink($cache);
    echo "Deleted production cache\n";
}
$ws->materializeSiteWorkspace('staging');
$ws->materializeSiteWorkspace('production');
echo "Materialized workspaces rebuilt.\n";
