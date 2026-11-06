<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import AppIcon from '@ui/components/icons/AppIcon.svelte';
  import {
    DEFAULT_WINDOW_SETTINGS,
    resolveWindowTitleEffect,
    resolveWindowTitleTone,
    subscribeWindowSettings,
    type WindowSettings
  } from '@ui/components/shell/windowSettings';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    eyebrow: string;
    title: string;
    description: string;
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    allowPopout?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
    actions?: Snippet;
    children?: Snippet;
    footer?: Snippet;
  };

  let {
    eyebrow,
    title,
    description,
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    allowPopout = true,
    onOpen,
    onTogglePin,
    actions,
    children,
    footer
  }: Props = $props();

  let globalSettings = $state<WindowSettings>({ ...DEFAULT_WINDOW_SETTINGS });
  let activeThemePreset = $derived(globalSettings.themePreset);
  let activeTitleBarHeight = $derived(
    Math.max(28, globalSettings.titleBarHeight ?? DEFAULT_WINDOW_SETTINGS.titleBarHeight)
  );
  let activeWindowScale = $derived(
    Math.max(0.75, (globalSettings.windowScale ?? DEFAULT_WINDOW_SETTINGS.windowScale) / 100)
  );
  let activeBeamStyle = $derived(
    globalSettings.chromeTexture ? globalSettings.chromeBeamStyle : 'none'
  );
  let activeGlossStyle = $derived(globalSettings.chromeGlossStyle);
  let activeTitleTone = $derived(
    resolveWindowTitleTone({
      themePreset: activeThemePreset,
      titleTone: globalSettings.titleTone
    })
  );
  let activeTitleEffect = $derived(
    resolveWindowTitleEffect({
      themePreset: activeThemePreset,
      titleEffect: globalSettings.titleEffect
    })
  );
  let isWindows7AeroTheme = $derived(activeThemePreset === 'aero');
  let isWindowsBasicTheme = $derived(activeThemePreset === 'windows-basic');
  let isWindows7Theme = $derived(isWindows7AeroTheme || isWindowsBasicTheme);

  onMount(() => {
    const unsubscribe = subscribeWindowSettings((settings) => {
      globalSettings = { ...settings };
    });

    return () => {
      unsubscribe();
    };
  });
</script>

<article
  class="widget-frame"
  class:window-mode={mode === 'window'}
  class:win7={isWindows7Theme}
  class:win7-theme={isWindows7AeroTheme}
  class:basic7-theme={isWindowsBasicTheme}
  class:window={isWindows7Theme}
  class:active={isWindows7Theme}
  class:glass={isWindows7AeroTheme}
  data-testid={dataTestid}
  data-theme={activeThemePreset}
  data-beam={isWindows7AeroTheme ? undefined : activeBeamStyle}
  data-gloss={isWindows7AeroTheme ? undefined : activeGlossStyle}
  data-title-tone={isWindows7AeroTheme ? undefined : activeTitleTone}
  data-title-effect={isWindows7AeroTheme ? undefined : activeTitleEffect}
  style:--widget-titlebar-height={`${activeTitleBarHeight}px`}
  style:--widget-shell-scale={`${activeWindowScale}`}
>
  {#if mode !== 'window'}
    <header class="widget-header" class:title-bar={isWindows7Theme}>
      <div class="widget-heading">
        <span class="widget-eyebrow">{eyebrow}</span>
        <div class="widget-title-row">
          <h2 class="widget-title" class:title-bar-text={isWindows7Theme}>{title}</h2>
          {#if open}
            <span class="widget-state" data-state={pinned ? 'pinned' : 'open'}>{pinned ? 'Pinned' : 'Open'}</span>
          {/if}
        </div>
      </div>

      <div class="widget-toolbar">
        {#if allowPopout && onOpen}
          <button
            class="widget-icon-button"
            class:efs-win7-tool-button={isWindows7Theme}
            type="button"
            onclick={onOpen}
            aria-label={open ? 'Focus widget window' : 'Pop out widget'}
            title={open ? 'Focus widget window' : 'Pop out widget'}
          >
            <AppIcon name="popout" />
          </button>
        {/if}

        {#if onTogglePin}
          <button
            class="widget-icon-button"
            class:efs-win7-tool-button={isWindows7Theme}
            class:is-active={pinned}
            class:active={pinned}
            type="button"
            onclick={onTogglePin}
            aria-label={pinned ? 'Unpin widget' : 'Pin widget'}
            aria-pressed={pinned}
            title={pinned ? 'Unpin widget' : 'Pin widget'}
          >
            <AppIcon name="pin" />
          </button>
        {/if}

        <div class="widget-help">
          <button
            class="widget-icon-button widget-help-button"
            class:efs-win7-tool-button={isWindows7Theme}
            type="button"
            aria-label={`About ${title}`}
            title={`About ${title}`}
          >
            <AppIcon name="help" />
          </button>
          <div class="widget-help-tooltip" role="tooltip">
            <strong>{title}</strong>
            <span>{description}</span>
          </div>
        </div>

        {#if actions}
          <div class="widget-extra-actions">
            {@render actions()}
          </div>
        {/if}
      </div>
    </header>
  {/if}

  <div class="widget-body" class:window-body={isWindows7Theme}>
    {@render children?.()}
  </div>

  {#if footer}
    <footer class="widget-footer" class:window-footer={isWindows7Theme}>
      {@render footer()}
    </footer>
  {/if}
</article>

<style>
  .widget-frame {
    --widget-panel: var(--efs-widget-theme-panel, var(--efs-window-theme-panel, var(--shell-panel)));
    --widget-surface: var(
      --efs-widget-theme-surface,
      var(--efs-window-theme-surface, var(--shell-surface, var(--shell-panel)))
    );
    --widget-border: var(--efs-widget-theme-border, var(--efs-window-theme-border, var(--shell-border)));
    --widget-hover: var(--efs-widget-theme-hover, var(--efs-window-theme-hover, var(--shell-row-hover)));
    --widget-shadow: var(--efs-widget-theme-shadow, var(--efs-widget-shadow, var(--shell-card-shadow)));
    --widget-tint: var(
      --efs-widget-theme-tint,
      var(--efs-window-chrome-tint, var(--shell-primary, var(--accent, #5b8cff)))
    );
    --widget-chrome-texture-opacity: var(
      --efs-widget-chrome-texture-opacity,
      var(--efs-window-chrome-texture-opacity, 0)
    );
    --widget-beam-intensity: var(
      --efs-widget-chrome-beam-intensity,
      var(--efs-window-chrome-beam-intensity, 0)
    );
    --widget-gloss-intensity: var(--efs-widget-chrome-gloss-intensity, 0.68);
    --widget-gloss-spacing: var(--efs-widget-chrome-gloss-spacing, 18px);
    --widget-titlebar-height: 44px;
    --widget-shell-scale: 1;
    --widget-control-size:
      min(
        calc(2.18rem * var(--widget-shell-scale)),
        max(1.9rem, calc(var(--widget-titlebar-height) - max(0.72rem, calc(var(--efs-widget-chrome-padding, 12px) * 0.85))))
      );
    --widget-control-radius: max(10px, calc(var(--efs-widget-radius, 26px) * 0.5));
    --widget-title-size: clamp(0.98rem, calc(1rem * var(--widget-shell-scale)), 1.24rem);
    --widget-chrome-colorize-opacity: var(
      --efs-widget-chrome-colorize-opacity,
      var(--efs-window-chrome-colorize-opacity, 0)
    );
    --widget-w7-glass-stripes:
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
    --widget-vista-glass-stripes:
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
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 0;
    min-height: 100%;
    border: var(--efs-widget-border-width, 1px) solid
      color-mix(in srgb, var(--widget-border), transparent 6%);
    border-radius: var(--efs-widget-radius, 26px);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 32%),
      linear-gradient(135deg, color-mix(in srgb, var(--widget-panel), white 6%), transparent 38%),
      var(--widget-panel);
    box-shadow: var(--widget-shadow);
    overflow: clip;
  }

  .widget-frame::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 88%), transparent 28%),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 94%), transparent 46%);
    opacity: calc(var(--widget-chrome-colorize-opacity) * 0.72);
  }

  .widget-frame.window-mode {
    min-height: auto;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    overflow: visible;
  }

  .widget-frame.window-mode::before {
    display: none;
  }

  .widget-header,
  .widget-body,
  .widget-footer {
    position: relative;
    z-index: 1;
    padding-inline: max(0.9rem, calc(var(--efs-widget-chrome-padding, 12px) + 0.28rem));
  }

  .widget-header {
    isolation: isolate;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    min-height: var(--widget-titlebar-height);
    padding-top: max(0.42rem, calc((var(--widget-titlebar-height) - var(--widget-control-size)) * 0.5));
    padding-bottom: max(0.28rem, calc((var(--widget-titlebar-height) - var(--widget-control-size)) * 0.44));
    overflow: hidden;
    border-bottom: 1px solid color-mix(in srgb, var(--widget-border), transparent 18%);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),
      color-mix(in srgb, var(--widget-panel), transparent 2%);
  }

  .widget-header::before,
  .widget-header::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .widget-header::before {
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 42%);
    opacity: var(--widget-chrome-colorize-opacity);
  }

  .widget-header::after {
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
    opacity: calc(var(--widget-chrome-texture-opacity) * 0.78);
  }

  .widget-frame[data-gloss='none'] .widget-header::after,
  .widget-frame[data-gloss='none'] .widget-icon-button::after {
    opacity: 0;
  }

  .widget-frame[data-beam='windows-7'] .widget-header::before {
    background:
      var(--widget-w7-glass-stripes),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.6 + var(--widget-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.28 + var(--widget-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.06 + var(--widget-beam-intensity) * 0.05)) 48%,
        transparent 74%
      ),
      radial-gradient(
        154% 128% at 52% -34%,
        rgba(255, 255, 255, calc(0.56 + var(--widget-beam-intensity) * 0.22)),
        transparent 38%
      ),
      radial-gradient(
        116% 116% at 100% 0%,
        rgba(255, 255, 255, calc(0.18 + var(--widget-beam-intensity) * 0.1)),
        transparent 42%
      ),
      linear-gradient(
        104deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.26 + var(--widget-beam-intensity) * 0.16)) 22%,
        rgba(255, 255, 255, calc(0.08 + var(--widget-beam-intensity) * 0.08)) 40%,
        transparent 60%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.44 + var(--widget-beam-intensity) * 0.98),
      1
    );
  }

  .widget-frame[data-beam='vista'] .widget-header::before {
    background:
      var(--widget-vista-glass-stripes),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.68 + var(--widget-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.34 + var(--widget-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--widget-beam-intensity) * 0.05)) 52%,
        transparent 76%
      ),
      radial-gradient(
        164% 136% at 50% -42%,
        rgba(255, 255, 255, calc(0.62 + var(--widget-beam-intensity) * 0.24)),
        transparent 40%
      ),
      radial-gradient(
        120% 122% at 100% 0%,
        rgba(255, 255, 255, calc(0.22 + var(--widget-beam-intensity) * 0.14)),
        transparent 44%
      ),
      linear-gradient(
        106deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.32 + var(--widget-beam-intensity) * 0.16)) 20%,
        rgba(255, 255, 255, calc(0.1 + var(--widget-beam-intensity) * 0.08)) 40%,
        transparent 62%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 84%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 78%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.48 + var(--widget-beam-intensity) * 1),
      1
    );
  }

  .widget-frame[data-beam='xp-luna'] .widget-header::before {
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, white 88%, var(--widget-tint) 12%),
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.08)) 30%,
        transparent 78%
      ),
      radial-gradient(
        146% 120% at 16% -6%,
        color-mix(in srgb, white 84%, var(--widget-tint) 16%),
        transparent 44%
      ),
      linear-gradient(
        96deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.14 + var(--widget-beam-intensity) * 0.08)) 22%,
        transparent 48%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 76%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.62 + var(--widget-beam-intensity) * 0.88),
      1
    );
  }

  .widget-frame[data-beam='windows-9x'] .widget-header::before {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.32 + var(--widget-beam-intensity) * 0.14)) 0 2px,
        rgba(255, 255, 255, calc(0.12 + var(--widget-beam-intensity) * 0.06)) 2px 5px,
        transparent 5px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.08)) 0 1px,
        transparent 1px 100%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 84%), transparent 74%);
    opacity: clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.48 + var(--widget-beam-intensity) * 0.78),
      1
    );
  }

  .widget-frame[data-beam='kde'] .widget-header::before {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.24 + var(--widget-beam-intensity) * 0.1)),
        rgba(255, 255, 255, calc(0.08 + var(--widget-beam-intensity) * 0.05)) 30%,
        transparent 78%
      ),
      radial-gradient(
        142% 118% at 18% -8%,
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.08)),
        transparent 42%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 80%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.52 + var(--widget-beam-intensity) * 0.82),
      1
    );
  }

  .widget-frame[data-beam='mica'] .widget-header::before {
    background:
      radial-gradient(
        144% 124% at 18% -18%,
        rgba(255, 255, 255, calc(0.16 + var(--widget-beam-intensity) * 0.06)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.1 + var(--widget-beam-intensity) * 0.04)),
        transparent 76%
      ),
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 90%), transparent 76%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--widget-tint), transparent 84%), transparent 42%);
    opacity: clamp(
      0,
      calc(var(--widget-chrome-colorize-opacity) * 0.48 + var(--widget-beam-intensity) * 0.74),
      1
    );
  }

  .widget-frame[data-gloss='windows-7'] .widget-header::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.28 + var(--widget-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.1 + var(--widget-gloss-intensity) * 0.1)) 18%,
        rgba(255, 255, 255, calc(0.03 + var(--widget-gloss-intensity) * 0.04)) 56%,
        transparent 86%
      ),
      radial-gradient(134% 120% at 12% -18%, rgba(255, 255, 255, calc(0.18 + var(--widget-gloss-intensity) * 0.18)), transparent 44%),
      radial-gradient(112% 96% at 100% 0%, rgba(255, 255, 255, calc(0.06 + var(--widget-gloss-intensity) * 0.1)), transparent 42%),
      linear-gradient(
        114deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.04 + var(--widget-gloss-intensity) * 0.1)) calc(32% + var(--widget-gloss-spacing) * 0.18),
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.03)) calc(58% + var(--widget-gloss-spacing) * 0.08),
        transparent 82%
      );
    opacity: calc(var(--widget-chrome-texture-opacity) * 1.02);
  }

  .widget-frame[data-gloss='vista'] .widget-header::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.34 + var(--widget-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.13 + var(--widget-gloss-intensity) * 0.12)) 18%,
        rgba(255, 255, 255, calc(0.04 + var(--widget-gloss-intensity) * 0.05)) 58%,
        transparent 88%
      ),
      radial-gradient(138% 122% at 8% -20%, rgba(255, 255, 255, calc(0.22 + var(--widget-gloss-intensity) * 0.22)), transparent 44%),
      radial-gradient(118% 104% at 100% 0%, rgba(255, 255, 255, calc(0.08 + var(--widget-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, calc(0.05 + var(--widget-gloss-intensity) * 0.12)) calc(30% + var(--widget-gloss-spacing) * 0.2),
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.04)) calc(58% + var(--widget-gloss-spacing) * 0.1),
        transparent 82%
      );
    opacity: calc(var(--widget-chrome-texture-opacity) * 1.08);
  }

  .widget-frame[data-gloss='kde'] .widget-header::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.18 + var(--widget-gloss-intensity) * 0.16)),
        rgba(255, 255, 255, calc(0.06 + var(--widget-gloss-intensity) * 0.06)) 24%,
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.02)) 58%,
        transparent 84%
      ),
      radial-gradient(128% 112% at 14% -16%, rgba(255, 255, 255, calc(0.12 + var(--widget-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        124deg,
        transparent 10%,
        rgba(255, 255, 255, calc(0.03 + var(--widget-gloss-intensity) * 0.08)) calc(28% + var(--widget-gloss-spacing) * 0.16),
        rgba(255, 255, 255, calc(0.01 + var(--widget-gloss-intensity) * 0.02)) calc(60% + var(--widget-gloss-spacing) * 0.08),
        transparent 84%
      );
    opacity: calc(var(--widget-chrome-texture-opacity) * 0.96);
  }

  .widget-frame[data-gloss='mica'] .widget-header::after {
    background:
      radial-gradient(142% 118% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--widget-gloss-intensity) * 0.12)), transparent 42%),
      radial-gradient(124% 134% at 100% 0%, rgba(255, 255, 255, calc(0.05 + var(--widget-gloss-intensity) * 0.06)), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.08 + var(--widget-gloss-intensity) * 0.08)), rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.02)) 52%, transparent 80%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, calc(0.02 + var(--widget-gloss-intensity) * 0.04)),
        transparent 28%,
        rgba(255, 255, 255, calc(0.01 + var(--widget-gloss-intensity) * 0.02)) calc(60% + var(--widget-gloss-spacing) * 0.08),
        transparent 86%
      );
    opacity: calc(var(--widget-chrome-texture-opacity) * 0.92);
  }

  .widget-heading {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    min-width: 0;
  }

  .widget-eyebrow {
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .widget-title-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
  }

  .widget-title {
    margin: 0;
    font: var(--efs-font-title-md);
    line-height: 1.15;
    color: var(--shell-text);
    font-size: var(--widget-title-size);
    text-wrap: balance;
  }

  .widget-frame[data-title-tone='light'] .widget-title {
    color: rgba(255, 255, 255, 0.97);
  }

  .widget-frame[data-title-tone='dark'] .widget-title {
    color: rgba(24, 28, 36, 0.92);
  }

  .widget-frame[data-title-effect='plain'] .widget-title {
    text-shadow: none;
  }

  .widget-frame[data-title-effect='shadow'] .widget-title {
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.18), 0 8px 18px rgba(0, 0, 0, 0.12);
  }

  .widget-frame[data-title-effect='glow'] .widget-title {
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.82),
      0 0 10px rgba(255, 255, 255, 0.64),
      0 0 18px color-mix(in srgb, var(--widget-tint), transparent 58%);
  }

  .widget-frame[data-title-effect='emboss'] .widget-title {
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.78),
      0 -1px 0 rgba(0, 0, 0, 0.28);
  }

  .widget-help {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .widget-help-button :global(.app-icon) {
    width: 0.95rem;
    height: 0.95rem;
  }

  .widget-help-button:focus-visible {
    outline: none;
    box-shadow: var(--shell-focus-ring);
  }

  .widget-help-tooltip {
    position: absolute;
    right: 0;
    top: calc(100% + 0.7rem);
    z-index: 6;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    width: min(18rem, 70vw);
    padding: 0.9rem 1rem;
    border: 1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);
    border-radius: 16px;
    background:
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary), transparent 88%),
        transparent 34%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);
    color: var(--shell-text);
    box-shadow:
      var(--shell-card-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 26%);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-0.25rem);
    transition:
      opacity 140ms ease,
      transform 140ms ease;
  }

  .widget-help-tooltip::before {
    content: '';
    position: absolute;
    top: -0.42rem;
    right: 0.95rem;
    width: 0.75rem;
    height: 0.75rem;
    border-top: 1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);
    border-left: 1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);
    background: color-mix(in srgb, var(--shell-panel), transparent 2%);
    transform: rotate(45deg);
  }

  .widget-help-tooltip strong {
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .widget-help-tooltip span {
    color: color-mix(in srgb, var(--shell-text), transparent 18%);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .widget-help:hover .widget-help-tooltip,
  .widget-help:focus-within .widget-help-tooltip {
    opacity: 1;
    transform: translateY(0);
  }

  .widget-state {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 1.55rem;
    padding: 0 0.65rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 12%);
    background: color-mix(in srgb, var(--shell-row-hover), transparent 12%);
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .widget-state[data-state='pinned'] {
    border-color: color-mix(in srgb, var(--widget-tint), transparent 64%);
    background: color-mix(in srgb, var(--widget-tint), transparent 88%);
    color: var(--shell-text);
  }

  .widget-toolbar {
    position: relative;
    z-index: 1;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 0.45rem;
  }

  .widget-extra-actions {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .widget-icon-button {
    display: inline-flex;
    position: relative;
    isolation: isolate;
    align-items: center;
    justify-content: center;
    width: var(--widget-control-size);
    height: var(--widget-control-size);
    border: 1px solid color-mix(in srgb, var(--widget-border), transparent 6%);
    border-radius: var(--widget-control-radius);
    background: color-mix(in srgb, var(--widget-surface), transparent 6%);
    color: var(--shell-muted);
    cursor: pointer;
    overflow: hidden;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      box-shadow 160ms ease;
  }

  .widget-icon-button::before,
  .widget-icon-button::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
  }

  .widget-icon-button::before {
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--widget-tint), transparent 86%), transparent 74%),
      radial-gradient(circle at top left, color-mix(in srgb, var(--widget-tint), transparent 82%), transparent 56%);
    opacity: calc(var(--widget-chrome-colorize-opacity) * 0.7);
  }

  .widget-icon-button::after {
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
    opacity: calc(var(--widget-chrome-texture-opacity) * 0.44);
  }

  .widget-frame[data-gloss='windows-7'] .widget-icon-button::after,
  .widget-frame[data-gloss='vista'] .widget-icon-button::after,
  .widget-frame[data-gloss='kde'] .widget-icon-button::after,
  .widget-frame[data-gloss='mica'] .widget-icon-button::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.1 + var(--widget-gloss-intensity) * 0.14)),
        rgba(255, 255, 255, calc(0.03 + var(--widget-gloss-intensity) * 0.04)) 44%,
        transparent 100%
      ),
      radial-gradient(126% 114% at 18% -22%, rgba(255, 255, 255, calc(0.04 + var(--widget-gloss-intensity) * 0.06)), transparent 46%),
      linear-gradient(
        128deg,
        transparent 14%,
        rgba(255, 255, 255, calc(0.015 + var(--widget-gloss-intensity) * 0.03)) calc(42% + var(--widget-gloss-spacing) * 0.08),
        transparent 86%
      );
  }

  .widget-icon-button :global(.app-icon) {
    position: relative;
    z-index: 1;
    width: calc(1rem * var(--widget-shell-scale));
    height: calc(1rem * var(--widget-shell-scale));
  }

  .widget-icon-button:hover {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--widget-tint), transparent 44%);
    background: color-mix(in srgb, var(--widget-hover), var(--widget-tint) 18%);
    color: var(--shell-text);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  .widget-icon-button.is-active {
    border-color: color-mix(in srgb, var(--widget-tint), transparent 54%);
    background: color-mix(in srgb, var(--widget-tint), transparent 84%);
    color: var(--shell-text);
  }

  .widget-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1rem;
    min-height: 0;
    overflow: auto;
    overflow-x: hidden;
    padding-top: 1rem;
    padding-bottom: 1.15rem;
    background: color-mix(in srgb, var(--widget-surface), transparent 4%);
    scrollbar-width: thin;
    scrollbar-color: color-mix(in srgb, var(--shell-primary), transparent 42%) transparent;
  }

  .widget-frame.window-mode .widget-body {
    padding-inline: 0;
    padding-top: 0;
    padding-bottom: 0;
    background: transparent;
  }

  .widget-body :global(*) {
    min-width: 0;
  }

  .widget-body :global(input),
  .widget-body :global(select),
  .widget-body :global(textarea),
  .widget-body :global(button),
  .widget-body :global(table) {
    max-width: 100%;
  }

  .widget-body :global(table) {
    width: 100%;
    table-layout: fixed;
  }

  .widget-body :global(td),
  .widget-body :global(th),
  .widget-body :global(p),
  .widget-body :global(code),
  .widget-body :global(span) {
    overflow-wrap: anywhere;
  }

  .widget-body::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }

  .widget-body::-webkit-scrollbar-track {
    background: transparent;
  }

  .widget-body::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-primary), transparent 46%);
    background-clip: padding-box;
  }

  .widget-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding-top: 1rem;
    padding-bottom: 1.1rem;
    border-top: 1px solid color-mix(in srgb, var(--widget-border), transparent 18%);
    background: color-mix(in srgb, var(--widget-panel), transparent 4%);
  }

  .widget-frame.window-mode .widget-footer {
    padding-inline: 0;
    padding-bottom: 0;
    background: transparent;
    border-top-color: color-mix(in srgb, var(--widget-border), transparent 26%);
  }

  .widget-frame.win7-theme:not(.window-mode) .widget-header::before,
  .widget-frame.win7-theme:not(.window-mode) .widget-header::after {
    display: none;
  }

  .widget-frame.win7-theme:not(.window-mode) .widget-heading,
  .widget-frame.win7-theme:not(.window-mode) .widget-title-row {
    gap: 0;
  }

  .widget-frame.win7-theme:not(.window-mode) .widget-eyebrow,
  .widget-frame.win7-theme:not(.window-mode) .widget-state {
    display: none;
  }

  .widget-frame.basic7-theme {
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
    font-family: var(--w7-font);
    color: var(--w7-el-c);
  }

  .widget-frame.basic7-theme:not(.window-mode) {
    border: 1px solid var(--w7-w-bd);
    border-radius: var(--w7-w-bdr);
    background: transparent;
    box-shadow: 2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;
    overflow: visible;
  }

  .widget-frame.basic7-theme:not(.window-mode)::before {
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

  .widget-frame.basic7-theme:not(.window-mode)::after {
    content: none;
    display: none;
  }

  .widget-frame.basic7-theme:not(.window-mode) .widget-header.title-bar {
    min-height: 0;
    align-items: flex-start;
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

  .widget-frame.basic7-theme:not(.window-mode) .widget-header::before,
  .widget-frame.basic7-theme:not(.window-mode) .widget-header::after {
    display: none;
  }

  .widget-frame.basic7-theme:not(.window-mode) .widget-heading {
    gap: 0;
  }

  .widget-frame.basic7-theme:not(.window-mode) .widget-eyebrow,
  .widget-frame.basic7-theme:not(.window-mode) .widget-state {
    display: none;
  }

  .widget-frame.basic7-theme:not(.window-mode) .widget-title-row {
    gap: 0;
  }

  .widget-frame.basic7-theme:not(.window-mode) .widget-title.title-bar-text {
    padding-top: var(--w7-w-space);
    color: #000;
    font: var(--w7-font);
    font-size: 9pt;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 15px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.72);
    text-wrap: nowrap;
  }

  .widget-frame.basic7-theme:not(.window-mode) .widget-toolbar {
    gap: 0.35rem;
    padding-top: calc(var(--w7-w-space) - 1px);
  }

  .widget-frame.basic7-theme .widget-icon-button {
    width: 23px;
    min-width: 23px;
    height: 23px;
    min-height: 23px;
    padding: 0;
    color: var(--w7-el-c);
    transform: none;
  }

  .widget-frame.basic7-theme .widget-icon-button::before,
  .widget-frame.basic7-theme .widget-icon-button::after {
    inset: 0;
  }

  .widget-frame.basic7-theme .widget-icon-button:hover,
  .widget-frame.basic7-theme .widget-icon-button:active,
  .widget-frame.basic7-theme .widget-icon-button.is-active {
    color: var(--w7-el-c);
    transform: none;
  }

  .widget-frame.basic7-theme .widget-icon-button:focus-visible {
    outline-offset: -4px;
  }

  .widget-frame.basic7-theme .widget-icon-button :global(.app-icon) {
    width: 0.78rem;
    height: 0.78rem;
  }

  .widget-frame.basic7-theme:not(.window-mode) .widget-body.window-body {
    margin: var(--w7-w-space);
    margin-top: 0;
    padding: var(--w7-w-space);
    border: 1px solid var(--w7-w-bd);
    background: var(--w7-surface);
    box-shadow: var(--efs-win7-body-shadow, 0 0 0 1px #fff9);
    color: var(--w7-el-c);
    scrollbar-color: var(--efs-win7-scrollbar, #7f9db9) transparent;
  }

  .widget-frame.basic7-theme:not(.window-mode) .widget-footer.window-footer {
    margin: var(--w7-w-space);
    margin-top: calc(-1 * var(--w7-w-space) - 1px);
    padding: 10px;
    border: 1px solid var(--w7-w-bd);
    border-top: 0;
    background: var(--w7-surface);
    box-shadow: var(--efs-win7-footer-shadow, 0 0.5px 1px 0.5px #fff);
    position: relative;
  }

  .widget-frame.basic7-theme:not(.window-mode) .widget-footer.window-footer::before {
    content: '';
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 2px;
    box-shadow: inset 0 1px #0000004d, inset 0 -1px #fff;
  }

  :global(:host(:not([theme='light']))) .widget-frame.basic7-theme {
    --efs-win7-surface: #1c2229;
    --efs-win7-text: #e7edf8;
    --efs-win7-text-muted: #8591a2;
    --efs-win7-window-border: rgba(8, 12, 18, 0.82);
    --efs-win7-body-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
    --efs-win7-footer-shadow: 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.12);
    --efs-win7-scrollbar: #5f7ea2;
  }

  @media (max-width: 47.99rem) {
    .widget-header {
      flex-direction: column;
    }

    .widget-toolbar {
      justify-content: flex-start;
    }
  }
</style>
