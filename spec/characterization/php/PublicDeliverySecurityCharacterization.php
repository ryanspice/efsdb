<?php
declare(strict_types=1);

require_once __DIR__ . '/AdapterHarness.php';

$root = __DIR__ . '/../../../.cache/efsdb/tests/security/public-delivery';
Phase0Harness::resetDir($root);
$_SERVER['EFSDB_CACHE_ROOT'] = $_ENV['EFSDB_CACHE_ROOT'] = $root . '/cache';
putenv('EFSDB_CACHE_ROOT=' . $root . '/cache');
$dataDir = $root . '/data';
$secret = 'public-delivery-security-bootstrap';
$app = Phase0Harness::bootApp($dataDir, $secret);
$workspace = $app->getPublicWorkspace();
$workspace->writeSiteFile('production', 'routes/index.php', '<?php return "public homepage";');
$workspace->writeSiteFile('staging', 'routes/index.php', '<?php return "private staging";');
foreach (['routes/secret.php', 'components/secret.php', 'layouts/private.php', 'components/app/package.json', 'components/app/src/main.ts', 'assets/.env', 'assets/.git/private.html', 'assets/app.js.map', 'meta/seo.json', 'content/private.json'] as $path) {
    $workspace->writeSiteFile('production', $path, 'PRIVATE-SOURCE-MARKER');
}
$workspace->writeSiteFile('production', 'assets/app.js', 'public javascript', ['mime' => 'application/javascript']);
$workspace->writeSiteFile('production', 'assets/logo.svg', '<svg/>', ['mime' => 'image/svg+xml']);
$workspace->writeSiteFile('staging', 'assets/app.js', 'staging javascript', ['mime' => 'application/javascript']);
$snapshot = $workspace->materializeSiteWorkspace('staging');
mkdir($snapshot['path'] . '/components/generated/dist', 0700, true);
file_put_contents($snapshot['path'] . '/components/generated/dist/app.js', 'generated staging javascript');
$admin = Phase0Harness::loginAccessToken($dataDir, $secret, $secret);
$app->getIdentity()->createUser(['username' => 'delivery-member', 'roleId' => 'member_standard'], 'delivery-member-key');
$member = Phase0Harness::loginAccessToken($dataDir, $secret, 'delivery-member-key');
$failures = [];

foreach (['/routes/secret.php', '/routes/%73ecret.php', '/components/secret.php', '/layouts/private.php', '/components/app/package.json', '/components/app/src/main.ts', '/assets/.env', '/assets/%252egit/private.html', '/assets/app.js.map', '/meta/seo.json', '/content/private.json', '/.ghost/production/cache.html'] as $uri) {
    $response = Phase0Harness::request($dataDir, $secret, $uri);
    phase0_assert($response['status'] === 404 && !str_contains($response['body'], 'PRIVATE-SOURCE-MARKER'), "$uri is denied before public file delivery", $failures);
}
foreach (['/assets/app.js', '/app.js', '/assets/logo.svg'] as $uri) {
    $response = Phase0Harness::request($dataDir, $secret, $uri);
    phase0_assert($response['status'] === 200, "$uri retains explicit public asset delivery", $failures);
}
phase0_assert(($workspace->getRoot('staging')['visibility'] ?? '') === 'restricted', 'New staging roots default to restricted', $failures);

$router = $app->getPublicSiteRouter();
$first = $router->handle('/assets/app.js', 'GET', User::guest());
$oldEtag = $first['headers']['ETag'];
$unchanged = $router->handle('/assets/app.js', 'GET', User::guest(), ['if-none-match' => $oldEtag]);
$workspace->writeSiteFile('production', 'assets/app.js', 'changed javascript', ['mime' => 'application/javascript']);
$changed = $router->handle('/assets/app.js', 'GET', User::guest(), ['if-none-match' => $oldEtag, 'if-modified-since' => gmdate('D, d M Y H:i:s', time() + 60) . ' GMT']);
phase0_assert(($unchanged['status'] ?? 0) === 304 && ($changed['status'] ?? 0) === 200
    && ($changed['body'] ?? '') === 'changed javascript' && $changed['headers']['ETag'] !== $oldEtag,
    'Same-path content replacement invalidates old ETags and preserves unchanged 304 responses', $failures);

foreach ([null, $member, $admin] as $index => $token) {
    foreach (['/staging/assets/app.js', '/staging/components/generated/dist/app.js', '/staging'] as $uri) {
        $response = Phase0Harness::request($dataDir, $secret, $uri, 'GET', ['bearer' => $token]);
        // Public page requests use refresh cookies; bearer works for both paths.
        phase0_assert($response['status'] === ($index === 2 ? 200 : 404), "Restricted warm delivery obeys role $index for $uri", $failures);
    }
}

foreach (['public', 'restricted', 'disabled'] as $state) {
    $workspace->setRootConfig('staging', ['visibility' => $state === 'public' ? 'public' : 'restricted', 'enabled' => $state !== 'disabled']);
    foreach (['GET', 'HEAD'] as $method) {
        foreach ([[], ['Range' => 'bytes=0-3'], ['If-None-Match' => '*'], ['Accept-Encoding' => 'gzip']] as $headers) {
            $response = Phase0Harness::request($dataDir, $secret, '/staging/assets/app.js', $method, ['headers' => $headers]);
            phase0_assert($state === 'public' ? in_array($response['status'], [200, 206, 304], true) : $response['status'] === 404,
                "$state $method cache/range/conditional delivery enforces current policy", $failures);
        }
    }
}

$adapterDir = $root . '/adapter-data';
$adapterApp = phase4_seed_adapter_root($adapterDir, $secret);
$adapterRouter = $adapterApp->getPublicSiteRouter();
$data = $adapterRouter->handle('/blog/__data.json', 'GET', User::guest());
$js = $adapterRouter->handle('/_app/immutable/app.js', 'GET', User::guest());
phase0_assert(($data['status'] ?? 0) === 200 && ($js['status'] ?? 0) === 200, 'SvelteKit static data and app assets remain public', $failures);

phase0_finish($failures);
