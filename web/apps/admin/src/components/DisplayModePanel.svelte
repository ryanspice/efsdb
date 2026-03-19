<script lang="ts">
  import type { AuthUser } from '@contracts/auth';

  type Props = {
    user: AuthUser | null;
    busy: boolean;
    onChange: (roleId: string) => void;
  };

  let { user, busy, onChange } = $props<Props>();
</script>

<article class="table-card" data-testid="admin-display-mode-panel">
  <div class="section-label">Display Mode</div>
  <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Impersonation-safe role switch</h2>
  <div class="mt-5 flex flex-wrap gap-3">
    {#each user?.availableDisplayModes ?? [] as mode (mode)}
      <button
        class={mode === user?.role ? 'pill-button' : 'ghost-button'}
        type="button"
        disabled={busy}
        onclick={() => onChange(mode)}
      >
        {mode}
      </button>
    {/each}
  </div>
  {#if user}
    <div class="mt-5 shell-copy">
      Actual role remains <strong>{user.actualRole}</strong>. Effective mode is <strong>{user.role}</strong>.
    </div>
  {/if}
</article>
