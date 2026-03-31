<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();

$indexContent = <<<PHP
<?php
// Nominated Route for efsdb_homepage
\$componentFile = \$efsdbSite->workspacePath('components/efsdb_homepage/index.html');
if (is_file(\$componentFile)) {
    \$html = file_get_contents(\$componentFile);
    \$efsdbData = json_encode([
        'env' => \$efsdbSite->environment(),
        'route' => 'index',
        'basePath' => \$efsdbSite->basePath(),
        'timestamp' => time()
    ]);
    \$html = str_replace('__EFSDB_BASE_PATH__', \$efsdbSite->basePath(), \$html);
    \$html = str_replace('</head>', "<script>window.__EFSDB__ = " . \$efsdbData . ";</script></head>", \$html);
    return [
        'body' => \$html,
        'contentType' => 'text/html; charset=utf-8'
    ];
}
return null;
PHP;

$ws->writeSiteFile('staging', 'routes/index.php', $indexContent, ['mime' => 'application/x-httpd-php']);
$ws->writeSiteFile('production', 'routes/index.php', $indexContent, ['mime' => 'application/x-httpd-php']);

echo "Restored routes/index.php to efsdb_homepage with hydration.\n";

$app->getGhostPreloadService()->preloadEnvironment('staging');
$app->getGhostPreloadService()->preloadEnvironment('production');

echo "Preloaded environments.\n";
