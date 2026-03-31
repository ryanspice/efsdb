<script lang="ts">
  import { onMount } from 'svelte';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AppIcon from '@ui/components/icons/AppIcon.svelte';
  import {
    areWindowSettingsEqual,
    createWindowThemePresetSettings,
    DEFAULT_WINDOW_SETTINGS,
    findMatchingWindowThemePreset,
    getWindowSettings,
    resolveWindowPresetShadow,
    saveWindowSettingsProfile,
    subscribeWindowSettings,
    updateWindowSettings,
    WINDOW_FONT_PRESETS,
    WINDOW_THEME_PRESETS,
    type WindowButtonLayout,
    type WindowSettings,
    type WindowSideResizeMode,
    type WindowSystemButtonPlacement
  } from '@ui/components/shell/windowSettings';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
  };

  const buttonLayoutLabels: Record<WindowButtonLayout, string> = {
    mac: 'macOS',
    'windows-7': 'Windows 7',
    'windows-8': 'Windows 8',
    'windows-10': 'Windows 10',
    'windows-11': 'Windows 11',
    ubuntu: 'Ubuntu',
    xubuntu: 'Xubuntu',
    gnome: 'GNOME'
  };
  const leadingSystemLayouts = new Set<WindowButtonLayout>(['mac', 'ubuntu', 'xubuntu']);
  const systemButtonPlacementLabels: Record<WindowSystemButtonPlacement, string> = {
    left: 'Left edge',
    right: 'Right edge'
  };
  const sideResizeModeLabels: Record<WindowSideResizeMode, string> = {
    anchored: 'Anchored sides',
    mirrored: 'Mirror both sides'
  };
  const themePresetLabels = Object.fromEntries(
    Object.entries(WINDOW_THEME_PRESETS).map(([key, value]) => [key, value.label])
  ) as Record<WindowSettings['themePreset'], string>;
  const fontPresetLabels = Object.fromEntries(
    Object.entries(WINDOW_FONT_PRESETS).map(([key, value]) => [key, value.label])
  ) as Record<WindowSettings['fontPreset'], string>;
  const themePresetOptions = Object.values(WINDOW_THEME_PRESETS);
  const fontPresetOptions = Object.values(WINDOW_FONT_PRESETS);

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
  let profileName = $state('');

  let prefsDirty = $derived(!areWindowSettingsEqual(draftPrefs, appliedPrefs));
  let prefsStateTone = $derived(prefsDirty ? 'warning' : 'accent');
  let matchedThemePreset = $derived(findMatchingWindowThemePreset(draftPrefs));
  let selectedThemeOption = $derived(matchedThemePreset ?? '__custom__');
  let draftThemeLabel = $derived(
    matchedThemePreset
      ? themePresetLabels[matchedThemePreset]
      : `Custom ${themePresetLabels[draftPrefs.themePreset]}`
  );
  let previewShadow = $derived(resolveWindowPresetShadow(draftPrefs.themePreset));

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

  function usesLeadingSystemOrder(layout: WindowButtonLayout): boolean {
    return leadingSystemLayouts.has(layout);
  }

  function resolveCloseVariant(layout: WindowButtonLayout): string | undefined {
    switch (layout) {
      case 'mac':
      case 'ubuntu':
      case 'xubuntu':
      case 'windows-7':
        return 'rounded';
      default:
        return undefined;
    }
  }

  function resolveMinimizeVariant(
    layout: WindowButtonLayout,
    minimized = false
  ): string | undefined {
    if (minimized) {
      return layout === 'mac' || layout === 'ubuntu' || layout === 'xubuntu'
        ? undefined
        : 'stack';
    }

    switch (layout) {
      case 'mac':
      case 'ubuntu':
      case 'xubuntu':
        return undefined;
      default:
        return 'tray';
    }
  }

  function resolveMaximizeVariant(
    layout: WindowButtonLayout,
    maximized = false
  ): string | undefined {
    if (maximized) {
      return 'stack';
    }

    switch (layout) {
      case 'windows-10':
      case 'windows-11':
      case 'gnome':
        return 'expand';
      default:
        return undefined;
    }
  }

  function applyThemePreset(preset: WindowSettings['themePreset']) {
    draftPrefs = createWindowSettingsSnapshot(createWindowThemePresetSettings(preset));
  }

  function applyDraft() {
    updateWindowSettings(draftPrefs);
  }

  function revertDraft() {
    draftPrefs = createWindowSettingsSnapshot(appliedPrefs);
  }

  function resetDraft() {
    draftPrefs = createWindowSettingsSnapshot(DEFAULT_WINDOW_SETTINGS);
  }

  function saveProfile() {
    saveWindowSettingsProfile(profileName, draftPrefs);
    profileName = '';
  }
</script>

<AdminWidgetFrame
  eyebrow="Window manager"
  title="Floating panel preferences"
  description="Preview button layouts, inset spacing, and shell materials here first. Popout windows only change after you press Apply."
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
        <StatusPill label={prefsDirty ? 'Preview pending' : 'Applied'} tone={prefsStateTone} />
        <StatusPill label={`${buttonLayoutLabels[draftPrefs.buttonLayout]} chrome`} tone="accent" />
        <StatusPill label={systemButtonPlacementLabels[draftPrefs.systemButtonPlacement]} tone="neutral" />
        <StatusPill label={sideResizeModeLabels[draftPrefs.sideResizeMode]} tone="neutral" />
        <StatusPill label={draftThemeLabel} tone="info" />
        <StatusPill label={fontPresetLabels[draftPrefs.fontPreset]} tone="neutral" />
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
      <p>
        Stage shell chrome, button placement, resize behavior, and site font changes here first.
        The preset picker stamps the full chrome package now, including layout, inset, radius,
        border feel, and material treatment. Nothing leaves preview mode until you press Apply.
      </p>
      <div class="prefs-copy-pills">
        <StatusPill label={`Live: ${buttonLayoutLabels[appliedPrefs.buttonLayout]}`} tone="neutral" />
        <StatusPill
          label={`Preview: ${buttonLayoutLabels[draftPrefs.buttonLayout]}`}
          tone={prefsStateTone}
        />
        <StatusPill label={draftThemeLabel} tone="info" />
      </div>
    </div>

    <section
      class="preview-stage"
      data-layout={draftPrefs.buttonLayout}
      data-style={draftPrefs.chromeStyle}
      aria-label="Window manager preview"
    >
      <span class="preview-kicker">Preview only</span>

      <div
        class="preview-window"
        data-layout={draftPrefs.buttonLayout}
        data-theme={draftPrefs.themePreset}
        data-system-placement={draftPrefs.systemButtonPlacement}
        data-style={draftPrefs.chromeStyle}
        style:--preview-border-width={`${draftPrefs.borderWidth}px`}
        style:--preview-radius={`${draftPrefs.borderRadius}px`}
        style:--preview-chrome-padding={`${draftPrefs.chromePadding}px`}
        style:--preview-font-family={WINDOW_FONT_PRESETS[draftPrefs.fontPreset].stack}
        style:--preview-shadow={previewShadow}
      >
        <div class="preview-window-shadow"></div>

        <div class="preview-chrome">
          <div class={`preview-title align-${draftPrefs.alignment}`}>Window manager preview</div>

          <div class={`preview-controls windows variant-${draftPrefs.buttonLayout}`} aria-hidden="true">
            {#if usesLeadingSystemOrder(draftPrefs.buttonLayout)}
              <span class="preview-control system close">
                <AppIcon name="close" variant={resolveCloseVariant(draftPrefs.buttonLayout)} />
              </span>
              <span class="preview-control system">
                <AppIcon
                  name="minimize"
                  variant={resolveMinimizeVariant(draftPrefs.buttonLayout)}
                />
              </span>
              <span class="preview-control system">
                <AppIcon
                  name="maximize"
                  variant={resolveMaximizeVariant(draftPrefs.buttonLayout)}
                />
              </span>
            {:else}
              <span class="preview-control system">
                <AppIcon
                  name="minimize"
                  variant={resolveMinimizeVariant(draftPrefs.buttonLayout)}
                />
              </span>
              <span class="preview-control system">
                <AppIcon
                  name="maximize"
                  variant={resolveMaximizeVariant(draftPrefs.buttonLayout)}
                />
              </span>
              <span class="preview-control system close">
                <AppIcon name="close" variant={resolveCloseVariant(draftPrefs.buttonLayout)} />
              </span>
            {/if}
          </div>
        </div>

        <div class="preview-body">
          <div class="preview-body-grid">
            <article class="preview-card">
              <span class="preview-card-kicker">Pinned widget</span>
              <strong>Workspace buttons</strong>
              <p>List the activity-bar buttons, edge-pinned actions, and quick launch macros.</p>
            </article>

            <article class="preview-card">
              <span class="preview-card-kicker">Content density</span>
              <strong>Responsive shell</strong>
              <p>Preview how the header chrome, border width, and glass treatment sit over content.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="theme-group">
      <span class="group-kicker">Chrome Preset</span>
      <p class="theme-note">
        Choosing a preset stamps the shell package: layout family, system button side, inset,
        radius, shadow feel, resize mode, and default font. It does not recolor the site. If you
        tweak any control after that, the draft becomes a custom variant of the selected preset.
      </p>
      <div class="prefs-grid">
        <div class="field-stack">
          <label for={`${uid}-theme`}>Preset</label>
          <select
            id={`${uid}-theme`}
            value={selectedThemeOption}
            onchange={(event) => {
              const nextValue = event.currentTarget.value;
              if (nextValue === '__custom__') {
                return;
              }

              applyThemePreset(nextValue as WindowSettings['themePreset']);
            }}
          >
            {#if !matchedThemePreset}
              <option value="__custom__">Custom ({themePresetLabels[draftPrefs.themePreset]})</option>
            {/if}
            {#each themePresetOptions as preset (preset.id)}
              <option value={preset.id}>{preset.label}</option>
            {/each}
          </select>
        </div>

        <div class="field-stack">
          <label for={`${uid}-font`}>Site font</label>
          <select
            id={`${uid}-font`}
            value={draftPrefs.fontPreset}
            onchange={(event) =>
              updateDraft({
                fontPreset: event.currentTarget.value as WindowSettings['fontPreset']
              })}
          >
            {#each fontPresetOptions as preset (preset.id)}
              <option value={preset.id}>{preset.label}</option>
            {/each}
          </select>
        </div>
      </div>
    </section>

    <hr class="prefs-divider" />

    <div class="prefs-grid">
      <div class="field-stack">
        <label for={`${uid}-layout`}>Button layout</label>
        <select
          id={`${uid}-layout`}
          value={draftPrefs.buttonLayout}
          onchange={(event) =>
            updateDraft({
              buttonLayout: event.currentTarget.value as WindowSettings['buttonLayout']
            })}
        >
          <option value="windows-11">Windows 11</option>
          <option value="windows-10">Windows 10</option>
          <option value="windows-8">Windows 8</option>
          <option value="windows-7">Windows 7</option>
          <option value="mac">macOS</option>
          <option value="ubuntu">Ubuntu</option>
          <option value="xubuntu">Xubuntu</option>
          <option value="gnome">GNOME</option>
        </select>
      </div>

      <div class="field-stack">
        <label for={`${uid}-system-placement`}>System button side</label>
        <select
          id={`${uid}-system-placement`}
          value={draftPrefs.systemButtonPlacement}
          onchange={(event) =>
            updateDraft({
              systemButtonPlacement: event.currentTarget
                .value as WindowSettings['systemButtonPlacement']
            })}
        >
          <option value="right">Right edge</option>
          <option value="left">Left edge</option>
        </select>
      </div>

      <div class="field-stack">
        <label for={`${uid}-chrome`}>Chrome style</label>
        <select
          id={`${uid}-chrome`}
          value={draftPrefs.chromeStyle}
          onchange={(event) =>
            updateDraft({
              chromeStyle: event.currentTarget.value as WindowSettings['chromeStyle']
            })}
        >
          <option value="solid">Solid</option>
          <option value="glass">Glass</option>
          <option value="mica">Mica</option>
          <option value="frost">Frost</option>
          <option value="pane">Pane</option>
          <option value="transparent">Transparent</option>
        </select>
      </div>

      <div class="field-stack">
        <label for={`${uid}-alignment`}>Title alignment</label>
        <select
          id={`${uid}-alignment`}
          value={draftPrefs.alignment}
          onchange={(event) =>
            updateDraft({
              alignment: event.currentTarget.value as WindowSettings['alignment']
            })}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      <div class="field-stack">
        <label for={`${uid}-shift-action`}>Shift drag action</label>
        <select
          id={`${uid}-shift-action`}
          value={draftPrefs.shiftDragAction}
          onchange={(event) =>
            updateDraft({
              shiftDragAction: event.currentTarget.value as WindowSettings['shiftDragAction']
            })}
        >
          <option value="pin">Pin window</option>
          <option value="none">No extra action</option>
        </select>
      </div>

      <div class="field-stack">
        <label for={`${uid}-side-resize`}>Side resize mode</label>
        <select
          id={`${uid}-side-resize`}
          value={draftPrefs.sideResizeMode}
          onchange={(event) =>
            updateDraft({
              sideResizeMode: event.currentTarget.value as WindowSettings['sideResizeMode']
            })}
        >
          <option value="anchored">Anchored sides</option>
          <option value="mirrored">Mirror both sides</option>
        </select>
      </div>

      <div class="field-stack">
        <label for={`${uid}-border`}>Border width ({draftPrefs.borderWidth}px)</label>
        <input
          id={`${uid}-border`}
          type="range"
          min="0"
          max="12"
          step="1"
          value={draftPrefs.borderWidth}
          oninput={(event) =>
            updateDraft({ borderWidth: Number.parseInt(event.currentTarget.value, 10) })}
        />
      </div>

      <div class="field-stack">
        <label for={`${uid}-radius`}>Border radius ({draftPrefs.borderRadius}px)</label>
        <input
          id={`${uid}-radius`}
          type="range"
          min="0"
          max="32"
          step="1"
          value={draftPrefs.borderRadius}
          oninput={(event) =>
            updateDraft({ borderRadius: Number.parseInt(event.currentTarget.value, 10) })}
        />
      </div>

      <div class="field-stack">
        <label for={`${uid}-padding`}>Chrome inset ({draftPrefs.chromePadding}px)</label>
        <input
          id={`${uid}-padding`}
          type="range"
          min="0"
          max="20"
          step="1"
          value={draftPrefs.chromePadding}
          oninput={(event) =>
            updateDraft({ chromePadding: Number.parseInt(event.currentTarget.value, 10) })}
        />
      </div>

      <label class="field-toggle">
        <input
          type="checkbox"
          checked={draftPrefs.snapRestoreOnRelease}
          onchange={(event) =>
            updateDraft({ snapRestoreOnRelease: event.currentTarget.checked })}
        />
        <span>Restore the previous snap if you drag free and release without shift.</span>
      </label>
    </div>

    <section class="profiles-panel">
      <div class="profiles-header">
        <span class="group-kicker">Custom presets</span>
        <p>Save the current draft as a reusable shell profile. Saved presets stay in local storage.</p>
      </div>

      <div class="profiles-save">
        <input
          id={`${uid}-profile-name`}
          type="text"
          placeholder="Profile name"
          value={profileName}
          oninput={(event) => {
            profileName = event.currentTarget.value;
          }}
        />
        <button class="prefs-button" type="button" onclick={saveProfile} disabled={!profileName.trim()}>
          Save preset
        </button>
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

  .prefs-copy {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.85rem;
  }

  .prefs-copy p {
    margin: 0;
    max-width: 38rem;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  .prefs-copy-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .preview-stage {
    position: relative;
    overflow: hidden;
    padding: 1.1rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 24px;
    background:
      linear-gradient(
        90deg,
        transparent 0,
        transparent calc(100% / 6 - 1px),
        color-mix(in srgb, var(--shell-border), transparent 88%) calc(100% / 6 - 1px),
        transparent calc(100% / 6)
      ),
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 90%),
        transparent 30%
      ),
      color-mix(in srgb, var(--shell-surface), transparent 4%);
  }

  .preview-kicker {
    display: inline-flex;
    margin-bottom: 0.9rem;
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .preview-window {
    --preview-radius: 18px;
    --preview-system-width: 2.55rem;
    --preview-system-height: 2rem;
    --preview-system-radius: 10px;
    --preview-system-icon-size: 0.88rem;
    --preview-control-border-width: clamp(0px, calc(var(--preview-border-width) * 0.9), 3px);
    --preview-control-radius: 10px;
    --preview-top-space: max(0.2rem, calc(var(--preview-chrome-padding) * 0.58 + 0.04rem));
    --preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.32));
    --preview-panel: var(--shell-panel);
    --preview-surface: var(--shell-surface);
    --preview-border: var(--shell-border);
    --preview-shadow: 0 24px 56px rgba(0, 0, 0, 0.32);
    position: relative;
    margin-inline: auto;
    width: min(100%, 34rem);
    border: var(--preview-border-width) solid color-mix(in srgb, var(--preview-border), transparent 12%);
    border-radius: var(--preview-radius);
    overflow: hidden;
    font-family: var(--preview-font-family);
    background:
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--shell-primary), transparent 92%),
        transparent 28%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 42%),
      color-mix(in srgb, var(--preview-surface), transparent 2%);
  }

  .preview-window-shadow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    box-shadow:
      var(--preview-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--preview-border), transparent 26%);
  }

  .preview-window[data-layout='windows-7'] {
    --preview-system-width: 3rem;
    --preview-system-height: 1.95rem;
    --preview-system-icon-size: 0.8rem;
    --preview-system-radius: 0 0 8px 8px;
  }

  .preview-window[data-layout='windows-8'] {
    --preview-system-width: 2.8rem;
    --preview-system-height: 1.95rem;
    --preview-system-icon-size: 0.82rem;
    --preview-system-radius: 0;
  }

  .preview-window[data-layout='windows-10'] {
    --preview-system-width: 2.8rem;
    --preview-system-height: 2rem;
    --preview-system-icon-size: 0.82rem;
    --preview-system-radius: 0;
  }

  .preview-window[data-layout='windows-11'] {
    --preview-system-height: 2rem;
    --preview-system-icon-size: 0.88rem;
  }

  .preview-window[data-theme='windows-9x'] {
    --preview-system-width: 2rem;
    --preview-system-height: 1.75rem;
    --preview-system-icon-size: 0.76rem;
    --preview-system-radius: 0;
  }

  .preview-window[data-theme='mac-os-x'] {
    --preview-system-width: 0.9rem;
    --preview-system-height: 0.9rem;
    --preview-system-icon-size: 0.48rem;
    --preview-system-radius: 999px;
  }

  .preview-window[data-layout='ubuntu'],
  .preview-window[data-layout='xubuntu'] {
    --preview-system-width: 1rem;
    --preview-system-height: 1rem;
    --preview-system-icon-size: 0.5rem;
    --preview-system-radius: 999px;
    --preview-control-radius: 999px;
  }

  .preview-window[data-layout='gnome'] {
    --preview-system-width: 2.6rem;
    --preview-system-height: 1.82rem;
    --preview-system-icon-size: 0.82rem;
    --preview-system-radius: 999px;
    --preview-control-radius: 12px;
  }

  .preview-window[data-style='transparent'] {
    background: color-mix(in srgb, var(--preview-surface), transparent 12%);
  }

  .preview-window[data-style='mica'] {
    background:
      radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 38%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--shell-primary), transparent 90%), transparent 30%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 48%),
      color-mix(in srgb, var(--preview-surface), transparent 10%);
  }

  .preview-window[data-style='frost'] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),
      color-mix(in srgb, var(--preview-surface), transparent 16%);
  }

  .preview-window[data-style='pane'] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02) 68%, transparent 100%),
      color-mix(in srgb, var(--preview-surface), transparent 8%);
  }

  .preview-window[data-style='glass'] .preview-chrome {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .preview-window[data-style='mica'] .preview-chrome {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02) 74%),
      color-mix(in srgb, var(--preview-panel), transparent 12%);
    backdrop-filter: blur(14px) saturate(1.06);
    -webkit-backdrop-filter: blur(14px) saturate(1.06);
  }

  .preview-window[data-style='frost'] .preview-chrome {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.05) 72%),
      color-mix(in srgb, var(--preview-panel), transparent 18%);
    backdrop-filter: blur(16px) saturate(1.12);
    -webkit-backdrop-filter: blur(16px) saturate(1.12);
  }

  .preview-window[data-style='pane'] .preview-chrome {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 68%),
      color-mix(in srgb, var(--preview-panel), transparent 8%);
    backdrop-filter: blur(10px) saturate(1.04);
    -webkit-backdrop-filter: blur(10px) saturate(1.04);
  }

  .preview-chrome {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    min-height: calc(
      var(--preview-system-height) + var(--preview-top-space) + var(--preview-bottom-space)
    );
    padding-top: var(--preview-top-space);
    padding-bottom: var(--preview-bottom-space);
    padding-inline: var(--preview-chrome-padding);
    border-bottom: 1px solid color-mix(in srgb, var(--preview-border), transparent 20%);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 72%),
      color-mix(in srgb, var(--preview-panel), transparent 2%);
  }

  .preview-window[data-style='transparent'] .preview-chrome {
    background: transparent;
    border-bottom-color: transparent;
  }

  .preview-window[data-system-placement='left'] .preview-chrome {
    justify-content: flex-start;
  }

  .preview-title {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 0;
    width: max(0px, calc(100% - 8rem));
    max-width: max(0px, calc(100% - 8rem));
    color: var(--shell-text);
    font: var(--efs-font-title-sm);
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }

  .preview-title.align-left {
    text-align: left;
  }

  .preview-title.align-center {
    text-align: center;
  }

  .preview-title.align-right {
    text-align: right;
  }

  .preview-controls {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    flex: none;
  }

  .preview-window[data-theme='mac-os-x'] .preview-chrome {
    --preview-top-space: max(0.18rem, calc(var(--preview-chrome-padding) * 0.38));
    --preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.18));
  }

  .preview-controls.windows {
    gap: 0.12rem;
  }

  .preview-control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: var(--preview-control-border-width) solid
      color-mix(in srgb, var(--shell-border), transparent 16%);
    border-radius: var(--preview-control-radius);
    background: color-mix(in srgb, var(--shell-panel), transparent 8%);
    color: var(--shell-muted);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  .preview-control :global(.app-icon) {
    width: var(--preview-system-icon-size);
    height: var(--preview-system-icon-size);
  }

  .preview-controls.windows .preview-control.system {
    width: var(--preview-system-width);
    height: var(--preview-system-height);
    border-radius: var(--preview-system-radius);
    border-color: transparent;
    background: transparent;
  }

  .preview-controls.windows.variant-windows-7 .preview-control.system {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent 88%);
    border-color: color-mix(in srgb, var(--shell-border), transparent 30%);
  }

  .preview-controls.windows.variant-ubuntu,
  .preview-controls.windows.variant-xubuntu {
    gap: 0.32rem;
  }

  .preview-window[data-theme='windows-9x'] .preview-controls.windows .preview-control.system {
    border-color: color-mix(in srgb, var(--shell-border), transparent 6%);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02));
    box-shadow:
      inset 1px 1px 0 rgba(255, 255, 255, 0.34),
      inset -1px -1px 0 rgba(0, 0, 0, 0.24);
  }

  .preview-window[data-theme='mac-os-x'] .preview-controls.windows {
    gap: 0.35rem;
  }

  .preview-window[data-theme='mac-os-x'] .preview-controls.windows .preview-control.system {
    color: rgba(0, 0, 0, 0.46);
  }

  .preview-window[data-theme='mac-os-x'] .preview-controls.windows .preview-control.system:nth-child(1) {
    background: #ff6059;
  }

  .preview-window[data-theme='mac-os-x'] .preview-controls.windows .preview-control.system:nth-child(2) {
    background: #f5c042;
  }

  .preview-window[data-theme='mac-os-x'] .preview-controls.windows .preview-control.system:nth-child(3) {
    background: #2dcf5f;
  }

  .preview-window[data-theme='windows-vista'] .preview-chrome {
    --preview-top-space: max(0.22rem, calc(var(--preview-chrome-padding) * 0.62));
    --preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.24));
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--preview-panel), transparent 10%);
  }

  .preview-window[data-theme='windows-11-mica'] .preview-controls.windows .preview-control.system {
    border-radius: 11px;
  }

  .preview-window[data-theme='windows-10-flat'] .preview-chrome {
    --preview-top-space: max(0.08rem, calc(var(--preview-chrome-padding) * 0.42));
    --preview-bottom-space: max(0.08rem, calc(var(--preview-chrome-padding) * 0.1));
  }

  .preview-window[data-theme='windows-10-flat'] .preview-controls.windows .preview-control.system {
    border-radius: 0;
  }

  .preview-window[data-theme='ubuntu-yaru'] .preview-chrome {
    --preview-top-space: max(0.14rem, calc(var(--preview-chrome-padding) * 0.46));
    --preview-bottom-space: max(0.1rem, calc(var(--preview-chrome-padding) * 0.18));
  }

  .preview-window[data-theme='ubuntu-yaru'] .preview-controls.windows .preview-control.system {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 68%);
  }

  .preview-window[data-theme='xubuntu'] .preview-chrome {
    --preview-top-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.42));
    --preview-bottom-space: max(0.1rem, calc(var(--preview-chrome-padding) * 0.18));
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),
      color-mix(in srgb, var(--preview-panel), transparent 14%);
  }

  .preview-window[data-theme='gnome'] .preview-chrome {
    --preview-top-space: max(0.16rem, calc(var(--preview-chrome-padding) * 0.46));
    --preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.18));
  }

  .preview-window[data-theme='gnome'] .preview-controls.windows .preview-control.system {
    background: color-mix(in srgb, var(--shell-panel), transparent 2%);
    box-shadow: none;
  }

  .preview-controls.windows .preview-control.close {
    color: color-mix(in srgb, var(--shell-text), transparent 12%);
  }

  .preview-body {
    position: relative;
    z-index: 1;
    padding: 1rem;
  }

  .preview-body-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }

  .preview-card {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    min-width: 0;
    padding: 0.95rem 1rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 16%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-panel), transparent 6%);
  }

  .preview-card-kicker {
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .preview-card strong {
    color: var(--shell-text);
    font: var(--efs-font-title-sm);
  }

  .preview-card p {
    margin: 0;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .prefs-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  }

  .theme-group,
  .profiles-panel {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .theme-note {
    margin: 0;
    max-width: 42rem;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  .group-kicker {
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .prefs-divider {
    width: 100%;
    height: 1px;
    border: 0;
    margin: 0;
    background: color-mix(in srgb, var(--shell-border), transparent 22%);
  }

  .field-stack {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    min-width: 0;
  }

  .field-stack label {
    color: var(--shell-muted);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .field-stack select,
  .field-stack input {
    width: 100%;
    min-height: 3rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    color: var(--shell-text);
    padding: 0.8rem 0.95rem;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;
  }

  .field-stack input[type='range'] {
    padding-inline: 0.75rem;
    accent-color: var(--shell-primary);
  }

  .field-toggle {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    min-height: 3rem;
    padding: 0.85rem 0.95rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    color: var(--shell-text);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .field-toggle input {
    width: 1rem;
    height: 1rem;
    margin: 0.15rem 0 0;
    accent-color: var(--shell-primary);
  }

  .profiles-header p {
    margin: 0.2rem 0 0;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .profiles-save {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .profiles-save input {
    width: 100%;
    min-height: 3rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    color: var(--shell-text);
    padding: 0.8rem 0.95rem;
  }

  .field-stack select:focus,
  .field-stack input:focus {
    outline: none;
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 44%);
    box-shadow: var(--shell-focus-ring);
  }

  .footer-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    width: 100%;
  }

  .footer-pills,
  .footer-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .prefs-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.4rem;
    padding: 0 0.95rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-surface), transparent 8%);
    color: var(--shell-muted);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      opacity 160ms ease,
      box-shadow 160ms ease;
  }

  .prefs-button:hover:not(:disabled) {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 44%);
    background: color-mix(in srgb, var(--shell-row-hover), transparent 4%);
    color: var(--shell-text);
  }

  .prefs-button.is-primary {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 56%);
    background: color-mix(in srgb, var(--shell-primary), transparent 84%);
    color: var(--shell-text);
  }

  .prefs-button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 47.99rem) {
    .profiles-save {
      grid-template-columns: 1fr;
    }

    .preview-stage,
    .preview-body {
      padding-inline: 0.85rem;
    }

    .preview-window {
      --preview-system-width: 2.3rem;
      --preview-system-height: 1.75rem;
    }

    .preview-chrome {
      gap: 0.35rem;
      min-height: calc(
        var(--preview-system-height) +
          max(0.3rem, calc(var(--preview-top-space) * 0.92)) +
          max(0.12rem, calc(var(--preview-bottom-space) * 0.9))
      );
      padding-inline: max(0.55rem, calc(var(--preview-chrome-padding) * 0.82));
    }

    .preview-title {
      font-size: 0.82rem;
      width: max(0px, calc(100% - 6.6rem));
      max-width: max(0px, calc(100% - 6.6rem));
    }

    .preview-control :global(.app-icon) {
      width: min(0.72rem, var(--preview-system-icon-size));
      height: min(0.72rem, var(--preview-system-icon-size));
    }
  }
</style>
