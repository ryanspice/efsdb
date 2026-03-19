<svelte:options
  customElement={{
    tag: 'efsdb-admin',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { AuthUser } from '@contracts/auth';
  import type { BootstrapPayload, BootstrapTheme } from '@contracts/bootstrap';
  import { readBootstrapPayloadForApp } from '@utils/bootstrap/hostProps';
  import { getTheme, onThemeChange } from '@utils/bootstrap/themeBridge';
  import type { NoticeState, RoleFormState, UserFormState } from './lib/types';
  import { ensureAdminSession, whoAmI, changeDisplayMode } from './lib/api/authClient';
  import { createRole, createUser, getSettings, listRoles, listUsers } from './lib/api/adminClient';
  import { listProducts } from './lib/api/productsClient';
  import { searchRecords } from './lib/api/searchClient';
  import { loadFacets } from './lib/api/facetsClient';

  import AdminShell from './components/AdminShell.svelte';
  import UserProvisionPanel from './components/UserProvisionPanel.svelte';
  import RoleManagementPanel from './components/RoleManagementPanel.svelte';
  import DisplayModePanel from './components/DisplayModePanel.svelte';
  import SettingsPanel from './components/SettingsPanel.svelte';
  import CatalogPanel from './components/CatalogPanel.svelte';

  type AdminBootstrapPayload = BootstrapPayload & {
    app: 'admin';
    tag: 'efsdb-admin';
    urls?: {
      legacy?: string;
    };
  };

  const bootstrap = readBootstrapPayloadForApp<AdminBootstrapPayload>('admin');
  const apiBase = bootstrap.apiBase ?? '/api/admin';
  const authBase = bootstrap.authBase ?? '/api/auth';
  const host = $host();

  let bootUser = $state<AuthUser | null>((bootstrap.user as AuthUser | null | undefined) ?? null);
  let users = $state([] as Array<{ id: string; username: string; name: string; roleId: string; status: string }>);
  let roles = $state([] as Array<{ id: string; name: string; description?: string; entitlements: string[]; operatorOnly?: boolean }>);
  let settings = $state<Record<string, unknown> | null>(null);
  let products = $state([] as Array<{ id: string; name: string; sku: string; category?: string }>);
  let searchResults = $state([] as Array<{ id: string; summary: Record<string, unknown> }>);
  let facets = $state<Record<string, { value: string; label: string; count: number }[]>>({});
  let notice = $state<NoticeState | null>(null);
  let loading = $state(true);
  let submittingUser = $state(false);
  let submittingRole = $state(false);
  let switchingMode = $state(false);
  let catalogLoading = $state(false);

  let userForm = $state<UserFormState>({
    username: '',
    name: '',
    roleId: '',
    loginKey: ''
  });

  let roleForm = $state<RoleFormState>({
    id: '',
    name: '',
    description: '',
    entitlements: 'NATURAL_VIEW'
  });

  let userResult = $state<NoticeState | null>(null);
  let roleResult = $state<NoticeState | null>(null);
  let catalogQuery = $state('');

  function applyTheme(theme: BootstrapTheme): void {
    host.setAttribute('theme', theme);
  }

  async function loadAdminState(): Promise<void> {
    const [who, usersResponse, rolesResponse, settingsResponse, productsResponse, searchResponse, facetsResponse] = await Promise.all([
      whoAmI(authBase),
      listUsers(apiBase),
      listRoles(apiBase),
      getSettings(apiBase),
      listProducts({ limit: 10 }),
      searchRecords({ entity: 'products', q: catalogQuery, limit: 10 }),
      loadFacets({ entity: 'products', field: ['category', 'brand', 'status'], q: catalogQuery })
    ]);

    bootUser = who;
    users = usersResponse.results;
    roles = rolesResponse.results;
    settings = settingsResponse.result;
    products = productsResponse.results;
    searchResults = searchResponse.results;
    facets = facetsResponse.results;

    if (!userForm.roleId) {
      const firstRole = roles.find((role) => !role.operatorOnly);
      userForm.roleId = firstRole?.id ?? '';
    }
  }

  async function refreshAll(): Promise<void> {
    loading = true;
    notice = null;

    try {
      const ready = await ensureAdminSession();
      if (!ready) {
        notice = { message: 'Sign in is required before the admin control plane can load.', error: true };
        return;
      }

      await loadAdminState();
    } catch (error: unknown) {
      notice = {
        message: error instanceof Error ? error.message : 'Failed to load admin control-plane data.',
        error: true
      };
    } finally {
      loading = false;
    }
  }

  async function submitUser(): Promise<void> {
    submittingUser = true;
    userResult = null;

    try {
      const response = await createUser(apiBase, {
        username: userForm.username,
        name: userForm.name,
        roleId: userForm.roleId,
        ...(userForm.loginKey.trim() !== '' ? { loginKey: userForm.loginKey.trim() } : {})
      });

      userResult = {
        message: `Created ${response.user.username}. Login key: ${response.loginKey}`,
        error: false
      };
      userForm.username = '';
      userForm.name = '';
      userForm.loginKey = '';
      await refreshAll();
    } catch (error: unknown) {
      userResult = {
        message: error instanceof Error ? error.message : 'Unable to create user',
        error: true
      };
    } finally {
      submittingUser = false;
    }
  }

  async function submitRole(): Promise<void> {
    submittingRole = true;
    roleResult = null;

    try {
      const response = await createRole(apiBase, {
        id: roleForm.id,
        name: roleForm.name,
        description: roleForm.description,
        entitlements: roleForm.entitlements.split(',').map((item) => item.trim()).filter(Boolean)
      });

      roleResult = {
        message: `Created role ${response.result.id}`,
        error: false
      };
      roleForm.id = '';
      roleForm.name = '';
      roleForm.description = '';
      roleForm.entitlements = 'NATURAL_VIEW';
      await refreshAll();
    } catch (error: unknown) {
      roleResult = {
        message: error instanceof Error ? error.message : 'Unable to create role',
        error: true
      };
    } finally {
      submittingRole = false;
    }
  }

  async function changeMode(roleId: string): Promise<void> {
    switchingMode = true;
    notice = null;

    try {
      await changeDisplayMode(authBase, roleId);
      window.location.reload();
    } catch (error: unknown) {
      notice = {
        message: error instanceof Error ? error.message : 'Unable to switch display mode',
        error: true
      };
    } finally {
      switchingMode = false;
    }
  }

  async function runCatalogSearch(): Promise<void> {
    catalogLoading = true;

    try {
      const [productsResponse, searchResponse, facetsResponse] = await Promise.all([
        listProducts({ limit: 10 }),
        searchRecords({ entity: 'products', q: catalogQuery, limit: 10 }),
        loadFacets({ entity: 'products', field: ['category', 'brand', 'status'], q: catalogQuery })
      ]);

      products = productsResponse.results;
      searchResults = searchResponse.results;
      facets = facetsResponse.results;
    } catch (error: unknown) {
      notice = {
        message: error instanceof Error ? error.message : 'Unable to load catalog/search data',
        error: true
      };
    } finally {
      catalogLoading = false;
    }
  }

  onMount(() => {
    applyTheme(getTheme());
    const removeThemeListener = onThemeChange((theme) => {
      applyTheme(theme);
    });

    void refreshAll();

    return () => {
      removeThemeListener();
    };
  });
</script>

<AdminShell {notice} {loading}>
  <div class="grid gap-6 xl:grid-cols-2">
    <UserProvisionPanel
      roles={roles}
      users={users}
      form={userForm}
      result={userResult}
      actualRole={bootUser?.actualRole ?? 'unknown'}
      busy={submittingUser}
      onSubmit={() => void submitUser()}
    />

    <RoleManagementPanel
      roles={roles}
      form={roleForm}
      result={roleResult}
      busy={submittingRole}
      onSubmit={() => void submitRole()}
      onRefresh={() => void refreshAll()}
    />
  </div>

  <div class="grid gap-6 xl:grid-cols-2">
    <DisplayModePanel user={bootUser} busy={switchingMode} onChange={(roleId) => void changeMode(roleId)} />
    <SettingsPanel {settings} />
  </div>

  <CatalogPanel
    query={catalogQuery}
    loading={catalogLoading}
    {products}
    {searchResults}
    {facets}
    onSearch={() => void runCatalogSearch()}
  />
</AdminShell>

<style>
  :host {
    display: block;
    font-family:
      'Segoe UI Variable',
      'Segoe UI',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;
    color: var(--text, #eef4df);
    --shell-panel: rgba(18, 28, 15, 0.92);
    --shell-surface: rgba(12, 19, 10, 0.84);
    --shell-border: rgba(198, 255, 0, 0.16);
    --shell-text: #eef4df;
    --shell-muted: #a2b392;
    --shell-primary: #c6ff00;
    --shell-primary-text: #11210c;
  }

  :host([theme='light']) {
    color: #24311b;
    --shell-panel: rgba(255, 255, 255, 0.92);
    --shell-surface: rgba(245, 248, 238, 0.96);
    --shell-border: rgba(116, 145, 45, 0.18);
    --shell-text: #24311b;
    --shell-muted: #5f7050;
    --shell-primary: #c6ff00;
    --shell-primary-text: #13210f;
  }

  :host {
    --text: var(--shell-text);
  }

  :host :global(.form-card),
  :host :global(.table-card) {
    background: var(--shell-panel);
    border: 1px solid var(--shell-border);
    border-radius: 24px;
    padding: 1.5rem;
  }

  :host :global(.section-label) {
    color: var(--shell-primary);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  :host :global(.page-title) {
    font-size: clamp(1.6rem, 2.8vw, 2.5rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  :host :global(.shell-copy) {
    color: var(--shell-muted);
  }

  :host :global(.field-stack) {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  :host :global(label) {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--shell-muted);
  }

  :host :global(input),
  :host :global(select) {
    width: 100%;
    border: 1px solid var(--shell-border);
    border-radius: 16px;
    background: var(--shell-surface);
    color: var(--shell-text);
    padding: 0.85rem 1rem;
    box-sizing: border-box;
  }

  :host :global(pre) {
    background: var(--shell-surface);
    border: 1px solid var(--shell-border);
    border-radius: 16px;
    padding: 1rem;
    overflow: auto;
  }

  :host :global(table) {
    width: 100%;
    border-collapse: collapse;
  }

  :host :global(th),
  :host :global(td) {
    padding: 0.75rem;
    border-top: 1px solid var(--shell-border);
    text-align: left;
    vertical-align: top;
  }

  :host :global(.pill-button),
  :host :global(.ghost-button) {
    border-radius: 999px;
    padding: 0.8rem 1.1rem;
    border: 1px solid var(--shell-border);
    cursor: pointer;
    font-weight: 700;
  }

  :host :global(.pill-button) {
    background: var(--shell-primary);
    color: var(--shell-primary-text);
  }

  :host :global(.ghost-button) {
    background: transparent;
    color: var(--shell-muted);
  }

  :host :global(.notice),
  :host :global(.flash-error) {
    border-radius: 16px;
    padding: 0.9rem 1rem;
  }

  :host :global(.notice) {
    background: rgba(198, 255, 0, 0.1);
    border: 1px solid var(--shell-border);
  }

  :host :global(.flash-error) {
    background: rgba(255, 123, 139, 0.12);
    border: 1px solid rgba(255, 123, 139, 0.28);
  }

  :host :global(.tag) {
    display: inline-flex;
    align-items: center;
    padding: 0.28rem 0.7rem;
    border-radius: 999px;
    border: 1px solid var(--shell-border);
    background: var(--shell-surface);
    font-size: 0.8rem;
  }
</style>
