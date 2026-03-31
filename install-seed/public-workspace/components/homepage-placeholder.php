<?php
// EFSDB Homepage Placeholder Component
$siteUrl = rtrim($efsdbSite->basePath(), '/');
if ($siteUrl === '') {
    $siteUrl = '/';
}

$routesUrl = '/_efsdb/?action=routes&env=' . ($efsdbSite->isStaging() ? 'staging' : 'production');
$componentsUrl = '/_efsdb/?action=components&env=' . ($efsdbSite->isStaging() ? 'staging' : 'production');
$environmentLabel = ucfirst($efsdbSite->environment());

return <<<HTML
<style>
    .efs-homepage-placeholder {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 2rem;
        background:
            radial-gradient(circle at top, rgba(59, 130, 246, 0.12), transparent 32%),
            #f5f7fb;
        color: #111827;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .efs-homepage-placeholder__panel {
        width: min(100%, 44rem);
        background: #ffffff;
        border: 1px solid rgba(17, 24, 39, 0.08);
        border-radius: 1.5rem;
        padding: 2rem;
        box-shadow: 0 28px 60px rgba(15, 23, 42, 0.08);
    }

    .efs-homepage-placeholder__eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        background: #eef2ff;
        color: #3730a3;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .efs-homepage-placeholder__title {
        margin: 1.25rem 0 0;
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.02;
        letter-spacing: -0.05em;
    }

    .efs-homepage-placeholder__copy {
        margin: 1rem 0 0;
        max-width: 38rem;
        font-size: 1rem;
        line-height: 1.75;
        color: #4b5563;
    }

    .efs-homepage-placeholder__actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1.5rem;
    }

    .efs-homepage-placeholder__button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 1.1rem;
        border-radius: 999px;
        font-weight: 600;
        text-decoration: none;
    }

    .efs-homepage-placeholder__button--primary {
        background: #111827;
        color: #ffffff;
    }

    .efs-homepage-placeholder__button--secondary {
        border: 1px solid rgba(17, 24, 39, 0.14);
        color: #111827;
    }

    .efs-homepage-placeholder__footer {
        margin-top: 1.5rem;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(17, 24, 39, 0.08);
        display: grid;
        gap: 0.65rem;
    }

    .efs-homepage-placeholder__label {
        font-size: 0.85rem;
        color: #6b7280;
    }

    .efs-homepage-placeholder code {
        display: inline-flex;
        width: max-content;
        max-width: 100%;
        padding: 0.55rem 0.75rem;
        border-radius: 0.9rem;
        background: #f3f4f6;
        color: #111827;
        font-size: 0.92rem;
    }

    @media (max-width: 640px) {
        .efs-homepage-placeholder__panel {
            padding: 1.5rem;
        }
    }
</style>
<main class="efs-homepage-placeholder">
    <section class="efs-homepage-placeholder__panel">
        <div class="efs-homepage-placeholder__eyebrow">{$environmentLabel} Homepage</div>
        <h1 class="efs-homepage-placeholder__title">Edit this starter or replace it with a real homepage.</h1>
        <p class="efs-homepage-placeholder__copy">This placeholder now lives in the workspace as normal files. Keep it, edit it, or rename another route to <code>/</code> from the routes page without leaving the control plane.</p>
        <div class="efs-homepage-placeholder__actions">
            <a class="efs-homepage-placeholder__button efs-homepage-placeholder__button--primary" href="{$routesUrl}">Open Routes</a>
            <a class="efs-homepage-placeholder__button efs-homepage-placeholder__button--secondary" href="{$componentsUrl}">Open Components</a>
        </div>
        <div class="efs-homepage-placeholder__footer">
            <div class="efs-homepage-placeholder__label">Live URL</div>
            <code>{$siteUrl}</code>
        </div>
    </section>
</main>
HTML;
