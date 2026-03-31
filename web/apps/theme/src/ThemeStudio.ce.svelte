<svelte:options
  customElement={{
    tag: 'efsdb-theme-studio',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { get } from 'svelte/store';
  import { onMount } from 'svelte';
  import WindowShell, { type WindowState } from '../../../ui/components/shell/WindowShell.svelte';
  import {
    applyThemePaletteToElement,
    paletteToCss,
    themeStudioPresets,
    themeStudioStore,
    type ThemeMode
  } from './lib/themeStudioStore';

  type ThemeStudioTriggerSource = 'toolbar' | 'fab';
  type ThemeStudioTab = 'theme' | 'presets' | 'tokens';

  const PANEL_WIDTH = 468;
  const PANEL_HEIGHT = 696;
  const PANEL_OFFSET = 16;
  const PANEL_GUTTER = 12;
  const PANEL_Z_INDEX = 12060;

  let isOpen = $state(false);
  let isPinned = $state(false);
  let windowState = $state<WindowState>('normal');
  let activeTab = $state<ThemeStudioTab>('theme');
  let anchorSource = $state<ThemeStudioTriggerSource>('toolbar');
  let anchor = $state<HTMLElement | null>(null);
  let popoverRoot = $state<HTMLDivElement | null>(null);

  let windowX = $state(PANEL_GUTTER);
  let windowY = $state(PANEL_GUTTER);
  let windowWidth = $state(PANEL_WIDTH);
  let windowHeight = $state(PANEL_HEIGHT);

  let seed = $state('#5b8cff');
  let mode = $state<ThemeMode>('light');
  let vividness = $state(66);
  let contrast = $state(56);
  let copyLabel = $state<'Copy CSS' | 'Copied'>('Copy CSS');
  let statusLine = $state('One seed color drives the whole palette.');

  const tabs: { id: ThemeStudioTab; label: string }[] = [
    { id: 'theme', label: 'Theme' },
    { id: 'presets', label: 'Presets' },
    { id: 'tokens', label: 'Tokens' }
  ];

  const previewPalette = $derived.by(() => {
    return themeStudioStore.preview(seed, mode, vividness, contrast);
  });

  function resolveAnchor(source: ThemeStudioTriggerSource = anchorSource): void {
    const preferredIds =
      source === 'toolbar'
        ? ['toolbar-theme-trigger', 'fab-theme-trigger']
        : ['fab-theme-trigger', 'toolbar-theme-trigger'];

    for (const id of preferredIds) {
      const trigger = document.getElementById(id);
      if (trigger instanceof HTMLElement) {
        anchor = trigger;
        anchorSource = id === 'fab-theme-trigger' ? 'fab' : 'toolbar';
        return;
      }
    }

    anchor = null;
  }

  function updateWindowPosition(): void {
    if (!anchor || typeof window === 'undefined') return;

    const anchorRect = anchor.getBoundingClientRect();
    const nextWidth = Math.min(PANEL_WIDTH, Math.max(360, window.innerWidth - PANEL_GUTTER * 2));
    const nextHeight = Math.min(PANEL_HEIGHT, Math.max(420, window.innerHeight - PANEL_GUTTER * 2));

    let nextX = anchorRect.right - nextWidth;
    let nextY =
      anchorSource === 'toolbar'
        ? anchorRect.bottom + PANEL_OFFSET
        : anchorRect.top - nextHeight - PANEL_OFFSET;

    nextX = Math.min(
      Math.max(PANEL_GUTTER, nextX),
      Math.max(PANEL_GUTTER, window.innerWidth - nextWidth - PANEL_GUTTER)
    );
    nextY = Math.min(
      Math.max(PANEL_GUTTER, nextY),
      Math.max(PANEL_GUTTER, window.innerHeight - nextHeight - PANEL_GUTTER)
    );

    windowWidth = Math.round(nextWidth);
    windowHeight = Math.round(nextHeight);
    windowX = Math.round(nextX);
    windowY = Math.round(nextY);
  }

  function readTriggerSource(event?: Event): ThemeStudioTriggerSource | null {
    const source = (event as CustomEvent<{ source?: string }> | undefined)?.detail?.source;
    return source === 'toolbar' || source === 'fab' ? source : null;
  }

  function handleToggle(event?: Event): void {
    const requestedSource = readTriggerSource(event) ?? anchorSource;
    const previousSource = anchorSource;
    anchorSource = requestedSource;

    if (windowState === 'minimized') {
      windowState = 'normal';
    }

    if (isPinned) {
      isOpen = true;
      return;
    }

    if (isOpen && previousSource === requestedSource) {
      handleClose();
      return;
    }

    resolveAnchor(requestedSource);
    updateWindowPosition();
    isOpen = true;
  }

  function handleClose(): void {
    isOpen = false;
  }

  function handlePinToggle(): void {
    isPinned = !isPinned;
  }

  function handleDocumentPointerDown(event: PointerEvent): void {
    if (!isOpen || isPinned) return;

    const path = event.composedPath();
    if ((popoverRoot && path.includes(popoverRoot)) || (anchor && path.includes(anchor))) {
      return;
    }

    handleClose();
  }

  function normalizeSeedInput(value: string): string {
    const cleaned = value.trim().replace('#', '');
    if (/^[0-9a-fA-F]{6}$/.test(cleaned)) return `#${cleaned.toLowerCase()}`;
    if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
      return `#${cleaned
        .split('')
        .map(char => `${char}${char}`)
        .join('')
        .toLowerCase()}`;
    }
    return seed;
  }

  async function handleCopyCss(): Promise<void> {
    if (!navigator?.clipboard) {
      copyLabel = 'Copy CSS';
      return;
    }

    await navigator.clipboard.writeText(paletteToCss(previewPalette));
    copyLabel = 'Copied';
    statusLine = 'CSS variables copied to clipboard.';
    setTimeout(() => {
      copyLabel = 'Copy CSS';
    }, 1600);
  }

  function handleApply(): void {
    const palette = themeStudioStore.apply(seed, mode, vividness, contrast);
    applyThemePaletteToElement(palette);

    document.dispatchEvent(
      new CustomEvent('efsdb:theme-studio:applied', {
        detail: { palette }
      })
    );

    statusLine = `Applied ${palette.seed} in ${palette.mode} mode.`;
  }

  function handleReset(): void {
    themeStudioStore.reset();
    const fallback = themeStudioStore.preview('#5b8cff', 'light', 66, 56);

    seed = fallback.seed;
    mode = fallback.mode;
    vividness = fallback.vividness;
    contrast = fallback.contrast;
    applyThemePaletteToElement(fallback);
    statusLine = 'Theme reset to the default shell palette.';
  }

  function applyPreset(preset: (typeof themeStudioPresets)[number]): void {
    seed = preset.seed;
    mode = preset.mode;
    vividness = preset.vividness;
    contrast = preset.contrast;
    activeTab = 'theme';
    statusLine = `${preset.label} loaded.`;
  }

  onMount(() => {
    document.addEventListener('efsdb:theme-studio:toggle', handleToggle as EventListener);
    document.addEventListener('pointerdown', handleDocumentPointerDown, true);
    window.addEventListener('resize', updateWindowPosition);

    themeStudioStore.hydrate();
    const current = get(themeStudioStore);

    seed = current.seed;
    mode = current.mode;
    vividness = current.vividness;
    contrast = current.contrast;

    applyThemePaletteToElement(current.palette);
    resolveAnchor(anchorSource);
    updateWindowPosition();

    return () => {
      document.removeEventListener('efsdb:theme-studio:toggle', handleToggle as EventListener);
      document.removeEventListener('pointerdown', handleDocumentPointerDown, true);
      window.removeEventListener('resize', updateWindowPosition);
    };
  });
</script>

{#if isOpen}
  <div bind:this={popoverRoot} class="theme-studio-window">
    <WindowShell
      title="Theme Studio"
      bind:state={windowState}
      bind:x={windowX}
      bind:y={windowY}
      bind:width={windowWidth}
      bind:height={windowHeight}
      chromeStyle="solid"
      buttonLayout="windows-11"
      alignment="left"
      chromePadding={6}
      borderRadius={18}
      snapRestoreOnRelease={false}
      shiftDragAction="pin"
      pinned={isPinned}
      zIndex={PANEL_Z_INDEX}
      onClose={handleClose}
      onPinToggle={handlePinToggle}
    >
      <div
        class="theme-panel"
        role="dialog"
        aria-label="Theme Studio"
        style={`--preview-accent:${previewPalette.accent};
                --preview-accent-strong:${previewPalette.accentStrong};
                --preview-accent-soft:${previewPalette.accentSoft};
                --preview-secondary:${previewPalette.accentSecondary};
                --preview-secondary-soft:${previewPalette.accentSecondarySoft};
                --preview-surface:${previewPalette.surface};
                --preview-surface-alt:${previewPalette.surfaceAlt};
                --preview-surface-inset:${previewPalette.surfaceInset};
                --preview-border:${previewPalette.border};
                --preview-border-strong:${previewPalette.borderStrong};
                --preview-text:${previewPalette.text};
                --preview-text-muted:${previewPalette.textMuted};
                --preview-on-accent:${previewPalette.onAccent};
                --preview-shadow:${previewPalette.shadow};`}
      >
        <header class="panel-status-row">
          <div class="panel-status-copy">
            <span class="panel-eyebrow">
              {anchorSource === 'toolbar' ? 'Toolbar launch' : 'Fab launch'}
            </span>
            <h2 class="panel-title">Adaptive theme engine</h2>
            <p class="panel-summary">{statusLine}</p>
          </div>

          <span class="mode-pill" data-mode={mode}>
            {mode === 'dark' ? 'Dark mode' : 'Light mode'}
          </span>
        </header>

        <div class="studio-tabs">
          {#each tabs as tab (tab.id)}
            <button
              type="button"
              class="studio-tab"
              class:active={activeTab === tab.id}
              onclick={() => (activeTab = tab.id)}
            >
              {tab.label}
            </button>
          {/each}
        </div>

        <div class="studio-scroll">
          {#if activeTab === 'theme'}
            <section class="hero-card">
              <div class="hero-glow"></div>

              <div class="hero-top">
                <div class="orb-wrap">
                  <div class="theme-orb"></div>
                </div>

                <div class="hero-copy">
                  <h3>Seed color</h3>
                  <p>
                    Pick one color and let the panel derive secondary accent, surfaces, borders, and
                    readable text automatically.
                  </p>
                </div>
              </div>

              <div class="color-input-row">
                <label class="color-chip">
                  <input
                    type="color"
                    bind:value={seed}
                    aria-label="Choose seed color"
                  />
                  <span></span>
                </label>

                <label class="hex-field">
                  <span>Hex</span>
                  <input
                    type="text"
                    value={seed}
                    maxlength="7"
                    spellcheck="false"
                    oninput={(event) => {
                      const target = event.currentTarget as HTMLInputElement;
                      seed = normalizeSeedInput(target.value);
                      target.value = seed;
                    }}
                  />
                </label>

                <div class="mode-toggle" role="tablist" aria-label="Theme mode">
                  <button
                    type="button"
                    class:active={mode === 'light'}
                    onclick={() => (mode = 'light')}
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    class:active={mode === 'dark'}
                    onclick={() => (mode = 'dark')}
                  >
                    Dark
                  </button>
                </div>
              </div>

              <div class="slider-grid">
                <label class="slider-card">
                  <div class="slider-label-row">
                    <span>Vividness</span>
                    <strong>{vividness}</strong>
                  </div>
                  <input type="range" min="0" max="100" step="1" bind:value={vividness} />
                </label>

                <label class="slider-card">
                  <div class="slider-label-row">
                    <span>Contrast</span>
                    <strong>{contrast}</strong>
                  </div>
                  <input type="range" min="0" max="100" step="1" bind:value={contrast} />
                </label>
              </div>

              <div class="swatch-row">
                <button type="button" class="swatch-card">
                  <span class="swatch" style={`background:${previewPalette.accent}`}></span>
                  <small>Accent</small>
                </button>
                <button type="button" class="swatch-card">
                  <span class="swatch" style={`background:${previewPalette.accentStrong}`}></span>
                  <small>Hover</small>
                </button>
                <button type="button" class="swatch-card">
                  <span class="swatch" style={`background:${previewPalette.accentSecondary}`}></span>
                  <small>Secondary</small>
                </button>
                <button type="button" class="swatch-card">
                  <span class="swatch" style={`background:${previewPalette.surfaceAlt}`}></span>
                  <small>Surface</small>
                </button>
              </div>
            </section>

            <section class="preview-shell">
              <div class="preview-topbar">
                <div class="preview-dots">
                  <span></span><span></span><span></span>
                </div>
                <div class="preview-search">Search routes, layouts, content…</div>
                <button type="button" class="preview-ghost">Manage</button>
              </div>

              <div class="preview-body">
                <aside class="preview-sidebar">
                  <button type="button" class="sidebar-item active">Explorer</button>
                  <button type="button" class="sidebar-item">Content</button>
                  <button type="button" class="sidebar-item">Layouts</button>
                  <button type="button" class="sidebar-item">Deployments</button>
                </aside>

                <div class="preview-content">
                  <div class="metric-row">
                    <article class="metric-card">
                      <small>Primary Accent</small>
                      <strong>{previewPalette.accent}</strong>
                    </article>

                    <article class="metric-card">
                      <small>Secondary Accent</small>
                      <strong>{previewPalette.accentSecondary}</strong>
                    </article>
                  </div>

                  <article class="callout-card">
                    <div>
                      <small>Live Preview</small>
                      <h4>Shell-friendly theme tokens</h4>
                      <p>
                        This palette stays readable across surfaces while keeping the accent system
                        expressive enough for a real SaaS product.
                      </p>
                    </div>

                    <div class="callout-actions">
                      <button type="button" class="primary-btn">Primary action</button>
                      <button type="button" class="secondary-btn">Secondary</button>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          {/if}

          {#if activeTab === 'presets'}
            <section class="preset-grid">
              {#each themeStudioPresets as preset (preset.id)}
                <button
                  type="button"
                  class="preset-card"
                  onclick={() => applyPreset(preset)}
                >
                  <div class="preset-band">
                    <span style={`background:${preset.seed}`}></span>
                    <span style={`background:${themeStudioStore.preview(preset.seed, preset.mode, preset.vividness, preset.contrast).accentSecondary}`}></span>
                    <span style={`background:${themeStudioStore.preview(preset.seed, preset.mode, preset.vividness, preset.contrast).surfaceAlt}`}></span>
                  </div>

                  <div class="preset-copy">
                    <strong>{preset.label}</strong>
                    <small>{preset.seed} · {preset.mode}</small>
                  </div>
                </button>
              {/each}
            </section>
          {/if}

          {#if activeTab === 'tokens'}
            <section class="token-list">
              {#each [
                ['--accent', previewPalette.accent],
                ['--accent-strong', previewPalette.accentStrong],
                ['--accent-soft', previewPalette.accentSoft],
                ['--accent-secondary', previewPalette.accentSecondary],
                ['--accent-secondary-soft', previewPalette.accentSecondarySoft],
                ['--surface', previewPalette.surface],
                ['--surface-alt', previewPalette.surfaceAlt],
                ['--surface-inset', previewPalette.surfaceInset],
                ['--border', previewPalette.border],
                ['--border-strong', previewPalette.borderStrong],
                ['--text', previewPalette.text],
                ['--text-muted', previewPalette.textMuted]
              ] as token (token[0])}
                <div class="token-row">
                  <div class="token-swatch" style={`background:${token[1]}`}></div>
                  <div class="token-copy">
                    <strong>{token[0]}</strong>
                    <small>{token[1]}</small>
                  </div>
                </div>
              {/each}
            </section>
          {/if}
        </div>

        <footer class="panel-actions">
          <button type="button" class="ghost-btn" onclick={handleReset}>Reset</button>
          <button type="button" class="ghost-btn" onclick={handleCopyCss}>{copyLabel}</button>
          <button type="button" class="primary-btn" onclick={handleApply}>Apply Theme</button>
        </footer>
      </div>
    </WindowShell>
  </div>
{/if}

<style>
  :host {
    position: relative;
    z-index: 12060;
    isolation: isolate;
  }

  .theme-studio-window {
    position: fixed;
    inset: 0;
    z-index: 12060;
    pointer-events: none;
    isolation: isolate;
  }

  .theme-studio-window :global(.window-shell) {
    pointer-events: auto;
    --window-panel: var(--shell-panel-solid, #ffffff);
    --window-surface: var(--shell-panel-solid-subtle, #f8fafc);
    --window-border: var(--shell-border, #dbe4f0);
    --window-control-size: 1.85rem;
    --window-aux-width: 1.92rem;
    --window-system-width: 2rem;
    --window-control-gap: 0.08rem;
    --window-control-radius: 9px;
  }

  .theme-studio-window :global(.window-chrome) {
    min-height: 2.25rem;
    padding-block: 0.22rem;
    padding-inline: 0.45rem 0.4rem;
    gap: 0.45rem;
  }

  .theme-studio-window :global(.window-tools) {
    gap: 0.1rem;
  }

  .theme-studio-window :global(.window-tools .window-button:not(:first-child)) {
    display: none;
  }

  .theme-studio-window :global(.system-controls .window-button:not(.close-button)) {
    display: none;
  }

  .theme-studio-window :global(.window-title) {
    font: var(--efs-font-label, 600 12px/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    letter-spacing: 0.04em;
  }

  .theme-panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    overflow: hidden;
    background: var(--preview-surface, #ffffff);
    color: var(--preview-text, #0f172a);
    font-family: "Segoe UI Variable", "Segoe UI", system-ui, sans-serif;
  }

  .panel-status-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1rem 0.9rem;
    border-bottom: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);
    background:
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 85%), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 78%),
      var(--preview-surface-alt, #f7faff);
  }

  .panel-status-copy {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-width: 0;
  }

  .panel-eyebrow {
    color: var(--preview-text-muted, #64748b);
    font: var(--efs-font-label, 600 11px/1.4 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .panel-title {
    margin: 0;
    font: var(--efs-font-title-sm, 700 1rem/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    color: var(--preview-text, #0f172a);
  }

  .panel-summary {
    margin: 0;
    color: var(--preview-text, #0f172a);
    font: var(--efs-font-body-sm, 13px/1.55 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
  }

  .mode-pill {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: 0 0.75rem;
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 4%);
    border-radius: 999px;
    background: color-mix(in srgb, var(--preview-surface, #fff), var(--preview-accent, #5b8cff) 6%);
    font: var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    white-space: nowrap;
    color: var(--preview-text, #0f172a);
  }

  .studio-tabs {
    display: flex;
    background: var(--preview-surface-inset, #eef3f8);
    border-bottom: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);
    padding: 0 0.75rem;
    gap: 0.25rem;
    flex-shrink: 0;
  }

  .studio-tab {
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--preview-text-muted, #64748b);
    font: var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.18s ease;
  }

  .studio-tab:hover,
  .studio-tab.active {
    color: var(--preview-text, #0f172a);
  }

  .studio-tab.active {
    border-bottom-color: var(--preview-accent, #5b8cff);
  }

  .studio-scroll {
    flex: 1;
    overflow-y: auto;
    background: var(--preview-surface-alt, #f8fafc);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hero-card,
  .preview-shell,
  .preset-card,
  .token-row {
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);
    border-radius: 18px;
    box-shadow: var(--preview-shadow, 0 18px 60px rgba(15, 23, 42, 0.12));
  }

  .hero-card {
    position: relative;
    overflow: hidden;
    padding: 1rem;
    background:
      radial-gradient(circle at 12% 18%, color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 80%), transparent 34%),
      radial-gradient(circle at 80% 0%, color-mix(in srgb, var(--preview-secondary, #8b5cf6), transparent 86%), transparent 28%),
      var(--preview-surface, #ffffff);
  }

  .hero-glow {
    position: absolute;
    inset: -10% 10% auto auto;
    width: 10rem;
    height: 10rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 76%);
    filter: blur(50px);
    opacity: 0.9;
    pointer-events: none;
  }

  .hero-top {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
  }

  .orb-wrap {
    width: 4.5rem;
    height: 4.5rem;
    display: grid;
    place-items: center;
    border-radius: 1.25rem;
    background: color-mix(in srgb, var(--preview-accent-soft, #e8efff), transparent 10%);
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 25%);
  }

  .theme-orb {
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 999px;
    background:
      radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.88), transparent 22%),
      linear-gradient(145deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.45),
      0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 64%);
  }

  .hero-copy h3 {
    margin: 0 0 0.2rem;
    font-size: 1rem;
    line-height: 1.2;
  }

  .hero-copy p {
    margin: 0;
    font-size: 0.82rem;
    line-height: 1.55;
    color: var(--preview-text-muted, #64748b);
  }

  .color-input-row {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 0.75rem;
    margin-bottom: 0.9rem;
    align-items: center;
  }

  .color-chip {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    padding: 0.2rem;
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);
    background: var(--preview-surface-alt, #f8fafc);
    cursor: pointer;
    display: block;
  }

  .color-chip input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .color-chip span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    background: linear-gradient(135deg, var(--preview-accent, #5b8cff), var(--preview-secondary, #8b5cf6));
  }

  .hex-field {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .hex-field span {
    color: var(--preview-text-muted, #64748b);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
  }

  .hex-field input,
  .preview-search {
    min-height: 2.7rem;
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);
    background: var(--preview-surface, #ffffff);
    color: var(--preview-text, #0f172a);
    border-radius: 0.95rem;
    padding: 0 0.9rem;
    font: inherit;
    outline: none;
  }

  .hex-field input:focus {
    border-color: var(--preview-accent, #5b8cff);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 82%);
  }

  .mode-toggle {
    display: inline-flex;
    padding: 0.2rem;
    border-radius: 999px;
    background: var(--preview-surface-inset, #eef3f8);
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);
    gap: 0.2rem;
  }

  .mode-toggle button,
  .ghost-btn,
  .primary-btn,
  .secondary-btn,
  .preview-ghost,
  .sidebar-item,
  .swatch-card,
  .preset-card {
    font: inherit;
  }

  .mode-toggle button {
    min-width: 4.35rem;
    min-height: 2.35rem;
    padding: 0 0.85rem;
    border-radius: 999px;
    border: none;
    background: transparent;
    color: var(--preview-text-muted, #64748b);
    cursor: pointer;
  }

  .mode-toggle button.active {
    background: var(--preview-accent, #5b8cff);
    color: var(--preview-on-accent, #ffffff);
  }

  .slider-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin-bottom: 0.9rem;
  }

  .slider-card {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    padding: 0.8rem 0.9rem;
    border-radius: 1rem;
    background: color-mix(in srgb, var(--preview-surface-alt, #f8fafc), var(--preview-accent, #5b8cff) 4%);
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);
  }

  .slider-label-row {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    font-size: 0.82rem;
  }

  input[type='range'] {
    width: 100%;
    accent-color: var(--preview-accent, #5b8cff);
  }

  .swatch-row {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.6rem;
  }

  .swatch-card {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.65rem;
    border-radius: 0.95rem;
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);
    background: var(--preview-surface-alt, #f8fafc);
    color: var(--preview-text, #0f172a);
    cursor: default;
  }

  .swatch {
    height: 2.35rem;
    border-radius: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.28);
  }

  .swatch-card small {
    color: var(--preview-text-muted, #64748b);
    font-size: 0.74rem;
  }

  .preview-shell {
    overflow: hidden;
    background: var(--preview-surface, #fff);
  }

  .preview-topbar {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 0.75rem;
    align-items: center;
    padding: 0.85rem;
    border-bottom: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);
    background: var(--preview-surface-alt, #f8fafc);
  }

  .preview-dots {
    display: flex;
    gap: 0.35rem;
  }

  .preview-dots span {
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 999px;
    background: var(--preview-border-strong, #c7d4e6);
  }

  .preview-search {
    display: flex;
    align-items: center;
    color: var(--preview-text-muted, #64748b);
    font-size: 0.82rem;
  }

  .preview-ghost,
  .ghost-btn,
  .secondary-btn {
    min-height: 2.5rem;
    padding: 0 0.9rem;
    border-radius: 0.95rem;
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 8%);
    background: var(--preview-surface, #fff);
    color: var(--preview-text, #0f172a);
    cursor: pointer;
  }

  .preview-body {
    display: grid;
    grid-template-columns: 11rem minmax(0, 1fr);
    min-height: 18rem;
  }

  .preview-sidebar {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    padding: 0.9rem;
    background: var(--preview-surface-inset, #eef3f8);
    border-right: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);
  }

  .sidebar-item {
    min-height: 2.45rem;
    border-radius: 0.9rem;
    border: 1px solid transparent;
    background: transparent;
    color: var(--preview-text-muted, #64748b);
    text-align: left;
    padding: 0 0.85rem;
    cursor: pointer;
  }

  .sidebar-item.active {
    background: var(--preview-accent-soft, #e8efff);
    border-color: color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 75%);
    color: var(--preview-text, #0f172a);
  }

  .preview-content {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    padding: 0.95rem;
    background: var(--preview-surface, #fff);
  }

  .metric-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .metric-card,
  .callout-card {
    border-radius: 1rem;
    border: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 10%);
    background: var(--preview-surface-alt, #f8fafc);
  }

  .metric-card {
    padding: 0.85rem 0.95rem;
  }

  .metric-card small,
  .callout-card small,
  .token-copy small,
  .preset-copy small {
    color: var(--preview-text-muted, #64748b);
  }

  .metric-card strong {
    display: block;
    margin-top: 0.25rem;
  }

  .callout-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
  }

  .callout-card h4 {
    margin: 0.15rem 0 0.35rem;
    font-size: 1rem;
  }

  .callout-card p {
    margin: 0;
    font-size: 0.83rem;
    line-height: 1.55;
    color: var(--preview-text-muted, #64748b);
  }

  .callout-actions {
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }

  .primary-btn {
    min-height: 2.6rem;
    padding: 0 1rem;
    border-radius: 0.95rem;
    border: 1px solid color-mix(in srgb, var(--preview-accent-strong, #3b62db), transparent 18%);
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--preview-accent, #5b8cff), white 8%),
      var(--preview-accent, #5b8cff)
    );
    color: var(--preview-on-accent, #ffffff);
    cursor: pointer;
    box-shadow: 0 10px 30px color-mix(in srgb, var(--preview-accent, #5b8cff), transparent 72%);
  }

  .secondary-btn {
    background: color-mix(in srgb, var(--preview-secondary-soft, #ede9fe), var(--preview-surface, #fff) 8%);
  }

  .preset-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .preset-card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.8rem;
    background: var(--preview-surface, #fff);
    cursor: pointer;
    text-align: left;
  }

  .preset-band {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.45rem;
  }

  .preset-band span {
    height: 3rem;
    border-radius: 0.9rem;
  }

  .preset-copy {
    display: flex;
    flex-direction: column;
    gap: 0.18rem;
  }

  .token-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .token-row {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.8rem;
    align-items: center;
    padding: 0.8rem;
    background: var(--preview-surface, #fff);
  }

  .token-swatch {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 0.95rem;
    border: 1px solid rgba(255, 255, 255, 0.28);
  }

  .token-copy {
    display: flex;
    flex-direction: column;
    gap: 0.12rem;
  }

  .panel-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.65rem;
    padding: 0.9rem 1rem 1rem;
    border-top: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);
    background: var(--preview-surface, #fff);
  }

  @media (max-width: 47.99rem) {
    .panel-status-row,
    .hero-top,
    .color-input-row,
    .preview-body,
    .callout-card {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;
    }

    .slider-grid,
    .metric-row,
    .preset-grid,
    .swatch-row {
      grid-template-columns: 1fr;
    }

    .preview-sidebar {
      border-right: 0;
      border-bottom: 1px solid color-mix(in srgb, var(--preview-border, #dbe4f0), transparent 12%);
    }

    .mode-pill {
      align-self: flex-start;
    }

    .panel-actions {
      flex-wrap: wrap;
    }
  }
</style>
