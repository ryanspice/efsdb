<script lang="ts">
  import type { AdminRoleRecord } from '@contracts/admin';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode, NoticeState, RoleFormState } from '../lib/types';

  type Props = {
    roles: AdminRoleRecord[];
    form: RoleFormState;
    result: NoticeState | null;
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
  let customRoleCount = $derived(roles.filter((role) => !role.system).length);
</script>

<AdminWidgetFrame
  eyebrow="Create role"
  title="Add a custom tenant role"
  description="Compose entitlements into reusable role presets and keep provisioning fast."
  {mode}
  {dataTestid}
  {open}
  {pinned}
  {onOpen}
  onTogglePin={onTogglePin}
>
  {#snippet footer()}
    <div class="widget-footer-row">
      <span class="widget-hint">{customRoleCount} custom roles configured.</span>
      <StatusPill label="comma-separated entitlements" tone="info" />
    </div>
  {/snippet}

  <div class="form-grid" class:form-grid-window={mode === 'window'}>
    <div class="field-stack">
      <label for={`${uid}-role-id`}>Role id</label>
      <input
        id={`${uid}-role-id`}
        type="text"
        bind:value={form.id}
        placeholder="member_auditor"
        autocomplete="off"
      />
    </div>

    <div class="field-stack">
      <label for={`${uid}-role-name`}>Role name</label>
      <input
        id={`${uid}-role-name`}
        type="text"
        bind:value={form.name}
        placeholder="Member Auditor"
        autocomplete="off"
      />
    </div>

    <div class="field-stack field-span-full">
      <label for={`${uid}-role-description`}>Description</label>
      <input
        id={`${uid}-role-description`}
        type="text"
        bind:value={form.description}
        placeholder="Can inspect decoded content and reports"
        autocomplete="off"
      />
    </div>

    <div class="field-stack field-span-full">
      <label for={`${uid}-role-entitlements`}>Entitlements</label>
      <input
        id={`${uid}-role-entitlements`}
        type="text"
        bind:value={form.entitlements}
        placeholder="NATURAL_VIEW, RAW_VIEW"
        autocomplete="off"
      />
    </div>
  </div>

  <div class="action-row">
    <button class="primary-action" type="button" disabled={busy} onclick={onSubmit}>
      {busy ? 'Creating…' : 'Create role'}
    </button>
    <span class="meta-copy">Operator-only roles remain excluded from assignment.</span>
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

  .field-span-full {
    grid-column: 1 / -1;
  }

  .field-stack label {
    color: var(--shell-muted);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .field-stack input {
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

  .field-stack input:focus {
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
