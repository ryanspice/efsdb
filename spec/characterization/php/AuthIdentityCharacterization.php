<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase0-auth-identity';
$bootstrapSecret = 'phase0-auth-identity-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$auth = new Auth($app);
$identity = $app->getIdentity();

$failures = [];

$login = $auth->login($bootstrapSecret);
phase0_assert(
    is_array($login) && is_string($login['accessToken'] ?? null),
    'Tenant-admin bootstrap key authenticates through the live auth service',
    $failures
);

phase0_assert(
    $auth->login('not-a-real-key') === null,
    'Invalid login keys are rejected',
    $failures
);

$tenantUser = $identity->authenticateKey($bootstrapSecret);
phase0_assert(
    $tenantUser !== null && $tenantUser->actualRole === 'tenant_admin',
    'Tenant-admin bootstrap key hydrates the seeded tenant_admin identity',
    $failures
);

if ($tenantUser === null) {
    phase0_finish($failures);
}

$refresh = $identity->createRefreshSession($tenantUser);
$_COOKIE['efsdb_refresh_token'] = $refresh['token'];
$firstRefresh = $auth->refresh();
$_COOKIE['efsdb_refresh_token'] = $refresh['token'];
$secondRefresh = $auth->refresh();

phase0_assert(
    is_array($firstRefresh) && $secondRefresh === null,
    'Refresh session rotation is single-use',
    $failures
);

$displayMode = $auth->changeDisplayMode($tenantUser, 'member_standard');
phase0_assert(
    is_array($displayMode)
        && (($displayMode['user']['role'] ?? null) === 'member_standard')
        && (($displayMode['user']['actualRole'] ?? null) === 'tenant_admin'),
    'Display mode switching preserves actualRole while changing effective role',
    $failures
);

phase0_finish($failures);
