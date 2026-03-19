<?php
$canAdmin = !$isGuest && $perms->canManageUsers($user);
$roleLabel = $user->role === $user->actualRole ? $user->role : $user->actualRole . ' -> ' . $user->role;
$settings = $app->getIdentity()->getTenantSettings();
$accent = $settings['settings']['accent'] ?? '#c6ff00';
$navIdle = 'nav-link';
$navActive = 'nav-link nav-link-active';
?>
<style>:root{--accent: <?php echo htmlspecialchars((string)$accent); ?>;}</style>

<nav class="nav-shell sticky top-0 z-40 backdrop-blur-xl">
    <div class="page-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex items-center justify-between gap-4">
            <div class="min-w-0">
                <div class="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">Encrypted Filesystem</div>
                <a class="brand-title mt-1 inline-block text-[1.75rem] font-black uppercase leading-none tracking-[0.02em] sm:text-[2.1rem]" href="?action=home">
                    EFSDB Control
                </a>
            </div>
            <?php if ($isGuest): ?>
                <a class="pill-button lg:hidden" href="?action=login">Unlock</a>
            <?php endif; ?>
        </div>

        <div class="flex flex-wrap items-center gap-2 sm:gap-3">
            <a class="<?php echo $action === 'home' ? $navActive : $navIdle; ?>" href="?action=home">Home</a>
            <?php if (!$isGuest): ?>
                <a class="<?php echo $action === 'explorer' ? $navActive : $navIdle; ?>" href="?action=explorer">Explorer</a>
                <a class="<?php echo $action === 'system' ? $navActive : $navIdle; ?>" href="?action=system">System</a>
                <?php if ($canAdmin): ?>
                    <a class="<?php echo $action === 'admin' ? $navActive : $navIdle; ?>" href="?action=admin">Admin</a>
                <?php endif; ?>
            <?php endif; ?>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
            <button class="theme-button" type="button" data-theme-toggle data-theme-current="dark" aria-label="Toggle color theme">
                <span>Theme</span>
                <span class="theme-dark">Dark</span>
                <span>/</span>
                <span class="theme-light">Light</span>
            </button>
            <?php if ($isGuest): ?>
                <a class="pill-button hidden lg:inline-flex" href="?action=login">Unlock</a>
            <?php else: ?>
                <div class="user-chip">
                    <div class="flex flex-col">
                        <strong class="shell-strong text-sm font-semibold"><?php echo htmlspecialchars($user->username); ?></strong>
                        <span class="text-[0.68rem] uppercase tracking-[0.18em]" style="color: var(--shell-muted);">
                            <?php echo htmlspecialchars(str_replace('_', ' ', $roleLabel)); ?>
                        </span>
                    </div>
                </div>
                <a class="ghost-button" href="?logout=1">Logout</a>
            <?php endif; ?>
        </div>
    </div>
</nav>
