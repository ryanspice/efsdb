<script lang="ts">
  import type { AdminUserRecord } from '@contracts/admin';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    users: AdminUserRecord[];
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
  };

  let {
    users,
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    onOpen,
    onTogglePin
  }: Props = $props();

  let displayedUsers = $derived(mode === 'card' ? users.slice(0, 6) : users);

  function toneForStatus(status: string): 'success' | 'warning' | 'danger' | 'neutral' {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'disabled':
        return 'danger';
      default:
        return 'neutral';
    }
  }
</script>

<AdminWidgetFrame
  eyebrow="Users"
  title="Provisioned accounts"
  description="Review active logins, role assignments, and account state without switching context."
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
        {#if users.length > displayedUsers.length}
          Showing {displayedUsers.length} of {users.length} users.
        {:else}
          {users.length} total user{users.length === 1 ? '' : 's'}.
        {/if}
      </span>
    </div>
  {/snippet}

  {#if users.length === 0}
    <div class="empty-state">No users provisioned yet.</div>
  {:else}
    <div class="list-shell">
      {#each displayedUsers as user (user.id)}
        <article class="user-row">
          <div class="user-row-main">
            <div class="user-identity">
              <strong class="user-name">{user.username}</strong>
              <span class="user-display">{user.name || 'No display name'}</span>
            </div>
            <div class="user-meta">
              <StatusPill label={user.status} tone={toneForStatus(user.status)} />
              <span class="user-role">{user.roleId}</span>
            </div>
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

  .user-row {
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 20px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
  }

  .user-row-main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.9rem;
    padding: 0.95rem 1rem;
  }

  .user-identity,
  .user-meta {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    min-width: 0;
  }

  .user-meta {
    align-items: flex-end;
  }

  .user-name {
    color: var(--shell-text);
    font: var(--efs-font-body-md);
    line-height: 1.3;
  }

  .user-display,
  .user-role,
  .footer-copy,
  .empty-state {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  .user-role {
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
    .user-meta {
      align-items: flex-start;
    }
  }
</style>
