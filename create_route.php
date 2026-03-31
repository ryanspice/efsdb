<?php
require_once 'efsdb/php/core/src/App.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
$ws->writeSiteFile('staging', 'routes/my-new-route.php', '<?php return "<h1>My New Route</h1>";', ['mime' => 'application/x-httpd-php']);
$ws->writeSiteFile('production', 'routes/my-new-route.php', '<?php return "<h1>My New Route</h1>";', ['mime' => 'application/x-httpd-php']);
echo "Created my-new-route.php\n";
