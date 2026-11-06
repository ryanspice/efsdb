<script lang="ts">
  import { onMount } from 'svelte';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AppIcon from '@ui/components/icons/AppIcon.svelte';
  import {
    areWindowSettingsEqual,
    buildWindowChromeCssVars,
    createWindowThemePresetSettings,
    DEFAULT_WINDOW_SETTINGS,
    getWindowSettings,
    isLockedWindowThemePreset,
    resolveWindowTitleEffect,
    resolveWindowPresetShadow,
    resolveWindowTitleTone,
    saveWindowSettingsProfile,
    subscribeWindowSettings,
    updateWindowSettings,
    WINDOW_FONT_PRESETS,
    WINDOW_THEME_PRESETS,
    type WindowButtonLayout,
    type WindowChromeThemeColor,
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
  const themePresetLabels = Object.fromEntries(
    Object.entries(WINDOW_THEME_PRESETS).map(([key, value]) => [key, value.label])
  ) as Record<WindowSettings['themePreset'], string>;
  const fontPresetLabels = Object.fromEntries(
    Object.entries(WINDOW_FONT_PRESETS).map(([key, value]) => [key, value.label])
  ) as Record<WindowSettings['fontPreset'], string>;
  const pageThemeSpreadLabels: Record<WindowSettings['pageThemeSpread'], string> = {
    contained: 'Contained shell',
    expanded: 'Expand across site'
  };
  const chromeColorSourceLabels: Record<WindowChromeThemeColor, string> = {
    accent: 'Primary accent',
    'accent-strong': 'Accent highlight',
    'accent-soft': 'Accent wash',
    'accent-secondary': 'Secondary accent',
    'accent-secondary-soft': 'Secondary wash'
  };
  const chromeGlossStyleLabels: Record<WindowSettings['chromeGlossStyle'], string> = {
    none: 'No gloss',
    'windows-7': 'Windows 7 glass',
    vista: 'Vista glass',
    kde: 'KDE satin',
    mica: 'Mica haze'
  };
  const chromeBeamStyleLabels: Record<WindowSettings['chromeBeamStyle'], string> = {
    none: 'No beam',
    'windows-7': 'Windows 7 Aero beam',
    vista: 'Vista beam',
    'xp-luna': 'XP Luna beam',
    'windows-9x': 'Windows 9x bevel',
    kde: 'KDE sheen',
    mica: 'Mica highlight'
  };
  const chromeBeamDefaultIntensity: Record<WindowSettings['chromeBeamStyle'], number> = {
    none: 0,
    'windows-7': 90,
    vista: 96,
    'xp-luna': 84,
    'windows-9x': 86,
    kde: 78,
    mica: 74
  };
  const titleToneLabels: Record<WindowSettings['titleTone'], string> = {
    auto: 'Preset default',
    light: 'Light title',
    dark: 'Dark title'
  };
  const titleEffectLabels: Record<WindowSettings['titleEffect'], string> = {
    auto: 'Preset effect',
    plain: 'Flat',
    shadow: 'Shadowed',
    glow: 'Aero glow',
    emboss: 'Embossed'
  };
  const themePresetOptions = Object.values(WINDOW_THEME_PRESETS);
  const fontPresetOptions = Object.values(WINDOW_FONT_PRESETS);
  const presetControlledKeys = [
    'buttonLayout',
    'systemButtonPlacement',
    'sideResizeMode',
    'borderWidth',
    'borderRadius',
    'chromePadding',
    'titleBarHeight',
    'windowScale',
    'chromeStyle',
    'chromeTexture',
    'chromeBeamStyle',
    'chromeBeamIntensity',
    'chromeGlossStyle',
    'chromeGlossIntensity',
    'chromeGlossSpacing',
    'chromeColorize',
    'chromeColorSource',
    'chromeColorIntensity',
    'alignment',
    'titleTone',
    'titleEffect',
    'snapRestoreOnRelease',
    'shiftDragAction'
  ] as const satisfies readonly (keyof WindowSettings)[];
  type PresetControlledKey = (typeof presetControlledKeys)[number];

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
  let presetBaseline = $derived(createWindowThemePresetSettings(draftPrefs.themePreset));
  let presetOverrideKeys = $derived.by(() =>
    presetControlledKeys.filter((key) => draftPrefs[key] !== presetBaseline[key])
  );
  let presetIsCustom = $derived(presetOverrideKeys.length > 0);
  let draftThemeLabel = $derived(
    `${themePresetLabels[draftPrefs.themePreset]}${presetIsCustom ? ' (custom)' : ''}`
  );
  let resolvedTitleTone = $derived(resolveWindowTitleTone(draftPrefs));
  let resolvedTitleEffect = $derived(resolveWindowTitleEffect(draftPrefs));
  let isLockedThemePreset = $derived(isLockedWindowThemePreset(draftPrefs.themePreset));
  let isWindows7AeroPreview = $derived(draftPrefs.themePreset === 'aero');
  let isWindowsBasicPreview = $derived(draftPrefs.themePreset === 'windows-basic');
  let isWindows7Preview = $derived(isWindows7AeroPreview || isWindowsBasicPreview);
  let usesSevenCssPreview = $derived(
    isWindows7Preview || draftPrefs.themePreset === 'windows-vista'
  );
  let previewShadow = $derived(resolveWindowPresetShadow(draftPrefs.themePreset));
  let previewWindowStyle = $derived.by(() => {
    const cssVars = buildWindowChromeCssVars(draftPrefs);
    return Object.entries({
      '--preview-border-width': `${draftPrefs.borderWidth}px`,
      '--preview-radius': `${draftPrefs.borderRadius}px`,
      '--preview-chrome-padding': `${draftPrefs.chromePadding}px`,
      '--preview-titlebar-height': `${draftPrefs.titleBarHeight}px`,
      '--preview-shell-scale': `${draftPrefs.windowScale / 100}`,
      '--preview-font-family': WINDOW_FONT_PRESETS[draftPrefs.fontPreset].stack,
      '--preview-shadow-base': previewShadow,
      ...cssVars
    })
      .map(([name, value]) => `${name}:${value}`)
      .join(';');
  });

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
    const nextDraft = {
      ...draftPrefs,
      ...partial
    };

    if (!isLockedWindowThemePreset(nextDraft.themePreset)) {
      draftPrefs = nextDraft;
      return;
    }

    const lockedPreset = createWindowThemePresetSettings(nextDraft.themePreset);
    draftPrefs = {
      ...nextDraft,
      ...lockedPreset,
      globalEdgeDock: nextDraft.globalEdgeDock,
      dockButtonSize: nextDraft.dockButtonSize,
      dockButtonWidth: nextDraft.dockButtonWidth,
      dockIconScale: nextDraft.dockIconScale,
      dockGap: nextDraft.dockGap,
      dockOffset: nextDraft.dockOffset,
      dockLabelMode: nextDraft.dockLabelMode,
      pageThemeSpread: nextDraft.pageThemeSpread
    };
  }

  function isPresetOverride(key: PresetControlledKey): boolean {
    return draftPrefs[key] !== presetBaseline[key];
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
    const nextPreset = createWindowThemePresetSettings(preset);
    draftPrefs = {
      ...nextPreset,
      globalEdgeDock: draftPrefs.globalEdgeDock,
      dockButtonSize: draftPrefs.dockButtonSize,
      dockButtonWidth: draftPrefs.dockButtonWidth,
      dockIconScale: draftPrefs.dockIconScale,
      dockGap: draftPrefs.dockGap,
      dockOffset: draftPrefs.dockOffset,
      dockLabelMode: draftPrefs.dockLabelMode,
      pageThemeSpread: draftPrefs.pageThemeSpread
    };
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
  description="Tune floating widget chrome, title readability, snap behavior, and shell typography here first. Site color theme still lives in Settings > Theme Studio."
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
        <StatusPill label={draftThemeLabel} tone="info" />
        <StatusPill
          label={`${draftPrefs.titleBarHeight}px bar • ${draftPrefs.windowScale}% scale`}
          tone="neutral"
        />
        <StatusPill
          label={draftPrefs.chromeTexture && draftPrefs.chromeBeamStyle !== 'none'
            ? `${chromeBeamStyleLabels[draftPrefs.chromeBeamStyle]} ${draftPrefs.chromeBeamIntensity}%`
            : 'Beam off'}
          tone={draftPrefs.chromeTexture && draftPrefs.chromeBeamStyle !== 'none' ? 'accent' : 'neutral'}
        />
        <StatusPill
          label={draftPrefs.chromeGlossStyle === 'none'
            ? 'Gloss off'
            : `${chromeGlossStyleLabels[draftPrefs.chromeGlossStyle]} ${draftPrefs.chromeGlossIntensity}%`}
          tone={draftPrefs.chromeGlossStyle === 'none' ? 'neutral' : 'info'}
        />
        <StatusPill
          label={draftPrefs.chromeColorize ? `${chromeColorSourceLabels[draftPrefs.chromeColorSource]} ${draftPrefs.chromeColorIntensity}%` : 'Chrome neutral'}
          tone={draftPrefs.chromeColorize ? 'accent' : 'neutral'}
        />
        <StatusPill label={titleToneLabels[draftPrefs.titleTone]} tone="neutral" />
        <StatusPill label={titleEffectLabels[draftPrefs.titleEffect]} tone="info" />
        <StatusPill
          label={pageThemeSpreadLabels[draftPrefs.pageThemeSpread]}
          tone={draftPrefs.pageThemeSpread === 'expanded' ? 'accent' : 'neutral'}
        />
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
    <section class="prefs-section theme-group">
      <div class="prefs-section-head">
        <div class="prefs-section-title">
          <div class="prefs-heading-stack">
            <span class="group-kicker">Shell Package And Presets</span>
            <h4>Preset, font, coverage, and custom save</h4>
          </div>
          <InlineHelp
            title="Shell package and presets"
            text="Choose the chrome family first, keep the same site coverage dropdown used by the header Settings popover, and only save a custom preset when you want to keep a forked version of the current shell package."
          />
        </div>
      </div>

      <div class="prefs-section-body package-body">
        <div class="prefs-grid prefs-grid-compact">
          <div class="field-stack">
            <label for={`${uid}-theme`}>Preset</label>
            <select
              id={`${uid}-theme`}
              value={draftPrefs.themePreset}
              onchange={(event) =>
                applyThemePreset(event.currentTarget.value as WindowSettings['themePreset'])}
            >
              {#each themePresetOptions as preset (preset.id)}
                <option value={preset.id}>
                  {preset.id === draftPrefs.themePreset ? draftThemeLabel : preset.label}
                </option>
              {/each}
            </select>
          </div>

          <div class="field-stack">
            <label for={`${uid}-font`}>Site font</label>
            <select
              id={`${uid}-font`}
              value={draftPrefs.fontPreset}
              disabled={isLockedThemePreset}
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

          <div class="field-stack">
            <label for={`${uid}-page-theme-spread`}>Theme coverage</label>
            <select
              id={`${uid}-page-theme-spread`}
              value={draftPrefs.pageThemeSpread}
              onchange={(event) =>
                updateDraft({
                  pageThemeSpread: event.currentTarget.value as WindowSettings['pageThemeSpread']
                })}
            >
              <option value="contained">Contained shell</option>
              <option value="expanded">Expand across site</option>
            </select>
          </div>
        </div>

        <div class="prefs-section-divider" aria-hidden="true"></div>

        <div class="preset-strip" data-custom={presetIsCustom}>
          <div class="preset-strip-copy">
            <span class="group-kicker">Preset Status</span>
            <strong>{draftThemeLabel}</strong>
            <span>
              {#if isLockedThemePreset}
                Windows 7 is locked to the vendor 7.css Aero package. Chrome and font controls are disabled so the shell stays on the exact preset.
              {:else if presetIsCustom}
                {presetOverrideKeys.length} custom control{presetOverrideKeys.length === 1 ? '' : 's'} differ from the preset. Changed fields below stay bright and highlighted until you save a custom preset.
              {:else}
                Preset defaults are intact. The custom controls below stay subdued until you diverge from this package.
              {/if}
            </span>
          </div>

          <div class="profiles-save package-save">
            <input
              id={`${uid}-profile-name`}
              type="text"
              placeholder={`${themePresetLabels[draftPrefs.themePreset]} custom`}
              value={profileName}
              oninput={(event) => {
                profileName = event.currentTarget.value;
              }}
            />
            <button
              class="prefs-button"
              type="button"
              onclick={saveProfile}
              disabled={!profileName.trim() || !presetIsCustom}
            >
              Save custom preset
            </button>
          </div>
        </div>
      </div>
    </section>

    <section
      class="preview-stage"
      data-layout={draftPrefs.buttonLayout}
      data-style={draftPrefs.chromeStyle}
      aria-label="Window manager preview"
    >
      <div class="preview-stage-head">
        <div>
          <span class="preview-kicker">Preview only</span>
          <h4 class="preview-heading">Title treatment and shell chrome</h4>
          <p class="preview-status">
            {prefsDirty
              ? 'Draft differs from the live shell until you apply it.'
              : 'Preview matches the live shell.'}
          </p>
        </div>
      </div>

      <div
        class="preview-window"
        class:win7={isWindows7Preview}
        class:win7-theme={isWindows7AeroPreview}
        class:basic7-theme={isWindowsBasicPreview}
        class:window={isWindows7Preview}
        class:active={isWindows7Preview}
        class:glass={isWindows7AeroPreview}
        data-layout={isLockedThemePreset ? undefined : draftPrefs.buttonLayout}
        data-theme={draftPrefs.themePreset}
        data-beam={isLockedThemePreset ? undefined : draftPrefs.chromeTexture ? draftPrefs.chromeBeamStyle : 'none'}
        data-gloss={isLockedThemePreset ? undefined : draftPrefs.chromeGlossStyle}
        data-system-placement={draftPrefs.systemButtonPlacement}
        data-style={isLockedThemePreset ? undefined : draftPrefs.chromeStyle}
        data-title-tone={isLockedThemePreset ? undefined : resolvedTitleTone}
        data-title-effect={isLockedThemePreset ? undefined : resolvedTitleEffect}
        style={previewWindowStyle}
      >
        <div class="preview-window-shadow"></div>

        <div
          class={isWindows7AeroPreview ? 'title-bar' : 'preview-chrome'}
          class:title-bar={!isWindows7AeroPreview && usesSevenCssPreview}
        >
          <div
            class={isWindows7AeroPreview
              ? 'title-bar-text'
              : `preview-title align-${draftPrefs.alignment}`}
            class:title-bar-text={!isWindows7AeroPreview && usesSevenCssPreview}
          >
            Window manager preview
          </div>

          <div
            class={
              isWindows7AeroPreview
                ? 'title-bar-controls'
                : `preview-controls windows variant-${draftPrefs.buttonLayout}`
            }
            class:title-bar-controls={!isWindows7AeroPreview && usesSevenCssPreview}
            aria-hidden="true"
          >
            {#if usesLeadingSystemOrder(draftPrefs.buttonLayout)}
              <button
                type="button"
                class={isWindows7AeroPreview ? 'is-close' : 'preview-control system close is-close'}
                aria-label="Close"
                tabindex="-1"
              >
                {#if !isWindows7Preview}
                  <AppIcon name="close" variant={resolveCloseVariant(draftPrefs.buttonLayout)} />
                {/if}
              </button>
              <button
                type="button"
                class={isWindows7AeroPreview ? 'is-minimize' : 'preview-control system is-minimize'}
                aria-label="Minimize"
                tabindex="-1"
              >
                {#if !isWindows7Preview}
                  <AppIcon
                    name="minimize"
                    variant={resolveMinimizeVariant(draftPrefs.buttonLayout)}
                  />
                {/if}
              </button>
              <button
                type="button"
                class={isWindows7AeroPreview ? 'is-maximize' : 'preview-control system is-maximize'}
                aria-label="Maximize"
                tabindex="-1"
              >
                {#if !isWindows7Preview}
                  <AppIcon
                    name="maximize"
                    variant={resolveMaximizeVariant(draftPrefs.buttonLayout)}
                  />
                {/if}
              </button>
            {:else}
              <button
                type="button"
                class={isWindows7AeroPreview ? 'is-minimize' : 'preview-control system is-minimize'}
                aria-label="Minimize"
                tabindex="-1"
              >
                {#if !isWindows7Preview}
                  <AppIcon
                    name="minimize"
                    variant={resolveMinimizeVariant(draftPrefs.buttonLayout)}
                  />
                {/if}
              </button>
              <button
                type="button"
                class={isWindows7AeroPreview ? 'is-maximize' : 'preview-control system is-maximize'}
                aria-label="Maximize"
                tabindex="-1"
              >
                {#if !isWindows7Preview}
                  <AppIcon
                    name="maximize"
                    variant={resolveMaximizeVariant(draftPrefs.buttonLayout)}
                  />
                {/if}
              </button>
              <button
                type="button"
                class={isWindows7AeroPreview ? 'is-close' : 'preview-control system close is-close'}
                aria-label="Close"
                tabindex="-1"
              >
                {#if !isWindows7Preview}
                  <AppIcon name="close" variant={resolveCloseVariant(draftPrefs.buttonLayout)} />
                {/if}
              </button>
            {/if}
          </div>
        </div>

        <div class="preview-body" class:window-body={isWindows7Preview}>
          <div class="preview-body-grid">
            <article class="preview-card">
              <span class="preview-card-kicker">Pinned widget</span>
              <strong>Workspace buttons</strong>
              <p>Preview title balance, chrome edge weight, and live legibility against content.</p>
            </article>

            <article class="preview-card">
              <span class="preview-card-kicker">Content density</span>
              <strong>Responsive shell</strong>
              <p>Preview how the header chrome, border width, and glass treatment sit over content.</p>
            </article>
          </div>
        </div>
      </div>

      <div class="preview-apply-row">
        <div class="preview-apply-copy">
          <strong>Apply preview to the live shell</strong>
          <span>Commit the current frame, title, and chrome settings before you leave this panel or save a custom shell package.</span>
        </div>
        <button class="prefs-button is-primary" type="button" onclick={applyDraft} disabled={!prefsDirty}>
          Apply
        </button>
      </div>
    </section>

    <section class="prefs-section custom-section" data-pristine={!presetIsCustom}>
      <div class="prefs-section-head">
        <div class="prefs-section-title">
          <div class="prefs-heading-stack">
            <span class="group-kicker">Chrome Treatment</span>
            <h4>Frame geometry and optical finish</h4>
          </div>
          <InlineHelp
            title="Chrome treatment"
            text="This sheet separates structure from finish: choose layout, button side, and geometry first, then layer beam, gloss, tint, and sheen until the shell lands where you want it."
          />
        </div>
      </div>

      <div class="prefs-section-body">
        <div class="custom-state-copy">
          <strong>
            {#if isLockedThemePreset}
              Windows 7 Aero is locked.
            {:else}
              {presetIsCustom ? 'Preset overrides are active.' : 'Preset defaults are active.'}
            {/if}
          </strong>
          <span>
            {#if isLockedThemePreset}
              This preset renders directly through vendor `7.css`. Frame geometry, beam, gloss, tint, title treatment, and font controls are disabled here so the preview and live shell stay exact.
            {:else if presetIsCustom}
              Changed controls are highlighted and back at full strength. Untouched controls still read as preset-owned.
            {:else}
              The controls below stay intentionally subdued until you fork this preset. The first tweak marks the package as custom.
            {/if}
          </span>
        </div>

        <fieldset class="preset-controlled-fields" disabled={isLockedThemePreset}>

        <div class="prefs-section-divider" aria-hidden="true"></div>

        <div class="prefs-mini-head">
          <div class="prefs-mini-title-wrap">
            <span class="prefs-mini-title">Frame geometry</span>
            <InlineHelp
              title="Frame geometry"
              text="These controls affect the overall silhouette first: button family, control side, and whether the shell reads like a pane, mica surface, or flat frame."
            />
          </div>
        </div>

        <div class="prefs-grid">
      <div class="field-stack" class:is-overridden={isPresetOverride('buttonLayout')}>
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

      <div class="field-stack" class:is-overridden={isPresetOverride('systemButtonPlacement')}>
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

      <div class="field-stack" class:is-overridden={isPresetOverride('chromeStyle')}>
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

        </div>

        <div class="prefs-section-divider" aria-hidden="true"></div>

        <div class="prefs-mini-head">
          <div class="prefs-mini-title-wrap">
            <span class="prefs-mini-title">Beam, glass, and colorization</span>
            <InlineHelp
              title="Beam, glass, and colorization"
              text="Beam controls the broad OS-style light sweep, gloss controls the finish pass, and colorization decides whether the active site palette is allowed to tint the chrome."
            />
          </div>
        </div>

        <div class="prefs-grid">

      <div class="field-stack" class:is-overridden={isPresetOverride('chromeBeamStyle')}>
        <label for={`${uid}-beam-style`}>Beam / texture profile</label>
        <select
          id={`${uid}-beam-style`}
          value={draftPrefs.chromeTexture ? draftPrefs.chromeBeamStyle : 'none'}
          onchange={(event) => {
            const nextStyle = event.currentTarget.value as WindowSettings['chromeBeamStyle'];
            updateDraft({
              chromeTexture: nextStyle !== 'none',
              chromeBeamStyle: nextStyle,
              chromeBeamIntensity:
                nextStyle === 'none'
                  ? 0
                  : draftPrefs.chromeBeamIntensity > 0
                    ? draftPrefs.chromeBeamIntensity
                    : chromeBeamDefaultIntensity[nextStyle]
            });
          }}
        >
          <option value="none">No beam</option>
          <option value="windows-7">Windows 7 Aero beam</option>
          <option value="vista">Vista beam</option>
          <option value="xp-luna">XP Luna beam</option>
          <option value="windows-9x">Windows 9x bevel</option>
          <option value="kde">KDE sheen</option>
          <option value="mica">Mica highlight</option>
        </select>
      </div>

      <div class="field-stack" class:is-overridden={isPresetOverride('chromeBeamIntensity')}>
        <label for={`${uid}-beam-intensity`}>
          Beam intensity ({draftPrefs.chromeTexture ? draftPrefs.chromeBeamIntensity : 0}%)
        </label>
        <input
          id={`${uid}-beam-intensity`}
          type="range"
          min="0"
          max="100"
          step="1"
          value={draftPrefs.chromeBeamIntensity}
          disabled={!draftPrefs.chromeTexture || draftPrefs.chromeBeamStyle === 'none'}
          oninput={(event) =>
            updateDraft({ chromeBeamIntensity: Number.parseInt(event.currentTarget.value, 10) })}
        />
      </div>

      <div class="field-stack" class:is-overridden={isPresetOverride('chromeGlossStyle')}>
        <label for={`${uid}-gloss-style`}>Gloss profile</label>
        <select
          id={`${uid}-gloss-style`}
          value={draftPrefs.chromeGlossStyle}
          onchange={(event) => {
            const nextStyle = event.currentTarget.value as WindowSettings['chromeGlossStyle'];
            updateDraft({
              chromeGlossStyle: nextStyle
            });
          }}
        >
          <option value="none">No gloss</option>
          <option value="windows-7">Windows 7 glass</option>
          <option value="vista">Vista glass</option>
          <option value="kde">KDE satin</option>
          <option value="mica">Mica haze</option>
        </select>
      </div>

      <div class="field-stack" class:is-overridden={isPresetOverride('chromeGlossIntensity')}>
        <label for={`${uid}-gloss-intensity`}>
          Gloss intensity ({draftPrefs.chromeGlossIntensity}%)
        </label>
        <input
          id={`${uid}-gloss-intensity`}
          type="range"
          min="0"
          max="100"
          step="1"
          value={draftPrefs.chromeGlossIntensity}
          disabled={draftPrefs.chromeGlossStyle === 'none'}
          oninput={(event) =>
            updateDraft({ chromeGlossIntensity: Number.parseInt(event.currentTarget.value, 10) })}
        />
      </div>

      <div class="field-stack" class:is-overridden={isPresetOverride('chromeGlossSpacing')}>
        <label for={`${uid}-gloss-spacing`}>
          Gloss sweep spacing ({draftPrefs.chromeGlossSpacing}px)
        </label>
        <input
          id={`${uid}-gloss-spacing`}
          type="range"
          min="8"
          max="36"
          step="1"
          value={draftPrefs.chromeGlossSpacing}
          disabled={draftPrefs.chromeGlossStyle === 'none'}
          oninput={(event) =>
            updateDraft({ chromeGlossSpacing: Number.parseInt(event.currentTarget.value, 10) })}
        />
      </div>

      <label class="field-toggle" class:is-overridden={isPresetOverride('chromeColorize')}>
        <input
          type="checkbox"
          checked={draftPrefs.chromeColorize}
          onchange={(event) =>
            updateDraft({ chromeColorize: event.currentTarget.checked })}
        />
        <span>Tint the titlebar, borders, and controls using the current app theme colors.</span>
      </label>

      <div class="field-stack" class:is-overridden={isPresetOverride('chromeColorSource')}>
        <label for={`${uid}-chrome-color-source`}>Theme color source</label>
        <select
          id={`${uid}-chrome-color-source`}
          value={draftPrefs.chromeColorSource}
          disabled={!draftPrefs.chromeColorize}
          onchange={(event) =>
            updateDraft({
              chromeColorSource: event.currentTarget.value as WindowSettings['chromeColorSource']
            })}
        >
          <option value="accent">Primary accent</option>
          <option value="accent-strong">Accent highlight</option>
          <option value="accent-soft">Accent wash</option>
          <option value="accent-secondary">Secondary accent</option>
          <option value="accent-secondary-soft">Secondary wash</option>
        </select>
      </div>

      <div class="field-stack" class:is-overridden={isPresetOverride('chromeColorIntensity')}>
        <label for={`${uid}-chrome-color-intensity`}>
          Colorize intensity ({draftPrefs.chromeColorIntensity}%)
        </label>
        <input
          id={`${uid}-chrome-color-intensity`}
          type="range"
          min="0"
          max="100"
          step="1"
          value={draftPrefs.chromeColorIntensity}
          disabled={!draftPrefs.chromeColorize}
          oninput={(event) =>
            updateDraft({ chromeColorIntensity: Number.parseInt(event.currentTarget.value, 10) })}
        />
      </div>

        </div>

        <div class="prefs-section-divider" aria-hidden="true"></div>

        <div class="prefs-mini-head">
          <div class="prefs-mini-title-wrap">
            <span class="prefs-mini-title">Interaction and frame details</span>
            <InlineHelp
              title="Interaction and frame details"
              text="Use these controls to keep title text readable, tune drag and resize behavior, and adjust the final edge weight after the shell finish is already chosen."
            />
          </div>
        </div>

      <div class="prefs-grid">

      <div class="field-stack" class:is-overridden={isPresetOverride('alignment')}>
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

      <div class="field-stack" class:is-overridden={isPresetOverride('titleTone')}>
        <label for={`${uid}-title-tone`}>Title tone</label>
        <select
          id={`${uid}-title-tone`}
          value={draftPrefs.titleTone}
          onchange={(event) =>
            updateDraft({
              titleTone: event.currentTarget.value as WindowSettings['titleTone']
            })}
        >
          <option value="auto">Preset default</option>
          <option value="light">Light title</option>
          <option value="dark">Dark title</option>
        </select>
      </div>

      <div class="field-stack" class:is-overridden={isPresetOverride('titleEffect')}>
        <label for={`${uid}-title-effect`}>Title effect</label>
        <select
          id={`${uid}-title-effect`}
          value={draftPrefs.titleEffect}
          onchange={(event) =>
            updateDraft({
              titleEffect: event.currentTarget.value as WindowSettings['titleEffect']
            })}
        >
          <option value="auto">Preset effect</option>
          <option value="plain">Flat</option>
          <option value="shadow">Shadowed</option>
          <option value="glow">Aero glow</option>
          <option value="emboss">Embossed</option>
        </select>
      </div>

      <div class="field-stack" class:is-overridden={isPresetOverride('titleBarHeight')}>
        <label for={`${uid}-titlebar-height`}>
          Titlebar height ({draftPrefs.titleBarHeight}px)
        </label>
        <input
          id={`${uid}-titlebar-height`}
          type="range"
          min="28"
          max="72"
          step="1"
          value={draftPrefs.titleBarHeight}
          oninput={(event) =>
            updateDraft({ titleBarHeight: Number.parseInt(event.currentTarget.value, 10) })}
        />
      </div>

      <div class="field-stack" class:is-overridden={isPresetOverride('windowScale')}>
        <label for={`${uid}-window-scale`}>Shell scale ({draftPrefs.windowScale}%)</label>
        <input
          id={`${uid}-window-scale`}
          type="range"
          min="75"
          max="140"
          step="1"
          value={draftPrefs.windowScale}
          oninput={(event) =>
            updateDraft({ windowScale: Number.parseInt(event.currentTarget.value, 10) })}
        />
      </div>

      <div class="field-stack" class:is-overridden={isPresetOverride('shiftDragAction')}>
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

      <div class="field-stack" class:is-overridden={isPresetOverride('sideResizeMode')}>
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

      <div class="field-stack" class:is-overridden={isPresetOverride('borderWidth')}>
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

      <div class="field-stack" class:is-overridden={isPresetOverride('borderRadius')}>
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

      <div class="field-stack" class:is-overridden={isPresetOverride('chromePadding')}>
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

      <label class="field-toggle" class:is-overridden={isPresetOverride('snapRestoreOnRelease')}>
        <input
          type="checkbox"
          checked={draftPrefs.snapRestoreOnRelease}
          onchange={(event) =>
            updateDraft({ snapRestoreOnRelease: event.currentTarget.checked })}
        />
        <span>Restore the previous snap if you drag free and release without shift.</span>
      </label>
        </div>
        </fieldset>
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

  .package-body {
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
  }

  .preset-strip {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.85rem;
    padding: 0.9rem 0.95rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 20px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 82%),
      color-mix(in srgb, var(--shell-surface), transparent 8%);
  }

  .preset-strip[data-custom='true'] {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 48%);
    background:
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 90%),
        transparent 36%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 82%),
      color-mix(in srgb, var(--shell-surface), transparent 8%);
  }

  .preset-strip-copy {
    display: flex;
    flex: 1 1 18rem;
    min-width: 0;
    flex-direction: column;
    gap: 0.24rem;
  }

  .preset-strip-copy strong {
    color: var(--shell-text-strong);
    font: var(--efs-font-title-sm);
  }

  .preset-strip-copy span:last-child {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .package-save {
    align-items: stretch;
    min-width: min(100%, 23rem);
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

  .preview-stage-head,
  .preview-apply-row,
  .prefs-section-title,
  .prefs-mini-title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.85rem;
  }

  .preview-kicker {
    display: inline-flex;
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .preview-heading {
    margin: 0.18rem 0 0;
    color: var(--shell-text-strong);
    font: var(--efs-font-title-sm);
  }

  .preview-status {
    margin: 0.32rem 0 0;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.5;
  }

  .preview-window {
    --preview-radius: 18px;
    --preview-titlebar-height: 44px;
    --preview-shell-scale: 1;
    --preview-system-width: calc(2.55rem * var(--preview-shell-scale));
    --preview-system-height:
      min(
        calc(2rem * var(--preview-shell-scale)),
        max(1.56rem, calc(var(--preview-titlebar-height) - max(0.65rem, calc(var(--preview-chrome-padding) * 0.85))))
      );
    --preview-system-radius: max(8px, calc(10px * var(--preview-shell-scale)));
    --preview-system-icon-size: calc(0.88rem * var(--preview-shell-scale));
    --preview-control-border-width: clamp(0px, calc(var(--preview-border-width) * 0.9), 3px);
    --preview-control-radius: max(8px, calc(10px * var(--preview-shell-scale)));
    --preview-top-space:
      max(0.16rem, calc((var(--preview-titlebar-height) - var(--preview-system-height)) * 0.52));
    --preview-bottom-space:
      max(0.12rem, calc((var(--preview-titlebar-height) - var(--preview-system-height)) * 0.48));
    --preview-panel: var(--efs-window-theme-panel, var(--shell-panel));
    --preview-surface: var(--efs-window-theme-surface, var(--shell-surface));
    --preview-border: var(--efs-window-theme-border, var(--shell-border));
    --preview-hover: var(--efs-window-theme-hover, var(--shell-row-hover));
    --preview-shadow: var(--efs-window-theme-shadow, var(--preview-shadow-base, 0 24px 56px rgba(0, 0, 0, 0.32)));
    --preview-tint: var(--efs-window-chrome-tint, var(--shell-primary));
    --preview-chrome-texture-opacity: var(--efs-window-chrome-texture-opacity, 0);
    --preview-beam-intensity: var(--efs-window-chrome-beam-intensity, 0);
    --preview-gloss-intensity: var(--efs-window-chrome-gloss-intensity, 0.68);
    --preview-gloss-spacing: var(--efs-window-chrome-gloss-spacing, 18px);
    --preview-chrome-colorize-opacity: var(--efs-window-chrome-colorize-opacity, 0);
    --preview-w7-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.12) 0 4%,
          rgba(102, 102, 102, 0.08) 6% 6%,
          rgba(0, 0, 0, 0.12) 8% 10%,
          rgba(0, 0, 0, 0.12) 15% 16%,
          rgba(170, 170, 170, 0.08) 17% 18%,
          rgba(0, 0, 0, 0.12) 23% 24%,
          rgba(187, 187, 187, 0.12) 25% 26%,
          rgba(0, 0, 0, 0.12) 31% 33%,
          rgba(0, 0, 0, 0.12) 34% 34.5%,
          rgba(187, 187, 187, 0.12) 36% 40%,
          rgba(0, 0, 0, 0.12) 41% 41.5%,
          rgba(187, 187, 187, 0.12) 44% 45%,
          rgba(187, 187, 187, 0.12) 46% 47%,
          rgba(0, 0, 0, 0.12) 48% 49%,
          rgba(0, 0, 0, 0.12) 50% 50.5%,
          rgba(0, 0, 0, 0.12) 56% 56.5%,
          rgba(187, 187, 187, 0.12) 57% 63%,
          rgba(0, 0, 0, 0.12) 67% 69%,
          rgba(187, 187, 187, 0.12) 69.5% 70%,
          rgba(0, 0, 0, 0.12) 73.5% 74%,
          rgba(187, 187, 187, 0.12) 74.5% 79%,
          rgba(0, 0, 0, 0.12) 80% 84%,
          rgba(170, 170, 170, 0.12) 85% 86%,
          rgba(0, 0, 0, 0.12) 87%,
          rgba(187, 187, 187, 0.08) 90%
        )
        left center / 100vw 100vh no-repeat;
    --preview-vista-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.08) 0 4%,
          rgba(168, 206, 235, 0.14) 6% 6%,
          rgba(0, 0, 0, 0.1) 8% 10%,
          rgba(0, 0, 0, 0.08) 15% 16%,
          rgba(184, 224, 248, 0.16) 17% 18%,
          rgba(0, 0, 0, 0.1) 23% 24%,
          rgba(210, 235, 252, 0.18) 25% 26%,
          rgba(0, 0, 0, 0.1) 31% 33%,
          rgba(0, 0, 0, 0.08) 34% 34.5%,
          rgba(218, 239, 255, 0.18) 36% 40%,
          rgba(0, 0, 0, 0.08) 41% 41.5%,
          rgba(224, 244, 255, 0.18) 44% 45%,
          rgba(224, 244, 255, 0.18) 46% 47%,
          rgba(0, 0, 0, 0.08) 48% 49%,
          rgba(0, 0, 0, 0.08) 50% 50.5%,
          rgba(0, 0, 0, 0.08) 56% 56.5%,
          rgba(224, 244, 255, 0.18) 57% 63%,
          rgba(0, 0, 0, 0.08) 67% 69%,
          rgba(224, 244, 255, 0.18) 69.5% 70%,
          rgba(0, 0, 0, 0.08) 73.5% 74%,
          rgba(224, 244, 255, 0.18) 74.5% 79%,
          rgba(0, 0, 0, 0.08) 80% 84%,
          rgba(172, 214, 239, 0.16) 85% 86%,
          rgba(0, 0, 0, 0.08) 87%,
          rgba(224, 244, 255, 0.12) 90%
        )
        left center / 100vw 100vh no-repeat;
    position: relative;
    isolation: isolate;
    margin-inline: auto;
    width: min(100%, 34rem);
    border: var(--preview-border-width) solid color-mix(in srgb, var(--preview-border), transparent 12%);
    border-radius: var(--preview-radius);
    overflow: hidden;
    font-family: var(--preview-font-family);
    background:
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--preview-tint), transparent 92%),
        transparent 28%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 42%),
      color-mix(in srgb, var(--preview-surface), transparent 2%);
  }

  .preview-window::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 88%), transparent 28%),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 94%), transparent 46%);
    opacity: calc(var(--preview-chrome-colorize-opacity) * 0.72);
  }

  .preview-window-shadow {
    position: absolute;
    inset: 0;
    z-index: 0;
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
      radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 88%), transparent 30%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 52%),
      color-mix(in srgb, var(--preview-surface), transparent 10%);
  }

  .preview-window[data-style='frost'] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),
      color-mix(in srgb, var(--preview-surface), transparent 16%);
  }

  .preview-window[data-style='pane'] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.04) 66%, transparent 100%),
      color-mix(in srgb, var(--preview-surface), transparent 8%);
  }

  .preview-window[data-style='glass'] .preview-chrome {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .preview-window[data-style='mica'] .preview-chrome {
    background:
      radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),
      color-mix(in srgb, var(--preview-panel), transparent 12%);
    backdrop-filter: blur(14px) saturate(1.08);
    -webkit-backdrop-filter: blur(14px) saturate(1.08);
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
      linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.06) 68%),
      color-mix(in srgb, var(--preview-panel), transparent 8%);
    backdrop-filter: blur(10px) saturate(1.04);
    -webkit-backdrop-filter: blur(10px) saturate(1.04);
  }

  .preview-chrome {
    position: relative;
    z-index: 1;
    isolation: isolate;
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
    overflow: hidden;
  }

  .preview-chrome::before,
  .preview-chrome::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .preview-chrome::before {
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 42%);
    opacity: var(--preview-chrome-colorize-opacity);
  }

  .preview-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.34),
        rgba(255, 255, 255, 0.14) 18%,
        rgba(255, 255, 255, 0.04) 52%,
        transparent 82%
      ),
      radial-gradient(132% 118% at 12% -18%, rgba(255, 255, 255, 0.28), transparent 44%),
      radial-gradient(116% 94% at 100% 0%, rgba(255, 255, 255, 0.16), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, 0.12) 38%,
        rgba(255, 255, 255, 0.04) 58%,
        transparent 80%
      );
    mix-blend-mode: screen;
    opacity: calc(var(--preview-chrome-texture-opacity) * 0.78);
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
    z-index: 1;
    min-width: 0;
    width: max(0px, calc(100% - (var(--preview-system-width) * 2) - 2.4rem));
    max-width: max(0px, calc(100% - (var(--preview-system-width) * 2) - 2.4rem));
    color: var(--shell-text);
    font: var(--efs-font-title-sm);
    font-size: clamp(0.82rem, calc(0.84rem * var(--preview-shell-scale)), 1.08rem);
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }

  .preview-window[data-title-tone='light'] .preview-title {
    color: rgba(255, 255, 255, 0.96);
  }

  .preview-window[data-title-tone='dark'] .preview-title {
    color: rgba(0, 0, 0, 0.88);
  }

  .preview-window[data-title-effect='plain'] .preview-title {
    text-shadow: none;
  }

  .preview-window[data-title-effect='shadow'] .preview-title {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  .preview-window[data-title-effect='glow'] .preview-title {
    text-shadow:
      0 0 10px rgba(255, 255, 255, 0.98),
      0 0 12px rgba(255, 255, 255, 0.9),
      0 0 18px rgba(255, 255, 255, 0.75);
  }

  .preview-window[data-title-effect='emboss'] .preview-title {
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.46),
      0 -1px 0 rgba(0, 0, 0, 0.42);
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

  .preview-title.title-bar-text {
    letter-spacing: 0;
    line-height: 15px;
    padding-top: 0.18rem;
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
    position: relative;
    isolation: isolate;
    align-items: center;
    justify-content: center;
    width: calc(2rem * var(--preview-shell-scale));
    height: calc(2rem * var(--preview-shell-scale));
    border: var(--preview-control-border-width) solid
      color-mix(in srgb, var(--preview-border), transparent 16%);
    border-radius: var(--preview-control-radius);
    background: color-mix(in srgb, var(--preview-panel), transparent 8%);
    color: var(--shell-muted);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
    overflow: hidden;
  }

  .preview-control::before,
  .preview-control::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
  }

  .preview-control::before {
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 74%),
      radial-gradient(circle at top left, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 56%);
    opacity: calc(var(--preview-chrome-colorize-opacity) * 0.7);
  }

  .preview-control::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.28),
        rgba(255, 255, 255, 0.1) 42%,
        rgba(255, 255, 255, 0.02) 76%,
        transparent 100%
      ),
      radial-gradient(130% 118% at 18% -24%, rgba(255, 255, 255, 0.18), transparent 46%),
      linear-gradient(
        118deg,
        transparent 16%,
        rgba(255, 255, 255, 0.1) 42%,
        rgba(255, 255, 255, 0.03) 64%,
        transparent 86%
      );
    mix-blend-mode: screen;
    opacity: calc(var(--preview-chrome-texture-opacity) * 0.44);
  }

  .preview-control :global(.app-icon) {
    position: relative;
    z-index: 1;
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
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.08) 68%, transparent 100%),
      color-mix(in srgb, var(--preview-panel), transparent 12%);
    border-color: color-mix(in srgb, var(--preview-border), transparent 24%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.26);
  }

  .preview-controls.windows.variant-ubuntu,
  .preview-controls.windows.variant-xubuntu {
    gap: 0.32rem;
  }

  .preview-window[data-theme='windows-9x'] .preview-controls.windows .preview-control.system {
    border-color: color-mix(in srgb, var(--preview-border), transparent 6%);
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

  .preview-window[data-theme='aero']:not(.win7-theme) .preview-chrome {
    --preview-w7-title-bg:
      linear-gradient(to right, #ffffff66, #0000001a, #ffffff33),
      #4580c4;
    --preview-w7-control-bg:
      linear-gradient(#ffffff80, #ffffff4d 45%, #0000001a 50%, #0000001a 75%, #ffffff80);
    --preview-w7-control-border: #0000004d;
    background:
      linear-gradient(transparent 20%, rgba(255, 255, 255, 0.72) 40%, transparent 41%),
      var(--preview-w7-title-bg);
    backdrop-filter: blur(10px) saturate(1.04);
    -webkit-backdrop-filter: blur(10px) saturate(1.04);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);
  }

  .preview-window[data-theme='aero']:not(.win7-theme) .preview-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.48),
        rgba(255, 255, 255, 0.22) 18%,
        rgba(255, 255, 255, 0.06) 56%,
        transparent 88%
      ),
      radial-gradient(134% 124% at 10% -20%, rgba(255, 255, 255, 0.38), transparent 42%),
      radial-gradient(92% 112% at 100% 0%, rgba(255, 255, 255, 0.2), transparent 42%),
      linear-gradient(
        112deg,
        transparent 12%,
        rgba(255, 255, 255, 0.16) 38%,
        rgba(255, 255, 255, 0.05) 58%,
        transparent 80%
      );
    opacity: calc(var(--preview-chrome-texture-opacity) * 0.92);
  }

  .preview-window[data-theme='aero']:not(.win7-theme) .preview-controls.windows {
    gap: 0;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.22);
    border: 1px solid var(--preview-w7-control-border);
    border-top: 0;
    border-radius: 0 0 5px 5px;
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.8),
      1px 0 0 rgba(255, 255, 255, 0.66),
      -1px 0 0 rgba(255, 255, 255, 0.66);
  }

  .preview-window[data-theme='aero']:not(.win7-theme) .preview-controls.windows .preview-control.system {
    border: 0;
    border-right: 1px solid var(--preview-w7-control-border);
    border-radius: 0;
    background: var(--preview-w7-control-bg);
    color: rgba(0, 0, 0, 0.76);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.66);
  }

  .preview-window[data-theme='aero']:not(.win7-theme) .preview-controls.windows .preview-control.system:last-child {
    border-right: 0;
  }

  .preview-window[data-theme='aero']:not(.win7-theme) .preview-controls.windows .preview-control.close {
    min-width: var(--preview-system-width);
    background:
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(224, 161, 151, 0.9),
        rgba(207, 121, 106, 0.95) 25% 50%,
        rgba(213, 79, 54, 0.96) 50%
      );
    color: rgba(255, 255, 255, 0.94);
  }

  .preview-window[data-theme='windows-vista'] .preview-chrome {
    --preview-top-space: max(0.22rem, calc(var(--preview-chrome-padding) * 0.62));
    --preview-bottom-space: max(0.12rem, calc(var(--preview-chrome-padding) * 0.24));
    --preview-vista-title-bg:
      linear-gradient(to right, rgba(255, 255, 255, 0.74), rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.36)),
      #6c8fbe;
    --preview-vista-control-bg:
      linear-gradient(
        rgba(255, 255, 255, 0.62),
        rgba(255, 255, 255, 0.34) 45%,
        rgba(0, 0, 0, 0.12) 50%,
        rgba(0, 0, 0, 0.14) 76%,
        rgba(255, 255, 255, 0.54)
      );
    background:
      linear-gradient(transparent 18%, rgba(255, 255, 255, 0.78) 40%, transparent 41%),
      var(--preview-vista-title-bg);
    backdrop-filter: blur(9px) saturate(1.02);
    -webkit-backdrop-filter: blur(9px) saturate(1.02);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.96),
      inset 1px 0 0 rgba(255, 255, 255, 0.62),
      inset -1px 0 0 rgba(255, 255, 255, 0.62);
  }

  .preview-window[data-theme='windows-vista'] .preview-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.56),
        rgba(255, 255, 255, 0.28) 18%,
        rgba(255, 255, 255, 0.08) 58%,
        transparent 90%
      ),
      radial-gradient(138% 126% at 8% -22%, rgba(255, 255, 255, 0.44), transparent 44%),
      radial-gradient(104% 118% at 100% 0%, rgba(255, 255, 255, 0.24), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, 0.18) 36%,
        rgba(255, 255, 255, 0.06) 58%,
        transparent 82%
      );
    opacity: calc(var(--preview-chrome-texture-opacity) * 0.96);
  }

  .preview-window[data-theme='windows-vista'] .preview-controls.windows {
    gap: 0;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.26);
    border: 1px solid rgba(0, 0, 0, 0.35);
    border-top: 0;
    border-radius: 0 0 5px 5px;
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.84),
      1px 0 0 rgba(255, 255, 255, 0.72),
      -1px 0 0 rgba(255, 255, 255, 0.72);
  }

  .preview-window[data-theme='windows-vista'] .preview-controls.windows .preview-control.system {
    border: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.35);
    border-radius: 0;
    background: var(--preview-vista-control-bg);
    color: rgba(0, 0, 0, 0.82);
    box-shadow:
      inset 0 0 0 1px rgba(255, 255, 255, 0.72),
      inset 0 1px 0 rgba(255, 255, 255, 0.38);
  }

  .preview-window[data-theme='windows-vista'] .preview-controls.windows .preview-control.system:last-child {
    border-right: 0;
  }

  .preview-window[data-theme='windows-vista'] .preview-controls.windows .preview-control.close {
    min-width: var(--preview-system-width);
    background:
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(233, 176, 166, 0.94),
        rgba(211, 110, 95, 0.96) 25% 50%,
        rgba(201, 52, 37, 0.98) 50%
      );
    color: rgba(255, 255, 255, 0.96);
  }

  .preview-window[data-theme='windows-11-mica'] .preview-chrome {
    background:
      radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),
      color-mix(in srgb, var(--preview-panel), transparent 10%);
    backdrop-filter: blur(14px) saturate(1.08);
    -webkit-backdrop-filter: blur(14px) saturate(1.08);
  }

  .preview-window[data-theme='windows-11-mica'] .preview-chrome::after {
    background:
      radial-gradient(142% 118% at 14% -18%, rgba(255, 255, 255, 0.22), transparent 42%),
      radial-gradient(
        124% 134% at 100% 0%,
        color-mix(in srgb, var(--preview-tint), transparent 88%),
        transparent 38%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.03) 48%, transparent 78%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, 0.1),
        transparent 28%,
        rgba(255, 255, 255, 0.04) 58%,
        transparent 84%
      );
    opacity: calc(var(--preview-chrome-texture-opacity) * 0.62);
  }

  .preview-window[data-theme='windows-11-mica'] .preview-controls.windows .preview-control.system {
    border-radius: 11px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--preview-panel), transparent 8%);
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
      0 0 0 1px color-mix(in srgb, var(--preview-border), transparent 68%);
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
    background: color-mix(in srgb, var(--preview-panel), transparent 2%);
    box-shadow: none;
  }

  .preview-window[data-beam='windows-7'] .preview-chrome::before {
    background:
      var(--preview-w7-glass-stripes),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.6 + var(--preview-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.28 + var(--preview-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.06 + var(--preview-beam-intensity) * 0.05)) 48%,
        transparent 74%
      ),
      radial-gradient(
        154% 128% at 52% -34%,
        rgba(255, 255, 255, calc(0.56 + var(--preview-beam-intensity) * 0.22)),
        transparent 38%
      ),
      radial-gradient(
        116% 116% at 100% 0%,
        rgba(255, 255, 255, calc(0.18 + var(--preview-beam-intensity) * 0.1)),
        transparent 42%
      ),
      linear-gradient(
        104deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.26 + var(--preview-beam-intensity) * 0.16)) 22%,
        rgba(255, 255, 255, calc(0.08 + var(--preview-beam-intensity) * 0.08)) 40%,
        transparent 60%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.44 + var(--preview-beam-intensity) * 0.98),
      1
    );
  }

  .preview-window[data-beam='vista'] .preview-chrome::before {
    background:
      var(--preview-vista-glass-stripes),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.68 + var(--preview-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.34 + var(--preview-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--preview-beam-intensity) * 0.05)) 52%,
        transparent 76%
      ),
      radial-gradient(
        164% 136% at 50% -42%,
        rgba(255, 255, 255, calc(0.62 + var(--preview-beam-intensity) * 0.24)),
        transparent 40%
      ),
      radial-gradient(
        120% 122% at 100% 0%,
        rgba(255, 255, 255, calc(0.22 + var(--preview-beam-intensity) * 0.14)),
        transparent 44%
      ),
      linear-gradient(
        106deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.32 + var(--preview-beam-intensity) * 0.16)) 20%,
        rgba(255, 255, 255, calc(0.1 + var(--preview-beam-intensity) * 0.08)) 40%,
        transparent 62%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 84%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 78%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.48 + var(--preview-beam-intensity) * 1),
      1
    );
  }

  .preview-window[data-beam='xp-luna'] .preview-chrome::before {
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, white 88%, var(--preview-tint) 12%),
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.08)) 30%,
        transparent 78%
      ),
      radial-gradient(
        146% 120% at 16% -6%,
        color-mix(in srgb, white 84%, var(--preview-tint) 16%),
        transparent 44%
      ),
      linear-gradient(
        96deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.14 + var(--preview-beam-intensity) * 0.08)) 22%,
        transparent 48%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 82%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 76%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.62 + var(--preview-beam-intensity) * 0.88),
      1
    );
  }

  .preview-window[data-beam='windows-9x'] .preview-chrome::before {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.32 + var(--preview-beam-intensity) * 0.14)) 0 2px,
        rgba(255, 255, 255, calc(0.12 + var(--preview-beam-intensity) * 0.06)) 2px 5px,
        transparent 5px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.08)) 0 1px,
        transparent 1px 100%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 84%), transparent 74%);
    opacity: clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.48 + var(--preview-beam-intensity) * 0.78),
      1
    );
  }

  .preview-window[data-beam='kde'] .preview-chrome::before {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.24 + var(--preview-beam-intensity) * 0.1)),
        rgba(255, 255, 255, calc(0.08 + var(--preview-beam-intensity) * 0.05)) 30%,
        transparent 78%
      ),
      radial-gradient(
        142% 118% at 18% -8%,
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.08)),
        transparent 42%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 80%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.52 + var(--preview-beam-intensity) * 0.82),
      1
    );
  }

  .preview-window[data-beam='mica'] .preview-chrome::before {
    background:
      radial-gradient(
        144% 124% at 18% -18%,
        rgba(255, 255, 255, calc(0.16 + var(--preview-beam-intensity) * 0.06)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.1 + var(--preview-beam-intensity) * 0.04)),
        transparent 76%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--preview-tint), transparent 90%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--preview-tint), transparent 84%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--preview-chrome-colorize-opacity) * 0.48 + var(--preview-beam-intensity) * 0.74),
      1
    );
  }

  .preview-window[data-gloss='none'] .preview-chrome::after,
  .preview-window[data-gloss='none'] .preview-control::after {
    opacity: 0;
  }

  .preview-window[data-gloss='windows-7'] .preview-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.3 + var(--preview-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.1)) 18%,
        rgba(255, 255, 255, calc(0.03 + var(--preview-gloss-intensity) * 0.04)) 58%,
        transparent 88%
      ),
      radial-gradient(136% 124% at 10% -18%, rgba(255, 255, 255, calc(0.18 + var(--preview-gloss-intensity) * 0.18)), transparent 46%),
      radial-gradient(104% 110% at 100% 0%, rgba(255, 255, 255, calc(0.07 + var(--preview-gloss-intensity) * 0.1)), transparent 42%),
      linear-gradient(
        114deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.04 + var(--preview-gloss-intensity) * 0.1)) calc(28% + var(--preview-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.03)) calc(54% + var(--preview-gloss-spacing) * 0.1),
        transparent 82%
      );
    opacity: calc(var(--preview-chrome-texture-opacity) * 1.02);
  }

  .preview-window[data-gloss='vista'] .preview-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.36 + var(--preview-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.14 + var(--preview-gloss-intensity) * 0.12)) 18%,
        rgba(255, 255, 255, calc(0.04 + var(--preview-gloss-intensity) * 0.05)) 58%,
        transparent 90%
      ),
      radial-gradient(138% 126% at 8% -22%, rgba(255, 255, 255, calc(0.22 + var(--preview-gloss-intensity) * 0.22)), transparent 44%),
      radial-gradient(114% 118% at 100% 0%, rgba(255, 255, 255, calc(0.09 + var(--preview-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, calc(0.05 + var(--preview-gloss-intensity) * 0.12)) calc(30% + var(--preview-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.04)) calc(58% + var(--preview-gloss-spacing) * 0.12),
        transparent 82%
      );
    opacity: calc(var(--preview-chrome-texture-opacity) * 1.08);
  }

  .preview-window[data-gloss='kde'] .preview-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.18 + var(--preview-gloss-intensity) * 0.16)),
        rgba(255, 255, 255, calc(0.06 + var(--preview-gloss-intensity) * 0.06)) 24%,
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.02)) 58%,
        transparent 84%
      ),
      radial-gradient(128% 112% at 14% -16%, rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        124deg,
        transparent 10%,
        rgba(255, 255, 255, calc(0.03 + var(--preview-gloss-intensity) * 0.08)) calc(28% + var(--preview-gloss-spacing) * 0.16),
        rgba(255, 255, 255, calc(0.01 + var(--preview-gloss-intensity) * 0.02)) calc(60% + var(--preview-gloss-spacing) * 0.08),
        transparent 84%
      );
    opacity: calc(var(--preview-chrome-texture-opacity) * 0.96);
  }

  .preview-window[data-gloss='mica'] .preview-chrome::after {
    background:
      radial-gradient(142% 118% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.12)), transparent 42%),
      radial-gradient(124% 134% at 100% 0%, rgba(255, 255, 255, calc(0.05 + var(--preview-gloss-intensity) * 0.06)), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.08 + var(--preview-gloss-intensity) * 0.08)), rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.02)) 52%, transparent 80%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, calc(0.02 + var(--preview-gloss-intensity) * 0.04)),
        transparent 28%,
        rgba(255, 255, 255, calc(0.01 + var(--preview-gloss-intensity) * 0.02)) calc(60% + var(--preview-gloss-spacing) * 0.08),
        transparent 86%
      );
    opacity: calc(var(--preview-chrome-texture-opacity) * 0.92);
  }

  .preview-window[data-gloss='windows-7'] .preview-controls.windows .preview-control.system,
  .preview-window[data-gloss='vista'] .preview-controls.windows .preview-control.system,
  .preview-window[data-gloss='kde'] .preview-controls.windows .preview-control.system,
  .preview-window[data-gloss='mica'] .preview-controls.windows .preview-control.system {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.12 + var(--preview-gloss-intensity) * 0.18)),
        rgba(255, 255, 255, calc(0.03 + var(--preview-gloss-intensity) * 0.05)) 72%,
        transparent 100%
      ),
      color-mix(in srgb, var(--preview-panel), transparent 10%);
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
    border: 1px solid color-mix(in srgb, var(--preview-border), transparent 16%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--preview-panel), transparent 6%);
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

  .preview-window.win7-theme .preview-window-shadow,
  .preview-window.win7-theme .preview-chrome::before,
  .preview-window.win7-theme .preview-chrome::after {
    display: none;
  }

  .preview-window.basic7-theme {
    --w7-font: 9pt 'Segoe UI', 'SegoeUI', 'Noto Sans', sans-serif;
    --w7-w-space: 6px;
    --w7-w-bd: var(--efs-win7-window-border, #000000b3);
    --w7-w-bdr: 6px;
    --w7-w-bg: var(--efs-win7-window-bg, #4580c4);
    --w7-w-grad:
      linear-gradient(
        180deg,
        color-mix(in srgb, white 80%, var(--w7-w-bg) 20%) 0%,
        color-mix(in srgb, white 62%, var(--w7-w-bg) 38%) 46%,
        color-mix(in srgb, black 10%, var(--w7-w-bg) 90%) 100%
      );
    border: 1px solid var(--w7-w-bd);
    border-radius: var(--w7-w-bdr);
    background: transparent;
    box-shadow: 2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;
    color: var(--w7-el-c);
    font-family: var(--w7-font);
    overflow: visible;
  }

  .preview-window.basic7-theme::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: var(--w7-w-bdr);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.24) 24%, transparent 34%),
      var(--w7-w-grad);
    background-color: var(--w7-w-bg);
    box-shadow: inset 0 0 0 1px #fffd;
    opacity: 1;
  }

  .preview-window.basic7-theme::after {
    content: none;
    display: none;
  }

  .preview-window.basic7-theme .preview-window-shadow {
    display: none;
  }

  .preview-window.basic7-theme .preview-chrome {
    min-height: 0;
    padding: var(--w7-w-space);
    padding-top: 0;
    border: 1px solid var(--w7-w-bd);
    border-bottom: 0;
    border-radius: var(--w7-w-bdr) var(--w7-w-bdr) 0 0;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.22) 22%, transparent 34%),
      var(--w7-w-grad);
    background-attachment: scroll;
    background-color: var(--w7-w-bg);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.94),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);
    overflow: visible;
  }

  .preview-window.basic7-theme .preview-chrome::before,
  .preview-window.basic7-theme .preview-chrome::after {
    display: none;
  }

  .preview-window.basic7-theme .preview-title.title-bar-text {
    padding-top: var(--w7-w-space);
    color: #000;
    font: var(--w7-font);
    font-size: 9pt;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 15px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.72);
  }

  .preview-window.basic7-theme .preview-body.window-body {
    margin: var(--w7-w-space);
    margin-top: 0;
    padding: var(--w7-w-space);
    border: 1px solid var(--w7-w-bd);
    background: var(--w7-surface);
    box-shadow: var(--efs-win7-body-shadow, 0 0 0 1px #fff9);
    color: var(--w7-el-c);
  }

  .preview-window.basic7-theme .preview-card {
    border-color: color-mix(in srgb, var(--w7-w-bd), transparent 26%);
    background: color-mix(in srgb, var(--w7-surface), transparent 4%);
  }

  .preview-window.basic7-theme .preview-card-kicker,
  .preview-window.basic7-theme .preview-card p {
    color: color-mix(in srgb, var(--w7-el-c), transparent 28%);
  }

  .prefs-section,
  .profiles-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
    padding: 1rem 1.05rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 12%);
    border-radius: 22px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 26%),
      color-mix(in srgb, var(--shell-surface), transparent 4%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      inset 0 -1px 0 rgba(0, 0, 0, 0.18);
  }

  .prefs-section-head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.85rem;
    padding-bottom: 0.85rem;
    border-bottom: 1px solid color-mix(in srgb, var(--shell-border), transparent 22%);
  }

  .prefs-heading-stack {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 0.22rem;
  }

  .prefs-heading-stack h4 {
    margin: 0;
    color: var(--shell-text-strong);
    font: var(--efs-font-title-sm);
    letter-spacing: 0.01em;
  }

  .prefs-section-body {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .custom-state-copy {
    display: flex;
    flex-direction: column;
    gap: 0.24rem;
  }

  .custom-state-copy strong {
    color: var(--shell-text-strong);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .custom-state-copy span {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .prefs-mini-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.45rem 1rem;
  }

  .prefs-mini-title {
    color: var(--shell-text-strong);
    font: var(--efs-font-label);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .prefs-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    align-items: stretch;
  }

  .prefs-grid > * {
    flex: 1 1 15rem;
    min-width: min(100%, 15rem);
  }

  .prefs-grid-compact > * {
    flex-basis: 14rem;
  }

  .theme-note {
    margin: 0;
    max-width: 48rem;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  .preview-apply-row {
    margin-top: 0.95rem;
    padding-top: 0.95rem;
    border-top: 1px solid color-mix(in srgb, var(--shell-border), transparent 24%);
  }

  .preview-apply-copy {
    display: flex;
    flex: 1 1 18rem;
    min-width: 0;
    flex-direction: column;
    gap: 0.22rem;
  }

  .preview-apply-copy strong {
    color: var(--shell-text-strong);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .preview-apply-copy span {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .group-kicker {
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .prefs-section-divider {
    width: 100%;
    height: 1px;
    background:
      linear-gradient(
        90deg,
        transparent 0,
        color-mix(in srgb, var(--shell-primary), transparent 82%) 18%,
        color-mix(in srgb, var(--shell-border), transparent 18%) 50%,
        color-mix(in srgb, var(--shell-primary), transparent 82%) 82%,
        transparent 100%
      );
  }

  .field-stack {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    min-width: 0;
    transition:
      opacity 160ms ease,
      filter 160ms ease,
      transform 160ms ease;
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
      box-shadow 160ms ease,
      opacity 160ms ease,
      background-color 160ms ease;
  }

  .field-stack select:disabled,
  .field-stack input:disabled {
    opacity: 0.52;
    cursor: not-allowed;
  }

  .field-stack input[type='range'] {
    padding-inline: 0.75rem;
    accent-color: var(--shell-primary);
  }

  .field-toggle {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 3rem;
    padding: 0.85rem 0.95rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    color: var(--shell-text);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
    transition:
      opacity 160ms ease,
      filter 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      box-shadow 160ms ease;
  }

  .field-toggle-feature {
    background:
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 90%),
        transparent 48%
      ),
      color-mix(in srgb, var(--shell-surface), transparent 8%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 12px 28px color-mix(in srgb, var(--shell-primary), transparent 96%);
  }

  .field-toggle input {
    width: 1rem;
    height: 1rem;
    margin: 0.15rem 0 0;
    accent-color: var(--shell-primary);
  }

  .custom-section .field-stack:not(.is-overridden),
  .custom-section .field-toggle:not(.is-overridden) {
    opacity: 0.6;
    filter: saturate(0.74);
  }

  .preset-controlled-fields {
    min-inline-size: 0;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .preset-controlled-fields:disabled {
    opacity: 0.84;
  }

  .custom-section .field-stack:hover,
  .custom-section .field-stack:focus-within,
  .custom-section .field-toggle:hover,
  .custom-section .field-toggle:focus-within,
  .custom-section .field-stack.is-overridden,
  .custom-section .field-toggle.is-overridden {
    opacity: 1;
    filter: none;
  }

  .field-stack.is-overridden label,
  .field-toggle.is-overridden {
    color: var(--shell-text);
  }

  .field-stack.is-overridden select,
  .field-stack.is-overridden input,
  .field-toggle.is-overridden {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 42%);
    background:
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 92%),
        transparent 48%
      ),
      color-mix(in srgb, var(--shell-surface), transparent 8%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.06),
      0 12px 26px color-mix(in srgb, var(--shell-primary), transparent 96%);
  }

  .profiles-save {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: stretch;
  }

  .profiles-save input {
    flex: 1 1 14rem;
    width: 100%;
    min-height: 3rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    color: var(--shell-text);
    padding: 0.8rem 0.95rem;
  }

  .field-stack select:focus,
  .field-stack input:focus,
  .profiles-save input:focus {
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
    .prefs-section,
    .profiles-panel {
      padding: 0.9rem;
      border-radius: 20px;
    }

    .prefs-section-head {
      padding-bottom: 0.75rem;
    }

    .profiles-save {
      flex-direction: column;
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
