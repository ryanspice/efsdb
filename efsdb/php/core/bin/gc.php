<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/Config.php';
require_once __DIR__ . '/../src/App.php';

Config::assertRepoPhpIniLoaded('bin/gc.php');

if (PHP_SAPI !== 'cli') {
    fwrite(STDERR, "This script must be run from the command line.\n");
    exit(1);
}

$dataDir = Config::getDataDir();
$schemaDir = Config::getSchemaDir();
$app = new App($dataDir, $schemaDir);

$gc = $app->getGarbageCollector();
$summary = $gc->collectExpired();

echo "Garbage Collection Completed\n";
echo "============================\n";
echo "Expired Tombstones: " . ($summary['expiredTombstones'] ?? 0) . "\n";
echo "Purged Manifests:   " . ($summary['purgedManifests'] ?? 0) . "\n";
echo "Purged Lookups:     " . ($summary['purgedLookups'] ?? 0) . "\n";
echo "Purged Chunks:      " . ($summary['purgedChunks'] ?? 0) . "\n";
