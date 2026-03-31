<?php
$pageTitle = 'EFSDB Explorer';
$requestedMode = (string)($_GET['mode'] ?? 'natural');
$defaultMode = $requestedMode === 'raw' && $perms->canUseRawView($user) ? 'raw' : 'natural';
$bootstrap = [
    'app' => 'explorer',
    'tag' => 'efsdb-explorer',
    'assetFile' => '/js/efsdb-explorer.js',
    'apiBase' => '/_efsdb/api/explorer',
    'authBase' => '/_efsdb/api/auth',
    'user' => $user->toApi(),
    'initial' => [
        'mode' => $defaultMode,
        'path' => (string)($_GET['path'] ?? ''),
    ],
];
$bootstrapJson = json_encode($bootstrap, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
?>
<script type="module" src="/js/efsdb-explorer.js"></script>
<style>
    .explorer-view {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
        min-block-size: 0;
        block-size: 100%;
        flex-direction: column;
        gap: 0.75rem;
        overflow: hidden;
    }

    .explorer-view__surface {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
        min-block-size: 0;
        overflow: hidden;
        border-radius: 28px;
        border: 1px solid var(--shell-border);
        box-shadow: var(--shell-shadow);
    }

    .explorer-view__surface efsdb-explorer {
        display: block;
        flex: 1 1 auto;
        min-height: 0;
        min-block-size: 0;
        inline-size: 100%;
        block-size: 100%;
    }

    @media (min-width: 640px) {
        .explorer-view {
            gap: 1.5rem;
        }
    }
</style>

<section class="explorer-view">
    <section class="explorer-view__surface">
        <script type="application/json" id="efsdb-bootstrap">
            <?php echo $bootstrapJson ?: '{}'; ?>
        </script>
        <efsdb-explorer></efsdb-explorer>
    </section>
</section>

<noscript>
    <section class="mt-6">
        <div class="shell-panel p-5 sm:p-7">
            <div class="section-label">No JavaScript</div>
            <p class="mt-4 shell-copy">The explorer requires JavaScript to load the workstation UI.</p>
        </div>
    </section>
</noscript>
