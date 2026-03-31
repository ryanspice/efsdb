<svelte:options customElement="efsdb-create" />

<script lang="ts">
  import ToolWindow from '@ui/components/shell/ToolWindow.svelte';
  import { onMount } from 'svelte';

  let open = $state(false);
  let name = $state('');
  let framework = $state('sveltekit');
  let loading = $state(false);
  let errorMsg = $state('');
  let pathContext = $state('');
  let envContext = $state('staging');

  let sourceMode = $state('create'); // 'create', 'github', 'upload'
  let githubUrl = $state('');
  let archiveFile = $state<File | null>(null);
  let fileInput: HTMLInputElement;

  const defaultWindowWidth = typeof window !== 'undefined' ? 520 : 450;
  const defaultWindowX = typeof window !== 'undefined' ? Math.max(16, window.innerWidth / 2 - defaultWindowWidth / 2) : 120;
  const defaultWindowY = typeof window !== 'undefined' ? Math.max(16, window.innerHeight * 0.2) : 100;

  onMount(() => {
    const handleCreateComponent = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && detail.path) {
        pathContext = detail.path;
      }
      if (detail && detail.env) {
        envContext = detail.env;
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        envContext = urlParams.get('env') || 'staging';
      }
      open = true;
      name = '';
      errorMsg = '';
      framework = 'sveltekit';
    };

    window.addEventListener('efsdb:create-component', handleCreateComponent);

    return () => {
      window.removeEventListener('efsdb:create-component', handleCreateComponent);
    };
  });

  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (!name.trim()) {
      errorMsg = 'Component name is required.';
      return;
    }

    if (sourceMode === 'github' && !githubUrl.trim()) {
      errorMsg = 'GitHub repository URL is required.';
      return;
    }

    if (sourceMode === 'upload' && !archiveFile) {
      errorMsg = 'Please select a ZIP or TAR archive to upload.';
      return;
    }

    loading = true;
    errorMsg = '';

    try {
      let res;
      if (sourceMode === 'create') {
        res = await fetch('/_efsdb/api/explorer/create-component', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name.trim(),
            framework,
            env: envContext
          })
        });
      } else {
        // Use FormData for both github and upload to send file if needed
        const formData = new FormData();
        formData.append('name', name.trim());
        formData.append('env', envContext);
        formData.append('source', sourceMode);

        if (sourceMode === 'github') {
          formData.append('githubUrl', githubUrl.trim());
        } else if (sourceMode === 'upload' && archiveFile) {
          formData.append('archive', archiveFile);
        }

        res = await fetch('/_efsdb/api/explorer/import-component', {
          method: 'POST',
          body: formData
        });
      }

      let data;
      try {
        data = await res.json();
      } catch (e) {
        data = { error: { message: 'Invalid response from server' } };
      }

      if (!res.ok || data.error) {
        throw new Error(data?.error?.message || `HTTP ${res.status}`);
      }

      open = false;
      window.location.reload();
    } catch (err: unknown) {
      errorMsg = err instanceof Error ? err.message : 'An unknown error occurred.';
    } finally {
      loading = false;
    }
  }

  function handleCancel() {
    open = false;
  }

  function handleFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      archiveFile = target.files[0];
    } else {
      archiveFile = null;
    }
  }
</script>

<ToolWindow
  title="Component Creator"
  bind:open
  modal={false}
  defaultWidth={defaultWindowWidth}
  defaultHeight={380}
  defaultX={defaultWindowX}
  defaultY={defaultWindowY}
  onClose={() => (open = false)}
>
  <div class="creator-content">
    <div class="header">
      <div class="eyebrow">Component Creator</div>
      <h3 class="title">New Component</h3>
      <p class="copy">
        Create a new component to use in your routes, or import an existing one.
      </p>
    </div>

    <div class="mode-tabs">
      <button 
        type="button" 
        class="tab {sourceMode === 'create' ? 'active' : ''}" 
        onclick={() => sourceMode = 'create'}
      >Template</button>
      <button 
        type="button" 
        class="tab {sourceMode === 'github' ? 'active' : ''}" 
        onclick={() => sourceMode = 'github'}
      >GitHub</button>
      <button 
        type="button" 
        class="tab {sourceMode === 'upload' ? 'active' : ''}" 
        onclick={() => sourceMode = 'upload'}
      >Upload</button>
    </div>

    {#if errorMsg}
      <div class="error-msg">{errorMsg}</div>
    {/if}

    <form class="form-grid" onsubmit={handleSubmit}>
      <label class="field-label">
        <span class="label-text">Component Name</span>
        <input 
          name="name" 
          type="text" 
          autocomplete="off" 
          spellcheck="false" 
          placeholder="my-component" 
          required 
          bind:value={name}
          disabled={loading}
          class="input-field" 
        />
      </label>

      {#if sourceMode === 'create'}
        <label class="field-label">
          <span class="label-text">Framework</span>
          <select 
            name="framework" 
            bind:value={framework}
            disabled={loading}
            class="input-field"
          >
            <option value="svelte">Svelte</option>
            <option value="sveltekit">SvelteKit</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
          </select>
        </label>
      {/if}

      {#if sourceMode === 'github'}
        <label class="field-label">
          <span class="label-text">GitHub Repository URL</span>
          <input 
            name="githubUrl" 
            type="url" 
            autocomplete="off" 
            spellcheck="false" 
            placeholder="https://github.com/user/repo" 
            required 
            bind:value={githubUrl}
            disabled={loading}
            class="input-field" 
          />
        </label>
      {/if}

      {#if sourceMode === 'upload'}
        <label class="field-label">
          <span class="label-text">Archive File (.zip, .tar.gz)</span>
          <input 
            type="file" 
            accept=".zip,.tar,.tar.gz,.tgz" 
            required 
            disabled={loading}
            class="input-field file-input"
            onchange={handleFileChange}
          />
        </label>
      {/if}

      <div class="actions">
        <button type="button" class="ghost-button" onclick={handleCancel} disabled={loading}>Cancel</button>
        <button type="submit" class="pill-button" disabled={loading}>
          {loading ? 'Creating...' : 'Create Component'}
        </button>
      </div>
    </form>
  </div>
</ToolWindow>

<style>
  .creator-content {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    color: var(--shell-text, #0f172a);
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--shell-muted, #64748b);
  }

  .title {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
  }

  .copy {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--shell-muted, #64748b);
  }

  .form-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .field-label {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .label-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--shell-muted, #64748b);
  }

  .input-field {
    padding: 0.5rem 0.75rem;
    background: var(--shell-input-bg, #ffffff);
    border: 1px solid var(--shell-border, #e2e8f0);
    border-radius: 0.375rem;
    color: var(--shell-text, #0f172a);
    font-family: inherit;
    font-size: 0.875rem;
    transition: border-color 0.15s, box-shadow 0.15s;
  }

  .input-field:focus {
    outline: none;
    border-color: var(--shell-border-strong, #cbd5e1);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 30%);
  }

  .input-field:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .ghost-button {
    background: transparent;
    border: none;
    color: var(--shell-text, #0f172a);
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s;
  }

  .ghost-button:hover:not(:disabled) {
    background: var(--shell-hover-bg, rgba(0,0,0,0.05));
  }

  .ghost-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .pill-button {
    background: var(--shell-primary, #0f172a);
    color: var(--shell-primary-text, #ffffff);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.15s, transform 0.15s;
  }

  .pill-button:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  .pill-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .mode-tabs {
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem;
    background: var(--shell-inset-bg, rgba(0,0,0,0.05));
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .tab {
    flex: 1;
    background: transparent;
    border: none;
    padding: 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--shell-muted, #64748b);
    cursor: pointer;
    transition: all 0.2s;
  }

  .tab:hover {
    color: var(--shell-text, #0f172a);
  }

  .tab.active {
    background: var(--shell-surface, #ffffff);
    color: var(--shell-text, #0f172a);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .file-input {
    padding: 0.4rem;
  }

  .error-msg {
    padding: 0.5rem 0.75rem;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.2);
    border-radius: 0.375rem;
    color: #ef4444;
    font-size: 0.875rem;
  }
</style>
