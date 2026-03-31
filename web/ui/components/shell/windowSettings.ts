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
  chromeStyle: WindowChromeStyle;
  alignment: 'left' | 'center' | 'right';
  snapRestoreOnRelease: boolean;
  shiftDragAction: WindowShiftDragAction;
  themePreset: WindowThemePreset;
  fontPreset: WindowFontPreset;
};

export type WindowThemePresetConfig = {
  id: WindowThemePreset;
  label: string;
  shadow: string;
  settings: Omit<WindowSettings, 'themePreset'>;
};

export type WindowSettingsProfile = {
  id: string;
  label: string;
  settings: WindowSettings;
  custom?: boolean;
};

const SETTINGS_STORAGE_KEY = 'efsdb:window-settings';
const PROFILES_STORAGE_KEY = 'efsdb:window-settings:profiles';

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
      chromeStyle: 'solid',
      alignment: 'center',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'system'
    }
  },
  aero: {
    id: 'aero',
    label: 'Windows 7 glass',
    shadow:
      '0 16px 34px rgba(0, 0, 0, 0.2), 0 28px 58px rgba(0, 0, 0, 0.24)',
    settings: {
      buttonLayout: 'windows-7',
      systemButtonPlacement: 'right',
      sideResizeMode: 'anchored',
      borderWidth: 1,
      borderRadius: 10,
      chromePadding: 9,
      chromeStyle: 'pane',
      alignment: 'center',
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
      chromeStyle: 'pane',
      alignment: 'center',
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
      chromeStyle: 'mica',
      alignment: 'center',
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
      chromeStyle: 'solid',
      alignment: 'left',
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
      chromeStyle: 'solid',
      alignment: 'center',
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
      chromeStyle: 'solid',
      alignment: 'center',
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
      chromeStyle: 'solid',
      alignment: 'left',
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
      chromeStyle: 'glass',
      alignment: 'center',
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
      chromeStyle: 'frost',
      alignment: 'center',
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
      chromeStyle: 'solid',
      alignment: 'left',
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
      chromeStyle: 'solid',
      alignment: 'center',
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
      chromeStyle: 'glass',
      alignment: 'center',
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
      chromeStyle: 'solid',
      alignment: 'center',
      snapRestoreOnRelease: false,
      shiftDragAction: 'pin',
      fontPreset: 'linux-system'
    }
  }
};

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
  chromeStyle: 'solid',
  alignment: 'center',
  snapRestoreOnRelease: false,
  shiftDragAction: 'pin',
  themePreset: 'inherit',
  fontPreset: 'system'
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
    chromeStyle:
      value?.chromeStyle === 'glass' ||
      value?.chromeStyle === 'transparent' ||
      value?.chromeStyle === 'mica' ||
      value?.chromeStyle === 'frost' ||
      value?.chromeStyle === 'pane'
        ? value.chromeStyle
        : DEFAULT_WINDOW_SETTINGS.chromeStyle,
    alignment:
      value?.alignment === 'left' || value?.alignment === 'right'
        ? value.alignment
        : DEFAULT_WINDOW_SETTINGS.alignment,
    snapRestoreOnRelease:
      typeof value?.snapRestoreOnRelease === 'boolean'
        ? value.snapRestoreOnRelease
        : DEFAULT_WINDOW_SETTINGS.snapRestoreOnRelease,
    shiftDragAction: normalizeShiftDragAction(value?.shiftDragAction),
    themePreset: normalizeWindowThemePreset(value?.themePreset),
    fontPreset: normalizeWindowFontPreset(value?.fontPreset)
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
    left.chromeStyle === right.chromeStyle &&
    left.alignment === right.alignment &&
    left.snapRestoreOnRelease === right.snapRestoreOnRelease &&
    left.shiftDragAction === right.shiftDragAction &&
    left.themePreset === right.themePreset &&
    left.fontPreset === right.fontPreset
  );
}

export function createWindowThemePresetSettings(preset: WindowThemePreset): WindowSettings {
  const config = WINDOW_THEME_PRESETS[preset] ?? WINDOW_THEME_PRESETS.inherit;
  return normalizeWindowSettings({
    ...DEFAULT_WINDOW_SETTINGS,
    ...config.settings,
    themePreset: config.id
  });
}

export function findMatchingWindowThemePreset(settingsToMatch: WindowSettings): WindowThemePreset | null {
  for (const preset of Object.keys(WINDOW_THEME_PRESETS) as WindowThemePreset[]) {
    if (areWindowSettingsEqual(settingsToMatch, createWindowThemePresetSettings(preset))) {
      return preset;
    }
  }

  return null;
}

export function resolveWindowPresetShadow(preset: WindowThemePreset): string {
  return (WINDOW_THEME_PRESETS[preset] ?? WINDOW_THEME_PRESETS.inherit).shadow;
}

function hydrateWindowSettings(): WindowSettings {
  const raw = getStorageItem(SETTINGS_STORAGE_KEY);

  if (!raw) {
    applyWindowSettingsToDocument(DEFAULT_WINDOW_SETTINGS);
    return { ...DEFAULT_WINDOW_SETTINGS };
  }

  try {
    const parsed = JSON.parse(raw) as Partial<WindowSettings>;
    const hydrated = normalizeWindowSettings(parsed);
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
      label: 'Windows 7 glass',
      settings: createWindowThemePresetSettings('aero')
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
        settings: normalizeWindowSettings(profile.settings),
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

export function applyWindowSettingsToDocument(nextSettings: WindowSettings) {
  if (typeof document === 'undefined') {
    return;
  }

  const rootStyle = document.documentElement.style;
  const fontPreset = WINDOW_FONT_PRESETS[nextSettings.fontPreset] ?? WINDOW_FONT_PRESETS.system;
  const presetShadow = resolveWindowPresetShadow(nextSettings.themePreset);

  rootStyle.setProperty('--efs-font-sans', fontPreset.stack);
  rootStyle.setProperty('--efs-window-font-family', fontPreset.stack);
  rootStyle.setProperty('--efs-window-border-width', `${nextSettings.borderWidth}px`);
  rootStyle.setProperty('--efs-window-radius', `${nextSettings.borderRadius}px`);
  rootStyle.setProperty('--efs-window-chrome-padding', `${nextSettings.chromePadding}px`);
  rootStyle.setProperty('--efs-window-system-button-placement', nextSettings.systemButtonPlacement);
  rootStyle.setProperty('--efs-window-side-resize-mode', nextSettings.sideResizeMode);
  rootStyle.setProperty('--efs-window-shell-shadow', presetShadow);
  rootStyle.setProperty('--efs-widget-border-width', `${nextSettings.borderWidth}px`);
  rootStyle.setProperty('--efs-widget-radius', `${nextSettings.borderRadius}px`);
  rootStyle.setProperty('--efs-widget-chrome-padding', `${nextSettings.chromePadding}px`);
  rootStyle.setProperty('--efs-widget-shadow', presetShadow);
  rootStyle.removeProperty('--efs-window-theme-panel');
  rootStyle.removeProperty('--efs-window-theme-surface');
  rootStyle.removeProperty('--efs-window-theme-border');
  rootStyle.removeProperty('--efs-window-theme-shadow');
  rootStyle.removeProperty('--efs-window-theme-hover');
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
    settings: normalizeWindowSettings(profileSettings),
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
  settings = normalizeWindowSettings({
    ...settings,
    ...partial
  });

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
}
