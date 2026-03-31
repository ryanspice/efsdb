<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase1-public-workspace';
$bootstrapSecret = 'phase1-public-workspace-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$workspace = $app->getPublicWorkspace();

$failures = [];

$publishedRoot = $workspace->ensureRoot('published');
$stagingRoot = $workspace->ensureRoot('staging');

phase0_assert(
    ($publishedRoot['visibility'] ?? null) === 'public',
    'Published root defaults to public-read visibility',
    $failures
);

phase0_assert(
    ($stagingRoot['visibility'] ?? null) === 'restricted',
    'Staging root defaults to restricted visibility',
    $failures
);

$firstManifest = $workspace->writeFile('published', '/docs/index.html', '<h1>Published</h1>', [
    'mime' => 'text/html; charset=utf-8',
]);

$workspace->tombstoneFile('published', '/docs/index.html', [
    'actorId' => 'phase1-admin',
]);

$secondManifest = $workspace->writeFile('published', '/docs/index.html', '<h1>Recreated</h1>', [
    'mime' => 'text/html; charset=utf-8',
]);

$resolved = $workspace->readFile('published', '/docs/index.html');

phase0_assert(
    is_array($resolved)
        && (($firstManifest['id'] ?? null) === ($secondManifest['id'] ?? null))
        && str_contains((string)($resolved['bytes'] ?? ''), 'Recreated'),
    'Recreating a tombstoned public path restores the same deterministic record id instead of creating a second logical file',
    $failures
);

$lookupDir = $dataDir . '/idx/lookup/public_workspace_files';
phase0_assert(
    !is_dir($lookupDir),
    'Public workspace file resolution does not depend on generic lookup files',
    $failures
);

phase0_assert(
    PublicWorkspace::previewUrlForLogicalPath('site/staging/routes/users/[id].php') === '/staging/users/preview'
        && PublicWorkspace::previewUrlForLogicalPath('site/production/routes/index.php') === '/'
        && PublicWorkspace::previewUrlForLogicalPath('site/staging/routes/404.php') === null,
    'Public workspace preview URLs normalize root routes, dynamic route params, and non-previewable 404 routes consistently',
    $failures
);

phase0_finish($failures);
