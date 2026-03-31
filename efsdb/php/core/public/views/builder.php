<?php
/**
 * @return list<string>
 */
function efsdb_builder_bootstrap_branch_paths(string $logicalPath): array
{
    $logicalPath = trim(str_replace('\\', '/', $logicalPath), '/');
    if ($logicalPath === '' || !str_starts_with($logicalPath, 'site/')) {
        return [];
    }

    $segments = array_values(array_filter(explode('/', $logicalPath), static fn(string $segment): bool => $segment !== ''));
    if (count($segments) < 4) {
        return [];
    }

    $isFile = pathinfo($logicalPath, PATHINFO_EXTENSION) !== '';
    $limit = count($segments) - ($isFile ? 2 : 1);
    if ($limit < 2) {
        return [];
    }

    $paths = [];
    for ($index = 2; $index <= $limit; $index++) {
        $paths[] = implode('/', array_slice($segments, 0, $index + 1));
    }

    return array_values(array_unique($paths));
}

function efsdb_builder_is_text_bootstrap_candidate(string $path, array $details, array $download): bool
{
    $bytes = (string)($download['bytes'] ?? '');
    if ($bytes === '' || strlen($bytes) > 262144) {
        return false;
    }

    $mime = strtolower((string)($details['mime'] ?? $download['mime'] ?? ''));
    $ext = strtolower((string)($details['ext'] ?? pathinfo($path, PATHINFO_EXTENSION)));

    if (in_array($ext, [
        'php',
        'phtml',
        'css',
        'scss',
        'sass',
        'less',
        'html',
        'htm',
        'svelte',
        'vue',
        'jsx',
        'tsx',
        'json',
        'jsonc',
        'xml',
        'yaml',
        'yml',
        'toml',
        'md',
        'markdown',
        'txt',
        'text',
        'csv',
        'js',
        'mjs',
        'ts',
        'mts',
        'svg',
        'ico',
    ], true)) {
        return true;
    }

    return str_starts_with($mime, 'text/')
        || str_contains($mime, 'json')
        || str_contains($mime, 'xml')
        || str_contains($mime, 'javascript')
        || str_contains($mime, 'x-httpd-php');
}

$pageTitle = 'EFSDB Builder';
$explorer = $app->getExplorer();
$requestedPath = trim((string)($_GET['path'] ?? ''));
$stagingRoot = $explorer->list($user, 'site/staging', 'natural');
$productionRoot = $explorer->list($user, 'site/production', 'natural');
$workspaceRoot = $explorer->list($user, '', 'natural');
$secondaryRoot = array_values(array_filter(
    is_array($workspaceRoot['items'] ?? null) ? $workspaceRoot['items'] : [],
    static fn(array $item): bool => in_array((string)($item['name'] ?? ''), ['projects', 'system'], true)
));
$branchPayload = [];
foreach (efsdb_builder_bootstrap_branch_paths($requestedPath) as $branchPath) {
    $branchResult = $explorer->list($user, $branchPath, 'natural');
    $branchPayload[$branchPath] = array_values($branchResult['items'] ?? []);
}

$selectedFilePayload = null;
if ($requestedPath !== '') {
    $selectedFileDetails = $explorer->details($user, $requestedPath, 'natural');
    $selectedFileDownload = $selectedFileDetails !== null
        ? $explorer->download($user, $requestedPath, 'natural')
        : null;

    if (
        is_array($selectedFileDetails)
        && is_array($selectedFileDownload)
        && efsdb_builder_is_text_bootstrap_candidate($requestedPath, $selectedFileDetails, $selectedFileDownload)
    ) {
        $selectedFilePayload = [
            'path' => $requestedPath,
            'contentBase64' => base64_encode((string)($selectedFileDownload['bytes'] ?? '')),
            'mime' => (string)($selectedFileDetails['mime'] ?? $selectedFileDownload['mime'] ?? ''),
            'ext' => isset($selectedFileDetails['ext']) ? (string)$selectedFileDetails['ext'] : strtolower(pathinfo($requestedPath, PATHINFO_EXTENSION)),
        ];
    }
}

$initial = [
    'path' => $requestedPath,
    'trees' => [
        'stagingRoot' => array_values($stagingRoot['items'] ?? []),
        'productionRoot' => array_values($productionRoot['items'] ?? []),
        'secondaryRoot' => $secondaryRoot,
    ],
];

if ($branchPayload !== []) {
    $initial['branches'] = $branchPayload;
}

if ($selectedFilePayload !== null) {
    $initial['selectedFile'] = $selectedFilePayload;
}

$bootstrap = [
    'app' => 'builder',
    'tag' => 'efsdb-builder',
    'assetFile' => '/js/efsdb-builder.js',
    'apiBase' => '/_efsdb/api/explorer',
    'authBase' => '/_efsdb/api/auth',
    'user' => $user->toApi(),
    'initial' => $initial,
];
$bootstrapJson = json_encode($bootstrap, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
?>
<script type="module" src="/js/efsdb-builder.js"></script>
<style>
    .builder-view {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
        min-block-size: 0;
        block-size: 100%;
        flex-direction: column;
        overflow: hidden;
        margin: -1.5rem; /* Expand to edges over shell padding */
    }

    .builder-view__surface {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
        min-block-size: 0;
        overflow: hidden;
        border: none;
        box-shadow: none;
    }

    .builder-view__surface efsdb-builder {
        display: block;
        flex: 1 1 auto;
        min-height: 0;
        min-block-size: 0;
        inline-size: 100%;
        block-size: 100%;
    }
</style>

<section class="builder-view">
    <section class="builder-view__surface">
        <script type="application/json" id="efsdb-bootstrap"><?php echo $bootstrapJson ?: '{}'; ?></script>
        <efsdb-builder></efsdb-builder>
    </section>
</section>

<noscript>
    <section class="mt-6">
        <div class="shell-panel p-5 sm:p-7">
            <div class="section-label">No JavaScript</div>
            <p class="mt-4 shell-copy">The builder requires JavaScript to load the workstation UI.</p>
        </div>
    </section>
</noscript>
