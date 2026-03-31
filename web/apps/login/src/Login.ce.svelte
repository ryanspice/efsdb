<svelte:options
  customElement={{
    tag: 'efsdb-login',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import type { AuthErrorResponse, AuthResponse, AuthUser } from '@contracts/auth';
  import type { BootstrapPayload, BootstrapTheme } from '@contracts/bootstrap';
  import { loginWithKey, logoutSession, refreshSession, setAccessToken } from '@utils/bootstrap/authBridge';
  import { readBootstrapPayloadForApp } from '@utils/bootstrap/hostProps';
  import { getTheme, onThemeChange } from '@utils/bootstrap/themeBridge';
  import { onMount } from 'svelte';

  type LoginBootstrapPayload = BootstrapPayload & {
    app: 'login';
    tag: 'efsdb-login';
    urls?: {
      redirect?: string;
      home?: string;
    };
  };

  const bootstrap = readBootstrapPayloadForApp<LoginBootstrapPayload>('login');
  const authBase = (bootstrap.authBase ?? bootstrap.apiBase ?? '/_efsdb/api/auth').replace(/\/$/, '');
  const redirectUrl = bootstrap.urls?.redirect ?? '/_efsdb/admin';
  const homeUrl = bootstrap.urls?.home ?? '/_efsdb/control';
  const host = $host();

  let user = $state<AuthUser | null>(bootstrap.user ?? null);
  let loading = $state(true);
  let error = $state('');
  let loginKey = $state('');
  let accessToken = $state<string | null>(null);
  let loginInput = $state<HTMLInputElement | null>(null);

  function syncToken(token: string | null): void {
    accessToken = token;
    setAccessToken(token);
  }

  function emitAuthChange(state: 'authenticated' | 'logged_out'): void {
    host.dispatchEvent(
      new CustomEvent('authchange', {
        detail: {
          state,
          accessToken,
          user
        },
        bubbles: true,
        composed: true
      })
    );
  }

  function applyTheme(theme: BootstrapTheme): void {
    host.setAttribute('theme', theme);
  }

  async function restoreSession(): Promise<boolean> {
    const response = await refreshSession<AuthResponse>(authBase);
    if (!response.ok || !response.data) {
      syncToken(null);
      user = null;
      emitAuthChange('logged_out');
      return false;
    }

    user = response.data.user ?? null;
    syncToken(typeof response.data.accessToken === 'string' ? response.data.accessToken : null);

    if (user && accessToken) {
      emitAuthChange('authenticated');
      return true;
    }

    emitAuthChange('logged_out');
    return false;
  }

  async function hydrate(): Promise<void> {
    loading = true;
    error = '';

    try {
      await restoreSession();
    } catch (err) {
      console.error(err);
      syncToken(null);
      user = null;
      emitAuthChange('logged_out');
    } finally {
      loading = false;
      if (!user) {
        requestAnimationFrame(() => loginInput?.focus());
      }
    }
  }

  async function login(): Promise<void> {
    loading = true;
    error = '';

    try {
      const response = await loginWithKey<AuthResponse | AuthErrorResponse>(authBase, loginKey);
      const data = response.data;

      if (
        !response.ok ||
        !data ||
        typeof (data as Partial<AuthResponse>).accessToken !== 'string' ||
        !(data as Partial<AuthResponse>).user
      ) {
        error = (data as AuthErrorResponse | null)?.error?.message || 'Login failed';
        loading = false;
        return;
      }

      const authData = data as AuthResponse;
      user = authData.user;
      syncToken(authData.accessToken);
      emitAuthChange('authenticated');

      if (redirectUrl.trim() !== '') {
        window.location.assign(redirectUrl);
        return;
      }
    } catch (err) {
      console.error(err);
      error = 'Network error';
    }

    loading = false;
  }

  async function logout(): Promise<void> {
    loading = true;
    error = '';

    try {
      await logoutSession(authBase);
    } catch (err) {
      console.error(err);
    } finally {
      syncToken(null);
      user = null;
      loginKey = '';
      emitAuthChange('logged_out');
      loading = false;
      requestAnimationFrame(() => loginInput?.focus());

      if (homeUrl.trim() !== '') {
        window.location.assign(homeUrl);
      }
    }
  }

  onMount(() => {
    applyTheme(getTheme());
    const removeThemeListener = onThemeChange((theme) => {
      applyTheme(theme);
    });

    void hydrate();

    return () => {
      removeThemeListener();
    };
  });
</script>

<div class="login-shell">
  {#if loading}
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  {:else if user}
    <div class="profile-card">
      <div class="profile-header">
        <div class="avatar">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <div class="user-info">
          <h2>{user.username}</h2>
          <span class="badge">{user.role}</span>
        </div>
      </div>

      <div class="details-grid">
        <div class="detail-item">
          <div class="detail-label">Account</div>
          <span>{user.id}</span>
        </div>
        <div class="detail-item">
          <div class="detail-label">Actual Role</div>
          <span>{user.actualRole}</span>
        </div>
        <div class="detail-item">
          <div class="detail-label">Display Mode</div>
          <span>{user.displayMode || user.role}</span>
        </div>
        <div class="detail-item">
          <div class="detail-label">UID / GID</div>
          <span>{user.uid ?? 'n/a'} / {user.gid ?? 'n/a'}</span>
        </div>
        <div class="detail-item full-width">
          <div class="detail-label">Entitlements</div>
          <div class="tags">
            {#each user.entitlements || [] as entitlement (entitlement)}
              <span class="tag">{entitlement}</span>
            {/each}
          </div>
        </div>
        {#if (user.availableDisplayModes || []).length > 1}
          <div class="detail-item full-width">
            <div class="detail-label">Available Display Modes</div>
            <div class="tags">
              {#each user.availableDisplayModes || [] as mode (mode)}
                <span class="tag accent">{mode}</span>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      <div class="actions">
        <button class="btn btn-outline" type="button" onclick={logout}>Logout</button>
        {#if redirectUrl.trim() !== ''}
          <a href={redirectUrl} class="btn btn-primary">Open Admin</a>
        {/if}
      </div>
    </div>
  {:else}
    <div class="login-card">
      <div class="eyebrow">EFSDB Access</div>
      <h2>Sign in with a provisioned login key.</h2>
      <p class="subtitle">
        Use a tenant-admin or member login key created through bootstrap or the operator CLI. Public magic keys are disabled.
      </p>

      {#if error}
        <div class="alert error">{error}</div>
      {/if}

      <form
        onsubmit={(event) => {
          event.preventDefault();
          void login();
        }}
      >
        <div class="form-group">
          <label for="key">Login Key</label>
          <input
            type="password"
            id="key"
            bind:this={loginInput}
            bind:value={loginKey}
            placeholder="Paste tenant login key"
            required
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary full-width"
          disabled={loading}
        >
          {loading ? 'Authenticating...' : 'Login'}
        </button>
      </form>

      <div class="hint">
        Development may emit the initial tenant-admin key once in the server console. Production requires injected bootstrap material.
      </div>
    </div>
  {/if}
</div>

<style>
  :host {
    /*
     * Host-local token bridge.
     * Theme ownership still lives outside this component; only the stable web-side aliases
     * are consumed here. Local surface values stay in place to preserve the current card UI.
     */
    display: block;
    font-family: var(--efs-font-sans);
    color: var(--efs-text-default);
    --primary: var(--efs-accent-primary);
    --primary-hover: var(--efs-accent-primary-hover);
    --primary-text: var(--efs-text-inverse);
    --primary-ink: var(--primary);
    --danger: var(--efs-state-danger);
    --success: var(--efs-state-success);
    --bg-card: var(--efs-bg-surface-1);
    --bg-input: var(--efs-bg-surface-0);
    --border: var(--efs-border-field);
    --border-strong: var(--efs-border-focus);
    --muted: var(--efs-text-subtle);
    --shadow: var(--efs-shadow-dialog);
  }

  :host([theme='light']) {
    color: #0f172a;
    --primary: var(--efs-accent-surface-light, color-mix(in srgb, var(--accent, #0f172a) 60%, #0f172a 40%));
    --primary-hover: var(--efs-accent-surface-light-hover, color-mix(in srgb, var(--accent, #0f172a) 52%, #0f172a 48%));
    --primary-text: var(--efs-text-inverse, #f5f7fb);
    --primary-ink: var(--efs-accent-ink-light, color-mix(in srgb, var(--accent, #0f172a) 22%, #0f172a 78%));
    --danger: #dc2626;
    --success: #16a34a;
    --bg-card: rgba(255, 255, 255, 0.92);
    --bg-input: #f8fafc;
    --border: #e2e8f0;
    --border-strong: #94a3b8;
    --muted: #64748b;
    --shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  }

  :host([theme='green']) {
    color: #e7eddc;
    --primary: var(--accent, #c6ff00);
    --primary-hover: color-mix(in srgb, var(--accent, #c6ff00) 80%, black);
    --primary-text: var(--shell-pill-text, #050804);
    --danger: #ef4444;
    --success: #22c55e;
    --bg-card: rgba(12, 20, 10, 0.8);
    --bg-input: rgba(6, 10, 6, 0.4);
    --border: rgba(198, 255, 0, 0.12);
    --border-strong: rgba(198, 255, 0, 0.2);
    --muted: #a2b392;
    --shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
  }

  .login-shell {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 320px;
    width: 100%;
    padding: 1rem;
  }

  .login-card,
  .profile-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 1.6rem;
    width: min(100%, 500px);
    box-shadow: var(--shadow);
    backdrop-filter: blur(16px);
  }

  .eyebrow {
    color: var(--primary-ink);
    font: var(--efs-font-label);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  h2 {
    margin: 0;
    font: var(--efs-font-title-lg);
    line-height: 1.12;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .subtitle {
    color: var(--muted);
    font: var(--efs-font-body-md);
    margin: 0.9rem 0 1.3rem 0;
    line-height: 1.55;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  label {
    display: block;
    font: var(--efs-font-label);
    margin-bottom: 0.55rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  input {
    width: 100%;
    background: var(--bg-input);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 0.88rem 1rem;
    color: inherit;
    font: var(--efs-font-body-lg);
    box-sizing: border-box;
    transition:
      border-color 0.2s,
      box-shadow 0.2s,
      transform 0.2s;
  }

  input:focus {
    outline: none;
    border-color: var(--border-strong);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary), transparent 88%);
    transform: translateY(-1px);
  }

  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.82rem 1.1rem;
    border-radius: 16px;
    font: var(--efs-font-body-sm);
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 0.2s,
      background 0.2s,
      border-color 0.2s;
    border: 1px solid transparent;
    text-decoration: none;
  }

  .btn:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  .btn-primary {
    background: var(--primary);
    color: var(--primary-text);
  }

  .btn-primary:hover:not(:disabled) {
    background: var(--primary-hover);
  }

  .btn-primary:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  .btn-outline {
    background: transparent;
    border-color: var(--border);
    color: var(--muted);
  }

  .btn-outline:hover {
    border-color: var(--border-strong);
    color: var(--text, #eef4df);
  }

  .full-width {
    width: 100%;
  }

  .alert {
    padding: 0.85rem 1rem;
    border-radius: 16px;
    font: var(--efs-font-body-sm);
    margin-bottom: 1rem;
  }

  .error {
    background: rgba(255, 123, 139, 0.12);
    border: 1px solid rgba(255, 123, 139, 0.3);
    color: var(--danger);
  }

  .profile-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid var(--border);
  }

  .avatar {
    width: 3.25rem;
    height: 3.25rem;
    background: linear-gradient(135deg, var(--primary), var(--primary-hover));
    color: var(--primary-text);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font: var(--efs-font-title-md);
  }

  .user-info {
    min-width: 0;
  }

  .user-info h2 {
    font: var(--efs-font-title-md);
    margin-bottom: 0.4rem;
    word-break: break-word;
  }

  .badge {
    display: inline-block;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    font: var(--efs-font-micro);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: color-mix(in srgb, var(--primary-ink), transparent 84%);
    color: var(--primary-ink);
  }

  .details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;
    margin-bottom: 1.2rem;
  }

  .detail-item {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .detail-item.full-width {
    grid-column: 1 / -1;
  }

  .detail-item .detail-label {
    margin: 0;
    font: var(--efs-font-label);
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .detail-item span {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font: var(--efs-font-body-sm);
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    word-break: break-word;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: var(--bg-input);
    border: 1px solid var(--border);
    padding: 0.3rem 0.55rem;
    border-radius: 999px;
    font: var(--efs-font-body-xs);
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  }

  .tag.accent {
    border-color: color-mix(in srgb, var(--primary-ink), transparent 44%);
    color: var(--primary-ink);
  }

  .actions {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
  }

  .hint {
    margin-top: 1.35rem;
    color: var(--muted);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .spinner {
    margin: 20px auto 0;
    width: 70px;
    text-align: center;
  }

  .spinner > div {
    width: 12px;
    height: 12px;
    background-color: var(--muted);
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    animation-delay: -0.16s;
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }

    40% {
      transform: scale(1);
    }
  }

  @media (max-width: 47.99rem) {
    .login-card,
    .profile-card {
      padding: 1.2rem;
      border-radius: 20px;
    }

    .details-grid {
      grid-template-columns: 1fr;
    }

    .detail-item.full-width {
      grid-column: auto;
    }

    .actions {
      flex-direction: column;
    }
  }
</style>
