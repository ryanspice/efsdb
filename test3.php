<?php
require_once 'efsdb/php/core/src/App.php';
require_once 'efsdb/php/core/src/Config.php';
$app = new App(Config::getDataDir(), Config::getSchemaDir());
$ws = $app->getPublicWorkspace();
$env = 'staging';

$copyDir = function (string $src, string $dstPath) use (&$copyDir, $ws, $env) {
    $items = scandir($src);
    if ($items === false) return;
    foreach ($items as $item) {
        if ($item === '.' || $item === '..' || $item === 'node_modules' || $item === 'dist' || $item === '.svelte-kit') continue;

        $itemSrc = "$src/$item";
        $itemDst = "$dstPath/$item";

        if (is_dir($itemSrc)) {
            $copyDir($itemSrc, $itemDst);
        } else {
            $bytes = file_get_contents($itemSrc);
            if ($bytes !== false) {
                $mime = 'application/octet-stream';
                if (str_ends_with($item, '.json')) $mime = 'application/json';
                elseif (str_ends_with($item, '.js') || str_ends_with($item, '.ts') || str_ends_with($item, '.tsx') || str_ends_with($item, '.jsx')) $mime = 'application/javascript';
                elseif (str_ends_with($item, '.css')) $mime = 'text/css';
                elseif (str_ends_with($item, '.html')) $mime = 'text/html';
                elseif (str_ends_with($item, '.md')) $mime = 'text/markdown';
                elseif (str_ends_with($item, '.svg')) $mime = 'image/svg+xml';
                elseif (str_ends_with($item, '.php')) $mime = 'application/x-httpd-php';
                elseif (str_ends_with($item, '.svelte')) $mime = 'text/plain';

                $wsRelPath = $itemDst;
                echo "Writing $wsRelPath ($mime)...\n";
                $ws->writeSiteFile($env, $wsRelPath, $bytes, ['mime' => $mime]);
            }
        }
    }
};

$repoRoot = dirname(__DIR__, 2);
$templateDir = 'projects/examples/react';
$targetPath = "components/react";
$copyDir($templateDir, $targetPath);
