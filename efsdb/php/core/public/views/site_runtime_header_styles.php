.site-runtime-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.9rem 1.25rem;
    border: 1px solid var(--shell-border);
    background: color-mix(in srgb, var(--shell-nav-bg), transparent 2%);
    color: var(--shell-text);
}

.site-runtime-bar:not(.site-runtime-bar-compact) {
    padding: 0.9rem 1rem;
    border-width: 0 0 1px 0;
    border-radius: 0;
    box-shadow: none;
    backdrop-filter: none;
}

.site-runtime-bar-compact {
    width: min(100% - 2rem, 1220px);
    margin: 1rem auto 0;
    padding: 0.85rem 1rem;
    border-radius: 1.25rem;
    box-shadow: var(--shell-shadow);
    backdrop-filter: blur(24px);
}

.site-runtime-bar__meta {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
}

.site-runtime-bar__eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--shell-muted);
}

.site-runtime-bar__headline {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    color: var(--shell-text-strong);
    font-size: 0.98rem;
    font-weight: 600;
}

.site-runtime-bar__headline code {
    font-size: 0.78rem;
    font-weight: 600;
}

.site-runtime-bar__sub {
    font-size: 0.84rem;
    color: var(--shell-muted);
}

.site-runtime-bar__actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    margin-left: 0;
}

.site-runtime-bar__action {
    gap: 0.5rem;
    white-space: nowrap;
    width: 100%;
}

.site-runtime-bar__action svg {
    flex: none;
}

@media (min-width: 640px) {
    .site-runtime-bar:not(.site-runtime-bar-compact) {
        padding: 1rem 1.25rem;
    }

    .site-runtime-bar-compact {
        padding: 1rem 1.25rem;
    }

    .site-runtime-bar__actions {
        width: auto;
        margin-left: auto;
    }

    .site-runtime-bar__action {
        width: auto;
    }
}
