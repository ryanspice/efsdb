<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/Config.php';

Config::assertRepoPhpIniLoaded('bin/assert_repo_php_ini.php');

$loadedIni = php_ini_loaded_file();
if (!is_string($loadedIni) || trim($loadedIni) === '') {
    fwrite(STDERR, "No php.ini loaded\n");
    exit(1);
}

fwrite(STDOUT, str_replace('\\', '/', $loadedIni) . PHP_EOL);
