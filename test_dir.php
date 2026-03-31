<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$snap = $app->getPublicWorkspace()->materializeSiteWorkspace('staging');
var_dump(is_dir($snap['path'].'/components/my-new-route2'));
if (is_dir($snap['path'].'/components/my-new-route2')) {
    print_r(scandir($snap['path'].'/components/my-new-route2'));
} else {
    echo "Not a dir: " . $snap['path'].'/components/my-new-route2';
}
