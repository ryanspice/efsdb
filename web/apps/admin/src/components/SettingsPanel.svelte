<script lang="ts">
  type Props = {
    settings: Record<string, unknown> | null;
  };

  let { settings } = $props<Props>();
</script>

<article class="table-card" data-testid="admin-settings-panel">
  <div class="section-label">Tenant Settings</div>
  <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">UI and explorer policy</h2>
  <div class="mt-5">
    <pre>{JSON.stringify(settings ?? {}, null, 2)}</pre>
  </div>
</article>
