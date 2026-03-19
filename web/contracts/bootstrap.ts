export type BootstrapApp = 'login' | 'explorer' | 'admin';
export type BootstrapTheme = 'dark' | 'light';
export type BootstrapTag = 'efsdb-login' | 'efsdb-explorer' | 'efsdb-admin';

export interface BootstrapUser {
  id: string;
  username: string;
  role: string;
  actualRole: string;
  displayMode?: string | null;
  entitlements?: string[];
  actualEntitlements?: string[];
  availableDisplayModes?: string[];
  operatorOnly?: boolean;
}

export interface BootstrapPayload {
  app: BootstrapApp;
  tag: BootstrapTag;
  assetFile: string;
  apiBase?: string;
  authBase?: string;
  theme?: BootstrapTheme;
  user?: BootstrapUser | null;
  flags?: Record<string, boolean>;
  initial?: Record<string, unknown>;
  urls?: Record<string, string>;
}
