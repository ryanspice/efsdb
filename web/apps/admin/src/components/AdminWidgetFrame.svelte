<script lang="ts">
  import type { Snippet } from 'svelte';
  import AppIcon from '@ui/components/icons/AppIcon.svelte';
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
</script>

<article class="widget-frame" class:window-mode={mode === 'window'} data-testid={dataTestid}>
  <header class="widget-header">
    <div class="widget-heading">
      <span class="widget-eyebrow">{eyebrow}</span>
      <div class="widget-title-row">
        <h2 class="widget-title">{title}</h2>
        {#if open}
          <span class="widget-state" data-state={pinned ? 'pinned' : 'open'}>{pinned ? 'Pinned' : 'Open'}</span>
        {/if}
      </div>
    </div>

    <div class="widget-toolbar">
      {#if allowPopout && mode === 'card' && onOpen}
        <button
          class="widget-icon-button"
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
          class:is-active={pinned}
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

  <div class="widget-body">
    {@render children?.()}
  </div>

  {#if footer}
    <footer class="widget-footer">
      {@render footer()}
    </footer>
  {/if}
</article>

<style>
  .widget-frame {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 0;
    min-height: 100%;
    border: var(--efs-widget-border-width, 1px) solid
      color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: var(--efs-widget-radius, 26px);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 32%),
      linear-gradient(135deg, color-mix(in srgb, var(--shell-panel), white 6%), transparent 38%),
      var(--shell-panel);
    box-shadow: var(--efs-widget-shadow, var(--shell-card-shadow));
    overflow: clip;
  }

  .widget-frame.window-mode {
    min-height: auto;
    border-radius: max(0px, calc(var(--efs-widget-radius, 22px) - 4px));
    box-shadow: none;
  }

  .widget-header,
  .widget-body,
  .widget-footer {
    padding-inline: max(0.9rem, calc(var(--efs-widget-chrome-padding, 12px) + 0.28rem));
  }

  .widget-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding-top: max(0.8rem, calc(var(--efs-widget-chrome-padding, 12px) * 0.65 + 0.32rem));
    padding-bottom: max(0.72rem, calc(var(--efs-widget-chrome-padding, 12px) * 0.5 + 0.22rem));
    border-bottom: 1px solid color-mix(in srgb, var(--shell-border), transparent 18%);
  }

  .widget-heading {
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
    border-color: color-mix(in srgb, var(--shell-primary), transparent 64%);
    background: color-mix(in srgb, var(--shell-primary), transparent 88%);
    color: var(--shell-text);
  }

  .widget-toolbar {
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
    align-items: center;
    justify-content: center;
    width: clamp(2rem, calc(1.7rem + (var(--efs-widget-chrome-padding, 12px) * 0.06)), 2.35rem);
    height: clamp(2rem, calc(1.7rem + (var(--efs-widget-chrome-padding, 12px) * 0.06)), 2.35rem);
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: max(10px, calc(var(--efs-widget-radius, 26px) * 0.5));
    background: color-mix(in srgb, var(--shell-surface), transparent 6%);
    color: var(--shell-muted);
    cursor: pointer;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      box-shadow 160ms ease;
  }

  .widget-icon-button :global(.app-icon) {
    width: 1rem;
    height: 1rem;
  }

  .widget-icon-button:hover {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 44%);
    background: color-mix(in srgb, var(--shell-row-hover), transparent 4%);
    color: var(--shell-text);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  .widget-icon-button.is-active {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 54%);
    background: color-mix(in srgb, var(--shell-primary), transparent 84%);
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
    scrollbar-width: thin;
    scrollbar-color: color-mix(in srgb, var(--shell-primary), transparent 42%) transparent;
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
    border-top: 1px solid color-mix(in srgb, var(--shell-border), transparent 18%);
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
