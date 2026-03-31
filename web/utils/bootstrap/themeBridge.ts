import type { BootstrapTheme } from '@contracts/bootstrap';

type WindowThemeBridge = Window & {
  getEfsdbTheme?: () => BootstrapTheme;
  setEfsdbTheme?: (theme: BootstrapTheme) => BootstrapTheme;
};

function themeWindow(): WindowThemeBridge {
  return window as WindowThemeBridge;
}

export function getTheme(): BootstrapTheme {
  const theme = themeWindow().getEfsdbTheme?.();
  return theme === 'light' || theme === 'green' ? theme : 'dark';
}

export function setTheme(theme: BootstrapTheme): BootstrapTheme {
  return themeWindow().setEfsdbTheme?.(theme) ?? theme;
}

export function onThemeChange(callback: (theme: BootstrapTheme) => void): () => void {
  const handler = (event: Event): void => {
    const detail = (event as CustomEvent<{ theme?: BootstrapTheme }>).detail;
    const theme = detail?.theme;
    callback(theme === 'light' || theme === 'green' ? theme : 'dark');
  };

  window.addEventListener('efsdb-themechange', handler as EventListener);
  return () => window.removeEventListener('efsdb-themechange', handler as EventListener);
}
