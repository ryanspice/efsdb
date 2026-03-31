<?php
$settings = $app->getIdentity()->getTenantSettings();
$roleCount = count($app->getIdentity()->listRoles(false));
$userCount = count($app->getIdentity()->listUsers());
$canAdmin = !$isGuest && $perms->canManageUsers($user);
?>
<section class="space-y-6">
    <section class="shell-panel p-5 sm:p-7">
        <div class="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div class="max-w-4xl">
                <div class="section-label">System Workspace</div>
                <h1 class="shell-strong mt-4 max-w-[16ch] text-3xl font-semibold sm:text-4xl">
                    Users & Settings
                </h1>
                <p class="shell-copy mt-4 max-w-3xl text-[0.94rem] leading-8">
                    Manage tenant configuration, users, and roles. All system data is backed by the encrypted filesystem, ensuring consistency and auditability.
                </p>
            </div>

            <div class="flex flex-wrap gap-3 xl:max-w-[26rem] xl:justify-end">
                <?php if ($isGuest): ?>
                    <a class="pill-button" href="<?php echo efsdb_control_plane_path('login'); ?>">Sign In</a>
                <?php elseif ($canAdmin): ?>
                    <a class="pill-button" href="<?php echo efsdb_control_plane_path('admin'); ?>">User Admin UI</a>
                    <a class="ghost-button" href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=system">System Explorer</a>
                <?php else: ?>
                    <a class="ghost-button" href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=system">System Explorer</a>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <div class="grid gap-6 xl:grid-cols-3">
        <a href="<?php echo $canAdmin ? efsdb_control_plane_path('explorer') . '?mode=natural&path=system/users' : '#'; ?>" 
           class="surface-link-card flex flex-col group h-full <?php echo !$canAdmin ? 'opacity-50 cursor-not-allowed' : ''; ?>">
            <div class="flex items-start justify-between">
                <div class="metric-label">Users</div>
                <div class="text-[var(--shell-muted)] group-hover:text-[var(--shell-text)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
            </div>
            <div class="mt-4 flex-grow">
                <div class="text-3xl font-black mb-2"><?php echo htmlspecialchars((string)$userCount); ?></div>
                <p class="text-sm text-[var(--shell-muted)]">Active accounts backed by <code>system/users/</code></p>
            </div>
        </a>

        <a href="<?php echo $canAdmin ? efsdb_control_plane_path('explorer') . '?mode=natural&path=system/roles' : '#'; ?>" 
           class="surface-link-card flex flex-col group h-full <?php echo !$canAdmin ? 'opacity-50 cursor-not-allowed' : ''; ?>">
            <div class="flex items-start justify-between">
                <div class="metric-label">Roles</div>
                <div class="text-[var(--shell-muted)] group-hover:text-[var(--shell-text)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
            </div>
            <div class="mt-4 flex-grow">
                <div class="text-3xl font-black mb-2"><?php echo htmlspecialchars((string)$roleCount); ?></div>
                <p class="text-sm text-[var(--shell-muted)]">Role definitions backed by <code>system/roles/</code></p>
            </div>
        </a>

        <a href="<?php echo $canAdmin ? efsdb_control_plane_path('explorer') . '?mode=natural&path=system/settings.json' : '#'; ?>" 
           class="surface-link-card flex flex-col group h-full <?php echo !$canAdmin ? 'opacity-50 cursor-not-allowed' : ''; ?>">
            <div class="flex items-start justify-between">
                <div class="metric-label">Settings</div>
                <div class="text-[var(--shell-muted)] group-hover:text-[var(--shell-text)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </div>
            </div>
            <div class="mt-4 flex-grow">
                <div class="text-3xl font-black mb-2">JSON</div>
                <p class="text-sm text-[var(--shell-muted)]">Global config backed by <code>system/settings.json</code></p>
            </div>
        </a>
    </div>

    <section class="grid gap-6 xl:grid-cols-2">
        <article class="table-card">
            <div class="section-label">Control plane runtime posture</div>
            <h2 class="mt-4 page-title text-[clamp(1.5rem,2.5vw,2rem)]">Runtime snapshot</h2>
            <div class="mt-5 flex flex-wrap gap-2">
                <span class="tag"><?php echo htmlspecialchars(Config::getEnv()); ?></span>
                <span class="tag"><?php echo Config::isDebugEnabled() ? 'Debug enabled' : 'Debug disabled'; ?></span>
            </div>
            <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="metric-card">
                    <div class="metric-label">PHP</div>
                    <div class="metric-value mt-2"><?php echo htmlspecialchars(PHP_VERSION); ?></div>
                    <div class="metric-copy">Core runtime version.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Libsodium</div>
                    <div class="metric-value mt-2"><?php echo extension_loaded('sodium') ? 'Active' : 'Missing'; ?></div>
                    <div class="metric-copy">Required for AEAD and key derivation.</div>
                </div>
            </div>
            <div class="mt-6 overflow-x-auto bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-[var(--shell-border)]">
                <div class="metric-label mb-2">Tenant Settings JSON</div>
                <pre class="text-xs text-[var(--shell-muted)]"><?php echo htmlspecialchars(json_encode($settings, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)); ?></pre>
            </div>
        </article>

        <article class="table-card">
            <div class="section-label">Maintenance</div>
            <h2 class="mt-4 page-title text-[clamp(1.5rem,2.5vw,2rem)]">Operator Actions</h2>
            <div class="mt-5 shell-copy">
                Use <code>php efsdb.php status</code>, <code>php efsdb.php create-user</code>, and
                <code>php efsdb.php rotate-user-key</code> from the console. Production bootstrap stays out of the
                browser entirely.
            </div>

            <div class="mt-6 grid gap-4">
                <div class="metric-card">
                    <div class="metric-label">Data root</div>
                    <div class="shell-strong mt-2 break-all text-sm font-semibold leading-7">
                        <?php echo htmlspecialchars($app->getStore()->getDataDir()); ?>
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Bootstrap secret</div>
                    <div class="metric-value text-sm mt-2"><?php echo Config::getBootstrapSecret() !== null ? 'Injected' : 'Unset'; ?></div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Account mode</div>
                    <div class="metric-value text-sm mt-2"><?php echo htmlspecialchars($user->actualRole); ?></div>
                    <div class="metric-copy">Actual identity remains auditable even when display mode changes.</div>
                </div>
            </div>
        </article>
    </section>
</section>
