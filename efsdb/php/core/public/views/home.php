<?php
require_once __DIR__ . '/../../src/Explorer.php';
require_once __DIR__ . '/../../src/SearchService.php';

$settings = $app->getIdentity()->getTenantSettings();
$explorer = new Explorer($app->getStore(), $perms);
$search = $app->getSearchService();

$envs = ['staging', 'production'];
$areas = [
    'routes' => [
        'label' => 'Routes',
        'desc' => 'App endpoints and pages',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
        'link' => efsdb_control_plane_path('routes')
    ],
    'components' => [
        'label' => 'Components',
        'desc' => 'Reusable UI elements',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-7.162-7.162a2 2 0 0 0-2.828 0L3.838 16"/><path d="m21 21-7.162-7.162a2 2 0 0 0-2.828 0L3.838 21"/><path d="M12 3v12"/></svg>',
        'link' => efsdb_control_plane_path('components')
    ],
    'content' => [
        'label' => 'Content Blocks',
        'desc' => 'Structured JSON data',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
    ],
    'assets' => [
        'label' => 'Assets',
        'desc' => 'Images and static files',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>'
    ]
];

$stats = [];
foreach ($envs as $env) {
    $stats[$env] = [];
    foreach (array_keys($areas) as $area) {
        $stats[$env][$area] = 0;
    }
}

$routesCount = 0;
$componentsCount = 0;
$contentCount = 0;

if (!$isGuest) {
    // We can grab truthful counts from the search index facets
    $query = $search->search($user, [
        'entity' => 'public_workspace_files',
        'limit' => 0,
        'facets' => ['workspaceArea']
    ]);

    foreach ($query['facets']['workspaceArea'] ?? [] as $bucket) {
        $val = strtolower($bucket['value']);
        if (isset($areas[$val])) {
            $stats['staging'][$val] = $bucket['count'];
        }

        if ($bucket['value'] === 'Routes') $routesCount = $bucket['count'];
        if ($bucket['value'] === 'Components') $componentsCount = $bucket['count'];
        if ($bucket['value'] === 'Content') $contentCount = $bucket['count'];
    }
}

$dashboardCards = [
    [
        'label' => 'Site Builder',
        'value' => 'Active',
        'trend' => 'Visual editing surface',
        'link' => $isGuest ? efsdb_control_plane_path('login') : efsdb_control_plane_path('builder') . '?path=site/staging',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>'
    ],
    [
        'label' => 'Explorer',
        'value' => 'Raw',
        'trend' => 'Direct file access',
        'link' => $isGuest ? efsdb_control_plane_path('login') : efsdb_control_plane_path('explorer') . '?mode=natural&path=site/staging',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>'
    ],
    [
        'label' => 'Environments',
        'value' => '2',
        'trend' => 'Staging & Production',
        'link' => $isGuest ? efsdb_control_plane_path('login') : efsdb_control_plane_path('environments'),
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>'
    ],
    [
        'label' => 'Routes',
        'value' => (string)$routesCount,
        'trend' => 'Live endpoints',
        'link' => $isGuest ? efsdb_control_plane_path('login') : efsdb_control_plane_path('routes'),
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>'
    ],
    [
        'label' => 'Components',
        'value' => (string)$componentsCount,
        'trend' => 'UI building blocks',
        'link' => $isGuest ? efsdb_control_plane_path('login') : efsdb_control_plane_path('components'),
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-7.162-7.162a2 2 0 0 0-2.828 0L3.838 16"/><path d="m21 21-7.162-7.162a2 2 0 0 0-2.828 0L3.838 21"/><path d="M12 3v12"/></svg>'
    ],
    [
        'label' => 'Content Blocks',
        'value' => (string)$contentCount,
        'trend' => 'Structured JSON data',
        'link' => $isGuest ? efsdb_control_plane_path('login') : efsdb_control_plane_path('builder') . '?path=' . urlencode('site/staging/content'),
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
    ],
    [
        'label' => 'Deployments',
        'value' => 'Live',
        'trend' => 'History & Rolls',
        'link' => $isGuest ? efsdb_control_plane_path('login') : efsdb_control_plane_path('deployments'),
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>'
    ],
    [
        'label' => 'Showcase',
        'value' => 'Read-only',
        'trend' => 'Storage & security demo',
        'link' => $isGuest ? efsdb_control_plane_path('login') : efsdb_control_plane_path('showcase'),
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>'
    ]
];
?>

<section class="space-y-6">
    <section class="shell-panel p-5 sm:p-7">
        <div class="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div class="max-w-4xl">
                <div class="section-label">Workspace Overview</div>
                <h1 class="shell-strong mt-4 max-w-[16ch] text-3xl font-semibold sm:text-4xl">
                    EFSDB Studio
                </h1>
                <p class="shell-copy mt-4 max-w-3xl text-[0.94rem] leading-8">
                    Your friendly frontend to manage site resources, build components, and monitor your environments.
                    Power-users can still dive deep via the raw Explorer.
                </p>
            </div>

            <div class="flex flex-wrap gap-3 xl:max-w-[26rem] xl:justify-end">
                <?php if ($isGuest): ?>
                    <a class="pill-button" href="<?php echo efsdb_control_plane_path('login'); ?>">Sign In</a>
                <?php else: ?>
                    <a class="pill-button" href="<?php echo htmlspecialchars(PublicWorkspace::previewUrlForLogicalPath("site/production/routes/index.php") ?? '/'); ?>" target="_blank">Open Live Site</a>
                    <a class="ghost-button" href="<?php echo efsdb_control_plane_path('builder'); ?>?path=site/staging">Open Builder</a>
                    <a class="ghost-button p-2" href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=site/staging" title="Inspect in Explorer" aria-label="Inspect in Explorer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <div class="grid gap-6 xl:grid-cols-2">
        <?php foreach ($envs as $env): ?>
            <article class="table-card flex flex-col">
                <div class="flex items-center justify-between">
                    <div class="section-label"><?php echo ucfirst($env); ?> Environment</div>
                    <?php if ($env === 'production'): ?>
                        <span class="tag bg-[var(--efs-state-success,#48c78e)]/10 text-[var(--efs-state-success,#48c78e)] border-[var(--efs-state-success,#48c78e)]/30">Live</span>
                    <?php else: ?>
                        <span class="tag bg-[var(--efs-state-warning,#f0b34a)]/10 text-[var(--efs-state-warning,#f0b34a)] border-[var(--efs-state-warning,#f0b34a)]/30">Draft</span>
                    <?php endif; ?>
                </div>

                <h2 class="mt-4 page-title text-[clamp(1.4rem,2.2vw,2rem)]">
                    <?php echo ucfirst($env); ?> Content
                </h2>

                <div class="mt-6 grid gap-4 sm:grid-cols-2 flex-grow">
                    <?php foreach ($areas as $area => $info): ?>
                        <?php
                        $link = $isGuest ? efsdb_control_plane_path('login') :
                               (isset($info['link']) ? $info['link'] : efsdb_control_plane_path('builder') . "?path=" . urlencode("site/$env/$area"));
                        $explorerHref = efsdb_control_plane_path('explorer') . "?mode=natural&path=" . urlencode("site/$env/$area");
                        ?>
                        <div class="relative group h-full">
                            <a href="<?php echo $link; ?>"
                               class="surface-link-card flex flex-col h-full">
                                <div class="flex items-start justify-between">
                                    <div class="metric-label"><?php echo htmlspecialchars($info['label']); ?></div>
                                    <div class="text-[var(--shell-muted)] group-hover:text-[var(--shell-text)] transition-colors">
                                        <?php echo $info['icon']; ?>
                                    </div>
                                </div>
                                <div class="metric-heading mt-2 text-2xl">
                                    <?php echo htmlspecialchars((string)$stats[$env][$area]); ?>
                                </div>
                                <div class="metric-copy mt-auto pt-3 border-t border-[var(--shell-border)] border-opacity-50">
                                    <?php echo htmlspecialchars($info['desc']); ?>
                                </div>
                            </a>
                            <div class="absolute top-5 right-5 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <a href="<?php echo $explorerHref; ?>" class="pointer-events-auto p-2 text-[var(--shell-muted)] hover:text-[var(--shell-text)] transition-colors rounded-md hover:bg-[var(--shell-hover-bg)]" title="Inspect in Explorer" aria-label="Inspect in Explorer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <?php if (!$isGuest): ?>
                <?php
                    $liveHref = PublicWorkspace::previewUrlForLogicalPath("site/$env/routes/index.php")
                        ?? ($env === 'production' ? '/' : '/staging');
                    $explorerEnvHref = efsdb_control_plane_path('explorer') . '?mode=natural&path=' . urlencode("site/$env");
                ?>
                <div class="mt-6 flex flex-wrap gap-3 justify-end">
                    <a class="pill-button" href="<?php echo htmlspecialchars($liveHref); ?>" target="_blank" rel="noopener noreferrer" title="Browse live site">
                        Open Live Site
                    </a>
                    <a class="pill-button" href="<?php echo efsdb_control_plane_path('builder'); ?>?path=site/<?php echo urlencode($env); ?>">
                        Edit in Builder
                    </a>
                    <a class="ghost-button p-2" href="<?php echo $explorerEnvHref; ?>" title="Inspect in Explorer" aria-label="Inspect in Explorer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </a>
                </div>
                <?php endif; ?>
            </article>
        <?php endforeach; ?>
    </div>

    <section class="grid gap-6">
        <div class="section-label px-2">Quick Links</div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <?php foreach ($dashboardCards as $card): ?>
                <a href="<?php echo htmlspecialchars($card['link']); ?>" class="shell-panel flex flex-col p-6 hover:bg-[var(--shell-hover-bg)] transition-colors group">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--shell-muted)]">
                                <?php echo htmlspecialchars($card['label']); ?>
                            </p>
                            <h3 class="mt-2 text-2xl font-semibold text-[var(--shell-text-strong)]">
                                <?php echo htmlspecialchars($card['value']); ?>
                            </h3>
                        </div>
                        <div class="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--shell-inset-bg)] text-[var(--shell-text)] group-hover:scale-110 transition-transform">
                            <?php echo $card['icon']; ?>
                        </div>
                    </div>
                    <p class="mt-4 text-[0.85rem] font-medium text-[var(--accent,#2563eb)] group-hover:opacity-100 opacity-80 transition-opacity">
                        <?php echo htmlspecialchars($card['trend']); ?>
                    </p>
                </a>
            <?php endforeach; ?>
        </div>
    </section>
</section>
