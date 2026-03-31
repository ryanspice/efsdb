<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase1-route-mutations';
$bootstrapSecret = 'phase1-route-mutations-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$workspace = $app->getPublicWorkspace();
$router = $app->getPublicSiteRouter();

$failures = [];

$starterRoute = $workspace->readSiteFile('production', 'routes/index.php', false, true);
$starterComponent = $workspace->readSiteFile('production', 'components/homepage-placeholder.php', false, true);

phase0_assert(
    is_array($starterRoute)
        && str_contains((string)($starterRoute['bytes'] ?? ''), 'EFSDB Homepage Placeholder Route')
        && is_array($starterComponent)
        && str_contains((string)($starterComponent['bytes'] ?? ''), 'EFSDB Homepage Placeholder Component'),
    'Fresh apps provision a real homepage starter route plus a companion component file inside the public workspace',
    $failures
);

$workspace->writeSiteFile('production', 'routes/my-new-route.php', '<?php return "Moved route";', [
    'mime' => 'application/x-httpd-php',
]);

$adminToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);
$rename = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/rename', 'POST', [
    'bearer' => $adminToken,
    'json' => [
        'path' => 'site/production/routes/my-new-route.php',
        'newPath' => 'site/production/routes/index.php',
        'mode' => 'natural',
    ],
]);

phase0_assert(
    $rename['status'] === 200
        && is_array($rename['json'])
        && (($rename['json']['logicalPath'] ?? null) === 'site/production/routes/index.php'),
    'Explorer rename endpoint can retarget a route onto the homepage file path',
    $failures
);

$home = $router->handle('/', 'GET', User::guest());
$oldPath = $router->handle('/my-new-route', 'GET', User::guest());

phase0_assert(
    is_array($home)
        && ($home['status'] ?? null) === 200
        && (($home['body'] ?? null) === 'Moved route')
        && is_array($oldPath)
        && ($oldPath['status'] ?? null) === 404,
    'Replacing the homepage route updates public resolution immediately and removes the old source path',
    $failures
);

$workspace->writeSiteFile('production', 'routes/delete-me.php', '<?php return "Delete me";', [
    'mime' => 'application/x-httpd-php',
]);

$delete = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/delete', 'POST', [
    'bearer' => $adminToken,
    'json' => [
        'path' => 'site/production/routes/delete-me.php',
        'mode' => 'natural',
        'confirmKey' => $bootstrapSecret,
    ],
]);

$deletedRoute = $router->handle('/delete-me', 'GET', User::guest());

phase0_assert(
    $delete['status'] === 200
        && is_array($delete['json'])
        && (($delete['json']['deleted'] ?? false) === true)
        && is_array($deletedRoute)
        && ($deletedRoute['status'] ?? null) === 404,
    'Explorer delete endpoint removes route files cleanly so deleted paths stop resolving publicly',
    $failures
);

phase0_finish($failures);
