<script lang="ts">
  import type { AdminRoleRecord } from '@contracts/admin';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode, NoticeState, UserFormState } from '../lib/types';

  type Props = {
    roles: AdminRoleRecord[];
    form: UserFormState;
    result: NoticeState | null;
    actualRole: string;
    busy: boolean;
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
    onSubmit: () => void;
  };

  let {
    roles,
    form = $bindable(),
    result,
    actualRole,
    busy,
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    onOpen,
    onTogglePin,
    onSubmit
  }: Props = $props();

  const uid = $props.id();
  let availableRoles = $derived(roles.filter((role) => !role.operatorOnly));
</script>

<AdminWidgetFrame
  eyebrow="Create user"
  title="Provision a new login key"
  description="Create a tenant account, assign a role, and issue a credential without leaving the dashboard."
  {mode}
  {dataTestid}
  {open}
  {pinned}
  {onOpen}
  onTogglePin={onTogglePin}
>
  {#snippet footer()}
    <div class="widget-footer-row">
      <span class="widget-hint">Leave the login key blank to generate one automatically.</span>
      <StatusPill label={`actual ${actualRole}`} tone="accent" monospaced={true} />
    </div>
  {/snippet}

  <div class="form-grid" class:form-grid-window={mode === 'window'}>
    <div class="field-stack">
      <label for={`${uid}-username`}>Username</label>
      <input
        id={`${uid}-username`}
        type="text"
        bind:value={form.username}
        placeholder="member-jane"
        autocomplete="username"
      />
    </div>

    <div class="field-stack">
      <label for={`${uid}-name`}>Display name</label>
      <input
        id={`${uid}-name`}
        type="text"
        bind:value={form.name}
        placeholder="Jane Doe"
        autocomplete="name"
      />
    </div>

    <div class="field-stack">
      <label for={`${uid}-role`}>Tenant role</label>
      <select id={`${uid}-role`} bind:value={form.roleId}>
        {#each availableRoles as role (role.id)}
          <option value={role.id}>{role.name}</option>
        {/each}
      </select>
    </div>

    <div class="field-stack">
      <label for={`${uid}-key`}>Custom login key</label>
      <input
        id={`${uid}-key`}
        type="text"
        bind:value={form.loginKey}
        placeholder="leave blank to generate"
        autocomplete="off"
      />
    </div>
  </div>

  <div class="action-row">
    <button class="primary-action" type="button" disabled={busy} onclick={onSubmit}>
      {busy ? 'Creating…' : 'Create user'}
    </button>
    <span class="meta-copy">{availableRoles.length} assignable roles</span>
  </div>

  {#if result}
    <div class={result.error ? 'flash-error' : 'notice'}>{result.message}</div>
  {/if}
</AdminWidgetFrame>

<style>
  .form-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .form-grid-window {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .field-stack {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    min-width: 0;
  }

  .field-stack label {
    color: var(--shell-muted);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .field-stack input,
  .field-stack select {
    width: 100%;
    min-height: 3rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    color: var(--shell-text);
    padding: 0.8rem 0.95rem;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;
  }

  .field-stack input::placeholder {
    color: var(--shell-muted);
  }

  .field-stack input:focus,
  .field-stack select:focus {
    outline: none;
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 44%);
    box-shadow: var(--shell-focus-ring);
  }

  .action-row,
  .widget-footer-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .primary-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.85rem;
    padding: 0.8rem 1.15rem;
    border: 0;
    border-radius: 999px;
    background: var(--shell-primary);
    color: var(--shell-primary-text);
    font: var(--efs-font-body-sm);
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      opacity 160ms ease;
  }

  .primary-action:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: var(--shell-card-shadow);
  }

  .primary-action:disabled {
    opacity: 0.68;
    cursor: wait;
  }

  .meta-copy,
  .widget-hint {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  @media (max-width: 63.99rem) {
    .form-grid-window {
      grid-template-columns: 1fr;
    }
  }
</style>
