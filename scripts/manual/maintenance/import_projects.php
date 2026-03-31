<?php
declare(strict_types=1);

$repoRoot = dirname(__DIR__, 3);

require $repoRoot . '/efsdb/php/core/src/Config.php';
require $repoRoot . '/efsdb/php/core/src/App.php';

$app = new App(Config::getDataDir(), Config::getSchemaDir());
$store = $app->getStore();

$importDir = function (string $dir, string $logicalBase) use (&$importDir, $store): void {
    if (!is_dir($dir)) {
        return;
    }

    $files = scandir($dir);
    if (!is_array($files)) {
        return;
    }

    foreach ($files as $file) {
        if ($file === '.' || $file === '..') {
            continue;
        }

        $path = $dir . '/' . $file;
        $logicalPath = $logicalBase . '/' . $file;

        if (is_dir($path)) {
            if ($file !== 'node_modules' && $file !== '.svelte-kit') {
                $importDir($path, $logicalPath);
            }
            continue;
        }

        $content = file_get_contents($path);
        if ($content === false) {
            continue;
        }

        $mime = 'application/octet-stream';
        if (str_ends_with($file, '.json')) {
            $mime = 'application/json';
        } elseif (str_ends_with($file, '.ts')) {
            $mime = 'text/typescript';
        } elseif (str_ends_with($file, '.js')) {
            $mime = 'text/javascript';
        } elseif (str_ends_with($file, '.svelte')) {
            $mime = 'text/plain';
        } elseif (str_ends_with($file, '.html')) {
            $mime = 'text/html';
        }

        $meta = [
            'id' => $store->generateId(),
            'name' => $file,
            'mime' => $mime,
            'logicalPath' => ltrim($logicalPath, '/'),
        ];

        echo "Importing $logicalPath\n";
        $store->storeFile('project_files', $content, $meta);
    }
};

$importDir($repoRoot . '/projects/examples/sveltekit', 'projects/examples/sveltekit');
$importDir($repoRoot . '/projects/examples/svelte', 'projects/examples/svelte');
$importDir($repoRoot . '/projects/examples/react', 'projects/examples/react');
$importDir($repoRoot . '/projects/examples/angular', 'projects/examples/angular');
echo "Done.\n";
