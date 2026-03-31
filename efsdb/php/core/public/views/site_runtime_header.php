<?php
$siteChrome = isset($siteChrome) && is_array($siteChrome) ? $siteChrome : [];
$siteChromeVariant = (string)($siteChrome['variant'] ?? 'full');
$isCompactSiteChrome = $siteChromeVariant === 'compact';
$runtimeLabel = trim((string)($siteChrome['runtimeLabel'] ?? 'EFSDB Website'));
$siteLabel = trim((string)($siteChrome['siteLabel'] ?? 'Production website'));
$sitePathLabel = trim((string)($siteChrome['sitePathLabel'] ?? '/'));
$routeLabel = trim((string)($siteChrome['routeLabel'] ?? ''));
$ctaLabel = trim((string)($siteChrome['ctaLabel'] ?? 'Open Control Plane'));
$ctaHref = efsdb_sanitize_internal_target($siteChrome['ctaHref'] ?? null) ?? '/_efsdb/';
?>

<div class="site-runtime-bar<?php echo $isCompactSiteChrome ? ' site-runtime-bar-compact' : ''; ?>">
    <div class="site-runtime-bar__meta">
        <span class="site-runtime-bar__eyebrow"><?php echo htmlspecialchars($runtimeLabel, ENT_QUOTES, 'UTF-8'); ?></span>
        <div class="site-runtime-bar__headline">
            <span><?php echo htmlspecialchars($siteLabel, ENT_QUOTES, 'UTF-8'); ?></span>
            <code><?php echo htmlspecialchars($sitePathLabel, ENT_QUOTES, 'UTF-8'); ?></code>
        </div>
        <?php if ($routeLabel !== ''): ?>
            <div class="site-runtime-bar__sub">
                Requested route <?php echo htmlspecialchars($routeLabel, ENT_QUOTES, 'UTF-8'); ?>
            </div>
        <?php endif; ?>
    </div>
    <div class="site-runtime-bar__actions">
        <a class="ghost-button site-runtime-bar__action" href="<?php echo htmlspecialchars($ctaHref, ENT_QUOTES, 'UTF-8'); ?>">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
                <path d="M21 12H9" />
            </svg>
            <span><?php echo htmlspecialchars($ctaLabel, ENT_QUOTES, 'UTF-8'); ?></span>
        </a>
    </div>
</div>
