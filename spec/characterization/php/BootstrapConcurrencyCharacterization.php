<?php
declare(strict_types=1);

require_once __DIR__ . '/SecurityProcessHarness.php';
require_once __DIR__ . '/../../../efsdb/php/core/src/AuthKey.php';

if (($argv[1] ?? '') === '--worker') {
    [$script, $flag, $dir, $mode, $id] = $argv;
    SecurityProcessHarness::barrier($dir, $mode, (int)$id);
    if ($mode === 'interrupted') {
        $store = new Store($dir . '/partial-data', new Schema(Phase0Harness::SCHEMA_DIR));
        $store->withExclusiveLock('app-bootstrap', function () use ($store, $dir): void {
            $store->initMasterKey();
            file_put_contents($dir . '/key-created', hash('sha256', $store->masterKeyB64()));
            SecurityProcessHarness::waitForFile($dir . '/never-release');
        });
    } else {
        $app = Phase0Harness::bootApp($dir . '/data', 'synthetic-bootstrap-secret');
        $authKey = AuthKey::get($dir . '/data');
        $admin = $app->getIdentity()->authenticateKey('synthetic-bootstrap-secret');
        echo json_encode([
            'masterHash' => hash('sha256', $app->getStore()->masterKeyB64()),
            'authHash' => hash('sha256', $authKey),
            'adminId' => $admin?->id,
            'adminHash' => hash('sha256', json_encode($app->getStore()->getDocument(Store::ENTITY_SYSTEM_USERS, 'tenant-admin'), JSON_THROW_ON_ERROR)),
        ], JSON_THROW_ON_ERROR);
    }
    exit(0);
}

$dir = sys_get_temp_dir() . '/efsdb-bootstrap-concurrency-' . bin2hex(random_bytes(8));
mkdir($dir, 0700, true);
$workers = [];
$failures = [];
try {
    for ($i = 0; $i < 8; $i++) {
        $workers[] = SecurityProcessHarness::start(__FILE__, $dir, 'cold', $i);
    }
    SecurityProcessHarness::release($workers, $dir, 'cold');
    $receipts = [];
    foreach ($workers as $worker) {
        $receipts[] = SecurityProcessHarness::collect($worker);
    }
    $workers = [];
    phase0_assert(count(array_unique(array_column($receipts, 'masterHash'))) === 1, 'Eight cold workers observe one stable master key', $failures);
    phase0_assert(count(array_unique(array_column($receipts, 'authHash'))) === 1, 'Eight cold workers observe one stable signing key', $failures);
    phase0_assert(array_unique(array_column($receipts, 'adminId')) === ['tenant-admin'] && count(array_unique(array_column($receipts, 'adminHash'))) === 1, 'Eight cold workers observe one tenant-admin credential record', $failures);

    $app = Phase0Harness::bootApp($dir . '/data', 'synthetic-bootstrap-secret');
    $store = $app->getStore();
    phase0_assert(count($store->scanAllManifests(Store::ENTITY_SYSTEM_USERS)) === 1 && count($store->scanAllManifests(Store::ENTITY_SYSTEM_ROLES)) === 5, 'Cold bootstrap leaves one admin and five seeded roles without duplicate manifests', $failures);
    $store->upsert('security_probe', ['id' => 'probe', 'value' => 'synthetic encrypted restart probe']);
    $masterBefore = file_get_contents($dir . '/data/master.key');
    $authBefore = file_get_contents($dir . '/data/auth.key');
    $store->initMasterKey();
    $restarted = Phase0Harness::bootApp($dir . '/data', 'different-bootstrap-secret');
    phase0_assert(file_get_contents($dir . '/data/master.key') === $masterBefore && AuthKey::get($dir . '/data') === $authBefore, 'Repeated initialization never replaces existing key bytes', $failures);
    phase0_assert(($restarted->getStore()->getDocument('security_probe', 'probe')['value'] ?? null) === 'synthetic encrypted restart probe', 'Encrypted records remain readable after initialization and restart', $failures);
    phase0_assert($restarted->getIdentity()->authenticateKey('synthetic-bootstrap-secret') !== null && $restarted->getIdentity()->authenticateKey('different-bootstrap-secret') === null, 'A later bootstrap secret cannot replace the existing admin credential', $failures);

    $workers[] = SecurityProcessHarness::start(__FILE__, $dir, 'interrupted', 0);
    SecurityProcessHarness::release($workers, $dir, 'interrupted');
    SecurityProcessHarness::waitForFile($dir . '/key-created');
    $partialMasterHash = trim((string)file_get_contents($dir . '/key-created'));
    SecurityProcessHarness::stop($workers[0]);
    $workers = [];
    $recovered = Phase0Harness::bootApp($dir . '/partial-data', 'synthetic-bootstrap-secret');
    phase0_assert(hash('sha256', $recovered->getStore()->masterKeyB64()) === $partialMasterHash && $recovered->getIdentity()->authenticateKey('synthetic-bootstrap-secret') !== null, 'A killed bootstrap worker releases the lock and startup completes without replacing its key', $failures);
    phase0_assert($recovered->getPublicWorkspace()->getRoot(PublicWorkspace::ROOT_STAGING) !== null && $recovered->getPublicWorkspace()->getRoot(PublicWorkspace::ROOT_PRODUCTION) !== null, 'Interrupted initialization also recovers both environment roots', $failures);

    mkdir($dir . '/invalid-data', 0700, true);
    foreach (['master.key', 'auth.key'] as $name) {
        file_put_contents($dir . '/invalid-data/' . $name, 'invalid-existing-material');
        $threw = false;
        try {
            if ($name === 'master.key') {
                (new Store($dir . '/invalid-data', new Schema(Phase0Harness::SCHEMA_DIR)))->initMasterKey();
            } else {
                AuthKey::get($dir . '/invalid-data');
            }
        } catch (RuntimeException) {
            $threw = true;
        }
        phase0_assert($threw && file_get_contents($dir . '/invalid-data/' . $name) === 'invalid-existing-material', "Malformed existing $name fails closed without replacement", $failures);
    }

    mkdir($dir . '/temporary-data', 0700, true);
    file_put_contents($dir . '/temporary-data/master.key.tmp.interrupted', 'partial-unpublished-key');
    $temporaryStore = new Store($dir . '/temporary-data', new Schema(Phase0Harness::SCHEMA_DIR));
    $temporaryStore->initMasterKey();
    phase0_assert(strlen(Crypto::keyFromB64($temporaryStore->masterKeyB64())) === 32 && file_get_contents($dir . '/temporary-data/master.key.tmp.interrupted') === 'partial-unpublished-key', 'Unpublished interrupted key bytes are ignored when a complete key is initialized', $failures);
    if (PHP_OS_FAMILY !== 'Windows') {
        phase0_assert((fileperms($dir . '/data/master.key') & 0777) === 0600 && (fileperms($dir . '/data/auth.key') & 0777) === 0600, 'New master and signing keys have Unix mode 0600', $failures);
    }
} finally {
    foreach ($workers as $worker) {
        SecurityProcessHarness::stop($worker);
    }
    Phase0Harness::resetDir($dir);
}
phase0_finish($failures);
