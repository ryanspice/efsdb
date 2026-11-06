export type WindowButtonLayout =
  | 'mac'
  | 'windows-7'
  | 'windows-8'
  | 'windows-10'
  | 'windows-11'
  | 'ubuntu'
  | 'xubuntu'
  | 'gnome';
export type WindowSystemButtonPlacement = 'left' | 'right';
export type WindowSideResizeMode = 'anchored' | 'mirrored';
export type WindowChromeStyle =
  | 'solid'
  | 'transparent'
  | 'glass'
  | 'mica'
  | 'frost'
  | 'pane';

export type WindowThemePreset =
  | 'inherit'
  | 'aero'
  | 'windows-basic'
  | 'windows-vista'
  | 'windows-11-mica'
  | 'windows-10-flat'
  | 'slate'
  | 'paper'
  | 'windows-9x'
  | 'mac-os-x'
  | 'ios'
  | 'android'
  | 'ubuntu-yaru'
  | 'xubuntu'
  | 'gnome';
export type WindowFontPreset =
  | 'system'
  | 'segoe-ui'
  | 'mac-system'
  | 'ios-system'
  | 'android-system'
  | 'linux-system'
  | 'humanist'
  | 'serif'
  | 'mono';
export type WindowShiftDragAction = 'none' | 'pin';
export type WindowChromeThemeColor =
  | 'accent'
  | 'accent-strong'
  | 'accent-soft'
  | 'accent-secondary'
  | 'accent-secondary-soft';
export type WindowChromeGlossStyle = 'none' | 'windows-7' | 'vista' | 'kde' | 'mica';
export type WindowChromeBeamStyle =
  | 'none'
  | 'windows-7'
  | 'vista'
  | 'xp-luna'
  | 'windows-9x'
  | 'kde'
  | 'mica';
export type WindowTitleTone = 'auto' | 'light' | 'dark';
export type WindowTitleEffect = 'auto' | 'plain' | 'shadow' | 'glow' | 'emboss';
export type WindowDockLabelMode = 'hover' | 'always' | 'popout' | 'hidden';
export type WindowPageThemeSpread = 'contained' | 'expanded';

export type WindowFontPresetConfig = {
  id: WindowFontPreset;
  label: string;
  stack: string;
};

export type WindowSettings = {
  buttonLayout: WindowButtonLayout;
  systemButtonPlacement: WindowSystemButtonPlacement;
  sideResizeMode: WindowSideResizeMode;
  borderWidth: number;
  borderRadius: number;
  chromePadding: number;
  titleBarHeight: number;
  windowScale: number;
  chromeStyle: WindowChromeStyle;
  chromeTexture: boolean;
  chromeBeamStyle: WindowChromeBeamStyle;
  chromeBeamIntensity: number;
  chromeGlossStyle: WindowChromeGlossStyle;
  chromeGlossIntensity: number;
  chromeGlossSpacing: number;
  chromeColorize: boolean;
  chromeColorSource: WindowChromeThemeColor;
  chromeColorIntensity: number;
  alignment: 'left' | 'center' | 'right';
  titleTone: WindowTitleTone;
  titleEffect: WindowTitleEffect;
  snapRestoreOnRelease: boolean;
  shiftDragAction: WindowShiftDragAction;
  themePreset: WindowThemePreset;
  fontPreset: WindowFontPreset;
  globalEdgeDock: boolean;
  dockButtonSize: number;
  dockButtonWidth: number;
  dockIconScale: number;
  dockGap: number;
  dockOffset: number;
  dockLabelMode: WindowDockLabelMode;
  pageThemeSpread: WindowPageThemeSpread;
};

export type WindowThemePresetConfig = {
  id: WindowThemePreset;
  label: string;
  shadow: string;
  settings: Partial<Omit<WindowSettings, 'themePreset'>>;
};

export type WindowSettingsProfile = {
  id: string;
  label: string;
  settings: WindowSettings;
  custom?: boolean;
};

const SETTINGS_STORAGE_KEY = 'efsdb:window-settings';
const PROFILES_STORAGE_KEY = 'efsdb:window-settings:profiles';
export const WINDOW_SETTINGS_STORAGE_KEY = SETTINGS_STORAGE_KEY;

export const WINDOW_THEME_PRESETS: Record<WindowThemePreset, WindowThemePresetConfig> = {
  inherit: {
    id: 'inherit',
    label: 'Studio shell',
    shadow: '0 26px 60px rgba(0, 0, 0, 0.34)',
    settings: {
      buttonLayout: 'windows-11',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 18,
      chromePadding: 10,
      titleBarHeight: 44,
      windowScale: 100,
      chromeStyle: 'solid',
      chromeTexture: false,
      chromeBeamStyle: 'none',
      chromeBeamIntensity: 0,
      chromeGlossStyle: 'none',
      chromeGlossIntensity: 64,
      chromeGlossSpacing: 18,
      chromeColorize: false,
      chromeColorSource: 'accent',
      chromeColorIntensity: 48,
      alignment: 'center',
      titleTone: 'auto',
      titleEffect: 'auto',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'system'
    }
  },
  aero: {
    id: 'aero',
    label: 'Windows 7',
    shadow:
      '0 16px 34px rgba(0, 0, 0, 0.2), 0 28px 58px rgba(0, 0, 0, 0.24)',
    settings: {
      buttonLayout: 'windows-7',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 10,
      chromePadding: 9,
      titleBarHeight: 36,
      windowScale: 94,
      chromeStyle: 'pane',
      chromeTexture: true,
      chromeBeamStyle: 'windows-7',
      chromeBeamIntensity: 90,
      chromeGlossStyle: 'windows-7',
      chromeGlossIntensity: 54,
      chromeGlossSpacing: 18,
      chromeColorize: false,
      chromeColorSource: 'accent',
      chromeColorIntensity: 42,
      alignment: 'center',
      titleTone: 'dark',
      titleEffect: 'glow',
      snapRestoreOnRelease: true,
      shiftDragAction: 'pin',
      fontPreset: 'segoe-ui'
    }
  },
  'windows-basic': {
    id: 'windows-basic',
    label: 'Windows 7 Basic',
    shadow:
      '0 14px 30px rgba(0, 0, 0, 0.18), 0 24px 46px rgba(0, 0, 0, 0.2)',
    settings: {
      buttonLayout: 'windows-7',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 7,
      chromePadding: 7,
      titleBarHeight: 34,
      windowScale: 94,
      chromeStyle: 'solid',
      chromeTexture: false,
      chromeBeamStyle: 'none',
      chromeBeamIntensity: 0,
      chromeGlossStyle: 'none',
      chromeGlossIntensity: 8,
      chromeGlossSpacing: 18,
      chromeColorize: false,
      chromeColorSource: 'accent',
      chromeColorIntensity: 46,
      alignment: 'left',
      titleTone: 'dark',
      titleEffect: 'plain',
      snapRestoreOnRelease: true,
      shiftDragAction: 'pin',
      fontPreset: 'segoe-ui'
    }
  },
  'windows-vista': {
    id: 'windows-vista',
    label: 'Windows Vista pane',
    shadow:
      '0 18px 38px rgba(0, 0, 0, 0.24), 0 34px 62px rgba(0, 0, 0, 0.24)',
    settings: {
      buttonLayout: 'windows-7',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 2,
      borderRadius: 10,
      chromePadding: 11,
      titleBarHeight: 39,
      windowScale: 98,
      chromeStyle: 'pane',
      chromeTexture: true,
      chromeBeamStyle: 'vista',
      chromeBeamIntensity: 96,
      chromeGlossStyle: 'vista',
      chromeGlossIntensity: 60,
      chromeGlossSpacing: 20,
      chromeColorize: true,
      chromeColorSource: 'accent',
      chromeColorIntensity: 68,
      alignment: 'center',
      titleTone: 'dark',
      titleEffect: 'glow',
      snapRestoreOnRelease: true,
      shiftDragAction: 'pin',
      fontPreset: 'segoe-ui'
    }
  },
  'windows-11-mica': {
    id: 'windows-11-mica',
    label: 'Windows 11 mica',
    shadow: '0 26px 64px rgba(0, 0, 0, 0.28)',
    settings: {
      buttonLayout: 'windows-11',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 16,
      chromePadding: 8,
      titleBarHeight: 42,
      windowScale: 100,
      chromeStyle: 'mica',
      chromeTexture: true,
      chromeBeamStyle: 'mica',
      chromeBeamIntensity: 74,
      chromeGlossStyle: 'mica',
      chromeGlossIntensity: 58,
      chromeGlossSpacing: 26,
      alignment: 'center',
      titleTone: 'light',
      titleEffect: 'shadow',
      snapRestoreOnRelease: true,
      shiftDragAction: 'pin',
      fontPreset: 'segoe-ui'
    }
  },
  'windows-10-flat': {
    id: 'windows-10-flat',
    label: 'Windows 10 flat',
    shadow: '0 20px 44px rgba(0, 0, 0, 0.24)',
    settings: {
      buttonLayout: 'windows-10',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 4,
      chromePadding: 2,
      titleBarHeight: 34,
      windowScale: 96,
      chromeStyle: 'solid',
      alignment: 'left',
      titleTone: 'light',
      titleEffect: 'plain',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'segoe-ui'
    }
  },
  slate: {
    id: 'slate',
    label: 'Slate studio',
    shadow: '0 24px 54px rgba(0, 0, 0, 0.3)',
    settings: {
      buttonLayout: 'windows-11',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 18,
      chromePadding: 10,
      titleBarHeight: 44,
      windowScale: 100,
      chromeStyle: 'solid',
      alignment: 'center',
      titleTone: 'light',
      titleEffect: 'shadow',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'system'
    }
  },
  paper: {
    id: 'paper',
    label: 'Paper shell',
    shadow: '0 22px 48px rgba(0, 0, 0, 0.22)',
    settings: {
      buttonLayout: 'windows-11',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 20,
      chromePadding: 12,
      titleBarHeight: 46,
      windowScale: 100,
      chromeStyle: 'solid',
      alignment: 'center',
      titleTone: 'dark',
      titleEffect: 'shadow',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'serif'
    }
  },
  'windows-9x': {
    id: 'windows-9x',
    label: 'Windows 9x',
    shadow:
      '0 14px 28px rgba(0, 0, 0, 0.24), inset 1px 1px 0 rgba(255, 255, 255, 0.26), inset -1px -1px 0 rgba(0, 0, 0, 0.28)',
    settings: {
      buttonLayout: 'windows-8',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 2,
      borderRadius: 0,
      chromePadding: 2,
      titleBarHeight: 28,
      windowScale: 92,
      chromeStyle: 'solid',
      chromeTexture: true,
      chromeBeamStyle: 'windows-9x',
      chromeBeamIntensity: 86,
      chromeGlossStyle: 'none',
      chromeGlossIntensity: 0,
      alignment: 'left',
      titleTone: 'light',
      titleEffect: 'emboss',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'system'
    }
  },
  'mac-os-x': {
    id: 'mac-os-x',
    label: 'Mac glass',
    shadow: '0 18px 42px rgba(0, 0, 0, 0.24), 0 32px 62px rgba(0, 0, 0, 0.2)',
    settings: {
      buttonLayout: 'mac',
      systemButtonPlacement: 'left',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 14,
      chromePadding: 10,
      titleBarHeight: 36,
      windowScale: 96,
      chromeStyle: 'glass',
      alignment: 'center',
      titleTone: 'dark',
      titleEffect: 'shadow',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'mac-system'
    }
  },
  ios: {
    id: 'ios',
    label: 'iOS frost',
    shadow: '0 26px 64px rgba(0, 0, 0, 0.18)',
    settings: {
      buttonLayout: 'windows-11',
      systemButtonPlacement: 'right',
      sideResizeMode: 'mirrored',
      borderWidth: 1,
      borderRadius: 22,
      chromePadding: 10,
      titleBarHeight: 44,
      windowScale: 102,
      chromeStyle: 'frost',
      alignment: 'center',
      titleTone: 'light',
      titleEffect: 'shadow',
      snapRestoreOnRelease: true,
      shiftDragAction: 'pin',
      fontPreset: 'ios-system'
    }
  },
  android: {
    id: 'android',
    label: 'Android material',
    shadow: '0 16px 26px rgba(0, 0, 0, 0.16), 0 26px 48px rgba(0, 0, 0, 0.18)',
    settings: {
      buttonLayout: 'windows-10',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 12,
      chromePadding: 4,
      titleBarHeight: 34,
      windowScale: 96,
      chromeStyle: 'solid',
      alignment: 'left',
      titleTone: 'light',
      titleEffect: 'plain',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'android-system'
    }
  },
  'ubuntu-yaru': {
    id: 'ubuntu-yaru',
    label: 'Ubuntu Yaru',
    shadow: '0 18px 36px rgba(0, 0, 0, 0.24), 0 28px 54px rgba(0, 0, 0, 0.18)',
    settings: {
      buttonLayout: 'ubuntu',
      systemButtonPlacement: 'left',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 14,
      chromePadding: 8,
      titleBarHeight: 34,
      windowScale: 96,
      chromeStyle: 'solid',
      alignment: 'center',
      titleTone: 'light',
      titleEffect: 'plain',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'linux-system'
    }
  },
  xubuntu: {
    id: 'xubuntu',
    label: 'Xubuntu glass',
    shadow: '0 18px 38px rgba(0, 0, 0, 0.22), 0 28px 54px rgba(0, 0, 0, 0.18)',
    settings: {
      buttonLayout: 'xubuntu',
      systemButtonPlacement: 'left',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 10,
      chromePadding: 7,
      titleBarHeight: 34,
      windowScale: 94,
      chromeStyle: 'glass',
      alignment: 'center',
      titleTone: 'light',
      titleEffect: 'shadow',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'linux-system'
    }
  },
  gnome: {
    id: 'gnome',
    label: 'GNOME Adwaita',
    shadow: '0 18px 40px rgba(0, 0, 0, 0.24)',
    settings: {
      buttonLayout: 'gnome',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 16,
      chromePadding: 8,
      titleBarHeight: 38,
      windowScale: 98,
      chromeStyle: 'solid',
      alignment: 'center',
      titleTone: 'light',
      titleEffect: 'plain',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'linux-system'
    }
  }
};

const LOCKED_WINDOW_THEME_PRESETS = new Set<WindowThemePreset>(['aero']);

export function isLockedWindowThemePreset(preset: WindowThemePreset): boolean {
  return LOCKED_WINDOW_THEME_PRESETS.has(preset);
}

function enforceLockedWindowThemeSettings(nextSettings: WindowSettings): WindowSettings {
  if (!isLockedWindowThemePreset(nextSettings.themePreset)) {
    return nextSettings;
  }

  const presetConfig = WINDOW_THEME_PRESETS[nextSettings.themePreset];
  if (!presetConfig) {
    return nextSettings;
  }

  return {
    ...nextSettings,
    ...presetConfig.settings,
    themePreset: nextSettings.themePreset
  };
}

export const WINDOW_FONT_PRESETS: Record<WindowFontPreset, WindowFontPresetConfig> = {
  system: {
    id: 'system',
    label: 'System UI',
    stack:
      '"Segoe UI Variable", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Ubuntu, system-ui, sans-serif'
  },
  'segoe-ui': {
    id: 'segoe-ui',
    label: 'Segoe UI',
    stack: '"Segoe UI Variable", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  'mac-system': {
    id: 'mac-system',
    label: 'macOS system',
    stack: '"SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif'
  },
  'ios-system': {
    id: 'ios-system',
    label: 'iOS system',
    stack: '"SF Pro Rounded", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif'
  },
  'android-system': {
    id: 'android-system',
    label: 'Android system',
    stack: 'Roboto, "Noto Sans", "Droid Sans", "Segoe UI", sans-serif'
  },
  'linux-system': {
    id: 'linux-system',
    label: 'Linux desktop',
    stack: 'Ubuntu, Cantarell, "Liberation Sans", "DejaVu Sans", sans-serif'
  },
  humanist: {
    id: 'humanist',
    label: 'Humanist',
    stack: '"Trebuchet MS", "Segoe UI Variable", "Segoe UI", sans-serif'
  },
  serif: {
    id: 'serif',
    label: 'Serif UI',
    stack: 'Georgia, "Times New Roman", serif'
  },
  mono: {
    id: 'mono',
    label: 'Mono display',
    stack: '"IBM Plex Mono", "Cascadia Code", Consolas, monospace'
  }
};

export const DEFAULT_WINDOW_SETTINGS: WindowSettings = {
  buttonLayout: 'windows-11',
  systemButtonPlacement: 'right',
  sideResizeMode: 'anchored',
  borderWidth: 1,
  borderRadius: 18,
  chromePadding: 12,
  titleBarHeight: 44,
  windowScale: 100,
  chromeStyle: 'solid',
  chromeTexture: false,
  chromeBeamStyle: 'none',
  chromeBeamIntensity: 0,
  chromeGlossStyle: 'none',
  chromeGlossIntensity: 68,
  chromeGlossSpacing: 18,
  chromeColorize: false,
  chromeColorSource: 'accent',
  chromeColorIntensity: 48,
  alignment: 'center',
  titleTone: 'auto',
  titleEffect: 'auto',
  snapRestoreOnRelease: false,
  shiftDragAction: 'pin',
  themePreset: 'inherit',
  fontPreset: 'system',
  globalEdgeDock: true,
  dockButtonSize: 50,
  dockButtonWidth: 50,
  dockIconScale: 100,
  dockGap: 10,
  dockOffset: 16,
  dockLabelMode: 'hover',
  pageThemeSpread: 'contained'
};

const subscribers = new Set<(settings: WindowSettings) => void>();

let settings: WindowSettings = hydrateWindowSettings();

function getStorageItem(key: string): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStorageItem(key: string, value: string) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore storage failures
  }
}

function normalizeWindowButtonLayout(value: WindowButtonLayout | string | undefined): WindowButtonLayout {
  switch (value) {
    case 'mac':
    case 'windows-7':
    case 'windows-8':
    case 'windows-10':
    case 'windows-11':
    case 'ubuntu':
    case 'xubuntu':
    case 'gnome':
      return value;
    case 'windows':
    default:
      return DEFAULT_WINDOW_SETTINGS.buttonLayout;
  }
}

function normalizeSystemButtonPlacement(
  value: WindowSystemButtonPlacement | string | undefined
): WindowSystemButtonPlacement {
  return value === 'left' ? 'left' : DEFAULT_WINDOW_SETTINGS.systemButtonPlacement;
}

function normalizeSideResizeMode(
  value: WindowSideResizeMode | string | undefined
): WindowSideResizeMode {
  return value === 'mirrored' ? 'mirrored' : DEFAULT_WINDOW_SETTINGS.sideResizeMode;
}

function normalizeWindowThemePreset(value: WindowThemePreset | string | undefined): WindowThemePreset {
  switch (value) {
    case 'inherit':
    case 'aero':
    case 'windows-basic':
    case 'windows-vista':
    case 'windows-11-mica':
    case 'windows-10-flat':
    case 'slate':
    case 'paper':
    case 'windows-9x':
    case 'mac-os-x':
    case 'ios':
    case 'android':
    case 'ubuntu-yaru':
    case 'xubuntu':
    case 'gnome':
      return value;
    default:
      return DEFAULT_WINDOW_SETTINGS.themePreset;
  }
}

function normalizeWindowFontPreset(value: WindowFontPreset | string | undefined): WindowFontPreset {
  switch (value) {
    case 'system':
    case 'segoe-ui':
    case 'mac-system':
    case 'ios-system':
    case 'android-system':
    case 'linux-system':
    case 'humanist':
    case 'serif':
    case 'mono':
      return value;
    default:
      return DEFAULT_WINDOW_SETTINGS.fontPreset;
  }
}

function normalizeShiftDragAction(
  value: WindowShiftDragAction | string | undefined
): WindowShiftDragAction {
  switch (value) {
    case 'none':
    case 'pin':
      return value;
    default:
      return DEFAULT_WINDOW_SETTINGS.shiftDragAction;
  }
}

function normalizeWindowChromeThemeColor(
  value: WindowChromeThemeColor | string | undefined
): WindowChromeThemeColor {
  switch (value) {
    case 'accent':
    case 'accent-strong':
    case 'accent-soft':
    case 'accent-secondary':
    case 'accent-secondary-soft':
      return value;
    default:
      return DEFAULT_WINDOW_SETTINGS.chromeColorSource;
  }
}

function normalizeWindowChromeGlossStyle(
  value: WindowChromeGlossStyle | string | undefined
): WindowChromeGlossStyle {
  switch (value) {
    case 'windows-7':
    case 'vista':
    case 'kde':
    case 'mica':
    case 'none':
      return value;
    default:
      return DEFAULT_WINDOW_SETTINGS.chromeGlossStyle;
  }
}

function normalizeWindowChromeBeamStyle(
  value: WindowChromeBeamStyle | string | undefined
): WindowChromeBeamStyle {
  switch (value) {
    case 'windows-7':
    case 'vista':
    case 'xp-luna':
    case 'windows-9x':
    case 'kde':
    case 'mica':
    case 'none':
      return value;
    default:
      return DEFAULT_WINDOW_SETTINGS.chromeBeamStyle;
  }
}

function normalizeWindowTitleTone(
  value: WindowTitleTone | string | undefined
): WindowTitleTone {
  switch (value) {
    case 'light':
    case 'dark':
    case 'auto':
      return value;
    default:
      return DEFAULT_WINDOW_SETTINGS.titleTone;
  }
}

function normalizeWindowTitleEffect(
  value: WindowTitleEffect | string | undefined
): WindowTitleEffect {
  switch (value) {
    case 'plain':
    case 'shadow':
    case 'glow':
    case 'emboss':
    case 'auto':
      return value;
    default:
      return DEFAULT_WINDOW_SETTINGS.titleEffect;
  }
}

function normalizeWindowDockLabelMode(
  value: WindowDockLabelMode | string | undefined
): WindowDockLabelMode {
  switch (value) {
    case 'always':
    case 'popout':
    case 'hidden':
    case 'hover':
      return value;
    default:
      return DEFAULT_WINDOW_SETTINGS.dockLabelMode;
  }
}

function normalizeWindowPageThemeSpread(
  value: WindowPageThemeSpread | string | undefined
): WindowPageThemeSpread {
  return value === 'expanded' ? 'expanded' : DEFAULT_WINDOW_SETTINGS.pageThemeSpread;
}

function normalizeNumber(
  value: unknown,
  fallback: number,
  minimum: number,
  maximum: number
): number {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return Math.max(minimum, Math.min(maximum, Math.round(parsed)));
}

function normalizeWindowSettings(value: Partial<WindowSettings> | null | undefined): WindowSettings {
  const beamStyle =
    value?.chromeBeamStyle == null && value?.chromeTexture
      ? value?.chromeGlossStyle === 'vista' ||
        value?.chromeGlossStyle === 'windows-7' ||
        value?.chromeGlossStyle === 'kde' ||
        value?.chromeGlossStyle === 'mica'
        ? value.chromeGlossStyle
        : value?.themePreset === 'windows-vista'
          ? 'vista'
          : value?.themePreset === 'windows-11-mica'
            ? 'mica'
            : value?.themePreset === 'windows-9x'
              ? 'windows-9x'
              : 'windows-7'
      : normalizeWindowChromeBeamStyle(value?.chromeBeamStyle);
  const glossStyle =
    value?.chromeGlossStyle == null && value?.chromeTexture
      ? value?.themePreset === 'windows-vista'
        ? 'vista'
        : value?.themePreset === 'windows-11-mica'
          ? 'mica'
          : 'windows-7'
      : normalizeWindowChromeGlossStyle(value?.chromeGlossStyle);

  return {
    buttonLayout: normalizeWindowButtonLayout(value?.buttonLayout),
    systemButtonPlacement: normalizeSystemButtonPlacement(value?.systemButtonPlacement),
    sideResizeMode: normalizeSideResizeMode(value?.sideResizeMode),
    borderWidth: normalizeNumber(
      value?.borderWidth,
      DEFAULT_WINDOW_SETTINGS.borderWidth,
      0,
      12
    ),
    borderRadius: normalizeNumber(
      value?.borderRadius,
      DEFAULT_WINDOW_SETTINGS.borderRadius,
      0,
      32
    ),
    chromePadding: normalizeNumber(
      value?.chromePadding,
      DEFAULT_WINDOW_SETTINGS.chromePadding,
      0,
      20
    ),
    titleBarHeight: normalizeNumber(
      value?.titleBarHeight,
      DEFAULT_WINDOW_SETTINGS.titleBarHeight,
      28,
      72
    ),
    windowScale: normalizeNumber(
      value?.windowScale,
      DEFAULT_WINDOW_SETTINGS.windowScale,
      75,
      140
    ),
    chromeStyle:
      value?.chromeStyle === 'glass' ||
      value?.chromeStyle === 'transparent' ||
      value?.chromeStyle === 'mica' ||
      value?.chromeStyle === 'frost' ||
      value?.chromeStyle === 'pane'
        ? value.chromeStyle
        : DEFAULT_WINDOW_SETTINGS.chromeStyle,
    chromeTexture:
      beamStyle !== 'none' ||
      (typeof value?.chromeTexture === 'boolean'
        ? value.chromeTexture
        : DEFAULT_WINDOW_SETTINGS.chromeTexture),
    chromeBeamStyle: beamStyle,
    chromeBeamIntensity: normalizeNumber(
      value?.chromeBeamIntensity,
      DEFAULT_WINDOW_SETTINGS.chromeBeamIntensity,
      0,
      100
    ),
    chromeGlossStyle: glossStyle,
    chromeGlossIntensity: normalizeNumber(
      value?.chromeGlossIntensity,
      DEFAULT_WINDOW_SETTINGS.chromeGlossIntensity,
      0,
      100
    ),
    chromeGlossSpacing: normalizeNumber(
      value?.chromeGlossSpacing,
      DEFAULT_WINDOW_SETTINGS.chromeGlossSpacing,
      8,
      36
    ),
    chromeColorize:
      typeof value?.chromeColorize === 'boolean'
        ? value.chromeColorize
        : DEFAULT_WINDOW_SETTINGS.chromeColorize,
    chromeColorSource: normalizeWindowChromeThemeColor(value?.chromeColorSource),
    chromeColorIntensity: normalizeNumber(
      value?.chromeColorIntensity,
      DEFAULT_WINDOW_SETTINGS.chromeColorIntensity,
      0,
      100
    ),
    alignment:
      value?.alignment === 'left' || value?.alignment === 'right'
        ? value.alignment
        : DEFAULT_WINDOW_SETTINGS.alignment,
    titleTone: normalizeWindowTitleTone(value?.titleTone),
    titleEffect: normalizeWindowTitleEffect(value?.titleEffect),
    snapRestoreOnRelease:
      typeof value?.snapRestoreOnRelease === 'boolean'
        ? value.snapRestoreOnRelease
        : DEFAULT_WINDOW_SETTINGS.snapRestoreOnRelease,
    shiftDragAction: normalizeShiftDragAction(value?.shiftDragAction),
    themePreset: normalizeWindowThemePreset(value?.themePreset),
    fontPreset: normalizeWindowFontPreset(value?.fontPreset),
    globalEdgeDock:
      typeof value?.globalEdgeDock === 'boolean'
        ? value.globalEdgeDock
        : DEFAULT_WINDOW_SETTINGS.globalEdgeDock,
    dockButtonSize: normalizeNumber(
      value?.dockButtonSize,
      DEFAULT_WINDOW_SETTINGS.dockButtonSize,
      40,
      72
    ),
    dockButtonWidth: normalizeNumber(
      value?.dockButtonWidth,
      DEFAULT_WINDOW_SETTINGS.dockButtonWidth,
      40,
      168
    ),
    dockIconScale: normalizeNumber(
      value?.dockIconScale,
      DEFAULT_WINDOW_SETTINGS.dockIconScale,
      70,
      160
    ),
    dockGap: normalizeNumber(value?.dockGap, DEFAULT_WINDOW_SETTINGS.dockGap, 4, 24),
    dockOffset: normalizeNumber(value?.dockOffset, DEFAULT_WINDOW_SETTINGS.dockOffset, 8, 36),
    dockLabelMode: normalizeWindowDockLabelMode(value?.dockLabelMode),
    pageThemeSpread: normalizeWindowPageThemeSpread(value?.pageThemeSpread)
  };
}

export function areWindowSettingsEqual(left: WindowSettings, right: WindowSettings): boolean {
  return (
    left.buttonLayout === right.buttonLayout &&
    left.systemButtonPlacement === right.systemButtonPlacement &&
    left.sideResizeMode === right.sideResizeMode &&
    left.borderWidth === right.borderWidth &&
    left.borderRadius === right.borderRadius &&
    left.chromePadding === right.chromePadding &&
    left.titleBarHeight === right.titleBarHeight &&
    left.windowScale === right.windowScale &&
    left.chromeStyle === right.chromeStyle &&
    left.chromeTexture === right.chromeTexture &&
    left.chromeBeamStyle === right.chromeBeamStyle &&
    left.chromeBeamIntensity === right.chromeBeamIntensity &&
    left.chromeGlossStyle === right.chromeGlossStyle &&
    left.chromeGlossIntensity === right.chromeGlossIntensity &&
    left.chromeGlossSpacing === right.chromeGlossSpacing &&
    left.chromeColorize === right.chromeColorize &&
    left.chromeColorSource === right.chromeColorSource &&
    left.chromeColorIntensity === right.chromeColorIntensity &&
    left.alignment === right.alignment &&
    left.titleTone === right.titleTone &&
    left.titleEffect === right.titleEffect &&
    left.snapRestoreOnRelease === right.snapRestoreOnRelease &&
    left.shiftDragAction === right.shiftDragAction &&
    left.themePreset === right.themePreset &&
    left.fontPreset === right.fontPreset &&
    left.globalEdgeDock === right.globalEdgeDock &&
    left.dockButtonSize === right.dockButtonSize &&
    left.dockButtonWidth === right.dockButtonWidth &&
    left.dockIconScale === right.dockIconScale &&
    left.dockGap === right.dockGap &&
    left.dockOffset === right.dockOffset &&
    left.dockLabelMode === right.dockLabelMode &&
    left.pageThemeSpread === right.pageThemeSpread
  );
}

function areWindowThemeSettingsEqual(left: WindowSettings, right: WindowSettings): boolean {
  return (
    left.buttonLayout === right.buttonLayout &&
    left.systemButtonPlacement === right.systemButtonPlacement &&
    left.sideResizeMode === right.sideResizeMode &&
    left.borderWidth === right.borderWidth &&
    left.borderRadius === right.borderRadius &&
    left.chromePadding === right.chromePadding &&
    left.titleBarHeight === right.titleBarHeight &&
    left.windowScale === right.windowScale &&
    left.chromeStyle === right.chromeStyle &&
    left.chromeTexture === right.chromeTexture &&
    left.chromeBeamStyle === right.chromeBeamStyle &&
    left.chromeBeamIntensity === right.chromeBeamIntensity &&
    left.chromeGlossStyle === right.chromeGlossStyle &&
    left.chromeGlossIntensity === right.chromeGlossIntensity &&
    left.chromeGlossSpacing === right.chromeGlossSpacing &&
    left.chromeColorize === right.chromeColorize &&
    left.chromeColorSource === right.chromeColorSource &&
    left.chromeColorIntensity === right.chromeColorIntensity &&
    left.alignment === right.alignment &&
    left.titleTone === right.titleTone &&
    left.titleEffect === right.titleEffect &&
    left.snapRestoreOnRelease === right.snapRestoreOnRelease &&
    left.shiftDragAction === right.shiftDragAction &&
    left.themePreset === right.themePreset &&
    left.fontPreset === right.fontPreset
  );
}

export function resolveWindowTitleTone(settingsLike: Pick<WindowSettings, 'themePreset' | 'titleTone'>): Exclude<WindowTitleTone, 'auto'> {
  if (settingsLike.titleTone !== 'auto') {
    return settingsLike.titleTone;
  }

  switch (settingsLike.themePreset) {
    case 'aero':
    case 'windows-basic':
    case 'windows-vista':
    case 'paper':
    case 'mac-os-x':
      return 'dark';
    default:
      return 'light';
  }
}

export function resolveWindowTitleEffect(
  settingsLike: Pick<WindowSettings, 'themePreset' | 'titleEffect'>
): Exclude<WindowTitleEffect, 'auto'> {
  if (settingsLike.titleEffect !== 'auto') {
    return settingsLike.titleEffect;
  }

  switch (settingsLike.themePreset) {
    case 'aero':
    case 'windows-vista':
      return 'glow';
    case 'windows-basic':
      return 'plain';
    case 'windows-9x':
      return 'emboss';
    case 'inherit':
    case 'windows-10-flat':
    case 'android':
    case 'ubuntu-yaru':
    case 'gnome':
      return 'plain';
    default:
      return 'shadow';
  }
}

export function createWindowThemePresetSettings(preset: WindowThemePreset): WindowSettings {
  const config = WINDOW_THEME_PRESETS[preset] ?? WINDOW_THEME_PRESETS.inherit;
  return enforceLockedWindowThemeSettings(
    normalizeWindowSettings({
      ...DEFAULT_WINDOW_SETTINGS,
      ...config.settings,
      themePreset: config.id
    })
  );
}

export function findMatchingWindowThemePreset(settingsToMatch: WindowSettings): WindowThemePreset | null {
  const effectiveSettingsToMatch = enforceLockedWindowThemeSettings(settingsToMatch);

  for (const preset of Object.keys(WINDOW_THEME_PRESETS) as WindowThemePreset[]) {
    if (areWindowThemeSettingsEqual(effectiveSettingsToMatch, createWindowThemePresetSettings(preset))) {
      return preset;
    }
  }

  return null;
}

export function resolveWindowPresetShadow(preset: WindowThemePreset): string {
  return (WINDOW_THEME_PRESETS[preset] ?? WINDOW_THEME_PRESETS.inherit).shadow;
}

export function resolveWindowChromeThemeColorToken(source: WindowChromeThemeColor): string {
  switch (source) {
    case 'accent-strong':
      return 'var(--accent-strong, color-mix(in srgb, var(--accent, #5b8cff), black 16%))';
    case 'accent-soft':
      return 'var(--accent-soft, color-mix(in srgb, var(--accent, #5b8cff), white 78%))';
    case 'accent-secondary':
      return 'var(--accent-secondary, color-mix(in srgb, var(--accent, #5b8cff), #8b5cf6 34%))';
    case 'accent-secondary-soft':
      return 'var(--accent-secondary-soft, color-mix(in srgb, var(--accent-secondary, color-mix(in srgb, var(--accent, #5b8cff), #8b5cf6 34%)), white 78%))';
    case 'accent':
    default:
      return 'var(--accent, var(--shell-primary, #5b8cff))';
  }
}

export function buildWindowChromeCssVars(
  nextSettings: WindowSettings
): Record<string, string> {
  const effectiveSettings = enforceLockedWindowThemeSettings(nextSettings);
  const beamStrength = effectiveSettings.chromeTexture
    ? Math.max(0, Math.min(1, effectiveSettings.chromeBeamIntensity / 100))
    : 0;
  const beamStyle = effectiveSettings.chromeTexture ? effectiveSettings.chromeBeamStyle : 'none';
  const beamOpacityFactor =
    beamStyle === 'vista'
      ? 0.98
      : beamStyle === 'windows-7'
        ? 0.94
        : beamStyle === 'xp-luna'
          ? 0.82
          : beamStyle === 'windows-9x'
            ? 0.72
            : beamStyle === 'kde'
              ? 0.7
              : beamStyle === 'mica'
                ? 0.62
                : 0;
  const chromeTextureOpacity = `${beamOpacityFactor * beamStrength}`;
  const glossStrength = Math.max(0, Math.min(1, effectiveSettings.chromeGlossIntensity / 100));
  const chromeColorizeOpacity = effectiveSettings.chromeColorize
    ? `${Math.max(0, Math.min(0.88, effectiveSettings.chromeColorIntensity / 100))}`
    : '0';
  const themeColor = resolveWindowChromeThemeColorToken(effectiveSettings.chromeColorSource);
  const colorizeIntensity = normalizeNumber(effectiveSettings.chromeColorIntensity, 48, 0, 100);
  const win7TintWeight = effectiveSettings.chromeColorize
    ? Math.round(34 + (colorizeIntensity / 100) * 42)
    : 0;
  const win7WindowBg = effectiveSettings.chromeColorize
    ? `color-mix(in srgb, #4580c4 ${100 - win7TintWeight}%, ${themeColor} ${win7TintWeight}%)`
    : '#4580c4';
  const vars: Record<string, string> = {
    '--efs-window-chrome-texture-opacity': chromeTextureOpacity,
    '--efs-window-chrome-beam-intensity': `${beamStrength}`,
    '--efs-window-chrome-gloss-intensity': `${glossStrength}`,
    '--efs-window-chrome-gloss-spacing': `${effectiveSettings.chromeGlossSpacing}px`,
    '--efs-window-chrome-colorize-opacity': chromeColorizeOpacity,
    '--efs-window-chrome-tint': themeColor,
    '--efs-window-titlebar-height': `${effectiveSettings.titleBarHeight}px`,
    '--efs-window-shell-scale': `${effectiveSettings.windowScale / 100}`,
    '--efs-widget-chrome-texture-opacity': chromeTextureOpacity,
    '--efs-widget-chrome-beam-intensity': `${beamStrength}`,
    '--efs-widget-chrome-gloss-intensity': `${glossStrength}`,
    '--efs-widget-chrome-gloss-spacing': `${effectiveSettings.chromeGlossSpacing}px`,
    '--efs-widget-chrome-colorize-opacity': chromeColorizeOpacity,
    '--efs-widget-theme-tint': themeColor,
    '--efs-widget-titlebar-height': `${effectiveSettings.titleBarHeight}px`,
    '--efs-widget-shell-scale': `${effectiveSettings.windowScale / 100}`,
    '--efs-win7-window-bg': win7WindowBg
  };

  if (!effectiveSettings.chromeColorize) {
    return vars;
  }

  const intensity = colorizeIntensity;
  const windowPanelTint = Math.round((intensity / 100) * 34);
  const windowSurfaceTint = Math.round((intensity / 100) * 26);
  const windowBorderTint = Math.round(10 + (intensity / 100) * 46);
  const windowHoverTint = Math.round(6 + (intensity / 100) * 32);
  const widgetPanelTint = Math.round((intensity / 100) * 28);
  const widgetSurfaceTint = Math.round((intensity / 100) * 22);
  const widgetBorderTint = Math.round(12 + (intensity / 100) * 46);
  const widgetHoverTint = Math.round(10 + (intensity / 100) * 34);
  const shadowTintOpacity = Math.round(90 - (intensity / 100) * 16);
  const widgetShadowTintOpacity = Math.round(92 - (intensity / 100) * 18);

  vars['--efs-window-theme-panel'] = `color-mix(in srgb, var(--shell-panel-solid, var(--shell-panel-bg, #ffffff)) ${100 - windowPanelTint}%, ${themeColor} ${windowPanelTint}%)`;
  vars['--efs-window-theme-surface'] = `color-mix(in srgb, var(--shell-panel-solid-subtle, var(--shell-soft-bg, #f8fafc)) ${100 - windowSurfaceTint}%, ${themeColor} ${windowSurfaceTint}%)`;
  vars['--efs-window-theme-border'] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - windowBorderTint}%, ${themeColor} ${windowBorderTint}%)`;
  vars['--efs-window-theme-hover'] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - windowHoverTint}%, ${themeColor} ${windowHoverTint}%)`;
  vars['--efs-window-theme-shadow'] = `0 0 0 1px color-mix(in srgb, ${themeColor}, transparent ${shadowTintOpacity}%), var(--efs-window-shell-shadow)`;
  vars['--efs-widget-theme-panel'] = `color-mix(in srgb, var(--shell-panel, var(--shell-panel-bg, #ffffff)) ${100 - widgetPanelTint}%, ${themeColor} ${widgetPanelTint}%)`;
  vars['--efs-widget-theme-surface'] = `color-mix(in srgb, var(--shell-surface, var(--shell-soft-bg, #f8fafc)) ${100 - widgetSurfaceTint}%, ${themeColor} ${widgetSurfaceTint}%)`;
  vars['--efs-widget-theme-border'] = `color-mix(in srgb, var(--shell-border, #dbe4f0) ${100 - widgetBorderTint}%, ${themeColor} ${widgetBorderTint}%)`;
  vars['--efs-widget-theme-hover'] = `color-mix(in srgb, var(--shell-row-hover, rgba(125, 211, 252, 0.12)) ${100 - widgetHoverTint}%, ${themeColor} ${widgetHoverTint}%)`;
  vars['--efs-widget-theme-shadow'] = `0 18px 44px color-mix(in srgb, ${themeColor}, transparent ${widgetShadowTintOpacity}%), var(--efs-widget-shadow, var(--shell-card-shadow))`;

  return vars;
}

function hydrateWindowSettings(): WindowSettings {
  const raw = getStorageItem(SETTINGS_STORAGE_KEY);

  if (!raw) {
    applyWindowSettingsToDocument(DEFAULT_WINDOW_SETTINGS);
    return { ...DEFAULT_WINDOW_SETTINGS };
  }

  try {
    const parsed = JSON.parse(raw) as Partial<WindowSettings>;
    const hydrated = enforceLockedWindowThemeSettings(normalizeWindowSettings(parsed));
    applyWindowSettingsToDocument(hydrated);
    return hydrated;
  } catch {
    applyWindowSettingsToDocument(DEFAULT_WINDOW_SETTINGS);
    return { ...DEFAULT_WINDOW_SETTINGS };
  }
}

function getDefaultProfiles(): WindowSettingsProfile[] {
  return [
    {
      id: 'profile-balanced',
      label: 'Balanced',
      settings: createWindowThemePresetSettings('inherit')
    },
    {
      id: 'profile-aero',
      label: 'Windows 7',
      settings: createWindowThemePresetSettings('aero')
    },
    {
      id: 'profile-basic',
      label: 'Windows 7 Basic',
      settings: createWindowThemePresetSettings('windows-basic')
    },
    {
      id: 'profile-flat',
      label: 'Flat edge',
      settings: createWindowThemePresetSettings('windows-10-flat')
    },
    {
      id: 'profile-paper',
      label: 'Paper',
      settings: createWindowThemePresetSettings('paper')
    }
  ];
}

function readCustomProfiles(): WindowSettingsProfile[] {
  const raw = getStorageItem(PROFILES_STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as Array<Partial<WindowSettingsProfile>>;
    return parsed
      .filter((profile): profile is Partial<WindowSettingsProfile> & { id: string; label: string } =>
        typeof profile?.id === 'string' && typeof profile?.label === 'string'
      )
      .map((profile) => ({
        id: profile.id,
        label: profile.label,
        settings: enforceLockedWindowThemeSettings(normalizeWindowSettings(profile.settings)),
        custom: true
      }));
  } catch {
    return [];
  }
}

function writeCustomProfiles(profiles: WindowSettingsProfile[]) {
  setStorageItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
}

function slugifyProfileName(label: string): string {
  return label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 36);
}

function collectAccessibleWindows(startWindow: Window | null | undefined): Window[] {
  if (!startWindow) {
    return [];
  }

  const queue: Window[] = [startWindow];
  const visited = new Set<Window>();

  while (queue.length > 0) {
    const currentWindow = queue.shift();
    if (!currentWindow || visited.has(currentWindow)) {
      continue;
    }

    visited.add(currentWindow);

    try {
      const parentWindow = currentWindow.parent;
      if (parentWindow && parentWindow !== currentWindow && !visited.has(parentWindow)) {
        queue.push(parentWindow);
      }
    } catch {
      // ignore cross-origin parents
    }

    try {
      for (let index = 0; index < currentWindow.frames.length; index += 1) {
        const frameWindow = currentWindow.frames[index];
        if (frameWindow && !visited.has(frameWindow)) {
          queue.push(frameWindow);
        }
      }
    } catch {
      // ignore cross-origin frames
    }
  }

  return [...visited];
}

function applyWindowSettingsToRoot(targetDocument: Document, nextSettings: WindowSettings) {
  const effectiveSettings = enforceLockedWindowThemeSettings(nextSettings);
  const rootStyle = targetDocument.documentElement.style;
  const rootElement = targetDocument.documentElement;
  const glossStyle = effectiveSettings.chromeGlossStyle;
  const beamStyle = effectiveSettings.chromeTexture ? effectiveSettings.chromeBeamStyle : 'none';
  const dockButtonWidth = Math.max(effectiveSettings.dockButtonSize, effectiveSettings.dockButtonWidth);
  const fontPreset = WINDOW_FONT_PRESETS[effectiveSettings.fontPreset] ?? WINDOW_FONT_PRESETS.system;
  const presetShadow = resolveWindowPresetShadow(effectiveSettings.themePreset);
  const chromeVars = buildWindowChromeCssVars(effectiveSettings);
  const chromeVarNames = [
    '--efs-window-chrome-texture-opacity',
    '--efs-window-chrome-beam-intensity',
    '--efs-window-chrome-gloss-intensity',
    '--efs-window-chrome-gloss-spacing',
    '--efs-window-chrome-colorize-opacity',
    '--efs-window-chrome-tint',
    '--efs-window-titlebar-height',
    '--efs-window-shell-scale',
    '--efs-window-theme-panel',
    '--efs-window-theme-surface',
    '--efs-window-theme-border',
    '--efs-window-theme-shadow',
    '--efs-window-theme-hover',
    '--efs-widget-chrome-texture-opacity',
    '--efs-widget-chrome-beam-intensity',
    '--efs-widget-chrome-gloss-intensity',
    '--efs-widget-chrome-gloss-spacing',
    '--efs-widget-chrome-colorize-opacity',
    '--efs-widget-theme-tint',
    '--efs-widget-titlebar-height',
    '--efs-widget-shell-scale',
    '--efs-widget-theme-panel',
    '--efs-widget-theme-surface',
    '--efs-widget-theme-border',
    '--efs-widget-theme-shadow',
    '--efs-widget-theme-hover'
  ];

  rootStyle.setProperty('--efs-font-sans', fontPreset.stack);
  rootStyle.setProperty('--shell-font-sans', fontPreset.stack);
  rootStyle.setProperty('--efs-window-font-family', fontPreset.stack);
  rootStyle.setProperty('--efs-window-border-width', `${effectiveSettings.borderWidth}px`);
  rootStyle.setProperty('--efs-window-radius', `${effectiveSettings.borderRadius}px`);
  rootStyle.setProperty('--efs-window-chrome-padding', `${effectiveSettings.chromePadding}px`);
  rootStyle.setProperty('--efs-window-titlebar-height', `${effectiveSettings.titleBarHeight}px`);
  rootStyle.setProperty('--efs-window-shell-scale', `${effectiveSettings.windowScale / 100}`);
  rootStyle.setProperty('--efs-window-system-button-placement', effectiveSettings.systemButtonPlacement);
  rootStyle.setProperty('--efs-window-side-resize-mode', effectiveSettings.sideResizeMode);
  rootStyle.setProperty('--efs-window-shell-shadow', presetShadow);
  rootStyle.setProperty('--efs-widget-border-width', `${effectiveSettings.borderWidth}px`);
  rootStyle.setProperty('--efs-widget-radius', `${effectiveSettings.borderRadius}px`);
  rootStyle.setProperty('--efs-widget-chrome-padding', `${effectiveSettings.chromePadding}px`);
  rootStyle.setProperty('--efs-widget-titlebar-height', `${effectiveSettings.titleBarHeight}px`);
  rootStyle.setProperty('--efs-widget-shell-scale', `${effectiveSettings.windowScale / 100}`);
  rootStyle.setProperty('--efs-widget-shadow', presetShadow);
  rootStyle.setProperty('--efs-dock-button-size', `${effectiveSettings.dockButtonSize}px`);
  rootStyle.setProperty('--efs-dock-button-width', `${dockButtonWidth}px`);
  rootStyle.setProperty('--efs-dock-gap', `${effectiveSettings.dockGap}px`);
  rootStyle.setProperty('--efs-dock-offset', `${effectiveSettings.dockOffset}px`);
  rootStyle.setProperty(
    '--efs-dock-icon-size',
    `${Math.max(16, Math.round(effectiveSettings.dockButtonSize * 0.39))}px`
  );
  rootStyle.setProperty('--efs-dock-icon-scale', `${effectiveSettings.dockIconScale / 100}`);
  rootStyle.setProperty(
    '--efs-dock-popout-width',
    `${Math.max(128, Math.round(dockButtonWidth + effectiveSettings.dockButtonSize * 1.8))}px`
  );
  rootStyle.setProperty(
    '--efs-dock-remove-size',
    `${Math.max(14, Math.round(effectiveSettings.dockButtonSize * 0.31))}px`
  );
  rootStyle.setProperty('--efs-dock-label-mode', effectiveSettings.dockLabelMode);
  rootStyle.setProperty('--efs-dock-global-enabled', effectiveSettings.globalEdgeDock ? '1' : '0');
  rootStyle.setProperty('--shell-focus-ring', '0 0 0 4px color-mix(in srgb, var(--shell-primary, var(--accent, #5b8cff)), transparent 72%)');
  rootStyle.setProperty('--efs-page-theme-spread', effectiveSettings.pageThemeSpread);
  rootElement.setAttribute('data-efs-page-theme', effectiveSettings.pageThemeSpread);
  rootElement.setAttribute('data-efs-window-gloss', glossStyle);
  rootElement.setAttribute('data-efs-window-beam', beamStyle);
  chromeVarNames.forEach((name) => rootStyle.removeProperty(name));
  Object.entries(chromeVars).forEach(([name, value]) => rootStyle.setProperty(name, value));
}

export function applyWindowSettingsToDocument(nextSettings: WindowSettings) {
  if (typeof document === 'undefined') {
    return;
  }

  if (typeof window === 'undefined') {
    applyWindowSettingsToRoot(document, nextSettings);
    return;
  }

  let rootWindow: Window = window;
  try {
    rootWindow = window.top ?? window;
  } catch {
    rootWindow = window;
  }

  const targets = collectAccessibleWindows(rootWindow);
  if (targets.length === 0) {
    applyWindowSettingsToRoot(document, nextSettings);
    return;
  }

  targets.forEach((targetWindow) => {
    try {
      applyWindowSettingsToRoot(targetWindow.document, nextSettings);
    } catch {
      // ignore inaccessible documents
    }
  });
}

export function getWindowSettings(): WindowSettings {
  return settings;
}

export function listWindowSettingsProfiles(): WindowSettingsProfile[] {
  return [...getDefaultProfiles(), ...readCustomProfiles()];
}

export function saveWindowSettingsProfile(
  label: string,
  profileSettings: WindowSettings
): WindowSettingsProfile[] {
  const trimmedLabel = label.trim();

  if (!trimmedLabel) {
    return listWindowSettingsProfiles();
  }

  const customProfiles = readCustomProfiles();
  const idBase = slugifyProfileName(trimmedLabel) || `profile-${Date.now()}`;
  const existingIndex = customProfiles.findIndex((profile) => profile.id === idBase);
  const nextProfile: WindowSettingsProfile = {
    id: existingIndex === -1 ? idBase : `${idBase}-${Date.now()}`,
    label: trimmedLabel,
    settings: enforceLockedWindowThemeSettings(normalizeWindowSettings(profileSettings)),
    custom: true
  };

  writeCustomProfiles([...customProfiles, nextProfile]);
  return listWindowSettingsProfiles();
}

export function deleteWindowSettingsProfile(profileId: string): WindowSettingsProfile[] {
  const nextProfiles = readCustomProfiles().filter((profile) => profile.id !== profileId);
  writeCustomProfiles(nextProfiles);
  return listWindowSettingsProfiles();
}

export function updateWindowSettings(partial: Partial<WindowSettings>) {
  settings = enforceLockedWindowThemeSettings(
    normalizeWindowSettings({
      ...settings,
      ...partial
    })
  );

  applyWindowSettingsToDocument(settings);
  setStorageItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  subscribers.forEach((subscriber) => subscriber(settings));
}

export function subscribeWindowSettings(callback: (settings: WindowSettings) => void) {
  subscribers.add(callback);
  callback(settings);
  return () => {
    subscribers.delete(callback);
  };
}

if (typeof window !== 'undefined') {
  window.addEventListener('efsdb-themechange', () => {
    applyWindowSettingsToDocument(settings);
  });
  window.addEventListener('efsdb-window-settings-sync', (event) => {
    const detail = (event as CustomEvent<Partial<WindowSettings>>).detail;
    if (!detail || typeof detail !== 'object') {
      return;
    }

    updateWindowSettings(detail);
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== SETTINGS_STORAGE_KEY) {
      return;
    }

    settings = hydrateWindowSettings();
    subscribers.forEach((subscriber) => subscriber(settings));
  });
}
