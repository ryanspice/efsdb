<svelte:options customElement="efsdb-prompt" />

<script lang="ts">
  import ToolWindow from '@ui/components/shell/ToolWindow.svelte';
  import { onMount } from 'svelte';

  let open = $state(false);
  let title = $state('');
  let message = $state('');
  let type = $state<'confirm' | 'input'>('confirm');
  let inputValue = $state('');
  let inputPlaceholder = $state('');
  let confirmLabel = $state('Confirm');
  let cancelLabel = $state('Cancel');
  let resolvePromise = $state<((value: any) => void) | null>(null);

  const defaultWindowWidth = typeof window !== 'undefined' ? 400 : 400;
  const defaultWindowX = typeof window !== 'undefined' ? Math.max(16, window.innerWidth / 2 - defaultWindowWidth / 2) : 120;
  const defaultWindowY = typeof window !== 'undefined' ? Math.max(16, window.innerHeight * 0.3) : 100;

  onMount(() => {
    const handlePrompt = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail) return;

      title = detail.title || 'Confirm';
      message = detail.message || '';
      type = detail.type === 'input' ? 'input' : 'confirm';
      inputValue = detail.defaultValue || '';
      inputPlaceholder = detail.placeholder || '';
      confirmLabel = detail.confirmLabel || 'Confirm';
      cancelLabel = detail.cancelLabel || 'Cancel';
      resolvePromise = detail.resolve || null;
      open = true;
    };

    window.addEventListener('efsdb:prompt', handlePrompt);

    return () => {
      window.removeEventListener('efsdb:prompt', handlePrompt);
    };
  });

  function handleConfirm() {
    if (resolvePromise) {
      resolvePromise(type === 'input' ? inputValue : true);
    }
    open = false;
  }

  function handleCancel() {
    if (resolvePromise) {
      resolvePromise(type === 'input' ? null : false);
    }
    open = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleConfirm();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  }
</script>

<ToolWindow
  title={title}
  bind:open
  modal={true}
  defaultWidth={defaultWindowWidth}
  defaultHeight={200}
  defaultX={defaultWindowX}
  defaultY={defaultWindowY}
  onClose={handleCancel}
>
  <div class="prompt-content">
    {#if message}
      <p class="message">{message}</p>
    {/if}

    {#if type === 'input'}
      <input
        type="text"
        bind:value={inputValue}
        placeholder={inputPlaceholder}
        class="input-field"
        onkeydown={handleKeydown}
        autofocus
      />
    {/if}

    <div class="actions">
      <button type="button" class="ghost-button" onclick={handleCancel}>{cancelLabel}</button>
      <button type="button" class="pill-button" onclick={handleConfirm}>{confirmLabel}</button>
    </div>
  </div>
</ToolWindow>

<style>
  .prompt-content {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    color: var(--shell-text, #0f172a);
  }

  .message {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
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
    width: 100%;
    box-sizing: border-box;
  }

  .input-field:focus {
    outline: none;
    border-color: var(--shell-border-strong, #cbd5e1);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 30%);
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

  .ghost-button:hover {
    background: var(--shell-hover-bg, rgba(0,0,0,0.05));
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

  .pill-button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
</style>