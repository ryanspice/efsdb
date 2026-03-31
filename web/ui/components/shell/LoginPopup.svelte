<script lang="ts">
  import WindowShell from './WindowShell.svelte';

  type Props = {
    open?: boolean;
    onClose?: () => void;
  };

  let {
    open = false,
    onClose
  }: Props = $props();

  // Center coordinates (rough approximation, WindowShell will handle its own positioning but we can initialize it)
  let x = $state(0);
  let y = $state(0);
  let width = $state(500);
  let height = $state(450);

  $effect(() => {
    if (open && typeof window !== 'undefined') {
      x = (window.innerWidth - width) / 2;
      y = (window.innerHeight - height) / 2;
    }
  });
</script>

{#if open}
  <div class="login-popup-backdrop">
    <WindowShell
      title="Session Expired"
      locked={true}
      chromeless={true}
      bind:x
      bind:y
      bind:width
      bind:height
      zIndex={9999}
      {onClose}
    >
      <div class="login-popup-content">
        <!-- We use the custom element here -->
        <efsdb-login></efsdb-login>
      </div>
    </WindowShell>
  </div>
{/if}

<style>
  .login-popup-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 9998;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
  }

  .login-popup-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
