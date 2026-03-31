<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';
require_once __DIR__ . '/AdapterHarness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase0-live-seam';
$bootstrapSecret = 'phase0-live-seam-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$workspace = $app->getPublicWorkspace();
$identity = $app->getIdentity();

$workspace->writeFile('production', '/index.php', '<?php return "<h1>Published root</h1>";', [
    'mime' => 'application/x-httpd-php',
]);
$workspace->writeFile('staging', '/secret/index.php', '<?php return "<h1>Staging secret</h1>";', [
    'mime' => 'application/x-httpd-php',
]);

$member = $identity->createUser([
    'username' => 'phase1-member',
    'name' => 'Phase 1 Member',
    'roleId' => 'member_standard',
]);

$failures = [];

$health = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/health');
phase0_assert(
    $health['status'] === 200 && is_array($health['json']) && ($health['json']['status'] ?? null) === 'ok',
    'GET /api/health returns the live seam health payload',
    $failures
);

$unknownApi = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/does-not-exist');
phase0_assert(
    $unknownApi['status'] === 404 && is_array($unknownApi['json']) && (($unknownApi['json']['error']['code'] ?? null) === 'not_found'),
    'Unknown /api/* routes fall through to JSON 404 not_found',
    $failures
);

$adminToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);
$memberToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, (string)$member['loginKey']);

$wrongAdminMethod = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/admin/users', 'PUT', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $wrongAdminMethod['status'] === 405 && is_array($wrongAdminMethod['json']) && (($wrongAdminMethod['json']['error']['code'] ?? null) === 'method_not_allowed'),
    'Known admin routes return 405 on wrong methods',
    $failures
);

$wrongProductsMethod = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/products', 'POST', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $wrongProductsMethod['status'] === 404 && is_array($wrongProductsMethod['json']) && (($wrongProductsMethod['json']['error']['code'] ?? null) === 'not_found'),
    'Known GET-only routes like /api/products fall through to JSON 404 on wrong methods',
    $failures
);

$whoAmIPost = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/auth/whoami', 'POST', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $whoAmIPost['status'] === 200 && is_array($whoAmIPost['json']) && (($whoAmIPost['json']['actualRole'] ?? null) === 'tenant_admin'),
    'Current whoami branch is method-permissive and responds on POST',
    $failures
);

$explorerPost = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/api/explorer/list?mode=natural', 'POST', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $explorerPost['status'] === 200 && is_array($explorerPost['json']) && array_key_exists('items', $explorerPost['json']),
    'Current explorer list branch is method-permissive and responds on POST',
    $failures
);

$fallbackLoginFailure = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/login', 'POST', [
    'post' => ['login_key' => 'wrong-secret'],
]);
phase0_assert(
    $fallbackLoginFailure['status'] === 200 && str_contains($fallbackLoginFailure['body'], 'Invalid login key'),
    'Fallback POST login_key renders the login error path when credentials are invalid',
    $failures
);

$guestControlRoot = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb');
$guestControlRootSlash = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/');
phase0_assert(
    $guestControlRoot['status'] === 200
        && $guestControlRootSlash['status'] === 200
        && str_contains($guestControlRoot['body'], 'guest-overlay-frame')
        && str_contains($guestControlRootSlash['body'], 'guest-overlay-frame')
        && str_contains($guestControlRoot['body'], 'Requested route /_efsdb/')
        && str_contains($guestControlRootSlash['body'], 'Requested route /_efsdb/'),
    'Bare and slash-suffixed control-plane roots both resolve to the same guest auth overlay home surface',
    $failures
);

$guestLoginOverlay = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/login');
phase0_assert(
    $guestLoginOverlay['status'] === 200
        && str_contains($guestLoginOverlay['body'], 'guest-overlay-frame')
        && str_contains($guestLoginOverlay['body'], 'Requested route /_efsdb/login')
        && str_contains($guestLoginOverlay['body'], 'Exit to website'),
    'Explicit guest login now renders inside the website-backed auth overlay shell',
    $failures
);

$guestLoginRejectsPublicNext = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/login?next=%2Fstaging');
phase0_assert(
    $guestLoginRejectsPublicNext['status'] === 200
        && str_contains($guestLoginRejectsPublicNext['body'], 'redirect":"\\/_efsdb\\/admin"')
        && !str_contains($guestLoginRejectsPublicNext['body'], 'redirect":"\\/staging"'),
    'Login overlay ignores non-control-plane redirect targets',
    $failures
);

$guestExplorerOverlayUri = '/_efsdb/explorer?mode=natural&path=' . rawurlencode('site/staging/routes/index.php');
$guestExplorerOverlay = Phase0Harness::request($dataDir, $bootstrapSecret, $guestExplorerOverlayUri);
phase0_assert(
    $guestExplorerOverlay['status'] === 200
        && str_contains($guestExplorerOverlay['body'], '<efsdb-login')
        && str_contains($guestExplorerOverlay['body'], 'guest-overlay-frame')
        && str_contains($guestExplorerOverlay['body'], 'src="/staging"')
        && str_contains($guestExplorerOverlay['body'], 'redirect":"\\/_efsdb\\/explorer?mode=natural\\u0026path=site%2Fstaging%2Froutes%2Findex.php')
        && str_contains($guestExplorerOverlay['body'], 'Exit to website'),
    'Unauthenticated control-plane routes render the auth overlay over the resolved website context',
    $failures
);

$authenticatedExplorerPage = Phase0Harness::request($dataDir, $bootstrapSecret, $guestExplorerOverlayUri, 'GET', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $authenticatedExplorerPage['status'] === 200
        && str_contains($authenticatedExplorerPage['body'], '<efsdb-explorer></efsdb-explorer>')
        && !str_contains($authenticatedExplorerPage['body'], 'guest-overlay-frame'),
    'Authenticated control-plane route requests bypass the auth overlay and render the normal surface',
    $failures
);

$fallbackLoginSuccess = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/login', 'POST', [
    'post' => ['login_key' => $bootstrapSecret],
]);
phase0_assert(
    $fallbackLoginSuccess['status'] === 302,
    'Fallback POST login_key issues a redirect on successful login',
    $failures
);

$logout = Phase0Harness::request($dataDir, $bootstrapSecret, '/_efsdb/logout');
phase0_assert(
    $logout['status'] === 302,
    'Compatibility logout path issues a redirect',
    $failures
);

$publishedRoot = Phase0Harness::request($dataDir, $bootstrapSecret, '/', 'GET');
phase0_assert(
    $publishedRoot['status'] === 200 && str_contains($publishedRoot['body'], 'Published root'),
    'Live seam serves the published public root through the Phase 1 public router',
    $failures
);

$publishedHead = Phase0Harness::request($dataDir, $bootstrapSecret, '/', 'HEAD');
phase0_assert(
    $publishedHead['status'] === 200
        && $publishedHead['body'] === ''
        && (($publishedHead['headerMap']['content-type'][0] ?? null) === ($publishedRoot['headerMap']['content-type'][0] ?? null))
        && (($publishedHead['headerMap']['x-efsdb-manifest'][0] ?? null) === ($publishedRoot['headerMap']['x-efsdb-manifest'][0] ?? null)),
    'HEAD / uses the same routed public item and meaningful headers as GET without returning a body',
    $failures
);

$stagingGuestExisting = Phase0Harness::request($dataDir, $bootstrapSecret, '/staging/secret', 'GET');
$stagingGuestMissing = Phase0Harness::request($dataDir, $bootstrapSecret, '/staging/missing', 'GET');
phase0_assert(
    $stagingGuestExisting['status'] === 404
        && $stagingGuestMissing['status'] === 404
        && $stagingGuestExisting['body'] === $stagingGuestMissing['body'],
    'Unauthenticated staging access is denied before path existence can leak',
    $failures
);

$stagingMember = Phase0Harness::request($dataDir, $bootstrapSecret, '/staging/secret', 'GET', [
    'bearer' => $memberToken,
]);
phase0_assert(
    $stagingMember['status'] === 404 && $stagingMember['body'] === $stagingGuestExisting['body'],
    'Unauthorized staging access uses the same non-leaking denial behavior as unauthenticated access',
    $failures
);

$stagingAdmin = Phase0Harness::request($dataDir, $bootstrapSecret, '/staging/secret', 'GET', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $stagingAdmin['status'] === 200 && str_contains($stagingAdmin['body'], 'Staging secret'),
    'Authorized tenant admin access can read staging content through the live seam',
    $failures
);

$stagingHead = Phase0Harness::request($dataDir, $bootstrapSecret, '/staging/secret', 'HEAD', [
    'bearer' => $adminToken,
]);
phase0_assert(
    $stagingHead['status'] === 200
        && $stagingHead['body'] === ''
        && (($stagingHead['headerMap']['content-type'][0] ?? null) === ($stagingAdmin['headerMap']['content-type'][0] ?? null))
        && (($stagingHead['headerMap']['x-efsdb-manifest'][0] ?? null) === ($stagingAdmin['headerMap']['x-efsdb-manifest'][0] ?? null)),
    'HEAD /staging uses the same routed item and meaningful headers as GET without returning a body',
    $failures
);

phase4_seed_adapter_root($dataDir, $bootstrapSecret, 'production');
phase4_seed_adapter_root($dataDir, $bootstrapSecret, 'staging');

$adapterPublished = Phase0Harness::request($dataDir, $bootstrapSecret, '/', 'GET');
phase0_assert(
    $adapterPublished['status'] === 200 && str_contains($adapterPublished['body'], 'Adapter root'),
    'Live seam serves adapter-mode published HTML through the shared public router once a root opts in',
    $failures
);

$adapterData = Phase0Harness::request($dataDir, $bootstrapSecret, '/blog/__data.json', 'GET');
phase0_assert(
    $adapterData['status'] === 200
        && $adapterData['body'] === '{"type":"data","slug":"blog"}',
    'Live seam serves adapter-mode __data.json without HTML fallback',
    $failures
);

$adapterMissingAsset = Phase0Harness::request($dataDir, $bootstrapSecret, '/_app/immutable/missing.js', 'GET');
phase0_assert(
    $adapterMissingAsset['status'] === 404 && $adapterMissingAsset['body'] === '404 Not Found (EFSDB)',
    'Live seam returns a direct 404 for missing adapter assets rather than falling back to HTML',
    $failures
);

$adapterAction = Phase0Harness::request($dataDir, $bootstrapSecret, '/blog/__action', 'GET');
phase0_assert(
    $adapterAction['status'] === 501 && $adapterAction['body'] === '501 Not Implemented (EFSDB)',
    'Live seam returns a stable 501 for unsupported adapter __action paths',
    $failures
);

$stagingAdapterExisting = Phase0Harness::request($dataDir, $bootstrapSecret, '/staging/blog/__data.json', 'GET');
$stagingAdapterMissing = Phase0Harness::request($dataDir, $bootstrapSecret, '/staging/missing/__data.json', 'GET');
phase0_assert(
    $stagingAdapterExisting['status'] === 404
        && $stagingAdapterMissing['status'] === 404
        && $stagingAdapterExisting['body'] === $stagingAdapterMissing['body'],
    'Staging keeps auth-first non-leaking denial behavior ahead of adapter path existence checks',
    $failures
);

$scopedDataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase0-live-seam-adapter-scoped';
$scopedBootstrapSecret = 'phase0-live-seam-adapter-scoped-secret';

Phase0Harness::resetDir($scopedDataDir);
phase4_seed_adapter_root($scopedDataDir, $scopedBootstrapSecret, 'production', [
    'basePath' => '/docs',
    'trailingSlash' => 'never',
    'appDir' => 'app',
]);

$scopedPublished = Phase0Harness::request($scopedDataDir, $scopedBootstrapSecret, '/docs/blog', 'GET');
$scopedData = Phase0Harness::request($scopedDataDir, $scopedBootstrapSecret, '/docs/blog/__data.json', 'GET');
$scopedAsset = Phase0Harness::request($scopedDataDir, $scopedBootstrapSecret, '/docs/app/immutable/app.js', 'GET');
$scopedOutsideBase = Phase0Harness::request($scopedDataDir, $scopedBootstrapSecret, '/blog', 'GET');
$scopedAction = Phase0Harness::request($scopedDataDir, $scopedBootstrapSecret, '/docs/blog/__action', 'GET');

phase0_assert(
    $scopedPublished['status'] === 200
        && str_contains($scopedPublished['body'], 'Adapter blog')
        && $scopedData['status'] === 200
        && $scopedData['body'] === '{"type":"data","slug":"blog"}'
        && $scopedAsset['status'] === 200
        && $scopedOutsideBase['status'] === 404
        && $scopedAction['status'] === 501,
    'Live seam preserves adapter basePath, trailingSlash, asset-prefix routing, and stable __action behavior once a root opts in',
    $failures
);

phase0_finish($failures);
