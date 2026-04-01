<?php
$canAdmin = !$isGuest && $perms->canManageUsers($user);
$isImpersonating = !$isGuest && $user->role !== $user->actualRole;
$navIdle = 'nav-link';
$navActive = 'nav-link nav-link-active';
$navLinks = [
    ['action' => 'showcase', 'label' => 'Showcase', 'href' => efsdb_control_plane_path('showcase'), 'visible' => !$isGuest],
    ['action' => 'home', 'label' => 'Dashboard', 'href' => efsdb_control_plane_path('home'), 'visible' => true],
    ['action' => 'environments', 'label' => 'Environments', 'href' => efsdb_control_plane_path('environments'), 'visible' => !$isGuest],
    ['action' => 'deployments', 'label' => 'Deployments', 'href' => efsdb_control_plane_path('deployments'), 'visible' => !$isGuest],
    ['action' => 'routes', 'label' => 'Routes', 'href' => efsdb_control_plane_path('routes'), 'visible' => !$isGuest],
    ['action' => 'components', 'label' => 'Components', 'href' => efsdb_control_plane_path('components'), 'visible' => !$isGuest],
    ['action' => 'domains', 'label' => 'Domains', 'href' => efsdb_control_plane_path('domains'), 'visible' => !$isGuest],
    ['action' => 'builder', 'label' => 'Builder', 'href' => efsdb_control_plane_path('builder'), 'visible' => !$isGuest],
    ['action' => 'explorer', 'label' => 'Explorer', 'href' => efsdb_control_plane_path('explorer'), 'visible' => !$isGuest],
    ['action' => 'system', 'label' => 'System', 'href' => efsdb_control_plane_path('system'), 'visible' => !$isGuest],
    ['action' => 'analyze', 'label' => 'Analyze', 'href' => efsdb_control_plane_path('analyze'), 'visible' => !$isGuest && $canAdmin],
    ['action' => 'admin', 'label' => 'Admin', 'href' => efsdb_control_plane_path('admin'), 'visible' => !$isGuest && $canAdmin],
];
?>

<nav id="efsdb-nav-shell" class="nav-shell sticky top-0 z-40 backdrop-blur-xl border-b border-[var(--shell-border)]">
    <script>
        if (window !== window.top) {
            document.write('<style>#efsdb-nav-shell { display: none !important; }</style>');
        }
    </script>
    <div class="page-shell nav-layout flex items-center justify-between py-3 sm:py-4 gap-4">
        <div class="nav-branding flex items-center gap-6 lg:gap-8">
            <div class="min-w-0 flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                <a class="brand-title flex items-center gap-2" href="<?php echo efsdb_control_plane_path('home'); ?>">
                    <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--shell-text-strong)] text-[var(--shell-panel-bg)] font-bold text-sm">
                        E
                    </div>
                    EFSDB Studio
                </a>
            </div>

            <div class="nav-links flex flex-wrap items-center gap-1 sm:gap-2">
                <?php foreach ($navLinks as $link): ?>
                    <?php if (!$link['visible']) {
                        continue;
                    } ?>
                    <?php $isActiveLink = $action === $link['action'] || str_starts_with((string)$action, $link['action'] . '/'); ?>
                    <a class="<?php echo $isActiveLink ? $navActive : $navIdle; ?>" href="<?php echo $link['href']; ?>">
                        <?php echo $link['label']; ?>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="nav-actions flex items-center gap-3">
            <?php if (!$isGuest): ?>
                <div class="nav-site-links hidden md:flex items-center gap-4 mr-2 text-[0.75rem] font-medium">
                    <a href="/staging" target="_blank" class="flex items-center gap-1.5 text-[var(--shell-muted)] hover:text-[var(--shell-text)] transition-colors" title="Open Staging Site">
                        <div class="h-2 w-2 rounded-full bg-[#eab308]"></div>
                        Staging
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                    </a>
                    <a href="/" target="_blank" class="flex items-center gap-1.5 text-[var(--shell-muted)] hover:text-[var(--shell-text)] transition-colors" title="Open Production Site">
                        <div class="h-2 w-2 rounded-full bg-[#22c55e]"></div>
                        Production
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                    </a>
                </div>
                <button id="nav-notification-trigger" type="button" class="ghost-button relative" style="padding: 0; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;" onclick="document.dispatchEvent(new CustomEvent('efsdb:notifications:toggle', { detail: { source: 'nav' } }))" title="Notifications" aria-label="Notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span id="nav-notification-bubble" class="absolute top-1 right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#ef4444] text-[8px] font-bold text-white" style="display: none;"></span>
                </button>
            <?php endif; ?>

            <button class="theme-button" style="padding: 0.4rem; border-radius: 50%;" type="button" data-theme-toggle data-theme-current="light" aria-label="Toggle color theme" title="Toggle theme">
                <svg class="theme-light w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <svg class="theme-dark w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
                <svg class="theme-green w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m2 22 1-1h3l9-9" />
                    <path d="M3 21v-3l9-9" />
                    <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" />
                </svg>
            </button>
            <?php if ($isGuest): ?>
                <a class="pill-button hidden lg:inline-flex" href="<?php echo efsdb_control_plane_path('login'); ?>">Unlock</a>
            <?php else: ?>
                <?php if ($canAdmin): ?>
                    <button id="toolbar-theme-trigger" type="button" class="ghost-button" style="padding: 0; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;" onclick="document.dispatchEvent(new CustomEvent('efsdb:theme-studio:toggle', { detail: { source: 'toolbar' } }))" title="Settings" aria-label="Settings">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </button>
                <?php endif; ?>
                <a class="ghost-button" style="padding: 0; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;" href="<?php echo efsdb_control_plane_path('logout'); ?>" title="Logout" aria-label="Logout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" x2="9" y1="12" y2="12" />
                    </svg>
                </a>
            <?php endif; ?>
        </div>
    </div>
</nav>

<?php if (!$isGuest && $canAdmin): ?>
    <script type="module" src="/js/efsdb-theme-studio.js"></script>
    <efsdb-theme-studio></efsdb-theme-studio>
<?php endif; ?>
