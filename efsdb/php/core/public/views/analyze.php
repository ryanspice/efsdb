<?php
$pageTitle = 'EFSDB Analyze - Runtime Monitor';
$canAnalyze = !$isGuest && (
    $perms->canManageUsers($user)
    || $perms->canManageSettings($user)
    || $perms->canViewEnvironmentHistory($user)
);
$canKill = !$isGuest && ($perms->canManageUsers($user) || $perms->canManageSettings($user));
$runtimeEndpoint = '/_efsdb/api/admin/analyze/runtime';
$exportEndpoint = '/_efsdb/api/admin/analyze/export?hours=24';
$killEndpoint = '/_efsdb/api/admin/analyze/process/kill';
?>

<?php if (!$canAnalyze): ?>
    <section class="shell-panel p-6 sm:p-8">
        <div class="section-label">Analyze</div>
        <h1 class="page-title mt-4">Runtime monitor is restricted.</h1>
        <p class="shell-copy mt-4 max-w-2xl">
            This workspace exposes live process and document-root diagnostics, so the page is limited to operator roles
            with admin or environment visibility entitlements.
        </p>
    </section>
    <?php return; ?>
<?php endif; ?>

<section
    id="analyze-app"
    class="analyze-shell space-y-6"
    data-runtime-endpoint="<?php echo htmlspecialchars($runtimeEndpoint, ENT_QUOTES, 'UTF-8'); ?>"
    data-export-endpoint="<?php echo htmlspecialchars($exportEndpoint, ENT_QUOTES, 'UTF-8'); ?>"
    data-kill-endpoint="<?php echo htmlspecialchars($killEndpoint, ENT_QUOTES, 'UTF-8'); ?>"
    data-can-kill="<?php echo $canKill ? '1' : '0'; ?>"
>
    <section class="shell-panel p-5 sm:p-7 lg:p-8">
        <div class="analyze-hero-row">
            <div class="analyze-hero-copy">
                <div class="section-label">Runtime Analyze</div>
                <h1 class="page-title mt-4">Runtime posture across PHP, Node/Bun, listeners, and `/public` exposure.</h1>
                <p class="shell-copy mt-4">
                    Use this page like a local task manager for EFSDB. It watches live processes, listening ports,
                    tracked build or dev records, suspicious `/public` artifacts, and slow requests while keeping shared
                    paths reduced to `/public` and `/data`.
                </p>
                <div id="analyze-hero-signals" class="analyze-hero-signals mt-5"></div>
            </div>

            <div class="analyze-toolbar">
                <button type="button" class="pill-button" id="analyze-refresh-button">Refresh now</button>
                <button type="button" class="ghost-button" id="analyze-export-button">Export 24h JSON</button>
                <label class="analyze-select-wrap" for="analyze-refresh-interval">
                    <span>Cadence</span>
                    <select id="analyze-refresh-interval" class="analyze-select">
                        <option value="3000">3s</option>
                        <option value="5000" selected>5s</option>
                        <option value="8000">8s</option>
                        <option value="15000">15s</option>
                        <option value="30000">30s</option>
                    </select>
                </label>
                <label class="analyze-toggle" for="analyze-auto-refresh">
                    <input id="analyze-auto-refresh" type="checkbox" checked>
                    <span>Auto refresh</span>
                </label>
            </div>
        </div>

        <div class="analyze-hero-grid mt-6">
            <article class="surface-panel analyze-host-card">
                <div class="analyze-card-head">
                    <div>
                        <div class="section-label">Host posture</div>
                        <div class="shell-copy mt-2">Baseline checks for the machine, collector timing, and the expected idle profile.</div>
                    </div>
                </div>
                <div id="analyze-host-details" class="analyze-host-details mt-4"></div>
            </article>

            <article class="surface-panel analyze-chart-card">
                <div class="analyze-panel-head">
                    <div>
                        <div class="section-label">Runtime timeline</div>
                        <div class="shell-copy mt-2" id="analyze-history-copy">Live samples show process, listener, and exposure counts.</div>
                    </div>
                    <div class="analyze-chart-toolbar">
                        <div class="analyze-mode-switch" role="tablist" aria-label="History mode">
                            <button type="button" class="analyze-mode-pill is-active" data-history-mode="live" aria-pressed="true">Live</button>
                            <button type="button" class="analyze-mode-pill" data-history-mode="archive" aria-pressed="false">24h</button>
                        </div>
                        <div class="analyze-status-line" id="analyze-status-line">Waiting for first sample...</div>
                    </div>
                </div>
                <div class="analyze-chart-wrap mt-4">
                    <svg id="analyze-history-chart" class="analyze-history-chart" viewBox="0 0 640 180" preserveAspectRatio="none" aria-label="Runtime history chart"></svg>
                </div>
                <div class="analyze-chart-legend mt-4">
                    <span class="analyze-legend-item"><span class="analyze-legend-swatch analyze-swatch-processes"></span>Processes</span>
                    <span class="analyze-legend-item"><span class="analyze-legend-swatch analyze-swatch-listeners"></span>Listeners</span>
                    <span class="analyze-legend-item"><span class="analyze-legend-swatch analyze-swatch-risk"></span>Exposure</span>
                </div>
                <div id="analyze-history-pulse" class="analyze-history-pulse mt-4"></div>
                <div id="analyze-legend-note" class="analyze-legend-note mt-4">Dotted guides mark count bands and window edges.</div>
                <div id="analyze-history-guide" class="analyze-chart-guide mt-4"></div>
                <div id="analyze-history-summary" class="analyze-summary-grid mt-4"></div>
            </article>
        </div>
    </section>

    <section id="analyze-errors"></section>

    <section id="analyze-summary" class="analyze-summary-grid"></section>

    <div id="analyze-workspace-layout" class="workspace-layout items-start">
        <article class="table-card analyze-process-card min-w-0">
            <div class="analyze-panel-head analyze-table-head">
                <div>
                    <div class="section-label">Process board</div>
                    <h2 class="mt-3 page-title analyze-panel-title">Search, inspect, and control live instances</h2>
                    <div class="shell-copy mt-2">Filter the current sample by runtime family, listener activity, or suspicious state.</div>
                </div>
                <div class="analyze-controls">
                    <div class="flex items-center gap-1 bg-[var(--shell-inset-bg)] p-1 rounded-lg border border-[var(--shell-border)] mb-2">
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
                    <input id="analyze-search" class="analyze-search" type="search" placeholder="Filter by pid, name, port, or command">
                    <div id="analyze-filters" class="analyze-filters" aria-label="Process filters"></div>
                </div>
            </div>

            <div class="analyze-table-wrap">
                <table class="analyze-table">
                    <thead>
                        <tr>
                            <th>Process</th>
                            <th>Ports</th>
                            <th>Memory</th>
                            <th>CPU</th>
                            <th>Risk</th>
                            <th class="analyze-actions-col">Kill</th>
                        </tr>
                    </thead>
                    <tbody id="analyze-process-rows">
                        <tr>
                            <td colspan="6" class="analyze-empty">Loading runtime snapshot...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>

        <aside class="analyze-side-column">
            <article class="table-card analyze-focus-card">
                <div class="section-label">Focus pane</div>
                <div class="shell-copy mt-2">The selected process with redacted paths, listeners, and kill eligibility.</div>
                <div id="analyze-selected-process" class="mt-4 analyze-selected-process">
                    Pick a process to inspect command line, paths, listeners, and kill eligibility.
                </div>
            </article>

            <article class="table-card analyze-network-card">
                <div class="section-label">Open listeners</div>
                <div class="shell-copy mt-2">Ports currently bound by the visible runtime set.</div>
                <div id="analyze-listener-list" class="mt-4 analyze-compact-list"></div>
            </article>

            <article class="table-card analyze-activity-card-wrap">
                <div class="section-label">Change feed</div>
                <div class="shell-copy mt-2">Lightweight event notes generated as the runtime shape changes.</div>
                <div id="analyze-activity" class="mt-4 analyze-compact-list"></div>
            </article>
        </aside>
    </div>

    <section class="analyze-bottom-grid">
        <article class="table-card analyze-findings-card">
            <div class="section-label">Served root watch</div>
            <div class="shell-copy mt-4">Flags source, config, executable, and example artifacts visible beneath the served `/public` root.</div>
            <div id="analyze-docroot" class="mt-4 analyze-scroll-list"></div>
        </article>

        <article class="table-card analyze-runtime-card">
            <div class="section-label">Managed runtimes</div>
            <div class="shell-copy mt-4">Tracked server records, current build state files, and the heaviest visible processes.</div>
            <div id="analyze-runtime-sidecar" class="mt-4 analyze-scroll-list"></div>
        </article>

        <article class="table-card analyze-latency-card">
            <div class="section-label">Slow request trail</div>
            <div class="shell-copy mt-4">Requests over 500ms emitted by the runtime timing probe.</div>
            <div id="analyze-slowlogs" class="mt-4 analyze-scroll-list"></div>
        </article>
    </section>
</section>

<style>
    .analyze-hero-row,
    .analyze-toolbar,
    .analyze-hero-grid,
    .analyze-bottom-grid,
    .analyze-panel-head,
    .analyze-chart-toolbar,
    .analyze-controls,
    .analyze-filters,
    .analyze-status-line,
    .analyze-chart-guide,
    .analyze-chart-legend,
    .analyze-host-details,
    .analyze-summary-grid,
    .analyze-side-column {
        display: grid;
        gap: 1rem;
    }

    .analyze-hero-row {
        align-items: start;
    }

    .analyze-toolbar {
        align-content: start;
        justify-items: start;
    }

    .analyze-toggle {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.8rem 1rem;
        border: 1px solid var(--shell-border);
        border-radius: 999px;
        background: var(--shell-inset-bg);
        color: var(--shell-text);
        font-size: 0.86rem;
    }

    .analyze-select-wrap {
        display: grid;
        gap: 0.4rem;
        color: var(--shell-muted);
        font-size: 0.76rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .analyze-select {
        min-height: 2.7rem;
        border: 1px solid var(--shell-border);
        border-radius: 999px;
        background: var(--shell-input-bg);
        color: var(--shell-text);
        padding: 0 0.95rem;
        font-size: 0.88rem;
        letter-spacing: normal;
        text-transform: none;
    }

    .analyze-hero-grid,
    .analyze-bottom-grid {
        grid-template-columns: 1fr;
    }

    .analyze-host-card,
    .analyze-chart-card,
    .analyze-process-card,
    .analyze-side-column > .table-card,
    .analyze-bottom-grid > .table-card {
        overflow: hidden;
    }

    .analyze-host-card,
    .analyze-chart-card {
        padding: 1.15rem 1.2rem;
        border: 1px solid color-mix(in srgb, var(--accent), transparent 78%);
        background:
            radial-gradient(circle at top left, color-mix(in srgb, var(--accent), transparent 84%), transparent 38%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 4%), color-mix(in srgb, var(--shell-soft-bg), transparent 16%));
    }

    .analyze-host-details {
        grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    }

    .analyze-host-item,
    .analyze-metric-card,
    .analyze-selected-pane,
    .analyze-list-card,
    .analyze-sidecar-card,
    .analyze-slow-card,
    .analyze-activity-card {
        border: 1px solid var(--shell-border);
        border-radius: 1rem;
        background: linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 4%), color-mix(in srgb, var(--shell-soft-bg), transparent 16%));
        padding: 0.95rem 1rem;
        box-shadow: inset 0 1px 0 color-mix(in srgb, white, transparent 86%);
    }

    .analyze-chart-wrap {
        min-height: 11.5rem;
        border: 1px solid var(--shell-border);
        border-radius: 1rem;
        padding: 0.8rem;
        background:
            radial-gradient(circle at top, color-mix(in srgb, var(--accent), transparent 88%), transparent 52%),
            linear-gradient(180deg, color-mix(in srgb, #0f172a, transparent 4%), color-mix(in srgb, var(--shell-soft-bg), transparent 6%));
    }

    .analyze-history-chart {
        width: 100%;
        height: 11rem;
    }

    .analyze-legend-item {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        color: var(--shell-muted);
        font-size: 0.82rem;
    }

    .analyze-legend-swatch {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 999px;
    }

    .analyze-swatch-processes {
        background: #0ea5e9;
    }

    .analyze-swatch-listeners {
        background: #22c55e;
    }

    .analyze-swatch-risk {
        background: #f97316;
    }

    .analyze-summary-grid {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }

    .analyze-main-grid {
        gap: 1.25rem;
    }

    .analyze-chart-toolbar {
        align-items: start;
    }

    .analyze-mode-switch {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.3rem;
        border: 1px solid color-mix(in srgb, var(--accent), transparent 72%);
        border-radius: 999px;
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 2%);
    }

    .analyze-mode-pill {
        border: 0;
        border-radius: 999px;
        padding: 0.55rem 0.9rem;
        background: transparent;
        color: var(--shell-muted);
        font-size: 0.78rem;
        font-weight: 700;
        cursor: pointer;
    }

    .analyze-mode-pill.is-active {
        background: linear-gradient(135deg, color-mix(in srgb, var(--accent), transparent 16%), color-mix(in srgb, #22c55e, transparent 42%));
        color: white;
        box-shadow: 0 8px 20px color-mix(in srgb, var(--accent), transparent 78%);
    }

    .analyze-chart-guide {
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    }

    .analyze-guide-card {
        border: 1px dashed color-mix(in srgb, var(--accent), transparent 62%);
        border-radius: 1rem;
        padding: 0.85rem 0.95rem;
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 4%);
    }

    .analyze-guide-card[data-tone='healthy'] {
        border-color: color-mix(in srgb, #22c55e, transparent 56%);
        background: color-mix(in srgb, #22c55e, transparent 93%);
    }

    .analyze-guide-card[data-tone='warning'] {
        border-color: color-mix(in srgb, #f59e0b, transparent 56%);
        background: color-mix(in srgb, #f59e0b, transparent 93%);
    }

    .analyze-guide-card[data-tone='risk'] {
        border-color: color-mix(in srgb, #ef4444, transparent 56%);
        background: color-mix(in srgb, #ef4444, transparent 94%);
    }

    .analyze-host-item[data-tone='live'],
    .analyze-metric-card[data-tone='live'] {
        border-color: color-mix(in srgb, #0ea5e9, transparent 62%);
        background: linear-gradient(180deg, color-mix(in srgb, #0ea5e9, transparent 90%), color-mix(in srgb, var(--shell-soft-bg), transparent 10%));
    }

    .analyze-host-item[data-tone='healthy'],
    .analyze-metric-card[data-tone='healthy'] {
        border-color: color-mix(in srgb, #22c55e, transparent 62%);
        background: linear-gradient(180deg, color-mix(in srgb, #22c55e, transparent 92%), color-mix(in srgb, var(--shell-soft-bg), transparent 10%));
    }

    .analyze-host-item[data-tone='warning'],
    .analyze-metric-card[data-tone='warning'] {
        border-color: color-mix(in srgb, #f59e0b, transparent 62%);
        background: linear-gradient(180deg, color-mix(in srgb, #f59e0b, transparent 92%), color-mix(in srgb, var(--shell-soft-bg), transparent 10%));
    }

    .analyze-host-item[data-tone='risk'],
    .analyze-metric-card[data-tone='risk'] {
        border-color: color-mix(in srgb, #ef4444, transparent 58%);
        background: linear-gradient(180deg, color-mix(in srgb, #ef4444, transparent 92%), color-mix(in srgb, var(--shell-soft-bg), transparent 10%));
    }

    .analyze-process-card {
        padding: 0;
    }

    .analyze-table-head {
        padding: 1.25rem 1.25rem 0;
    }

    .analyze-controls {
        align-items: center;
    }

    .analyze-search {
        width: 100%;
        min-height: 2.85rem;
        border: 1px solid var(--shell-border);
        border-radius: 999px;
        background: var(--shell-input-bg);
        color: var(--shell-text);
        padding: 0 1rem;
    }

    .analyze-filters {
        grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    }

    .analyze-filter-pill {
        border: 1px solid var(--shell-border);
        border-radius: 999px;
        background: transparent;
        color: var(--shell-muted);
        padding: 0.72rem 0.95rem;
        font-size: 0.8rem;
        text-align: left;
        cursor: pointer;
    }

    .analyze-filter-pill.is-active {
        background: color-mix(in srgb, var(--accent), transparent 88%);
        color: var(--shell-text-strong);
        border-color: color-mix(in srgb, var(--accent), transparent 62%);
    }

    .analyze-table-wrap {
        overflow: auto;
        margin-top: 1rem;
    }

    .analyze-table {
        width: 100%;
        border-collapse: collapse;
    }

    .analyze-table th,
    .analyze-table td {
        padding: 0.9rem 1rem;
        border-top: 1px solid var(--shell-border);
        vertical-align: top;
        text-align: left;
    }

    .analyze-table th {
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.16em;
        color: var(--shell-muted);
        font-weight: 700;
        background: color-mix(in srgb, var(--shell-soft-bg), transparent 18%);
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .analyze-row {
        cursor: pointer;
    }

    .analyze-row:hover,
    .analyze-row.is-selected {
        background: color-mix(in srgb, var(--accent), transparent 93%);
    }

    .analyze-empty {
        color: var(--shell-muted);
        text-align: center;
        padding: 2.5rem 1rem;
    }

    .analyze-badge,
    .analyze-port-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.25rem 0.55rem;
        border-radius: 999px;
        font-size: 0.72rem;
        font-weight: 700;
        border: 1px solid transparent;
        background: var(--shell-inset-bg);
        color: var(--shell-text);
    }

    .analyze-badge.is-high,
    .analyze-port-badge.is-high {
        background: color-mix(in srgb, #ef4444, transparent 86%);
        color: #fca5a5;
        border-color: color-mix(in srgb, #ef4444, transparent 72%);
    }

    .analyze-badge.is-medium,
    .analyze-port-badge.is-medium {
        background: color-mix(in srgb, #f59e0b, transparent 85%);
        color: #fcd34d;
        border-color: color-mix(in srgb, #f59e0b, transparent 68%);
    }

    .analyze-badge.is-low {
        background: color-mix(in srgb, #22c55e, transparent 86%);
        color: #86efac;
        border-color: color-mix(in srgb, #22c55e, transparent 72%);
    }

    .analyze-code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 0.8rem;
        line-height: 1.6;
        word-break: break-word;
    }

    .analyze-actions-col {
        width: 7rem;
    }

    .analyze-kill {
        min-width: 5.2rem;
        justify-content: center;
    }

    .analyze-panel-title {
        font-size: clamp(1.4rem, 2.4vw, 1.9rem);
    }

    .analyze-kill[disabled] {
        opacity: 0.45;
        cursor: not-allowed;
    }

    .analyze-compact-list,
    .analyze-scroll-list {
        display: grid;
        gap: 0.85rem;
        max-height: 34rem;
        overflow: auto;
    }

    .analyze-activity-card[data-level='high'] {
        border-color: color-mix(in srgb, #ef4444, transparent 65%);
        background: color-mix(in srgb, #ef4444, transparent 94%);
    }

    .analyze-activity-card[data-level='medium'] {
        border-color: color-mix(in srgb, #f59e0b, transparent 65%);
        background: color-mix(in srgb, #f59e0b, transparent 94%);
    }

    .analyze-status-line {
        color: var(--shell-muted);
        font-size: 0.82rem;
    }

    .analyze-alert {
        border: 1px solid color-mix(in srgb, #f59e0b, transparent 70%);
        background: color-mix(in srgb, #f59e0b, transparent 90%);
        color: var(--shell-text);
        border-radius: 1rem;
        padding: 0.95rem 1rem;
    }

    @media (min-width: 960px) {
        .analyze-hero-row {
            grid-template-columns: minmax(0, 1.4fr) auto;
        }

        .analyze-hero-grid {
            grid-template-columns: minmax(18rem, 0.92fr) minmax(0, 1.08fr);
        }

        .analyze-bottom-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    .analyze-shell {
        --analyze-live: #0ea5e9;
        --analyze-healthy: #22c55e;
        --analyze-warning: #f59e0b;
        --analyze-risk: #ef4444;
        --analyze-surface-border: color-mix(in srgb, var(--accent), transparent 78%);
        --analyze-surface-bg:
            radial-gradient(circle at top left, color-mix(in srgb, var(--accent), transparent 88%), transparent 42%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 16%));
        --analyze-card-shadow:
            0 18px 40px color-mix(in srgb, #020617, transparent 88%),
            inset 0 1px 0 color-mix(in srgb, white, transparent 86%);
    }

    .analyze-shell .table-card,
    .analyze-shell .surface-panel {
        border-radius: 1.35rem;
        border: 1px solid var(--analyze-surface-border);
        background: var(--analyze-surface-bg);
        box-shadow: var(--analyze-card-shadow);
    }

    .analyze-shell .table-card {
        padding: 1.2rem 1.2rem 1.25rem;
    }

    .analyze-hero-row {
        gap: 1.4rem;
    }

    .analyze-hero-copy {
        max-width: 62rem;
    }

    .analyze-hero-signals {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        gap: 0.85rem;
    }

    .analyze-signal-pill {
        border: 1px solid var(--shell-border);
        border-radius: 1rem;
        padding: 0.95rem 1rem;
        background:
            linear-gradient(180deg, color-mix(in srgb, var(--shell-inset-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 6%));
        box-shadow: inset 0 1px 0 color-mix(in srgb, white, transparent 90%);
    }

    .analyze-signal-pill[data-tone='healthy'] {
        border-color: color-mix(in srgb, var(--analyze-healthy), transparent 60%);
        background: linear-gradient(180deg, color-mix(in srgb, var(--analyze-healthy), transparent 93%), color-mix(in srgb, var(--shell-soft-bg), transparent 10%));
    }

    .analyze-signal-pill[data-tone='warning'] {
        border-color: color-mix(in srgb, var(--analyze-warning), transparent 58%);
        background: linear-gradient(180deg, color-mix(in srgb, var(--analyze-warning), transparent 93%), color-mix(in srgb, var(--shell-soft-bg), transparent 10%));
    }

    .analyze-signal-pill[data-tone='risk'] {
        border-color: color-mix(in srgb, var(--analyze-risk), transparent 56%);
        background: linear-gradient(180deg, color-mix(in srgb, var(--analyze-risk), transparent 94%), color-mix(in srgb, var(--shell-soft-bg), transparent 10%));
    }

    .analyze-toolbar {
        padding: 1rem;
        border: 1px solid color-mix(in srgb, var(--accent), transparent 78%);
        border-radius: 1.25rem;
        background:
            radial-gradient(circle at top right, color-mix(in srgb, var(--accent), transparent 90%), transparent 30%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-inset-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 8%));
        box-shadow: inset 0 1px 0 color-mix(in srgb, white, transparent 88%);
    }

    .analyze-host-card,
    .analyze-chart-card {
        padding: 1.2rem 1.25rem;
    }

    .analyze-host-card {
        background:
            radial-gradient(circle at top left, color-mix(in srgb, var(--analyze-healthy), transparent 88%), transparent 44%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 1%), color-mix(in srgb, var(--shell-soft-bg), transparent 14%));
    }

    .analyze-chart-card {
        background:
            radial-gradient(circle at top left, color-mix(in srgb, var(--analyze-live), transparent 88%), transparent 42%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 16%));
    }

    .analyze-card-head {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: start;
    }

    .analyze-host-item,
    .analyze-metric-card,
    .analyze-selected-pane,
    .analyze-list-card,
    .analyze-sidecar-card,
    .analyze-slow-card,
    .analyze-activity-card,
    .analyze-focus-stat,
    .analyze-detail-section {
        border-radius: 1rem;
        box-shadow: inset 0 1px 0 color-mix(in srgb, white, transparent 87%);
    }

    .analyze-chart-wrap {
        min-height: 13rem;
        border: 1px solid color-mix(in srgb, var(--analyze-live), transparent 78%);
        border-radius: 1.2rem;
        padding: 0.9rem;
        background:
            radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--analyze-live), transparent 90%), transparent 54%),
            linear-gradient(180deg, color-mix(in srgb, #0f172a, transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 4%));
    }

    .analyze-history-chart {
        height: 12.25rem;
    }

    .analyze-status-line {
        text-align: right;
        max-width: 22rem;
    }

    .analyze-chart-legend {
        grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
        gap: 0.65rem;
    }

    .analyze-legend-item {
        min-height: 2.85rem;
        padding: 0.75rem 0.9rem;
        border: 1px solid var(--shell-border);
        border-radius: 999px;
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 3%);
        color: var(--shell-text);
        font-weight: 600;
    }

    .analyze-legend-swatch {
        width: 1.8rem;
        height: 0;
        border-top-width: 3px;
        border-top-style: solid;
        border-radius: 999px;
        flex: 0 0 auto;
    }

    .analyze-swatch-processes {
        border-color: var(--analyze-live);
    }

    .analyze-swatch-listeners {
        border-color: var(--analyze-healthy);
        border-top-style: dashed;
    }

    .analyze-swatch-risk {
        border-color: #f97316;
        border-top-style: dotted;
    }

    .analyze-history-pulse {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
        gap: 0.75rem;
    }

    .analyze-pulse-chip {
        border: 1px solid var(--shell-border);
        border-radius: 1rem;
        padding: 0.85rem 0.95rem;
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 4%);
    }

    .analyze-pulse-chip[data-tone='live'] {
        border-color: color-mix(in srgb, var(--analyze-live), transparent 62%);
    }

    .analyze-pulse-chip[data-tone='healthy'] {
        border-color: color-mix(in srgb, var(--analyze-healthy), transparent 62%);
    }

    .analyze-pulse-chip[data-tone='warning'] {
        border-color: color-mix(in srgb, var(--analyze-warning), transparent 60%);
    }

    .analyze-pulse-chip[data-tone='risk'] {
        border-color: color-mix(in srgb, var(--analyze-risk), transparent 58%);
    }

    .analyze-legend-note {
        color: var(--shell-muted);
        font-size: 0.82rem;
        line-height: 1.6;
    }

    .analyze-summary-grid {
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }

    .analyze-metric-card {
        min-height: 11rem;
    }

    .analyze-process-card {
        background:
            radial-gradient(circle at top left, color-mix(in srgb, var(--accent), transparent 92%), transparent 28%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 14%));
    }

    .analyze-table-head {
        padding: 1.35rem 1.35rem 0;
    }

    .analyze-controls {
        align-items: end;
    }

    .analyze-search {
        min-height: 2.95rem;
        box-shadow: inset 0 1px 0 color-mix(in srgb, white, transparent 90%);
    }

    .analyze-filters {
        grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
    }

    .analyze-filter-pill {
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 3%);
        transition: border-color 120ms ease, background-color 120ms ease, color 120ms ease;
    }

    .analyze-table th,
    .analyze-table td {
        padding: 1rem 1rem;
    }

    .analyze-table th {
        background: color-mix(in srgb, var(--shell-soft-bg), transparent 10%);
    }

    .analyze-row {
        transition: background-color 120ms ease;
    }

    .analyze-empty {
        padding: 2.8rem 1rem;
    }

    .analyze-selected-process {
        display: grid;
        gap: 1rem;
    }

    .analyze-selected-pane[data-risk='medium'] {
        border-color: color-mix(in srgb, var(--analyze-warning), transparent 58%);
    }

    .analyze-selected-pane[data-risk='high'] {
        border-color: color-mix(in srgb, var(--analyze-risk), transparent 54%);
    }

    .analyze-focus-head {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: start;
    }

    .analyze-focus-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr));
        gap: 0.75rem;
    }

    .analyze-focus-stat,
    .analyze-detail-section {
        padding: 0.85rem 0.9rem;
    }

    .analyze-focus-card {
        background:
            radial-gradient(circle at top right, color-mix(in srgb, var(--accent), transparent 90%), transparent 34%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 14%));
    }

    .analyze-network-card {
        background:
            radial-gradient(circle at top right, color-mix(in srgb, var(--analyze-healthy), transparent 90%), transparent 34%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 14%));
    }

    .analyze-activity-card-wrap {
        background:
            radial-gradient(circle at top right, color-mix(in srgb, var(--analyze-warning), transparent 90%), transparent 34%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 14%));
    }

    .analyze-findings-card {
        background:
            radial-gradient(circle at top right, color-mix(in srgb, var(--analyze-risk), transparent 92%), transparent 32%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 14%));
    }

    .analyze-runtime-card {
        background:
            radial-gradient(circle at top right, color-mix(in srgb, var(--analyze-live), transparent 92%), transparent 32%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 14%));
    }

    .analyze-latency-card {
        background:
            radial-gradient(circle at top right, color-mix(in srgb, #fb7185, transparent 92%), transparent 32%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-soft-bg), transparent 2%), color-mix(in srgb, var(--shell-soft-bg), transparent 14%));
    }

    .analyze-compact-list,
    .analyze-scroll-list {
        max-height: 35rem;
    }

    .analyze-list-card,
    .analyze-sidecar-card,
    .analyze-slow-card,
    .analyze-activity-card {
        position: relative;
    }

    .analyze-list-card::before,
    .analyze-sidecar-card::before,
    .analyze-slow-card::before,
    .analyze-activity-card::before {
        content: '';
        position: absolute;
        inset: 0 auto 0 0;
        width: 3px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--accent), transparent 30%);
    }

    .analyze-activity-card[data-level='high'] {
        border-color: color-mix(in srgb, var(--analyze-risk), transparent 64%);
        background: color-mix(in srgb, var(--analyze-risk), transparent 94%);
    }

    .analyze-activity-card[data-level='medium'] {
        border-color: color-mix(in srgb, var(--analyze-warning), transparent 64%);
        background: color-mix(in srgb, var(--analyze-warning), transparent 94%);
    }

    .analyze-section-stack {
        display: grid;
        gap: 0.85rem;
    }

    .analyze-section-heading {
        display: grid;
        gap: 0.35rem;
    }

    .analyze-section-subcopy {
        color: var(--shell-muted);
        font-size: 0.82rem;
        line-height: 1.55;
    }

    @media (min-width: 960px) {
        .analyze-hero-row {
            grid-template-columns: minmax(0, 1.45fr) minmax(15rem, 0.72fr);
        }

        .analyze-hero-grid {
            grid-template-columns: minmax(19rem, 0.9fr) minmax(0, 1.1fr);
        }

        .analyze-main-grid {
            grid-template-columns: minmax(0, 1.55fr) minmax(22rem, 0.92fr);
        }
    }
</style>

<script>
    (() => {
        const root = document.getElementById('analyze-app');
        if (!root) {
            return;
        }

        const runtimeEndpoint = root.dataset.runtimeEndpoint || '';
        const exportEndpoint = root.dataset.exportEndpoint || '';
        const killEndpoint = root.dataset.killEndpoint || '';
        const canKill = root.dataset.canKill === '1';
        const state = {
            data: null,
            selectedPid: null,
            filter: 'all',
            search: '',
            historyMode: 'live',
            autoRefresh: true,
            loading: false,
            history: [],
            events: [],
            previousSnapshot: null,
            lastFetchMs: null,
            refreshMs: 5000,
            pausedForVisibility: false,
            exporting: false,
            timer: null
        };

        const elements = {
            errors: document.getElementById('analyze-errors'),
            heroSignals: document.getElementById('analyze-hero-signals'),
            hostDetails: document.getElementById('analyze-host-details'),
            statusLine: document.getElementById('analyze-status-line'),
            historyCopy: document.getElementById('analyze-history-copy'),
            historyChart: document.getElementById('analyze-history-chart'),
            historyPulse: document.getElementById('analyze-history-pulse'),
            legendNote: document.getElementById('analyze-legend-note'),
            historyGuide: document.getElementById('analyze-history-guide'),
            summary: document.getElementById('analyze-summary'),
            historySummary: document.getElementById('analyze-history-summary'),
            filters: document.getElementById('analyze-filters'),
            search: document.getElementById('analyze-search'),
            rows: document.getElementById('analyze-process-rows'),
            selectedProcess: document.getElementById('analyze-selected-process'),
            listenerList: document.getElementById('analyze-listener-list'),
            docroot: document.getElementById('analyze-docroot'),
            runtimeSidecar: document.getElementById('analyze-runtime-sidecar'),
            slowlogs: document.getElementById('analyze-slowlogs'),
            activity: document.getElementById('analyze-activity'),
            refresh: document.getElementById('analyze-refresh-button'),
            export: document.getElementById('analyze-export-button'),
            autoRefresh: document.getElementById('analyze-auto-refresh'),
            refreshInterval: document.getElementById('analyze-refresh-interval')
        };

        const filterDefs = [
            { id: 'all', label: 'All' },
            { id: 'tracked', label: 'Tracked' },
            { id: 'dev', label: 'Servers' },
            { id: 'node', label: 'Node/Bun' },
            { id: 'listeners', label: 'Listeners' },
            { id: 'suspicious', label: 'Suspicious' }
        ];

        function escapeHtml(value) {
            return String(value ?? '')
                .replaceAll('&', '&amp;')
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('"', '&quot;')
                .replaceAll("'", '&#39;');
        }

        function formatNumber(value, decimals = 0) {
            const number = Number(value ?? 0);
            if (!Number.isFinite(number)) {
                return '0';
            }
            return number.toLocaleString(undefined, {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            });
        }

        function formatMemory(value) {
            return `${formatNumber(value, 1)} MB`;
        }

        function formatCpu(value) {
            if (value === null || value === undefined || value === '') {
                return 'n/a';
            }
            return `${formatNumber(value, 1)} s`;
        }

        function formatTime(value) {
            if (!value) {
                return 'n/a';
            }
            const date = new Date(value);
            return Number.isNaN(date.getTime()) ? 'n/a' : date.toLocaleString();
        }

        function formatDurationMs(value) {
            const number = Number(value ?? 0);
            if (!Number.isFinite(number) || number <= 0) {
                return 'n/a';
            }

            return `${formatNumber(number, number >= 100 ? 0 : 1)} ms`;
        }

        function pluralize(value, singular, plural = `${singular}s`) {
            return Number(value) === 1 ? singular : plural;
        }

        function formatRelativeTime(value) {
            if (!value) {
                return 'just now';
            }

            const date = new Date(value);
            const time = date.getTime();
            if (Number.isNaN(time)) {
                return 'just now';
            }

            const deltaSeconds = Math.max(0, Math.round((Date.now() - time) / 1000));
            if (deltaSeconds < 60) {
                return `${deltaSeconds}s ago`;
            }
            if (deltaSeconds < 3600) {
                const minutes = Math.round(deltaSeconds / 60);
                return `${minutes}m ago`;
            }
            if (deltaSeconds < 86400) {
                const hours = Math.round(deltaSeconds / 3600);
                return `${hours}h ago`;
            }

            const days = Math.round(deltaSeconds / 86400);
            return `${days}d ago`;
        }

        function collectorModeLabel(mode) {
            return String(mode || 'runtime-scan')
                .replaceAll('-', ' ')
                .replace(/\b\w/g, (match) => match.toUpperCase());
        }

        function latencyTone(value) {
            const number = Number(value ?? 0);
            if (!Number.isFinite(number) || number <= 0) {
                return 'live';
            }
            if (number >= 1800) {
                return 'risk';
            }
            if (number >= 900) {
                return 'warning';
            }
            return 'healthy';
        }

        function riskClass(risk) {
            return risk === 'high' ? 'is-high' : risk === 'medium' ? 'is-medium' : 'is-low';
        }

        function toneForRisk(risk) {
            return risk === 'high' ? 'risk' : risk === 'medium' ? 'warning' : 'healthy';
        }

        function hoursBetween(start, end) {
            const startMs = new Date(start || 0).getTime();
            const endMs = new Date(end || 0).getTime();
            if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs <= startMs) {
                return 0;
            }

            return (endMs - startMs) / 3600000;
        }

        function pushHistory(snapshot) {
            const summary = snapshot?.summary;
            if (!summary) {
                return;
            }

            state.history.push({
                sampledAt: snapshot?.generatedAt ? new Date(snapshot.generatedAt).getTime() : Date.now(),
                processCount: Number(summary.processCount ?? 0),
                listenerCount: Number(summary.listenerCount ?? 0),
                suspiciousCount: Number(summary.suspiciousProcessCount ?? 0) + Number(summary.suspiciousFileCount ?? 0)
            });

            if (state.history.length > 720) {
                state.history = state.history.slice(-720);
            }
        }

        function pushEvent(level, title, detail) {
            state.events.unshift({
                level,
                title,
                detail,
                at: new Date().toISOString()
            });

            if (state.events.length > 24) {
                state.events = state.events.slice(0, 24);
            }
        }

        function summarizeNames(processes, limit = 3) {
            return (processes ?? [])
                .slice(0, limit)
                .map((process) => process.displayName || process.name || `PID ${process.pid}`)
                .join(', ');
        }

        function pushActivity(nextSnapshot) {
            const previous = state.previousSnapshot;
            const nextSummary = nextSnapshot?.summary ?? null;

            if (!nextSummary) {
                return;
            }

            if (!previous) {
                pushEvent(
                    'low',
                    'Live monitor started',
                    `${nextSummary.processCount} processes and ${nextSummary.listenerCount} listeners are in view.`
                );
                state.previousSnapshot = nextSnapshot;
                return;
            }

            const previousProcesses = previous.processes ?? [];
            const nextProcesses = nextSnapshot.processes ?? [];
            const previousByPid = new Map(previousProcesses.map((process) => [process.pid, process]));
            const nextByPid = new Map(nextProcesses.map((process) => [process.pid, process]));

            const added = nextProcesses.filter((process) => !previousByPid.has(process.pid));
            const removed = previousProcesses.filter((process) => !nextByPid.has(process.pid));
            const suspiciousDelta =
                Number(nextSummary.suspiciousProcessCount ?? 0) +
                Number(nextSummary.suspiciousFileCount ?? 0) -
                Number(previous.summary?.suspiciousProcessCount ?? 0) -
                Number(previous.summary?.suspiciousFileCount ?? 0);
            const listenerDelta =
                Number(nextSummary.listenerCount ?? 0) -
                Number(previous.summary?.listenerCount ?? 0);

            if (added.length) {
                pushEvent('medium', 'New runtime instance', summarizeNames(added));
            }

            if (removed.length) {
                pushEvent('medium', 'Runtime instance exited', summarizeNames(removed));
            }

            if (listenerDelta > 0) {
                pushEvent('medium', 'Listener count increased', `${listenerDelta} new listener${listenerDelta === 1 ? '' : 's'} detected.`);
            } else if (listenerDelta < 0) {
                pushEvent('low', 'Listener count dropped', `${Math.abs(listenerDelta)} listener${listenerDelta === -1 ? '' : 's'} disappeared.`);
            }

            if (suspiciousDelta > 0) {
                pushEvent('high', 'Suspicious activity increased', `${suspiciousDelta} additional process or docroot finding${suspiciousDelta === 1 ? '' : 's'} appeared.`);
            } else if (suspiciousDelta < 0) {
                pushEvent('low', 'Suspicious activity decreased', `${Math.abs(suspiciousDelta)} finding${suspiciousDelta === -1 ? '' : 's'} cleared from the latest sample.`);
            }

            const previousSlowTop = Number(previous.slowLogs?.[0]?.totalMs ?? 0);
            const nextSlowTop = Number(nextSnapshot.slowLogs?.[0]?.totalMs ?? 0);
            if (nextSlowTop > previousSlowTop + 250) {
                pushEvent('medium', 'Slow request spiked', `Top slow request moved to ${formatNumber(nextSlowTop, 1)} ms.`);
            }

            state.previousSnapshot = nextSnapshot;
        }

        function matchesFilter(process) {
            switch (state.filter) {
                case 'tracked':
                    return process.scope === 'tracked';
                case 'dev':
                    return ['dev-server', 'php-server', 'apache-runtime', 'tracked-server'].includes(process.kind);
                case 'node':
                    return ['dev-server', 'node-runtime', 'tracked-server'].includes(process.kind);
                case 'listeners':
                    return (process.ports?.listen?.length ?? 0) > 0;
                case 'suspicious':
                    return process.risk !== 'low';
                default:
                    return true;
            }
        }

        function filteredProcesses() {
            const processes = state.data?.processes ?? [];
            const term = state.search.trim().toLowerCase();

            return processes.filter((process) => {
                if (!matchesFilter(process)) {
                    return false;
                }

                if (!term) {
                    return true;
                }

                const haystack = [
                    process.displayName,
                    process.name,
                    process.pid,
                    process.kind,
                    process.scope,
                    process.commandLine,
                    process.executablePath,
                    ...(process.ports?.summary ?? []),
                    ...(process.matchedRoots ?? []),
                    ...(process.riskReasons ?? [])
                ].join(' ').toLowerCase();

                return haystack.includes(term);
            });
        }

        function selectedProcess() {
            const processes = state.data?.processes ?? [];
            const selected = processes.find((process) => process.pid === state.selectedPid);
            return selected || processes[0] || null;
        }

        function renderErrors() {
            const errors = state.data?.meta?.errors ?? [];
            if (!errors.length) {
                elements.errors.innerHTML = '';
                return;
            }

            elements.errors.innerHTML = `
                <div class="analyze-alert">
                    <strong>Collector notes:</strong> ${errors.map((error) => escapeHtml(error)).join(' ')}
                </div>
            `;
        }

        function renderHeroSignals() {
            if (!elements.heroSignals) {
                return;
            }

            const summary = state.data?.summary;
            if (!summary) {
                elements.heroSignals.innerHTML = '';
                return;
            }

            const host = state.data?.host ?? {};
            const collector = state.data?.meta?.collector ?? {};
            const assessment = state.data?.assessment ?? {};
            const historyWindow = state.data?.historyWindow ?? {};
            const note = (assessment.notes ?? [])[0]?.message || 'Idle posture matches the expected PHP-first baseline.';
            const signals = [
                [
                    'Posture',
                    assessment?.builderState === 'active' ? 'Builder active' : 'Idle baseline',
                    note,
                    toneForRisk(assessment.status || 'low')
                ],
                [
                    'Runtime surface',
                    `${summary.processCount} visible / ${summary.listenerCount} listening`,
                    `${summary.appProcessCount ?? summary.processCount} app-side ${pluralize(summary.appProcessCount ?? summary.processCount, 'process')}.`,
                    'live'
                ],
                [
                    'Collector',
                    formatDurationMs(collector?.durationMs),
                    `${collectorModeLabel(collector?.mode)} completed on the last scan.`,
                    latencyTone(collector?.durationMs)
                ],
                [
                    'History',
                    `${historyWindow?.sampleCount ?? 0} retained`,
                    `${host.historyWindowHours || 24}h window at about ${Math.round(host.historySamplingSeconds || 15)}s baseline.`,
                    'healthy'
                ]
            ];

            elements.heroSignals.innerHTML = signals.map(([label, value, copy, tone]) => `
                <div class="analyze-signal-pill" data-tone="${escapeHtml(tone || 'live')}">
                    <div class="metric-label">${escapeHtml(label)}</div>
                    <div class="metric-value mt-3">${escapeHtml(value)}</div>
                    <div class="metric-copy mt-3">${escapeHtml(copy)}</div>
                </div>
            `).join('');
        }

        function renderHost() {
            const host = state.data?.host;
            if (!host) {
                return;
            }

            const monitoredRoots = (host.monitoredRoots ?? [])
                .map((entry) => `${entry.label} (${entry.role})`)
                .join(' | ') || '/public | /data';
            const assessment = state.data?.assessment ?? {};
            const idleExpectation = assessment?.idleExpectation
                ? `${(assessment.idleExpectation.always ?? []).join(', ') || 'php'} always; ${(assessment.idleExpectation.optionalWhenBuilding ?? []).join(', ') || 'node, bun'} when building`
                : 'php always; node, bun when building';
            const collector = state.data?.meta?.collector ?? {};
            const items = [
                ['Environment', host.environment, 'live'],
                ['PHP runtime', `${host.phpVersion} (${host.phpSapi})`, 'healthy'],
                ['Server stack', host.serverSoftware || host.os, 'live'],
                ['Collector pass', `${collectorModeLabel(collector?.mode)} | ${formatDurationMs(collector?.durationMs)}`, latencyTone(collector?.durationMs)],
                ['Browser cadence', `${Math.round(state.refreshMs / 1000)}s${state.autoRefresh ? ' auto' : ' manual'}`, 'live'],
                ['Last fetch', formatDurationMs(state.lastFetchMs), latencyTone(state.lastFetchMs)],
                ['Idle expectation', idleExpectation, toneForRisk(assessment.status || 'low')],
                ['Monitored aliases', monitoredRoots, 'live'],
                ['Archive sampling', `${host.historyWindowHours || 24}h at about ${Math.round(host.historySamplingSeconds || 15)}s baseline`, 'healthy']
            ];

            elements.hostDetails.innerHTML = items.map(([label, value, tone]) => `
                <div class="analyze-host-item" data-tone="${escapeHtml(tone || 'live')}">
                    <div class="metric-label">${escapeHtml(label)}</div>
                    <div class="analyze-code mt-3">${escapeHtml(value)}</div>
                </div>
            `).join('');

            const generatedAt = formatTime(state.data.generatedAt);
            const paused = state.pausedForVisibility ? 'paused while hidden' : (state.autoRefresh ? 'auto refresh on' : 'manual mode');
            elements.statusLine.textContent = `Last sample ${generatedAt} | ${collectorModeLabel(collector?.mode)} ${formatDurationMs(collector?.durationMs)} | ${paused}`;
        }

        function buildHistoryModel() {
            const nowMs = state.data?.generatedAt ? new Date(state.data.generatedAt).getTime() : Date.now();
            const liveSamples = state.history
                .map((sample) => ({
                    ts: Number(sample.sampledAt ?? 0),
                    processCount: Number(sample.processCount ?? 0),
                    listenerCount: Number(sample.listenerCount ?? 0),
                    suspiciousCount: Number(sample.suspiciousCount ?? 0)
                }))
                .filter((sample) => Number.isFinite(sample.ts) && sample.ts > 0)
                .sort((left, right) => left.ts - right.ts);

            const archive = state.data?.historyWindow ?? null;
            const archiveSamples = (archive?.points ?? [])
                .map((sample) => ({
                    ts: new Date(sample.capturedAt || 0).getTime(),
                    processCount: Number(sample.processCount ?? 0),
                    listenerCount: Number(sample.listenerCount ?? 0),
                    suspiciousCount: Number(sample.suspiciousCount ?? 0)
                }))
                .filter((sample) => Number.isFinite(sample.ts) && sample.ts > 0)
                .sort((left, right) => left.ts - right.ts);

            const archiveRangeStart = archive?.rangeStart ? new Date(archive.rangeStart).getTime() : nowMs - (24 * 3600000);
            const archiveRangeEnd = archive?.rangeEnd ? new Date(archive.rangeEnd).getTime() : nowMs;
            const liveRangeStart = liveSamples.length ? liveSamples[0].ts : nowMs - (20 * 60000);
            const liveRangeEnd = liveSamples.length ? Math.max(liveSamples[liveSamples.length - 1].ts, nowMs) : nowMs;
            const mode = state.historyMode === 'archive' ? 'archive' : 'live';

            if (mode === 'archive') {
                const firstSampleAt = archive?.firstSampleAt || null;
                const firstSampleMs = firstSampleAt ? new Date(firstSampleAt).getTime() : null;
                const latestAssessment = archive?.latestAssessment ?? {};
                const assessmentNote = (latestAssessment.notes ?? [])[0]?.message || 'Persisted tracking is still warming up.';
                const lastArchiveSample = archiveSamples[archiveSamples.length - 1] ?? null;
                return {
                    mode,
                    copy: 'Retained 24 hour history. Blank space before the first marker means this window existed before tracking began.',
                    samples: archiveSamples,
                    rangeStart: archiveRangeStart,
                    rangeEnd: archiveRangeEnd,
                    emptyMessage: 'No persisted archive samples are available yet.',
                    guideCards: [
                        {
                            title: 'Tracking gap',
                            body: firstSampleAt && firstSampleMs > archiveRangeStart
                                ? `No archived samples exist before ${formatTime(firstSampleAt)} because retention started recently.`
                                : 'Archive coverage is continuous for the retained window.',
                            tone: firstSampleAt && firstSampleMs > archiveRangeStart ? 'warning' : 'healthy'
                        },
                        {
                            title: 'Sampling',
                            body: `${archive?.sampling?.baselineSeconds ?? 15}s baseline with faster captures when the runtime shape changes.`,
                            tone: 'live'
                        },
                        {
                            title: 'Posture read',
                            body: assessmentNote,
                            tone: toneForRisk(latestAssessment.status || 'low')
                        }
                    ],
                    summaryCards: [
                        ['Retained samples', archive?.sampleCount ?? 0, 'Persisted entries available for export across the current retained window.', 'live'],
                        ['Window', `${formatTime(new Date(archiveRangeStart).toISOString())} to ${formatTime(new Date(archiveRangeEnd).toISOString())}`, 'The full plotting span, including any blank lead-in before monitoring began.', 'warning'],
                        ['Peak processes', archive?.peaks?.processCount ?? 0, 'Highest relevant process count seen in the retained window.', 'live'],
                        ['Peak exposure', archive?.peaks?.suspiciousCount ?? 0, 'Highest combined suspicious runtime and /public count in the retained window.', toneForRisk((archive?.peaks?.suspiciousCount ?? 0) > 0 ? 'high' : 'low')],
                        ['Tracking began', firstSampleAt ? formatTime(firstSampleAt) : 'n/a', 'The first persisted sample currently retained in the 24 hour window.', 'warning'],
                        ['Posture note', assessmentNote, 'What the archive thinks about PHP-only idle posture versus Node/Bun activity.', toneForRisk(latestAssessment.status || 'low')]
                    ],
                    markers: [
                        { ts: archiveRangeStart, label: '24h ago', color: 'var(--shell-border)' },
                        ...(firstSampleMs ? [{ ts: firstSampleMs, label: 'tracking began', color: '#f59e0b' }] : []),
                        { ts: archiveRangeEnd, label: 'now', color: '#22c55e' }
                    ],
                    noDataBeforeMs: firstSampleMs && firstSampleMs > archiveRangeStart ? firstSampleMs : null,
                    legendNote: 'Dotted vertical markers show 24h ago, tracking start, and the current edge. Blank left space means no retained samples existed yet.',
                    latestSample: lastArchiveSample
                };
            }

            const coverageMinutes = liveSamples.length > 1
                ? Math.max(1, Math.round((liveRangeEnd - liveRangeStart) / 60000))
                : 0;
            const collector = state.data?.meta?.collector ?? {};
            const latestAssessment = state.data?.assessment ?? {};
            const lastLiveSample = liveSamples[liveSamples.length - 1] ?? null;
            return {
                mode,
                copy: 'Session-local history from this tab. Use it to spot fresh starts, exits, and spikes quickly.',
                samples: liveSamples,
                rangeStart: liveRangeStart,
                rangeEnd: liveRangeEnd,
                emptyMessage: 'Waiting for live samples...',
                guideCards: [
                    {
                        title: 'Live window',
                        body: liveSamples.length > 1
                            ? `${liveSamples.length} recent samples across about ${coverageMinutes} minute${coverageMinutes === 1 ? '' : 's'}.`
                            : 'Live history will fill in as more snapshots arrive.',
                        tone: 'live'
                    },
                    {
                        title: 'Collector',
                        body: `${collectorModeLabel(collector?.mode)} completed in ${formatDurationMs(collector?.durationMs)} on the latest sample.`,
                        tone: latencyTone(collector?.durationMs)
                    },
                    {
                        title: 'Posture read',
                        body: (latestAssessment.notes ?? [])[0]?.message || 'Idle posture currently looks clean.',
                        tone: toneForRisk(latestAssessment.status || 'low')
                    }
                ],
                summaryCards: [
                    ['Live samples', liveSamples.length, 'Recent in-tab samples retained for the live face.', 'live'],
                    ['Coverage', liveSamples.length > 1 ? `${coverageMinutes} min` : 'warming up', 'The span represented by the live chart.', 'healthy'],
                    ['Last sample', formatTime(state.data?.generatedAt), 'Timestamp of the latest runtime snapshot drawn here.', 'live'],
                    ['Collector pass', collectorModeLabel(collector?.mode), 'Backend collector strategy used by the runtime endpoint.', latencyTone(collector?.durationMs)],
                    ['Collector time', formatDurationMs(collector?.durationMs), 'Runtime spent inside the backend collector for the latest sample.', latencyTone(collector?.durationMs)],
                    ['Posture note', (latestAssessment.notes ?? [])[0]?.message || 'Idle posture currently looks clean.', 'Quick read on whether Node/Bun looks expected right now.', toneForRisk(latestAssessment.status || 'low')]
                ],
                markers: [
                    { ts: liveRangeStart, label: 'start', color: 'var(--shell-border)' },
                    { ts: liveRangeEnd, label: 'now', color: '#22c55e' }
                ],
                noDataBeforeMs: null,
                legendNote: 'Horizontal dotted guides are count bands. Vertical markers show the visible live window.',
                latestSample: lastLiveSample
            };
        }

        function renderHistoryChart(model) {
            const svg = elements.historyChart;
            if (!svg) {
                return;
            }

            const samples = model.samples ?? [];
            const width = 640;
            const height = 180;
            const left = 22;
            const right = 22;
            const top = 18;
            const bottom = 28;
            const rangeStart = Number(model.rangeStart ?? 0);
            const rangeEnd = Math.max(Number(model.rangeEnd ?? 0), rangeStart + 1);
            const xSpan = Math.max(1, rangeEnd - rangeStart);

            if (!samples.length) {
                svg.innerHTML = `
                    <rect x="${left}" y="${top}" width="${width - left - right}" height="${height - top - bottom}" fill="transparent" stroke="var(--shell-border)" stroke-dasharray="4 6"></rect>
                    <text x="${width / 2}" y="${height / 2}" text-anchor="middle" fill="var(--shell-muted)" font-size="13">${escapeHtml(model.emptyMessage || 'No samples')}</text>
                `;
                return;
            }

            const max = Math.max(
                1,
                ...samples.map((sample) => Math.max(sample.processCount, sample.listenerCount, sample.suspiciousCount))
            );
            const gridSteps = [0.25, 0.5, 0.75, 1];
            const series = [
                { key: 'processCount', stroke: '#0ea5e9', fill: 'rgba(14, 165, 233, 0.11)', dash: '', offset: -10, label: 'P' },
                { key: 'listenerCount', stroke: '#22c55e', fill: 'rgba(34, 197, 94, 0.1)', dash: '8 6', offset: 4, label: 'L' },
                { key: 'suspiciousCount', stroke: '#f97316', fill: 'rgba(249, 115, 22, 0.1)', dash: '4 6', offset: 18, label: 'E' }
            ];

            const xFor = (ts) => left + ((width - left - right) * (ts - rangeStart)) / xSpan;
            const yFor = (value) => height - bottom - ((height - top - bottom) * value) / max;
            const linePath = (key) => samples.reduce((path, sample, index) => {
                const x = xFor(sample.ts);
                const y = yFor(Number(sample[key] ?? 0));
                return `${path}${index === 0 ? 'M' : ' L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
            }, '');
            const areaPath = (key) => {
                const firstPointX = xFor(samples[0].ts);
                const lastPointX = xFor(samples[samples.length - 1].ts);
                return `${linePath(key)} L ${lastPointX.toFixed(2)} ${height - bottom} L ${firstPointX.toFixed(2)} ${height - bottom} Z`;
            };
            const last = samples[samples.length - 1];
            const first = samples[0];
            const xLabel = (timestamp) => model.mode === 'archive'
                ? new Date(timestamp).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric' })
                : new Date(timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
            const midTs = rangeStart + Math.round(xSpan / 2);

            const gridLines = gridSteps.map((step) => {
                const value = Math.round(max * step);
                const y = yFor(value);
                return `
                    <line x1="${left}" y1="${y}" x2="${width - right}" y2="${y}" stroke="color-mix(in srgb, var(--shell-border), transparent 18%)" stroke-width="1" stroke-dasharray="3 5"></line>
                    <text x="${left - 6}" y="${y + 4}" text-anchor="end" fill="var(--shell-muted)" font-size="11">${escapeHtml(value)}</text>
                `;
            }).join('');

            const markerLines = (model.markers ?? []).map((marker) => {
                const ts = Number(marker.ts ?? 0);
                if (!Number.isFinite(ts) || ts < rangeStart || ts > rangeEnd) {
                    return '';
                }

                const x = xFor(ts);
                return `
                    <line x1="${x}" y1="${top}" x2="${x}" y2="${height - bottom}" stroke="${escapeHtml(marker.color || 'var(--shell-border)')}" stroke-width="1.1" stroke-dasharray="2 6"></line>
                    <text x="${x}" y="${top - 4}" text-anchor="middle" fill="var(--shell-muted)" font-size="11">${escapeHtml(marker.label || '')}</text>
                `;
            }).join('');

            const noDataText = model.noDataBeforeMs
                ? `
                    <text
                        x="${Math.max(left + 10, xFor(rangeStart + ((model.noDataBeforeMs - rangeStart) / 2)))}"
                        y="${top + 18}"
                        text-anchor="middle"
                        fill="var(--shell-muted)"
                        font-size="11"
                    >
                        no archived data yet
                    </text>
                `
                : '';

            const sampleDots = samples.length <= 48
                ? series.map((entry) => samples.map((sample) => `
                    <circle
                        cx="${xFor(sample.ts).toFixed(2)}"
                        cy="${yFor(Number(sample[entry.key] ?? 0)).toFixed(2)}"
                        r="1.7"
                        fill="${entry.stroke}"
                        fill-opacity="0.7"
                    ></circle>
                `).join('')).join('')
                : '';

            const seriesMarkup = series.map((entry) => `
                <path d="${areaPath(entry.key)}" fill="${entry.fill}" stroke="none"></path>
                <path d="${linePath(entry.key)}" fill="none" stroke="${entry.stroke}" stroke-width="3" stroke-linecap="round" stroke-dasharray="${entry.dash}"></path>
                <circle cx="${xFor(last.ts)}" cy="${yFor(last[entry.key])}" r="3.5" fill="${entry.stroke}"></circle>
                <text
                    x="${xFor(last.ts) - 8}"
                    y="${yFor(last[entry.key]) + entry.offset}"
                    text-anchor="end"
                    fill="${entry.stroke}"
                    font-size="11"
                    font-weight="700"
                >${entry.label} ${escapeHtml(formatNumber(last[entry.key]))}</text>
            `).join('');

            svg.innerHTML = `
                <line x1="${left}" y1="${height - bottom}" x2="${width - right}" y2="${height - bottom}" stroke="var(--shell-border)" stroke-width="1"></line>
                <line x1="${left}" y1="${top}" x2="${left}" y2="${height - bottom}" stroke="var(--shell-border)" stroke-width="1"></line>
                <text x="${left}" y="${top - 4}" fill="var(--shell-muted)" font-size="11">count</text>
                ${gridLines}
                ${markerLines}
                ${noDataText}
                ${sampleDots}
                ${seriesMarkup}
                <text x="${left}" y="${height - 8}" fill="var(--shell-muted)" font-size="11">${escapeHtml(model.mode === 'archive' ? new Date(rangeStart).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric' }) : xLabel(first.ts))}</text>
                <text x="${width / 2}" y="${height - 8}" text-anchor="middle" fill="var(--shell-muted)" font-size="11">${escapeHtml(model.mode === 'archive' ? '24h window' : xLabel(midTs))}</text>
                <text x="${width - right}" y="${height - 8}" text-anchor="end" fill="var(--shell-muted)" font-size="11">${escapeHtml(xLabel(rangeEnd))}</text>
            `;
        }

        function renderHistoryCard() {
            const model = buildHistoryModel();
            elements.historyCopy.textContent = model.copy;
            if (elements.legendNote) {
                elements.legendNote.textContent = model.legendNote || 'Dotted guides mark count bands and window edges.';
            }
            renderHistoryChart(model);
            const latestSample = model.latestSample ?? null;
            if (elements.historyPulse) {
                elements.historyPulse.innerHTML = latestSample
                    ? [
                        ['Processes', latestSample.processCount, 'Current point for this face.', 'live'],
                        ['Listeners', latestSample.listenerCount, 'Current bound-port count for this face.', latestSample.listenerCount > 0 ? 'healthy' : 'live'],
                        ['Exposure', latestSample.suspiciousCount, 'Combined suspicious process and /public findings.', latestSample.suspiciousCount > 0 ? 'risk' : 'healthy'],
                        ['Sample time', formatRelativeTime(latestSample.ts), `Last point shown here landed at ${formatTime(latestSample.ts)}.`, 'warning']
                    ].map(([label, value, copy, tone]) => `
                        <div class="analyze-pulse-chip" data-tone="${escapeHtml(tone || 'live')}">
                            <div class="metric-label">${escapeHtml(label)}</div>
                            <div class="metric-value mt-3">${escapeHtml(value)}</div>
                            <div class="metric-copy mt-3">${escapeHtml(copy)}</div>
                        </div>
                    `).join('')
                    : `
                        <div class="analyze-pulse-chip" data-tone="live">
                            <div class="metric-label">History status</div>
                            <div class="metric-value mt-3">Waiting</div>
                            <div class="metric-copy mt-3">This panel will show current values once the first sample arrives.</div>
                        </div>
                    `;
            }
            elements.historyGuide.innerHTML = (model.guideCards ?? []).map((card) => `
                <div class="analyze-guide-card" data-tone="${escapeHtml(card.tone || 'live')}">
                    <div class="metric-label">${escapeHtml(card.title)}</div>
                    <div class="metric-copy mt-3">${escapeHtml(card.body)}</div>
                </div>
            `).join('');
            elements.historySummary.innerHTML = (model.summaryCards ?? []).map(([label, value, copy, tone]) => `
                <article class="analyze-metric-card" data-tone="${escapeHtml(tone || 'live')}">
                    <div class="metric-label">${escapeHtml(label)}</div>
                    <div class="metric-value mt-3">${escapeHtml(value)}</div>
                    <div class="metric-copy mt-3">${escapeHtml(copy)}</div>
                </article>
            `).join('');

            document.querySelectorAll('[data-history-mode]').forEach((button) => {
                const active = button.dataset.historyMode === state.historyMode;
                button.classList.toggle('is-active', active);
                button.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
        }

        function renderSummary() {
            const summary = state.data?.summary;
            if (!summary) {
                return;
            }

            const collector = state.data?.meta?.collector ?? {};
            const assessment = state.data?.assessment ?? {};
            const suspiciousCount = Number(summary.suspiciousProcessCount ?? 0) + Number(summary.suspiciousFileCount ?? 0);
            const nodeTone = assessment.builderState === 'active'
                ? 'live'
                : ((summary.nodeProcessCount ?? 0) > 0 ? 'warning' : 'healthy');
            const cards = [
                ['App surface', summary.appProcessCount ?? summary.processCount, 'Processes tied to the workspace, tracked runtimes, or external Node/Bun tooling.', 'live'],
                ['Open ports', summary.listenerCount, 'Bound TCP or UDP listeners in the current visible set.', summary.listenerCount > 0 ? 'healthy' : 'live'],
                ['Node/Bun', summary.nodeProcessCount, assessment.builderState === 'active' ? 'Expected while building or serving.' : 'Should usually be quiet when the host is otherwise idle.', nodeTone],
                ['Exposure', suspiciousCount, suspiciousCount > 0 ? 'Combined suspicious runtime and /public findings to review.' : 'No suspicious runtime or served-root findings in the latest sample.', suspiciousCount > 0 ? 'risk' : 'healthy'],
                ['Tracked/builds', `${summary.liveTrackedServerCount} live / ${summary.siteBuildIssueCount} issues`, 'Tracked servers still alive, plus build states that are building or failed.', summary.siteBuildIssueCount > 0 ? 'warning' : ((summary.liveTrackedServerCount ?? 0) > 0 ? 'live' : 'healthy')],
                ['Memory', `${formatNumber(summary.totalWorkingSetMb, 1)} MB`, 'Combined working set across the visible process list.', 'live'],
                ['Collector pass', collectorModeLabel(collector?.mode), 'Backend collector strategy reported by the runtime endpoint.', latencyTone(collector?.durationMs)],
                ['Round trip', formatDurationMs(state.lastFetchMs), 'Client-side fetch plus parse time for the latest refresh.', latencyTone(state.lastFetchMs)]
            ];

            elements.summary.innerHTML = cards.map(([label, value, copy, tone]) => `
                <article class="analyze-metric-card" data-tone="${escapeHtml(tone || 'live')}">
                    <div class="metric-label">${escapeHtml(label)}</div>
                    <div class="metric-value mt-3">${escapeHtml(value)}</div>
                    <div class="metric-copy mt-3">${escapeHtml(copy)}</div>
                </article>
            `).join('');
        }

        function renderFilters() {
            const counts = {
                all: (state.data?.processes ?? []).length,
                tracked: (state.data?.processes ?? []).filter((process) => process.scope === 'tracked').length,
                dev: (state.data?.processes ?? []).filter((process) => ['dev-server', 'php-server', 'apache-runtime', 'tracked-server'].includes(process.kind)).length,
                node: (state.data?.processes ?? []).filter((process) => ['dev-server', 'node-runtime', 'tracked-server'].includes(process.kind)).length,
                listeners: (state.data?.processes ?? []).filter((process) => (process.ports?.listen?.length ?? 0) > 0).length,
                suspicious: (state.data?.processes ?? []).filter((process) => process.risk !== 'low').length
            };

            elements.filters.innerHTML = filterDefs.map((filter) => `
                <button
                    type="button"
                    class="analyze-filter-pill ${state.filter === filter.id ? 'is-active' : ''}"
                    data-filter="${escapeHtml(filter.id)}"
                >
                    ${escapeHtml(filter.label)} · ${counts[filter.id] ?? 0}
                </button>
            `).join('');

            elements.filters.querySelectorAll('[data-filter]').forEach((button) => {
                button.addEventListener('click', () => {
                    state.filter = button.dataset.filter || 'all';
                    renderProcesses();
                    renderFilters();
                });
            });
        }

        function renderProcesses() {
            const processes = filteredProcesses();
            const selected = selectedProcess();
            if (!state.selectedPid && selected) {
                state.selectedPid = selected.pid;
            }

            if (!processes.length) {
                elements.rows.innerHTML = '<tr><td colspan="6" class="analyze-empty">No processes match the current filter.</td></tr>';
                renderSelected();
                return;
            }

            elements.rows.innerHTML = processes.map((process) => `
                <tr class="analyze-row ${process.pid === state.selectedPid ? 'is-selected' : ''}" data-pid="${process.pid}">
                    <td>
                        <div class="shell-strong">${escapeHtml(process.displayName)}</div>
                        <div class="analyze-code mt-2">PID ${process.pid} · ${escapeHtml(process.kind)} · ${escapeHtml(process.scope)}</div>
                        <div class="analyze-code mt-2">${(process.matchedRoots ?? []).length ? escapeHtml((process.matchedRoots ?? []).join(' | ')) : 'No /public or /data alias match'}</div>
                    </td>
                    <td>
                        ${(process.ports?.summary?.length ?? 0)
                            ? process.ports.summary.map((port) => `<span class="analyze-port-badge">${escapeHtml(port)}</span>`).join(' ')
                            : '<span class="analyze-code">No listeners</span>'}
                    </td>
                    <td class="analyze-code">${escapeHtml(formatMemory(process.workingSetMb))}</td>
                    <td class="analyze-code">${escapeHtml(formatCpu(process.cpuSeconds))}</td>
                    <td>
                        <span class="analyze-badge ${riskClass(process.risk)}">${escapeHtml(process.risk)}</span>
                    </td>
                    <td>
                        <button
                            type="button"
                            class="ghost-button analyze-kill"
                            data-kill-pid="${process.pid}"
                            ${!canKill || !process.killable ? 'disabled' : ''}
                            title="${escapeHtml(process.killGuard || 'Terminate this process')}"
                        >
                            Kill
                        </button>
                    </td>
                </tr>
            `).join('');

            elements.rows.querySelectorAll('[data-pid]').forEach((row) => {
                row.addEventListener('click', () => {
                    state.selectedPid = Number(row.dataset.pid);
                    renderProcesses();
                    renderSelected();
                });
            });

            elements.rows.querySelectorAll('[data-kill-pid]').forEach((button) => {
                button.addEventListener('click', async (event) => {
                    event.stopPropagation();
                    const pid = Number(button.dataset.killPid);
                    await killProcess(pid);
                });
            });

            renderSelected();
        }

        function renderSelected() {
            const process = selectedProcess();
            if (!process) {
                elements.selectedProcess.innerHTML = '<div class="analyze-selected-pane">No process is currently selected.</div>';
                return;
            }

            state.selectedPid = process.pid;

            const roots = (process.matchedRoots ?? []).length
                ? (process.matchedRoots ?? []).map((rootName) => `<span class="analyze-port-badge">${escapeHtml(rootName)}</span>`).join(' ')
                : '<span class="analyze-code">No workspace roots matched.</span>';
            const listeners = (process.ports?.summary ?? []).length
                ? process.ports.summary.map((port) => `<span class="analyze-port-badge">${escapeHtml(port)}</span>`).join(' ')
                : '<span class="analyze-code">No listeners bound by this process.</span>';
            const reasons = (process.riskReasons ?? []).length
                ? `${process.riskReasons.map((reason) => `<div class="analyze-code">${escapeHtml(reason)}</div>`).join('')}`
                : '<div class="analyze-code">No risk annotations.</div>';
            const tracked = process.trackedServer
                ? `
                    <div class="analyze-detail-section">
                        <div class="metric-label">Tracked record</div>
                        <div class="analyze-code mt-3">${escapeHtml(process.trackedServer.id || '')}</div>
                        <div class="analyze-code mt-2">${escapeHtml(process.trackedServer.url || 'No url')}</div>
                    </div>
                `
                : '';

            elements.selectedProcess.innerHTML = `
                <div class="analyze-selected-pane" data-risk="${escapeHtml(process.risk)}">
                    <div class="analyze-focus-head">
                        <div>
                            <div class="shell-strong">${escapeHtml(process.displayName)}</div>
                            <div class="analyze-code mt-2">PID ${process.pid} · Parent ${process.parentPid}</div>
                        </div>
                        <span class="analyze-badge ${riskClass(process.risk)}">${escapeHtml(process.risk)}</span>
                    </div>
                    <div class="analyze-focus-grid mt-4">
                        <div class="analyze-focus-stat">
                            <div class="metric-label">Kind</div>
                            <div class="analyze-code mt-3">${escapeHtml(process.kind)}</div>
                        </div>
                        <div class="analyze-focus-stat">
                            <div class="metric-label">Started</div>
                            <div class="analyze-code mt-3">${escapeHtml(formatTime(process.startedAt))}</div>
                        </div>
                        <div class="analyze-focus-stat">
                            <div class="metric-label">Memory</div>
                            <div class="analyze-code mt-3">${escapeHtml(formatMemory(process.workingSetMb))}</div>
                        </div>
                        <div class="analyze-focus-stat">
                            <div class="metric-label">CPU</div>
                            <div class="analyze-code mt-3">${escapeHtml(formatCpu(process.cpuSeconds))}</div>
                        </div>
                    </div>
                    <div class="analyze-detail-section">
                        <div class="metric-label">Listeners</div>
                        <div class="mt-3">${listeners}</div>
                    </div>
                    <div class="analyze-detail-section">
                        <div class="metric-label">Matched aliases</div>
                        <div class="mt-3">${roots}</div>
                    </div>
                    <div class="analyze-detail-section">
                        <div class="metric-label">Executable</div>
                        <div class="analyze-code mt-3">${escapeHtml(process.executablePath || 'Path unavailable')}</div>
                    </div>
                    <div class="analyze-detail-section">
                        <div class="metric-label">Command line</div>
                        <pre class="analyze-code mt-3">${escapeHtml(process.commandLine || 'Command line unavailable')}</pre>
                    </div>
                    <div class="analyze-detail-section">
                        <div class="metric-label">Handles and threads</div>
                        <div class="analyze-code mt-3">Handles: ${escapeHtml(process.handles)} · Threads: ${escapeHtml(process.threads)}</div>
                    </div>
                    ${tracked}
                    <div class="analyze-detail-section">
                        <div class="metric-label">Risk notes</div>
                        <div class="mt-3">${reasons}</div>
                    </div>
                </div>
            `;
        }

        function renderListeners() {
            const listeners = state.data?.listeners ?? [];
            if (!listeners.length) {
                elements.listenerList.innerHTML = '<div class="analyze-list-card">No listeners detected in the current runtime set.</div>';
                return;
            }

            elements.listenerList.innerHTML = listeners.map((listener) => `
                <div class="analyze-list-card">
                    <div class="analyze-panel-head">
                        <div class="shell-strong">${escapeHtml(listener.name)}</div>
                        <span class="analyze-badge ${riskClass(listener.risk)}">${escapeHtml(listener.risk)}</span>
                    </div>
                    <div class="analyze-code mt-3">${escapeHtml(listener.protocol.toUpperCase())} ${escapeHtml(listener.localAddress)}:${escapeHtml(listener.localPort)}</div>
                    <div class="analyze-code mt-2">PID ${escapeHtml(listener.pid)} · ${escapeHtml(listener.kind)} · ${escapeHtml(listener.state || 'listening')}</div>
                </div>
            `).join('');
        }

        function renderActivity() {
            if (!state.events.length) {
                elements.activity.innerHTML = '<div class="analyze-activity-card">The activity stream will populate as snapshots change over time.</div>';
                return;
            }

            elements.activity.innerHTML = state.events.map((event) => `
                <div class="analyze-activity-card" data-level="${escapeHtml(event.level)}">
                    <div class="analyze-panel-head">
                        <div class="shell-strong">${escapeHtml(event.title)}</div>
                        <span class="analyze-badge ${riskClass(event.level)}">${escapeHtml(event.level)}</span>
                    </div>
                    <div class="analyze-code mt-3">${escapeHtml(event.detail)}</div>
                    <div class="analyze-code mt-2">${escapeHtml(formatRelativeTime(event.at))} · ${escapeHtml(formatTime(event.at))}</div>
                </div>
            `).join('');
        }

        function renderDocroot() {
            const entries = state.data?.docroot?.suspiciousFiles ?? [];
            if (!entries.length) {
                elements.docroot.innerHTML = '<div class="analyze-list-card">No suspicious document-root artifacts were detected in the current scan depth.</div>';
                return;
            }

            elements.docroot.innerHTML = entries.map((entry) => `
                <div class="analyze-list-card">
                    <div class="analyze-panel-head">
                        <div class="shell-strong">${escapeHtml(entry.relativePath)}</div>
                        <span class="analyze-badge ${riskClass(entry.risk)}">${escapeHtml(entry.risk)}</span>
                    </div>
                    <div class="analyze-code mt-3">${escapeHtml(entry.path)}</div>
                    <div class="analyze-code mt-2">${(entry.reasons ?? []).map((reason) => escapeHtml(reason)).join(' ')}</div>
                </div>
            `).join('');
        }

        function renderRuntimeSidecar() {
            const tracked = state.data?.trackedServers ?? [];
            const builds = state.data?.siteBuilds ?? [];
            const topMemory = [...(state.data?.processes ?? [])]
                .sort((left, right) => Number(right.workingSetMb ?? 0) - Number(left.workingSetMb ?? 0))
                .slice(0, 5);

            const trackedMarkup = tracked.length
                ? tracked.map((server) => `
                    <div class="analyze-sidecar-card">
                        <div class="analyze-panel-head">
                            <div class="shell-strong">${escapeHtml(server.id || 'tracked-server')}</div>
                            <span class="analyze-badge ${server.alive ? 'is-low' : 'is-medium'}">${server.alive ? 'alive' : 'missing'}</span>
                        </div>
                        <div class="analyze-code mt-3">PID ${escapeHtml(server.pid)} · ${escapeHtml(server.url || 'no url')}</div>
                        <div class="analyze-code mt-2">${escapeHtml(server.workspaceDir || '')}</div>
                    </div>
                `).join('')
                : '<div class="analyze-sidecar-card">No tracked server records were found.</div>';

            const buildMarkup = builds.length
                ? builds.map((build) => `
                    <div class="analyze-sidecar-card">
                        <div class="analyze-panel-head">
                            <div class="shell-strong">${escapeHtml(build.environment)}</div>
                            <span class="analyze-badge ${riskClass(build.status === 'failed' ? 'high' : build.status === 'building' ? 'medium' : 'low')}">${escapeHtml(build.status)}</span>
                        </div>
                        <div class="analyze-code mt-3">${escapeHtml(build.tool || 'unknown')}</div>
                        <div class="analyze-code mt-2">${escapeHtml(formatTime(build.updatedAt))}</div>
                    </div>
                `).join('')
                : '<div class="analyze-sidecar-card">No site build status files are present yet.</div>';

            const memoryMarkup = topMemory.length
                ? topMemory.map((process) => `
                    <div class="analyze-sidecar-card">
                        <div class="analyze-panel-head">
                            <div class="shell-strong">${escapeHtml(process.displayName)}</div>
                            <span class="analyze-port-badge">${escapeHtml(formatMemory(process.workingSetMb))}</span>
                        </div>
                        <div class="analyze-code mt-3">PID ${escapeHtml(process.pid)} · ${escapeHtml(process.kind)}</div>
                    </div>
                `).join('')
                : '<div class="analyze-sidecar-card">No process memory data available.</div>';

            elements.runtimeSidecar.innerHTML = `
                <div class="analyze-section-stack">
                    <div class="analyze-section-heading">
                        <div class="section-label">Tracked servers</div>
                        <div class="analyze-section-subcopy">Records registered by the app and whether the backing PID is still alive.</div>
                    </div>
                    ${trackedMarkup}
                </div>
                <div class="analyze-section-stack">
                    <div class="analyze-section-heading">
                        <div class="section-label">Site builds</div>
                        <div class="analyze-section-subcopy">Build status files found under /data/runtime/site-builds.</div>
                    </div>
                    ${buildMarkup}
                </div>
                <div class="analyze-section-stack">
                    <div class="analyze-section-heading">
                        <div class="section-label">Largest footprints</div>
                        <div class="analyze-section-subcopy">Top visible processes by current working set.</div>
                    </div>
                    ${memoryMarkup}
                </div>
            `;
        }

        function renderSlowLogs() {
            const slowLogs = state.data?.slowLogs ?? [];
            if (!slowLogs.length) {
                elements.slowlogs.innerHTML = '<div class="analyze-slow-card">No slow requests have been recorded since timing probes were enabled.</div>';
                return;
            }

            elements.slowlogs.innerHTML = slowLogs.map((log) => `
                <div class="analyze-slow-card">
                    <div class="analyze-panel-head">
                        <div class="shell-strong">${escapeHtml(log.method)} ${escapeHtml(log.uri)}</div>
                        <span class="analyze-port-badge is-high">${escapeHtml(formatNumber(log.totalMs, 1))} ms</span>
                    </div>
                    <div class="analyze-code mt-3">${escapeHtml(formatRelativeTime(log.time))} · ${escapeHtml(formatTime(log.time))}</div>
                    <div class="analyze-code mt-2">${Object.entries(log.durations ?? {}).map(([key, value]) => `${escapeHtml(key)}: ${escapeHtml(formatNumber(value, 1))} ms`).join(' · ')}</div>
                </div>
            `).join('');
        }

        function renderAll() {
            renderErrors();
            renderHeroSignals();
            renderHost();
            renderHistoryCard();
            renderSummary();
            renderFilters();
            renderProcesses();
            renderListeners();
            renderActivity();
            renderDocroot();
            renderRuntimeSidecar();
            renderSlowLogs();
        }

        async function fetchSnapshot(force = false) {
            if (!runtimeEndpoint || state.loading) {
                return;
            }

            if (!force && (document.hidden || state.pausedForVisibility)) {
                return;
            }

            state.loading = true;
            elements.refresh.disabled = true;
            elements.refresh.textContent = 'Refreshing...';
            const fetchStartedAt = performance.now();

            try {
                const url = force ? `${runtimeEndpoint}?force=1` : runtimeEndpoint;
                const response = await fetch(url, { headers: { Accept: 'application/json' } });
                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(text || `Runtime monitor request failed (${response.status})`);
                }

                state.data = await response.json();
                state.lastFetchMs = performance.now() - fetchStartedAt;
                pushHistory(state.data);
                pushActivity(state.data);

                if (!selectedProcess() && (state.data.processes?.length ?? 0) > 0) {
                    state.selectedPid = state.data.processes[0].pid;
                }

                renderAll();
            } catch (error) {
                elements.errors.innerHTML = `
                    <div class="analyze-alert">
                        <strong>Runtime monitor error:</strong> ${escapeHtml(error instanceof Error ? error.message : String(error))}
                    </div>
                `;
            } finally {
                state.loading = false;
                elements.refresh.disabled = false;
                elements.refresh.textContent = 'Refresh now';
            }
        }

        async function exportArchive() {
            if (!exportEndpoint || state.exporting) {
                return;
            }

            state.exporting = true;
            elements.export.disabled = true;
            elements.export.textContent = 'Exporting...';
            elements.statusLine.textContent = 'Building 24 hour export...';

            try {
                const response = await fetch(exportEndpoint, {
                    headers: {
                        Accept: 'application/json'
                    }
                });

                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(text || `Export request failed (${response.status})`);
                }

                const disposition = response.headers.get('Content-Disposition') || '';
                const filenameMatch = disposition.match(/filename="?([^"]+)"?/i);
                const filename = filenameMatch?.[1] || `efsdb-analyze-24h-${new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-')}.json`;
                const blob = await response.blob();
                const downloadUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.URL.revokeObjectURL(downloadUrl);

                const sampleCount = Number(state.data?.historyWindow?.sampleCount ?? 0);
                elements.statusLine.textContent = sampleCount > 0
                    ? `Exported ${sampleCount} persisted sample${sampleCount === 1 ? '' : 's'} for review`
                    : 'Exported the current runtime snapshot';
            } catch (error) {
                elements.errors.innerHTML = `
                    <div class="analyze-alert">
                        <strong>Archive export failed:</strong> ${escapeHtml(error instanceof Error ? error.message : String(error))}
                    </div>
                `;
            } finally {
                state.exporting = false;
                elements.export.disabled = false;
                elements.export.textContent = 'Export 24h JSON';
            }
        }

        async function killProcess(pid) {
            const process = (state.data?.processes ?? []).find((candidate) => candidate.pid === pid);
            if (!process || !process.killable || !canKill) {
                return;
            }

            const confirmed = window.confirm(`Terminate ${process.displayName} (PID ${process.pid})?`);
            if (!confirmed) {
                return;
            }

            try {
                const response = await fetch(killEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({ pid })
                });

                const payload = await response.json();
                if (!response.ok) {
                    throw new Error(payload?.error?.message || 'Kill request failed.');
                }

                await fetchSnapshot(true);
            } catch (error) {
                elements.errors.innerHTML = `
                    <div class="analyze-alert">
                        <strong>Kill request failed:</strong> ${escapeHtml(error instanceof Error ? error.message : String(error))}
                    </div>
                `;
            }
        }

        function scheduleAutoRefresh() {
            if (state.timer) {
                window.clearInterval(state.timer);
                state.timer = null;
            }

            if (!state.autoRefresh) {
                return;
            }

            state.timer = window.setInterval(() => {
                if (document.hidden) {
                    state.pausedForVisibility = true;
                    renderHost();
                    return;
                }
                state.pausedForVisibility = false;
                fetchSnapshot(false);
            }, state.refreshMs);
        }

        elements.refresh.addEventListener('click', () => fetchSnapshot(true));
        elements.export.addEventListener('click', () => exportArchive());
        elements.autoRefresh.addEventListener('change', () => {
            state.autoRefresh = elements.autoRefresh.checked;
            scheduleAutoRefresh();
            renderHost();
        });
        elements.refreshInterval.addEventListener('change', () => {
            state.refreshMs = Number(elements.refreshInterval.value || '5000');
            scheduleAutoRefresh();
            renderHost();
        });
        elements.search.addEventListener('input', () => {
            state.search = elements.search.value;
            renderProcesses();
        });
        document.querySelectorAll('[data-history-mode]').forEach((button) => {
            button.addEventListener('click', () => {
                state.historyMode = button.dataset.historyMode === 'archive' ? 'archive' : 'live';
                renderHistoryCard();
            });
        });
        document.addEventListener('visibilitychange', () => {
            state.pausedForVisibility = document.hidden && state.autoRefresh;
            if (!document.hidden && state.autoRefresh) {
                fetchSnapshot(false);
            }
            if (state.data) {
                renderHost();
            }
        });

        scheduleAutoRefresh();
        fetchSnapshot(true);
    })();
</script>
