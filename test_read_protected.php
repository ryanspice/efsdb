<?php
require 'efsdb/php/core/src/App.php';
$app = new App('.cache/efsdb/live/data', 'efsdb/schema');
$ws = $app->getPublicWorkspace();
$file = $ws->readSiteFile('staging', 'components/efsdb_template/protected/index.html', false, false);
if ($file) {
    echo "FOUND!\n";
} else {
    echo "NOT FOUND!\n";
}
