<?php
$isGuestOverlayShell = ($shellMode ?? 'default') === 'guest-overlay';
$loginRedirectTarget = isset($loginRedirectTarget) && is_string($loginRedirectTarget) && $loginRedirectTarget !== ''
    ? $loginRedirectTarget
    : (efsdb_normalize_control_plane_target($_GET['next'] ?? null) ?? efsdb_control_plane_path('admin'));
$loginHomeTarget = isset($loginHomeTarget) && is_string($loginHomeTarget) && $loginHomeTarget !== ''
    ? $loginHomeTarget
    : efsdb_control_plane_path('home');
$overlayRequestedRoute = isset($overlayRequestedRoute) && is_string($overlayRequestedRoute) && $overlayRequestedRoute !== ''
    ? $overlayRequestedRoute
    : '/_efsdb/';
$loginFormAction = efsdb_normalize_control_plane_target($_SERVER['REQUEST_URI'] ?? null) ?? efsdb_control_plane_path('login');
$siteChromeData = isset($siteChrome) && is_array($siteChrome) ? $siteChrome : [];
$siteContextLabel = trim((string)($siteChromeData['siteLabel'] ?? 'Production website'));
$siteContextPath = trim((string)($siteChromeData['sitePathLabel'] ?? '/'));
$exitCtaLabel = trim((string)($siteChromeData['ctaLabel'] ?? 'Exit to website'));

$bootstrap = [
    'app' => 'login',
    'tag' => 'efsdb-login',
    'assetFile' => '/js/efsdb-login.js',
    'apiBase' => '/_efsdb/api/auth',
    'authBase' => '/_efsdb/api/auth',
    'urls' => [
        'redirect' => $loginRedirectTarget,
        'home' => $loginHomeTarget,
    ],
];
$bootstrapJson = json_encode($bootstrap, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
?>

<script type="module" src="/js/efsdb-login.js"></script>

<?php if ($isGuestOverlayShell): ?>
    <section class="mx-auto w-full max-w-xl">
        <article class="shell-panel p-5 sm:p-7 lg:p-8">
            <div class="section-label">Control Plane Access</div>
            <div class="mt-4 flex flex-wrap gap-2">
                <span class="tag text-[var(--accent)]"><?php echo htmlspecialchars($siteContextLabel, ENT_QUOTES, 'UTF-8'); ?></span>
                <span class="tag"><?php echo htmlspecialchars($siteContextPath, ENT_QUOTES, 'UTF-8'); ?></span>
            </div>
            <h1 id="auth-overlay-title" class="shell-strong mt-4 max-w-[11ch] text-3xl font-semibold sm:text-4xl">
                Sign in to continue.
            </h1>
            <p class="shell-copy mt-4 max-w-2xl text-[0.96rem] leading-8">
                The requested control-plane surface remains active at <code><?php echo htmlspecialchars($overlayRequestedRoute, ENT_QUOTES, 'UTF-8'); ?></code>.
                Authenticate without dropping the public website context behind it.
            </p>

            <div class="surface-panel mt-6 rounded-[26px] p-3 sm:p-4 lg:p-5">
                <script type="application/json" id="efsdb-bootstrap"><?php echo $bootstrapJson ?: '{}'; ?></script>
                <efsdb-login></efsdb-login>
            </div>

            <p class="shell-copy mt-5 text-sm leading-7">
                Successful authentication resumes <code><?php echo htmlspecialchars($overlayRequestedRoute, ENT_QUOTES, 'UTF-8'); ?></code>.
                <?php echo htmlspecialchars($exitCtaLabel, ENT_QUOTES, 'UTF-8'); ?> returns to <code><?php echo htmlspecialchars($siteContextPath, ENT_QUOTES, 'UTF-8'); ?></code>.
                Development may emit the initial tenant-admin key once in the server console. Production still requires
                injected bootstrap material or an explicit operator bootstrap step.
            </p>
        </article>
    </section>
<?php else: ?>
    <section class="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(22rem,0.98fr)]">
        <article class="shell-panel p-5 sm:p-7 lg:p-8">
            <h1 class="shell-strong max-w-[13ch] text-3xl font-semibold sm:text-4xl">
                Sign in through the shipped login surface.
            </h1>
            <p class="shell-copy mt-4 max-w-3xl text-[0.96rem] leading-8">
                The login experience is delivered by the first-class EFSDB login web component. It follows the live auth
                contract: login-key exchange, short-lived access tokens in memory, and rotating refresh cookies for silent
                session restore.
            </p>

            <div class="surface-panel mt-8 rounded-[26px] p-3 sm:p-4 lg:p-5">
                <script type="application/json" id="efsdb-bootstrap"><?php echo $bootstrapJson ?: '{}'; ?></script>
                <efsdb-login></efsdb-login>
            </div>
        </article>

        <aside class="shell-panel p-5 sm:p-7 lg:p-8">
            <div class="section-label">Bootstrap Notes</div>
            <h2 class="shell-strong mt-4 max-w-[12ch] text-2xl font-semibold sm:text-3xl">
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
<?php endif; ?>

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

            <form method="post" action="<?php echo htmlspecialchars($loginFormAction, ENT_QUOTES, 'UTF-8'); ?>" class="mt-6 max-w-xl space-y-5">
                <div class="field-stack">
                    <label for="login_key">Login key</label>
                    <input id="login_key" type="password" name="login_key" required autofocus placeholder="Paste tenant login key">
                </div>
                <div class="flex flex-wrap gap-3">
                    <button class="pill-button" type="submit">Unlock control plane</button>
                    <a class="ghost-button" href="<?php echo htmlspecialchars($loginHomeTarget, ENT_QUOTES, 'UTF-8'); ?>">
                        <?php echo $isGuestOverlayShell ? 'Exit to website' : 'Back'; ?>
                    </a>
                </div>
            </form>
        </div>
    </section>
</noscript>
