<?php
// EFSDB Homepage Placeholder Route
$componentFile = $efsdbSite->workspacePath('components/homepage-placeholder.php');
if (is_file($componentFile)) {
    return include $componentFile;
}

$siteUrl = rtrim($efsdbSite->basePath(), '/');
if ($siteUrl === '') {
    $siteUrl = '/';
}

$routesUrl = '/_efsdb/?action=routes&env=' . ($efsdbSite->isStaging() ? 'staging' : 'production');
$componentsUrl = '/_efsdb/?action=components&env=' . ($efsdbSite->isStaging() ? 'staging' : 'production');

return <<<HTML
<main style="min-height:100vh;display:grid;place-items:center;padding:2rem;background:#f5f7fb;color:#111827;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
    <section style="width:min(100%,44rem);background:#ffffff;border:1px solid rgba(17,24,39,0.08);border-radius:1.5rem;padding:2rem;box-shadow:0 28px 60px rgba(15,23,42,0.08);">
        <div style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.35rem 0.75rem;border-radius:999px;background:#eef2ff;color:#3730a3;font-size:0.78rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Homepage Starter</div>
        <h1 style="margin:1.25rem 0 0;font-size:clamp(2rem,4vw,3rem);line-height:1.02;letter-spacing:-0.05em;">Your homepage is ready to edit.</h1>
        <p style="margin:1rem 0 0;max-width:38rem;font-size:1rem;line-height:1.75;color:#4b5563;">EFSDB now keeps the homepage as a normal route. Replace this starter by editing <code>routes/index.php</code> or by retargeting another route to <code>/</code> from the routes workspace.</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:1.5rem;">
            <a href="{$routesUrl}" style="display:inline-flex;align-items:center;justify-content:center;padding:0.8rem 1.1rem;border-radius:999px;background:#111827;color:#ffffff;font-weight:600;text-decoration:none;">Open Routes</a>
            <a href="{$componentsUrl}" style="display:inline-flex;align-items:center;justify-content:center;padding:0.8rem 1.1rem;border-radius:999px;border:1px solid rgba(17,24,39,0.14);color:#111827;font-weight:600;text-decoration:none;">Open Components</a>
        </div>
        <div style="margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid rgba(17,24,39,0.08);display:grid;gap:0.65rem;">
            <div style="font-size:0.85rem;color:#6b7280;">Live URL</div>
            <code style="display:inline-flex;width:max-content;max-width:100%;padding:0.55rem 0.75rem;border-radius:0.9rem;background:#f3f4f6;color:#111827;font-size:0.92rem;">{$siteUrl}</code>
        </div>
    </section>
</main>
HTML;
