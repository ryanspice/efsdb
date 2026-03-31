<?php
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$scheme = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
$baseUrl = "$scheme://$host";

$domains = [
    [
        'id' => 'production-default',
        'domain' => $host,
        'environment' => 'production',
        'type' => 'generated',
        'status' => 'active',
        'url' => $baseUrl
    ],
    [
        'id' => 'staging-default',
        'domain' => "$host/staging",
        'environment' => 'staging',
        'type' => 'generated',
        'status' => 'active',
        'url' => "$baseUrl/staging"
    ]
];

// In the future, this would fetch from a DomainsService or similar.
// For now, we only show the generated hostnames based on the current request context.

?>

<section class="space-y-6">
    <section class="shell-panel p-5 sm:p-7">
        <div class="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div class="max-w-4xl">
                <div class="section-label">Domains Workspace</div>
                <h1 class="shell-strong mt-4 max-w-[16ch] text-3xl font-semibold sm:text-4xl">
                    Hostname Routing
                </h1>
                <p class="shell-copy mt-4 max-w-3xl text-[0.94rem] leading-8">
                    Review how your environments are exposed to the web. Generated hostnames provide immediate access to your site. Custom domain mapping is planned for a future release.
                </p>
            </div>

            <div class="flex flex-wrap gap-3 xl:max-w-[26rem] xl:justify-end">
                <?php if ($isGuest): ?>
                    <a class="pill-button" href="<?php echo efsdb_control_plane_path('login'); ?>">Sign In</a>
                <?php else: ?>
                    <button class="pill-button opacity-50 cursor-not-allowed" title="Custom domains coming soon" disabled>
                        + Add Custom Domain
                    </button>
                    <a class="ghost-button" href="<?php echo efsdb_control_plane_path('home'); ?>">Dashboard</a>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <div id="domains-workspace-layout" class="workspace-layout items-start">
        <div class="space-y-6 min-w-0">
            <article class="table-card">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="page-title text-xl">Active Domains (<?php echo count($domains); ?>)</h2>
                    <div class="flex items-center gap-1 bg-[var(--shell-inset-bg)] p-1 rounded-lg border border-[var(--shell-border)]">
                        <button class="p-1.5 rounded-md text-[var(--shell-muted)] hover:text-[var(--shell-text)] hover:bg-[var(--shell-panel-bg)] transition-colors data-[active=true]:bg-[var(--shell-panel-bg)] data-[active=true]:text-[var(--shell-text)] data-[active=true]:shadow-sm" data-layout-toggle="left" data-tooltip="Sidebar Left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>
                        </button>
                        <button class="p-1.5 rounded-md text-[var(--shell-muted)] hover:text-[var(--shell-text)] hover:bg-[var(--shell-panel-bg)] transition-colors data-[active=true]:bg-[var(--shell-panel-bg)] data-[active=true]:text-[var(--shell-text)] data-[active=true]:shadow-sm" data-layout-toggle="right" data-tooltip="Sidebar Right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
                        </button>
                        <button class="p-1.5 rounded-md text-[var(--shell-muted)] hover:text-[var(--shell-text)] hover:bg-[var(--shell-panel-bg)] transition-colors data-[active=true]:bg-[var(--shell-panel-bg)] data-[active=true]:text-[var(--shell-text)] data-[active=true]:shadow-sm" data-layout-toggle="top" data-tooltip="Sidebar Top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/></svg>
                        </button>
                        <button class="p-1.5 rounded-md text-[var(--shell-muted)] hover:text-[var(--shell-text)] hover:bg-[var(--shell-panel-bg)] transition-colors data-[active=true]:bg-[var(--shell-panel-bg)] data-[active=true]:text-[var(--shell-text)] data-[active=true]:shadow-sm" data-layout-toggle="bottom" data-tooltip="Sidebar Bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/></svg>
                        </button>
                    </div>
                </div>

            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr>
                            <th class="pb-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Domain</th>
                            <th class="pb-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Environment</th>
                            <th class="pb-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Type</th>
                            <th class="pb-3 text-right text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Status</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-[var(--shell-border)] divide-opacity-50">
                        <?php foreach ($domains as $domain): ?>
                            <tr class="group hover:bg-[var(--shell-hover-bg)] transition-colors">
                                <td class="py-2.5 pr-4">
                                    <div class="flex items-center gap-3">
                                        <div class="text-[var(--shell-muted)] opacity-70">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                                        </div>
                                        <a href="<?php echo htmlspecialchars($domain['url']); ?>" target="_blank" class="text-sm font-medium text-[var(--shell-text-strong)] hover:underline flex items-center gap-2">
                                            <?php echo htmlspecialchars($domain['domain']); ?>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                        </a>
                                    </div>
                                </td>
                                <td class="py-2.5 pr-4">
                                    <?php if ($domain['environment'] === 'production'): ?>
                                        <span class="tag text-[10px] py-0.5 px-1.5 bg-[var(--efs-state-success,#48c78e)]/10 text-[var(--efs-state-success,#48c78e)] border-[var(--efs-state-success,#48c78e)]/30">Production</span>
                                    <?php else: ?>
                                        <span class="tag text-[10px] py-0.5 px-1.5 bg-[var(--efs-state-warning,#f0b34a)]/10 text-[var(--efs-state-warning,#f0b34a)] border-[var(--efs-state-warning,#f0b34a)]/30">Staging</span>
                                    <?php endif; ?>
                                </td>
                                <td class="py-2.5 pr-4">
                                    <span class="text-xs text-[var(--shell-muted)] capitalize"><?php echo htmlspecialchars($domain['type']); ?></span>
                                </td>
                                <td class="py-2.5 pl-4 text-right">
                                    <div class="flex items-center justify-end gap-2">
                                        <div class="h-1.5 w-1.5 rounded-full bg-[var(--efs-state-success,#48c78e)]"></div>
                                        <span class="text-xs font-medium text-[var(--shell-text-strong)] capitalize"><?php echo htmlspecialchars($domain['status']); ?></span>
                                    </div>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </article>

        <aside class="space-y-6">
            <div class="surface-panel bg-black/5 dark:bg-white/5 border border-[var(--shell-border)]">
                <div class="metric-label mb-2">Addressing & Routing</div>
                <p class="text-sm text-[var(--shell-muted)] leading-relaxed mb-4">
                    EFSDB provides built-in environment addressing. Your base hostname serves the <strong>Production</strong> environment by default.
                </p>
                <p class="text-sm text-[var(--shell-muted)] leading-relaxed">
                    The <strong>Staging</strong> environment is securely addressed via the <code>/staging</code> path prefix. This path-based routing guarantees that staging is always accessible without complex DNS or reverse proxy configuration.
                </p>
            </div>
            
            <div class="table-card border-dashed border-2 bg-transparent opacity-60">
                <div class="flex items-center gap-3 mb-3">
                    <div class="text-[var(--shell-muted)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>
                    <h3 class="font-medium">Custom Domains</h3>
                </div>
                <p class="text-xs text-[var(--shell-muted)] leading-relaxed mb-4">
                    Map external domains (like www.yourcompany.com) to specific EFSDB environments. SSL certificate provisioning and DNS verification will be handled here.
                </p>
                <div class="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mix-blend-plus-lighter dark:mix-blend-normal">
                    Coming Soon
                </div>
            </div>
        </aside>
    </div>
</section>
