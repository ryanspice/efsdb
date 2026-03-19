<script lang="ts">
  import type { AdminRoleRecord } from '@contracts/admin';
  import type { NoticeState, RoleFormState } from '../lib/types';

  type Props = {
    roles: AdminRoleRecord[];
    form: RoleFormState;
    result: NoticeState | null;
    busy: boolean;
    onSubmit: () => void;
    onRefresh: () => void;
  };

  let { roles, form, result, busy, onSubmit, onRefresh } = $props<Props>();
</script>

<article class="form-card" data-testid="admin-roles-panel">
  <div class="section-label">Create Role</div>
  <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Add a custom tenant role</h2>
  <div class="mt-6 grid gap-4 sm:grid-cols-2">
    <div class="field-stack">
      <label for="admin-role-id">Role id</label>
      <input id="admin-role-id" type="text" bind:value={form.id} placeholder="member_auditor" />
    </div>
    <div class="field-stack">
      <label for="admin-role-name">Role name</label>
      <input id="admin-role-name" type="text" bind:value={form.name} placeholder="Member Auditor" />
    </div>
  </div>
  <div class="mt-4 field-stack">
    <label for="admin-role-description">Description</label>
    <input id="admin-role-description" type="text" bind:value={form.description} placeholder="Can inspect decoded content and reports" />
  </div>
  <div class="mt-4 field-stack">
    <label for="admin-role-entitlements">Entitlements (comma-separated)</label>
    <input id="admin-role-entitlements" type="text" bind:value={form.entitlements} />
  </div>
  <div class="mt-5 flex flex-wrap gap-3">
    <button class="pill-button" type="button" disabled={busy} onclick={onSubmit}>Create role</button>
    <button class="ghost-button" type="button" onclick={onRefresh}>Refresh tables</button>
  </div>
  {#if result}
    <div class={result.error ? 'flash-error mt-5' : 'notice mt-5'}>{result.message}</div>
  {/if}

  <div class="mt-6" data-testid="admin-roles-table">
    {#if roles.length === 0}
      <p class="shell-copy">No roles found.</p>
    {:else}
      <table>
        <thead>
          <tr><th>Role</th><th>Entitlements</th></tr>
        </thead>
        <tbody>
          {#each roles as role (role.id)}
            <tr>
              <td><strong>{role.name}</strong><br /><span class="shell-copy">{role.id}</span></td>
              <td>{role.entitlements.join(', ')}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </div>
</article>
