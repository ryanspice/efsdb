<?php
require_once __DIR__ . '/../../src/Explorer.php';
require_once __DIR__ . '/../../src/SiteBuildService.php';
require_once __DIR__ . '/../../src/SearchService.php';

$explorer = new Explorer($app->getStore(), $perms);
$buildService = new SiteBuildService($app->getStore(), $app->getPublicWorkspace());
$search = $app->getSearchService();

// Default environment to staging for authoring
$env = $_GET['env'] ?? 'staging';
if (!in_array($env, ['staging', 'production'])) {
    $env = 'staging';
}

$componentsPath = "site/$env/components";

// Use Explorer list as primary source to ensure synthetic directories are included
$componentsList = $explorer->list($user, $componentsPath);
$components = $componentsList['items'] ?? [];

// Enhance with search data for sizes/mimes if available
$searchResult = $search->search($user, [
    'entity' => 'public_workspace_files',
    'q' => $componentsPath,
    'limit' => 100
]);

$searchMap = [];
foreach ($searchResult['results'] ?? [] as $res) {
    $path = $res['summary']['logicalPath'] ?? '';
    if (str_starts_with($path, $componentsPath . '/') && substr_count($path, '/') === 3) {
        $searchMap[basename($path)] = $res['summary'];
    }
}

foreach ($components as &$comp) {
    $name = $comp['name'] ?? '';
    if (isset($searchMap[$name])) {
        $comp['size'] = $searchMap[$name]['size'] ?? $comp['size'] ?? 0;
        $comp['mime'] = $searchMap[$name]['mime'] ?? $comp['mime'] ?? 'text/plain';
    }
}
unset($comp);

// Sort components by name
usort($components, function ($a, $b) {
    return strcasecmp($a['name'] ?? '', $b['name'] ?? '');
});

// Map backing routes
$backingRoutes = [];
foreach ($app->getPublicWorkspace()->listRoutePaths($env) as $routePath) {
    $routeItem = $app->getPublicWorkspace()->readSiteFile($env, $routePath, false, true);
    if ($routeItem === null) {
        continue;
    }
    $bytes = (string)($routeItem['bytes'] ?? '');
    if (str_contains($bytes, 'data-sveltekit-preload-data') || str_contains($bytes, 'Nominated Route for sveltekit') || str_contains($bytes, 'Nominated Route for')) {
        if (preg_match('#components/([^/\'"]+)#', $bytes, $matches)) {
            $compName = $matches[1];
        } else {
            $compName = 'sveltekit';
        }
        $backingRoutes[$compName][] = $routePath;
    }
}

// Load Framework Dependencies
$frameworkDeps = [];
$allDeps = [];

$packageJsons = [];
foreach ($components as $comp) {
    if (($comp['type'] ?? 'file') === 'dir') {
        $name = $comp['name'] ?? '';
        $pkgItem = $app->getPublicWorkspace()->readSiteFile($env, "components/$name/package.json", false, true);
        if ($pkgItem !== null && isset($pkgItem['bytes'])) {
            $packageJsons[$name] = json_decode($pkgItem['bytes'], true) ?: [];
        }
    }
}

// Add base frameworks as well
$repoRoot = dirname(__DIR__, 4);
$frameworkPaths = [
    'sveltekit' => $repoRoot . '/projects/efsdb_homepage/package.json',
    'react' => $repoRoot . '/projects/examples/react/package.json',
    'angular' => $repoRoot . '/projects/examples/angular/package.json'
];

foreach ($frameworkPaths as $fw => $path) {
    if (is_file($path)) {
        $json = json_decode((string)file_get_contents($path), true);
        if (is_array($json)) {
            $packageJsons["Template: $fw"] = $json;
        }
    }
}

foreach ($packageJsons as $compName => $json) {
    $deps = array_merge($json['dependencies'] ?? [], $json['devDependencies'] ?? []);
    foreach ($deps as $pkg => $ver) {
        if (!isset($allDeps[$pkg])) {
            $allDeps[$pkg] = ['count' => 0, 'versions' => [], 'size' => '-'];
        }
        $allDeps[$pkg]['count']++;
        if (!in_array($ver, $allDeps[$pkg]['versions'])) {
            $allDeps[$pkg]['versions'][] = $ver;
        }

        // Identify core framework dependencies
        if (str_contains($pkg, 'svelte') || str_contains($pkg, 'react') || str_contains($pkg, 'angular') || str_contains($pkg, 'vite') || str_contains($pkg, 'typescript')) {
            $frameworkDeps[$pkg] = &$allDeps[$pkg];
        }
    }
}
unset($data);
ksort($frameworkDeps);
ksort($allDeps);

// Get build status
$buildStatus = $buildService->describePath("site/$env/components")['build'] ?? [];
$isBuilding = ($buildStatus['status'] ?? '') === 'building';
$buildSuccess = ($buildStatus['status'] ?? '') === 'success';
$buildError = ($buildStatus['status'] ?? '') === 'failed';

$formatDate = function ($dateStr) {
    if (empty($dateStr)) return 'Never';
    $time = strtotime($dateStr);
    return $time ? date('M j, Y g:i A', $time) : 'Unknown';
};

$formatSize = function ($bytes) {
    if ($bytes === null || $bytes === '' || $bytes === 0) return '-';
    $units = ['B', 'KB', 'MB', 'GB'];
    $bytes = max($bytes, 0);
    $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
    $pow = min($pow, count($units) - 1);
    $bytes /= pow(1024, $pow);
    return round($bytes, 1) . ' ' . $units[$pow];
};
?>

<section class="space-y-6">
    <section class="shell-panel p-5 sm:p-7">
        <div class="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div class="max-w-4xl">
                <div class="section-label">Components Workspace</div>
                <h1 class="shell-strong mt-4 max-w-[16ch] text-3xl font-semibold sm:text-4xl">
                    UI Building Blocks
                </h1>
                <p class="shell-copy mt-4 max-w-3xl text-[0.94rem] leading-8">
                    Author Svelte components and custom elements used across your routes. The build system automatically compiles these into optimized assets on save.
                </p>
            </div>

            <div class="flex flex-wrap gap-3 xl:max-w-[26rem] xl:justify-end">
                <div class="surface-panel py-2 px-3 flex items-center gap-3">
                    <span class="text-sm font-medium text-[var(--shell-muted)]">Environment:</span>
                    <select onchange="window.location.href='<?php echo efsdb_control_plane_path('components'); ?>?env='+this.value" class="bg-transparent text-[var(--shell-text)] font-semibold border-none focus:ring-0 outline-none cursor-pointer">
                        <option value="staging" <?php echo $env === 'staging' ? 'selected' : ''; ?>>Staging</option>
                        <option value="production" <?php echo $env === 'production' ? 'selected' : ''; ?>>Production</option>
                    </select>
                </div>
                <button type="button" onclick="window.dispatchEvent(new CustomEvent('efsdb:create-component', { detail: { path: '<?php echo $componentsPath; ?>' } }))" class="pill-button">
                    Create Component
                </button>
                <a class="ghost-button" href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=<?php echo urlencode($componentsPath); ?>" title="Inspect raw files in Explorer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <div id="components-workspace-layout" class="workspace-layout items-start mt-6">
        <div class="space-y-6 components-workspace-main min-w-0">
            <article class="table-card">
                <div class="flex flex-col gap-3 mb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 class="page-title text-xl">Active Components (<?php echo count($components); ?>)</h2>
                    </div>
                    <div class="flex flex-col items-end gap-3">
                        <div class="text-sm text-[var(--shell-muted)]">Path: <code><?php echo htmlspecialchars($componentsPath); ?></code></div>
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

                <?php if (empty($components)): ?>
                    <div class="surface-panel flex flex-col items-center justify-center py-12 text-center">
                        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--shell-inset-bg)] text-[var(--shell-muted)] mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m21 16-7.162-7.162a2 2 0 0 0-2.828 0L3.838 16" />
                                <path d="m21 21-7.162-7.162a2 2 0 0 0-2.828 0L3.838 21" />
                                <path d="M12 3v12" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-medium text-[var(--shell-text-strong)] mb-2">No components found</h3>
                        <p class="text-[var(--shell-muted)] max-w-md mb-6">
                            This environment currently has no UI components. Create a `.svelte` file to build reusable elements for your routes.
                        </p>
                        <a class="ghost-button" href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode($componentsPath); ?>">
                            Open in Builder
                        </a>
                    </div>
                <?php else: ?>
                    <div class="flex flex-col gap-3">
                        <!-- Desktop Header -->
                        <div class="hidden sm:flex items-center px-4 pb-2 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">
                            <div class="flex-1">Filename</div>
                            <div class="flex items-center gap-4 sm:w-auto">
                                <div class="w-24 sm:px-4">Type</div>
                                <div class="w-24 sm:px-4">Size</div>
                                <div class="w-32 sm:px-4">Backing</div>
                            </div>
                            <div class="w-auto pl-4 text-right" style="min-width: 160px;">Actions</div>
                        </div>

                        <!-- Rows -->
                        <div class="flex flex-col gap-2">
                            <?php foreach ($components as $component): ?>
                                <?php
                                $name = $component['name'] ?? 'Unknown';
                                $type = $component['type'] ?? 'file';
                                $isSynthetic = !empty($component['synthetic']) || ($component['storageType'] ?? '') === 'synthetic';
                                $size = isset($component['size']) ? $formatSize($component['size']) : '-';
                                $ext = pathinfo($name, PATHINFO_EXTENSION);
                                $isDirOrSynthetic = $type === 'dir' || $isSynthetic;
                                $isSvelte = strtolower($ext) === 'svelte' || ($isDirOrSynthetic && (str_contains(strtolower($name), 'svelte') || str_contains(strtolower($name), 'homepage') || str_contains(strtolower($name), 'template')));
                                $isReact = in_array(strtolower($ext), ['jsx', 'tsx']) || ($isDirOrSynthetic && str_contains(strtolower($name), 'react'));
                                $isAngular = (strtolower($ext) === 'ts' && str_contains(strtolower($name), 'component')) || ($isDirOrSynthetic && str_contains(strtolower($name), 'angular'));
                                $fullPath = $componentsPath . '/' . $name;
                                $backed = $backingRoutes[$name] ?? [];
                                ?>
                                <div id="row-<?php echo md5($fullPath); ?>" class="group flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-[var(--shell-border)] bg-[var(--shell-panel-bg)] p-4 hover:border-[var(--shell-border-strong)] transition-colors">

                                    <!-- Filename Column -->
                                    <div class="flex items-center gap-3 flex-1 min-w-0">
                                        <div class="text-[var(--shell-muted)] opacity-70 shrink-0">
                                            <?php if ($isSvelte): ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-26 0 308 308" preserveAspectRatio="xMidYMid">
                                                    <g>
                                                        <path d="M239.681566,40.706757 C211.113272,-0.181889366 154.69089,-12.301439 113.894816,13.6910393 L42.2469062,59.3555354 C22.6760042,71.6680028 9.1958152,91.6538543 5.11196889,114.412133 C1.69420521,133.371174 4.6982178,152.928576 13.6483951,169.987905 C7.51549676,179.291145 3.33259428,189.7413 1.3524912,200.706787 C-2.77083771,223.902098 2.62286977,247.780539 16.3159596,266.951444 C44.8902975,307.843936 101.312954,319.958266 142.10271,293.967161 L213.75062,248.302665 C233.322905,235.991626 246.803553,216.005094 250.885557,193.246067 C254.302867,174.287249 251.30121,154.730228 242.355449,137.668922 C248.486748,128.365895 252.667894,117.916162 254.646134,106.951413 C258.772188,83.7560394 253.378243,59.8765465 239.682665,40.706757" fill="#FF3E00"></path>
                                                        <path d="M106.888658,270.841265 C83.7871855,276.848065 59.3915045,267.805346 45.7864111,248.192566 C37.5477583,236.66102 34.3023491,222.296573 36.7830958,208.343155 C37.1989333,206.075414 37.7711933,203.839165 38.4957755,201.650433 L39.845476,197.534835 L43.5173097,200.231763 C51.9971301,206.462491 61.4784803,211.199728 71.5527203,214.239302 L74.2164003,215.047419 L73.9710252,217.705878 C73.6455499,221.487851 74.6696022,225.262925 76.8616703,228.361972 C80.9560313,234.269749 88.3011363,236.995968 95.2584831,235.190159 C96.8160691,234.773852 98.3006859,234.121384 99.6606718,233.25546 L171.331634,187.582718 C174.877468,185.349963 177.321139,181.729229 178.065299,177.605596 C178.808171,173.400048 177.830501,169.072361 175.351884,165.594581 C171.255076,159.685578 163.908134,156.9582 156.947927,158.762547 C155.392392,159.178888 153.90975,159.83088 152.551509,160.695872 L125.202489,178.130144 C120.705281,180.989558 115.797437,183.144784 110.64897,184.521162 C87.547692,190.527609 63.1523949,181.484801 49.5475471,161.872188 C41.3085624,150.340895 38.0631179,135.976391 40.5442317,122.023052 C43.0002744,108.333716 51.1099574,96.3125326 62.8835328,88.9089537 L134.548175,43.2323647 C139.047294,40.3682559 143.958644,38.21032 149.111311,36.8336525 C172.21244,30.8273594 196.607527,39.8700206 210.212459,59.4823515 C218.451112,71.013898 221.696522,85.3783452 219.215775,99.3317627 C218.798144,101.59911 218.225915,103.835236 217.503095,106.024485 L216.153395,110.140083 L212.483484,107.447276 C204.004261,101.212984 194.522,96.4735732 184.44615,93.4336926 L181.78247,92.6253012 L182.027845,89.9668419 C182.350522,86.1852063 181.326723,82.4111645 179.1372,79.3110228 C175.042839,73.4032457 167.697734,70.677026 160.740387,72.4828355 C159.182801,72.8991426 157.698185,73.5516104 156.338199,74.4175344 L84.6672364,120.0922 C81.1218886,122.323199 78.6795938,125.943704 77.9387928,130.066574 C77.1913232,134.271925 78.1673502,138.601163 80.6469865,142.078963 C84.7438467,147.987899 92.0907405,150.71526 99.0509435,148.910997 C100.608143,148.493836 102.092543,147.841423 103.452857,146.976298 L130.798305,129.548621 C135.293566,126.685437 140.201191,124.528302 145.350175,123.152382 C168.451453,117.145935 192.846751,126.188743 206.451598,145.801356 C214.690583,157.332649 217.936027,171.697153 215.454914,185.650492 C212.997261,199.340539 204.888162,211.362752 193.115613,218.769811 L121.450695,264.442553 C116.951576,267.306662 112.040226,269.464598 106.887559,270.841265" fill="#FFFFFF"></path>
                                                    </g>
                                                </svg>
                                            <?php elseif ($isReact): ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="#61dafb" stroke-width="1.5" class="text-[#61dafb]">
                                                    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                                                    <g stroke="#61dafb">
                                                        <ellipse rx="11" ry="4.2" />
                                                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                                    </g>
                                                </svg>
                                            <?php elseif ($isAngular): ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 250 250" fill="none" class="text-[#dd0031]">
                                                    <path d="M125 10L20 45L35 180L125 240L215 180L230 45L125 10Z" fill="#dd0031" stroke="none" />
                                                    <path d="M125 30L200 170H160L145 130H105L90 170H50L125 30Z" fill="white" stroke="none" />
                                                    <path d="M125 60L105 110H145L125 60Z" fill="#dd0031" stroke="none" />
                                                </svg>
                                            <?php elseif ($type === 'dir'): ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                                                </svg>
                                            <?php else: ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                    <polyline points="14 2 14 8 20 8" />
                                                </svg>
                                            <?php endif; ?>
                                        </div>
                                        <div class="min-w-0 flex-1">
                                            <div class="text-sm font-medium text-[var(--shell-text-strong)] truncate" title="<?php echo htmlspecialchars($name); ?>"><?php echo htmlspecialchars($name); ?></div>
                                        </div>
                                    </div>

                                    <!-- Details & Actions -->
                                    <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:w-auto">
                                        <div class="flex items-center gap-4 sm:w-auto text-sm">
                                            <div class="w-24 sm:px-4">
                                                <?php if ($type === 'dir'): ?>
                                                    <span class="text-xs text-[var(--shell-muted)]">Directory</span>
                                                <?php else: ?>
                                                    <span class="tag text-[10px] py-0.5 px-1.5 <?php echo $isSvelte ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : ''; ?>">
                                                        <?php echo htmlspecialchars(strtoupper($ext ?: 'file')); ?>
                                                    </span>
                                                <?php endif; ?>
                                            </div>
                                            <div class="w-24 sm:px-4 text-xs font-mono text-[var(--shell-muted)]">
                                                <?php echo $type === 'dir' ? '-' : $size; ?>
                                            </div>
                                            <div class="w-32 sm:px-4 text-xs text-[var(--shell-muted)]">
                                                <?php if (!empty($backed)): ?>
                                                    <div class="flex flex-col gap-1">
                                                        <?php foreach ($backed as $bRoute): ?>
                                                            <a href="<?php echo efsdb_control_plane_path('routes'); ?>?env=<?php echo urlencode($env); ?>" class="hover:text-[var(--shell-text)] transition-colors truncate block" title="View in Routes">
                                                                <?php echo htmlspecialchars($bRoute); ?>
                                                            </a>
                                                        <?php endforeach; ?>
                                                    </div>
                                                <?php else: ?>
                                                    -
                                                <?php endif; ?>
                                            </div>
                                        </div>

                                        <div class="flex flex-wrap sm:flex-nowrap items-center gap-1 opacity-100 sm:opacity-70 group-hover:opacity-100 transition-opacity sm:pl-4 mt-2 sm:mt-0 justify-end" style="min-width: 160px;">
                                            <?php if ($env !== 'production'): ?>
                                                <?php if ($type === 'file'): ?>
                                                    <a href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode($component['logicalPath'] ?? $fullPath); ?>" class="pill-button py-1 px-3 text-xs shrink-0" data-tooltip="Edit in Builder">
                                                        Edit
                                                    </a>
                                                <?php else: ?>
                                                    <a href="<?php echo efsdb_control_plane_path('builder'); ?>?path=<?php echo urlencode($component['logicalPath'] ?? $fullPath); ?>" class="pill-button py-1 px-3 text-xs shrink-0">
                                                        Open Directory
                                                    </a>
                                                <?php endif; ?>

                                                <button onclick="componentAction('duplicate', '<?php echo urlencode($component['logicalPath'] ?? $fullPath); ?>', this)" class="ghost-button py-1 px-2 text-xs group/btn flex items-center shrink-0 transition-all" data-tooltip="Duplicate">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                                    </svg>
                                                </button>
                                                <button onclick="componentAction('rename', '<?php echo urlencode($component['logicalPath'] ?? $fullPath); ?>', this)" class="ghost-button py-1 px-2 text-xs group/btn flex items-center shrink-0 transition-all" data-tooltip="Rename">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                                                        <path d="M12 20h9" />
                                                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                                    </svg>
                                                </button>
                                                <button onclick="componentAction('nominate-route', '<?php echo urlencode($component['logicalPath'] ?? $fullPath); ?>', this)" class="ghost-button py-1 px-2 text-xs group/btn flex items-center shrink-0 transition-all" data-tooltip="Nominate Route">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                                    </svg>
                                                </button>
                                                <button onclick="componentAction('nominate-layout', '<?php echo urlencode($component['logicalPath'] ?? $fullPath); ?>', this)" class="ghost-button py-1 px-2 text-xs group/btn flex items-center shrink-0 transition-all" data-tooltip="Nominate Layout">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                                                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                                        <line x1="3" x2="21" y1="9" y2="9" />
                                                        <line x1="9" x2="9" y1="21" y2="9" />
                                                    </svg>
                                                </button>
                                                <button onclick="componentAction('delete', '<?php echo urlencode($component['logicalPath'] ?? $fullPath); ?>', this)" class="ghost-button py-1 px-2 text-xs text-red-500 hover:text-red-600 group/btn flex items-center shrink-0 transition-all" data-tooltip="Delete">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                                                        <path d="M3 6h18" />
                                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                    </svg>
                                                </button>
                                            <?php endif; ?>
                                            <a href="<?php echo efsdb_control_plane_path('explorer'); ?>?mode=natural&path=<?php echo urlencode($component['logicalPath'] ?? $fullPath); ?>" class="ghost-button py-1 px-2 text-xs group/btn flex items-center shrink-0 transition-all" data-tooltip="Inspect">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                    <polyline points="14 2 14 8 20 8" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>
            </article>

            <article class="table-card mt-6">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="page-title text-xl">Package Dependencies</h2>
                    <div class="flex gap-2 text-sm" role="tablist">
                        <button type="button" class="px-3 py-1 rounded-md bg-[var(--shell-primary)] text-[var(--shell-text)] font-medium" onclick="switchDepsTab('framework', this)" role="tab">Framework Core</button>
                        <button type="button" class="px-3 py-1 rounded-md bg-transparent text-[var(--shell-muted)] font-medium" onclick="switchDepsTab('all', this)" role="tab">All Installed</button>
                    </div>
                </div>

                <div id="deps-framework" class="overflow-x-auto h-[300px] border border-[var(--shell-border)] border-opacity-50 rounded-lg relative hidden">
                    <table class="w-full text-left bg-[var(--shell-panel-bg)] z-10 sticky top-0 shadow-sm">
                        <thead>
                            <tr>
                                <th class="pb-3 pt-3 pl-4 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Package</th>
                                <th class="pb-3 pt-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Size</th>
                                <th class="pb-3 pt-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Usage</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="w-full relative" id="deps-framework-container">
                        <table class="w-full text-left absolute top-0 left-0">
                            <tbody class="divide-y divide-[var(--shell-border)] divide-opacity-50" id="deps-framework-tbody">
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="deps-all" class="overflow-x-auto h-[300px] border border-[var(--shell-border)] border-opacity-50 rounded-lg relative hidden">
                    <table class="w-full text-left bg-[var(--shell-panel-bg)] z-10 sticky top-0 shadow-sm">
                        <thead>
                            <tr>
                                <th class="pb-3 pt-3 pl-4 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Package</th>
                                <th class="pb-3 pt-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Size</th>
                                <th class="pb-3 pt-3 text-[0.72rem] font-semibold uppercase tracking-wider text-[var(--shell-muted)]">Usage</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="w-full relative" id="deps-all-container">
                        <table class="w-full text-left absolute top-0 left-0">
                            <tbody class="divide-y divide-[var(--shell-border)] divide-opacity-50" id="deps-all-tbody">
                            </tbody>
                        </table>
                    </div>
                </div>
            </article>
        </div> <!-- End of left column -->

        <aside id="components-workspace-sidebar" class="space-y-6 min-w-0">
            <div class="table-card">
                <div class="section-label mb-4">Compiler Status</div>

                <?php if ($isBuilding): ?>
                    <div class="flex items-center gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30">
                        <div class="animate-spin text-blue-600 dark:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                            </svg>
                        </div>
                        <div>
                            <div class="text-sm font-semibold text-blue-900 dark:text-blue-300">Building components...</div>
                            <div class="text-xs text-blue-700/70 dark:text-blue-400/70 mt-1">Started <?php echo $formatDate($buildStatus['startedAt'] ?? null); ?></div>
                        </div>
                    </div>
                <?php elseif ($buildError): ?>
                    <div class="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30">
                        <div class="text-red-600 dark:text-red-400 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </div>
                        <div>
                            <div class="text-sm font-semibold text-red-900 dark:text-red-300">Build Failed</div>
                            <div class="text-xs text-red-700/70 dark:text-red-400/70 mt-1">At <?php echo $formatDate($buildStatus['lastFailureAt'] ?? null); ?></div>
                            <?php if (!empty($buildStatus['error']['message'])): ?>
                                <div class="mt-2 text-xs font-mono bg-white/50 dark:bg-black/20 p-2 rounded text-red-800 dark:text-red-200 overflow-x-auto overflow-y-auto max-h-64 whitespace-pre-wrap">
                                    <?php echo htmlspecialchars($buildStatus['error']['message']); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php else: ?>
                    <div class="flex items-center gap-3 p-4 rounded-xl bg-[var(--efs-state-success,#48c78e)]/10 border border-[var(--efs-state-success,#48c78e)]/30">
                        <div class="text-[var(--efs-state-success,#48c78e)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <div>
                            <div class="text-sm font-semibold text-[var(--shell-text-strong)]">Build Successful</div>
                            <div class="text-xs text-[var(--shell-muted)] mt-1">Last compiled <?php echo $formatDate($buildStatus['lastSuccessfulAt'] ?? null); ?></div>
                        </div>
                    </div>
                <?php endif; ?>

                <div class="mt-6 space-y-4 text-sm">
                    <div class="flex justify-between border-b border-[var(--shell-border)] border-opacity-50 pb-2">
                        <span class="text-[var(--shell-muted)]">Toolchain</span>
                        <span class="font-medium"><?php echo htmlspecialchars($buildStatus['tool'] ?? 'bun+svelte'); ?></span>
                    </div>
                    <div class="flex justify-between border-b border-[var(--shell-border)] border-opacity-50 pb-2">
                        <span class="text-[var(--shell-muted)]">Compiled Count</span>
                        <span class="font-medium"><?php echo (int)($buildStatus['componentCount'] ?? 0); ?></span>
                    </div>
                </div>
            </div>

            <div class="surface-panel bg-black/5 dark:bg-white/5 border border-[var(--shell-border)]">
                <div class="metric-label mb-2">Usage in Routes</div>
                <p class="text-sm text-[var(--shell-muted)] leading-relaxed">
                    Components are custom elements compiled by Svelte. You can use them in your PHP routes and JSON content like standard HTML tags once the build is successful.
                </p>
            </div>
        </aside>
    </div>
</section>

<script type="module" src="/js/efsdb-create.js"></script>
<script type="module" src="/js/efsdb-prompt.js"></script>
<efsdb-create></efsdb-create>
<efsdb-prompt></efsdb-prompt>

<script>
    const rawFrameworkDeps = <?php echo json_encode($frameworkDeps); ?>;
    const rawAllDeps = <?php echo json_encode($allDeps); ?>;

    const frameworkDeps = Object.entries(rawFrameworkDeps).map(([pkg, data]) => ({
        pkg,
        ...data
    }));
    const allDeps = Object.entries(rawAllDeps).map(([pkg, data]) => ({
        pkg,
        ...data
    }));

    class VirtualList {
        constructor(containerId, data, rowHeight = 44) {
            this.container = document.getElementById(containerId);
            this.tbody = document.getElementById(containerId + '-tbody');
            this.innerContainer = document.getElementById(containerId + '-container');
            this.data = data;
            this.rowHeight = rowHeight;
            this.visibleCount = Math.ceil(this.container.clientHeight / rowHeight) + 4;

            this.innerContainer.style.height = (data.length * rowHeight) + 'px';
            this.table = this.innerContainer.querySelector('table');

            this.container.addEventListener('scroll', () => {
                requestAnimationFrame(() => this.render());
            });
            this.render();
        }

        render() {
            const scrollTop = this.container.scrollTop;
            let startIndex = Math.floor(scrollTop / this.rowHeight);
            let endIndex = Math.min(startIndex + this.visibleCount, this.data.length);

            this.table.style.transform = `translateY(${startIndex * this.rowHeight}px)`;

            let html = '';
            for (let i = startIndex; i < endIndex; i++) {
                const item = this.data[i];
                html += `<tr class="hover:bg-[var(--shell-hover-bg)] transition-colors h-[44px]">
                    <td class="py-2.5 pl-4 pr-4 text-sm font-medium text-[var(--shell-text-strong)]">${item.pkg}</td>
                    <td class="py-2.5 pr-4 text-xs font-mono text-[var(--shell-muted)]">${item.size}</td>
                    <td class="py-2.5 pr-4 text-xs font-mono text-[var(--shell-muted)]">${item.count} projects</td>
                </tr>`;
            }
            this.tbody.innerHTML = html;
        }
    }

    let vListFramework = null;
    let vListAll = null;

    function switchDepsTab(tab, btn) {
        const frameworkEl = document.getElementById('deps-framework');
        const allEl = document.getElementById('deps-all');
        const buttons = btn.parentElement.querySelectorAll('button');

        buttons.forEach(b => {
            b.classList.remove('bg-[var(--shell-primary)]', 'text-[var(--shell-text)]');
            b.classList.add('bg-transparent', 'text-[var(--shell-muted)]');
        });

        btn.classList.add('bg-[var(--shell-primary)]', 'text-[var(--shell-text)]');
        btn.classList.remove('bg-transparent', 'text-[var(--shell-muted)]');

        if (tab === 'framework') {
            frameworkEl.classList.remove('hidden');
            allEl.classList.add('hidden');
            if (!vListFramework) vListFramework = new VirtualList('deps-framework', frameworkDeps);
            else vListFramework.render();
        } else {
            allEl.classList.remove('hidden');
            frameworkEl.classList.add('hidden');
            if (!vListAll) vListAll = new VirtualList('deps-all', allDeps);
            else vListAll.render();
        }
    }

    // Init
    setTimeout(() => {
        const firstTabBtn = document.querySelector('[role="tablist"] button');
        if (firstTabBtn) switchDepsTab('framework', firstTabBtn);
    }, 0);

    function openPrompt(options) {
        return new Promise((resolve) => {
            document.dispatchEvent(new CustomEvent('efsdb:prompt', {
                detail: {
                    ...options,
                    resolve
                }
            }));
        });
    }

    async function componentAction(action, path, btn) {
        path = decodeURIComponent(path);

        // Extract component name from path for defaults
        const compName = path.split('/').pop().replace(/\.[^/.]+$/, "");

        // Find if it has backing routes (for deletion check)
        const row = btn ? btn.closest('.group') : null;
        const hasBacking = row ? row.querySelectorAll('.flex-col.gap-1 a').length > 0 : false;

        const setWorking = (isWorking) => {
            if (btn) {
                if (isWorking) {
                    btn.classList.add('animate-bubble', 'pointer-events-none', 'opacity-50');
                    if (row) row.classList.add('opacity-50', 'bg-[var(--shell-hover-bg)]');
                } else {
                    btn.classList.remove('animate-bubble', 'pointer-events-none', 'opacity-50');
                    if (row) row.classList.remove('opacity-50', 'bg-[var(--shell-hover-bg)]');
                }
            }
        };

        if (action === 'delete') {
            if (hasBacking) {
                const confirmed = await openPrompt({
                    title: 'Warning: Active Component',
                    message: `The component "${compName}" is currently backing one or more active routes. Deleting it will break those routes. Are you absolutely sure you want to delete it?`,
                    type: 'confirm',
                    confirmLabel: 'Delete Component',
                    cancelLabel: 'Cancel'
                });
                if (!confirmed) return;
            } else {
                const confirmed = await openPrompt({
                    title: 'Delete Component',
                    message: `Are you sure you want to delete "${compName}"?`,
                    type: 'confirm',
                    confirmLabel: 'Delete',
                    cancelLabel: 'Cancel'
                });
                if (!confirmed) return;
            }

            setWorking(true);
            fetch('/_efsdb/api/explorer/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    path: path
                })
            }).then(res => res.json()).then(data => {
                if (data.error) {
                    alert('Error: ' + data.error.message);
                } else {
                    window.location.reload();
                }
            }).catch(err => {
                alert('Error: ' + err.message);
            }).finally(() => {
                setWorking(false);
            });
        } else if (action === 'duplicate') {
            const newName = await openPrompt({
                title: 'Duplicate Component',
                message: `Enter a new name for "${compName}":`,
                type: 'input',
                defaultValue: compName + '_copy',
                confirmLabel: 'Duplicate',
                cancelLabel: 'Cancel'
            });
            if (newName) {
                setWorking(true);
                // Simple duplicate logic could go here or to an API
                alert('Duplicate to ' + newName + ' will be implemented in the API.');
                setWorking(false);
            }
        } else if (action === 'rename') {
            const newName = await openPrompt({
                title: 'Rename Component',
                message: `Enter a new name for "${compName}":`,
                type: 'input',
                defaultValue: compName,
                confirmLabel: 'Rename',
                cancelLabel: 'Cancel'
            });
            if (newName && newName !== compName) {
                setWorking(true);
                fetch('/_efsdb/api/explorer/rename', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        path: path,
                        newPath: path.substring(0, path.lastIndexOf('/') + 1) + newName
                    })
                }).then(res => res.json()).then(data => {
                    if (data.error) {
                        alert('Error: ' + data.error.message);
                    } else {
                        window.location.reload();
                    }
                }).catch(err => {
                    alert('Error: ' + err.message);
                }).finally(() => {
                    setWorking(false);
                });
            }
        } else if (action === 'nominate-route') {
            const routePath = await openPrompt({
                title: 'Nominate as Route',
                message: `Enter the URL path for this route (e.g. /about):`,
                type: 'input',
                defaultValue: '/' + compName,
                confirmLabel: 'Nominate',
                cancelLabel: 'Cancel'
            });
            if (routePath) {
                setWorking(true);
                fetch('/_efsdb/api/explorer/nominate-route', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        path: path,
                        routePath: routePath
                    })
                }).then(res => res.json()).then(data => {
                    if (data.error) {
                        alert('Error: ' + data.error.message);
                        setWorking(false);
                    } else {
                        alert('Successfully nominated component as route ' + routePath);
                        window.location.href = '<?php echo efsdb_control_plane_path('routes'); ?>?env=<?php echo $env; ?>';
                    }
                }).catch(err => {
                    alert('Error: ' + err.message);
                    setWorking(false);
                });
            }
        } else if (action === 'nominate-layout') {
            const layoutPath = await openPrompt({
                title: 'Nominate as Layout',
                message: `Enter layout name to nominate this component as a layout:`,
                type: 'input',
                defaultValue: 'default',
                confirmLabel: 'Nominate',
                cancelLabel: 'Cancel'
            });
            if (layoutPath) {
                setWorking(true);
                alert('Nominated as layout ' + layoutPath + '. This will be implemented in the API.');
                setWorking(false);
            }
        }
    }
</script>
<style>
    @keyframes bubble {

        0%,
        100% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.1);
        }
    }

    .animate-bubble {
        animation: bubble 1s ease-in-out infinite;
    }
</style>
