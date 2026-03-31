<script lang="ts">
  type Tone =
    | 'neutral'
    | 'accent'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'raw'
    | 'natural';

  type Props = {
    label: string;
    tone?: Tone;
    monospaced?: boolean;
  };

  let {
    label,
    tone = 'neutral',
    monospaced = false
  }: Props = $props();
</script>

<span class:mono={monospaced} class="pill" data-tone={tone}>
  {label}
</span>

<style>
  .pill {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding: 0 0.65rem;
    border: 1px solid var(--efs-border-subtle);
    border-radius: 999px;
    background: color-mix(in oklab, var(--efs-bg-surface-2), transparent 5%);
    color: var(--efs-text-secondary);
    font: var(--efs-font-label);
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .pill.mono {
    font-family: var(--efs-font-mono);
  }

  .pill[data-tone='accent'] {
    border-color: color-mix(in oklab, var(--efs-accent-primary), transparent 68%);
    background: color-mix(in oklab, var(--efs-accent-soft), transparent 12%);
    color: var(--efs-accent-strong);
  }

  .pill[data-tone='success'] {
    border-color: color-mix(in oklab, var(--efs-state-success), transparent 68%);
    background: color-mix(in oklab, var(--efs-state-success), transparent 88%);
    color: var(--efs-state-success);
  }

  .pill[data-tone='warning'] {
    border-color: color-mix(in oklab, var(--efs-state-warning), transparent 68%);
    background: color-mix(in oklab, var(--efs-state-warning), transparent 88%);
    color: var(--efs-state-warning);
  }

  .pill[data-tone='danger'] {
    border-color: color-mix(in oklab, var(--efs-state-danger), transparent 68%);
    background: color-mix(in oklab, var(--efs-state-danger), transparent 88%);
    color: var(--efs-state-danger);
  }

  .pill[data-tone='info'] {
    border-color: color-mix(in oklab, var(--efs-state-info), transparent 68%);
    background: color-mix(in oklab, var(--efs-state-info), transparent 88%);
    color: var(--efs-state-info);
  }

  .pill[data-tone='natural'] {
    border-color: var(--efs-mode-natural-border);
    background: var(--efs-mode-natural-bg);
    color: var(--efs-accent-strong);
  }

  .pill[data-tone='raw'] {
    border-color: var(--efs-mode-raw-border);
    background: var(--efs-mode-raw-bg);
    color: color-mix(in oklab, var(--efs-state-info), white 14%);
  }
</style>
