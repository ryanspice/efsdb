import type { AuthUser } from '@contracts/auth';
import type { FacetBucket } from '@contracts/facets';
import type { ProductSummary } from '@contracts/products';
import type { SearchResult } from '@contracts/search';
import type { AdminRoleRecord, AdminUserRecord } from '@contracts/admin';

export interface NoticeState {
  message: string;
  error: boolean;
}

export interface UserFormState {
  username: string;
  name: string;
  roleId: string;
  loginKey: string;
}

export interface RoleFormState {
  id: string;
  name: string;
  description: string;
  entitlements: string;
}

export type AdminWidgetId =
  | 'create-user'
  | 'user-directory'
  | 'create-role'
  | 'role-directory'
  | 'display-mode'
  | 'window-preferences'
  | 'settings-payload'
  | 'catalog-search'
  | 'catalog-results'
  | 'catalog-facets';

export type AdminWidgetMode = 'card' | 'window';

export type AdminWidgetWindowMode = 'normal' | 'maximized' | 'minimized' | 'rolled-up';

export interface AdminWidgetWindowState {
  open: boolean;
  pinned: boolean;
  windowState: AdminWidgetWindowMode;
}

export interface AdminWorkspaceWidgetLayout {
  col: number;
  row: number;
  width: number;
  height: number;
}

export interface AdminWorkspaceUiState {
  editing: boolean;
  toolbarWidgets: AdminWidgetId[];
  edgePinnedWidgets: AdminWidgetId[];
  hiddenWidgets: AdminWidgetId[];
  customActions: AdminWorkspaceCustomAction[];
  toolbarCustomActions: string[];
}

export interface AdminEdgeDockState {
  edge: 'left' | 'right' | 'top' | 'bottom';
  ratio: number;
}

export interface AdminWorkspaceActionStep {
  type: 'open-widget';
  widgetId: AdminWidgetId;
  pinned?: boolean;
}

export interface AdminWorkspaceCustomAction {
  id: string;
  label: string;
  barLabel: string;
  iconName: string;
  summary: string;
  steps: AdminWorkspaceActionStep[];
}

export interface AdminWorkspaceProfileMeta {
  id: string;
  label: string;
  locked?: boolean;
  savedAt?: string | null;
}

export interface WorkspaceResourceSummary {
  id: string;
  logicalPath?: string;
  mime?: string;
  size?: number;
  mtime?: string;
  [key: string]: unknown;
}

export interface CatalogState {
  workspaceResources: WorkspaceResourceSummary[];
  searchResults: SearchResult[];
  facets: Record<string, FacetBucket[]>;
  query: string;
}

export interface AdminBootState {
  user: AuthUser | null;
  users: AdminUserRecord[];
  roles: AdminRoleRecord[];
  settings: Record<string, unknown> | null;
  catalog: CatalogState;
}
