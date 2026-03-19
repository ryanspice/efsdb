<?php
$settings = $app->getIdentity()->getTenantSettings();
$roleCount = count($app->getIdentity()->listRoles(false));
$userCount = count($app->getIdentity()->listUsers());
$roleOrder = $settings['settings']['roleOrder'] ?? ['tenant_admin', 'member_premium', 'member_standard', 'guest'];
$displayModes = !$isGuest && $user->availableDisplayModes !== [] ? $user->availableDisplayModes : $roleOrder;
$bootstrapInjected = Config::getBootstrapSecret() !== null;
$runtimeCards = [
    [
        'label' => 'Environment',
        'value' => Config::getEnv(),
        'copy' => 'Debug ' . (Config::isDebugEnabled() ? 'enabled' : 'disabled') . '.'
    ],
    [
        'label' => 'Bootstrap',
        'value' => $bootstrapInjected ? 'Injected' : 'One-time',
        'copy' => $bootstrapInjected
            ? 'Server startup uses the configured secret.'
            : 'First request can emit a tenant-admin key to the console.'
    ],
    [
        'label' => 'Master Key',
        'value' => $app->getStore()->hasMasterKey() ? 'Loaded' : 'Missing',
        'copy' => 'Stored outside the public document root for the control plane.'
    ],
    [
        'label' => 'Users',
        'value' => (string)$userCount,
        'copy' => 'Provisioned tenant identities.'
    ],
    [
        'label' => 'Roles',
        'value' => (string)$roleCount,
        'copy' => 'Seeded and custom tenant roles.'
    ],
    [
        'label' => 'Operator',
        'value' => 'CLI-only',
        'copy' => 'Recovery and production bootstrap stay outside the browser.'
    ],
];
?>

<section class="space-y-6">
    <section class="shell-panel p-5 sm:p-7">
        <div class="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div class="max-w-4xl">
                <div class="section-label">Control Center</div>
                <h1 class="shell-strong mt-4 max-w-[16ch] text-[clamp(1.85rem,3vw,2.9rem)] font-black uppercase leading-[0.98] tracking-[-0.04em]">
                    Tenant admin dashboard for bootstrap, runtime, explorer, and role controls.
                </h1>
                <p class="shell-copy mt-4 max-w-3xl text-[0.94rem] leading-8">
                    This is the browser control plane for EFSDB. It keeps runtime posture, login model, explorer
                    access, and tenant administration in one place while leaving operator-root recovery in the CLI.
                </p>
            </div>

            <div class="flex flex-wrap gap-3 xl:max-w-[26rem] xl:justify-end">
                <?php if ($isGuest): ?>
                    <a class="pill-button" href="?action=login">Unlock Control Plane</a>
                    <a class="ghost-button" href="#runtime-snapshot">Runtime Snapshot</a>
                <?php else: ?>
                    <a class="pill-button" href="?action=explorer">Open Explorer</a>
                    <a class="ghost-button" href="?action=admin">Tenant Admin</a>
                    <a class="ghost-button" href="?action=system">System Surface</a>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <section class="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <article class="table-card">
            <div class="section-label">Quick Access</div>
            <h2 class="mt-4 page-title text-[clamp(1.6rem,2.8vw,2.35rem)] max-w-[16ch]">Restore the old control-panel feel</h2>
            <div class="mt-6 grid gap-4 md:grid-cols-2">
                <a class="surface-link-card" href="<?php echo $isGuest ? '?action=login' : '?action=explorer'; ?>">
                    <div class="metric-label">Explorer</div>
                    <div class="metric-heading">
                        <?php echo $isGuest ? 'Unlock and browse secure content' : 'Browse decoded content and raw mappings'; ?>
                    </div>
                    <div class="metric-copy mt-3">Natural mode is decoded-first. Raw mode is gated by entitlements and exposes system entities for tenant admins.</div>
                </a>
                <a class="surface-link-card" href="<?php echo $isGuest ? '?action=login' : '?action=admin'; ?>">
                    <div class="metric-label">Tenant Admin</div>
                    <div class="metric-heading">
                        <?php echo $isGuest ? 'Authenticate into admin controls' : 'Manage users, roles, and display modes'; ?>
                    </div>
                    <div class="metric-copy mt-3">Create users, rotate keys, add custom roles, and switch effective display mode without losing the actual actor.</div>
                </a>
                <a class="surface-link-card" href="?action=system">
                    <div class="metric-label">System Surface</div>
                    <div class="metric-heading">Inspect runtime posture and tenant settings</div>
                    <div class="metric-copy mt-3">Review environment, bootstrap mode, manifest model, data root, and encrypted tenant settings.</div>
                </a>
                <a class="surface-link-card" href="<?php echo $isGuest ? '?action=login' : '?logout=1'; ?>">
                    <div class="metric-label"><?php echo $isGuest ? 'Login Surface' : 'Session'; ?></div>
                    <div class="metric-heading">
                        <?php echo $isGuest ? 'Use the shipped login web component' : 'Logout or change effective mode'; ?>
                    </div>
                    <div class="metric-copy mt-3">
                        <?php if ($isGuest): ?>
                            Login keys exchange for short-lived bearer tokens in memory plus rotating refresh cookies for silent restore.
                        <?php else: ?>
                            Signed in as <?php echo htmlspecialchars($user->username); ?> with actual role <?php echo htmlspecialchars($user->actualRole); ?> and effective mode <?php echo htmlspecialchars($user->role); ?>.
                        <?php endif; ?>
                    </div>
                </a>
            </div>

            <div class="surface-panel mt-6">
                <div class="metric-label">Display modes</div>
                <div class="mt-3 flex flex-wrap gap-2">
                    <?php foreach ($displayModes as $mode): ?>
                        <span class="tag"><?php echo htmlspecialchars((string)$mode); ?></span>
                    <?php endforeach; ?>
                </div>
                <p class="shell-copy mt-4 text-sm leading-7">
                    <?php if ($isGuest): ?>
                        Guests can review runtime posture here before moving into the shipped login flow. Tenant admins
                        can then inspect the system as guest, standard, premium, or tenant-admin while audit preserves
                        the underlying actor.
                    <?php else: ?>
                        The browser control plane uses bearer access tokens for API calls and a rotating refresh cookie
                        for silent session restore across the shipped web components and PHP shell views.
                    <?php endif; ?>
                </p>
            </div>
        </article>

        <aside class="table-card">
            <div class="section-label">Bootstrap And Auth</div>
            <h2 class="mt-4 page-title text-[clamp(1.6rem,2.8vw,2.35rem)] max-w-[14ch]">Login, bootstrap, and operator boundary</h2>
            <div class="shell-copy mt-5 space-y-4 text-sm leading-7">
                <p>
                    Bootstrap happens on the first HTTP request, not when <code>php -S</code> or <code>bun run dev</code> starts.
                    Development can emit a one-time tenant-admin key when the data directory is first initialized.
                    Production fails closed without injected bootstrap material.
                </p>
                <p>
                    Operator-root remains console only. The browser never provisions or recovers operator authority.
                    Tenant admin is the highest web role and is responsible for user, role, and tenant-setting control.
                </p>
                <p>
                    The shipped <code>efsdb-login</code> and <code>efsdb-explorer</code> components now share the same
                    session flow as the PHP shell instead of racing separate refresh requests.
                </p>
            </div>

            <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="metric-card">
                    <div class="metric-label">CLI</div>
                    <div class="metric-value"><code>efsdb.php</code></div>
                    <div class="metric-copy">Use <code>tenant-admin-key</code>, <code>create-user</code>, and <code>list-roles</code> for recovery and provisioning.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Session model</div>
                    <div class="metric-value">Shared</div>
                    <div class="metric-copy">PHP views and shipped web components coordinate through one refresh path.</div>
                </div>
            </div>
        </aside>
    </section>

    <section class="table-card" id="runtime-snapshot">
        <div class="section-label">Runtime Snapshot</div>
        <h2 class="mt-4 page-title text-[clamp(1.6rem,2.8vw,2.35rem)] max-w-[14ch]">Current control-plane state</h2>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <?php foreach ($runtimeCards as $card): ?>
                <div class="metric-card">
                    <div class="metric-label"><?php echo htmlspecialchars($card['label']); ?></div>
                    <div class="metric-value"><?php echo htmlspecialchars($card['value']); ?></div>
                    <div class="metric-copy"><?php echo htmlspecialchars($card['copy']); ?></div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="mt-6 grid gap-4 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
            <div class="surface-panel">
                <div class="metric-label">Tenant settings</div>
                <pre class="surface-pre"><?php echo htmlspecialchars(json_encode($settings, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)); ?></pre>
            </div>
            <div class="space-y-4">
                <div class="metric-card">
                    <div class="metric-label">Data root</div>
                    <div class="shell-strong mt-4 break-all text-sm font-semibold leading-7">
                        <?php echo htmlspecialchars($app->getStore()->getDataDir()); ?>
                    </div>
                    <div class="metric-copy">Encrypted manifests, chunks, and secure lookups for the control plane.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Manifest model</div>
                    <div class="metric-value">Canonical</div>
                    <div class="metric-copy">Documents and files share one manifest contract, with decoded delivery and raw inspection layered on top.</div>
                </div>
            </div>
        </div>
    </section>
</section>
