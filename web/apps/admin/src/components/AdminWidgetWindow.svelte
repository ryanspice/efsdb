<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount, tick } from 'svelte';
  import WindowShell, {
    type WindowFrame,
    type WindowSnapTarget,
    type WindowState
  } from '@ui/components/shell/WindowShell.svelte';
  import {
    DEFAULT_WINDOW_SETTINGS,
    subscribeWindowSettings
  } from '@ui/components/shell/windowSettings';

  type Props = {
    title: string;
    helpText?: string;
    helpPlacement?: 'auto' | 'before' | 'after';
    pinned: boolean;
    windowState?: WindowState;
    dragSeed?: { pointerId: number; clientX: number; clientY: number } | null;
    frame?: WindowFrame | null;
    restoreFrame?: WindowFrame | null;
    snapTarget?: WindowSnapTarget | null;
    defaultWidth: number;
    defaultHeight: number;
    defaultX: number;
    defaultY: number;
    zIndex: number;
    onClose: () => void;
    onFocus: () => void;
    onPinToggle?: () => void;
    onConsumeDragSeed?: () => void;
    children?: Snippet;
  };

  function createInitialFrame(x: number, y: number, width: number, height: number) {
    return { x, y, width, height };
  }

  let {
    title,
    helpText = '',
    helpPlacement = 'auto',
    pinned,
    windowState = $bindable<WindowState>('normal'),
    dragSeed = null,
    frame = $bindable<WindowFrame | null>(null),
    restoreFrame = $bindable<WindowFrame | null>(null),
    snapTarget = $bindable<WindowSnapTarget | null>(null),
    defaultWidth,
    defaultHeight,
    defaultX,
    defaultY,
    zIndex,
    onClose,
    onFocus,
    onPinToggle,
    onConsumeDragSeed,
    children
  }: Props = $props();

  const getInitialFrame = () => createInitialFrame(defaultX, defaultY, defaultWidth, defaultHeight);

  let contentNode = $state<HTMLDivElement | null>(null);
  let hasFittedToContent = $state(false);
  let ready = $state(false);
  let titleBarHeight = $state(DEFAULT_WINDOW_SETTINGS.titleBarHeight);

  $effect(() => {
    if (frame == null) {
      frame = getInitialFrame();
    }
  });

  async function fitWindowToContent() {
    if (hasFittedToContent || typeof window === 'undefined') {
      return;
    }

    await tick();

    if (!contentNode) {
      return;
    }

    const viewportInset = 40;
    const maxWidth = Math.max(420, window.innerWidth - viewportInset * 2);
    const maxHeight = Math.max(300, window.innerHeight - viewportInset * 2);
    const measuredWidth = Math.ceil(
      Math.max(contentNode.scrollWidth, contentNode.firstElementChild?.scrollWidth ?? 0) + 6
    );
    const measuredHeight = Math.ceil(
      Math.max(contentNode.scrollHeight, contentNode.firstElementChild?.scrollHeight ?? 0) +
        titleBarHeight
    );
    const nextWidth = Math.min(maxWidth, Math.max(420, measuredWidth));
    const nextHeight = Math.min(maxHeight, Math.max(300, measuredHeight));

    frame = {
      width: nextWidth,
      height: nextHeight,
      x: Math.max(viewportInset / 2, Math.round((window.innerWidth - nextWidth) / 2)),
      y: Math.max(viewportInset / 2, Math.round((window.innerHeight - nextHeight) / 2))
    };
    hasFittedToContent = true;
  }

  onMount(() => {
    const frameId = requestAnimationFrame(() => {
      if (!dragSeed) {
        void fitWindowToContent();
      } else {
        hasFittedToContent = true;
      }
      ready = true;
    });
    const unsubscribeWindowSettings = subscribeWindowSettings((settings) => {
      titleBarHeight = settings.titleBarHeight ?? DEFAULT_WINDOW_SETTINGS.titleBarHeight;
    });

    return () => {
      cancelAnimationFrame(frameId);
      unsubscribeWindowSettings();
    };
  });
</script>

{#if !pinned && windowState !== 'minimized'}
  <button
    class="widget-window-backdrop"
    class:ready
    type="button"
    style:z-index={zIndex - 1}
    aria-label={`Close ${title}`}
    onclick={onClose}
  ></button>
{/if}

<div class="widget-window-layer" class:ready role="presentation" onpointerdown={onFocus}>
  {#if frame}
    <WindowShell
      {title}
      {helpText}
      {helpPlacement}
      {pinned}
      bind:state={windowState}
      bind:x={frame.x}
      bind:y={frame.y}
      bind:width={frame.width}
      bind:height={frame.height}
      bind:restoreFrame
      bind:snapTarget
      {zIndex}
      {dragSeed}
      onClose={onClose}
      {onConsumeDragSeed}
      {onPinToggle}
    >
      <div bind:this={contentNode} class="widget-window-content">
        {@render children?.()}
      </div>
    </WindowShell>
  {/if}
</div>

<style>
  .widget-window-backdrop {
    position: fixed;
    inset: 0;
    border: 0;
    padding: 0;
    background:
      radial-gradient(
        circle at top,
        color-mix(in srgb, var(--shell-primary, #ffffff), transparent 88%),
        transparent 28%
      ),
      color-mix(in srgb, var(--shell-panel, rgba(2, 6, 23, 0.6)), rgba(2, 6, 23, 0.56) 52%);
    backdrop-filter: blur(10px);
    cursor: default;
    opacity: 0;
    transition: opacity var(--efs-motion-normal, 180ms) var(--efs-ease-standard, ease);
  }

  .widget-window-backdrop.ready {
    opacity: 1;
  }

  .widget-window-layer {
    position: relative;
    opacity: 0;
    transition: opacity var(--efs-motion-normal, 180ms) var(--efs-ease-standard, ease);
  }

  .widget-window-layer.ready {
    opacity: 1;
  }

  .widget-window-content {
    width: 100%;
    min-width: 0;
    min-height: 0;
    box-sizing: border-box;
    padding: 1rem;
    background: transparent;
  }

  @media (max-width: 47.99rem) {
    .widget-window-content {
      padding: 0.75rem;
    }
  }
</style>
