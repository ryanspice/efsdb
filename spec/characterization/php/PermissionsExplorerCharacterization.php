<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase0-permissions-explorer';
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

$member = $identity->createUser([
    'username' => 'phase0-member',
    'name' => 'Phase 0 Member',
    'roleId' => 'member_standard',
]);

$adminToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);
$memberToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, (string)$member['loginKey']);

$failures = [];

$adminRaw = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/explorer/list?mode=raw', 'GET', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $adminRaw['status'] === 200
        && is_array($adminRaw['json'])
        && in_array('system_users', array_map(static fn(array $item): string => (string)($item['name'] ?? ''), $adminRaw['json']['items'] ?? []), true),
    'Current tenant_admin raw root includes system storage entities',
    $failures
);

$memberNatural = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/explorer/list?mode=natural', 'GET', [
    'bearer' => $memberToken,
]);
phase0_assert(
    $memberNatural['status'] === 200 && is_array($memberNatural['json']) && array_key_exists('items', $memberNatural['json']),
    'Standard members can use natural explorer mode',
    $failures
);

$memberRaw = Phase0Harness::request($dataDir, $bootstrapSecret, '/api/explorer/list?mode=raw', 'GET', [
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
    '/api/explorer/ticket?mode=natural&path=' . rawurlencode('phase0_assets/fixtures/sample.json'),
    'GET',
    ['bearer' => $adminToken]
);

phase0_assert(
    $ticket['status'] === 200 && is_array($ticket['json']) && is_string($ticket['json']['ticket'] ?? null),
    'Explorer ticket issuance works for readable files',
    $failures
);

$download = Phase0Harness::request(
    $dataDir,
    $bootstrapSecret,
    '/api/explorer/download?mode=natural&path=' . rawurlencode('phase0_assets/fixtures/sample.json') . '&ticket=' . rawurlencode((string)($ticket['json']['ticket'] ?? '')),
    'GET'
);

phase0_assert(
    $download['status'] === 200 && str_contains($download['body'], 'phase0 explorer fixture'),
    'Explorer download accepts a valid short-lived ticket',
    $failures
);

phase0_finish($failures);
