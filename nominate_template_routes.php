<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$workspace = $app->getPublicWorkspace();

function createNominatedRoute($workspace, $routePath, $componentFile) {
    $content = <<<PHP
<?php
// Nominated Route for efsdb_template
\$componentFile = \$efsdbSite->workspacePath('components/efsdb_template/{$componentFile}');
if (is_file(\$componentFile)) {
    return include \$componentFile;
}
return null;
PHP;

    $workspace->writeSiteFile('staging', "routes/{$routePath}", $content, ['mime' => 'application/x-httpd-php']);
    $workspace->writeSiteFile('production', "routes/{$routePath}", $content, ['mime' => 'application/x-httpd-php']);
}

createNominatedRoute($workspace, 'protected.php', 'protected.html');
createNominatedRoute($workspace, 'encrypted.php', 'encrypted.html');

echo "Created nominated routes for protected and encrypted.\n";
