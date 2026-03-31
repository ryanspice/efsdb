<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase0-permissions-explorer';
$bootstrapSecret = 'phase0-permissions-explorer-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$identity = $app->getIdentity();

$app->upsert('phase0_assets', [
    'id' => 'sample',
    'logicalPath' => 'fixtures/sample.json',
    'kind' => 'fixture',
    'message' => 'phase0 explorer fixture',
]);
$assetManifest = $app->getStore()->getManifest('phase0_assets', 'sample');
$assetChunkHash = (string)(($assetManifest['chunks'][0]['hash'] ?? ''));
$assetChunkPath = $assetChunkHash === ''
    ? ''
    : 'phase0_assets/chunks/' . substr($assetChunkHash, 0, 2) . '/' . substr($assetChunkHash, 2, 2) . '/' . $assetChunkHash . '.c';

$member = $identity->createUser([
    'username' => 'phase0-member',
    'name' => 'Phase 0 Member',
    'roleId' => 'member_standard',
]);

$adminToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);
$memberToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, (string)$member['loginKey']);

$failures = [];

$adminRaw = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/list?mode=raw', 'GET', [
    'bearer' => $adminToken,
]);
$adminNatural = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/list?mode=natural', 'GET', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $adminRaw['status'] === 200
        && is_array($adminRaw['json'])
        && in_array('system_users', array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $adminRaw['json']['items'] ?? []), true),
    'Current tenant_admin raw root includes system storage entities',
    $failures
);

phase0_assert(
    $adminNatural['status'] === 200
        && is_array($adminNatural['json'])
        && in_array('system', array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $adminNatural['json']['items'] ?? []), true),
    'Generated tenant-admin keys can use natural explorer mode against system-backed entities',
    $failures
);

$memberNatural = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/list?mode=natural', 'GET', [
    'bearer' => $memberToken,
]);
phase0_assert(
    $memberNatural['status'] === 200 && is_array($memberNatural['json']) && array_key_exists('items', $memberNatural['json']),
    'Standard members can use natural explorer mode',
    $failures
);

$memberRaw = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/list?mode=raw', 'GET', [
    'bearer' => $memberToken,
]);
phase0_assert(
    $memberRaw['status'] === 403 && is_array($memberRaw['json']) && (($memberRaw['json']['error']['code'] ?? null) === 'paywall'),
    'Standard members are blocked from raw explorer mode',
    $failures
);

$ticket = Phase0Harness::request(
    $dataDir,
    $bootstrapSecret,
    '/_efsdb/api/explorer/ticket?mode=natural&path=' . rawurlencode('phase0_assets/fixtures/sample.json'),
    'GET',
    ['bearer' => $adminToken]
);

phase0_assert(
    $ticket['status'] === 200 && is_array($ticket['json']) && is_string($ticket['json']['ticket'] ?? null),
    'Explorer ticket issuance works for readable files',
    $failures
);

$rawEntityListing = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/list?mode=raw&path=' . rawurlencode('phase0_assets'), 'GET', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $rawEntityListing['status'] === 200
        && is_array($rawEntityListing['json'])
        && in_array('manifests', array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $rawEntityListing['json']['items'] ?? []), true)
        && in_array('chunks', array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $rawEntityListing['json']['items'] ?? []), true),
    'Raw explorer entity listings expose manifest and chunk storage directories alongside logical items',
    $failures
);

$assetManifestId = (string)($assetManifest['storageId'] ?? '');

$rawManifestListing = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/list?mode=raw&path=' . rawurlencode('phase0_assets/manifests'), 'GET', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $rawManifestListing['status'] === 200
        && is_array($rawManifestListing['json'])
        && in_array($assetManifestId, array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $rawManifestListing['json']['items'] ?? []), true),
    'Raw explorer manifest storage listings expose deterministic manifest files',
    $failures
);

$rawManifestDetails = Phase0Harness::request(
    $dataDir,
    $bootstrapSecret,
    '/_efsdb/api/explorer/details?mode=raw&path=' . rawurlencode('phase0_assets/manifests/' . $assetManifestId . '.m'),
    'GET',
    ['bearer' => $adminToken]
);

phase0_assert(
    $rawManifestDetails['status'] === 200
        && is_array($rawManifestDetails['json'])
        && (($rawManifestDetails['json']['storage']['kind'] ?? null) === 'manifest')
        && (($rawManifestDetails['json']['storage']['chunkCount'] ?? null) === count($assetManifest['chunks'] ?? [])),
    'Raw explorer details surface manifest storage relationships for manifest files',
    $failures
);

if ($assetChunkPath !== '') {
    $rawChunkDetails = Phase0Harness::request(
        $dataDir,
        $bootstrapSecret,
        '/_efsdb/api/explorer/details?mode=raw&path=' . rawurlencode($assetChunkPath),
        'GET',
        ['bearer' => $adminToken]
    );

    phase0_assert(
        $rawChunkDetails['status'] === 200
            && is_array($rawChunkDetails['json'])
            && (($rawChunkDetails['json']['storage']['kind'] ?? null) === 'chunk')
            && (($rawChunkDetails['json']['storage']['referenceCount'] ?? null) >= 1),
        'Raw explorer details surface chunk relationship data for storage chunk files',
        $failures
    );
}

$download = Phase0Harness::request(
    $dataDir,
    $bootstrapSecret,
    '/_efsdb/api/explorer/download?mode=natural&path=' . rawurlencode('phase0_assets/fixtures/sample.json') . '&ticket=' . rawurlencode((string)($ticket['json']['ticket'] ?? '')),
    'GET'
);

phase0_assert(
    $download['status'] === 200 && str_contains($download['body'], 'phase0 explorer fixture'),
    'Explorer download accepts a valid short-lived ticket',
    $failures
);

$app->getStore()->tombstone('phase0_assets', 'sample', [
    'actorId' => 'phase1-admin',
    'reason' => 'explorer visibility characterization',
]);

$naturalAfterDelete = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/list?mode=natural&path=' . rawurlencode('phase0_assets/fixtures'), 'GET', [
    'bearer' => $adminToken,
]);
$rawAfterDelete = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/list?mode=raw&path=' . rawurlencode('phase0_assets/fixtures'), 'GET', [
    'bearer' => $adminToken,
]);

phase0_assert(
    $naturalAfterDelete['status'] === 200
        && is_array($naturalAfterDelete['json'])
        && !in_array('sample.json', array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $naturalAfterDelete['json']['items'] ?? []), true),
    'Natural explorer listings hide tombstoned records immediately',
    $failures
);

phase0_assert(
    $rawAfterDelete['status'] === 200
        && is_array($rawAfterDelete['json'])
        && in_array('sample.json', array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $rawAfterDelete['json']['items'] ?? []), true),
    'Raw explorer listings continue to expose tombstoned records for privileged inspection',
    $failures
);

phase0_finish($failures);
