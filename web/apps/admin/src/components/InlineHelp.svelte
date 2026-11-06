<script lang="ts">
  import AppIcon from '@ui/components/icons/AppIcon.svelte';

  type Props = {
    title: string;
    text: string;
    align?: 'left' | 'right';
  };

  let { title, text, align = 'right' }: Props = $props();
</script>

<div class="inline-help" data-align={align}>
  <button
    class="inline-help-button"
    type="button"
    aria-label={`About ${title}`}
    title={`About ${title}`}
  >
    <AppIcon name="help" />
  </button>
  <div class="inline-help-tooltip" role="tooltip">
    <strong>{title}</strong>
    <span>{text}</span>
  </div>
</div>

<style>
  .inline-help {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }

  .inline-help-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.65rem;
    height: 1.65rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 999px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent 62%),
      color-mix(in srgb, var(--shell-surface), transparent 2%);
    color: color-mix(in srgb, var(--shell-text), transparent 18%);
    cursor: help;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 6px 16px rgba(0, 0, 0, 0.14);
    transition:
      border-color 140ms ease,
      color 140ms ease,
      transform 140ms ease,
      box-shadow 140ms ease;
  }

  .inline-help-button:hover,
  .inline-help-button:focus-visible {
    outline: none;
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 46%);
    color: var(--shell-text-strong);
    box-shadow: var(--shell-focus-ring);
  }

  .inline-help-button :global(.app-icon) {
    width: 0.8rem;
    height: 0.8rem;
  }

  .inline-help-tooltip {
    position: absolute;
    top: calc(100% + 0.65rem);
    z-index: 12;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    width: min(19rem, calc(100vw - 2rem));
    padding: 0.8rem 0.9rem;
    border: 1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);
    border-radius: 16px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 28%),
      color-mix(in srgb, var(--shell-surface), var(--shell-panel) 24%);
    box-shadow: 0 22px 44px rgba(0, 0, 0, 0.22);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-0.35rem);
    transition:
      opacity 140ms ease,
      transform 140ms ease;
  }

  .inline-help[data-align='right'] .inline-help-tooltip {
    right: 0;
  }

  .inline-help[data-align='left'] .inline-help-tooltip {
    left: 0;
  }

  .inline-help-tooltip::before {
    content: '';
    position: absolute;
    top: -0.42rem;
    width: 0.75rem;
    height: 0.75rem;
    border-top: 1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);
    border-left: 1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);
    background: color-mix(in srgb, var(--shell-surface), var(--shell-panel) 24%);
    transform: rotate(45deg);
  }

  .inline-help[data-align='right'] .inline-help-tooltip::before {
    right: 0.9rem;
  }

  .inline-help[data-align='left'] .inline-help-tooltip::before {
    left: 0.9rem;
  }

  .inline-help-tooltip strong {
    color: var(--shell-text-strong);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .inline-help-tooltip span {
    color: color-mix(in srgb, var(--shell-text), transparent 18%);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .inline-help:hover .inline-help-tooltip,
  .inline-help:focus-within .inline-help-tooltip {
    opacity: 1;
    transform: translateY(0);
  }
</style>
