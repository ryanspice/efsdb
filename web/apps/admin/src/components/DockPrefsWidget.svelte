<script lang="ts">
  import { onMount } from 'svelte';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AppIcon from '@ui/components/icons/AppIcon.svelte';
  import {
    areWindowSettingsEqual,
    DEFAULT_WINDOW_SETTINGS,
    getWindowSettings,
    subscribeWindowSettings,
    updateWindowSettings,
    type WindowSettings
  } from '@ui/components/shell/windowSettings';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import InlineHelp from './InlineHelp.svelte';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
  };

  const dockLabelModeLabels: Record<WindowSettings['dockLabelMode'], string> = {
    hover: 'Hover labels',
    always: 'Always show labels',
    popout: 'Pop-out labels',
    hidden: 'Hidden labels'
  };

  const uid = $props.id();

  let {
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    onOpen,
    onTogglePin
  }: Props = $props();

  function createWindowSettingsSnapshot(settings: WindowSettings = getWindowSettings()): WindowSettings {
    return {
      ...DEFAULT_WINDOW_SETTINGS,
      ...settings
    };
  }

  let appliedPrefs = $state<WindowSettings>(createWindowSettingsSnapshot());
  let draftPrefs = $state<WindowSettings>(createWindowSettingsSnapshot());

  let prefsDirty = $derived(!areWindowSettingsEqual(draftPrefs, appliedPrefs));
  let dockPreviewStyle = $derived.by(() =>
    [
      `--preview-dock-size:${draftPrefs.dockButtonSize}px`,
      `--preview-dock-width:${Math.max(draftPrefs.dockButtonSize, draftPrefs.dockButtonWidth)}px`,
      `--preview-dock-gap:${draftPrefs.dockGap}px`,
      `--preview-dock-icon-size:${Math.max(16, Math.round(draftPrefs.dockButtonSize * 0.39))}px`,
      `--preview-dock-icon-scale:${draftPrefs.dockIconScale / 100}`,
      `--preview-dock-offset:${draftPrefs.dockOffset}px`
    ].join(';')
  );

  onMount(() => {
    const unsubscribeWindowSettings = subscribeWindowSettings((settings) => {
      const next = createWindowSettingsSnapshot(settings);
      const dirty = !areWindowSettingsEqual(draftPrefs, appliedPrefs);
      appliedPrefs = next;

      if (!dirty) {
        draftPrefs = next;
      }
    });

    return () => {
      unsubscribeWindowSettings();
    };
  });

  function updateDraft(partial: Partial<WindowSettings>) {
    draftPrefs = {
      ...draftPrefs,
      ...partial
    };
  }

  function applyDraft() {
    updateWindowSettings(draftPrefs);
  }

  function revertDraft() {
    draftPrefs = createWindowSettingsSnapshot(appliedPrefs);
  }

  function resetDraft() {
    draftPrefs = {
      ...createWindowSettingsSnapshot(appliedPrefs),
      globalEdgeDock: DEFAULT_WINDOW_SETTINGS.globalEdgeDock,
      dockButtonSize: DEFAULT_WINDOW_SETTINGS.dockButtonSize,
      dockButtonWidth: DEFAULT_WINDOW_SETTINGS.dockButtonWidth,
      dockIconScale: DEFAULT_WINDOW_SETTINGS.dockIconScale,
      dockGap: DEFAULT_WINDOW_SETTINGS.dockGap,
      dockOffset: DEFAULT_WINDOW_SETTINGS.dockOffset,
      dockLabelMode: DEFAULT_WINDOW_SETTINGS.dockLabelMode
    };
  }
</script>

<AdminWidgetFrame
  eyebrow="Pinned Dock"
  title="Pinned tool preferences"
  description="Control cross-page pinned tools here. This widget owns label reveal, button proportion, icon scale, spacing, and whether pinned tools appear outside the admin workspace."
  {mode}
  {dataTestid}
  {open}
  {pinned}
  {onOpen}
  onTogglePin={onTogglePin}
>
  {#snippet footer()}
    <div class="footer-row">
      <div class="footer-pills">
        <StatusPill label={prefsDirty ? 'Preview pending' : 'Applied'} tone={prefsDirty ? 'warning' : 'accent'} />
        <StatusPill
          label={draftPrefs.globalEdgeDock ? 'Pinned tools on every page' : 'Pinned tools stay in admin'}
          tone={draftPrefs.globalEdgeDock ? 'accent' : 'neutral'}
        />
        <StatusPill label={dockLabelModeLabels[draftPrefs.dockLabelMode]} tone="info" />
        <StatusPill label={`${draftPrefs.dockButtonWidth}px width`} tone="neutral" />
        <StatusPill label={`${draftPrefs.dockIconScale}% icons`} tone="neutral" />
      </div>

      <div class="footer-actions">
        <button class="prefs-button" type="button" onclick={revertDraft} disabled={!prefsDirty}>
          Revert
        </button>
        <button class="prefs-button" type="button" onclick={resetDraft}>
          Defaults
        </button>
        <button class="prefs-button is-primary" type="button" onclick={applyDraft} disabled={!prefsDirty}>
          Apply
        </button>
      </div>
    </div>
  {/snippet}

  <div class="prefs-layout">
    <div class="prefs-copy">
      <div class="prefs-copy-main">
        <p>
          Move dock behavior out of the window manager and stage it here. This sheet controls how
          pinned admin tools reveal labels, how wide or compact each button feels, and whether the
          rail is available across the rest of the site.
        </p>
      </div>
      <div class="prefs-copy-pills">
        <StatusPill
          label={draftPrefs.globalEdgeDock ? 'Global rail enabled' : 'Admin-only rail'}
          tone={draftPrefs.globalEdgeDock ? 'accent' : 'neutral'}
        />
        <StatusPill label={dockLabelModeLabels[draftPrefs.dockLabelMode]} tone="info" />
      </div>
    </div>

    <section class="preview-stage" aria-label="Pinned dock preview">
      <div class="preview-head">
        <div>
          <span class="preview-kicker">Preview only</span>
          <h4>Dock label reveal and button shape</h4>
        </div>
        <button class="prefs-button is-primary" type="button" onclick={applyDraft} disabled={!prefsDirty}>
          Apply
        </button>
      </div>

      <div class="preview-surface" style={dockPreviewStyle}>
        <div class="preview-canvas">
          <div class="preview-route-card">
            <span class="preview-route-kicker">Page shell</span>
            <strong>Any route can host pinned tools</strong>
            <p>Use the global dock toggle to mirror pinned admin tools outside the admin workspace.</p>
          </div>

          <div class="preview-dock" data-label-mode={draftPrefs.dockLabelMode}>
            <div class="preview-dock-item">
              <span class="preview-dock-popout">Windows</span>
              <button class="preview-dock-button is-active" type="button" aria-label="Windows">
                <AppIcon name="window-preferences" />
              </button>
              <span class="preview-dock-label">Windows</span>
            </div>

            <div class="preview-dock-item">
              <span class="preview-dock-popout">Search</span>
              <button class="preview-dock-button" type="button" aria-label="Search">
                <AppIcon name="catalog-search" />
              </button>
              <span class="preview-dock-label">Search</span>
            </div>

            <div class="preview-dock-item">
              <span class="preview-dock-popout">Modes</span>
              <button class="preview-dock-button" type="button" aria-label="Modes">
                <AppIcon name="display-mode" />
              </button>
              <span class="preview-dock-label">Modes</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="prefs-section">
      <div class="prefs-section-head">
        <div class="prefs-section-title">
          <div class="prefs-heading-stack">
            <span class="group-kicker">Presence</span>
            <h4>Where the dock is allowed to appear</h4>
          </div>
          <InlineHelp
            title="Pinned dock presence"
            text="Enable global dock access when pinned admin tools should be reachable from any page. Turn it off to keep the dock inside the admin workspace only."
          />
        </div>
      </div>

      <div class="prefs-section-body">
        <label class="field-toggle field-toggle-feature">
          <input
            type="checkbox"
            checked={draftPrefs.globalEdgeDock}
            onchange={(event) =>
              updateDraft({ globalEdgeDock: event.currentTarget.checked })}
          />
          <span>Show pinned admin tools on every page, not just inside the admin workspace.</span>
        </label>
      </div>
    </section>

    <section class="prefs-section">
      <div class="prefs-section-head">
        <div class="prefs-section-title">
          <div class="prefs-heading-stack">
            <span class="group-kicker">Labels</span>
            <h4>How titles reveal around dock buttons</h4>
          </div>
          <InlineHelp
            title="Dock labels"
            text="Hover labels stay compact, always shows titles full-time, pop-out grows the title tag out beside the active button, and hidden leaves icons only."
          />
        </div>
      </div>

      <div class="prefs-section-body">
        <div class="prefs-grid">
          <div class="field-stack">
            <label for={`${uid}-dock-label-mode`}>Dock labels</label>
            <select
              id={`${uid}-dock-label-mode`}
              value={draftPrefs.dockLabelMode}
              onchange={(event) =>
                updateDraft({
                  dockLabelMode: event.currentTarget.value as WindowSettings['dockLabelMode']
                })}
            >
              <option value="hover">Hover labels</option>
              <option value="always">Always show labels</option>
              <option value="popout">Pop-out labels</option>
              <option value="hidden">Hide labels</option>
            </select>
          </div>

          <div class="field-stack">
            <label for={`${uid}-dock-offset`}>Dock inset ({draftPrefs.dockOffset}px)</label>
            <input
              id={`${uid}-dock-offset`}
              type="range"
              min="8"
              max="36"
              step="1"
              value={draftPrefs.dockOffset}
              oninput={(event) =>
                updateDraft({ dockOffset: Number.parseInt(event.currentTarget.value, 10) })}
            />
          </div>
        </div>
      </div>
    </section>

    <section class="prefs-section">
      <div class="prefs-section-head">
        <div class="prefs-section-title">
          <div class="prefs-heading-stack">
            <span class="group-kicker">Geometry</span>
            <h4>Button size, width, and icon scale</h4>
          </div>
          <InlineHelp
            title="Dock geometry"
            text="Increase width to get the longer Windows 8 or 10 style capsule buttons. Raise icon scale if the glyphs feel too small after widening the rail."
          />
        </div>
      </div>

      <div class="prefs-section-body">
        <div class="prefs-grid">
          <div class="field-stack">
            <label for={`${uid}-dock-size`}>Dock button size ({draftPrefs.dockButtonSize}px)</label>
            <input
              id={`${uid}-dock-size`}
              type="range"
              min="40"
              max="72"
              step="1"
              value={draftPrefs.dockButtonSize}
              oninput={(event) =>
                updateDraft({ dockButtonSize: Number.parseInt(event.currentTarget.value, 10) })}
            />
          </div>

          <div class="field-stack">
            <label for={`${uid}-dock-width`}>Dock button width ({draftPrefs.dockButtonWidth}px)</label>
            <input
              id={`${uid}-dock-width`}
              type="range"
              min="40"
              max="168"
              step="1"
              value={draftPrefs.dockButtonWidth}
              oninput={(event) =>
                updateDraft({ dockButtonWidth: Number.parseInt(event.currentTarget.value, 10) })}
            />
          </div>

          <div class="field-stack">
            <label for={`${uid}-dock-icon-scale`}>Dock icon scale ({draftPrefs.dockIconScale}%)</label>
            <input
              id={`${uid}-dock-icon-scale`}
              type="range"
              min="70"
              max="160"
              step="1"
              value={draftPrefs.dockIconScale}
              oninput={(event) =>
                updateDraft({ dockIconScale: Number.parseInt(event.currentTarget.value, 10) })}
            />
          </div>

          <div class="field-stack">
            <label for={`${uid}-dock-gap`}>Dock spacing ({draftPrefs.dockGap}px)</label>
            <input
              id={`${uid}-dock-gap`}
              type="range"
              min="4"
              max="24"
              step="1"
              value={draftPrefs.dockGap}
              oninput={(event) =>
                updateDraft({ dockGap: Number.parseInt(event.currentTarget.value, 10) })}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</AdminWidgetFrame>

<style>
  .prefs-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .prefs-copy,
  .footer-row,
  .preview-head,
  .prefs-section-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.9rem;
  }

  .prefs-copy {
    flex-wrap: wrap;
  }

  .prefs-copy-main {
    flex: 1 1 30rem;
  }

  .prefs-copy-main p {
    margin: 0;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  .prefs-copy-pills,
  .footer-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .footer-row {
    flex-wrap: wrap;
  }

  .footer-actions {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  }

  .preview-stage,
  .prefs-section {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    padding: 1rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    border-radius: 22px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 28%),
      color-mix(in srgb, var(--shell-surface), transparent 2%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  .preview-kicker,
  .group-kicker {
    display: inline-flex;
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .preview-head h4,
  .prefs-heading-stack h4 {
    margin: 0.18rem 0 0;
    color: var(--shell-text-strong);
    font: var(--efs-font-title-sm);
  }

  .preview-surface {
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 16%);
    border-radius: 18px;
    background:
      radial-gradient(circle at top left, color-mix(in srgb, var(--shell-primary), transparent 90%), transparent 28%),
      color-mix(in srgb, var(--shell-panel), transparent 6%);
    padding: 1rem;
  }

  .preview-canvas {
    display: flex;
    min-height: 13rem;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
  }

  .preview-route-card {
    display: flex;
    max-width: 18rem;
    flex-direction: column;
    gap: 0.45rem;
    padding: 1rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 12%);
    border-radius: 18px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 28%),
      color-mix(in srgb, var(--shell-surface), transparent 4%);
  }

  .preview-route-kicker {
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .preview-route-card strong {
    color: var(--shell-text-strong);
    font: var(--efs-font-title-sm);
  }

  .preview-route-card p {
    margin: 0;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .preview-dock {
    display: inline-flex;
    gap: var(--preview-dock-gap);
    align-items: flex-end;
    padding-inline-end: var(--preview-dock-offset);
  }

  .preview-dock-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
  }

  .preview-dock-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--preview-dock-width);
    height: var(--preview-dock-size);
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    border-radius: min(999px, calc(var(--preview-dock-size) * 0.52));
    background:
      radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--shell-primary), transparent 86%), transparent 54%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 70%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);
    color: var(--shell-text);
    box-shadow:
      0 18px 44px rgba(0, 0, 0, 0.32),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 86%);
  }

  .preview-dock-button.is-active {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 36%);
    background:
      radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--shell-primary), transparent 82%), transparent 52%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.09), transparent 72%),
      color-mix(in srgb, var(--shell-primary), transparent 88%);
  }

  .preview-dock-button :global(.app-icon) {
    width: var(--preview-dock-icon-size);
    height: var(--preview-dock-icon-size);
    transform: scale(var(--preview-dock-icon-scale));
    transform-origin: center;
  }

  .preview-dock-label,
  .preview-dock-popout {
    color: color-mix(in srgb, var(--shell-text), transparent 12%);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .preview-dock-popout {
    position: absolute;
    right: calc(100% - 0.65rem);
    z-index: 0;
    padding: 0.55rem 1rem 0.55rem 1.15rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-right: 0;
    border-radius: 999px 0 0 999px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 36%),
      color-mix(in srgb, var(--shell-inset-bg), transparent 4%);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
    opacity: 0;
    transform: scaleX(0.76);
    transform-origin: right center;
  }

  .preview-dock[data-label-mode='hover'] .preview-dock-label,
  .preview-dock[data-label-mode='hidden'] .preview-dock-label,
  .preview-dock[data-label-mode='always'] .preview-dock-popout,
  .preview-dock[data-label-mode='hover'] .preview-dock-popout,
  .preview-dock[data-label-mode='hidden'] .preview-dock-popout {
    display: none;
  }

  .preview-dock[data-label-mode='popout'] .preview-dock-label {
    display: none;
  }

  .preview-dock[data-label-mode='popout'] .preview-dock-item:first-child .preview-dock-popout {
    opacity: 1;
    transform: scaleX(1);
  }

  .prefs-section-head {
    padding-bottom: 0.85rem;
    border-bottom: 1px solid color-mix(in srgb, var(--shell-border), transparent 28%);
  }

  .prefs-heading-stack {
    display: flex;
    min-width: 0;
    flex-direction: column;
  }

  .prefs-section-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .prefs-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem 1rem;
  }

  .prefs-grid > * {
    flex: 1 1 15rem;
    min-width: 0;
  }

  .field-stack {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .field-stack label {
    color: color-mix(in srgb, var(--shell-text), transparent 10%);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .field-stack select,
  .field-stack input[type='range'] {
    width: 100%;
  }

  .field-toggle {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 0.95rem 1rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 12%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-inset-bg), transparent 6%);
    color: color-mix(in srgb, var(--shell-text), transparent 10%);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  .field-toggle-feature {
    background:
      radial-gradient(circle at top left, color-mix(in srgb, var(--shell-primary), transparent 90%), transparent 46%),
      color-mix(in srgb, var(--shell-inset-bg), transparent 6%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.06),
      0 12px 24px color-mix(in srgb, var(--shell-primary), transparent 97%);
  }

  .field-toggle input {
    margin-top: 0.18rem;
  }

  .prefs-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.6rem;
    padding: 0.7rem 1rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 12%);
    border-radius: 999px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.07), transparent 62%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);
    color: var(--shell-text-strong);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .prefs-button.is-primary {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 36%);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 58%),
      color-mix(in srgb, var(--shell-primary), transparent 84%);
  }

  .prefs-button:hover:not(:disabled) {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 42%);
    color: var(--shell-text-strong);
  }

  @media (max-width: 56rem) {
    .preview-canvas {
      flex-direction: column;
      align-items: stretch;
    }

    .preview-dock {
      justify-content: center;
      padding-inline-end: 0;
    }
  }
</style>
