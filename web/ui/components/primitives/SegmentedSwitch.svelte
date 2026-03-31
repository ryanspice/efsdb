<script lang="ts">
  type Item = {
    value: string;
    label: string;
    disabled?: boolean;
  };

  type Props = {
    ariaLabel?: string;
    value: string;
    items: Item[];
    onSelect?: (value: string) => void;
  };

  let {
    ariaLabel = 'Segmented control',
    value,
    items,
    onSelect
  }: Props = $props();
</script>

<div class="segmented-switch" role="group" aria-label={ariaLabel}>
  {#each items as item (item.value)}
    <button
      type="button"
      class:selected={item.value === value}
      class="segment"
      disabled={item.disabled}
      aria-pressed={item.value === value}
      onclick={() => onSelect?.(item.value)}
    >
      {item.label}
    </button>
  {/each}
</div>

<style>
  .segmented-switch {
    display: inline-flex;
    padding: 3px;
    background: var(--efs-bg-surface-2, rgba(0, 0, 0, 0.05));
    border-radius: 999px;
  }

  .segment {
    border: none;
    background: transparent;
    padding: 0.35rem 1rem;
    border-radius: 999px;
    font-size: var(--efs-font-size-sm, 0.875rem);
    font-weight: 500;
    color: var(--efs-text-muted, #6b7280);
    cursor: pointer;
    transition: all 0.2s;
  }

  .segment:hover:not(:disabled):not(.selected) {
    color: var(--efs-text-primary, #111827);
  }

  .segment.selected {
    background: var(--efs-bg-surface-1, #ffffff);
    color: var(--efs-text-primary, #111827);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .segment:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
</style>
