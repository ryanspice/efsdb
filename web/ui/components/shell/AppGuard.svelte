<script lang="ts">
  import type { AuthResponse } from '@contracts/auth';
  import { loginWithKey, setAccessToken } from '@utils/bootstrap/authBridge';
  import type { Snippet } from 'svelte';

  type GuardState = 'loading' | 'ready' | 'auth_required' | 'error';
  type MaybePromise<T> = T | Promise<T>;

  type Props = {
    guardState?: GuardState;
    state?: GuardState;
    authBase: string;
    loadingTitle?: string;
    loadingCopy?: string;
    authTitle?: string;
    authCopy?: string;
    errorTitle?: string;
    errorCopy?: string;
    retryLabel?: string;
    onAuthenticated?: (response: AuthResponse) => MaybePromise<void>;
    onRetry?: () => MaybePromise<void>;
    children?: Snippet;
  };

  let {
    guardState,
    state: propState,
    authBase,
    loadingTitle = 'Loading workspace',
    loadingCopy = 'Refreshing your session and preparing the app.',
    authTitle = 'Sign in required',
    authCopy = 'Your session expired. Enter your passphrase to continue.',
    errorTitle = 'Unable to load workspace',
    errorCopy = 'Something went wrong while loading this app.',
    retryLabel = 'Try again',
    onAuthenticated,
    onRetry,
    children
  }: Props = $props();

  const resolvedGuardState = $derived.by((): GuardState => guardState ?? propState ?? 'loading');

  let loginKey = $state('');
  let authError = $state('');
  let busy = $state(false);
  let inputEl = $state<HTMLInputElement | null>(null);

  $effect(() => {
    if (resolvedGuardState !== 'auth_required') {
      loginKey = '';
      authError = '';
      busy = false;
      return;
    }

    requestAnimationFrame(() => {
      inputEl?.focus();
    });
  });

  async function submitLogin(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    if (busy) {
      return;
    }

    const key = loginKey.trim();
    if (key === '') {
      authError = 'Enter your passphrase.';
      return;
    }

    busy = true;
    authError = '';

    try {
      const response = await loginWithKey<AuthResponse>(authBase, key);
      const data = response.data;
      if (!response.ok || !data || typeof data.accessToken !== 'string' || !data.user) {
        authError = 'Invalid passphrase.';
        return;
      }

      setAccessToken(data.accessToken);
      loginKey = '';
      await onAuthenticated?.(data);
    } catch (error: unknown) {
      authError = error instanceof Error ? error.message : 'Unable to sign in.';
    } finally {
      busy = false;
    }
  }

  async function retry(): Promise<void> {
    await onRetry?.();
  }
</script>

{#if resolvedGuardState === 'ready'}
  {@render children?.()}
{:else}
  <div class="app-guard">
    <section class:app-guard__card={true} class:app-guard__card--error={resolvedGuardState === 'error'}>
      <div class="app-guard__eyebrow">
        {#if resolvedGuardState === 'loading'}
          Workspace
        {:else if resolvedGuardState === 'auth_required'}
          Session
        {:else}
          Problem
        {/if}
      </div>

      <h2 class="app-guard__title">
        {#if resolvedGuardState === 'loading'}
          {loadingTitle}
        {:else if resolvedGuardState === 'auth_required'}
          {authTitle}
        {:else}
          {errorTitle}
        {/if}
      </h2>

      <p class="app-guard__copy">
        {#if resolvedGuardState === 'loading'}
          {loadingCopy}
        {:else if resolvedGuardState === 'auth_required'}
          {authCopy}
        {:else}
          {errorCopy}
        {/if}
      </p>

      {#if resolvedGuardState === 'loading'}
        <div class="app-guard__spinner" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      {:else if resolvedGuardState === 'auth_required'}
        <form class="app-guard__form" onsubmit={submitLogin}>
          <label class="app-guard__label" for="app-guard-login-key">Passphrase</label>
          <input
            id="app-guard-login-key"
            bind:this={inputEl}
            bind:value={loginKey}
            class="app-guard__input"
            type="password"
            autocomplete="current-password"
            spellcheck="false"
            placeholder="Enter your passphrase"
          />

          {#if authError}
            <p class="app-guard__error">{authError}</p>
          {/if}

          <button class="app-guard__button" type="submit" disabled={busy}>
            {busy ? 'Signing in...' : 'Continue'}
          </button>
        </form>
      {:else if onRetry}
        <button class="app-guard__button" type="button" onclick={() => void retry()}>
          {retryLabel}
        </button>
      {/if}
    </section>
  </div>
{/if}

<style>
  .app-guard {
    display: grid;
    place-items: center;
    min-height: 100%;
    padding: 2rem;
  }

  .app-guard__card {
    width: min(30rem, 100%);
    display: grid;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 1.5rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 4%);
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--shell-panel), transparent 2%), color-mix(in srgb, var(--shell-surface), transparent 3%)),
      var(--shell-surface);
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
  }

  .app-guard__card--error {
    border-color: color-mix(in srgb, #ef4444, transparent 70%);
  }

  .app-guard__eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--shell-muted);
  }

  .app-guard__title {
    margin: 0;
    font-size: 1.45rem;
    color: var(--shell-text-strong);
  }

  .app-guard__copy {
    margin: 0;
    color: var(--shell-muted);
    line-height: 1.7;
  }

  .app-guard__spinner {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
  }

  .app-guard__spinner span {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--accent), white 16%);
    animation: app-guard-bounce 0.9s ease-in-out infinite;
  }

  .app-guard__spinner span:nth-child(2) {
    animation-delay: 0.1s;
  }

  .app-guard__spinner span:nth-child(3) {
    animation-delay: 0.2s;
  }

  .app-guard__form {
    display: grid;
    gap: 0.85rem;
  }

  .app-guard__label {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--shell-text-strong);
  }

  .app-guard__input {
    width: 100%;
    border-radius: 0.9rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    background: color-mix(in srgb, var(--shell-inset-bg), transparent 6%);
    color: var(--shell-text);
    padding: 0.8rem 0.9rem;
    font-size: 0.95rem;
  }

  .app-guard__input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent), transparent 78%);
  }

  .app-guard__error {
    margin: 0;
    font-size: 0.88rem;
    color: #ef4444;
  }

  .app-guard__button {
    justify-self: flex-start;
    border: 0;
    border-radius: 999px;
    padding: 0.75rem 1rem;
    font: inherit;
    font-weight: 600;
    color: white;
    background: color-mix(in srgb, var(--accent), black 10%);
    cursor: pointer;
  }

  .app-guard__button:disabled {
    opacity: 0.7;
    cursor: progress;
  }

  @keyframes app-guard-bounce {
    0%,
    80%,
    100% {
      opacity: 0.45;
      transform: translateY(0);
    }

    40% {
      opacity: 1;
      transform: translateY(-0.2rem);
    }
  }
</style>
