<?php
if (!$perms->canManageUsers($user)) {
    echo "<div class='flash-error'>Tenant-admin access is required for this view.</div>";
    return;
}

$useLegacyAdmin = isset($_GET['ui']) && $_GET['ui'] === 'legacy';

if ($useLegacyAdmin) {
    require __DIR__ . '/_admin_legacy.php';
    return;
}

$bootstrap = [
    'app' => 'admin',
    'tag' => 'efsdb-admin',
    'assetFile' => '/js/efsdb-admin.js',
    'apiBase' => '/api/admin',
    'authBase' => '/api/auth',
    'user' => $user->toApi(),
    'flags' => [
        'canManageUsers' => $perms->canManageUsers($user),
        'canManageRoles' => $perms->canManageRoles($user),
        'canManageSettings' => $perms->canManageSettings($user),
    ],
    'urls' => [
        'legacy' => '?action=admin&ui=legacy',
    ],
];
$bootstrapJson = json_encode($bootstrap, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
?>
<script type="module" src="/js/efsdb-admin.js"></script>
<script type="application/json" id="efsdb-bootstrap"><?php echo $bootstrapJson ?: '{}'; ?></script>
<efsdb-admin></efsdb-admin>
