<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    asideWidth: number;
    asideCollapsed?: boolean;
    main?: Snippet;
    resizer?: Snippet;
    aside?: Snippet;
    collapsedAside?: Snippet;
  };

  let {
    asideWidth = $bindable(300),
    asideCollapsed = false,
    main,
    resizer,
    aside,
    collapsedAside
  }: Props = $props();

  let isResizing = $state(false);

  function startResize(e: MouseEvent) {
    isResizing = true;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopResize);
    document.body.style.cursor = 'col-resize';
  }

  function onMouseMove(e: MouseEvent) {
    if (!isResizing) return;
    // Calculate new width from the right edge
    const newWidth = document.body.clientWidth - e.clientX;
    asideWidth = Math.max(100, Math.min(newWidth, document.body.clientWidth - 100));
  }

  function stopResize() {
    isResizing = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', stopResize);
    document.body.style.cursor = '';
  }
</script>

<div
  class="split-pane"
  data-collapsed={asideCollapsed}
  style={`--split-aside-width:${Math.max(asideWidth, 0)}px;`}
>
  <div class="main">{@render main?.()}</div>

  {#if asideCollapsed}
    <div class="collapsed-aside">{@render collapsedAside?.()}</div>
  {:else}
    <div class="resizer" onmousedown={startResize} role="separator" tabindex="0">
      {#if resizer}
        {@render resizer()}
      {:else}
        <div class="default-resizer"></div>
      {/if}
    </div>

    <aside class="aside">{@render aside?.()}</aside>
  {/if}
</div>

<style>
  .split-pane {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto var(--split-aside-width);
    min-height: 0;
    height: 100%;
    border: 1px solid var(--efs-border-subtle);
    border-radius: var(--efs-radius-panel);
    overflow: hidden;
    background: color-mix(in oklab, var(--efs-bg-surface-0), transparent 1%);
  }

  .split-pane[data-collapsed='true'] {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .main,
  .aside,
  .collapsed-aside {
    min-width: 0;
    min-height: 0;
  }

  .resizer {
    display: flex;
    min-height: 0;
    cursor: col-resize;
    user-select: none;
  }

  .default-resizer {
    width: 6px;
    background: transparent;
    transition: background-color 0.2s;
    height: 100%;
  }

  .resizer:hover .default-resizer,
  .resizer:active .default-resizer {
    background: var(--efs-border-strong, #cbd5e1);
  }

  .aside,
  .collapsed-aside {
    border-left: 1px solid var(--efs-border-subtle);
  }

  .collapsed-aside {
    background: var(--efs-bg-surface-1, #ffffff);
  }
</style>
