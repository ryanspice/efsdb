<?php
require_once __DIR__ . '/../../src/PublicWorkspace.php';

$workspace = $app->getPublicWorkspace();

$env = $_GET['env'] ?? 'staging';
if (!in_array($env, ['staging', 'production'], true)) {
    $env = 'staging';
}

$routesPath = "site/$env/routes";

/**
 * @param string $relativePath
 */
function efsdb_route_display_path(string $relativePath): string
{
    $relativePath = trim(str_replace('\\', '/', $relativePath), '/');
    if (!str_starts_with($relativePath, 'routes/')) {
        return '/';
    }

    $routePath = substr($relativePath, strlen('routes/'));
    foreach (['/index.php', '/index.html', '/index.htm'] as $indexSuffix) {
        if (str_ends_with($routePath, $indexSuffix)) {
            $routePath = substr($routePath, 0, -strlen($indexSuffix));
            $routePath = trim((string)$routePath, '/');
            return $routePath === '' ? '/' : '/' . $routePath;
        }
    }

    if (in_array($routePath, ['index.php', 'index.html', 'index.htm'], true)) {
        return '/';
    }

    foreach (['.php', '.html', '.htm'] as $suffix) {
        if (str_ends_with(strtolower($routePath), $suffix)) {
            $routePath = substr($routePath, 0, -strlen($suffix));
            break;
        }
    }

    $routePath = trim((string)$routePath, '/');
    return $routePath === '' ? '/' : '/' . $routePath;
}

/**
 * @param string $routePath
 */
function efsdb_route_card_label(string $routePath, bool $isStarter): string
{
    if ($isStarter) {
        return 'Starter Homepage';
    }

    if ($routePath === '/') {
        return 'Homepage';
    }

    if (str_contains($routePath, '[') && str_contains($routePath, ']')) {
        return 'Dynamic Route';
    }

    if (str_ends_with($routePath, '.xml')) {
        return 'Feed or Document Route';
    }

    return 'Published Route';
}

/**
 * @param array<string, mixed> $route
 */
function efsdb_route_preview_copy(array $route): string
{
    if (($route['isStarter'] ?? false) === true) {
        return 'Starter homepage placeholder. You can replace it here or retarget another route to / without hand-authoring index.php.';
    }

    if (($route['isHomepage'] ?? false) === true) {
        return 'This route currently handles the root URL. Use the pop out editor when you want to replace the homepage target in place.';
    }

    if (($route['isDynamic'] ?? false) === true) {
        return 'This route contains dynamic parameters. Opening the preview will ask for sample values before navigation.';
    }

    if (($route['sourceLabel'] ?? '') !== ($route['relativePath'] ?? '')) {
        return 'This published route is backed by a component-oriented source instead of a plain natural route file.';
    }

    return 'This route is backed by a natural file in the current environment and can be retargeted without leaving this page.';
}

/**
 * @param string $relativePath
 */
function efsdb_route_target_file(string $relativePath): string
{
    return trim(str_replace('\\', '/', $relativePath), '/');
}

$routes = [];
foreach ($workspace->listRoutePaths($env) as $relativePath) {
    $extension = strtolower(pathinfo($relativePath, PATHINFO_EXTENSION));
    if (!in_array($extension, ['php', 'html', 'htm'], true)) {
        continue;
    }

    $route = $workspace->readSiteFile($env, $relativePath, false, true);
    if ($route === null) {
        continue;
    }

    $manifest = is_array($route['manifest'] ?? null) ? $route['manifest'] : [];
    $bytes = (string)($route['bytes'] ?? '');
    $logicalPath = $workspace->siteLogicalPath($env, $relativePath);
    $routePath = efsdb_route_display_path($relativePath);
    $previewUrl = PublicWorkspace::previewUrlForLogicalPath($logicalPath);
    $isStarter = str_contains($bytes, 'EFSDB Homepage Placeholder Route');
    $isNominatedRoute = str_contains($bytes, 'Nominated Route for');
    $isDynamic = str_contains($routePath, '[') && str_contains($routePath, ']');
    $sourceLabel = efsdb_route_target_file($relativePath);
    $displayType = strtoupper($extension);

    if ($isStarter) {
        $sourceLabel = 'components/homepage-placeholder.php';
        $displayType = 'Starter';
    } elseif (
        str_contains($bytes, 'data-sveltekit-preload-data')
        || str_contains($bytes, 'Nominated Route for sveltekit')
        || $isNominatedRoute
    ) {
        $displayType = 'SvelteKit';
        if (preg_match('#components/([^/\'"]+)#', $bytes, $matches)) {
            $sourceLabel = 'components/' . $matches[1];
        } else {
            $sourceLabel = 'components/sveltekit';
        }
    }

    $routes[] = [
        'name' => basename($relativePath),
        'relativePath' => $relativePath,
        'logicalPath' => $logicalPath,
        'routePath' => $routePath,
        'previewUrl' => $previewUrl,
        'sourceLabel' => $sourceLabel,
        'displayType' => $displayType,
        'updatedAt' => isset($manifest['mtime']) ? (string)$manifest['mtime'] : '',
        'updatedLabel' => isset($manifest['mtime']) ? date('M j, Y H:i', strtotime((string)$manifest['mtime'])) : '-',
        'visibility' => ucfirst((string)($manifest['indexes']['visibility'] ?? 'restricted')),
        'isHomepage' => $routePath === '/',
        'isStarter' => $isStarter,
        'isDynamic' => $isDynamic,
        'isNominatedRoute' => $isNominatedRoute,
        'size' => (int)($manifest['size'] ?? 0),
        'summaryLabel' => efsdb_route_card_label($routePath, $isStarter),
    ];
}

usort($routes, static function (array $left, array $right): int {
    if (($left['isHomepage'] ?? false) !== ($right['isHomepage'] ?? false)) {
        return ($left['isHomepage'] ?? false) ? -1 : 1;
    }

    if (($left['isStarter'] ?? false) !== ($right['isStarter'] ?? false)) {
        return ($left['isStarter'] ?? false) ? -1 : 1;
    }

    return strcasecmp((string)($left['routePath'] ?? ''), (string)($right['routePath'] ?? ''));
});

$routeCount = count($routes);
$homepageRoute = null;
$dynamicCount = 0;
$starterComponentPath = null;
$starterRouteLogicalPath = null;
foreach ($routes as $route) {
    if (($route['isDynamic'] ?? false) === true) {
        $dynamicCount++;
    }
    if (($route['isHomepage'] ?? false) === true && $homepageRoute === null) {
        $homepageRoute = $route;
    }
    if (($route['isStarter'] ?? false) === true) {
        $starterComponentPath = "site/$env/components/homepage-placeholder.php";
        $starterRouteLogicalPath = (string)$route['logicalPath'];
    }
}

$initialSelectedRoute = $homepageRoute ?? ($routes[0] ?? null);
$initialSelectedLogicalPath = is_array($initialSelectedRoute) ? (string)($initialSelectedRoute['logicalPath'] ?? '') : '';

$routeClientPayload = array_map(static function (array $route): array {
    return [
        'name' => (string)$route['name'],
        'relativePath' => (string)$route['relativePath'],
        'logicalPath' => (string)$route['logicalPath'],
        'routePath' => (string)$route['routePath'],
        'previewUrl' => $route['previewUrl'],
        'sourceLabel' => (string)$route['sourceLabel'],
        'displayType' => (string)$route['displayType'],
        'updatedLabel' => (string)$route['updatedLabel'],
        'visibility' => (string)$route['visibility'],
        'isHomepage' => (bool)$route['isHomepage'],
        'isStarter' => (bool)$route['isStarter'],
        'isDynamic' => (bool)$route['isDynamic'],
        'summaryLabel' => (string)$route['summaryLabel'],
    ];
}, $routes);
?>

<section class="space-y-6">
    <section class="shell-panel route-hero p-5 sm:p-7">
        <div class="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
            <div class="max-w-4xl">
                <div class="section-label">Routes Workspace</div>
                <h1 class="shell-strong mt-4 max-w-[16ch] text-3xl font-semibold sm:text-4xl">
                    Author Routes
                </h1>
                <p class="shell-copy mt-4 max-w-3xl text-[0.94rem] leading-8">
                    Manage the entry points and page handlers for your site. The table stays in place, and the route editor popover lets you rename a URL or replace the homepage without leaving this page.
                </p>
            </div>

            <div class="flex flex-wrap gap-3 xl:max-w-[30rem] xl:justify-end">
                <div class="surface-panel py-2 px-3 flex items-center gap-3">
                    <span class="text-sm font-medium text-[var(--shell-muted)]">Environment:</span>
                    <select onchange="window.location.href='<?php echo efsdb_control_plane_path('routes'); ?>?env='+this.value" class="bg-transparent text-[var(--shell-text)] font-semibold border-none focus:ring-0 outline-none cursor-pointer">
                        <option value="staging" <?php echo $env === 'staging' ? 'selected' : ''; ?>>Staging</option>
                        <option value="production" <?php echo $env === 'production' ? 'selected' : ''; ?>>Production</option>
                    </select>
                </div>
                <a class="pill-button" href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode($routesPath); ?>">
                    Open Builder
                </a>
                <a class="ghost-button" href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=<?php echo urlencode($routesPath); ?>" title="Inspect raw files in Explorer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                    </svg>
                </a>
            </div>
        </div>

        <div class="route-hero__metrics mt-8">
            <article class="metric-card route-hero__metric">
                <div class="metric-label">Homepage</div>
                <div class="metric-value"><?php echo $homepageRoute !== null ? htmlspecialchars((string)$homepageRoute['routePath']) : '/'; ?></div>
                <div class="metric-copy">
                    <?php if ($homepageRoute === null): ?>
                        No root route was found, so the starter homepage will be provisioned automatically.
                    <?php elseif (($homepageRoute['isStarter'] ?? false) === true): ?>
                        The homepage is still using the default starter route and can be replaced from this page.
                    <?php else: ?>
                        The homepage is already assigned to a real route and can be retargeted without leaving this page.
                    <?php endif; ?>
                </div>
            </article>
            <article class="metric-card route-hero__metric">
                <div class="metric-label">Route Count</div>
                <div class="metric-value"><?php echo htmlspecialchars((string)$routeCount); ?></div>
                <div class="metric-copy">Every listed route is backed by a real file in <code><?php echo htmlspecialchars($routesPath); ?></code>.</div>
            </article>
            <article class="metric-card route-hero__metric">
                <div class="metric-label">Dynamic Paths</div>
                <div class="metric-value"><?php echo htmlspecialchars((string)$dynamicCount); ?></div>
                <div class="metric-copy">Dynamic routes still open through the preview parameter popover before navigation.</div>
            </article>
        </div>
    </section>

    <div id="route-workspace-layout" class="workspace-layout items-start mt-6">
        <div class="space-y-6 min-w-0">
            <article class="table-card route-table-card">
                <div class="flex flex-col gap-3 mb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 class="page-title text-xl">Active Routes (<?php echo htmlspecialchars((string)$routeCount); ?>)</h2>
                        <p class="mt-2 text-sm text-[var(--shell-muted)] max-w-2xl">
                            Select a route to inspect it in the preview. The pop out editor stays available when you want to rename a URL in place, including replacing the homepage by saving to <code>/</code>.
                        </p>
                    </div>
                    <div class="flex flex-col items-end gap-3">
                        <div class="text-sm text-[var(--shell-muted)]">Path: <code><?php echo htmlspecialchars($routesPath); ?></code></div>
                        <div class="flex items-center gap-1 bg-[var(--shell-inset-bg)] p-1 rounded-lg border border-[var(--shell-border)]">
                            <button class="p-1.5 rounded-md text-[var(--shell-muted)] hover:text-[var(--shell-text)] hover:bg-[var(--shell-panel-bg)] transition-colors data-[active=true]:bg-[var(--shell-panel-bg)] data-[active=true]:text-[var(--shell-text)] data-[active=true]:shadow-sm" data-layout-toggle="left" data-tooltip="Sidebar Left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2" />
                                    <path d="M9 3v18" />
                                </svg>
                            </button>
                            <button class="p-1.5 rounded-md text-[var(--shell-muted)] hover:text-[var(--shell-text)] hover:bg-[var(--shell-panel-bg)] transition-colors data-[active=true]:bg-[var(--shell-panel-bg)] data-[active=true]:text-[var(--shell-text)] data-[active=true]:shadow-sm" data-layout-toggle="right" data-tooltip="Sidebar Right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2" />
                                    <path d="M15 3v18" />
                                </svg>
                            </button>
                            <button class="p-1.5 rounded-md text-[var(--shell-muted)] hover:text-[var(--shell-text)] hover:bg-[var(--shell-panel-bg)] transition-colors data-[active=true]:bg-[var(--shell-panel-bg)] data-[active=true]:text-[var(--shell-text)] data-[active=true]:shadow-sm" data-layout-toggle="top" data-tooltip="Sidebar Top">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2" />
                                    <path d="M3 9h18" />
                                </svg>
                            </button>
                            <button class="p-1.5 rounded-md text-[var(--shell-muted)] hover:text-[var(--shell-text)] hover:bg-[var(--shell-panel-bg)] transition-colors data-[active=true]:bg-[var(--shell-panel-bg)] data-[active=true]:text-[var(--shell-text)] data-[active=true]:shadow-sm" data-layout-toggle="bottom" data-tooltip="Sidebar Bottom">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2" />
                                    <path d="M3 15h18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <?php if ($routeCount === 0): ?>
                    <div class="surface-panel flex flex-col items-center justify-center py-12 text-center">
                        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--shell-inset-bg)] text-[var(--shell-muted)] mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m18 16 4-4-4-4" />
                                <path d="m6 8-4 4 4 4" />
                                <path d="m14.5 4-5 16" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-medium text-[var(--shell-text-strong)] mb-2">No routes found</h3>
                        <p class="text-[var(--shell-muted)] max-w-md mb-6">
                            This environment currently has no active routes. Open Builder to create a new route file and it will appear here automatically.
                        </p>
                        <a class="ghost-button" href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode($routesPath); ?>">
                            Open in Builder
                        </a>
                    </div>
                <?php else: ?>
                    <div class="flex flex-col gap-3">
                        <!-- Desktop Header -->
                        <div class="hidden sm:flex items-center px-4 pb-2 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">
                            <div class="flex-1">Route</div>
                            <div class="w-48 px-4">Source</div>
                            <div class="w-32 px-4">Status</div>
                            <div class="w-32 px-4">Modified</div>
                            <div class="w-auto pl-4 text-right">Actions</div>
                        </div>

                        <!-- Rows -->
                        <div class="flex flex-col gap-2">
                            <?php foreach ($routes as $route): ?>
                                <?php
                                $rowClasses = ['group/row flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-[var(--shell-border)] bg-[var(--shell-panel-bg)] p-4 hover:border-[var(--shell-border-strong)] transition-colors cursor-pointer outline-none focus:ring-2 focus:ring-[var(--accent)]'];
                                if (($route['isHomepage'] ?? false) === true) {
                                    $rowClasses[] = 'border-[var(--accent)] border-opacity-30';
                                }
                                if ((string)$route['logicalPath'] === $initialSelectedLogicalPath) {
                                    $rowClasses[] = 'ring-2 ring-[var(--accent)] ring-opacity-50';
                                }
                                ?>
                                <div
                                    class="<?php echo htmlspecialchars(implode(' ', $rowClasses)); ?>"
                                    data-route-row="<?php echo htmlspecialchars((string)$route['logicalPath']); ?>"
                                    aria-selected="<?php echo (string)$route['logicalPath'] === $initialSelectedLogicalPath ? 'true' : 'false'; ?>"
                                    tabindex="0">

                                    <!-- Route Column -->
                                    <div class="flex items-center gap-3 flex-1 min-w-0">
                                        <div class="text-[var(--shell-muted)] opacity-70 shrink-0">
                                            <?php if (str_contains(strtolower((string)$route['sourceLabel']), 'svelte')): ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-26 0 308 308" preserveAspectRatio="xMidYMid">
                                                    <g>
                                                        <path d="M239.681566,40.706757 C211.113272,-0.181889366 154.69089,-12.301439 113.894816,13.6910393 L42.2469062,59.3555354 C22.6760042,71.6680028 9.1958152,91.6538543 5.11196889,114.412133 C1.69420521,133.371174 4.6982178,152.928576 13.6483951,169.987905 C7.51549676,179.291145 3.33259428,189.7413 1.3524912,200.706787 C-2.77083771,223.902098 2.62286977,247.780539 16.3159596,266.951444 C44.8902975,307.843936 101.312954,319.958266 142.10271,293.967161 L213.75062,248.302665 C233.322905,235.991626 246.803553,216.005094 250.885557,193.246067 C254.302867,174.287249 251.30121,154.730228 242.355449,137.668922 C248.486748,128.365895 252.667894,117.916162 254.646134,106.951413 C258.772188,83.7560394 253.378243,59.8765465 239.682665,40.706757" fill="#FF3E00"></path>
                                                        <path d="M106.888658,270.841265 C83.7871855,276.848065 59.3915045,267.805346 45.7864111,248.192566 C37.5477583,236.66102 34.3023491,222.296573 36.7830958,208.343155 C37.1989333,206.075414 37.7711933,203.839165 38.4957755,201.650433 L39.845476,197.534835 L43.5173097,200.231763 C51.9971301,206.462491 61.4784803,211.199728 71.5527203,214.239302 L74.2164003,215.047419 L73.9710252,217.705878 C73.6455499,221.487851 74.6696022,225.262925 76.8616703,228.361972 C80.9560313,234.269749 88.3011363,236.995968 95.2584831,235.190159 C96.8160691,234.773852 98.3006859,234.121384 99.6606718,233.25546 L171.331634,187.582718 C174.877468,185.349963 177.321139,181.729229 178.065299,177.605596 C178.808171,173.400048 177.830501,169.072361 175.351884,165.594581 C171.255076,159.685578 163.908134,156.9582 156.947927,158.762547 C155.392392,159.178888 153.90975,159.83088 152.551509,160.695872 L125.202489,178.130144 C120.705281,180.989558 115.797437,183.144784 110.64897,184.521162 C87.547692,190.527609 63.1523949,181.484801 49.5475471,161.872188 C41.3085624,150.340895 38.0631179,135.976391 40.5442317,122.023052 C43.0002744,108.333716 51.1099574,96.3125326 62.8835328,88.9089537 L134.548175,43.2323647 C139.047294,40.3682559 143.958644,38.21032 149.111311,36.8336525 C172.21244,30.8273594 196.607527,39.8700206 210.212459,59.4823515 C218.451112,71.013898 221.696522,85.3783452 219.215775,99.3317627 C218.798144,101.59911 218.225915,103.835236 217.503095,106.024485 L216.153395,110.140083 L212.483484,107.447276 C204.004261,101.212984 194.522,96.4735732 184.44615,93.4336926 L181.78247,92.6253012 L182.027845,89.9668419 C182.350522,86.1852063 181.326723,82.4111645 179.1372,79.3110228 C175.042839,73.4032457 167.697734,70.677026 160.740387,72.4828355 C159.182801,72.8991426 157.698185,73.5516104 156.338199,74.4175344 L84.6672364,120.0922 C81.1218886,122.323199 78.6795938,125.943704 77.9387928,130.066574 C77.1913232,134.271925 78.1673502,138.601163 80.6469865,142.078963 C84.7438467,147.987899 92.0907405,150.71526 99.0509435,148.910997 C100.608143,148.493836 102.092543,147.841423 103.452857,146.976298 L130.798305,129.548621 C135.293566,126.685437 140.201191,124.528302 145.350175,123.152382 C168.451453,117.145935 192.846751,126.188743 206.451598,145.801356 C214.690583,157.332649 217.936027,171.697153 215.454914,185.650492 C212.997261,199.340539 204.888162,211.362752 193.115613,218.769811 L121.450695,264.442553 C116.951576,267.306662 112.040226,269.464598 106.887559,270.841265" fill="#FFFFFF"></path>
                                                    </g>
                                                </svg>
                                            <?php elseif (str_contains(strtolower((string)$route['sourceLabel']), 'react')): ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="#61dafb" stroke-width="1.5" class="text-[#61dafb]">
                                                    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                                                    <g stroke="#61dafb">
                                                        <ellipse rx="11" ry="4.2" />
                                                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                                    </g>
                                                </svg>
                                            <?php elseif (str_contains(strtolower((string)$route['sourceLabel']), 'angular')): ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 250 250" fill="none" class="text-[#dd0031]">
                                                    <path d="M125 10L20 45L35 180L125 240L215 180L230 45L125 10Z" fill="#dd0031" stroke="none" />
                                                    <path d="M125 30L200 170H160L145 130H105L90 170H50L125 30Z" fill="white" stroke="none" />
                                                    <path d="M125 60L105 110H145L125 60Z" fill="#dd0031" stroke="none" />
                                                </svg>
                                            <?php else: ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                    <polyline points="14 2 14 8 20 8" />
                                                </svg>
                                            <?php endif; ?>
                                        </div>
                                        <div class="min-w-0 flex-1">
                                            <div class="flex items-center gap-2 flex-wrap">
                                                <code class="text-sm font-medium text-[var(--shell-text-strong)] truncate block" title="<?php echo htmlspecialchars((string)$route['routePath']); ?>"><?php echo htmlspecialchars((string)$route['routePath']); ?></code>
                                                <?php if (($route['isHomepage'] ?? false) === true): ?>
                                                    <span class="tag text-[10px] py-0.5 px-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Root</span>
                                                <?php endif; ?>
                                                <?php if (($route['isStarter'] ?? false) === true): ?>
                                                    <span class="tag text-[10px] py-0.5 px-1.5">Starter</span>
                                                <?php endif; ?>
                                                <span class="tag text-[10px] py-0.5 px-1.5"><?php echo htmlspecialchars((string)$route['displayType']); ?></span>
                                            </div>
                                            <div class="text-xs text-[var(--shell-muted)] mt-1 truncate">
                                                <code><?php echo htmlspecialchars((string)$route['relativePath']); ?></code>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Details & Actions -->
                                    <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:w-auto">
                                        <div class="flex items-center gap-4 sm:w-auto text-sm">
                                            <div class="w-48 sm:px-4">
                                                <div class="text-sm text-[var(--shell-text)] truncate" title="<?php echo htmlspecialchars((string)$route['sourceLabel']); ?>">
                                                    <code><?php echo htmlspecialchars((string)$route['sourceLabel']); ?></code>
                                                </div>
                                            </div>
                                            <div class="w-32 sm:px-4">
                                                <div class="flex flex-col gap-1">
                                                    <span class="tag text-[10px] py-0.5 px-1.5 w-fit"><?php echo htmlspecialchars((string)$route['summaryLabel']); ?></span>
                                                    <span class="tag text-[10px] py-0.5 px-1.5 w-fit"><?php echo htmlspecialchars((string)$route['visibility']); ?></span>
                                                    <?php if (($route['isDynamic'] ?? false) === true): ?>
                                                        <span class="tag text-[10px] py-0.5 px-1.5 w-fit">Dynamic</span>
                                                    <?php endif; ?>
                                                </div>
                                            </div>
                                            <div class="w-32 sm:px-4 text-xs text-[var(--shell-muted)]">
                                                <?php echo htmlspecialchars((string)$route['updatedLabel']); ?>
                                            </div>
                                        </div>

                                        <div class="flex flex-wrap sm:flex-nowrap items-center gap-1 opacity-100 sm:opacity-70 group-hover/row:opacity-100 transition-opacity sm:pl-4 mt-2 sm:mt-0 justify-end">
                                            <?php if (is_string($route['previewUrl']) && $route['previewUrl'] !== ''): ?>
                                                <a href="<?php echo htmlspecialchars((string)$route['previewUrl']); ?>" target="_blank" class="ghost-button py-1 px-2 text-xs group/btn flex items-center shrink-0 transition-all" onclick="return window.handleDynamicPreview ? window.handleDynamicPreview(event, this.href) : true" data-tooltip="Open Live Page">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                </a>
                                            <?php endif; ?>
                                            <?php if ($env !== 'production'): ?>
                                                <button
                                                    type="button"
                                                    class="pill-button py-1 px-3 text-xs group/btn flex items-center shrink-0 transition-all"
                                                    data-route-edit="<?php echo htmlspecialchars((string)$route['logicalPath']); ?>" data-tooltip="Select Route">
                                                    Select
                                                </button>
                                                <a href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode((string)$route['logicalPath']); ?>" class="ghost-button py-1 px-2 text-xs group/btn flex items-center shrink-0 transition-all" data-tooltip="Code">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                                                        <polyline points="16 18 22 12 16 6" />
                                                        <polyline points="8 6 2 12 8 18" />
                                                    </svg>
                                                </a>
                                            <?php endif; ?>
                                            <a href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=<?php echo urlencode((string)$route['logicalPath']); ?>" class="ghost-button py-1 px-2 text-xs group/btn flex items-center shrink-0 transition-all" data-tooltip="Inspect">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                                                    <circle cx="11" cy="11" r="8" />
                                                    <path d="m21 21-4.3-4.3" />
                                                </svg>
                                            </a>
                                            <?php if ($env !== 'production'): ?>
                                                <button
                                                    type="button"
                                                    class="ghost-button py-1 px-2 text-xs route-table__delete group/btn flex items-center shrink-0 transition-all"
                                                    data-route-delete="<?php echo htmlspecialchars((string)$route['logicalPath']); ?>" data-tooltip="Delete">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500">
                                                        <path d="M3 6h18" />
                                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                    </svg>
                                                </button>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>
            </article>
        </div>

        <aside id="route-workspace-sidebar" class="space-y-6 route-workspace-sidebar">
            <?php if ($routeCount > 0 && is_array($initialSelectedRoute)): ?>
                <div id="route-preview-panel" class="surface-panel route-preview-card">
                    <div class="route-preview-card__header">
                        <div>
                            <div class="metric-label mb-2">Selected Route</div>
                            <div id="route-preview-route-path" class="route-preview-card__path"><?php echo htmlspecialchars((string)$initialSelectedRoute['routePath']); ?></div>
                            <p id="route-preview-copy" class="route-preview-card__copy">
                                <?php echo htmlspecialchars(efsdb_route_preview_copy($initialSelectedRoute)); ?>
                            </p>
                        </div>
                    </div>

                    <div id="route-preview-badges" class="route-table__badges route-preview-card__badges">
                        <?php if (($initialSelectedRoute['isHomepage'] ?? false) === true): ?>
                            <span class="tag route-table__tag--accent">Root</span>
                        <?php endif; ?>
                        <?php if (($initialSelectedRoute['isStarter'] ?? false) === true): ?>
                            <span class="tag route-table__tag--soft">Starter</span>
                        <?php endif; ?>
                        <span class="tag"><?php echo htmlspecialchars((string)$initialSelectedRoute['displayType']); ?></span>
                        <span class="tag"><?php echo htmlspecialchars((string)$initialSelectedRoute['summaryLabel']); ?></span>
                        <span class="tag"><?php echo htmlspecialchars((string)$initialSelectedRoute['visibility']); ?></span>
                        <?php if (($initialSelectedRoute['isDynamic'] ?? false) === true): ?>
                            <span class="tag">Dynamic</span>
                        <?php endif; ?>
                    </div>

                    <div class="route-preview-card__meta-grid">
                        <div class="route-preview-card__meta-item">
                            <div class="route-preview-card__label">Backing File</div>
                            <code id="route-preview-file"><?php echo htmlspecialchars((string)$initialSelectedRoute['relativePath']); ?></code>
                        </div>
                        <div class="route-preview-card__meta-item">
                            <div class="route-preview-card__label">Source Target</div>
                            <code id="route-preview-source"><?php echo htmlspecialchars((string)$initialSelectedRoute['sourceLabel']); ?></code>
                        </div>
                        <div class="route-preview-card__meta-item">
                            <div class="route-preview-card__label">Visibility</div>
                            <div id="route-preview-visibility" class="route-preview-card__value"><?php echo htmlspecialchars((string)$initialSelectedRoute['visibility']); ?></div>
                        </div>
                        <div class="route-preview-card__meta-item">
                            <div class="route-preview-card__label">Modified</div>
                            <div id="route-preview-updated" class="route-preview-card__value"><?php echo htmlspecialchars((string)$initialSelectedRoute['updatedLabel']); ?></div>
                        </div>
                    </div>

                    <div class="route-preview-card__actions">
                        <a
                            id="route-preview-open"
                            href="<?php echo htmlspecialchars((string)($initialSelectedRoute['previewUrl'] ?? '')); ?>"
                            target="_blank"
                            class="ghost-button"
                            onclick="return window.handleDynamicPreview ? window.handleDynamicPreview(event, this.href) : true"
                            <?php echo empty($initialSelectedRoute['previewUrl']) ? 'hidden' : ''; ?>>
                            Open
                        </a>
                        <a id="route-preview-code" href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode((string)$initialSelectedRoute['logicalPath']); ?>" class="ghost-button">
                            Code
                        </a>
                        <a id="route-preview-inspect" href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=<?php echo urlencode((string)$initialSelectedRoute['logicalPath']); ?>" class="ghost-button">
                            Inspect
                        </a>
                        <button type="button" id="route-preview-popout" class="pill-button">
                            Pop Out Editor
                        </button>
                        <button type="button" id="route-preview-duplicate" class="ghost-button">
                            Duplicate Route
                        </button>
                        <button type="button" id="route-preview-delete" class="ghost-button route-table__delete">
                            Delete Route
                        </button>
                    </div>
                </div>
            <?php endif; ?>

            <div class="surface-panel route-aside">
                <div class="metric-label mb-2">Quick Links</div>
                <div class="route-aside__links">
                    <a href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode($routesPath); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                        Open Routes in Builder
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                    <a href="<?php echo efsdb_control_plane_path('components'); ?>?env=<?php echo urlencode($env); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                        Open Components
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                    <a href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=<?php echo urlencode($routesPath); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                        Inspect Natural Files
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                    <a href="<?php echo efsdb_control_plane_path('environments'); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                        Manage Environments
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="surface-panel route-aside">
                <div class="metric-label mb-2">Editing Model</div>
                <p class="text-sm text-[var(--shell-muted)] leading-relaxed">
                    Route edits on this page rename the URL by moving the backing file. When a target URL already exists, the popover will warn you and replace that destination on save.
                </p>
            </div>

            <div class="surface-panel route-aside">
                <div class="metric-label mb-2">Homepage Rules</div>
                <ul class="route-aside__list">
                    <li><code>/</code> resolves from <code>routes/index.php</code>, <code>routes/index.html</code>, or <code>routes/index.htm</code>.</li>
                    <li>The starter homepage is a normal route, so it appears here and in the components workspace.</li>
                    <li>Retargeting another route to <code>/</code> replaces the current homepage without forcing you into Builder first.</li>
                </ul>
            </div>

            <?php if ($starterComponentPath !== null): ?>
                <div class="surface-panel route-aside">
                    <div class="metric-label mb-2">Starter Homepage</div>
                    <p class="text-sm text-[var(--shell-muted)] leading-relaxed">
                        The homepage starter now exists as a normal route file and a companion component, so it stays visible in both routes and components.
                    </p>
                    <div class="route-aside__links">
                        <?php if ($starterRouteLogicalPath !== null): ?>
                            <a href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode($starterRouteLogicalPath); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                                Open <code>routes/index.php</code>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </a>
                        <?php endif; ?>
                        <a href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode($starterComponentPath); ?>" class="text-sm font-medium text-[var(--accent,#2563eb)] hover:underline flex items-center gap-1">
                            Open <code>components/homepage-placeholder.php</code>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div>
                </div>
            <?php endif; ?>
        </aside>
    </div>
</section>

<efsdb-window-shell id="route-editor-popover" hidden>
    <div class="route-editor-popover route-editor-window">
        <form id="route-editor-form" class="route-editor-popover__form">
            <div class="route-editor-popover__header">
                <div>
                    <div id="route-editor-eyebrow" class="route-editor-popover__eyebrow">Route Editor</div>
                    <h3 id="route-editor-title" class="route-editor-popover__title">Edit this route</h3>
                    <p id="route-editor-copy" class="route-editor-popover__copy">
                        Rename the selected URL or duplicate it into a new route without leaving this page.
                    </p>
                </div>
            </div>

            <div class="route-editor-popover__toolbar">
                <div class="route-editor-popover__toggle-group" role="tablist" aria-label="Route edit mode">
                    <button type="button" class="route-editor-popover__toggle" data-route-editor-mode="rename" aria-pressed="true">Rename</button>
                    <button type="button" class="route-editor-popover__toggle" data-route-editor-mode="duplicate" aria-pressed="false">Duplicate</button>
                </div>
            </div>

            <label class="route-editor-popover__field">
                <span id="route-editor-current-label" class="route-editor-popover__label">Source file</span>
                <code id="route-editor-current-file">-</code>
            </label>

            <label class="route-editor-popover__field">
                <span id="route-editor-path-label" class="route-editor-popover__label">Route URL</span>
                <input id="route-editor-path" name="routePath" type="text" autocomplete="off" spellcheck="false" placeholder="/my-route" />
            </label>

            <div class="route-editor-popover__field">
                <span id="route-editor-target-label" class="route-editor-popover__label">Target file</span>
                <code id="route-editor-target-file">-</code>
            </div>

            <div id="route-editor-warning" class="route-editor-popover__warning" hidden></div>
            <div id="route-editor-error" class="route-editor-popover__error" hidden></div>

            <div class="route-editor-popover__actions">
                <div class="route-editor-popover__link-group">
                    <a id="route-editor-open-link" href="#" target="_blank" class="ghost-button" onclick="return window.handleDynamicPreview ? window.handleDynamicPreview(event, this.href) : true" hidden>Open</a>
                    <a id="route-editor-inspect-link" href="#" class="ghost-button">Inspect</a>
                    <a id="route-editor-code-link" href="#" class="ghost-button">Open Code</a>
                </div>
                <div class="route-editor-popover__action-group">
                    <button type="button" id="route-editor-cancel" class="ghost-button">Cancel</button>
                    <button type="submit" id="route-editor-save" class="pill-button">Save Route</button>
                </div>
            </div>
        </form>
    </div>
</efsdb-window-shell>

<dialog id="route-delete-dialog" class="route-delete-dialog">
    <form id="route-delete-form" class="route-delete-dialog__form">
        <div class="route-editor-popover__header">
            <div>
                <div class="route-editor-popover__eyebrow">Delete Route</div>
                <h3 class="route-editor-popover__title">Confirm route removal</h3>
            </div>
            <button type="button" id="route-delete-close" class="route-editor-popover__close" aria-label="Close delete dialog">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </button>
        </div>

        <p class="text-sm text-[var(--shell-muted)] leading-relaxed">
            Delete requires the passphrase for the user currently signed in to the control plane.
        </p>

        <div class="route-delete-dialog__summary">
            <div class="route-editor-popover__field">
                <span class="route-editor-popover__label">Route URL</span>
                <code id="route-delete-path">-</code>
            </div>
            <div class="route-editor-popover__field">
                <span class="route-editor-popover__label">Backing file</span>
                <code id="route-delete-file">-</code>
            </div>
        </div>

        <label class="route-editor-popover__field">
            <span class="route-editor-popover__label">Passphrase</span>
            <input
                id="route-delete-passphrase"
                name="passphrase"
                type="password"
                autocomplete="current-password"
                spellcheck="false"
                placeholder="Enter your passphrase" />
        </label>

        <div id="route-delete-error" class="route-editor-popover__error" hidden></div>

        <div class="route-delete-dialog__actions">
            <button type="button" id="route-delete-cancel" class="ghost-button">Cancel</button>
            <button type="submit" id="route-delete-confirm" class="pill-button">Delete Route</button>
        </div>
    </form>
</dialog>

<dialog id="dynamic-route-dialog" class="surface-panel p-6 rounded-xl border border-[var(--shell-border)] backdrop:bg-black/50 backdrop:backdrop-blur-sm m-auto text-[var(--shell-text)] shadow-2xl min-w-[320px]">
    <form method="dialog" id="dynamic-route-form">
        <h3 class="text-lg font-medium text-[var(--shell-text-strong)] mb-1">Route Parameters</h3>
        <p class="text-sm text-[var(--shell-muted)] mb-4" id="dynamic-route-url"></p>

        <div id="dynamic-route-inputs" class="flex flex-col gap-3 mb-5"></div>

        <div class="flex justify-end gap-2 mt-4">
            <button type="button" onclick="document.getElementById('dynamic-route-dialog').close()" class="ghost-button px-3 py-1.5 text-sm">Cancel</button>
            <button type="submit" class="pill-button px-4 py-1.5 text-sm">Preview</button>
        </div>
    </form>
</dialog>

<script type="module" src="/js/efsdb-window-shell.js"></script>
<script type="module">
    const routesBasePath = <?php echo json_encode($routesPath, JSON_UNESCAPED_SLASHES); ?>;
    const routesIndexPath = <?php echo json_encode($routeClientPayload, JSON_UNESCAPED_SLASHES); ?>;
    const initialSelectedRoutePath = <?php echo json_encode($initialSelectedLogicalPath, JSON_UNESCAPED_SLASHES); ?>;

    const routeEditorPopover = document.getElementById('route-editor-popover');
    const routeEditorForm = document.getElementById('route-editor-form');
    const routeEditorEyebrow = document.getElementById('route-editor-eyebrow');
    const routeEditorTitle = document.getElementById('route-editor-title');
    const routeEditorCopy = document.getElementById('route-editor-copy');
    const routeEditorCurrentLabel = document.getElementById('route-editor-current-label');
    const routeEditorPathLabel = document.getElementById('route-editor-path-label');
    const routeEditorTargetLabel = document.getElementById('route-editor-target-label');
    const routeEditorPath = document.getElementById('route-editor-path');
    const routeEditorCurrentFile = document.getElementById('route-editor-current-file');
    const routeEditorTargetFile = document.getElementById('route-editor-target-file');
    const routeEditorWarning = document.getElementById('route-editor-warning');
    const routeEditorError = document.getElementById('route-editor-error');
    const routeEditorOpenLink = document.getElementById('route-editor-open-link');
    const routeEditorInspectLink = document.getElementById('route-editor-inspect-link');
    const routeEditorCodeLink = document.getElementById('route-editor-code-link');
    const routeEditorSave = document.getElementById('route-editor-save');
    const routeDeleteDialog = document.getElementById('route-delete-dialog');
    const routeDeleteForm = document.getElementById('route-delete-form');
    const routeDeletePath = document.getElementById('route-delete-path');
    const routeDeleteFile = document.getElementById('route-delete-file');
    const routeDeletePassphrase = document.getElementById('route-delete-passphrase');
    const routeDeleteError = document.getElementById('route-delete-error');
    const routeDeleteConfirm = document.getElementById('route-delete-confirm');
    const routePreviewPanel = document.getElementById('route-preview-panel');
    const routePreviewRoutePath = document.getElementById('route-preview-route-path');
    const routePreviewCopy = document.getElementById('route-preview-copy');
    const routePreviewBadges = document.getElementById('route-preview-badges');
    const routePreviewFile = document.getElementById('route-preview-file');
    const routePreviewSource = document.getElementById('route-preview-source');
    const routePreviewVisibility = document.getElementById('route-preview-visibility');
    const routePreviewUpdated = document.getElementById('route-preview-updated');
    const routePreviewOpen = document.getElementById('route-preview-open');
    const routePreviewCode = document.getElementById('route-preview-code');
    const routePreviewInspect = document.getElementById('route-preview-inspect');
    const routePreviewPopout = document.getElementById('route-preview-popout');
    const routePreviewDuplicate = document.getElementById('route-preview-duplicate');
    const routePreviewDelete = document.getElementById('route-preview-delete');
    const routeWorkspaceLayout = document.getElementById('route-workspace-layout');
    const routeWorkspaceSidebar = document.getElementById('route-workspace-sidebar');

    let activeRoute = null;
    let activeTargetPath = null;
    let activeAnchor = null;
    let activeDeleteRoute = null;
    let selectedRoute = routeByLogicalPath(initialSelectedRoutePath) || routesIndexPath[0] || null;
    let routeEditorMode = 'rename';
    let routeSidebarResizeState = null;

    function routeByLogicalPath(logicalPath) {
        return routesIndexPath.find((route) => route.logicalPath === logicalPath) || null;
    }

    function routePreviewDescription(route) {
        if (!route) {
            return 'Select a route from the table to inspect it here.';
        }

        if (route.isStarter) {
            return 'Starter homepage placeholder. You can replace it here or retarget another route to / without hand-authoring index.php.';
        }

        if (route.isHomepage) {
            return 'This route currently handles the root URL. Use the pop out editor when you want to replace the homepage target in place.';
        }

        if (route.isDynamic) {
            return 'This route contains dynamic parameters. Opening the preview will ask for sample values before navigation.';
        }

        if (route.sourceLabel !== route.relativePath) {
            return 'This published route is backed by a component-oriented source instead of a plain natural route file.';
        }

        return 'This route is backed by a natural file in the current environment and can be retargeted without leaving this page.';
    }

    function appendRoutePreviewBadge(label, className = '') {
        if (!routePreviewBadges || !label) {
            return;
        }

        const badge = document.createElement('span');
        badge.className = className === '' ? 'tag' : `tag ${className}`;
        badge.textContent = label;
        routePreviewBadges.appendChild(badge);
    }

    function renderRoutePreview(route) {
        if (!routePreviewPanel || !route) {
            return;
        }

        routePreviewRoutePath.textContent = route.routePath;
        routePreviewCopy.textContent = routePreviewDescription(route);
        routePreviewFile.textContent = route.relativePath;
        routePreviewSource.textContent = route.sourceLabel;
        routePreviewVisibility.textContent = route.visibility;
        routePreviewUpdated.textContent = route.updatedLabel || '-';

        routePreviewBadges.innerHTML = '';
        if (route.isHomepage) {
            appendRoutePreviewBadge('Root', 'route-table__tag--accent');
        }
        if (route.isStarter) {
            appendRoutePreviewBadge('Starter', 'route-table__tag--soft');
        }
        appendRoutePreviewBadge(route.displayType);
        appendRoutePreviewBadge(route.summaryLabel);
        appendRoutePreviewBadge(route.visibility);
        if (route.isDynamic) {
            appendRoutePreviewBadge('Dynamic');
        }

        if (route.previewUrl) {
            routePreviewOpen.hidden = false;
            routePreviewOpen.href = route.previewUrl;
        } else {
            routePreviewOpen.hidden = true;
            routePreviewOpen.removeAttribute('href');
        }

        routePreviewCode.href = `<?php echo efsdb_control_plane_path('builder'); ?>?path=${encodeURIComponent(route.logicalPath)}`;
        routePreviewInspect.href = `<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=${encodeURIComponent(route.logicalPath)}`;
        routePreviewPopout.disabled = false;
        routePreviewDuplicate.disabled = false;
        routePreviewDelete.disabled = false;
    }

    function syncSelectedRouteRows() {
        document.querySelectorAll('[data-route-row]').forEach((row) => {
            const logicalPath = row.getAttribute('data-route-row');
            const isSelected = !!selectedRoute && logicalPath === selectedRoute.logicalPath;
            row.classList.toggle('route-table__row--selected', isSelected);
            row.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        });
    }

    function routeExistsAtPath(routePath, excludeLogicalPath = '') {
        return routesIndexPath.find((route) => {
            if (excludeLogicalPath !== '' && route.logicalPath === excludeLogicalPath) {
                return false;
            }

            return route.routePath === routePath;
        }) || null;
    }

    function normalizeRoutePath(value) {
        let next = String(value || '').trim();
        next = next.replace(/[?#].*$/, '');
        next = next.replace(/\\/g, '/');
        next = next.replace(/\/+/g, '/');
        next = next.replace(/\.(php|html|htm)$/i, '');

        if (next === '' || next === '/') {
            return '/';
        }

        if (!next.startsWith('/')) {
            next = '/' + next;
        }

        next = next.replace(/\/+/g, '/');
        if (next.length > 1) {
            next = next.replace(/\/$/, '');
        }

        return next;
    }

    function routeFileFromPath(routePath) {
        const normalized = normalizeRoutePath(routePath);
        if (normalized === '/') {
            return 'index.php';
        }

        return normalized.replace(/^\//, '') + '.php';
    }

    function duplicateBaseRoutePath(route) {
        if (!route) {
            return '/route-copy';
        }

        if (route.routePath === '/') {
            return '/homepage-copy';
        }

        return `${route.routePath}-copy`;
    }

    function suggestDuplicateRoutePath(route) {
        const normalizedBase = normalizeRoutePath(duplicateBaseRoutePath(route));
        let candidate = normalizedBase;
        let counter = 2;

        while (routeExistsAtPath(candidate)) {
            candidate = `${normalizedBase}-${counter}`;
            counter += 1;
        }

        return candidate;
    }

    function syncRouteEditorModeState() {
        document.querySelectorAll('[data-route-editor-mode]').forEach((button) => {
            const isActive = button.getAttribute('data-route-editor-mode') === routeEditorMode;
            button.classList.toggle('route-editor-popover__toggle--active', isActive);
            button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        if (routeEditorMode === 'duplicate') {
            routeEditorPopover.title = 'Duplicate Route';
            routeEditorEyebrow.textContent = 'Duplicate Route';
            routeEditorTitle.textContent = 'Create a second published route';
            routeEditorCopy.textContent = 'Duplicate the selected file into a new route path. The source route stays in place unless you target an existing URL.';
            routeEditorCurrentLabel.textContent = 'Source file';
            routeEditorPathLabel.textContent = 'Duplicate route URL';
            routeEditorTargetLabel.textContent = 'Duplicate file';
            routeEditorSave.textContent = 'Duplicate Route';
            return;
        }

        routeEditorPopover.title = 'Edit Route';
        routeEditorEyebrow.textContent = 'Route Editor';
        routeEditorTitle.textContent = 'Rename this route in place';
        routeEditorCopy.textContent = 'Move the selected file to a new route path. Saving to / replaces the current homepage target without hand-authoring index.php.';
        routeEditorCurrentLabel.textContent = 'Current file';
        routeEditorPathLabel.textContent = 'Route URL';
        routeEditorTargetLabel.textContent = 'Target file';
        routeEditorSave.textContent = 'Save Route';
    }

    function clampRouteEditorFrame(frame) {
        const gutter = window.innerWidth < 720 ? 8 : 16;
        const maxWidth = Math.max(320, window.innerWidth - gutter * 2);
        const maxHeight = Math.max(320, window.innerHeight - gutter * 2);
        const width = Math.min(Math.max(420, Math.round(frame.width)), maxWidth);
        const height = Math.min(Math.max(360, Math.round(frame.height)), maxHeight);

        return {
            width,
            height,
            x: Math.min(Math.max(gutter, Math.round(frame.x)), Math.max(gutter, window.innerWidth - width - gutter)),
            y: Math.min(Math.max(gutter, Math.round(frame.y)), Math.max(gutter, window.innerHeight - height - gutter))
        };
    }

    function hideRouteEditor() {
        activeRoute = null;
        activeTargetPath = null;
        activeAnchor = null;
        routeEditorError.hidden = true;
        routeEditorWarning.hidden = true;
        routeEditorError.textContent = '';
        routeEditorWarning.textContent = '';

        if (routeEditorPopover) {
            routeEditorPopover.open = false;
        }
        routeEditorPopover.hidden = true;
    }

    function hideRouteDeleteDialog() {
        activeDeleteRoute = null;
        routeDeletePassphrase.value = '';
        routeDeleteError.hidden = true;
        routeDeleteError.textContent = '';
        routeDeleteConfirm.disabled = false;
        routeDeleteConfirm.textContent = 'Delete Route';

        if (typeof routeDeleteDialog.close === 'function' && routeDeleteDialog.open) {
            routeDeleteDialog.close();
        } else {
            routeDeleteDialog.removeAttribute('open');
        }
    }

    function openRouteDeleteDialog(route) {
        activeDeleteRoute = route;
        routeDeletePath.textContent = route.routePath;
        routeDeleteFile.textContent = route.relativePath;
        routeDeletePassphrase.value = '';
        routeDeleteError.hidden = true;
        routeDeleteError.textContent = '';
        routeDeleteConfirm.disabled = false;
        routeDeleteConfirm.textContent = 'Delete Route';

        if (typeof routeDeleteDialog.showModal === 'function' && !routeDeleteDialog.open) {
            routeDeleteDialog.showModal();
        } else {
            routeDeleteDialog.setAttribute('open', 'open');
        }

        requestAnimationFrame(() => {
            routeDeletePassphrase.focus();
            routeDeletePassphrase.select();
        });
    }

    function positionRouteEditor(anchor) {
        if (!routeEditorPopover) {
            return;
        }

        const defaultWidth = window.innerWidth < 720 ? window.innerWidth - 16 : 640;
        const defaultHeight = window.innerWidth < 720 ? Math.min(640, window.innerHeight - 12) : 560;
        let nextFrame = {
            x: Math.max(16, Math.round((window.innerWidth - defaultWidth) / 2)),
            y: Math.max(12, Math.round((window.innerHeight - defaultHeight) / 2)),
            width: defaultWidth,
            height: defaultHeight
        };

        if (anchor) {
            const rect = anchor.getBoundingClientRect();
            nextFrame = {
                x: rect.right - defaultWidth,
                y: rect.top + 18,
                width: defaultWidth,
                height: defaultHeight
            };
        }

        const frame = clampRouteEditorFrame(nextFrame);
        routeEditorPopover.x = frame.x;
        routeEditorPopover.y = frame.y;
        routeEditorPopover.width = frame.width;
        routeEditorPopover.height = frame.height;
        routeEditorPopover.zIndex = 12040;
        routeEditorPopover.buttonLayout = 'windows-11';
        routeEditorPopover.chromeStyle = 'solid';
        routeEditorPopover.alignment = 'left';
        routeEditorPopover.themePreset = 'inherit';
    }

    function clampOpenRouteEditorToViewport() {
        if (!routeEditorPopover || routeEditorPopover.open !== true) {
            return;
        }

        const frame = clampRouteEditorFrame({
            x: Number(routeEditorPopover.x || 96),
            y: Number(routeEditorPopover.y || 72),
            width: Number(routeEditorPopover.width || 640),
            height: Number(routeEditorPopover.height || 560)
        });

        routeEditorPopover.x = frame.x;
        routeEditorPopover.y = frame.y;
        routeEditorPopover.width = frame.width;
        routeEditorPopover.height = frame.height;
    }

    function syncRouteEditorState() {
        if (!activeRoute) {
            return;
        }

        const normalizedPath = normalizeRoutePath(routeEditorPath.value);
        routeEditorPath.value = normalizedPath;

        const conflict = routeEditorMode === 'duplicate' ?
            routeExistsAtPath(normalizedPath) :
            routeExistsAtPath(normalizedPath, activeRoute.logicalPath);
        const isSameRouteInDuplicateMode = routeEditorMode === 'duplicate' && normalizedPath === activeRoute.routePath;

        activeTargetPath = conflict ? conflict.logicalPath : `${routesBasePath}/${routeFileFromPath(normalizedPath)}`;
        const targetFile = activeTargetPath.replace(/^site\/[^/]+\//, '');

        routeEditorCurrentFile.textContent = activeRoute.relativePath;
        routeEditorTargetFile.textContent = targetFile;
        if (activeRoute.previewUrl) {
            routeEditorOpenLink.hidden = false;
            routeEditorOpenLink.href = activeRoute.previewUrl;
        } else {
            routeEditorOpenLink.hidden = true;
            routeEditorOpenLink.removeAttribute('href');
        }
        routeEditorInspectLink.href = `<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=${encodeURIComponent(activeRoute.logicalPath)}`;
        routeEditorCodeLink.href = `<?php echo efsdb_control_plane_path('builder'); ?>?path=${encodeURIComponent(activeRoute.logicalPath)}`;

        if (isSameRouteInDuplicateMode) {
            routeEditorWarning.hidden = false;
            routeEditorWarning.textContent = 'Pick a different route URL for the duplicate. The source route stays at its current address.';
        } else if (conflict) {
            routeEditorWarning.hidden = false;
            routeEditorWarning.textContent = routeEditorMode === 'duplicate' ?
                `Duplicating here will replace ${conflict.relativePath} at ${conflict.routePath}.` :
                `Saving will replace ${conflict.relativePath} at ${conflict.routePath}.`;
        } else {
            routeEditorWarning.hidden = true;
            routeEditorWarning.textContent = '';
        }

        routeEditorError.hidden = true;
        routeEditorError.textContent = '';
        routeEditorSave.disabled = isSameRouteInDuplicateMode;
    }

    function openRouteEditor(logicalPath, anchor, mode = 'rename') {
        const route = routeByLogicalPath(logicalPath);
        if (!route) {
            return;
        }

        routeEditorMode = mode === 'duplicate' ? 'duplicate' : 'rename';
        activeRoute = route;
        activeAnchor = anchor;
        routeEditorPath.value = routeEditorMode === 'duplicate' ? suggestDuplicateRoutePath(route) : route.routePath;
        syncRouteEditorModeState();
        syncRouteEditorState();
        positionRouteEditor(anchor);

        routeEditorPopover.onClose = hideRouteEditor;
        routeEditorPopover.hidden = false;
        routeEditorPopover.open = true;

        requestAnimationFrame(() => {
            routeEditorPath.focus();
            routeEditorPath.select();
        });
    }

    function selectRoute(logicalPath, options = {}) {
        const route = routeByLogicalPath(logicalPath);
        if (!route) {
            return;
        }

        hideRouteEditor();
        selectedRoute = route;
        renderRoutePreview(route);
        syncSelectedRouteRows();

        if (options.scrollPreview === true && routePreviewPanel) {
            routePreviewPanel.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    async function parseJsonResponse(response) {
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
            return null;
        }

        try {
            return await response.json();
        } catch (error) {
            return null;
        }
    }

    async function routeRequest(endpoint, payload) {
        const response = await fetch(endpoint, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            return parseJsonResponse(response);
        }

        const errorPayload = await parseJsonResponse(response);
        const message = errorPayload && errorPayload.error && errorPayload.error.message ?
            errorPayload.error.message :
            `Request failed with ${response.status}`;
        throw new Error(message);
    }

    document.querySelectorAll('[data-route-row]').forEach((row) => {
        row.addEventListener('click', (event) => {
            const target = event.target;
            if (target instanceof Element && target.closest('a, button')) {
                return;
            }

            selectRoute(row.getAttribute('data-route-row') || '', {
                scrollPreview: window.innerWidth < 1280
            });
        });

        row.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') {
                return;
            }

            event.preventDefault();
            selectRoute(row.getAttribute('data-route-row') || '', {
                scrollPreview: window.innerWidth < 1280
            });
        });
    });

    document.querySelectorAll('[data-route-edit]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            selectRoute(button.getAttribute('data-route-edit') || '', {
                scrollPreview: window.innerWidth < 1280
            });
        });
    });

    document.querySelectorAll('[data-route-delete]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const logicalPath = button.getAttribute('data-route-delete');
            const route = routeByLogicalPath(logicalPath || '');
            if (!route) {
                return;
            }

            openRouteDeleteDialog(route);
        });
    });

    routeDeleteForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!activeDeleteRoute) {
            return;
        }

        const passphrase = routeDeletePassphrase.value.trim();
        if (passphrase === '') {
            routeDeleteError.hidden = false;
            routeDeleteError.textContent = 'Enter the current user passphrase to delete this route.';
            routeDeletePassphrase.focus();
            return;
        }

        routeDeleteConfirm.disabled = true;
        routeDeleteConfirm.textContent = 'Deleting...';
        routeDeleteError.hidden = true;
        routeDeleteError.textContent = '';

        try {
            await routeRequest('/_efsdb/api/explorer/delete', {
                path: activeDeleteRoute.logicalPath,
                mode: 'natural',
                confirmPassphrase: passphrase,
                confirmKey: passphrase
            });
            window.location.reload();
        } catch (error) {
            routeDeleteError.hidden = false;
            routeDeleteError.textContent = error instanceof Error ? error.message : 'Failed to delete route.';
            routeDeleteConfirm.disabled = false;
            routeDeleteConfirm.textContent = 'Delete Route';
        }
    });

    routeEditorPath.addEventListener('input', syncRouteEditorState);
    routeEditorPath.addEventListener('blur', syncRouteEditorState);

    routeEditorForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!activeRoute) {
            return;
        }

        syncRouteEditorState();
        const nextRoutePath = normalizeRoutePath(routeEditorPath.value);
        if (routeEditorMode === 'duplicate' && nextRoutePath === activeRoute.routePath) {
            routeEditorError.hidden = false;
            routeEditorError.textContent = 'Duplicate route URLs must differ from the source route.';
            routeEditorPath.focus();
            routeEditorPath.select();
            return;
        }

        if (routeEditorMode === 'rename' && nextRoutePath === activeRoute.routePath) {
            hideRouteEditor();
            return;
        }

        routeEditorSave.disabled = true;
        routeEditorSave.textContent = routeEditorMode === 'duplicate' ? 'Duplicating...' : 'Saving...';

        try {
            if (routeEditorMode === 'duplicate') {
                await routeRequest('/_efsdb/api/explorer/duplicate', {
                    path: activeRoute.logicalPath,
                    newPath: activeTargetPath,
                    mode: 'natural'
                });
            } else {
                await routeRequest('/_efsdb/api/explorer/rename', {
                    path: activeRoute.logicalPath,
                    newPath: activeTargetPath,
                    mode: 'natural'
                });
            }
            window.location.reload();
        } catch (error) {
            routeEditorError.hidden = false;
            routeEditorError.textContent = error instanceof Error ?
                error.message :
                (routeEditorMode === 'duplicate' ? 'Failed to duplicate route.' : 'Failed to update route.');
        } finally {
            routeEditorSave.disabled = false;
            syncRouteEditorModeState();
        }
    });

    document.getElementById('route-editor-cancel').addEventListener('click', hideRouteEditor);
    document.getElementById('route-delete-cancel').addEventListener('click', hideRouteDeleteDialog);
    document.getElementById('route-delete-close').addEventListener('click', hideRouteDeleteDialog);

    routeDeleteDialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        hideRouteDeleteDialog();
    });

    document.querySelectorAll('[data-route-editor-mode]').forEach((button) => {
        button.addEventListener('click', () => {
            if (!activeRoute) {
                return;
            }

            routeEditorMode = button.getAttribute('data-route-editor-mode') === 'duplicate' ? 'duplicate' : 'rename';
            routeEditorPath.value = routeEditorMode === 'duplicate' ? suggestDuplicateRoutePath(activeRoute) : activeRoute.routePath;
            syncRouteEditorModeState();
            syncRouteEditorState();

            requestAnimationFrame(() => {
                routeEditorPath.focus();
                routeEditorPath.select();
            });
        });
    });

    if (routePreviewPopout) {
        routePreviewPopout.addEventListener('click', () => {
            if (!selectedRoute) {
                return;
            }

            openRouteEditor(selectedRoute.logicalPath, routePreviewPopout, 'rename');
        });
    }

    if (routePreviewDuplicate) {
        routePreviewDuplicate.addEventListener('click', () => {
            if (!selectedRoute) {
                return;
            }

            openRouteEditor(selectedRoute.logicalPath, routePreviewDuplicate, 'duplicate');
        });
    }

    if (routePreviewDelete) {
        routePreviewDelete.addEventListener('click', () => {
            if (!selectedRoute) {
                return;
            }

            openRouteDeleteDialog(selectedRoute);
        });
    }

    window.addEventListener('resize', () => {
        clampOpenRouteEditorToViewport();
    });

    routeEditorPopover.onClose = hideRouteEditor;
    syncRouteEditorModeState();
    renderRoutePreview(selectedRoute);
    syncSelectedRouteRows();

    window.handleDynamicPreview = function(e, url) {
        const decodedUrl = decodeURIComponent(url);
        const regex = /\[([^\]]+)\]/g;
        let match;
        const params = [];
        while ((match = regex.exec(decodedUrl)) !== null) {
            if (!params.includes(match[1])) {
                params.push(match[1]);
            }
        }

        if (params.length === 0) {
            return true;
        }

        e.preventDefault();
        const dialog = document.getElementById('dynamic-route-dialog');
        const form = document.getElementById('dynamic-route-form');
        const inputsContainer = document.getElementById('dynamic-route-inputs');
        const urlDisplay = document.getElementById('dynamic-route-url');

        urlDisplay.textContent = 'Previewing: ' + decodedUrl;
        inputsContainer.innerHTML = '';

        params.forEach((paramName) => {
            const wrap = document.createElement('div');
            wrap.className = 'flex flex-col gap-1.5';

            const label = document.createElement('label');
            label.className = 'text-xs font-semibold uppercase tracking-wider text-[var(--shell-muted)]';
            label.textContent = paramName;

            const input = document.createElement('input');
            input.type = 'text';
            input.name = paramName;
            input.placeholder = `Enter ${paramName}...`;
            input.className = 'w-full bg-[var(--shell-inset-bg)] border border-[var(--shell-border)] rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--accent)] text-[var(--shell-text)]';
            input.required = true;

            wrap.appendChild(label);
            wrap.appendChild(input);
            inputsContainer.appendChild(wrap);
        });

        form.onsubmit = (submitEvent) => {
            submitEvent.preventDefault();
            const data = new FormData(form);
            let previewUrl = decodedUrl;
            params.forEach((paramName) => {
                previewUrl = previewUrl.replace(`[${paramName}]`, encodeURIComponent(String(data.get(paramName) || 'preview')));
            });
            dialog.close();
            window.open(previewUrl, '_blank', 'noopener');
        };

        dialog.showModal();
        const firstInput = inputsContainer.querySelector('input');
        if (firstInput) {
            firstInput.focus();
        }
        return false;
    };
</script>

<style>
    .route-hero {
        position: relative;
        overflow: hidden;
        background-color: var(--shell-panel-bg);
        background:
            radial-gradient(circle at top left, color-mix(in srgb, var(--accent), transparent 88%), transparent 34%),
            linear-gradient(180deg, color-mix(in srgb, var(--shell-panel-bg), transparent 2%), transparent 120%);
    }

    .route-hero::after {
        content: '';
        position: absolute;
        right: -5rem;
        top: -5rem;
        width: 18rem;
        height: 18rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--accent), transparent 92%);
        filter: blur(18px);
        pointer-events: none;
    }

    .route-hero__metrics {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    }

    .route-hero__metric {
        min-height: 100%;
        background: color-mix(in srgb, var(--shell-soft-bg), transparent 2%);
    }

    .route-workspace-main,
    .route-workspace-sidebar {
        min-width: 0;
    }

    .route-table-card {
        overflow: hidden;
    }

    .route-table__wrap {
        margin: 0 -0.25rem;
        padding: 0 0.25rem 0.25rem;
    }

    .route-table {
        width: 100%;
        min-width: 100%;
        border-collapse: separate;
        border-spacing: 0;
    }

    .route-table th {
        padding: 0 1rem 0.95rem;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .route-table__cell {
        padding: 1rem;
        vertical-align: top;
        border-top: 1px solid color-mix(in srgb, var(--shell-border), transparent 16%);
    }

    .route-table__row {
        transition: background 140ms ease;
        cursor: pointer;
        outline: none;
    }

    .route-table__row:hover {
        background: color-mix(in srgb, var(--shell-hover-bg), transparent 10%);
    }

    .route-table__row--homepage {
        background: color-mix(in srgb, var(--accent), transparent 95%);
    }

    .route-table__row--homepage:hover {
        background: color-mix(in srgb, var(--accent), transparent 92%);
    }

    .route-table__row--selected {
        background: color-mix(in srgb, var(--accent), transparent 90%);
        box-shadow: inset 3px 0 0 color-mix(in srgb, var(--accent), transparent 22%);
    }

    .route-table__row--selected:hover {
        background: color-mix(in srgb, var(--accent), transparent 87%);
    }

    .route-table__row--starter .route-table__cell {
        border-top-style: dashed;
    }

    .route-table__cell--route {
        min-width: 18rem;
    }

    .route-table__cell--time {
        white-space: nowrap;
    }

    .route-table__cell--actions {
        width: 1%;
    }

    .route-table__path-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.65rem;
    }

    .route-table__path {
        font-size: 1rem;
        font-weight: 700;
        color: var(--shell-text);
    }

    .route-table__source {
        font-size: 0.93rem;
        font-weight: 600;
        color: var(--shell-text);
    }

    .route-table__meta {
        margin-top: 0.45rem;
        font-size: 0.84rem;
        line-height: 1.6;
        color: var(--shell-muted);
    }

    .route-table__meta code,
    .route-table__source code,
    .route-table__path {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    }

    .route-table__badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
    }

    .route-table__tag--accent {
        background: color-mix(in srgb, var(--accent), transparent 86%);
        color: var(--accent);
        border: 1px solid color-mix(in srgb, var(--accent), transparent 68%);
    }

    .route-table__tag--soft {
        background: color-mix(in srgb, var(--shell-text), transparent 94%);
    }

    .route-table__timestamp {
        font-size: 0.88rem;
        color: var(--shell-text);
    }

    .route-table__actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 0.5rem;
        min-width: 20rem;
    }

    .route-table__delete {
        color: #dc2626;
    }

    .route-aside {
        display: grid;
        gap: 0.8rem;
    }

    .route-preview-card {
        display: grid;
        gap: 1rem;
        scroll-margin-top: 1rem;
    }

    .route-preview-card__header {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: flex-start;
    }

    .route-preview-card__path {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--shell-text);
        word-break: break-word;
    }

    .route-preview-card__copy {
        margin: 0.65rem 0 0;
        font-size: 0.92rem;
        line-height: 1.75;
        color: var(--shell-muted);
    }

    .route-preview-card__badges {
        margin-top: -0.15rem;
    }

    .route-preview-card__meta-grid {
        display: grid;
        gap: 0.85rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .route-preview-card__meta-item {
        display: grid;
        gap: 0.45rem;
        min-width: 0;
    }

    .route-preview-card__label {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .route-preview-card__value {
        color: var(--shell-text);
        font-size: 0.94rem;
        line-height: 1.6;
        word-break: break-word;
    }

    .route-preview-card code {
        display: inline-flex;
        width: 100%;
        min-width: 0;
        padding: 0.6rem 0.75rem;
        border-radius: 0.85rem;
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 4%);
        color: var(--shell-text);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        word-break: break-word;
    }

    .route-preview-card__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.65rem;
    }

    .route-aside__list {
        margin: 0;
        padding-left: 1rem;
        color: var(--shell-muted);
        font-size: 0.94rem;
        line-height: 1.75;
    }

    .route-aside__links {
        display: grid;
        gap: 0.75rem;
    }

    .route-editor-popover {
        margin: 0;
        padding: 0;
        height: 100%;
        min-height: 0;
        background-color: var(--shell-panel-bg);
        background:
            linear-gradient(180deg, color-mix(in srgb, var(--shell-panel-bg), transparent 1%), color-mix(in srgb, var(--shell-soft-bg), transparent 1%)),
            var(--shell-panel-bg);
        color: var(--shell-text);
        overflow: hidden;
        opacity: 1;
    }

    .route-editor-window {
        display: flex;
        flex-direction: column;
        min-height: 0;
    }

    .route-editor-popover__form {
        display: grid;
        gap: 1rem;
        min-height: 100%;
        padding: 1rem 1.1rem 1.1rem;
        border: 0;
        background: transparent;
        box-shadow: none;
        overflow: auto;
    }

    .route-editor-popover__header {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
    }

    .route-editor-popover__eyebrow {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .route-editor-popover__title {
        margin: 0.45rem 0 0;
        font-size: 1.1rem;
        color: var(--shell-text);
    }

    .route-editor-popover__copy {
        margin: 0.55rem 0 0;
        max-width: 34rem;
        font-size: 0.89rem;
        line-height: 1.65;
        color: var(--shell-muted);
    }

    .route-editor-popover__toolbar {
        display: flex;
        justify-content: space-between;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .route-editor-popover__toggle-group,
    .route-editor-popover__size-group {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.35rem;
        padding: 0.25rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 4%);
        border: 1px solid color-mix(in srgb, var(--shell-border), transparent 12%);
    }

    .route-editor-popover__toggle,
    .route-editor-popover__size {
        border: 0;
        border-radius: 999px;
        background: transparent;
        color: var(--shell-muted);
        padding: 0.45rem 0.8rem;
        font-size: 0.82rem;
        font-weight: 700;
        cursor: pointer;
        transition: background 140ms ease, color 140ms ease;
    }

    .route-editor-popover__toggle--active,
    .route-editor-popover__size--active {
        background: color-mix(in srgb, var(--accent), transparent 86%);
        color: var(--accent);
    }

    .route-editor-popover__close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 999px;
        border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
        background: transparent;
        color: var(--shell-muted);
        cursor: pointer;
    }

    .route-editor-popover__field {
        display: grid;
        gap: 0.4rem;
    }

    .route-editor-popover__label {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .route-editor-popover input {
        width: 100%;
        border-radius: 0.9rem;
        border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 6%);
        color: var(--shell-text);
        padding: 0.75rem 0.85rem;
        font-size: 0.95rem;
    }

    .route-editor-popover input:focus {
        outline: none;
        border-color: var(--accent);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent), transparent 78%);
    }

    .route-editor-popover code {
        display: inline-flex;
        width: max-content;
        max-width: 100%;
        padding: 0.6rem 0.75rem;
        border-radius: 0.85rem;
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 4%);
        color: var(--shell-text);
    }

    .route-editor-popover__warning,
    .route-editor-popover__error {
        padding: 0.8rem 0.9rem;
        border-radius: 0.95rem;
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .route-editor-popover__warning {
        background: color-mix(in srgb, #f59e0b, transparent 88%);
        border: 1px solid color-mix(in srgb, #f59e0b, transparent 70%);
        color: color-mix(in srgb, #f59e0b 68%, var(--shell-text));
    }

    .route-editor-popover__error {
        background: color-mix(in srgb, #ef4444, transparent 90%);
        border: 1px solid color-mix(in srgb, #ef4444, transparent 72%);
        color: color-mix(in srgb, #ef4444 70%, var(--shell-text));
    }

    .route-editor-popover__actions {
        display: flex;
        justify-content: space-between;
        gap: 0.75rem;
        align-items: center;
        flex-wrap: wrap;
    }

    .route-editor-popover__link-group {
        display: flex;
        gap: 0.6rem;
        flex-wrap: wrap;
    }

    .route-editor-popover__action-group {
        display: flex;
        gap: 0.6rem;
        flex-wrap: wrap;
    }

    .route-delete-dialog {
        width: min(100%, 32rem);
        margin: auto;
        padding: 0;
        border: 1px solid color-mix(in srgb, var(--shell-border), transparent 2%);
        border-radius: 1.35rem;
        background-color: var(--shell-panel-bg);
        background:
            linear-gradient(180deg, color-mix(in srgb, var(--shell-panel-bg), transparent 1%), color-mix(in srgb, var(--shell-soft-bg), transparent 1%)),
            var(--shell-panel-bg);
        color: var(--shell-text);
        box-shadow: 0 28px 68px rgba(2, 6, 23, 0.32);
        overflow: hidden;
    }

    .route-delete-dialog::backdrop {
        background: rgba(15, 23, 42, 0.32);
        backdrop-filter: blur(10px);
    }

    .route-delete-dialog__form {
        display: grid;
        gap: 1rem;
        padding: 1.25rem;
    }

    .route-delete-dialog__summary {
        display: grid;
        gap: 0.85rem;
        padding: 0.9rem;
        border-radius: 1rem;
        background: color-mix(in srgb, var(--shell-inset-bg), transparent 4%);
        border: 1px solid color-mix(in srgb, var(--shell-border), transparent 16%);
    }

    .route-delete-dialog__actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    @media (min-width: 80rem) {
        .route-workspace-layout {
            grid-template-columns: minmax(0, 1fr) 0.85rem minmax(19rem, var(--route-sidebar-width, 24rem));
            column-gap: 1rem;
        }

        .route-workspace-layout.workspace-layout--stacked {
            grid-template-columns: minmax(0, 1fr);
        }

        .route-workspace-layout.workspace-layout--stacked .route-sidebar-resizer {
            display: none;
        }

        .route-sidebar-resizer {
            position: relative;
            display: block;
            align-self: stretch;
            min-height: 100%;
            cursor: col-resize;
            touch-action: none;
        }

        .route-sidebar-resizer::before {
            content: '';
            position: absolute;
            inset: 0.25rem 0.38rem;
            border-radius: 999px;
            background: color-mix(in srgb, var(--shell-border), transparent 18%);
            transition: background 140ms ease;
        }

        .route-sidebar-resizer::after {
            content: '';
            position: sticky;
            top: 8rem;
            display: block;
            width: 100%;
            height: 3.5rem;
            border-radius: 999px;
            background:
                radial-gradient(circle at center, color-mix(in srgb, var(--accent), transparent 36%) 0 0.16rem, transparent 0.16rem),
                linear-gradient(180deg, transparent 0.65rem, color-mix(in srgb, var(--accent), transparent 84%) 0.65rem, color-mix(in srgb, var(--accent), transparent 84%) 2.85rem, transparent 2.85rem);
            opacity: 0.62;
            transition: opacity 140ms ease;
        }

        .route-sidebar-resizer:hover::before,
        .route-sidebar-resizer.is-dragging::before {
            background: color-mix(in srgb, var(--accent), transparent 66%);
        }

        .route-sidebar-resizer:hover::after,
        .route-sidebar-resizer.is-dragging::after {
            opacity: 1;
        }

        .route-sidebar-resizer:focus-visible {
            outline: none;
        }

        .route-sidebar-resizer:focus-visible::before {
            background: color-mix(in srgb, var(--accent), transparent 54%);
        }

        body.route-sidebar-resizing,
        body.route-sidebar-resizing * {
            cursor: col-resize !important;
            user-select: none !important;
        }
    }

    @media (max-width: 63.99rem) {
        .route-table {
            min-width: 100%;
        }

        .route-table__actions {
            min-width: 18rem;
        }

        .route-preview-card__meta-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 47.99rem) {
        .route-editor-popover__header {
            flex-direction: column;
        }
    }
</style>
