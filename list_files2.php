<?php
require 'efsdb/php/core/src/App.php';
$app = new App('.cache/efsdb/live/data', 'efsdb/schema');
foreach ($app->getStore()->scanVisibleManifests('public_workspace_files', PHP_INT_MAX, false) as $manifest) {
    $logicalPath = $manifest['logicalPath'] ?? '';
    if (str_starts_with($logicalPath, 'site/staging/components/efsdb_template/')) {
        if (!str_starts_with($logicalPath, 'site/staging/components/efsdb_template/_app')) {
            echo "NON-APP: $logicalPath\n";
        }
    }
}
