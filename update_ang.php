<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
$fileData = $ws->readSiteFile('staging', 'components/test-angular/src/main.ts');
if ($fileData && isset($fileData['bytes'])) {
    $bytes = $fileData['bytes'];
    $code = "\n// Console out hydrated EFSDB data\nif (typeof window !== 'undefined' && (window as any).__EFSDB__) {\n  console.log('EFSDB Hydration:', (window as any).__EFSDB__);\n}\n\n";
    if (!str_contains($bytes, 'EFSDB Hydration')) {
        $bytes = str_replace("document.querySelector<HTMLDivElement>('#app')", $code . "document.querySelector<HTMLDivElement>('#app')", $bytes);
        $ws->writeSiteFile('staging', 'components/test-angular/src/main.ts', $bytes);
        $app->getSiteBuildService()->handleSave('site/staging/components/test-angular/src/main.ts', 'natural');
        echo "Updated angular\n";
    } else {
        echo "Already updated\n";
    }
}
