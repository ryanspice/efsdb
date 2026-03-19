<?php
$requestedMode = (string)($_GET['mode'] ?? 'natural');
$defaultMode = $requestedMode === 'raw' && $perms->canUseRawView($user) ? 'raw' : 'natural';
?>
<script type="module" src="/js/efsdb-explorer.js"></script>

<section class="space-y-6">
    <div class="max-w-4xl">
        <div class="section-label">Logical Explorer</div>
        <h1 class="mt-4 page-title max-w-[14ch]">Decoded content first. Raw mapping when entitled.</h1>
        <p class="shell-copy mt-4 text-base leading-8 sm:text-lg">
            The explorer ships as the first-class EFSDB explorer web component. Natural mode traverses logical entity
            paths and decoded payloads, while raw mode stays entitlement-gated and uses short-lived download tickets
            for browser-safe opens and image previews.
        </p>
    </div>

    <section class="shell-panel overflow-hidden p-2 sm:p-3">
        <efsdb-explorer
            api-base="/api/explorer"
            auth-base="/api/auth"
            mode="<?php echo htmlspecialchars($defaultMode); ?>"
        ></efsdb-explorer>
    </section>
</section>

<noscript>
    <section class="mt-6">
        <div class="shell-panel p-5 sm:p-7">
            <div class="section-label">No JavaScript</div>
            <h2 class="mt-4 page-title max-w-[13ch]">Explorer component unavailable</h2>
            <p class="mt-4 shell-copy">
                The explorer is delivered as a web component and requires JavaScript to browse decoded content.
            </p>
        </div>
    </section>
</noscript>
