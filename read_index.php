<?php
require 'efsdb/php/core/src/App.php';
$app = new App('.cache/efsdb/live/data', 'efsdb/schema');
echo $app->getPublicWorkspace()->readSiteFile('staging', 'routes/index.php', false, true)['bytes'];
