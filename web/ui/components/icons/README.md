Shared button and chrome icon catalog for shell and admin surfaces.

- `appIconCatalog.ts`: SVG source, default variants, and alternate icon styles.
- `AppIcon.svelte`: mask-based renderer for using catalog icons inside buttons and toolbars.

Use `getAppIconMask()` when a surface already expects CSS masks, and `AppIcon.svelte` when the icon should inherit button color/layout directly.
