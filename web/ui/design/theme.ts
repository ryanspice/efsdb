import type { BootstrapTheme } from '@contracts/bootstrap';

export const themeDataAttribute = 'data-efs-theme';

export function applyThemeToHost(target: HTMLElement, theme: BootstrapTheme): void {
  document.documentElement.dataset.efsTheme = theme;
  target.dataset.efsTheme = theme;
  target.setAttribute('theme', theme);
}
