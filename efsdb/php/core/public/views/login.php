<script type="module" src="/js/efsdb-login.js"></script>

<section class="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(22rem,0.98fr)]">
    <article class="shell-panel p-5 sm:p-7 lg:p-8">
        <div class="section-label">Tenant Admin Access</div>
        <h1 class="shell-strong mt-4 max-w-[13ch] text-[clamp(1.95rem,3.8vw,3.45rem)] font-black uppercase leading-[0.97] tracking-[-0.045em]">
            Sign in through the shipped login surface.
        </h1>
        <p class="shell-copy mt-4 max-w-3xl text-[0.96rem] leading-8">
            The login experience is delivered by the first-class EFSDB login web component. It follows the live auth
            contract: login-key exchange, short-lived access tokens in memory, and rotating refresh cookies for silent
            session restore.
        </p>

        <div class="surface-panel mt-8 rounded-[26px] p-3 sm:p-4 lg:p-5">
            <efsdb-login api-base="/api/auth" redirect-url="?action=admin" home-url="?"></efsdb-login>
        </div>
    </article>

    <aside class="shell-panel p-5 sm:p-7 lg:p-8">
        <div class="section-label">Bootstrap Notes</div>
        <h2 class="shell-strong mt-4 max-w-[12ch] text-[clamp(1.7rem,3vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.045em]">
            Operator root stays console-only.
        </h2>
        <p class="shell-copy mt-4 text-[0.96rem] leading-8">
            Bootstrap happens on the first HTTP request, not when <code>php -S</code> starts. Development emits the
            one-time tenant-admin key once when the data directory is initialized. Production requires an injected
            bootstrap secret or an explicit operator CLI step before the web app will serve admin access.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div class="metric-card">
                <div class="metric-label">Environment</div>
                <div class="metric-value"><?php echo htmlspecialchars(Config::getEnv()); ?></div>
                <div class="metric-copy">Production fails closed without bootstrap material.</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Debug bootstrap</div>
                <div class="metric-value"><?php echo Config::isDebugEnabled() ? 'On' : 'Off'; ?></div>
                <div class="metric-copy">First request logs the one-time tenant-admin key during initial bootstrap.</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">CLI</div>
                <div class="metric-value"><code>efsdb.php</code></div>
                <div class="metric-copy">Use <code>tenant-admin-key</code>, <code>create-user</code>, and <code>list-roles</code> for recovery.</div>
            </div>
        </div>
    </aside>
</section>

<noscript>
    <section class="mt-6">
        <div class="shell-panel p-5 sm:p-7">
            <div class="section-label">No JavaScript</div>
            <h2 class="mt-4 page-title max-w-[12ch]">Fallback login form</h2>
            <p class="mt-4 shell-copy max-w-3xl">
                The primary experience ships as a web component. This fallback form is only for non-JavaScript
                environments.
            </p>

            <?php if (isset($loginError)): ?>
                <div class="flash-error mt-5"><?php echo htmlspecialchars($loginError); ?></div>
            <?php endif; ?>

            <form method="post" class="mt-6 max-w-xl space-y-5">
                <div class="field-stack">
                    <label for="login_key">Login key</label>
                    <input id="login_key" type="password" name="login_key" required autofocus placeholder="Paste tenant login key">
                </div>
                <div class="flex flex-wrap gap-3">
                    <button class="pill-button" type="submit">Unlock control plane</button>
                    <a class="ghost-button" href="?action=home">Back</a>
                </div>
            </form>
        </div>
    </section>
</noscript>
