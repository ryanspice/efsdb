<script lang="ts">
  import type { Snippet } from 'svelte';

  type Tone = 'default' | 'accent' | 'danger';

  type Props = {
    as?: keyof HTMLElementTagNameMap;
    tone?: Tone;
    padded?: boolean;
    elevated?: boolean;
    header?: Snippet;
    footer?: Snippet;
    children?: Snippet;
  };

  let {
    as = 'section',
    tone = 'default',
    padded = true,
    elevated = false,
    header,
    footer,
    children
  }: Props = $props();
</script>

<svelte:element
  this={as}
  class:elevated={elevated}
  class:padded={padded}
  class="surface"
  data-tone={tone}
>
  {#if header}
    <div class="surface-header">{@render header()}</div>
  {/if}

  <div class="surface-body">{@render children?.()}</div>

  {#if footer}
    <div class="surface-footer">{@render footer()}</div>
  {/if}
</svelte:element>

<style>
  .surface {
    border: 1px solid var(--efs-border-subtle);
    border-radius: var(--efs-radius-card);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 90%),
      color-mix(in oklab, var(--efs-bg-surface-1), transparent 3%);
  }

  .surface.padded .surface-header,
  .surface.padded .surface-body,
  .surface.padded .surface-footer {
    padding-inline: var(--efs-space-4);
  }

  .surface.padded .surface-header,
  .surface.padded .surface-body {
    padding-top: var(--efs-space-4);
  }

  .surface.padded .surface-footer {
    padding-top: var(--efs-space-3);
    padding-bottom: var(--efs-space-4);
  }

  .surface-header,
  .surface-footer {
    border-bottom: 1px solid transparent;
  }

  .surface-header:not(:empty) {
    border-bottom-color: var(--efs-border-subtle);
  }

  .surface-footer:not(:empty) {
    border-top: 1px solid var(--efs-border-subtle);
  }

  .surface.elevated {
    box-shadow: var(--efs-shadow-panel);
  }

  .surface[data-tone='accent'] {
    border-color: color-mix(in oklab, var(--efs-accent-primary), transparent 72%);
  }

  .surface[data-tone='danger'] {
    border-color: color-mix(in oklab, var(--efs-state-danger), transparent 70%);
  }
</style>
