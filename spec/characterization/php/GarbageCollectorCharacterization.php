<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase1-garbage-collector';
$bootstrapSecret = 'phase1-garbage-collector-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$store = $app->getStore();
$gc = $app->getGarbageCollector();

$failures = [];

$sharedPayload = json_encode(['kind' => 'shared', 'value' => 'same-bytes'], JSON_THROW_ON_ERROR);
$app->uploadFile('phase1_assets', $sharedPayload, [
    'id' => 'asset1',
    'logicalPath' => 'shared/asset1.json',
    'mime' => 'application/json; charset=utf-8',
]);
$app->uploadFile('phase1_assets', $sharedPayload, [
    'id' => 'asset2',
    'logicalPath' => 'shared/asset2.json',
    'mime' => 'application/json; charset=utf-8',
]);

$asset1Manifest = $store->getManifest('phase1_assets', 'asset1');
$sharedChunkHash = (string)($asset1Manifest['chunks'][0]['hash'] ?? '');
$chunkPath = $dataDir . '/phase1_assets/chunks/' . substr($sharedChunkHash, 0, 2) . '/' . substr($sharedChunkHash, 2, 2) . '/' . $sharedChunkHash . '.c';

$store->tombstone('phase1_assets', 'asset1', [
    'actorId' => 'phase1-admin',
    'retainUntil' => gmdate('c', time() - 3600),
]);

$firstRun = $gc->collectExpired();

phase0_assert(
    ($firstRun['purgedManifests'] ?? null) === 1
        && !is_file($dataDir . '/phase1_assets/manifests/manifest_asset1.m')
        && is_file($chunkPath),
    'GC purges expired tombstoned manifests while retaining shared chunks that are still referenced',
    $failures
);

$store->tombstone('phase1_assets', 'asset2', [
    'actorId' => 'phase1-admin',
    'retainUntil' => gmdate('c', time() - 3600),
]);

$secondRun = $gc->collectExpired();

phase0_assert(
    ($secondRun['purgedManifests'] ?? null) === 1
        && ($secondRun['purgedChunks'] ?? 0) >= 1
        && !is_file($chunkPath),
    'GC removes unreferenced chunks only after the last manifest reference is gone',
    $failures
);

phase0_finish($failures);
