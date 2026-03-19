<svelte:options
  customElement={{
    tag: 'efsdb-login',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { AuthErrorResponse, AuthResponse, AuthUser } from '@contracts/auth';
  import type { BootstrapPayload, BootstrapTheme } from '@contracts/bootstrap';
  import { readBootstrapPayloadForApp } from '@utils/bootstrap/hostProps';
  import { loginWithKey, logoutSession, refreshSession, setAccessToken } from '@utils/bootstrap/authBridge';
  import { getTheme, onThemeChange } from '@utils/bootstrap/themeBridge';

  type LoginBootstrapPayload = BootstrapPayload & {
    app: 'login';
    tag: 'efsdb-login';
    urls?: {
      redirect?: string;
      home?: string;
    };
  };

  const bootstrap = readBootstrapPayloadForApp<LoginBootstrapPayload>('login');
  const authBase = (bootstrap.authBase ?? bootstrap.apiBase ?? '/api/auth').replace(/\/$/, '');
  const redirectUrl = bootstrap.urls?.redirect ?? '?action=admin';
  const homeUrl = bootstrap.urls?.home ?? '?';
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
    display: block;
    font-family:
      'Segoe UI Variable',
      'Segoe UI',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;
    color: var(--text, #eef4df);
    --primary: #c6ff00;
    --primary-hover: #d6ff49;
    --primary-text: #10200d;
    --danger: #ff7b8b;
    --success: #bde270;
    --bg-card: rgba(21, 31, 19, 0.92);
    --bg-input: rgba(14, 22, 13, 0.94);
    --border: rgba(198, 255, 0, 0.18);
    --border-strong: rgba(198, 255, 0, 0.35);
    --muted: #a2b392;
    --shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
  }

  :host([theme='light']) {
    color: var(--text, #24311b);
    --primary: #c6ff00;
    --primary-hover: #d4ff45;
    --primary-text: #13210f;
    --danger: #b44a5a;
    --success: #6d8f27;
    --bg-card: rgba(255, 255, 255, 0.9);
    --bg-input: rgba(245, 248, 238, 0.96);
    --border: rgba(116, 145, 45, 0.18);
    --border-strong: rgba(116, 145, 45, 0.35);
    --muted: #5f7050;
    --shadow: 0 18px 40px rgba(34, 48, 22, 0.12);
  }

  .login-shell {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 320px;
    width: 100%;
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
    color: var(--primary);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.35rem, 2.1vw, 1.85rem);
    line-height: 1.12;
    font-weight: 800;
  }

  .subtitle {
    color: var(--muted);
    font-size: 0.9rem;
    margin: 0.9rem 0 1.3rem 0;
    line-height: 1.55;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  label {
    display: block;
    font-size: 0.82rem;
    font-weight: 600;
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
    font-size: 0.96rem;
    box-sizing: border-box;
    transition:
      border-color 0.2s,
      box-shadow 0.2s,
      transform 0.2s;
  }

  input:focus {
    outline: none;
    border-color: var(--border-strong);
    box-shadow: 0 0 0 4px rgba(198, 255, 0, 0.12);
    transform: translateY(-1px);
  }

  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.82rem 1.1rem;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.86rem;
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
    font-size: 0.9rem;
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
    background: linear-gradient(135deg, var(--primary), #85c84c);
    color: var(--primary-text);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1.3rem;
  }

  .user-info {
    min-width: 0;
  }

  .user-info h2 {
    font-size: 1.35rem;
    margin-bottom: 0.4rem;
    word-break: break-word;
  }

  .badge {
    display: inline-block;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    font-size: 0.73rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: rgba(198, 255, 0, 0.16);
    color: var(--primary);
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
    font-size: 0.72rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
  }

  .detail-item span {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.9rem;
    word-break: break-word;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: rgba(14, 22, 13, 0.9);
    border: 1px solid var(--border);
    padding: 0.3rem 0.55rem;
    border-radius: 999px;
    font-size: 0.74rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  }

  .tag.accent {
    border-color: rgba(198, 255, 0, 0.35);
    color: var(--primary);
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
    font-size: 0.79rem;
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

  @media (max-width: 640px) {
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
