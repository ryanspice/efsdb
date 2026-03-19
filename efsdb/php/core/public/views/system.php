<?php
$settings = $app->getIdentity()->getTenantSettings();
$roleCount = count($app->getIdentity()->listRoles(false));
$userCount = count($app->getIdentity()->listUsers());
?>
<section class="space-y-6">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl">
            <div class="section-label">System Surface</div>
            <h1 class="mt-4 page-title max-w-[14ch]">Control plane runtime posture</h1>
        </div>
        <p class="shell-copy max-w-3xl text-sm leading-7">
            Monitor the bootstrap model, active role inventory, and storage safety defaults. Operator recovery stays in
            the CLI; tenant admins get visibility into the current encrypted tenant configuration.
        </p>
    </div>

    <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div class="metric-card">
            <div class="metric-label">PHP</div>
            <div class="metric-value"><?php echo htmlspecialchars(PHP_VERSION); ?></div>
            <div class="metric-copy">Core control plane runtime version.</div>
        </div>
        <div class="metric-card">
            <div class="metric-label">Libsodium</div>
            <div class="metric-value"><?php echo extension_loaded('sodium') ? 'Active' : 'Missing'; ?></div>
            <div class="metric-copy">Required for AEAD and key derivation.</div>
        </div>
        <div class="metric-card">
            <div class="metric-label">Manifest model</div>
            <div class="metric-value">Canonical</div>
            <div class="metric-copy">Documents and files now share one manifest contract.</div>
        </div>
    </section>

    <section class="grid gap-6 xl:grid-cols-2">
        <article class="table-card">
            <div class="section-label">Tenant Settings</div>
            <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Config snapshot</h2>
            <div class="mt-5 flex flex-wrap gap-2">
                <span class="tag"><?php echo htmlspecialchars(Config::getEnv()); ?></span>
                <span class="tag"><?php echo Config::isDebugEnabled() ? 'Debug enabled' : 'Debug disabled'; ?></span>
                <span class="tag"><?php echo htmlspecialchars((string)$userCount); ?> users</span>
                <span class="tag"><?php echo htmlspecialchars((string)$roleCount); ?> roles</span>
            </div>
            <div class="mt-6">
                <pre><?php echo htmlspecialchars(json_encode($settings, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)); ?></pre>
            </div>
        </article>

        <article class="table-card">
            <div class="section-label">Maintenance</div>
            <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)] max-w-[12ch]">Operator-only actions stay in CLI.</h2>
            <div class="mt-5 shell-copy">
                Use <code>php efsdb.php status</code>, <code>php efsdb.php create-user</code>, and
                <code>php efsdb.php rotate-user-key</code> from the console. Production bootstrap stays out of the
                browser entirely.
            </div>

            <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div class="metric-card">
                    <div class="metric-label">Data root</div>
                    <div class="shell-strong mt-4 break-all text-base font-semibold leading-7">
                        <?php echo htmlspecialchars($app->getStore()->getDataDir()); ?>
                    </div>
                    <div class="metric-copy">Core store directory for encrypted manifests and chunks.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Bootstrap secret</div>
                    <div class="metric-value"><?php echo Config::getBootstrapSecret() !== null ? 'Injected' : 'Unset'; ?></div>
                    <div class="metric-copy">Unset production bootstrap blocks startup by design.</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Account mode</div>
                    <div class="metric-value"><?php echo htmlspecialchars($user->actualRole); ?></div>
                    <div class="metric-copy">Actual identity remains auditable even when display mode changes.</div>
                </div>
            </div>
        </article>
    </section>
</section>
