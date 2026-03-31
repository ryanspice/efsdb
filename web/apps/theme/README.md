# EFSDB Theme Studio

Flat extract-in-place package for a floating Svelte custom element theme picker.

## Included files

- `vite.config.ts`
- `src/main.ts`
- `src/ThemeStudio.ce.svelte`
- `src/lib/themeStudioStore.ts`

## Extract

Extract this zip inside the target app folder so these files land directly in that folder root.

## Trigger example

```html
<button
  id="toolbar-theme-trigger"
  type="button"
  onclick="document.dispatchEvent(new CustomEvent('efsdb:theme-studio:toggle', { detail: { source: 'toolbar' } }))"
>
  Theme
</button>

<button
  id="fab-theme-trigger"
  type="button"
  onclick="document.dispatchEvent(new CustomEvent('efsdb:theme-studio:toggle', { detail: { source: 'fab' } }))"
>
  +
</button>

<efsdb-theme-studio></efsdb-theme-studio>
```
