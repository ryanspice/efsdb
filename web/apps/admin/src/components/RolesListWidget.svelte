<script lang="ts">
  import type { AdminRoleRecord } from '@contracts/admin';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    roles: AdminRoleRecord[];
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
  };

  let {
    roles,
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    onOpen,
    onTogglePin
  }: Props = $props();

  let displayedRoles = $derived(mode === 'card' ? roles.slice(0, 6) : roles);
</script>

<AdminWidgetFrame
  eyebrow="Roles"
  title="Tenant role catalog"
  description="Inspect role ids, entitlement bundles, and which presets are reserved for operator workflows."
  {mode}
  {dataTestid}
  {open}
  {pinned}
  {onOpen}
  onTogglePin={onTogglePin}
>
  {#snippet footer()}
    <div class="footer-row">
      <span class="footer-copy">
        {#if roles.length > displayedRoles.length}
          Showing {displayedRoles.length} of {roles.length} roles.
        {:else}
          {roles.length} total role{roles.length === 1 ? '' : 's'}.
        {/if}
      </span>
    </div>
  {/snippet}

  {#if roles.length === 0}
    <div class="empty-state">No roles found.</div>
  {:else}
    <div class="list-shell">
      {#each displayedRoles as role (role.id)}
        <article class="role-row">
          <div class="role-row-header">
            <div class="role-identity">
              <strong class="role-name">{role.name}</strong>
              <span class="role-id">{role.id}</span>
            </div>
            <div class="role-badges">
              {#if role.system}
                <StatusPill label="system" tone="warning" />
              {/if}
              {#if role.operatorOnly}
                <StatusPill label="operator only" tone="danger" />
              {/if}
            </div>
          </div>

          {#if role.description}
            <p class="role-description">{role.description}</p>
          {/if}

          <div class="entitlement-wrap">
            {#each role.entitlements as entitlement (`${role.id}:${entitlement}`)}
              <span class="entitlement-chip">{entitlement}</span>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  {/if}
</AdminWidgetFrame>

<style>
  .list-shell {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-height: 0;
    max-height: min(28rem, 56vh);
    overflow: auto;
    padding-right: 0.1rem;
  }

  .role-row {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 20px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    padding: 0.95rem 1rem;
  }

  .role-row-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .role-identity,
  .role-badges {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    min-width: 0;
  }

  .role-badges {
    align-items: flex-end;
  }

  .role-name {
    color: var(--shell-text);
    font: var(--efs-font-body-md);
    line-height: 1.3;
  }

  .role-id,
  .role-description,
  .footer-copy,
  .empty-state {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  .role-id {
    font-family: var(--efs-font-mono);
  }

  .role-description {
    margin: 0;
  }

  .entitlement-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .entitlement-chip {
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

  .empty-state {
    min-height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed color-mix(in srgb, var(--shell-border), transparent 15%);
    border-radius: 20px;
  }

  .footer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    width: 100%;
  }

  @media (max-width: 47.99rem) {
    .role-badges {
      align-items: flex-start;
    }
  }
</style>
