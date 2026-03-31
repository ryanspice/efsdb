<?php
$files = glob('b:/Dev/PHPFS/efsdb/php/core/public/.ghost/staging/*.html.gz');
foreach ($files as $file) {
    echo basename($file) . " : " . (str_contains(gzdecode(file_get_contents($file)), 'window.__EFSDB__ = {"env"') ? 'INJECTED' : 'NO') . "\n";
}
