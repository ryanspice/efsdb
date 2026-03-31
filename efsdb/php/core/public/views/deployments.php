<?php
require_once __DIR__ . '/../../src/EnvironmentOperationsService.php';

$envOps = clone $app->getEnvironmentOperations();
$productionHistory = $envOps->history('production', 5);
$stagingHistory = $envOps->history('staging', 5);

function render_snapshot_row(array $snapshot, bool $isActive, string $env): string {
    $date = date('M j, Y H:i', strtotime($snapshot['createdAt']));
    $operation = htmlspecialchars($snapshot['operation'] ?? 'unknown');
    $reason = htmlspecialchars($snapshot['reason'] ?? 'No reason provided');
    $id = substr(htmlspecialchars($snapshot['snapshotId']), 0, 8);
    
    $opColor = match($operation) {
        'promote' => 'text-[var(--efs-state-success,#48c78e)]',
        'rollback' => 'text-[var(--efs-state-warning,#f0b34a)]',
        'copy' => 'text-[var(--efs-state-info,#6db7ff)]',
        'restore' => 'text-purple-500',
        'snapshot' => 'text-[var(--shell-text)]',
        'seed' => 'text-[var(--shell-muted)]',
        default => 'text-[var(--shell-text)]'
    };

    $activeBadge = $isActive 
        ? '<span class="ml-2 inline-flex items-center rounded bg-[var(--efs-state-success,#48c78e)]/10 px-2 py-0.5 text-[0.65rem] font-medium text-[var(--efs-state-success,#48c78e)]">Active Head</span>' 
        : '';

    return <<<HTML
    <tr class="group hover:bg-[var(--shell-hover-bg)] transition-colors">
        <td class="py-1.5 pr-4">
            <div class="flex items-center gap-3">
                <div class="text-[var(--shell-muted)] opacity-70 hidden sm:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <span class="font-mono text-xs font-medium text-[var(--shell-text-strong)]">{$id}</span>
                        {$activeBadge}
                    </div>
                    <div class="text-[0.65rem] text-[var(--shell-muted)] mt-0.5">{$date}</div>
                </div>
            </div>
        </td>
        <td class="py-1.5 pr-4">
            <div class="flex items-center gap-2">
                <span class="text-[0.65rem] font-semibold uppercase tracking-wider {$opColor}">{$operation}</span>
            </div>
        </td>
        <td class="py-1.5 pr-4">
            <span class="text-[0.75rem] text-[var(--shell-muted)]">{$reason}</span>
        </td>
        <td class="py-1.5 pl-4 text-right">
            <div class="flex items-center justify-end gap-3">
                <span class="text-[0.75rem] font-mono text-[var(--shell-muted)]">{$snapshot['fileCount']} files</span>
            </div>
        </td>
    </tr>
HTML;
}

?>

<section class="space-y-6">
    <section class="shell-panel p-5 sm:p-7">
        <div class="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div class="max-w-4xl">
                <div class="section-label">Deployments Workspace</div>
                <h1 class="shell-strong mt-4 max-w-[16ch] text-3xl font-semibold sm:text-4xl">
                    Release History
                </h1>
                <p class="shell-copy mt-4 max-w-3xl text-[0.94rem] leading-8">
                    Review environment changes, promotions, and snapshot history. This provides an audit trail of 
                    how your staging and production environments have evolved over time. EFSDB uses an immutable 
                    snapshot architecture for instant rollbacks.
                </p>
            </div>

            <div class="flex flex-wrap gap-3 xl:max-w-[26rem] xl:justify-end">
                <?php if ($isGuest): ?>
                    <a class="pill-button" href="<?php echo efsdb_control_plane_path('login'); ?>">Sign In</a>
                <?php else: ?>
                    <a class="pill-button" href="<?php echo efsdb_control_plane_path('environments'); ?>">Manage Environments</a>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <div id="deployments-workspace-layout" class="workspace-layout items-start">
        <div class="space-y-6 min-w-0">
            <article class="table-card">
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-3">
                        <h2 class="page-title text-xl">Production</h2>
                        <span class="tag bg-[var(--efs-state-success,#48c78e)]/10 text-[var(--efs-state-success,#48c78e)] border-[var(--efs-state-success,#48c78e)]/30">Live</span>
                    </div>
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
                                <th class="pb-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Snapshot</th>
                                <th class="pb-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Operation</th>
                                <th class="pb-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Reason</th>
                                <th class="pb-3 text-right text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Stats</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-[var(--shell-border)] divide-opacity-50">
                            <?php 
                            $prodActive = $productionHistory['head']['activeSnapshotId'] ?? '';
                            foreach ($productionHistory['snapshots'] as $snap) {
                                echo render_snapshot_row($snap, $snap['snapshotId'] === $prodActive, 'production');
                            }
                            if (empty($productionHistory['snapshots'])): ?>
                                <tr>
                                    <td colspan="4" class="py-8 text-center text-[var(--shell-muted)] text-sm">No history available</td>
                                </tr>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>
            </article>

            <article class="table-card">
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-3">
                        <h2 class="page-title text-xl">Staging</h2>
                        <span class="tag bg-[var(--efs-state-warning,#f0b34a)]/10 text-[var(--efs-state-warning,#f0b34a)] border-[var(--efs-state-warning,#f0b34a)]/30">Draft</span>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead>
                            <tr>
                                <th class="pb-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Snapshot</th>
                                <th class="pb-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Operation</th>
                                <th class="pb-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Reason</th>
                                <th class="pb-3 text-right text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Stats</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-[var(--shell-border)] divide-opacity-50">
                            <?php 
                            $stageActive = $stagingHistory['head']['activeSnapshotId'] ?? '';
                            foreach ($stagingHistory['snapshots'] as $snap) {
                                echo render_snapshot_row($snap, $snap['snapshotId'] === $stageActive, 'staging');
                            }
                            if (empty($stagingHistory['snapshots'])): ?>
                                <tr>
                                    <td colspan="4" class="py-8 text-center text-[var(--shell-muted)] text-sm">No history available</td>
                                </tr>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>
            </article>
        </div>

        <aside class="space-y-6">
            <div class="surface-panel bg-black/5 dark:bg-white/5 border border-[var(--shell-border)]">
                <div class="metric-label mb-2">Snapshots & Rollbacks</div>
                <p class="text-sm text-[var(--shell-muted)] leading-relaxed mb-4">
                    Every deployment creates an immutable snapshot of the environment state. You can instantly restore any environment to a previous snapshot if issues occur.
                </p>
                <div class="space-y-2 mt-4 pt-4 border-t border-[var(--shell-border)] border-opacity-50">
                    <a href="<?php echo efsdb_control_plane_path('environments'); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                        Manage Environments <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                    <a href="<?php echo efsdb_control_plane_path('routes'); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                        Manage Routes <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                </div>
            </div>
            
            <div class="table-card border-dashed border-2 bg-transparent opacity-60">
                <div class="flex items-center gap-3 mb-3">
                    <div class="text-[var(--shell-muted)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    </div>
                    <h3 class="font-medium">Audit Logs</h3>
                </div>
                <p class="text-xs text-[var(--shell-muted)] leading-relaxed mb-4">
                    Detailed system events and access logs for all deployment and promotion activities.
                </p>
                <div class="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mix-blend-plus-lighter dark:mix-blend-normal">
                    Coming Soon
                </div>
            </div>
        </aside>
    </div>
</section>
