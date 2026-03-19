<script lang="ts">
  import type { AdminRoleRecord, AdminUserRecord } from '@contracts/admin';
  import type { NoticeState, UserFormState } from '../lib/types';

  type Props = {
    roles: AdminRoleRecord[];
    users: AdminUserRecord[];
    form: UserFormState;
    result: NoticeState | null;
    actualRole: string;
    busy: boolean;
    onSubmit: () => void;
  };

  let { roles, users, form, result, actualRole, busy, onSubmit } = $props<Props>();
</script>

<article class="form-card" data-testid="admin-users-panel">
  <div class="section-label">Create User</div>
  <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Provision a new login key</h2>
  <div class="mt-6 grid gap-4 sm:grid-cols-2">
    <div class="field-stack">
      <label for="admin-user-username">Username</label>
      <input id="admin-user-username" type="text" bind:value={form.username} placeholder="member-jane" />
    </div>
    <div class="field-stack">
      <label for="admin-user-name">Display name</label>
      <input id="admin-user-name" type="text" bind:value={form.name} placeholder="Jane Doe" />
    </div>
  </div>
  <div class="mt-4 grid gap-4 sm:grid-cols-2">
    <div class="field-stack">
      <label for="admin-user-role">Role</label>
      <select id="admin-user-role" bind:value={form.roleId}>
        {#each roles.filter((role) => !role.operatorOnly) as role (role.id)}
          <option value={role.id}>{role.name}</option>
        {/each}
      </select>
    </div>
    <div class="field-stack">
      <label for="admin-user-key">Custom login key (optional)</label>
      <input id="admin-user-key" type="text" bind:value={form.loginKey} placeholder="leave blank to generate" />
    </div>
  </div>
  <div class="mt-5 flex flex-wrap items-center gap-3">
    <button class="pill-button" type="button" disabled={busy} onclick={onSubmit}>Create user</button>
    <span class="tag">Actual role: {actualRole}</span>
  </div>
  {#if result}
    <div class={result.error ? 'flash-error mt-5' : 'notice mt-5'}>{result.message}</div>
  {/if}

  <div class="mt-6" data-testid="admin-users-table">
    {#if users.length === 0}
      <p class="shell-copy">No users provisioned yet.</p>
    {:else}
      <table>
        <thead>
          <tr><th>User</th><th>Role</th><th>Status</th></tr>
        </thead>
        <tbody>
          {#each users as user (user.id)}
            <tr>
              <td><strong>{user.username}</strong><br /><span class="shell-copy">{user.name}</span></td>
              <td>{user.roleId}</td>
              <td>{user.status}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </div>
</article>
