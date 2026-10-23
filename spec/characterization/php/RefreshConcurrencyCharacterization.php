<?php
declare(strict_types=1);

require_once __DIR__ . '/SecurityProcessHarness.php';

if (($argv[1] ?? '') === '--worker') {
    [$script, $flag, $dir, $mode, $id] = $argv;
    Phase0Harness::primeEnv($dir . '/data', 'synthetic-refresh-secret');
    $store = new Store($dir . '/data', new Schema(Phase0Harness::SCHEMA_DIR));
    $identity = new IdentityManager($store, new Permissions());
    $input = json_decode((string)file_get_contents($dir . '/input.json'), true, 512, JSON_THROW_ON_ERROR);
    SecurityProcessHarness::barrier($dir, $mode, (int)$id);
    if ($mode === 'interrupted') {
        $store->withExclusiveLock('refresh-sessions', function () use ($store, $input, $dir): void {
            // Reproduce the durable boundary after consume and before child publication.
            $current = $store->getDocument(Store::ENTITY_SYSTEM_SESSIONS, $input['sessionId']);
            $current['status'] = 'rotated';
            $current['revokedAt'] = gmdate('c');
            $current['updatedAt'] = gmdate('c');
            $store->upsert(Store::ENTITY_SYSTEM_SESSIONS, $current, ['lookupFields' => ['tokenHash']]);
            file_put_contents($dir . '/consumed', 'yes');
            SecurityProcessHarness::waitForFile($dir . '/never-release');
        });
    } elseif ($mode === 'logout' && (int)$id === 0) {
        $identity->revokeRefreshSession($input['token']);
        echo json_encode(['revoked' => true], JSON_THROW_ON_ERROR);
    } else {
        echo json_encode(['next' => $identity->rotateRefreshSession($input['token'])], JSON_THROW_ON_ERROR);
    }
    exit(0);
}

$dir = sys_get_temp_dir() . '/efsdb-refresh-concurrency-' . bin2hex(random_bytes(8));
mkdir($dir, 0700, true);
$workers = [];
$failures = [];
try {
    $app = Phase0Harness::bootApp($dir . '/data', 'synthetic-refresh-secret');
    $identity = $app->getIdentity();
    $store = $app->getStore();
    $user = $identity->authenticateKey('synthetic-refresh-secret');
    if ($user === null) {
        throw new RuntimeException('Synthetic admin was not initialized');
    }
    $initial = $identity->createRefreshSession($user);
    file_put_contents($dir . '/input.json', json_encode(['token' => $initial['token'], 'sessionId' => $initial['session']['id']], JSON_THROW_ON_ERROR));
    for ($i = 0; $i < 8; $i++) {
        $workers[] = SecurityProcessHarness::start(__FILE__, $dir, 'rotate', $i);
    }
    SecurityProcessHarness::release($workers, $dir, 'rotate');
    $successful = [];
    foreach ($workers as $worker) {
        $result = SecurityProcessHarness::collect($worker);
        if (is_array($result['next'] ?? null)) {
            $successful[] = $result['next'];
        }
    }
    $workers = [];
    phase0_assert(count($successful) === 1, 'Eight concurrent refreshes produce exactly one success', $failures);
    $sessions = array_map(fn(array $manifest): array => $store->readDocument(Store::ENTITY_SYSTEM_SESSIONS, $manifest['id']), $store->scanAllManifests(Store::ENTITY_SYSTEM_SESSIONS));
    $active = array_values(array_filter($sessions, fn(array $session): bool => $session['status'] === 'active'));
    $parent = $store->readDocument(Store::ENTITY_SYSTEM_SESSIONS, $initial['session']['id']);
    phase0_assert(count($sessions) === 2 && count($active) === 1 && ($parent['rotatedTo'] ?? null) === ($active[0]['id'] ?? null), 'Only one active descendant remains and its consumed parent links to it', $failures);
    phase0_assert($identity->rotateRefreshSession($initial['token']) === null, 'Consumed parent replay is rejected', $failures);
    if (count($successful) === 1) {
        $nextToken = $successful[0]['token'];
        phase0_assert($identity->findRefreshSession($nextToken) !== null, 'Winning descendant authenticates', $failures);
        $identity->revokeRefreshSession($nextToken);
        phase0_assert($identity->rotateRefreshSession($nextToken) === null, 'Logged-out descendant cannot refresh', $failures);
    }

    $expired = $identity->createRefreshSession($user);
    $expired['session']['expiresAt'] = gmdate('c', time() - 1);
    $store->upsert(Store::ENTITY_SYSTEM_SESSIONS, $expired['session'], ['lookupFields' => ['tokenHash']]);
    phase0_assert($identity->rotateRefreshSession($expired['token']) === null, 'Expired refresh token is rejected', $failures);
    phase0_assert($identity->rotateRefreshSession('synthetic-unknown-token') === null, 'Unknown refresh token is rejected', $failures);

    $race = $identity->createRefreshSession($user);
    file_put_contents($dir . '/input.json', json_encode(['token' => $race['token'], 'sessionId' => $race['session']['id']], JSON_THROW_ON_ERROR));
    for ($i = 0; $i < 4; $i++) {
        $workers[] = SecurityProcessHarness::start(__FILE__, $dir, 'logout', $i);
    }
    SecurityProcessHarness::release($workers, $dir, 'logout');
    $winners = 0;
    foreach ($workers as $worker) {
        $result = SecurityProcessHarness::collect($worker);
        $winners += is_array($result['next'] ?? null) ? 1 : 0;
    }
    $workers = [];
    phase0_assert($winners <= 1 && $identity->findRefreshSession($race['token']) === null, 'Logout and refresh serialize without resurrecting the supplied credential', $failures);

    $interrupted = $identity->createRefreshSession($user);
    file_put_contents($dir . '/input.json', json_encode(['token' => $interrupted['token'], 'sessionId' => $interrupted['session']['id']], JSON_THROW_ON_ERROR));
    $workers[] = SecurityProcessHarness::start(__FILE__, $dir, 'interrupted', 0);
    SecurityProcessHarness::release($workers, $dir, 'interrupted');
    SecurityProcessHarness::waitForFile($dir . '/consumed');
    SecurityProcessHarness::stop($workers[0]);
    $workers = [];
    $restarted = Phase0Harness::bootApp($dir . '/data', 'synthetic-refresh-secret');
    phase0_assert($restarted->getIdentity()->rotateRefreshSession($interrupted['token']) === null, 'An interrupted consume remains rejected after process death and restart', $failures);
    phase0_assert($restarted->getIdentity()->authenticateKey('synthetic-refresh-secret') !== null, 'Account login remains available after an interrupted rotation', $failures);
} finally {
    foreach ($workers as $worker) {
        SecurityProcessHarness::stop($worker);
    }
    Phase0Harness::resetDir($dir);
}
phase0_finish($failures);
