import { writable } from 'svelte/store';

export type ThemeMode = 'light' | 'dark';

export interface ThemePalette {
  seed: string;
  mode: ThemeMode;
  vividness: number;
  contrast: number;
  accent: string;
  accentStrong: string;
  accentSoft: string;
  accentSecondary: string;
  accentSecondarySoft: string;
  surface: string;
  surfaceAlt: string;
  surfaceInset: string;
  border: string;
  borderStrong: string;
  text: string;
  textMuted: string;
  onAccent: string;
  onSecondary: string;
  focus: string;
  success: string;
  warning: string;
  danger: string;
  shadow: string;
}

export interface ThemePreset {
  id: string;
  label: string;
  seed: string;
  mode: ThemeMode;
  vividness: number;
  contrast: number;
}

export interface ThemeStudioState {
  seed: string;
  mode: ThemeMode;
  vividness: number;
  contrast: number;
  palette: ThemePalette;
  lastAppliedAt: number | null;
}

const STORAGE_KEY = 'efsdb:theme-studio';
const DEFAULT_SEED = '#5b8cff';
const DEFAULT_MODE: ThemeMode = 'light';
const DEFAULT_VIVIDNESS = 66;
const DEFAULT_CONTRAST = 56;

export const themeStudioPresets: ThemePreset[] = [
  { id: 'azure', label: 'Azure Glass', seed: '#4f7cff', mode: 'light', vividness: 68, contrast: 58 },
  { id: 'violet', label: 'Violet Signal', seed: '#7c5cff', mode: 'dark', vividness: 72, contrast: 63 },
  { id: 'mint', label: 'Mint Grid', seed: '#14b8a6', mode: 'light', vividness: 62, contrast: 54 },
  { id: 'ember', label: 'Ember Ops', seed: '#f97316', mode: 'dark', vividness: 74, contrast: 67 },
  { id: 'rose', label: 'Rose Runtime', seed: '#e11d48', mode: 'light', vividness: 69, contrast: 55 },
  { id: 'gold', label: 'Golden Build', seed: '#d4a017', mode: 'dark', vividness: 58, contrast: 62 }
];

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function normalizeHex(input: string | null | undefined): string {
  const value = (input ?? '').trim().replace('#', '');

  if (/^[0-9a-fA-F]{3}$/.test(value)) {
    return `#${value
      .split('')
      .map(part => `${part}${part}`)
      .join('')
      .toLowerCase()}`;
  }

  if (/^[0-9a-fA-F]{6}$/.test(value)) {
    return `#${value.toLowerCase()}`;
  }

  return DEFAULT_SEED;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = normalizeHex(hex).slice(1);
  const int = Number.parseInt(normalized, 16);

  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  const value =
    (clamp(Math.round(r), 0, 255) << 16) |
    (clamp(Math.round(g), 0, 255) << 8) |
    clamp(Math.round(b), 0, 255);

  return `#${value.toString(16).padStart(6, '0')}`;
}

function rgbToHsl(
  r: number,
  g: number,
  b: number
): { h: number; s: number; l: number } {
  const rr = r / 255;
  const gg = g / 255;
  const bb = b / 255;

  const max = Math.max(rr, gg, bb);
  const min = Math.min(rr, gg, bb);
  const delta = max - min;

  let h = 0;
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  if (delta !== 0) {
    switch (max) {
      case rr:
        h = ((gg - bb) / delta) % 6;
        break;
      case gg:
        h = (bb - rr) / delta + 2;
        break;
      default:
        h = (rr - gg) / delta + 4;
        break;
    }

    h *= 60;
    if (h < 0) h += 360;
  }

  return {
    h,
    s: s * 100,
    l: l * 100
  };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  const hh = ((h % 360) + 360) % 360;
  const ss = clamp(s, 0, 100) / 100;
  const ll = clamp(l, 0, 100) / 100;

  const c = (1 - Math.abs(2 * ll - 1)) * ss;
  const x = c * (1 - Math.abs(((hh / 60) % 2) - 1));
  const m = ll - c / 2;

  let rPrime = 0;
  let gPrime = 0;
  let bPrime = 0;

  if (hh < 60) {
    rPrime = c;
    gPrime = x;
  } else if (hh < 120) {
    rPrime = x;
    gPrime = c;
  } else if (hh < 180) {
    gPrime = c;
    bPrime = x;
  } else if (hh < 240) {
    gPrime = x;
    bPrime = c;
  } else if (hh < 300) {
    rPrime = x;
    bPrime = c;
  } else {
    rPrime = c;
    bPrime = x;
  }

  return {
    r: (rPrime + m) * 255,
    g: (gPrime + m) * 255,
    b: (bPrime + m) * 255
  };
}

function hslToHex(h: number, s: number, l: number): string {
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}

function mixHex(a: string, b: string, weightOfB: number): string {
  const aa = hexToRgb(a);
  const bb = hexToRgb(b);
  const w = clamp(weightOfB, 0, 1);

  return rgbToHex(
    aa.r + (bb.r - aa.r) * w,
    aa.g + (bb.g - aa.g) * w,
    aa.b + (bb.b - aa.b) * w
  );
}

function rgbaFromHex(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${clamp(alpha, 0, 1).toFixed(3)})`;
}

function luminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const values = [r, g, b].map(value => {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2];
}

function contrastRatio(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);

  return (lighter + 0.05) / (darker + 0.05);
}

function readableOn(background: string, preferredLight = '#f8fbff', preferredDark = '#08111f'): string {
  return contrastRatio(background, preferredLight) >= contrastRatio(background, preferredDark)
    ? preferredLight
    : preferredDark;
}

function scale(value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number {
  const ratio = (value - fromMin) / (fromMax - fromMin);
  return toMin + ratio * (toMax - toMin);
}

export function buildThemePalette(
  seedInput: string,
  mode: ThemeMode = DEFAULT_MODE,
  vividness = DEFAULT_VIVIDNESS,
  contrast = DEFAULT_CONTRAST
): ThemePalette {
  const seed = normalizeHex(seedInput);
  const rgb = hexToRgb(seed);
  const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const isDark = mode === 'dark';

  const vividShift = scale(vividness, 0, 100, -16, 18);
  const contrastShift = scale(contrast, 0, 100, -12, 14);

  const accent = seed;
  const accentStrong = hslToHex(
    h,
    clamp(s + 6 + vividShift * 0.5, 18, 98),
    clamp(l + (isDark ? 10 : -12) - contrastShift * 0.2, 16, 78)
  );

  const accentSoft = mixHex(
    accent,
    isDark ? '#0b1220' : '#ffffff',
    isDark ? 0.74 : 0.82
  );

  const accentSecondary = hslToHex(
    h + 30,
    clamp(s * 0.84 + vividShift * 0.45, 18, 90),
    clamp(l + (isDark ? 4 : -3), 18, 72)
  );

  const accentSecondarySoft = mixHex(
    accentSecondary,
    isDark ? '#0b1220' : '#ffffff',
    isDark ? 0.76 : 0.84
  );

  const surface = hslToHex(
    h + 2,
    clamp(8 + s * 0.08, 6, 18),
    isDark ? clamp(10 + contrastShift * 0.34, 7, 18) : clamp(98 - contrastShift * 0.24, 93, 99)
  );

  const surfaceAlt = hslToHex(
    h + 8,
    clamp(10 + s * 0.1, 7, 20),
    isDark ? clamp(14 + contrastShift * 0.38, 10, 23) : clamp(95 - contrastShift * 0.18, 90, 97)
  );

  const surfaceInset = hslToHex(
    h,
    clamp(8 + s * 0.06, 5, 16),
    isDark ? clamp(8 + contrastShift * 0.24, 5, 14) : clamp(92 - contrastShift * 0.18, 88, 95)
  );

  const border = mixHex(surfaceAlt, accent, isDark ? 0.18 : 0.1);
  const borderStrong = mixHex(border, accentStrong, 0.32);

  const text = isDark ? '#e6eefc' : '#0f172a';
  const textMuted = isDark ? mixHex(text, surface, 0.45) : mixHex(text, surface, 0.58);

  const focus = mixHex(accent, isDark ? '#ffffff' : '#0f172a', isDark ? 0.18 : 0.1);
  const success = isDark ? '#3ddc97' : '#138a5b';
  const warning = isDark ? '#f6b73c' : '#b66a00';
  const danger = isDark ? '#ff6b81' : '#c92a4b';

  const onAccent = readableOn(accent);
  const onSecondary = readableOn(accentSecondary);

  const shadow = isDark
    ? '0 18px 60px rgba(0, 0, 0, 0.44), 0 6px 20px rgba(0, 0, 0, 0.28)'
    : '0 18px 60px rgba(15, 23, 42, 0.16), 0 6px 20px rgba(15, 23, 42, 0.08)';

  return {
    seed,
    mode,
    vividness: clamp(Math.round(vividness), 0, 100),
    contrast: clamp(Math.round(contrast), 0, 100),
    accent,
    accentStrong,
    accentSoft,
    accentSecondary,
    accentSecondarySoft,
    surface,
    surfaceAlt,
    surfaceInset,
    border,
    borderStrong,
    text,
    textMuted,
    onAccent,
    onSecondary,
    focus,
    success,
    warning,
    danger,
    shadow
  };
}

export function paletteToCss(palette: ThemePalette): string {
  return [
    ':root {',
    `  --accent: ${palette.accent};`,
    `  --accent-strong: ${palette.accentStrong};`,
    `  --accent-soft: ${palette.accentSoft};`,
    `  --accent-secondary: ${palette.accentSecondary};`,
    `  --accent-secondary-soft: ${palette.accentSecondarySoft};`,
    `  --surface: ${palette.surface};`,
    `  --surface-alt: ${palette.surfaceAlt};`,
    `  --surface-inset: ${palette.surfaceInset};`,
    `  --border: ${palette.border};`,
    `  --border-strong: ${palette.borderStrong};`,
    `  --text: ${palette.text};`,
    `  --text-muted: ${palette.textMuted};`,
    `  --on-accent: ${palette.onAccent};`,
    `  --on-secondary: ${palette.onSecondary};`,
    `  --focus: ${palette.focus};`,
    `  --success: ${palette.success};`,
    `  --warning: ${palette.warning};`,
    `  --danger: ${palette.danger};`,
    `  --theme-shadow: ${palette.shadow};`,
    '}'
  ].join('\n');
}

export function applyThemePaletteToElement(
  palette: ThemePalette,
  target: HTMLElement = document.documentElement
): void {
  const isDark = palette.mode === 'dark';
  const shellBodyBg = isDark
    ? `radial-gradient(circle at top left, ${rgbaFromHex(palette.accent, 0.14)}, transparent 28%), linear-gradient(180deg, ${mixHex(palette.surface, '#08111f', 0.28)} 0%, ${mixHex(palette.surfaceInset, '#020617', 0.46)} 100%)`
    : `radial-gradient(circle at top left, ${rgbaFromHex(palette.accent, 0.1)}, transparent 26%), linear-gradient(180deg, ${mixHex(palette.surfaceAlt, '#ffffff', 0.34)} 0%, ${mixHex(palette.surface, '#ffffff', 0.14)} 100%)`;
  const shellOverlay = isDark
    ? `radial-gradient(circle at 12% 18%, transparent 0 118px, ${rgbaFromHex(palette.accent, 0.08)} 119px 120px, transparent 121px), radial-gradient(circle at 78% 22%, transparent 0 184px, ${rgbaFromHex(palette.accentSecondary, 0.06)} 185px 186px, transparent 187px)`
    : `radial-gradient(circle at 18% 16%, transparent 0 126px, ${rgbaFromHex(palette.accent, 0.06)} 127px 128px, transparent 129px), radial-gradient(circle at 82% 18%, transparent 0 168px, ${rgbaFromHex(palette.accentSecondary, 0.05)} 169px 170px, transparent 171px)`;
  const shellPanelBg = isDark ? rgbaFromHex(palette.surface, 0.9) : rgbaFromHex(palette.surface, 0.94);
  const shellSoftBg = mixHex(palette.surfaceAlt, palette.accentSoft, isDark ? 0.18 : 0.24);
  const shellInsetBg = mixHex(palette.surfaceInset, palette.accentSoft, isDark ? 0.1 : 0.14);
  const shellInsetStrongBg = mixHex(shellInsetBg, palette.borderStrong, isDark ? 0.26 : 0.22);
  const shellNavBg = isDark
    ? rgbaFromHex(mixHex(palette.surface, palette.accentSoft, 0.12), 0.88)
    : rgbaFromHex(mixHex(palette.surface, palette.accentSoft, 0.18), 0.94);
  const shellHoverBg = mixHex(palette.surfaceAlt, palette.accentSoft, isDark ? 0.3 : 0.42);
  const shellCodeBg = mixHex(palette.surfaceInset, palette.accentSoft, isDark ? 0.14 : 0.18);
  const shellPreBg = mixHex(palette.surfaceInset, isDark ? '#020617' : '#ffffff', isDark ? 0.28 : 0.2);
  const shellInputBg = isDark
    ? rgbaFromHex(mixHex(palette.surface, '#020617', 0.18), 0.86)
    : rgbaFromHex(mixHex(palette.surface, '#ffffff', 0.2), 0.96);
  const shellChipBg = mixHex(palette.surfaceAlt, palette.accentSoft, isDark ? 0.24 : 0.28);
  const shellScrollbar = rgbaFromHex(palette.text, isDark ? 0.2 : 0.16);
  const vars: Record<string, string> = {
    '--accent': palette.accent,
    '--accent-strong': palette.accentStrong,
    '--accent-soft': palette.accentSoft,
    '--accent-secondary': palette.accentSecondary,
    '--accent-secondary-soft': palette.accentSecondarySoft,
    '--surface': palette.surface,
    '--surface-alt': palette.surfaceAlt,
    '--surface-inset': palette.surfaceInset,
    '--border': palette.border,
    '--border-strong': palette.borderStrong,
    '--text': palette.text,
    '--text-muted': palette.textMuted,
    '--on-accent': palette.onAccent,
    '--on-secondary': palette.onSecondary,
    '--focus': palette.focus,
    '--success': palette.success,
    '--warning': palette.warning,
    '--danger': palette.danger,
    '--theme-shadow': palette.shadow,
    '--efs-state-success': palette.success,
    '--efs-state-warning': palette.warning,
    '--efs-state-danger': palette.danger,
    '--shell-primary': palette.accent,
    '--shell-primary-strong': palette.accentStrong,
    '--shell-primary-soft': palette.accentSoft,
    '--shell-body-bg': shellBodyBg,
    '--shell-overlay': shellOverlay,
    '--shell-overlay-opacity': isDark ? '0.76' : '0.54',
    '--shell-panel-bg': shellPanelBg,
    '--shell-panel-solid': palette.surface,
    '--shell-panel-solid-subtle': palette.surfaceAlt,
    '--shell-panel-solid-muted': palette.surfaceInset,
    '--shell-panel': palette.surface,
    '--shell-surface': palette.surfaceAlt,
    '--shell-soft-bg': shellSoftBg,
    '--shell-inset-bg': shellInsetBg,
    '--shell-inset-strong-bg': shellInsetStrongBg,
    '--shell-nav-bg': shellNavBg,
    '--shell-hover-bg': shellHoverBg,
    '--shell-row-hover': shellHoverBg,
    '--shell-code-bg': shellCodeBg,
    '--shell-pre-bg': shellPreBg,
    '--shell-input-bg': shellInputBg,
    '--shell-input-placeholder': palette.textMuted,
    '--shell-shadow': palette.shadow,
    '--shell-pill-text': palette.onAccent,
    '--shell-nav-text': palette.textMuted,
    '--shell-code-text': palette.text,
    '--shell-chip-bg': shellChipBg,
    '--shell-scrollbar': shellScrollbar,
    '--shell-border': palette.border,
    '--shell-border-strong': palette.borderStrong,
    '--shell-text': palette.text,
    '--shell-text-strong': palette.text,
    '--shell-muted': palette.textMuted
  };

  Object.entries(vars).forEach(([name, value]) => target.style.setProperty(name, value));
  target.dataset.themeMode = palette.mode;
  target.dataset.theme = palette.mode;
  target.style.colorScheme = palette.mode;
}

function createThemeStudioStore() {
  const initialPalette = buildThemePalette(DEFAULT_SEED, DEFAULT_MODE, DEFAULT_VIVIDNESS, DEFAULT_CONTRAST);
  const { subscribe, set, update } = writable<ThemeStudioState>({
    seed: DEFAULT_SEED,
    mode: DEFAULT_MODE,
    vividness: DEFAULT_VIVIDNESS,
    contrast: DEFAULT_CONTRAST,
    palette: initialPalette,
    lastAppliedAt: null
  });

  return {
    subscribe,
    hydrate() {
      if (typeof window === 'undefined') return;

      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      try {
        const parsed = JSON.parse(raw) as Partial<ThemeStudioState>;
        const seed = normalizeHex(parsed.seed);
        const mode: ThemeMode = parsed.mode === 'dark' ? 'dark' : 'light';
        const vividness = clamp(Number(parsed.vividness ?? DEFAULT_VIVIDNESS), 0, 100);
        const contrast = clamp(Number(parsed.contrast ?? DEFAULT_CONTRAST), 0, 100);
        const palette = buildThemePalette(seed, mode, vividness, contrast);

        set({
          seed,
          mode,
          vividness,
          contrast,
          palette,
          lastAppliedAt: typeof parsed.lastAppliedAt === 'number' ? parsed.lastAppliedAt : null
        });
      } catch {
        // ignore bad localStorage
      }
    },
    reset() {
      const palette = buildThemePalette(DEFAULT_SEED, DEFAULT_MODE, DEFAULT_VIVIDNESS, DEFAULT_CONTRAST);
      const next: ThemeStudioState = {
        seed: DEFAULT_SEED,
        mode: DEFAULT_MODE,
        vividness: DEFAULT_VIVIDNESS,
        contrast: DEFAULT_CONTRAST,
        palette,
        lastAppliedAt: null
      };

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      }

      set(next);
    },
    preview(seed: string, mode: ThemeMode, vividness: number, contrast: number): ThemePalette {
      return buildThemePalette(seed, mode, vividness, contrast);
    },
    apply(seed: string, mode: ThemeMode, vividness: number, contrast: number) {
      const palette = buildThemePalette(seed, mode, vividness, contrast);

      update(() => {
        const next: ThemeStudioState = {
          seed: palette.seed,
          mode,
          vividness: clamp(vividness, 0, 100),
          contrast: clamp(contrast, 0, 100),
          palette,
          lastAppliedAt: Date.now()
        };

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        }

        return next;
      });

      return palette;
    }
  };
}

export const themeStudioStore = createThemeStudioStore();
