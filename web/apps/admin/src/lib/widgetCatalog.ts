import {
  getAppIconMask,
  type AppIconName
} from '@ui/components/icons/appIconCatalog';
import type { AdminWidgetId } from './types';

export type AdminWindowConfig = {
  title: string;
  width: number;
  height: number;
  x: number;
  y: number;
};

export type AdminToolbarButtonPresentation = 'icon' | 'label';

export type AdminWidgetToolbarMeta = {
  label: string;
  barLabel: string;
  presentation: AdminToolbarButtonPresentation;
  group: string;
  summary: string;
};

export const adminWidgetIds: AdminWidgetId[] = [
  'create-user',
  'user-directory',
  'create-role',
  'role-directory',
  'display-mode',
  'window-preferences',
  'dock-preferences',
  'settings-payload',
  'catalog-search',
  'catalog-results',
  'catalog-facets'
];

export const adminWidgetIconNames: Record<AdminWidgetId, AppIconName> = {
  'create-user': 'create-user',
  'user-directory': 'user-directory',
  'create-role': 'create-role',
  'role-directory': 'role-directory',
  'display-mode': 'display-mode',
  'window-preferences': 'window-preferences',
  'dock-preferences': 'dock',
  'settings-payload': 'settings-payload',
  'catalog-search': 'catalog-search',
  'catalog-results': 'catalog-results',
  'catalog-facets': 'catalog-facets'
};

export const adminWidgetIconMasks = adminWidgetIds.reduce(
  (accumulator, widgetId) => {
    accumulator[widgetId] = getAppIconMask(adminWidgetIconNames[widgetId]);
    return accumulator;
  },
  {} as Record<AdminWidgetId, string>
);

export const adminWidgetWindowConfig: Record<AdminWidgetId, AdminWindowConfig> = {
  'create-user': { title: 'Create user', width: 620, height: 540, x: 96, y: 76 },
  'user-directory': { title: 'User directory', width: 660, height: 620, x: 152, y: 104 },
  'create-role': { title: 'Create role', width: 640, height: 560, x: 208, y: 92 },
  'role-directory': { title: 'Role catalog', width: 720, height: 620, x: 264, y: 118 },
  'display-mode': { title: 'Display mode', width: 640, height: 560, x: 320, y: 86 },
  'window-preferences': { title: 'Window preferences', width: 720, height: 680, x: 148, y: 188 },
  'dock-preferences': { title: 'Dock preferences', width: 700, height: 620, x: 214, y: 206 },
  'settings-payload': { title: 'Settings payload', width: 840, height: 640, x: 218, y: 142 },
  'catalog-search': { title: 'Search control', width: 700, height: 420, x: 252, y: 72 },
  'catalog-results': { title: 'Search results', width: 760, height: 620, x: 286, y: 136 },
  'catalog-facets': { title: 'Facet distribution', width: 620, height: 560, x: 342, y: 174 }
};

export const adminWidgetToolbarMeta: Record<AdminWidgetId, AdminWidgetToolbarMeta> = {
  'create-user': {
    label: 'Create user',
    barLabel: 'Create',
    presentation: 'icon',
    group: 'Provisioning',
    summary: 'Open the account creator and focus the provisioning form immediately.'
  },
  'user-directory': {
    label: 'Users',
    barLabel: 'Users',
    presentation: 'label',
    group: 'Records',
    summary: 'Open the user directory, restore it if minimized, and keep active accounts in view.'
  },
  'create-role': {
    label: 'Create role',
    barLabel: 'Role',
    presentation: 'icon',
    group: 'Provisioning',
    summary: 'Open the role composer so custom tenant permissions can be assembled quickly.'
  },
  'role-directory': {
    label: 'Role catalog',
    barLabel: 'Roles',
    presentation: 'label',
    group: 'Records',
    summary: 'Open the role catalog and review presets, operator locks, and entitlement coverage.'
  },
  'display-mode': {
    label: 'Display mode',
    barLabel: 'Modes',
    presentation: 'icon',
    group: 'Context',
    summary: 'Open display mode switching to move between available operating contexts.'
  },
  'window-preferences': {
    label: 'Window manager',
    barLabel: 'Windows',
    presentation: 'label',
    group: 'Windowing',
    summary:
      'Tune floating widget chrome, title readability, snap behavior, and shell typography here first. Site color theme still lives in Settings > Theme Studio.'
  },
  'dock-preferences': {
    label: 'Pinned dock',
    barLabel: 'Dock',
    presentation: 'icon',
    group: 'Windowing',
    summary: 'Adjust pinned tool behavior, label reveal, button size, and cross-page dock presence.'
  },
  'settings-payload': {
    label: 'Settings payload',
    barLabel: 'Payload',
    presentation: 'icon',
    group: 'System',
    summary: 'Inspect the live settings payload and verify the control-plane contract in raw form.'
  },
  'catalog-search': {
    label: 'Discovery',
    barLabel: 'Search',
    presentation: 'label',
    group: 'Search',
    summary: 'Open the discovery launcher to search workspace resources and system records.'
  },
  'catalog-results': {
    label: 'Search results',
    barLabel: 'Results',
    presentation: 'icon',
    group: 'Search',
    summary: 'Open the search results surface and review the active discovery response set.'
  },
  'catalog-facets': {
    label: 'Facet distribution',
    barLabel: 'Facets',
    presentation: 'icon',
    group: 'Search',
    summary: 'Open facet distribution to scan counts and narrow large result sets quickly.'
  }
};
