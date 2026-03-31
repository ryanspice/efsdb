/*
 * Web-side token exports only.
 *
 * The PHP shell and app-local host styles still own part of the active visual system.
 * These exports describe the current `web` token layer and its compatibility aliases.
 * They should remain additive until later phases explicitly converge ownership.
 */

/* Foundations: current active web-side values. */
export const foundationSurfaceTokens = {
  app: 'var(--efs-bg-app)',
  shell: 'var(--efs-bg-shell)',
  surface0: 'var(--efs-bg-surface-0)',
  surface1: 'var(--efs-bg-surface-1)',
  surface2: 'var(--efs-bg-surface-2)',
  surface3: 'var(--efs-bg-surface-3)',
  overlay: 'var(--efs-bg-overlay)'
} as const;

export const foundationTextTokens = {
  primary: 'var(--efs-text-primary)',
  secondary: 'var(--efs-text-secondary)',
  tertiary: 'var(--efs-text-tertiary)',
  muted: 'var(--efs-text-muted)',
  inverse: 'var(--efs-text-inverse)'
} as const;

export const foundationBorderTokens = {
  subtle: 'var(--efs-border-subtle)',
  default: 'var(--efs-border-default)',
  strong: 'var(--efs-border-strong)',
  accent: 'var(--efs-border-accent)',
  danger: 'var(--efs-border-danger)'
} as const;

export const foundationAccentTokens = {
  primary: 'var(--efs-accent-primary)',
  soft: 'var(--efs-accent-soft)',
  focus: 'var(--efs-accent-focus)',
  strong: 'var(--efs-accent-strong)'
} as const;

export const foundationStateTokens = {
  info: 'var(--efs-state-info)',
  success: 'var(--efs-state-success)',
  warning: 'var(--efs-state-warning)',
  danger: 'var(--efs-state-danger)'
} as const;

export const foundationModeTokens = {
  naturalBg: 'var(--efs-mode-natural-bg)',
  naturalBorder: 'var(--efs-mode-natural-border)',
  rawBg: 'var(--efs-mode-raw-bg)',
  rawBorder: 'var(--efs-mode-raw-border)'
} as const;

/*
 * Existing grouped export preserved for compatibility.
 * Current and future callers may still import `colorTokens` directly.
 */
export const colorTokens = {
  bg: foundationSurfaceTokens,
  text: foundationTextTokens,
  border: foundationBorderTokens,
  accent: foundationAccentTokens,
  state: foundationStateTokens,
  mode: foundationModeTokens
} as const;

/*
 * Semantic aliases intended for later component adoption.
 * These names map onto today's web-side values and do not imply a fully centralized design system.
 */
export const semanticSurfaceTokens = {
  canvas: 'var(--efs-bg-canvas)',
  app: 'var(--efs-bg-app)',
  surface: 'var(--efs-bg-surface)',
  panel: 'var(--efs-surface-panel)',
  control: 'var(--efs-surface-control)',
  emphasis: 'var(--efs-surface-emphasis)',
  surface2: 'var(--efs-bg-surface-2)',
  surface3: 'var(--efs-bg-surface-3)',
  shell: 'var(--efs-bg-shell)',
  overlay: 'var(--efs-bg-overlay)'
} as const;

export const semanticTextTokens = {
  default: 'var(--efs-text-default)',
  subtle: 'var(--efs-text-subtle)',
  disabled: 'var(--efs-text-disabled)',
  primary: 'var(--efs-text-primary)',
  secondary: 'var(--efs-text-secondary)',
  tertiary: 'var(--efs-text-tertiary)',
  muted: 'var(--efs-text-muted)',
  inverse: 'var(--efs-text-inverse)'
} as const;

export const semanticBorderTokens = {
  panel: 'var(--efs-border-panel)',
  field: 'var(--efs-border-field)',
  focus: 'var(--efs-border-focus)',
  subtle: 'var(--efs-border-subtle)',
  default: 'var(--efs-border-default)',
  strong: 'var(--efs-border-strong)',
  accent: 'var(--efs-border-accent)',
  danger: 'var(--efs-border-danger)'
} as const;

export const semanticAccentTokens = {
  primary: 'var(--efs-accent-primary)',
  hover: 'var(--efs-accent-primary-hover)',
  soft: 'var(--efs-accent-soft)',
  selected: 'var(--efs-accent-selected)',
  focus: 'var(--efs-accent-focus)',
  strong: 'var(--efs-accent-strong)'
} as const;

export const semanticStatusTokens = {
  live: 'var(--efs-status-live)',
  draft: 'var(--efs-status-draft)',
  archived: 'var(--efs-status-archived)',
  indexed: 'var(--efs-status-indexed)',
  indexing: 'var(--efs-status-indexing)',
  pending: 'var(--efs-status-pending)',
  info: 'var(--efs-state-info)',
  success: 'var(--efs-state-success)',
  warning: 'var(--efs-state-warning)',
  danger: 'var(--efs-state-danger)'
} as const;

export const semanticSecurityTokens = {
  encrypted: 'var(--efs-security-encrypted)',
  rbac: 'var(--efs-security-rbac)',
  safe: 'var(--efs-ops-safe)',
  destructive: 'var(--efs-ops-destructive)'
} as const;

export const semanticModeTokens = {
  naturalBg: 'var(--efs-mode-natural-bg)',
  naturalBorder: 'var(--efs-mode-natural-border)',
  rawBg: 'var(--efs-mode-raw-bg)',
  rawBorder: 'var(--efs-mode-raw-border)'
} as const;

export const semanticColorTokens = {
  bg: semanticSurfaceTokens,
  text: semanticTextTokens,
  border: semanticBorderTokens,
  accent: semanticAccentTokens,
  status: semanticStatusTokens,
  security: semanticSecurityTokens,
  mode: semanticModeTokens
} as const;

export const breakpointTokens = {
  phoneMax: '47.99rem',
  tablet: '48rem',
  laptop: '64rem',
  desktop: '80rem'
} as const;

export const breakpointMedia = {
  phoneOnly: `(max-width: ${breakpointTokens.phoneMax})`,
  tabletUp: `(min-width: ${breakpointTokens.tablet})`,
  laptopUp: `(min-width: ${breakpointTokens.laptop})`,
  desktopUp: `(min-width: ${breakpointTokens.desktop})`
} as const;

/* Foundations: typography. */
export const fontTokens = {
  sans: 'var(--efs-font-sans)',
  mono: 'var(--efs-font-mono)',
  micro: 'var(--efs-font-micro)',
  eyebrow: 'var(--efs-font-eyebrow)',
  bodyXs: 'var(--efs-font-body-xs)',
  bodySm: 'var(--efs-font-body-sm)',
  bodyMd: 'var(--efs-font-body-md)',
  bodyLg: 'var(--efs-font-body-lg)',
  label: 'var(--efs-font-label)',
  titleSm: 'var(--efs-font-title-sm)',
  titleMd: 'var(--efs-font-title-md)',
  titleLg: 'var(--efs-font-title-lg)',
  titleXl: 'var(--efs-font-title-xl)'
} as const;

/* Foundations: radius. */
export const radiusTokens = {
  xs: 'var(--efs-radius-xs)',
  sm: 'var(--efs-radius-sm)',
  md: 'var(--efs-radius-md)',
  lg: 'var(--efs-radius-lg)',
  xl: 'var(--efs-radius-xl)',
  panel: 'var(--efs-radius-panel)',
  card: 'var(--efs-radius-card)',
  dialog: 'var(--efs-radius-dialog)'
} as const;

/* Foundations: spacing. */
export const spaceTokens = {
  0: 'var(--efs-space-0)',
  1: 'var(--efs-space-1)',
  2: 'var(--efs-space-2)',
  3: 'var(--efs-space-3)',
  4: 'var(--efs-space-4)',
  5: 'var(--efs-space-5)',
  6: 'var(--efs-space-6)',
  7: 'var(--efs-space-7)',
  8: 'var(--efs-space-8)',
  10: 'var(--efs-space-10)',
  12: 'var(--efs-space-12)'
} as const;

/* Active size tokens plus a small compatibility layer for later shared-shell adoption. */
export const sizeTokens = {
  controlCompact: 'var(--efs-size-control-compact)',
  controlDefault: 'var(--efs-size-control-default)',
  controlLarge: 'var(--efs-size-control-large)',
  toolbar: 'var(--efs-size-toolbar)',
  utilityStrip: 'var(--efs-size-utility-strip)',
  header: 'var(--efs-size-header)',
  rail: 'var(--efs-size-rail)',
  sidebar: 'var(--efs-size-sidebar)',
  inspector: 'var(--efs-size-inspector)',
  columnMin: 'var(--efs-size-column-min)',
  columnMax: 'var(--efs-size-column-max)'
} as const;

/* Foundations: row/control density presets. */
export const densityTokens = {
  compact: {
    rowHeight: 30,
    controlHeight: 32,
    cellPadX: 8,
    cellPadY: 6
  },
  default: {
    rowHeight: 36,
    controlHeight: 36,
    cellPadX: 12,
    cellPadY: 8
  },
  comfortable: {
    rowHeight: 42,
    controlHeight: 40,
    cellPadX: 14,
    cellPadY: 10
  }
} as const;

/* Foundations: shadows. */
export const shadowTokens = {
  soft: 'var(--efs-shadow-soft)',
  panel: 'var(--efs-shadow-panel)',
  dialog: 'var(--efs-shadow-dialog)',
  shell: 'var(--efs-shadow-shell)',
  focus: 'var(--efs-shadow-focus)'
} as const;

/* Foundations: motion. */
export const motionTokens = {
  fast: 'var(--efs-motion-fast)',
  normal: 'var(--efs-motion-normal)',
  slow: 'var(--efs-motion-slow)',
  easeStandard: 'var(--efs-ease-standard)',
  easeEmphasized: 'var(--efs-ease-emphasized)'
} as const;

/* Layering helpers for later shared UI work. */
export const zTokens = {
  base: 0,
  header: 20,
  popover: 40,
  dialog: 60,
  toast: 80,
  palette: 100
} as const;

export type ExplorerMode = 'natural' | 'raw';
export type DensityMode = keyof typeof densityTokens;
