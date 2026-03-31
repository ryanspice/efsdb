<script lang="ts">
  import {
    getAppIconMask,
    type AppIconName
  } from './appIconCatalog';

  type Props = {
    name: AppIconName;
    variant?: string;
    decorative?: boolean;
    label?: string;
    title?: string;
    size?: string;
    className?: string;
  };

  let {
    name,
    variant,
    decorative = true,
    label,
    title,
    size = '1rem',
    className = ''
  }: Props = $props();

  let mask = $derived(getAppIconMask(name, variant));
  let resolvedLabel = $derived(label ?? title ?? name);
</script>

<span
  class={`app-icon ${className}`.trim()}
  style:--icon-mask={mask}
  style:width={size}
  style:height={size}
  aria-hidden={decorative}
  aria-label={decorative ? undefined : resolvedLabel}
  role={decorative ? undefined : 'img'}
  title={title}
></span>

<style>
  .app-icon {
    display: inline-flex;
    flex: none;
    align-items: center;
    justify-content: center;
    background: currentColor;
    mask: var(--icon-mask) center / contain no-repeat;
    -webkit-mask: var(--icon-mask) center / contain no-repeat;
  }
</style>
