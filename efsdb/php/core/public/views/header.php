<?php
$pageTitle = isset($pageTitle) && is_string($pageTitle) && $pageTitle !== ''
    ? $pageTitle
    : 'EFSDB Control Plane';
$tenantSettings = $app->getIdentity()->getTenantSettings();
$accent = $tenantSettings['settings']['accent'] ?? 'default';
$extraStylesheets = isset($extraStylesheets) && is_array($extraStylesheets) ? $extraStylesheets : [];
$shellMode = isset($shellMode) && is_string($shellMode) ? $shellMode : 'default';
$isGuestOverlayShell = $shellMode === 'guest-overlay';
$authOverlaySiteUrl = $isGuestOverlayShell && isset($authOverlaySiteUrl) && is_string($authOverlaySiteUrl) && $authOverlaySiteUrl !== ''
    ? $authOverlaySiteUrl
    : '/';
$siteChrome = isset($siteChrome) && is_array($siteChrome) ? $siteChrome : [];
$isExplorerAppPage = ($action ?? '') === 'explorer' || ($action ?? '') === 'builder';
$bodyClasses = [];
if ($isExplorerAppPage) {
    $bodyClasses[] = 'explorer-app-page';
}
if ($isGuestOverlayShell) {
    $bodyClasses[] = 'guest-overlay-page';
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></title>
    <script>
        (function() {
            var themeSetting = 'auto';
            try {
                var stored = localStorage.getItem('efsdb-theme');
                if (stored === 'light' || stored === 'dark' || stored === 'auto') {
                    themeSetting = stored;
                }
            } catch (error) {}

            var resolvedTheme = themeSetting;
            if (themeSetting === 'auto') {
                resolvedTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
            }

            document.documentElement.dataset.themeSetting = themeSetting;
            document.documentElement.dataset.theme = resolvedTheme;
            document.documentElement.style.colorScheme = resolvedTheme;
        })();
    </script>
    <link rel="stylesheet" href="/css/style.css">
    <style>
        :root {
            <?php if ($accent !== 'default'): ?>--accent: <?php echo htmlspecialchars((string)$accent, ENT_QUOTES, 'UTF-8'); ?> !important;
            <?php endif; ?>--shell-body-bg: #f8fafc;
            --shell-overlay: none;
            --shell-overlay-opacity: 0;
            --shell-text: #0f172a;
            --shell-text-strong: #020617;
            --shell-muted: #64748b;
            --shell-border: #e2e8f0;
            --shell-border-strong: #cbd5e1;
            --shell-panel-bg: #ffffff;
            --shell-panel-solid: #ffffff;
            --shell-panel-solid-subtle: #f8fafc;
            --shell-panel-solid-muted: #eef3f8;
            --shell-soft-bg: #f8fafc;
            --shell-inset-bg: #f1f5f9;
            --shell-inset-strong-bg: #e2e8f0;
            --shell-nav-bg: #ffffff;
            --shell-hover-bg: #f1f5f9;
            --shell-code-bg: #f1f5f9;
            --shell-pre-bg: #f8fafc;
            --shell-input-bg: #ffffff;
            --shell-input-placeholder: #94a3b8;
            --shell-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
            --shell-pill-text: #ffffff;
            --shell-nav-text: #475569;
            --shell-code-text: #0f172a;
            --shell-chip-bg: #f1f5f9;
            --shell-scrollbar: rgba(15, 23, 42, 0.15);
        }

        html[data-theme='dark'] {
            --shell-body-bg: #020617;
            --shell-overlay: none;
            --shell-overlay-opacity: 0;
            --shell-text: #cbd5e1;
            --shell-text-strong: #f8fafc;
            --shell-muted: #94a3b8;
            --shell-border: rgba(255, 255, 255, 0.1);
            --shell-border-strong: rgba(255, 255, 255, 0.15);
            --shell-panel-bg: rgba(15, 23, 42, 0.6);
            --shell-panel-solid: #0b1220;
            --shell-panel-solid-subtle: #111b2e;
            --shell-panel-solid-muted: #152136;
            --shell-soft-bg: rgba(30, 41, 59, 0.5);
            --shell-inset-bg: rgba(0, 0, 0, 0.2);
            --shell-inset-strong-bg: rgba(0, 0, 0, 0.3);
            --shell-nav-bg: rgba(2, 6, 23, 0.85);
            --shell-hover-bg: rgba(255, 255, 255, 0.05);
            --shell-code-bg: rgba(255, 255, 255, 0.03);
            --shell-pre-bg: rgba(0, 0, 0, 0.2);
            --shell-input-bg: rgba(15, 23, 42, 0.6);
            --shell-input-placeholder: #64748b;
            --shell-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
            --shell-pill-text: #020617;
            --shell-nav-text: #cbd5e1;
            --shell-code-text: #e2e8f0;
            --shell-chip-bg: rgba(30, 41, 59, 0.5);
            --shell-scrollbar: rgba(255, 255, 255, 0.1);
        }

        html[data-theme='green'] {
            --accent: #c6ff00;
            --shell-body-bg:
                radial-gradient(circle at top left, rgba(198, 255, 0, 0.05), transparent 28%),
                linear-gradient(180deg, rgba(198, 255, 0, 0.03), transparent 24%),
                linear-gradient(180deg, #0f170d 0%, #050804 100%);
            --shell-overlay:
                radial-gradient(circle at 15% 20%, transparent 0 130px, rgba(198, 255, 0, 0.05) 131px 132px, transparent 133px),
                radial-gradient(circle at 78% 18%, transparent 0 220px, rgba(198, 255, 0, 0.04) 221px 222px, transparent 223px),
                radial-gradient(circle at 40% 74%, transparent 0 180px, rgba(198, 255, 0, 0.03) 181px 182px, transparent 183px),
                radial-gradient(circle at 96% 96%, transparent 0 160px, rgba(198, 255, 0, 0.03) 161px 162px, transparent 163px);
            --shell-overlay-opacity: 0.7;
            --shell-text: #e7eddc;
            --shell-text-strong: #f0f5e5;
            --shell-muted: #a2b392;
            --shell-border: rgba(198, 255, 0, 0.12);
            --shell-border-strong: rgba(198, 255, 0, 0.2);
            --shell-panel-bg: rgba(12, 20, 10, 0.8);
            --shell-panel-solid: #091008;
            --shell-panel-solid-subtle: #10190d;
            --shell-panel-solid-muted: #162314;
            --shell-soft-bg: rgba(28, 39, 26, 0.6);
            --shell-inset-bg: rgba(9, 15, 8, 0.3);
            --shell-inset-strong-bg: rgba(5, 9, 5, 0.4);
            --shell-nav-bg: rgba(11, 19, 8, 0.85);
            --shell-hover-bg: rgba(255, 255, 255, 0.04);
            --shell-code-bg: rgba(255, 255, 255, 0.03);
            --shell-pre-bg: rgba(0, 0, 0, 0.25);
            --shell-input-bg: rgba(6, 10, 6, 0.4);
            --shell-input-placeholder: #73856a;
            --shell-shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
            --shell-pill-text: #0a1208;
            --shell-nav-text: #c5d0b8;
            --shell-code-text: #dbe6cc;
            --shell-chip-bg: rgba(28, 39, 26, 0.6);
            --shell-scrollbar: rgba(198, 255, 0, 0.2);
        }
    </style>
    <?php foreach ($extraStylesheets as $stylesheet): ?>
        <link rel="stylesheet" href="<?php echo htmlspecialchars((string)$stylesheet, ENT_QUOTES, 'UTF-8'); ?>">
    <?php endforeach; ?>
    <?php if ($isExplorerAppPage): ?>
        <style>
            body.explorer-app-page {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

            main.page-shell.explorer-page-shell {
                flex: 1 1 auto;
                min-height: 0;
                display: flex;
                flex-direction: column;
                padding-top: 1.5rem;
                padding-bottom: 1.5rem;
            }

            @media (min-width: 640px) {
                main.page-shell.explorer-page-shell {
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                }
            }
        </style>
    <?php endif; ?>
    <?php if ($isGuestOverlayShell): ?>
        <style>
            body.guest-overlay-page {
                min-height: 100vh;
                overflow-x: hidden;
                background: transparent;
            }

            body.guest-overlay-page::before {
                display: none;
            }

            .guest-overlay-backdrop {
                position: fixed;
                inset: 0;
                z-index: 0;
                overflow: hidden;
                background: var(--shell-body-bg);
                pointer-events: none;
            }

            .guest-overlay-frame {
                width: 100%;
                height: 100%;
                border: 0;
                pointer-events: none;
            }

            .guest-overlay-backdrop::after {
                content: "";
                position: absolute;
                inset: 0;
                background:
                    linear-gradient(180deg, rgba(248, 250, 252, 0.2) 0%, rgba(248, 250, 252, 0.36) 100%),
                    radial-gradient(circle at top center, color-mix(in srgb, var(--accent, #0f172a), transparent 92%), transparent 42%);
                backdrop-filter: blur(12px);
            }

            html[data-theme='dark'] .guest-overlay-backdrop::after {
                background:
                    linear-gradient(180deg, rgba(2, 6, 23, 0.3) 0%, rgba(2, 6, 23, 0.46) 100%),
                    radial-gradient(circle at top center, color-mix(in srgb, var(--accent, #f8fafc), transparent 92%), transparent 44%);
            }

            html[data-theme='green'] .guest-overlay-backdrop::after {
                background:
                    linear-gradient(180deg, rgba(5, 8, 4, 0.34) 0%, rgba(5, 8, 4, 0.5) 100%),
                    radial-gradient(circle at top center, color-mix(in srgb, var(--accent, #c6ff00), transparent 92%), transparent 44%);
            }

            .guest-overlay-shell {
                position: relative;
                z-index: 1;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }

            .guest-overlay-main {
                flex: 1 1 auto;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                padding-top: 1rem;
                padding-bottom: 2rem;
            }

            .guest-overlay-main > * {
                width: 100%;
            }

            body.guest-overlay-page .shell-panel {
                background: rgba(255, 255, 255, 0.98);
            }

            body.guest-overlay-page .surface-panel {
                background: color-mix(in srgb, var(--shell-inset-bg), #ffffff 42%);
            }

            html[data-theme='dark'] body.guest-overlay-page .shell-panel {
                background: rgba(2, 6, 23, 0.98);
            }

            html[data-theme='dark'] body.guest-overlay-page .surface-panel {
                background: rgba(15, 23, 42, 0.84);
            }

            html[data-theme='green'] body.guest-overlay-page .shell-panel {
                background: rgba(5, 8, 4, 0.98);
            }

            html[data-theme='green'] body.guest-overlay-page .surface-panel {
                background: rgba(9, 15, 8, 0.84);
            }

            <?php require __DIR__ . '/site_runtime_header_styles.php'; ?>

            @media (min-width: 640px) {
                .guest-overlay-main {
                    padding-top: 1.25rem;
                    padding-bottom: 2.5rem;
                }
            }

            @media (min-width: 1024px) {
                .guest-overlay-main {
                    align-items: center;
                }
            }
        </style>
    <?php endif; ?>
    <script defer src="/js/theme-manager.js"></script>
    <script src="/js/auth-interceptor.js"></script>
    <script type="module" src="/js/efsdb-notifications.js"></script>
</head>
<body<?php echo $bodyClasses !== [] ? ' class="' . htmlspecialchars(implode(' ', $bodyClasses), ENT_QUOTES, 'UTF-8') . '"' : ''; ?>>
    <efsdb-notifications></efsdb-notifications>
    <?php if ($isGuestOverlayShell): ?>
        <div class="guest-overlay-backdrop" aria-hidden="true">
            <iframe
                class="guest-overlay-frame"
                src="<?php echo htmlspecialchars($authOverlaySiteUrl, ENT_QUOTES, 'UTF-8'); ?>"
                tabindex="-1"
                aria-hidden="true"
                title=""
            ></iframe>
        </div>
        <div class="guest-overlay-shell" role="dialog" aria-modal="true" aria-labelledby="auth-overlay-title" tabindex="-1">
            <?php require __DIR__ . '/site_runtime_header.php'; ?>
            <main class="page-shell guest-overlay-main">
    <?php else: ?>
        <?php if (!isset($_GET['popup'])): ?>
            <?php require __DIR__ . '/nav.php'; ?>
        <?php endif; ?>
        <main class="page-shell<?php echo $isExplorerAppPage ? ' explorer-page-shell' : ' py-6 sm:py-8 lg:py-10'; ?>">
    <?php endif; ?>
