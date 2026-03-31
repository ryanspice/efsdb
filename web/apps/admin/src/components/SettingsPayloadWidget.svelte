<script lang="ts">
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    settings: Record<string, unknown> | null;
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
  };

  let {
    settings,
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    onOpen,
    onTogglePin
  }: Props = $props();

  let entryCount = $derived(settings ? Object.keys(settings).length : 0);
  let serialized = $derived(JSON.stringify(settings ?? {}, null, 2));
</script>

<AdminWidgetFrame
  eyebrow="Settings"
  title="Raw tenant configuration"
  description="Inspect the live settings payload that shapes explorer policy, display defaults, and shell behavior."
  {mode}
  {dataTestid}
  {open}
  {pinned}
  {onOpen}
  onTogglePin={onTogglePin}
>
  {#snippet footer()}
    <div class="footer-row">
      <StatusPill label={`${entryCount} top-level keys`} tone="accent" />
      <span class="footer-copy">Read-only payload mirror from the current tenant.</span>
    </div>
  {/snippet}

  <div class="code-shell">
    <pre>{serialized}</pre>
  </div>
</AdminWidgetFrame>

<style>
  .code-shell {
    min-height: 0;
  }

  pre {
    margin: 0;
    min-height: 14rem;
    max-height: min(32rem, 62vh);
    overflow: auto;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 22px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 24%),
      color-mix(in srgb, var(--shell-surface), black 8%);
    color: var(--shell-text);
    padding: 1rem 1.1rem;
    font-family: var(--efs-font-mono);
    font: var(--efs-font-body-xs);
    font-family: var(--efs-font-mono);
    line-height: 1.8;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .footer-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    width: 100%;
  }

  .footer-copy {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }
</style>
