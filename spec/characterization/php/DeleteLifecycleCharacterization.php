<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase1-delete-lifecycle';
$bootstrapSecret = 'phase1-delete-lifecycle-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$store = $app->getStore();

$failures = [];

$app->upsert('phase1_docs', [
    'id' => 'doc1',
    'logicalPath' => 'tenant/docs/one.json',
    'title' => 'live',
]);

$tombstoned = $store->tombstone('phase1_docs', 'doc1', [
    'actorId' => 'phase1-admin',
    'reason' => 'characterization delete',
]);

phase0_assert(
    is_array($tombstoned)
        && $store->isTombstonedManifest($tombstoned)
        && (($tombstoned['lifecycle']['tombstone']['reason'] ?? null) === 'characterization delete'),
    'Store tombstone writes manifest lifecycle metadata without purging content immediately',
    $failures
);

phase0_assert(
    count($store->scanVisibleManifests('phase1_docs')) === 0,
    'Visible manifest scans hide tombstoned records immediately',
    $failures
);

$restored = $store->restore('phase1_docs', 'doc1', ['actorId' => 'phase1-admin']);

phase0_assert(
    is_array($restored)
        && !$store->isTombstonedManifest($restored)
        && (($store->readDocument('phase1_docs', 'doc1')['title'] ?? null) === 'live'),
    'Restore clears tombstone state and preserves document readability',
    $failures
);

$tombstonedAgain = $store->tombstone('phase1_docs', 'doc1', [
    'actorId' => 'phase1-admin',
    'retainUntil' => gmdate('c', time() - 3600),
]);

phase0_assert(
    is_array($tombstonedAgain) && $store->isTombstonedManifest($tombstonedAgain),
    'Store supports explicit expired retention timestamps for GC characterization',
    $failures
);

phase0_finish($failures);
