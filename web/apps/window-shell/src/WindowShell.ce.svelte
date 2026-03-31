<svelte:options
  customElement={{
    tag: 'efsdb-window-shell',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import WindowShell, { type WindowState } from '@ui/components/shell/WindowShell.svelte';
  import type {
    WindowButtonLayout,
    WindowThemePreset
  } from '@ui/components/shell/windowSettings';

  type Props = {
    open?: boolean;
    title?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    zIndex?: number;
    pinned?: boolean;
    buttonLayout?: WindowButtonLayout;
    chromeStyle?: 'solid' | 'transparent' | 'glass';
    alignment?: 'left' | 'center' | 'right';
    themePreset?: WindowThemePreset;
    onClose?: (() => void) | null;
  };

  let {
    open = false,
    title = 'Window',
    x = $bindable(120),
    y = $bindable(96),
    width = $bindable(640),
    height = $bindable(520),
    zIndex = 12040,
    pinned = false,
    buttonLayout = 'windows-11',
    chromeStyle = 'solid',
    alignment = 'left',
    themePreset = 'inherit',
    onClose = null
  }: Props = $props();

  let state = $state<WindowState>('normal');
</script>

{#if open}
  <div class="window-layer">
    <WindowShell
      {title}
      {pinned}
      bind:state
      bind:x
      bind:y
      bind:width
      bind:height
      {zIndex}
      {buttonLayout}
      {chromeStyle}
      {alignment}
      {themePreset}
      onClose={onClose ?? undefined}
    >
      <div class="window-content">
        <slot />
      </div>
    </WindowShell>
  </div>
{/if}

<style>
  :host {
    display: contents;
  }

  :host([hidden]) {
    display: none;
  }

  .window-layer {
    position: fixed;
    inset: 0;
    z-index: 12040;
    pointer-events: none;
    isolation: isolate;
  }

  .window-layer :global(.window-shell) {
    pointer-events: auto;
    --window-panel: var(--shell-panel-solid, var(--shell-panel-bg, #ffffff));
    --window-surface: var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc));
    --window-border: var(--shell-border, #e2e8f0);
  }

  .window-content {
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    box-sizing: border-box;
    padding: 0;
    background: transparent;
  }
</style>
