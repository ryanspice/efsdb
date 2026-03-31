<?php
$envOps = $app->getEnvironmentOperations();

$stagingHistory = $envOps->history('staging', 5);
$productionHistory = $envOps->history('production', 5);

$stagingHead = $stagingHistory['head'] ?? [];
$productionHead = $productionHistory['head'] ?? [];

$formatDate = function($dateStr) {
    if (empty($dateStr)) return 'Never';
    $time = strtotime($dateStr);
    return $time ? date('M j, Y g:i A', $time) : 'Unknown';
};

$canPromote = !$isGuest && $perms->canManageEnvironmentActions($user);
?>

<section class="space-y-6">
    <section class="shell-panel p-5 sm:p-7">
        <div class="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div class="max-w-4xl">
                <div class="section-label">Environments</div>
                <h1 class="shell-strong mt-4 max-w-[16ch] text-3xl font-semibold sm:text-4xl">
                    Manage Deployments
                </h1>
                <p class="shell-copy mt-4 max-w-3xl text-[0.94rem] leading-8">
                    Review the state of your Staging and Production environments. Promote approved changes from Staging to Production, or sync Production data back to Staging for accurate testing.
                </p>
            </div>
            <div class="flex flex-wrap gap-3 xl:max-w-[26rem] xl:justify-end">
                <?php if ($isGuest): ?>
                    <a class="pill-button" href="<?php echo efsdb_control_plane_path('login'); ?>">Sign In</a>
                <?php else: ?>
                    <a class="ghost-button" href="<?php echo efsdb_control_plane_path('home'); ?>">Dashboard</a>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <div id="environments-workspace-layout" class="workspace-layout items-start">
        <div class="space-y-6 min-w-0">
            <!-- Staging Environment -->
            <article class="table-card flex flex-col relative overflow-hidden border-amber-500/20">
                <div class="absolute top-0 left-0 w-full h-1 bg-amber-400/50"></div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7-3 5 3 5"/><path d="m19 7 3 5-3 5"/></svg>
                        </div>
                        <div>
                            <h2 class="page-title text-2xl">Staging</h2>
                            <div class="text-[0.8rem] text-[var(--shell-muted)] uppercase tracking-wider">Draft & Testing</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="tag bg-[var(--efs-state-warning,#f0b34a)]/10 text-[var(--efs-state-warning,#f0b34a)] border-[var(--efs-state-warning,#f0b34a)]/30">Draft</span>
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
                </div>

                <div class="mt-8 space-y-6 flex-grow">
                    <div class="surface-panel bg-black/5 dark:bg-white/5 border border-[var(--shell-border)]">
                        <div class="metric-label mb-3">Current State</div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <div class="text-[0.7rem] text-[var(--shell-muted)] uppercase mb-1">Last Updated</div>
                                <div class="text-sm font-medium"><?php echo $formatDate($stagingHead['updatedAt'] ?? null); ?></div>
                            </div>
                            <div>
                                <div class="text-[0.7rem] text-[var(--shell-muted)] uppercase mb-1">Last Operation</div>
                                <div class="text-sm font-medium capitalize"><?php echo htmlspecialchars($stagingHead['lastOperation'] ?? 'None'); ?></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 flex flex-col sm:flex-row gap-3">
                    <?php if ($canPromote): ?>
                        <button class="pill-button w-full sm:w-auto justify-center bg-[var(--efs-state-success,#48c78e)] text-white border-0 hover:opacity-90" onclick="handleEnvironmentAction('promote', 'Promote Staging to Production')">
                            Deploy to Production
                        </button>
                    <?php endif; ?>
                    <a class="pill-button w-full sm:w-auto justify-center" href="<?php echo htmlspecialchars(PublicWorkspace::previewUrlForLogicalPath("site/staging/routes/index.php") ?? '/staging'); ?>" target="_blank">
                        Open Live Site
                    </a>
                    <a class="pill-button w-full sm:w-auto justify-center bg-[var(--shell-inset-bg)] text-[var(--shell-text)] hover:bg-[var(--shell-hover-bg)]" href="<?php echo efsdb_control_plane_path('builder'); ?>?path=site/staging">
                        Edit in Builder
                    </a>
                    <a class="ghost-button p-2" href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=site/staging" title="Inspect in Explorer" aria-label="Inspect in Explorer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </a>
                </div>
            </article>

            <!-- Production Environment -->
            <article class="table-card flex flex-col relative overflow-hidden border-emerald-500/20">
                <div class="absolute top-0 left-0 w-full h-1 bg-emerald-500/50"></div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                        <div>
                            <h2 class="page-title text-2xl">Production</h2>
                            <div class="text-[0.8rem] text-[var(--shell-muted)] uppercase tracking-wider">Live & Public</div>
                        </div>
                    </div>
                    <span class="tag bg-[var(--efs-state-success,#48c78e)]/10 text-[var(--efs-state-success,#48c78e)] border-[var(--efs-state-success,#48c78e)]/30">Live</span>
                </div>

                <div class="mt-8 space-y-6 flex-grow">
                    <div class="surface-panel bg-black/5 dark:bg-white/5 border border-[var(--shell-border)]">
                        <div class="metric-label mb-3">Current State</div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <div class="text-[0.7rem] text-[var(--shell-muted)] uppercase mb-1">Last Updated</div>
                                <div class="text-sm font-medium"><?php echo $formatDate($productionHead['updatedAt'] ?? null); ?></div>
                            </div>
                            <div>
                                <div class="text-[0.7rem] text-[var(--shell-muted)] uppercase mb-1">Last Operation</div>
                                <div class="text-sm font-medium capitalize"><?php echo htmlspecialchars($productionHead['lastOperation'] ?? 'None'); ?></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                    <a class="pill-button w-full sm:w-auto justify-center bg-emerald-600 hover:bg-emerald-500 text-white border-0" href="<?php echo htmlspecialchars(PublicWorkspace::previewUrlForLogicalPath("site/production/routes/index.php") ?? '/'); ?>" target="_blank">
                        Open Live Site
                    </a>
                    <a class="pill-button w-full sm:w-auto justify-center bg-[var(--shell-inset-bg)] text-[var(--shell-text)] hover:bg-[var(--shell-hover-bg)]" href="<?php echo efsdb_control_plane_path('builder'); ?>?path=site/production">
                        Edit in Builder
                    </a>
                    <a class="ghost-button p-2" href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=site/production" title="Inspect in Explorer" aria-label="Inspect in Explorer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </a>
                    <?php if ($canPromote && !empty($productionHead['previousSnapshotId'])): ?>
                        <button class="ghost-button w-full sm:w-auto justify-center text-red-500 hover:bg-red-500/10 border-red-500/20" onclick="handleEnvironmentAction('rollback', 'Rollback Production')">
                            Rollback
                        </button>
                    <?php endif; ?>
                    <?php if ($canPromote): ?>
                        <button class="ghost-button w-full sm:w-auto justify-center text-purple-500 hover:bg-purple-500/10 border-purple-500/20" onclick="handleEnvironmentAction('sync', 'Sync Production to Staging')">
                            Sync to Staging
                        </button>
                    <?php endif; ?>
                </div>
            </article>
        </div>

        <aside class="space-y-6">
            <div class="surface-panel bg-black/5 dark:bg-white/5 border border-[var(--shell-border)]">
                <div class="metric-label mb-2">Environment Architecture</div>
                <p class="text-sm text-[var(--shell-muted)] leading-relaxed mb-4">
                    Staging isolates draft changes from your live audience. Once validated, promote changes atomically to Production.
                </p>
                <div class="space-y-2 mt-4 pt-4 border-t border-[var(--shell-border)] border-opacity-50">
                    <a href="<?php echo efsdb_control_plane_path('deployments'); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                        View Deployment History <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                    <a href="<?php echo efsdb_control_plane_path('routes'); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                        Manage Routes <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                </div>
            </div>

            <div class="table-card">
                <div class="metric-label mb-3">Recent Staging Activity</div>
                <div class="space-y-2">
                    <?php if (empty($stagingHistory['snapshots'])): ?>
                        <div class="text-sm text-[var(--shell-muted)] italic">No snapshots available.</div>
                    <?php else: ?>
                        <?php foreach (array_slice($stagingHistory['snapshots'], 0, 5) as $snap): ?>
                            <div class="flex items-center justify-between text-sm py-2 border-b border-[var(--shell-border)] border-opacity-30 last:border-0">
                                <div class="flex flex-col">
                                    <span class="text-[0.8rem] font-medium capitalize"><?php echo htmlspecialchars($snap['operation'] ?? 'snapshot'); ?></span>
                                    <span class="text-[0.65rem] text-[var(--shell-muted)]"><?php echo $formatDate($snap['createdAt'] ?? null); ?></span>
                                </div>
                                <div class="text-right text-xs">
                                    <?php if (!empty($snap['reason'])): ?>
                                        <span class="text-[0.7rem] text-[var(--shell-muted)] block"><?php echo htmlspecialchars($snap['reason']); ?></span>
                                    <?php endif; ?>
                                    <div class="font-mono text-[9px] text-[var(--shell-muted)] opacity-70"><?php echo substr($snap['snapshotId'] ?? '', 0, 8); ?></div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>

            <div class="table-card">
                <div class="metric-label mb-3">Recent Production Activity</div>
                <div class="space-y-2">
                    <?php if (empty($productionHistory['snapshots'])): ?>
                        <div class="text-sm text-[var(--shell-muted)] italic">No snapshots available.</div>
                    <?php else: ?>
                        <?php foreach (array_slice($productionHistory['snapshots'], 0, 5) as $snap): ?>
                            <div class="flex items-center justify-between text-sm py-2 border-b border-[var(--shell-border)] border-opacity-30 last:border-0">
                                <div class="flex flex-col">
                                    <span class="text-[0.8rem] font-medium capitalize"><?php echo htmlspecialchars($snap['operation'] ?? 'snapshot'); ?></span>
                                    <span class="text-[0.65rem] text-[var(--shell-muted)]"><?php echo $formatDate($snap['createdAt'] ?? null); ?></span>
                                </div>
                                <div class="text-right text-xs">
                                    <?php if (!empty($snap['reason'])): ?>
                                        <span class="text-[0.7rem] text-[var(--shell-muted)] block"><?php echo htmlspecialchars($snap['reason']); ?></span>
                                    <?php endif; ?>
                                    <div class="font-mono text-[9px] text-[var(--shell-muted)] opacity-70"><?php echo substr($snap['snapshotId'] ?? '', 0, 8); ?></div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
        </aside>
    </div>
</section>

<?php if ($canPromote): ?>
<script>

async function handleEnvironmentAction(action, label) {
    let confirmMsg = '';
    let endpoint = '';
    let payload = { reason: 'Manual action from Environments dashboard' };

    if (action === 'promote') {
        confirmMsg = 'Deploy Staging to Production? This will overwrite the live site with your latest staging changes.';
        endpoint = '/_efsdb/api/admin/public-workspace/promote';
    } else if (action === 'rollback') {
        confirmMsg = 'Rollback Production? This will revert the live site to its previous stable snapshot.';
        endpoint = '/_efsdb/api/admin/public-workspace/rollback';
        payload.root = 'production';
    } else if (action === 'sync') {
        confirmMsg = 'Sync Production to Staging? This will overwrite your current staging environment with the live site data.';
        endpoint = '/_efsdb/api/admin/public-workspace/copy';
        payload.sourceRoot = 'production';
        payload.targetRoot = 'staging';
    }

    if (!confirm(confirmMsg)) {
        return;
    }

    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err?.error?.message || `HTTP ${res.status}`);
        }

        alert(`${label} completed successfully.`);
        window.location.reload();
    } catch (err) {
        alert(`Failed to ${label.toLowerCase()}: ${err.message}`);
    }
}
</script>
<?php endif; ?>
