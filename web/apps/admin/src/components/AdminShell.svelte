<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { NoticeState } from '../lib/types';

  type Props = {
    notice: NoticeState | null;
    loading: boolean;
    children?: Snippet;
  };

  let { notice, loading, children } = $props<Props>();
</script>

<section class="space-y-6">
  <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
    <div class="max-w-3xl">
      <div class="section-label">Tenant Admin</div>
      <h1 class="mt-4 page-title max-w-[14ch]">Users, roles, and display modes</h1>
    </div>
    <p class="shell-copy max-w-3xl text-sm leading-7">
      Tenant admins can provision new identities, define custom roles, switch their effective display mode, and inspect catalog/search contracts without changing the live seam.
    </p>
  </div>

  {#if loading}
    <div class="notice">Loading admin control-plane data…</div>
  {/if}

  {#if notice}
    <div class={notice.error ? 'flash-error' : 'notice'} data-testid="admin-notice">{notice.message}</div>
  {/if}

  {@render children?.()}
</section>
