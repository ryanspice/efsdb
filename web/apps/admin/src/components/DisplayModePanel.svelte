<script lang="ts">
  import type { AuthUser } from '@contracts/auth';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    user: AuthUser | null;
    busy: boolean;
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
    onChange: (roleId: string) => void;
  };

  let {
    user,
    busy,
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    onOpen,
    onTogglePin,
    onChange
  }: Props = $props();
</script>

<AdminWidgetFrame
  eyebrow="Display mode"
  title="Effective role switching"
  description="Jump between safe operating contexts without losing the tenant-admin identity behind the session."
  {mode}
  {dataTestid}
  {open}
  {pinned}
  {onOpen}
  onTogglePin={onTogglePin}
>
  {#snippet footer()}
    {#if user}
      <div class="footer-row">
        <div class="context-strip">
          <StatusPill label={`actual ${user.actualRole}`} tone="accent" monospaced={true} />
          <StatusPill label={`effective ${user.role}`} tone="info" monospaced={true} />
        </div>
      </div>
    {/if}
  {/snippet}

  {#if (user?.availableDisplayModes ?? []).length === 0}
    <div class="empty-state">No alternate display modes are available for this session.</div>
  {:else}
    <div class="mode-grid">
      {#each user?.availableDisplayModes ?? [] as roleId (roleId)}
        <button
          class="mode-button"
          data-active={roleId === user?.role}
          type="button"
          disabled={busy}
          onclick={() => onChange(roleId)}
        >
          <span class="mode-label">{roleId}</span>
          <span class="mode-copy">
            {roleId === user?.actualRole ? 'admin baseline' : roleId === user?.role ? 'active context' : 'switch context'}
          </span>
        </button>
      {/each}
    </div>
  {/if}

  {#if mode === 'window' && user}
    <div class="detail-grid">
      <section class="detail-card">
        <h3 class="detail-title">Effective entitlements</h3>
        <div class="chip-wrap">
          {#each user.entitlements ?? [] as entitlement (entitlement)}
            <span class="detail-chip">{entitlement}</span>
          {/each}
        </div>
      </section>

      <section class="detail-card">
        <h3 class="detail-title">Actual entitlements</h3>
        <div class="chip-wrap">
          {#each user.actualEntitlements ?? [] as entitlement (entitlement)}
            <span class="detail-chip">{entitlement}</span>
          {/each}
        </div>
      </section>
    </div>
  {/if}
</AdminWidgetFrame>

<style>
  .mode-grid {
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  }

  .mode-button {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    align-items: flex-start;
    min-height: 6.6rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 22px;
    background: color-mix(in srgb, var(--shell-surface), transparent 8%);
    color: var(--shell-text);
    padding: 1rem;
    text-align: left;
    cursor: pointer;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      opacity 160ms ease;
  }

  .mode-button:hover:not(:disabled) {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 52%);
  }

  .mode-button[data-active='true'] {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 42%);
    background: color-mix(in srgb, var(--shell-primary), transparent 88%);
  }

  .mode-button:disabled {
    opacity: 0.68;
    cursor: wait;
  }

  .mode-label {
    font-family: var(--efs-font-mono);
    font: var(--efs-font-body-md);
    font-family: var(--efs-font-mono);
    font-weight: 700;
  }

  .mode-copy {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .footer-row,
  .context-strip {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
  }

  .detail-grid {
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .detail-card,
  .empty-state {
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 20px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    padding: 1rem;
  }

  .empty-state {
    min-height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--shell-muted);
    line-height: 1.6;
    text-align: center;
  }

  .detail-title {
    margin: 0 0 0.75rem;
    color: var(--shell-text);
    font: var(--efs-font-label);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .chip-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .detail-chip {
    display: inline-flex;
    align-items: center;
    min-height: 1.9rem;
    padding: 0 0.75rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    background: color-mix(in srgb, var(--shell-row-hover), transparent 10%);
    color: var(--shell-text);
    font-family: var(--efs-font-mono);
    font: var(--efs-font-label);
    font-family: var(--efs-font-mono);
  }

  @media (max-width: 63.99rem) {
    .detail-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
