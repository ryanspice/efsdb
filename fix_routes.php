<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$workspace = $app->getPublicWorkspace();

$nominatedRouteContent = <<<'PHP'
<?php
// Nominated Route for efsdb_template
error_log("Hitting nominated route for efsdb_template!");
$componentFile = $efsdbSite->workspacePath('components/efsdb_template/index.html');
if (is_file($componentFile)) {
    error_log("Component file found at $componentFile");
    return include $componentFile;
} else {
    error_log("Component file NOT found at $componentFile");
}
return null;
PHP;

$workspace->writeSiteFile('staging', 'routes/index.php', $nominatedRouteContent, ['mime' => 'application/x-httpd-php']);
$workspace->writeSiteFile('production', 'routes/index.php', $nominatedRouteContent, ['mime' => 'application/x-httpd-php']);
echo "Updated routes/index.php to point to efsdb_template with error_log\n";
