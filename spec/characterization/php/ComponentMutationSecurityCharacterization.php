<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';
require_once __DIR__ . '/../../../efsdb/php/core/src/ComponentMutationPolicy.php';

$root = __DIR__ . '/../../../.cache/efsdb/tests/security/component-mutations';
Phase0Harness::resetDir($root);
$_SERVER['EFSDB_CACHE_ROOT'] = $_ENV['EFSDB_CACHE_ROOT'] = $root . '/cache';
putenv('EFSDB_CACHE_ROOT=' . $root . '/cache');
$dataDir = $root . '/data';
$secret = 'component-security-bootstrap';
$app = Phase0Harness::bootApp($dataDir, $secret);
$identity = $app->getIdentity();
$identity->createRole(['id' => 'no-edit', 'entitlements' => []]);
$identity->createRole(['id' => 'site-editor', 'entitlements' => ['NATURAL_VIEW', 'SITE_EDIT']]);
$failures = [];

foreach (['member_standard', 'member_premium', 'no-edit', 'site-editor', 'tenant_admin'] as $role) {
    $key = 'component-security-' . $role;
    $createdUser = $identity->createUser(['username' => 'security-' . $role, 'roleId' => $role], $key);
    $token = Phase0Harness::loginAccessToken($dataDir, $secret, $key);
    $before = $app->getPublicWorkspace()->exportSiteWorkspaceState('production');
    $temporary = glob(sys_get_temp_dir() . '/efsdb_import_*') ?: [];
    $canEdit = in_array($role, ['site-editor', 'tenant_admin'], true);
    $create = Phase0Harness::request($dataDir, $secret, '/_efsdb/api/explorer/create-component', 'POST', [
        'bearer' => $token, 'json' => ['name' => 'denied-copy', 'framework' => '../../efsdb/php/core', 'env' => 'production'],
    ]);
    $import = Phase0Harness::request($dataDir, $secret, '/_efsdb/api/explorer/import-component', 'POST', [
        'bearer' => $token, 'post' => ['name' => 'denied-import', 'env' => 'invalid', 'source' => 'github', 'githubUrl' => 'https://github.com/owner/repository'],
    ]);
    $after = Phase0Harness::bootApp($dataDir, $secret)->getPublicWorkspace()->exportSiteWorkspaceState('production');
    phase0_assert($create['status'] === ($canEdit ? 400 : 403) && $import['status'] === ($canEdit ? 400 : 403),
        "$role is authorized before component template/import validation", $failures);
    phase0_assert($before['fingerprint'] === $after['fingerprint'] && $temporary === (glob(sys_get_temp_dir() . '/efsdb_import_*') ?: []),
        "$role rejection leaves workspace and temporary imports unchanged", $failures);
    if ($canEdit) {
        $actor = $identity->getUserById((string)$createdUser['user']['id']);
        $created = $app->getExplorer()->put($actor, "site/staging/components/$role.txt", 'authorized editor', 'text/plain');
        phase0_assert(($created['details']['logicalPath'] ?? '') === "site/staging/components/$role.txt",
            "$role retains normal authorized Explorer site writes", $failures);
    }
}

foreach (['sveltekit', 'svelte', 'react', 'angular'] as $framework) {
    phase0_assert(is_dir(ComponentMutationPolicy::template($framework, __DIR__ . '/../../../projects/examples')),
        "$framework resolves through the fixed template map", $failures);
}
foreach (['../../efsdb/php/core', '/tmp', 'unknown'] as $framework) {
    try {
        ComponentMutationPolicy::template($framework, __DIR__ . '/../../../projects/examples');
        $denied = false;
    } catch (InvalidArgumentException) { $denied = true; }
    phase0_assert($denied, "Template selector rejects $framework", $failures);
}
foreach (['https://github.com/owner/repo?redirect=bad', 'https://github.com:443/owner/repo', 'https://user@github.com/owner/repo', 'https://example.com/owner/repo'] as $url) {
    try { ComponentMutationPolicy::githubArchiveUrl($url, 'main'); $denied = false; }
    catch (InvalidArgumentException) { $denied = true; }
    phase0_assert($denied, 'GitHub archive URL rejects credentials, ports, queries and other hosts', $failures);
}

// Build tiny archives in the owned sandbox; never extract with a server UID.
if (class_exists('ZipArchive')) {
    foreach (['safe' => 'app/index.html', 'traversal' => '../escaped.txt', 'absolute' => '/escaped.txt', 'drive' => 'C:/escaped.txt',
        'win-parent' => '.. /escaped.txt', 'win-dot' => 'app./escaped.txt', 'win-space' => 'app /escaped.txt',
        'win-device' => 'app/CON.txt', 'win-device-extension' => 'app/com1',
        'win-reserved' => 'app/bad?.txt', 'link' => 'app/link', 'oversize' => 'large.txt'] as $case => $name) {
        $archive = $root . '/' . $case . '.zip';
        $zip = new ZipArchive();
        $zip->open($archive, ZipArchive::CREATE);
        $zip->addFromString($name, $case === 'oversize' ? str_repeat('A', 8388609) : '<h1>safe</h1>');
        if ($case === 'link') $zip->setExternalAttributesName($name, ZipArchive::OPSYS_UNIX, 0120777 << 16);
        $zip->close();
        $destination = $root . '/extracted-' . $case;
        mkdir($destination, 0700);
        try { ComponentMutationPolicy::extract($archive, $destination, false); $denied = false; }
        catch (InvalidArgumentException) { $denied = true; }
        phase0_assert($denied === ($case !== 'safe') && !is_file($root . '/escaped.txt'), "ZIP $case obeys path, link and expanded-size limits", $failures);
    }
} else {
    echo "[SKIP] ZIP extraction runtime extension is unavailable\n";
}
// libzip may sanitize control bytes before exposing names; verify the portable
// path boundary itself as well as the archive fixtures above.
$entryValidator = new ReflectionMethod(ComponentMutationPolicy::class, 'entryPath');
try { $entryValidator->invoke(null, "app/bad\x01.txt"); $denied = false; }
catch (InvalidArgumentException) { $denied = true; }
phase0_assert($denied, 'Archive path validation rejects Win32 control characters', $failures);
$tar = new PharData($root . '/safe.tar');
$tar->addFromString('app/index.html', '<h1>tar safe</h1>');
mkdir($root . '/tar-extracted', 0700);
ComponentMutationPolicy::extract($root . '/safe.tar', $root . '/tar-extracted', true);
phase0_assert(file_get_contents($root . '/tar-extracted/app/index.html') === '<h1>tar safe</h1>', 'TAR regular files pass bounded extraction', $failures);
foreach (['1' => 'hardlink', '2' => 'symlink', '3' => 'special-file'] as $type => $label) {
    $header = str_pad('app/unsafe', 100, "\0") . sprintf('%07o', 0644) . "\0" . str_repeat("0000000\0", 2)
        . "00000000000\0" . "00000000000\0" . str_repeat(' ', 8) . (string)$type . str_pad('../outside', 100, "\0")
        . "ustar\0" . '00';
    $header = str_pad($header, 512, "\0");
    $checksum = array_sum(unpack('C*', $header));
    $header = substr_replace($header, sprintf('%06o', $checksum) . "\0 ", 148, 8);
    $archive = $root . '/' . $label . '.tar';
    file_put_contents($archive, $header . str_repeat("\0", 1024));
    mkdir($root . '/' . $label, 0700);
    try { ComponentMutationPolicy::extract($archive, $root . '/' . $label, true); $denied = false; }
    catch (InvalidArgumentException) { $denied = true; }
    phase0_assert($denied, "TAR $label is rejected before extraction", $failures);
}

phase0_finish($failures);
