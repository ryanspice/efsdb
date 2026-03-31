<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    header?: Snippet;
    rail?: Snippet;
    children?: Snippet;
  };

  let { header, rail, children }: Props = $props();

  const hasRail = $derived.by(() => !!rail);
</script>

<div class:with-rail={hasRail} class="app-shell">
  {#if header}
    <header class="header">{@render header()}</header>
  {/if}

  {#if rail}
    <aside class="rail">{@render rail()}</aside>
  {/if}

  <main class="content">{@render children?.()}</main>
</div>

<style>
  .app-shell {
    display: grid;
    grid-template:
      'header' auto
      'content' minmax(0, 1fr) / minmax(0, 1fr);
    min-height: 100%;
    border: 1px solid var(--efs-border-subtle);
    border-radius: var(--efs-radius-card);
    overflow: hidden;
    background: var(--efs-bg-app);
    box-shadow: var(--efs-shadow-shell);
  }

  .app-shell.with-rail {
    grid-template:
      'header header' auto
      'rail content' minmax(0, 1fr) / var(--efs-size-rail) minmax(0, 1fr);
  }

  .header {
    grid-area: header;
    min-width: 0;
    backdrop-filter: blur(16px) saturate(120%);
    background: var(--efs-bg-surface-1, var(--efs-bg-shell));
    border-bottom: 1px solid var(--efs-border-default);
  }

  .rail {
    grid-area: rail;
    min-width: 0;
    background: var(--efs-bg-surface-1, var(--efs-bg-app));
    border-right: 1px solid var(--efs-border-subtle);
  }

  .content {
    grid-area: content;
    min-width: 0;
    min-height: 0;
  }

  @media (max-width: 63.99rem) {
    .app-shell.with-rail {
      grid-template:
        'header' auto
        'rail' auto
        'content' minmax(0, 1fr) / minmax(0, 1fr);
    }

    .rail {
      border-right: 0;
      border-bottom: 1px solid var(--efs-border-subtle);
    }
  }
</style>
