<svelte:options
  customElement={{
    tag: 'efsdb-admin',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import type { AuthUser } from '@contracts/auth';
  import type { BootstrapPayload, BootstrapTheme } from '@contracts/bootstrap';
  import { readBootstrapPayloadForApp } from '@utils/bootstrap/hostProps';
  import { getTheme, onThemeChange } from '@utils/bootstrap/themeBridge';
  import { onMount } from 'svelte';
  import {
    createRole,
    createUser,
    getSettings,
    listRoles,
    listUsers,
    loadCatalogWorkspace
  } from './lib/api/adminClient';
  import { changeDisplayMode, ensureAdminSession, whoAmI } from './lib/api/authClient';
  import type {
    AdminEdgeDockState,
    AdminWidgetId,
    AdminWorkspaceCustomAction,
    AdminWorkspaceProfileMeta,
    AdminWorkspaceUiState,
    AdminWorkspaceWidgetLayout,
    AdminWidgetWindowState,
    NoticeState,
    RoleFormState,
    UserFormState
  } from './lib/types';

  import AdminShell from './components/AdminShell.svelte';
  import AdminWorkspaceToolbar from './components/AdminWorkspaceToolbar.svelte';
  import AdminWidgetWindow from './components/AdminWidgetWindow.svelte';
  import AdminWorkspaceItem from './components/AdminWorkspaceItem.svelte';
  import CatalogFacetsWidget from './components/CatalogFacetsWidget.svelte';
  import CatalogResultsWidget from './components/CatalogResultsWidget.svelte';
  import CatalogSearchWidget from './components/CatalogSearchWidget.svelte';
  import CreateRoleWidget from './components/CreateRoleWidget.svelte';
  import CreateUserWidget from './components/CreateUserWidget.svelte';
  import DisplayModePanel from './components/DisplayModePanel.svelte';
  import RolesListWidget from './components/RolesListWidget.svelte';
  import SettingsPayloadWidget from './components/SettingsPayloadWidget.svelte';
  import UsersListWidget from './components/UsersListWidget.svelte';
  import WindowPrefsWidget from './components/WindowPrefsWidget.svelte';
  import ToolDock from '@ui/components/shell/ToolDock.svelte';
  import {
    getAppIconMask,
    type AppIconName
  } from '@ui/components/icons/appIconCatalog';
  import type {
    WorkspaceButtonsActionDraft,
    WorkspaceButtonsItem
  } from './components/WorkspaceButtonsWidget.svelte';

  type AdminBootstrapPayload = BootstrapPayload & {
    app: 'admin';
    tag: 'efsdb-admin';
    urls?: {
      legacy?: string;
    };
  };

  type WindowConfig = {
    title: string;
    width: number;
    height: number;
    x: number;
    y: number;
  };

  type WindowDragSeed = {
    pointerId: number;
    clientX: number;
    clientY: number;
  };

  type ToolbarButtonPresentation = 'icon' | 'label';
  type ToolbarButtonMeta = {
    label: string;
    barLabel: string;
    presentation: ToolbarButtonPresentation;
    group: string;
    summary: string;
  };

  const widgetIds: AdminWidgetId[] = [
    'create-user',
    'user-directory',
    'create-role',
    'role-directory',
    'display-mode',
    'window-preferences',
    'settings-payload',
    'catalog-search',
    'catalog-results',
    'catalog-facets'
  ];

  const widgetStorageBase = 'widget-windows';
  const workspaceLayoutStorageBase = 'workspace-layouts';
  const workspaceUiStorageBase = 'workspace-ui';
  const workspaceProfileMetaStorageBase = 'workspace-profile-meta';
  const workspaceProfileSnapshotStorageBase = 'workspace-profile-snapshot';
  const edgeDockStorageBase = 'edge-dock-widgets';
  const edgeDockStateStorageBase = 'edge-dock-state';
  const WORKSPACE_GRID_COLUMNS = 12;
  const MIN_WORKSPACE_WIDGET_WIDTH = 3;
  const MIN_WORKSPACE_WIDGET_HEIGHT = 8;
  const defaultToolbarWidgets: AdminWidgetId[] = [
    'create-user',
    'user-directory',
    'create-role',
    'role-directory',
    'catalog-search',
    'window-preferences'
  ];
  const defaultToolbarCustomActions = ['workspace-discovery'];
  const widgetIconNames: Record<AdminWidgetId, AppIconName> = {
    'create-user': 'create-user',
    'user-directory': 'user-directory',
    'create-role': 'create-role',
    'role-directory': 'role-directory',
    'display-mode': 'display-mode',
    'window-preferences': 'window-preferences',
    'settings-payload': 'settings-payload',
    'catalog-search': 'catalog-search',
    'catalog-results': 'catalog-results',
    'catalog-facets': 'catalog-facets'
  };
  const widgetIconMasks = widgetIds.reduce(
    (accumulator, widgetId) => {
      accumulator[widgetId] = getAppIconMask(widgetIconNames[widgetId]);
      return accumulator;
    },
    {} as Record<AdminWidgetId, string>
  );

  const widgetWindowConfig: Record<AdminWidgetId, WindowConfig> = {
    'create-user': { title: 'Create user', width: 620, height: 540, x: 96, y: 76 },
    'user-directory': { title: 'User directory', width: 660, height: 620, x: 152, y: 104 },
    'create-role': { title: 'Create role', width: 640, height: 560, x: 208, y: 92 },
    'role-directory': { title: 'Role catalog', width: 720, height: 620, x: 264, y: 118 },
    'display-mode': { title: 'Display mode', width: 640, height: 560, x: 320, y: 86 },
    'window-preferences': { title: 'Window preferences', width: 720, height: 680, x: 148, y: 188 },
    'settings-payload': { title: 'Settings payload', width: 840, height: 640, x: 218, y: 142 },
    'catalog-search': { title: 'Search control', width: 700, height: 420, x: 252, y: 72 },
    'catalog-results': { title: 'Search results', width: 760, height: 620, x: 286, y: 136 },
    'catalog-facets': { title: 'Facet distribution', width: 620, height: 560, x: 342, y: 174 }
  };
  const widgetToolbarMeta: Record<AdminWidgetId, ToolbarButtonMeta> = {
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
      summary: 'Open the staged window manager preview and apply chrome changes only when ready.'
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
  const customActionIconOptions: Array<{ value: AppIconName; label: string }> = [
    { value: 'buttons-manager', label: 'Workspace tools' },
    { value: 'catalog-search', label: 'Discovery' },
    { value: 'window-preferences', label: 'Window manager' },
    { value: 'display-mode', label: 'Display mode' },
    { value: 'create-user', label: 'Create user' },
    { value: 'create-role', label: 'Create role' },
    { value: 'edge', label: 'Edge shortcut' },
    { value: 'restore', label: 'Restore' }
  ];
  const workspaceProfileIds = ['workspace-primary', 'workspace-pro-2', 'workspace-pro-3'] as const;

  function createDefaultCustomActions(): AdminWorkspaceCustomAction[] {
    return [
      {
        id: 'workspace-discovery',
        label: 'Discovery stack',
        barLabel: 'Discover',
        iconName: 'catalog-search',
        summary: 'Open search, results, and facets together for one-pass workspace discovery.',
        steps: [
          { type: 'open-widget', widgetId: 'catalog-search' },
          { type: 'open-widget', widgetId: 'catalog-results' },
          { type: 'open-widget', widgetId: 'catalog-facets' }
        ]
      },
      {
        id: 'workspace-roles',
        label: 'Role toolkit',
        barLabel: 'Roles+',
        iconName: 'create-role',
        summary: 'Open role creation and the role catalog together for faster policy work.',
        steps: [
          { type: 'open-widget', widgetId: 'create-role' },
          { type: 'open-widget', widgetId: 'role-directory' }
        ]
      }
    ];
  }

  function createWorkspaceProfiles(): AdminWorkspaceProfileMeta[] {
    return [
      {
        id: workspaceProfileIds[0],
        label: 'Workspace 1',
        savedAt: null
      },
      {
        id: workspaceProfileIds[1],
        label: 'Workspace 2',
        locked: true,
        savedAt: null
      },
      {
        id: workspaceProfileIds[2],
        label: 'Workspace 3',
        locked: true,
        savedAt: null
      }
    ];
  }

  const bootstrap = readBootstrapPayloadForApp<AdminBootstrapPayload>('admin');
  const apiBase = bootstrap.apiBase ?? '/_efsdb/api/admin';
  const authBase = bootstrap.authBase ?? '/_efsdb/api/auth';
  const host = $host();

  function getViewScopedStorageKey(base: string): string {
    if (typeof window === 'undefined') {
      return `efsdb:admin:${base}`;
    }

    return `efsdb:admin:${window.location.pathname}:${base}`;
  }

  function getGlobalStorageKey(base: string): string {
    return `efsdb:admin:global:${base}`;
  }

  function createWidgetWindows(): Record<AdminWidgetId, AdminWidgetWindowState> {
    return {
      'create-user': { open: false, pinned: false, windowState: 'normal' },
      'user-directory': { open: false, pinned: false, windowState: 'normal' },
      'create-role': { open: false, pinned: false, windowState: 'normal' },
      'role-directory': { open: false, pinned: false, windowState: 'normal' },
      'display-mode': { open: false, pinned: false, windowState: 'normal' },
      'window-preferences': { open: false, pinned: false, windowState: 'normal' },
      'settings-payload': { open: false, pinned: false, windowState: 'normal' },
      'catalog-search': { open: false, pinned: false, windowState: 'normal' },
      'catalog-results': { open: false, pinned: false, windowState: 'normal' },
      'catalog-facets': { open: false, pinned: false, windowState: 'normal' }
    };
  }

  function createWorkspaceLayouts(): Record<AdminWidgetId, AdminWorkspaceWidgetLayout> {
    return {
      'create-user': { col: 1, row: 1, width: 4, height: 18 },
      'create-role': { col: 5, row: 1, width: 4, height: 18 },
      'display-mode': { col: 9, row: 1, width: 4, height: 16 },
      'user-directory': { col: 1, row: 19, width: 6, height: 18 },
      'role-directory': { col: 7, row: 19, width: 6, height: 18 },
      'catalog-search': { col: 1, row: 37, width: 4, height: 14 },
      'catalog-results': { col: 5, row: 37, width: 5, height: 18 },
      'catalog-facets': { col: 10, row: 37, width: 3, height: 18 },
      'window-preferences': { col: 1, row: 51, width: 4, height: 22 },
      'settings-payload': { col: 5, row: 73, width: 8, height: 14 }
    };
  }

  function createWorkspaceUiState(): AdminWorkspaceUiState {
    return {
      editing: false,
      toolbarWidgets: [...defaultToolbarWidgets],
      edgePinnedWidgets: [],
      hiddenWidgets: [],
      customActions: createDefaultCustomActions(),
      toolbarCustomActions: [...defaultToolbarCustomActions]
    };
  }

  function createEdgeDockState(): AdminEdgeDockState {
    return {
      edge: 'right',
      ratio: 0.84
    };
  }

  function isAdminWidgetId(value: unknown): value is AdminWidgetId {
    return typeof value === 'string' && widgetIds.includes(value as AdminWidgetId);
  }

  function normalizeWorkspaceWidgetList(
    value: unknown,
    fallback: AdminWidgetId[]
  ): AdminWidgetId[] {
    if (!Array.isArray(value)) {
      return [...fallback];
    }

    const normalized: AdminWidgetId[] = [];
    const seen = new Set<AdminWidgetId>();

    for (const item of value) {
      if (!isAdminWidgetId(item) || seen.has(item)) {
        continue;
      }

      seen.add(item);
      normalized.push(item);
    }

    return normalized;
  }

  function normalizeWorkspaceActionIdList(
    value: unknown,
    availableActionIds: string[],
    fallback: string[]
  ): string[] {
    if (!Array.isArray(value)) {
      return [...fallback];
    }

    const allowed = new Set(availableActionIds);
    const normalized: string[] = [];
    const seen = new Set<string>();

    for (const item of value) {
      if (typeof item !== 'string' || seen.has(item) || !allowed.has(item)) {
        continue;
      }

      seen.add(item);
      normalized.push(item);
    }

    return normalized;
  }

  function isCustomActionIcon(value: unknown): value is AppIconName {
    return (
      typeof value === 'string' &&
      customActionIconOptions.some((option) => option.value === value)
    );
  }

  function normalizeWorkspaceCustomActions(value: unknown): AdminWorkspaceCustomAction[] {
    const defaults = createDefaultCustomActions();

    if (!Array.isArray(value)) {
      return defaults;
    }

    const normalized: AdminWorkspaceCustomAction[] = [];
    const seen = new Set<string>();

    for (const candidate of value) {
      if (!candidate || typeof candidate !== 'object') {
        continue;
      }

      const input = candidate as Partial<AdminWorkspaceCustomAction>;
      const id = typeof input.id === 'string' ? input.id.trim() : '';
      if (!id || seen.has(id)) {
        continue;
      }

      const steps = Array.isArray(input.steps)
        ? input.steps.flatMap((step) => {
            if (
              !step ||
              typeof step !== 'object' ||
              step.type !== 'open-widget' ||
              !isAdminWidgetId(step.widgetId)
            ) {
              return [];
            }

            return [
              {
                type: 'open-widget' as const,
                widgetId: step.widgetId,
                pinned: Boolean(step.pinned)
              }
            ];
          })
        : [];

      if (steps.length === 0) {
        continue;
      }

      seen.add(id);
      normalized.push({
        id,
        label: typeof input.label === 'string' && input.label.trim() ? input.label.trim() : id,
        barLabel:
          typeof input.barLabel === 'string' && input.barLabel.trim()
            ? input.barLabel.trim()
            : typeof input.label === 'string' && input.label.trim()
              ? input.label.trim()
              : id,
        iconName: isCustomActionIcon(input.iconName) ? input.iconName : 'buttons-manager',
        summary:
          typeof input.summary === 'string' && input.summary.trim()
            ? input.summary.trim()
            : `Open ${steps.length} workspace widget${steps.length === 1 ? '' : 's'}.`,
        steps
      });
    }

    return normalized.length > 0 ? normalized : defaults;
  }

  function normalizeWorkspaceProfiles(value: unknown): AdminWorkspaceProfileMeta[] {
    const defaults = createWorkspaceProfiles();

    if (!Array.isArray(value)) {
      return defaults;
    }

    const storedById = new Map<string, AdminWorkspaceProfileMeta>();

    for (const candidate of value) {
      if (!candidate || typeof candidate !== 'object') {
        continue;
      }

      const input = candidate as Partial<AdminWorkspaceProfileMeta>;
      if (typeof input.id !== 'string') {
        continue;
      }

      storedById.set(input.id, {
        id: input.id,
        label:
          typeof input.label === 'string' && input.label.trim() ? input.label.trim() : input.id,
        locked: Boolean(input.locked),
        savedAt:
          typeof input.savedAt === 'string' && input.savedAt.trim() ? input.savedAt : null
      });
    }

    return defaults.map((profile) => {
      const stored = storedById.get(profile.id);
      if (!stored) {
        return profile;
      }

      return {
        ...profile,
        savedAt: stored.savedAt ?? profile.savedAt ?? null
      };
    });
  }

  function clampWorkspaceLayout(layout: AdminWorkspaceWidgetLayout): AdminWorkspaceWidgetLayout {
    const width = Math.max(
      MIN_WORKSPACE_WIDGET_WIDTH,
      Math.min(WORKSPACE_GRID_COLUMNS, Math.round(layout.width))
    );

    return {
      col: Math.max(1, Math.min(WORKSPACE_GRID_COLUMNS - width + 1, Math.round(layout.col))),
      row: Math.max(1, Math.round(layout.row)),
      width,
      height: Math.max(MIN_WORKSPACE_WIDGET_HEIGHT, Math.round(layout.height))
    };
  }

  function doWorkspaceLayoutsOverlap(
    left: AdminWorkspaceWidgetLayout,
    right: AdminWorkspaceWidgetLayout
  ): boolean {
    return (
      left.col < right.col + right.width &&
      left.col + left.width > right.col &&
      left.row < right.row + right.height &&
      left.row + left.height > right.row
    );
  }

  function placeWorkspaceWidget(
    layout: AdminWorkspaceWidgetLayout,
    placed: Partial<Record<AdminWidgetId, AdminWorkspaceWidgetLayout>>
  ): AdminWorkspaceWidgetLayout {
    const seeded = clampWorkspaceLayout(layout);
    const maxRow = Math.max(
      1,
      seeded.row + seeded.height + 96,
      ...Object.values(placed).map((otherLayout) =>
        otherLayout ? otherLayout.row + otherLayout.height + 4 : 1
      )
    );

    for (let row = 1; row <= maxRow; row += 1) {
      for (let col = 1; col <= WORKSPACE_GRID_COLUMNS - seeded.width + 1; col += 1) {
        const candidate = {
          ...seeded,
          col,
          row
        };

        const blocked = Object.values(placed).some(
          (otherLayout) => otherLayout && doWorkspaceLayoutsOverlap(candidate, otherLayout)
        );

        if (!blocked) {
          return candidate;
        }
      }
    }

    return seeded;
  }

  function sortWorkspaceWidgets(
    layouts: Record<AdminWidgetId, AdminWorkspaceWidgetLayout>
  ): AdminWidgetId[] {
    return [...widgetIds].sort((leftId, rightId) => {
      const left = layouts[leftId];
      const right = layouts[rightId];
      return left.row - right.row || left.col - right.col;
    });
  }

  function resolveWorkspaceLayouts(
    currentLayouts: Record<AdminWidgetId, AdminWorkspaceWidgetLayout>,
    activeWidgetId: AdminWidgetId,
    nextLayout: AdminWorkspaceWidgetLayout
  ): Record<AdminWidgetId, AdminWorkspaceWidgetLayout> {
    const seeded = widgetIds.reduce(
      (accumulator, widgetId) => {
        accumulator[widgetId] = { ...currentLayouts[widgetId] };
        return accumulator;
      },
      {} as Record<AdminWidgetId, AdminWorkspaceWidgetLayout>
    );

    seeded[activeWidgetId] = clampWorkspaceLayout(nextLayout);

    const placed: Partial<Record<AdminWidgetId, AdminWorkspaceWidgetLayout>> = {
      [activeWidgetId]: seeded[activeWidgetId]
    };

    const ordered = sortWorkspaceWidgets(seeded).filter((widgetId) => widgetId !== activeWidgetId);

    for (const widgetId of ordered) {
      placed[widgetId] = placeWorkspaceWidget(seeded[widgetId], placed);
    }

    const resolved = placed as Record<AdminWidgetId, AdminWorkspaceWidgetLayout>;

    for (const widgetId of ordered) {
      let candidate = resolved[widgetId];

      while (candidate.row > 1) {
        const nextCandidate = { ...candidate, row: candidate.row - 1 };
        const blocked = Object.entries(resolved).some(
          ([otherWidgetId, otherLayout]) =>
            otherWidgetId !== widgetId && doWorkspaceLayoutsOverlap(nextCandidate, otherLayout)
        );

        if (blocked) {
          break;
        }

        candidate = nextCandidate;
      }

      resolved[widgetId] = candidate;
    }

    return resolved;
  }

  function isWindowMode(value: unknown): value is AdminWidgetWindowState['windowState'] {
    return value === 'normal' || value === 'maximized' || value === 'minimized' || value === 'rolled-up';
  }

  function normalizeWidgetWindows(
    value: unknown
  ): Record<AdminWidgetId, AdminWidgetWindowState> {
    const defaults = createWidgetWindows();

    if (!value || typeof value !== 'object') {
      return defaults;
    }

    const input = value as Partial<Record<AdminWidgetId, Partial<AdminWidgetWindowState>>>;

    for (const widgetId of widgetIds) {
      const candidate = input[widgetId];
      if (!candidate) {
        continue;
      }

      defaults[widgetId] = {
        open: Boolean(candidate.open),
        pinned: Boolean(candidate.pinned),
        windowState: isWindowMode(candidate.windowState) ? candidate.windowState : 'normal'
      };
    }

    return defaults;
  }

  function normalizeWorkspaceLayouts(
    value: unknown
  ): Record<AdminWidgetId, AdminWorkspaceWidgetLayout> {
    const defaults = createWorkspaceLayouts();

    if (!value || typeof value !== 'object') {
      return defaults;
    }

    const input = value as Partial<Record<AdminWidgetId, Partial<AdminWorkspaceWidgetLayout>>>;

    for (const widgetId of widgetIds) {
      const candidate = input[widgetId];
      if (!candidate) {
        continue;
      }

      defaults[widgetId] = clampWorkspaceLayout({
        col: candidate.col ?? defaults[widgetId].col,
        row: candidate.row ?? defaults[widgetId].row,
        width: candidate.width ?? defaults[widgetId].width,
        height: candidate.height ?? defaults[widgetId].height
      });
    }

    return defaults;
  }

  function normalizeWorkspaceUiState(value: unknown): AdminWorkspaceUiState {
    const defaults = createWorkspaceUiState();

    if (!value || typeof value !== 'object') {
      return defaults;
    }

    const input = value as Partial<AdminWorkspaceUiState> & {
      favoriteWidgets?: AdminWidgetId[];
    };
    const customActions = normalizeWorkspaceCustomActions(input.customActions);

    return {
      editing: Boolean(input.editing),
      toolbarWidgets: normalizeWorkspaceWidgetList(
        input.toolbarWidgets ?? input.favoriteWidgets,
        defaults.toolbarWidgets
      ),
      edgePinnedWidgets: normalizeWorkspaceWidgetList(
        input.edgePinnedWidgets,
        defaults.edgePinnedWidgets
      ),
      hiddenWidgets: normalizeWorkspaceWidgetList(input.hiddenWidgets, defaults.hiddenWidgets),
      customActions,
      toolbarCustomActions: normalizeWorkspaceActionIdList(
        input.toolbarCustomActions,
        customActions.map((action) => action.id),
        defaults.toolbarCustomActions
      )
    };
  }

  function normalizeEdgeDockState(value: unknown): AdminEdgeDockState {
    const defaults = createEdgeDockState();

    if (!value || typeof value !== 'object') {
      return defaults;
    }

    const input = value as Partial<AdminEdgeDockState>;
    const edge =
      input.edge === 'left' ||
      input.edge === 'right' ||
      input.edge === 'top' ||
      input.edge === 'bottom'
        ? input.edge
        : defaults.edge;
    const ratio = Number.isFinite(input.ratio)
      ? Math.max(0.08, Math.min(0.92, Number(input.ratio)))
      : defaults.ratio;

    return {
      edge,
      ratio
    };
  }

  function areWorkspaceLayoutsEqual(
    left: Record<AdminWidgetId, AdminWorkspaceWidgetLayout>,
    right: Record<AdminWidgetId, AdminWorkspaceWidgetLayout>
  ): boolean {
    return widgetIds.every((widgetId) => {
      const leftLayout = left[widgetId];
      const rightLayout = right[widgetId];

      return (
        leftLayout.col === rightLayout.col &&
        leftLayout.row === rightLayout.row &&
        leftLayout.width === rightLayout.width &&
        leftLayout.height === rightLayout.height
      );
    });
  }

  function compactWorkspaceLayouts(
    currentLayouts: Record<AdminWidgetId, AdminWorkspaceWidgetLayout>,
    hiddenWidgets: AdminWidgetId[]
  ): Record<AdminWidgetId, AdminWorkspaceWidgetLayout> {
    const hidden = new Set(hiddenWidgets);
    const nextLayouts = widgetIds.reduce(
      (accumulator, widgetId) => {
        accumulator[widgetId] = { ...currentLayouts[widgetId] };
        return accumulator;
      },
      {} as Record<AdminWidgetId, AdminWorkspaceWidgetLayout>
    );

    const visibleWidgetIds = sortWorkspaceWidgets(currentLayouts).filter((widgetId) => !hidden.has(widgetId));
    const placed: Partial<Record<AdminWidgetId, AdminWorkspaceWidgetLayout>> = {};

    for (const widgetId of visibleWidgetIds) {
      placed[widgetId] = placeWorkspaceWidget(nextLayouts[widgetId], placed);
    }

    const resolved = placed as Record<AdminWidgetId, AdminWorkspaceWidgetLayout>;

    for (const widgetId of visibleWidgetIds) {
      let candidate = resolved[widgetId];

      while (candidate.row > 1) {
        const nextCandidate = { ...candidate, row: candidate.row - 1 };
        const blocked = Object.entries(resolved).some(
          ([otherWidgetId, otherLayout]) =>
            otherWidgetId !== widgetId && doWorkspaceLayoutsOverlap(nextCandidate, otherLayout)
        );

        if (blocked) {
          break;
        }

        candidate = nextCandidate;
      }

      resolved[widgetId] = candidate;
      nextLayouts[widgetId] = candidate;
    }

    return nextLayouts;
  }

  function areListsEqual(left: string[], right: string[]): boolean {
    return left.length === right.length && left.every((value, index) => value === right[index]);
  }

  function describeEntity(value: string): string {
    switch (value) {
      case 'system_users':
        return 'System users';
      case 'system_roles':
        return 'System roles';
      default:
        return 'Workspace resources';
    }
  }

  let bootUser = $state<AuthUser | null>((bootstrap.user as AuthUser | null | undefined) ?? null);
  let users = $state([] as Array<{ id: string; username: string; name: string; roleId: string; status: string }>);
  let roles = $state([] as Array<{ id: string; name: string; description?: string; entitlements: string[]; operatorOnly?: boolean; system?: boolean }>);
  let settings = $state<Record<string, unknown> | null>(null);
  let searchResults = $state([] as Array<{ id: string; summary: Record<string, unknown> }>);
  let facets = $state<Record<string, { value: string; label: string; count: number }[]>>({});
  let notice = $state<NoticeState | null>(null);
  let loading = $state(true);
  let submittingUser = $state(false);
  let submittingRole = $state(false);
  let switchingMode = $state(false);
  let catalogLoaded = $state(false);
  let catalogLoading = $state(false);
  let widgetWindows = $state<Record<AdminWidgetId, AdminWidgetWindowState>>(createWidgetWindows());
  let windowStack = $state<AdminWidgetId[]>([]);
  let workspaceLayouts = $state<Record<AdminWidgetId, AdminWorkspaceWidgetLayout>>(createWorkspaceLayouts());
  let workspaceUi = $state<AdminWorkspaceUiState>(createWorkspaceUiState());
  let workspaceProfiles = $state<AdminWorkspaceProfileMeta[]>(createWorkspaceProfiles());
  let workspacePreview = $state<{ widgetId: AdminWidgetId; layout: AdminWorkspaceWidgetLayout } | null>(null);
  let workspaceStack = $state<AdminWidgetId[]>([...widgetIds]);
  let workspaceCompact = $state(false);
  let workspaceWidth = $state(0);
  let toolbarManagerOpen = $state(false);
  let widgetPersistenceReady = $state(false);
  let edgeDockState = $state<AdminEdgeDockState>(createEdgeDockState());
  let windowDragSeeds = $state<Partial<Record<AdminWidgetId, WindowDragSeed>>>({});
  let edgeDockRestoreStates = $state<Partial<Record<AdminWidgetId, AdminWidgetWindowState['windowState']>>>({});

  let userForm = $state<UserFormState>({
    username: '',
    name: '',
    roleId: '',
    loginKey: ''
  });

  let roleForm = $state<RoleFormState>({
    id: '',
    name: '',
    description: '',
    entitlements: 'NATURAL_VIEW'
  });

  let userResult = $state<NoticeState | null>(null);
  let roleResult = $state<NoticeState | null>(null);
  let catalogQuery = $state('');
  let catalogEntity = $state('public_workspace_files');

  let activeUserCount = $derived(users.filter((user) => user.status.toLowerCase() === 'active').length);
  let assignableRoleCount = $derived(roles.filter((role) => !role.operatorOnly).length);
  let availableModeCount = $derived(bootUser?.availableDisplayModes?.length ?? 0);
  let workspaceEditing = $derived(workspaceUi.editing && !workspaceCompact);
  let displayWorkspaceLayouts = $derived(
    workspacePreview
      ? resolveWorkspaceLayouts(workspaceLayouts, workspacePreview.widgetId, workspacePreview.layout)
      : workspaceLayouts
  );
  let workspaceLayoutDirty = $derived(
    !areWorkspaceLayoutsEqual(workspaceLayouts, createWorkspaceLayouts()) ||
      !areListsEqual(workspaceUi.hiddenWidgets, createWorkspaceUiState().hiddenWidgets) ||
      !areListsEqual(workspaceUi.toolbarWidgets, createWorkspaceUiState().toolbarWidgets) ||
      !areListsEqual(workspaceUi.toolbarCustomActions, createWorkspaceUiState().toolbarCustomActions)
  );
  let orderedToolbarWidgetIds = $derived([
    ...workspaceUi.toolbarWidgets,
    ...widgetIds.filter((widgetId) => !workspaceUi.toolbarWidgets.includes(widgetId))
  ]);
  let orderedToolbarActionIds = $derived([
    ...workspaceUi.toolbarCustomActions,
    ...workspaceUi.customActions
      .map((action) => action.id)
      .filter((actionId) => !workspaceUi.toolbarCustomActions.includes(actionId))
  ]);
  let dockWidgetIds = $derived(workspaceUi.edgePinnedWidgets);
  let workspaceToolbarWidgets = $derived(
    orderedToolbarWidgetIds.map((widgetId) => ({
      kind: 'widget' as const,
      id: widgetId,
      label: widgetToolbarMeta[widgetId].label,
      barLabel: widgetToolbarMeta[widgetId].barLabel,
      iconMask: widgetIconMasks[widgetId],
      open: widgetWindows[widgetId].open && widgetWindows[widgetId].windowState !== 'minimized',
      inToolbar: workspaceUi.toolbarWidgets.includes(widgetId),
      edgePinned: workspaceUi.edgePinnedWidgets.includes(widgetId),
      inWorkspace: !workspaceUi.hiddenWidgets.includes(widgetId),
      presentation: widgetToolbarMeta[widgetId].presentation,
      group: widgetToolbarMeta[widgetId].group,
      summary: widgetToolbarMeta[widgetId].summary
    }))
  );
  let workspaceToolbarActions = $derived(
    orderedToolbarActionIds
      .map((actionId) => workspaceUi.customActions.find((action) => action.id === actionId))
      .filter((action): action is AdminWorkspaceCustomAction => Boolean(action))
      .map((action) => ({
        kind: 'action' as const,
        id: action.id,
        label: action.label,
        barLabel: action.barLabel,
        iconMask: getAppIconMask(action.iconName),
        iconName: action.iconName,
        inToolbar: workspaceUi.toolbarCustomActions.includes(action.id),
        group: 'Macros',
        summary: action.summary,
        stepCount: action.steps.length
      }))
  );
  let workspaceToolbarItems = $derived(
    [...workspaceToolbarWidgets, ...workspaceToolbarActions] as WorkspaceButtonsItem[]
  );
  let edgeDockItems = $derived(
    dockWidgetIds.map((widgetId) => ({
      id: widgetId,
      label: widgetToolbarMeta[widgetId].label,
      iconMask: widgetIconMasks[widgetId],
      active: widgetWindows[widgetId].open && widgetWindows[widgetId].windowState !== 'minimized'
    }))
  );
  let summaryMetrics = $derived([
    {
      label: 'Users',
      value: String(users.length),
      detail: `${activeUserCount} active provisioned accounts`
    },
    {
      label: 'Roles',
      value: String(roles.length),
      detail: `${assignableRoleCount} assignable presets`
    },
    {
      label: 'Modes',
      value: String(availableModeCount),
      detail: bootUser ? `actual ${bootUser.actualRole}` : 'awaiting session'
    },
    {
      label: 'Search',
      value: catalogLoaded ? String(searchResults.length) : '0',
      detail: catalogLoaded ? describeEntity(catalogEntity) : 'run a search to inspect'
    }
  ]);

  function applyTheme(theme: BootstrapTheme): void {
    host.setAttribute('theme', theme);
  }

  function syncWindowStack(): void {
    windowStack = widgetIds.filter((widgetId) => widgetWindows[widgetId].open);
  }

  function bringWindowToFront(widgetId: AdminWidgetId): void {
    windowStack = [...windowStack.filter((entry) => entry !== widgetId), widgetId];
  }

  function bringWorkspaceToFront(widgetId: AdminWidgetId): void {
    workspaceStack = [...workspaceStack.filter((entry) => entry !== widgetId), widgetId];
  }

  function setWindowDragSeed(widgetId: AdminWidgetId, seed: WindowDragSeed): void {
    windowDragSeeds = {
      ...windowDragSeeds,
      [widgetId]: seed
    };
  }

  function clearWindowDragSeed(widgetId: AdminWidgetId): void {
    if (!(widgetId in windowDragSeeds)) {
      return;
    }

    const nextSeeds = { ...windowDragSeeds };
    delete nextSeeds[widgetId];
    windowDragSeeds = nextSeeds;
  }

  function setEdgeDockRestoreState(
    widgetId: AdminWidgetId,
    state: AdminWidgetWindowState['windowState']
  ): void {
    edgeDockRestoreStates = {
      ...edgeDockRestoreStates,
      [widgetId]: state
    };
  }

  function clearEdgeDockRestoreState(widgetId: AdminWidgetId): void {
    if (!(widgetId in edgeDockRestoreStates)) {
      return;
    }

    const nextStates = { ...edgeDockRestoreStates };
    delete nextStates[widgetId];
    edgeDockRestoreStates = nextStates;
  }

  function consumeWindowDragSeed(widgetId: AdminWidgetId): void {
    clearWindowDragSeed(widgetId);
  }

  function toggleWorkspaceEditing(): void {
    if (workspaceCompact) {
      return;
    }

    workspaceUi.editing = !workspaceUi.editing;
  }

  function toggleToolbarManager(): void {
    toolbarManagerOpen = !toolbarManagerOpen;
  }

  function saveWorkspaceProfile(): void {
    const savedAt = new Date().toISOString();

    workspaceProfiles = workspaceProfiles.map((profile, index) =>
      index === 0
        ? {
            ...profile,
            savedAt
          }
        : profile
    );

    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(
      getViewScopedStorageKey(workspaceProfileSnapshotStorageBase),
      JSON.stringify({
        layouts: widgetIds.reduce(
          (accumulator, widgetId) => {
            accumulator[widgetId] = workspaceLayouts[widgetId];
            return accumulator;
          },
          {} as Record<AdminWidgetId, AdminWorkspaceWidgetLayout>
        ),
        ui: {
          hiddenWidgets: workspaceUi.hiddenWidgets,
          toolbarWidgets: workspaceUi.toolbarWidgets,
          toolbarCustomActions: workspaceUi.toolbarCustomActions,
          customActions: workspaceUi.customActions
        }
      })
    );
  }

  function toggleToolbarWidget(widgetId: AdminWidgetId): void {
    if (workspaceUi.toolbarWidgets.includes(widgetId)) {
      workspaceUi.toolbarWidgets = workspaceUi.toolbarWidgets.filter((entry) => entry !== widgetId);
      return;
    }

    workspaceUi.toolbarWidgets = [...workspaceUi.toolbarWidgets, widgetId];
  }

  function toggleWorkspaceWidget(widgetId: AdminWidgetId): void {
    const nextHiddenWidgets = workspaceUi.hiddenWidgets.includes(widgetId)
      ? workspaceUi.hiddenWidgets.filter((entry) => entry !== widgetId)
      : [...workspaceUi.hiddenWidgets, widgetId];

    workspaceUi.hiddenWidgets = nextHiddenWidgets;
    workspaceLayouts = compactWorkspaceLayouts(workspaceLayouts, nextHiddenWidgets);
    workspaceStack = widgetIds.filter((entry) => !nextHiddenWidgets.includes(entry));
  }

  function toggleToolbarCustomAction(actionId: string): void {
    if (workspaceUi.toolbarCustomActions.includes(actionId)) {
      workspaceUi.toolbarCustomActions = workspaceUi.toolbarCustomActions.filter(
        (entry) => entry !== actionId
      );
      return;
    }

    workspaceUi.toolbarCustomActions = [...workspaceUi.toolbarCustomActions, actionId];
  }

  function activateCustomAction(actionId: string): void {
    const action = workspaceUi.customActions.find((entry) => entry.id === actionId);
    if (!action) {
      return;
    }

    toolbarManagerOpen = false;

    for (const step of action.steps) {
      openWidget(step.widgetId, {
        pinned: Boolean(step.pinned)
      });
    }
  }

  function deleteCustomAction(actionId: string): void {
    workspaceUi.customActions = workspaceUi.customActions.filter((action) => action.id !== actionId);
    workspaceUi.toolbarCustomActions = workspaceUi.toolbarCustomActions.filter(
      (entry) => entry !== actionId
    );
  }

  function createCustomAction(draft: WorkspaceButtonsActionDraft): void {
    const label = draft.label.trim();
    if (!label) {
      return;
    }

    const steps = draft.steps
      .filter((step) => isAdminWidgetId(step.widgetId))
      .map((step) => ({
        type: 'open-widget' as const,
        widgetId: step.widgetId,
        pinned: Boolean(step.pinned)
      }));

    if (steps.length === 0) {
      return;
    }

    const id = `workspace-action-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
    const barLabel = draft.barLabel.trim() || label;
    const summary =
      draft.summary.trim() || `Open ${steps.length} workspace widget${steps.length === 1 ? '' : 's'}.`;

    workspaceUi.customActions = [
      ...workspaceUi.customActions,
      {
        id,
        label,
        barLabel,
        iconName: draft.iconName,
        summary,
        steps
      }
    ];
    workspaceUi.toolbarCustomActions = [...workspaceUi.toolbarCustomActions, id];
  }

  function toggleEdgePinnedWidget(widgetId: AdminWidgetId): void {
    if (workspaceUi.edgePinnedWidgets.includes(widgetId)) {
      workspaceUi.edgePinnedWidgets = workspaceUi.edgePinnedWidgets.filter(
        (entry) => entry !== widgetId
      );
      widgetWindows[widgetId].pinned = false;
      clearEdgeDockRestoreState(widgetId);
      return;
    }

    workspaceUi.edgePinnedWidgets = [...workspaceUi.edgePinnedWidgets, widgetId];
    if (widgetWindows[widgetId].open) {
      widgetWindows[widgetId].pinned = true;
    }
  }

  function activateEdgeDockItem(itemId: string): void {
    if (!isAdminWidgetId(itemId)) {
      return;
    }

    if (widgetWindows[itemId].open && widgetWindows[itemId].windowState !== 'minimized') {
      setEdgeDockRestoreState(itemId, widgetWindows[itemId].windowState);
      widgetWindows[itemId].windowState = 'minimized';
      return;
    }

    if (widgetWindows[itemId].open && widgetWindows[itemId].windowState === 'minimized') {
      widgetWindows[itemId].windowState = edgeDockRestoreStates[itemId] ?? 'normal';
      bringWindowToFront(itemId);
      return;
    }

    openWidget(itemId, {
      pinned: true
    });
  }

  function removeEdgeDockItem(itemId: string): void {
    if (!isAdminWidgetId(itemId)) {
      return;
    }

    widgetWindows[itemId].pinned = false;
    widgetWindows[itemId].open = false;
    widgetWindows[itemId].windowState = 'normal';
    workspaceUi.edgePinnedWidgets = workspaceUi.edgePinnedWidgets.filter((entry) => entry !== itemId);
    clearEdgeDockRestoreState(itemId);
    clearWindowDragSeed(itemId);
    windowStack = windowStack.filter((entry) => entry !== itemId);
  }

  function openWidget(
    widgetId: AdminWidgetId,
    options: { pinned?: boolean; dragSeed?: WindowDragSeed } = {}
  ): void {
    widgetWindows[widgetId].open = true;
    widgetWindows[widgetId].windowState = 'normal';
    if (options.pinned) {
      widgetWindows[widgetId].pinned = true;
      if (!workspaceUi.edgePinnedWidgets.includes(widgetId)) {
        workspaceUi.edgePinnedWidgets = [...workspaceUi.edgePinnedWidgets, widgetId];
      }
    }
    if (options.dragSeed) {
      setWindowDragSeed(widgetId, options.dragSeed);
    } else {
      clearWindowDragSeed(widgetId);
    }
    clearEdgeDockRestoreState(widgetId);
    toolbarManagerOpen = false;
    bringWindowToFront(widgetId);
  }

  function toggleWidgetPin(widgetId: AdminWidgetId): void {
    widgetWindows[widgetId].open = true;
    widgetWindows[widgetId].windowState = 'normal';
    widgetWindows[widgetId].pinned = !widgetWindows[widgetId].pinned;
    if (widgetWindows[widgetId].pinned && !workspaceUi.edgePinnedWidgets.includes(widgetId)) {
      workspaceUi.edgePinnedWidgets = [...workspaceUi.edgePinnedWidgets, widgetId];
    } else if (!widgetWindows[widgetId].pinned) {
      workspaceUi.edgePinnedWidgets = workspaceUi.edgePinnedWidgets.filter(
        (entry) => entry !== widgetId
      );
      clearEdgeDockRestoreState(widgetId);
    }
    bringWindowToFront(widgetId);
  }

  function isWidgetDetached(widgetId: AdminWidgetId): boolean {
    return widgetWindows[widgetId].open && widgetWindows[widgetId].windowState !== 'minimized';
  }

  function isWidgetVisibleInWorkspace(widgetId: AdminWidgetId): boolean {
    return !workspaceUi.hiddenWidgets.includes(widgetId) && !isWidgetDetached(widgetId);
  }

  function updateWorkspaceLayout(
    widgetId: AdminWidgetId,
    layout: AdminWorkspaceWidgetLayout
  ): void {
    workspacePreview = null;
    workspaceLayouts = resolveWorkspaceLayouts(workspaceLayouts, widgetId, layout);
    bringWorkspaceToFront(widgetId);
  }

  function setWorkspacePreview(
    widgetId: AdminWidgetId,
    layout: AdminWorkspaceWidgetLayout | null
  ): void {
    if (!layout) {
      if (workspacePreview?.widgetId === widgetId) {
        workspacePreview = null;
      }
      return;
    }

    workspacePreview = {
      widgetId,
      layout: clampWorkspaceLayout(layout)
    };
    bringWorkspaceToFront(widgetId);
  }

  function resetWorkspaceLayouts(): void {
    const defaults = createWorkspaceUiState();

    workspacePreview = null;
    workspaceLayouts = createWorkspaceLayouts();
    workspaceStack = [...widgetIds];
    workspaceUi.editing = false;
    workspaceUi.hiddenWidgets = [...defaults.hiddenWidgets];
    workspaceUi.toolbarWidgets = [...defaults.toolbarWidgets];
    workspaceUi.toolbarCustomActions = normalizeWorkspaceActionIdList(
      defaults.toolbarCustomActions,
      workspaceUi.customActions.map((action) => action.id),
      []
    );
    toolbarManagerOpen = false;
  }

  function closeWidget(widgetId: AdminWidgetId): void {
    widgetWindows[widgetId].open = false;
    widgetWindows[widgetId].pinned = false;
    widgetWindows[widgetId].windowState = 'normal';
    workspaceUi.edgePinnedWidgets = workspaceUi.edgePinnedWidgets.filter(
      (entry) => entry !== widgetId
    );
    clearEdgeDockRestoreState(widgetId);
    clearWindowDragSeed(widgetId);
    windowStack = windowStack.filter((entry) => entry !== widgetId);
  }

  function getWindowZIndex(widgetId: AdminWidgetId): number {
    const index = windowStack.indexOf(widgetId);
    return 240 + (index === -1 ? 0 : index * 4);
  }

  function getWorkspaceZIndex(widgetId: AdminWidgetId): number {
    const index = workspaceStack.indexOf(widgetId);
    return 10 + (index === -1 ? 0 : index);
  }

  function observeWorkspaceCanvas(node: HTMLDivElement) {
    const sync = () => {
      workspaceWidth = node.clientWidth;
    };

    sync();

    const observer = new ResizeObserver(() => {
      sync();
    });
    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  async function loadAdminState(): Promise<void> {
    const [who, usersResponse, rolesResponse, settingsResponse] = await Promise.all([
      whoAmI(authBase),
      listUsers(apiBase),
      listRoles(apiBase),
      getSettings(apiBase)
    ]);

    bootUser = who;
    users = usersResponse.results;
    roles = rolesResponse.results;
    settings = settingsResponse.result;

    if (!userForm.roleId) {
      const firstRole = roles.find((role) => !role.operatorOnly);
      userForm.roleId = firstRole?.id ?? '';
    }

    await runCatalogSearch();
  }

  async function refreshAll(): Promise<void> {
    loading = true;
    notice = null;

    try {
      const ready = await ensureAdminSession();
      if (!ready) {
        notice = { message: 'Sign in is required before the admin control plane can load.', error: true };
        return;
      }

      await loadAdminState();
    } catch (error: unknown) {
      notice = {
        message: error instanceof Error ? error.message : 'Failed to load admin control-plane data.',
        error: true
      };
    } finally {
      loading = false;
    }
  }

  async function submitUser(): Promise<void> {
    submittingUser = true;
    userResult = null;

    try {
      const response = await createUser(apiBase, {
        username: userForm.username,
        name: userForm.name,
        roleId: userForm.roleId,
        ...(userForm.loginKey.trim() !== '' ? { loginKey: userForm.loginKey.trim() } : {})
      });

      userResult = {
        message: `Created ${response.user.username}. Login key: ${response.loginKey}`,
        error: false
      };
      userForm.username = '';
      userForm.name = '';
      userForm.loginKey = '';
      await refreshAll();
    } catch (error: unknown) {
      userResult = {
        message: error instanceof Error ? error.message : 'Unable to create user',
        error: true
      };
    } finally {
      submittingUser = false;
    }
  }

  async function submitRole(): Promise<void> {
    submittingRole = true;
    roleResult = null;

    try {
      const response = await createRole(apiBase, {
        id: roleForm.id,
        name: roleForm.name,
        description: roleForm.description,
        entitlements: roleForm.entitlements
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean)
      });

      roleResult = {
        message: `Created role ${response.result.id}`,
        error: false
      };
      roleForm.id = '';
      roleForm.name = '';
      roleForm.description = '';
      roleForm.entitlements = 'NATURAL_VIEW';
      await refreshAll();
    } catch (error: unknown) {
      roleResult = {
        message: error instanceof Error ? error.message : 'Unable to create role',
        error: true
      };
    } finally {
      submittingRole = false;
    }
  }

  async function changeMode(roleId: string): Promise<void> {
    switchingMode = true;
    notice = null;

    try {
      await changeDisplayMode(authBase, roleId);
      window.location.reload();
    } catch (error: unknown) {
      notice = {
        message: error instanceof Error ? error.message : 'Unable to switch display mode',
        error: true
      };
    } finally {
      switchingMode = false;
    }
  }

  async function runCatalogSearch(): Promise<void> {
    catalogLoading = true;

    try {
      const catalogResponse = await loadCatalogWorkspace({
        entity: catalogEntity,
        q: catalogQuery,
        limit: 12,
        field: catalogEntity === 'public_workspace_files' ? ['workspaceArea', 'resourceKind'] : []
      });

      searchResults = catalogResponse.results;
      facets = catalogResponse.facets;
      catalogLoaded = true;
    } catch (error: unknown) {
      notice = {
        message: error instanceof Error ? error.message : 'Unable to load workspace discovery data',
        error: true
      };
    } finally {
      catalogLoading = false;
    }
  }

  $effect(() => {
    if (!widgetPersistenceReady || typeof localStorage === 'undefined') {
      return;
    }

    const snapshot = widgetIds.reduce(
      (accumulator, widgetId) => {
        accumulator[widgetId] = {
          open: widgetWindows[widgetId].open,
          pinned: widgetWindows[widgetId].pinned,
          windowState: widgetWindows[widgetId].windowState
        };
        return accumulator;
      },
      {} as Record<AdminWidgetId, AdminWidgetWindowState>
    );

    localStorage.setItem(getViewScopedStorageKey(widgetStorageBase), JSON.stringify(snapshot));
  });

  $effect(() => {
    if (!widgetPersistenceReady || typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(
      getViewScopedStorageKey(workspaceLayoutStorageBase),
      JSON.stringify(
        widgetIds.reduce(
          (accumulator, widgetId) => {
            accumulator[widgetId] = workspaceLayouts[widgetId];
            return accumulator;
          },
          {} as Record<AdminWidgetId, AdminWorkspaceWidgetLayout>
        )
      )
    );
  });

  $effect(() => {
    if (!widgetPersistenceReady || typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(
      getGlobalStorageKey(edgeDockStorageBase),
      JSON.stringify(workspaceUi.edgePinnedWidgets)
    );
  });

  $effect(() => {
    if (!widgetPersistenceReady || typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(
      getGlobalStorageKey(edgeDockStateStorageBase),
      JSON.stringify(edgeDockState)
    );
  });

  $effect(() => {
    if (!widgetPersistenceReady || typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(
      getViewScopedStorageKey(workspaceUiStorageBase),
      JSON.stringify({
        editing: workspaceUi.editing,
        toolbarWidgets: workspaceUi.toolbarWidgets,
        edgePinnedWidgets: workspaceUi.edgePinnedWidgets,
        hiddenWidgets: workspaceUi.hiddenWidgets,
        customActions: workspaceUi.customActions,
        toolbarCustomActions: workspaceUi.toolbarCustomActions
      } satisfies AdminWorkspaceUiState)
    );
  });

  $effect(() => {
    if (!widgetPersistenceReady || typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(
      getViewScopedStorageKey(workspaceProfileMetaStorageBase),
      JSON.stringify(workspaceProfiles)
    );
  });

  onMount(() => {
    applyTheme(getTheme());
    const removeThemeListener = onThemeChange((theme) => {
      applyTheme(theme);
    });

    try {
      const stored = localStorage.getItem(getViewScopedStorageKey(widgetStorageBase));
      if (stored) {
        widgetWindows = normalizeWidgetWindows(JSON.parse(stored));
        syncWindowStack();
      }

      const storedLayouts = localStorage.getItem(getViewScopedStorageKey(workspaceLayoutStorageBase));
      if (storedLayouts) {
        workspaceLayouts = normalizeWorkspaceLayouts(JSON.parse(storedLayouts));
      }

      const storedWorkspaceUi = localStorage.getItem(getViewScopedStorageKey(workspaceUiStorageBase));
      if (storedWorkspaceUi) {
        workspaceUi = normalizeWorkspaceUiState(JSON.parse(storedWorkspaceUi));
      }

      const storedWorkspaceProfiles = localStorage.getItem(
        getViewScopedStorageKey(workspaceProfileMetaStorageBase)
      );
      if (storedWorkspaceProfiles) {
        workspaceProfiles = normalizeWorkspaceProfiles(JSON.parse(storedWorkspaceProfiles));
      }

      const storedEdgeDock = localStorage.getItem(getGlobalStorageKey(edgeDockStorageBase));
      if (storedEdgeDock) {
        workspaceUi.edgePinnedWidgets = normalizeWorkspaceWidgetList(
          JSON.parse(storedEdgeDock),
          workspaceUi.edgePinnedWidgets
        );
      }

      workspaceUi.toolbarCustomActions = normalizeWorkspaceActionIdList(
        workspaceUi.toolbarCustomActions,
        workspaceUi.customActions.map((action) => action.id),
        createWorkspaceUiState().toolbarCustomActions
      );

      workspaceUi.edgePinnedWidgets = normalizeWorkspaceWidgetList(
        [...workspaceUi.edgePinnedWidgets, ...widgetIds.filter((widgetId) => widgetWindows[widgetId].pinned)],
        workspaceUi.edgePinnedWidgets
      );
      workspaceLayouts = compactWorkspaceLayouts(workspaceLayouts, workspaceUi.hiddenWidgets);
      workspaceStack = widgetIds.filter((widgetId) => !workspaceUi.hiddenWidgets.includes(widgetId));

      const storedDockState = localStorage.getItem(getGlobalStorageKey(edgeDockStateStorageBase));
      if (storedDockState) {
        edgeDockState = normalizeEdgeDockState(JSON.parse(storedDockState));
      }
    } catch (error: unknown) {
      void error;
    }

    const compactMedia = window.matchMedia('(max-width: 63.99rem)');
    const syncCompactWorkspace = () => {
      workspaceCompact = compactMedia.matches;
    };

    syncCompactWorkspace();
    compactMedia.addEventListener('change', syncCompactWorkspace);

    widgetPersistenceReady = true;

    void refreshAll();

    return () => {
      compactMedia.removeEventListener('change', syncCompactWorkspace);
      removeThemeListener();
    };
  });
</script>

<AdminShell notice={notice} loading={loading} metrics={summaryMetrics}>
  <AdminWorkspaceToolbar
    items={workspaceToolbarItems}
    profiles={workspaceProfiles}
    editing={workspaceEditing}
    compact={workspaceCompact}
    layoutDirty={workspaceLayoutDirty}
    managerOpen={toolbarManagerOpen}
    {customActionIconOptions}
    onToggleEditing={toggleWorkspaceEditing}
    onResetLayout={resetWorkspaceLayouts}
    onSaveWorkspace={saveWorkspaceProfile}
    onToggleManager={toggleToolbarManager}
    onActivateWidget={openWidget}
    onToggleToolbar={toggleToolbarWidget}
    onToggleWorkspace={toggleWorkspaceWidget}
    onToggleEdgePin={toggleEdgePinnedWidget}
    onActivateAction={activateCustomAction}
    onToggleToolbarAction={toggleToolbarCustomAction}
    onDeleteAction={deleteCustomAction}
    onCreateAction={createCustomAction}
  />

  <div
    class="workspace-canvas"
    class:compact-workspace={workspaceCompact}
    use:observeWorkspaceCanvas
  >
    {#if isWidgetVisibleInWorkspace('create-user')}
      <AdminWorkspaceItem
        title="Create user"
        layout={displayWorkspaceLayouts['create-user']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('create-user')}
        onChange={(layout) => updateWorkspaceLayout('create-user', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('create-user', layout)}
        onShiftPopoutStart={(seed) => openWidget('create-user', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('create-user')}
      >
        <CreateUserWidget
          roles={roles}
          form={userForm}
          result={userResult}
          actualRole={bootUser?.actualRole ?? 'unknown'}
          busy={submittingUser}
          dataTestid="admin-users-panel"
          open={isWidgetDetached('create-user')}
          pinned={widgetWindows['create-user'].pinned}
          onOpen={() => openWidget('create-user')}
          onTogglePin={() => toggleWidgetPin('create-user')}
          onSubmit={() => void submitUser()}
        />
      </AdminWorkspaceItem>
    {/if}

    {#if isWidgetVisibleInWorkspace('create-role')}
      <AdminWorkspaceItem
        title="Create role"
        layout={displayWorkspaceLayouts['create-role']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('create-role')}
        onChange={(layout) => updateWorkspaceLayout('create-role', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('create-role', layout)}
        onShiftPopoutStart={(seed) => openWidget('create-role', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('create-role')}
      >
        <CreateRoleWidget
          roles={roles}
          form={roleForm}
          result={roleResult}
          busy={submittingRole}
          dataTestid="admin-roles-panel"
          open={isWidgetDetached('create-role')}
          pinned={widgetWindows['create-role'].pinned}
          onOpen={() => openWidget('create-role')}
          onTogglePin={() => toggleWidgetPin('create-role')}
          onSubmit={() => void submitRole()}
        />
      </AdminWorkspaceItem>
    {/if}

    {#if isWidgetVisibleInWorkspace('display-mode')}
      <AdminWorkspaceItem
        title="Display mode"
        layout={displayWorkspaceLayouts['display-mode']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('display-mode')}
        onChange={(layout) => updateWorkspaceLayout('display-mode', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('display-mode', layout)}
        onShiftPopoutStart={(seed) => openWidget('display-mode', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('display-mode')}
      >
        <DisplayModePanel
          user={bootUser}
          busy={switchingMode}
          dataTestid="admin-display-mode-panel"
          open={isWidgetDetached('display-mode')}
          pinned={widgetWindows['display-mode'].pinned}
          onOpen={() => openWidget('display-mode')}
          onTogglePin={() => toggleWidgetPin('display-mode')}
          onChange={(roleId) => void changeMode(roleId)}
        />
      </AdminWorkspaceItem>
    {/if}

    {#if isWidgetVisibleInWorkspace('user-directory')}
      <AdminWorkspaceItem
        title="Users"
        layout={displayWorkspaceLayouts['user-directory']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('user-directory')}
        onChange={(layout) => updateWorkspaceLayout('user-directory', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('user-directory', layout)}
        onShiftPopoutStart={(seed) => openWidget('user-directory', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('user-directory')}
      >
        <UsersListWidget
          users={users}
          dataTestid="admin-users-table"
          open={isWidgetDetached('user-directory')}
          pinned={widgetWindows['user-directory'].pinned}
          onOpen={() => openWidget('user-directory')}
          onTogglePin={() => toggleWidgetPin('user-directory')}
        />
      </AdminWorkspaceItem>
    {/if}

    {#if isWidgetVisibleInWorkspace('role-directory')}
      <AdminWorkspaceItem
        title="Role catalog"
        layout={displayWorkspaceLayouts['role-directory']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('role-directory')}
        onChange={(layout) => updateWorkspaceLayout('role-directory', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('role-directory', layout)}
        onShiftPopoutStart={(seed) => openWidget('role-directory', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('role-directory')}
      >
        <RolesListWidget
          roles={roles}
          dataTestid="admin-roles-table"
          open={isWidgetDetached('role-directory')}
          pinned={widgetWindows['role-directory'].pinned}
          onOpen={() => openWidget('role-directory')}
          onTogglePin={() => toggleWidgetPin('role-directory')}
        />
      </AdminWorkspaceItem>
    {/if}

    {#if isWidgetVisibleInWorkspace('catalog-search')}
      <AdminWorkspaceItem
        title="Discovery"
        layout={displayWorkspaceLayouts['catalog-search']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('catalog-search')}
        onChange={(layout) => updateWorkspaceLayout('catalog-search', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('catalog-search', layout)}
        onShiftPopoutStart={(seed) => openWidget('catalog-search', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('catalog-search')}
      >
        <CatalogSearchWidget
          query={catalogQuery}
          entity={catalogEntity}
          loading={catalogLoading}
          dataTestid="admin-catalog-panel"
          open={isWidgetDetached('catalog-search')}
          pinned={widgetWindows['catalog-search'].pinned}
          onOpen={() => openWidget('catalog-search')}
          onTogglePin={() => toggleWidgetPin('catalog-search')}
          onSearch={() => void runCatalogSearch()}
          onEntityChange={(entity) => {
            catalogEntity = entity;
            catalogQuery = '';
            void runCatalogSearch();
          }}
        />
      </AdminWorkspaceItem>
    {/if}

    {#if isWidgetVisibleInWorkspace('catalog-results')}
      <AdminWorkspaceItem
        title="Search results"
        layout={displayWorkspaceLayouts['catalog-results']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('catalog-results')}
        onChange={(layout) => updateWorkspaceLayout('catalog-results', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('catalog-results', layout)}
        onShiftPopoutStart={(seed) => openWidget('catalog-results', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('catalog-results')}
      >
        <CatalogResultsWidget
          loaded={catalogLoaded}
          loading={catalogLoading}
          searchResults={searchResults}
          dataTestid="admin-search-results"
          open={isWidgetDetached('catalog-results')}
          pinned={widgetWindows['catalog-results'].pinned}
          onOpen={() => openWidget('catalog-results')}
          onTogglePin={() => toggleWidgetPin('catalog-results')}
        />
      </AdminWorkspaceItem>
    {/if}

    {#if isWidgetVisibleInWorkspace('catalog-facets')}
      <AdminWorkspaceItem
        title="Facet distribution"
        layout={displayWorkspaceLayouts['catalog-facets']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('catalog-facets')}
        onChange={(layout) => updateWorkspaceLayout('catalog-facets', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('catalog-facets', layout)}
        onShiftPopoutStart={(seed) => openWidget('catalog-facets', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('catalog-facets')}
      >
        <CatalogFacetsWidget
          loaded={catalogLoaded}
          {facets}
          dataTestid="admin-facets"
          open={isWidgetDetached('catalog-facets')}
          pinned={widgetWindows['catalog-facets'].pinned}
          onOpen={() => openWidget('catalog-facets')}
          onTogglePin={() => toggleWidgetPin('catalog-facets')}
        />
      </AdminWorkspaceItem>
    {/if}

    {#if isWidgetVisibleInWorkspace('window-preferences')}
      <AdminWorkspaceItem
        title="Window preferences"
        layout={displayWorkspaceLayouts['window-preferences']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('window-preferences')}
        onChange={(layout) => updateWorkspaceLayout('window-preferences', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('window-preferences', layout)}
        onShiftPopoutStart={(seed) => openWidget('window-preferences', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('window-preferences')}
      >
        <WindowPrefsWidget
          dataTestid="admin-settings-panel"
          open={isWidgetDetached('window-preferences')}
          pinned={widgetWindows['window-preferences'].pinned}
          onOpen={() => openWidget('window-preferences')}
          onTogglePin={() => toggleWidgetPin('window-preferences')}
        />
      </AdminWorkspaceItem>
    {/if}

    {#if isWidgetVisibleInWorkspace('settings-payload')}
      <AdminWorkspaceItem
        title="Settings payload"
        layout={displayWorkspaceLayouts['settings-payload']}
        canvasWidth={workspaceWidth}
        compact={workspaceCompact}
        editable={workspaceEditing}
        zIndex={getWorkspaceZIndex('settings-payload')}
        onChange={(layout) => updateWorkspaceLayout('settings-payload', layout)}
        onPreviewChange={(layout) => setWorkspacePreview('settings-payload', layout)}
        onShiftPopoutStart={(seed) => openWidget('settings-payload', { pinned: true, dragSeed: seed })}
        onFocus={() => bringWorkspaceToFront('settings-payload')}
      >
        <SettingsPayloadWidget
          {settings}
          open={isWidgetDetached('settings-payload')}
          pinned={widgetWindows['settings-payload'].pinned}
          onOpen={() => openWidget('settings-payload')}
          onTogglePin={() => toggleWidgetPin('settings-payload')}
        />
      </AdminWorkspaceItem>
    {/if}
  </div>

  {#if widgetWindows['create-user'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['create-user'].title}
      bind:windowState={widgetWindows['create-user'].windowState}
      pinned={widgetWindows['create-user'].pinned}
      defaultWidth={widgetWindowConfig['create-user'].width}
      defaultHeight={widgetWindowConfig['create-user'].height}
      defaultX={widgetWindowConfig['create-user'].x}
      defaultY={widgetWindowConfig['create-user'].y}
      zIndex={getWindowZIndex('create-user')}
      dragSeed={windowDragSeeds['create-user'] ?? null}
      onClose={() => closeWidget('create-user')}
      onFocus={() => bringWindowToFront('create-user')}
      onPinToggle={() => toggleWidgetPin('create-user')}
      onConsumeDragSeed={() => consumeWindowDragSeed('create-user')}
    >
      <CreateUserWidget
        mode="window"
        roles={roles}
        form={userForm}
        result={userResult}
        actualRole={bootUser?.actualRole ?? 'unknown'}
        busy={submittingUser}
        pinned={widgetWindows['create-user'].pinned}
        onTogglePin={() => toggleWidgetPin('create-user')}
        onSubmit={() => void submitUser()}
      />
    </AdminWidgetWindow>
  {/if}

  {#if widgetWindows['user-directory'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['user-directory'].title}
      bind:windowState={widgetWindows['user-directory'].windowState}
      pinned={widgetWindows['user-directory'].pinned}
      defaultWidth={widgetWindowConfig['user-directory'].width}
      defaultHeight={widgetWindowConfig['user-directory'].height}
      defaultX={widgetWindowConfig['user-directory'].x}
      defaultY={widgetWindowConfig['user-directory'].y}
      zIndex={getWindowZIndex('user-directory')}
      dragSeed={windowDragSeeds['user-directory'] ?? null}
      onClose={() => closeWidget('user-directory')}
      onFocus={() => bringWindowToFront('user-directory')}
      onPinToggle={() => toggleWidgetPin('user-directory')}
      onConsumeDragSeed={() => consumeWindowDragSeed('user-directory')}
    >
      <UsersListWidget
        mode="window"
        users={users}
        pinned={widgetWindows['user-directory'].pinned}
        onTogglePin={() => toggleWidgetPin('user-directory')}
      />
    </AdminWidgetWindow>
  {/if}

  {#if widgetWindows['create-role'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['create-role'].title}
      bind:windowState={widgetWindows['create-role'].windowState}
      pinned={widgetWindows['create-role'].pinned}
      defaultWidth={widgetWindowConfig['create-role'].width}
      defaultHeight={widgetWindowConfig['create-role'].height}
      defaultX={widgetWindowConfig['create-role'].x}
      defaultY={widgetWindowConfig['create-role'].y}
      zIndex={getWindowZIndex('create-role')}
      dragSeed={windowDragSeeds['create-role'] ?? null}
      onClose={() => closeWidget('create-role')}
      onFocus={() => bringWindowToFront('create-role')}
      onPinToggle={() => toggleWidgetPin('create-role')}
      onConsumeDragSeed={() => consumeWindowDragSeed('create-role')}
    >
      <CreateRoleWidget
        mode="window"
        roles={roles}
        form={roleForm}
        result={roleResult}
        busy={submittingRole}
        pinned={widgetWindows['create-role'].pinned}
        onTogglePin={() => toggleWidgetPin('create-role')}
        onSubmit={() => void submitRole()}
      />
    </AdminWidgetWindow>
  {/if}

  {#if widgetWindows['role-directory'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['role-directory'].title}
      bind:windowState={widgetWindows['role-directory'].windowState}
      pinned={widgetWindows['role-directory'].pinned}
      defaultWidth={widgetWindowConfig['role-directory'].width}
      defaultHeight={widgetWindowConfig['role-directory'].height}
      defaultX={widgetWindowConfig['role-directory'].x}
      defaultY={widgetWindowConfig['role-directory'].y}
      zIndex={getWindowZIndex('role-directory')}
      dragSeed={windowDragSeeds['role-directory'] ?? null}
      onClose={() => closeWidget('role-directory')}
      onFocus={() => bringWindowToFront('role-directory')}
      onPinToggle={() => toggleWidgetPin('role-directory')}
      onConsumeDragSeed={() => consumeWindowDragSeed('role-directory')}
    >
      <RolesListWidget
        mode="window"
        roles={roles}
        pinned={widgetWindows['role-directory'].pinned}
        onTogglePin={() => toggleWidgetPin('role-directory')}
      />
    </AdminWidgetWindow>
  {/if}

  {#if widgetWindows['display-mode'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['display-mode'].title}
      bind:windowState={widgetWindows['display-mode'].windowState}
      pinned={widgetWindows['display-mode'].pinned}
      defaultWidth={widgetWindowConfig['display-mode'].width}
      defaultHeight={widgetWindowConfig['display-mode'].height}
      defaultX={widgetWindowConfig['display-mode'].x}
      defaultY={widgetWindowConfig['display-mode'].y}
      zIndex={getWindowZIndex('display-mode')}
      dragSeed={windowDragSeeds['display-mode'] ?? null}
      onClose={() => closeWidget('display-mode')}
      onFocus={() => bringWindowToFront('display-mode')}
      onPinToggle={() => toggleWidgetPin('display-mode')}
      onConsumeDragSeed={() => consumeWindowDragSeed('display-mode')}
    >
      <DisplayModePanel
        mode="window"
        user={bootUser}
        busy={switchingMode}
        pinned={widgetWindows['display-mode'].pinned}
        onTogglePin={() => toggleWidgetPin('display-mode')}
        onChange={(roleId) => void changeMode(roleId)}
      />
    </AdminWidgetWindow>
  {/if}

  {#if widgetWindows['window-preferences'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['window-preferences'].title}
      bind:windowState={widgetWindows['window-preferences'].windowState}
      pinned={widgetWindows['window-preferences'].pinned}
      defaultWidth={widgetWindowConfig['window-preferences'].width}
      defaultHeight={widgetWindowConfig['window-preferences'].height}
      defaultX={widgetWindowConfig['window-preferences'].x}
      defaultY={widgetWindowConfig['window-preferences'].y}
      zIndex={getWindowZIndex('window-preferences')}
      dragSeed={windowDragSeeds['window-preferences'] ?? null}
      onClose={() => closeWidget('window-preferences')}
      onFocus={() => bringWindowToFront('window-preferences')}
      onPinToggle={() => toggleWidgetPin('window-preferences')}
      onConsumeDragSeed={() => consumeWindowDragSeed('window-preferences')}
    >
      <WindowPrefsWidget
        mode="window"
        pinned={widgetWindows['window-preferences'].pinned}
        onTogglePin={() => toggleWidgetPin('window-preferences')}
      />
    </AdminWidgetWindow>
  {/if}

  {#if widgetWindows['settings-payload'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['settings-payload'].title}
      bind:windowState={widgetWindows['settings-payload'].windowState}
      pinned={widgetWindows['settings-payload'].pinned}
      defaultWidth={widgetWindowConfig['settings-payload'].width}
      defaultHeight={widgetWindowConfig['settings-payload'].height}
      defaultX={widgetWindowConfig['settings-payload'].x}
      defaultY={widgetWindowConfig['settings-payload'].y}
      zIndex={getWindowZIndex('settings-payload')}
      dragSeed={windowDragSeeds['settings-payload'] ?? null}
      onClose={() => closeWidget('settings-payload')}
      onFocus={() => bringWindowToFront('settings-payload')}
      onPinToggle={() => toggleWidgetPin('settings-payload')}
      onConsumeDragSeed={() => consumeWindowDragSeed('settings-payload')}
    >
      <SettingsPayloadWidget
        mode="window"
        {settings}
        pinned={widgetWindows['settings-payload'].pinned}
        onTogglePin={() => toggleWidgetPin('settings-payload')}
      />
    </AdminWidgetWindow>
  {/if}

  {#if widgetWindows['catalog-search'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['catalog-search'].title}
      bind:windowState={widgetWindows['catalog-search'].windowState}
      pinned={widgetWindows['catalog-search'].pinned}
      defaultWidth={widgetWindowConfig['catalog-search'].width}
      defaultHeight={widgetWindowConfig['catalog-search'].height}
      defaultX={widgetWindowConfig['catalog-search'].x}
      defaultY={widgetWindowConfig['catalog-search'].y}
      zIndex={getWindowZIndex('catalog-search')}
      dragSeed={windowDragSeeds['catalog-search'] ?? null}
      onClose={() => closeWidget('catalog-search')}
      onFocus={() => bringWindowToFront('catalog-search')}
      onPinToggle={() => toggleWidgetPin('catalog-search')}
      onConsumeDragSeed={() => consumeWindowDragSeed('catalog-search')}
    >
      <CatalogSearchWidget
        mode="window"
        query={catalogQuery}
        entity={catalogEntity}
        loading={catalogLoading}
        pinned={widgetWindows['catalog-search'].pinned}
        onTogglePin={() => toggleWidgetPin('catalog-search')}
        onSearch={() => void runCatalogSearch()}
        onEntityChange={(entity) => {
          catalogEntity = entity;
          catalogQuery = '';
          void runCatalogSearch();
        }}
      />
    </AdminWidgetWindow>
  {/if}

  {#if widgetWindows['catalog-results'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['catalog-results'].title}
      bind:windowState={widgetWindows['catalog-results'].windowState}
      pinned={widgetWindows['catalog-results'].pinned}
      defaultWidth={widgetWindowConfig['catalog-results'].width}
      defaultHeight={widgetWindowConfig['catalog-results'].height}
      defaultX={widgetWindowConfig['catalog-results'].x}
      defaultY={widgetWindowConfig['catalog-results'].y}
      zIndex={getWindowZIndex('catalog-results')}
      dragSeed={windowDragSeeds['catalog-results'] ?? null}
      onClose={() => closeWidget('catalog-results')}
      onFocus={() => bringWindowToFront('catalog-results')}
      onPinToggle={() => toggleWidgetPin('catalog-results')}
      onConsumeDragSeed={() => consumeWindowDragSeed('catalog-results')}
    >
      <CatalogResultsWidget
        mode="window"
        loaded={catalogLoaded}
        loading={catalogLoading}
        searchResults={searchResults}
        pinned={widgetWindows['catalog-results'].pinned}
        onTogglePin={() => toggleWidgetPin('catalog-results')}
      />
    </AdminWidgetWindow>
  {/if}

  {#if widgetWindows['catalog-facets'].open}
    <AdminWidgetWindow
      title={widgetWindowConfig['catalog-facets'].title}
      bind:windowState={widgetWindows['catalog-facets'].windowState}
      pinned={widgetWindows['catalog-facets'].pinned}
      defaultWidth={widgetWindowConfig['catalog-facets'].width}
      defaultHeight={widgetWindowConfig['catalog-facets'].height}
      defaultX={widgetWindowConfig['catalog-facets'].x}
      defaultY={widgetWindowConfig['catalog-facets'].y}
      zIndex={getWindowZIndex('catalog-facets')}
      dragSeed={windowDragSeeds['catalog-facets'] ?? null}
      onClose={() => closeWidget('catalog-facets')}
      onFocus={() => bringWindowToFront('catalog-facets')}
      onPinToggle={() => toggleWidgetPin('catalog-facets')}
      onConsumeDragSeed={() => consumeWindowDragSeed('catalog-facets')}
    >
      <CatalogFacetsWidget
        mode="window"
        loaded={catalogLoaded}
        {facets}
        pinned={widgetWindows['catalog-facets'].pinned}
        onTogglePin={() => toggleWidgetPin('catalog-facets')}
      />
    </AdminWidgetWindow>
  {/if}
</AdminShell>

<ToolDock
  items={edgeDockItems}
  position={edgeDockState}
  onActivate={activateEdgeDockItem}
  onRemove={removeEdgeDockItem}
  onPositionChange={(position) => {
    edgeDockState = position;
  }}
/>

<style>
  :host {
    display: block;
    padding: clamp(1rem, 1rem + 0.8vw, 1.75rem);
    font-family: var(--efs-font-sans);
    color-scheme: dark;
    color: var(--efs-text-primary, #e6eefb);
    background:
      radial-gradient(
        circle at top,
        color-mix(in srgb, var(--efs-accent-primary, #8bc6ff), transparent 90%),
        transparent 28%
      ),
      radial-gradient(
        circle at bottom right,
        color-mix(in srgb, var(--efs-accent-strong, #c4b5fd), transparent 92%),
        transparent 24%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 36%);
    --shell-panel-base: color-mix(
      in srgb,
      var(--efs-bg-surface-1, rgba(7, 15, 32, 0.88)),
      transparent 6%
    );
    --shell-surface-base: color-mix(
      in srgb,
      var(--efs-bg-surface-0, rgba(5, 11, 25, 0.94)),
      transparent 2%
    );
    --shell-border-base: color-mix(
      in srgb,
      var(--efs-border-default, rgba(132, 146, 166, 0.18)),
      transparent 4%
    );
    --shell-text: var(--efs-text-primary, #e6eefb);
    --shell-muted: var(--efs-text-secondary, #94a8c7);
    --shell-primary: var(--efs-accent-primary, #8bc6ff);
    --shell-primary-text: var(--efs-text-inverse, #07101f);
    --shell-card-shadow-base: var(--efs-shadow-shell, 0 28px 60px rgba(0, 0, 0, 0.34));
    --shell-focus-ring:
      0 0 0 4px color-mix(
        in srgb,
        var(--efs-accent-focus, var(--efs-accent-primary, #8bc6ff)),
        transparent 76%
      );
    --shell-row-hover-base: color-mix(
      in srgb,
      var(--efs-accent-primary, #8bc6ff),
      transparent 92%
    );
    --shell-panel: var(--shell-panel-base);
    --shell-surface: var(--shell-surface-base);
    --shell-border: var(--shell-border-base);
    --shell-card-shadow: var(--shell-card-shadow-base);
    --shell-row-hover: var(--shell-row-hover-base);
  }

  :host([theme='light']) {
    color-scheme: light;
    color: var(--efs-text-primary, #0f172a);
    background:
      radial-gradient(
        circle at top,
        color-mix(in srgb, var(--efs-accent-primary, #0f172a), transparent 92%),
        transparent 24%
      ),
      radial-gradient(
        circle at bottom right,
        color-mix(in srgb, var(--efs-accent-strong, #2563eb), transparent 92%),
        transparent 26%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--efs-bg-surface-0, #ffffff), white 4%),
        color-mix(in srgb, var(--efs-bg-app, #f8fafc), transparent 8%)
      );
    --shell-panel-base: color-mix(in srgb, var(--efs-bg-surface-0, #ffffff), transparent 2%);
    --shell-surface-base: color-mix(in srgb, var(--efs-bg-surface-0, #ffffff), white 2%);
    --shell-border-base: var(--efs-border-default, #e2e8f0);
    --shell-text: var(--efs-text-primary, #0f172a);
    --shell-muted: var(--efs-text-muted, #64748b);
    --shell-primary: var(--efs-accent-primary, #0f172a);
    --shell-primary-text: #ffffff;
    --shell-card-shadow-base: 0 18px 40px rgba(15, 23, 42, 0.08);
    --shell-focus-ring:
      0 0 0 4px color-mix(
        in srgb,
        var(--efs-accent-focus, var(--efs-accent-primary, #0f172a)),
        transparent 84%
      );
    --shell-row-hover-base: color-mix(
      in srgb,
      var(--efs-accent-primary, #0f172a),
      transparent 94%
    );
  }

  :host([theme='dark']) {
    color-scheme: dark;
    color: var(--efs-text-primary, #e6eefb);
    background:
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--efs-accent-primary, #7dd3fc), transparent 88%),
        transparent 26%
      ),
      radial-gradient(
        circle at bottom right,
        color-mix(in srgb, var(--efs-accent-strong, #34d399), transparent 94%),
        transparent 24%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 34%);
    --shell-panel-base: color-mix(
      in srgb,
      var(--efs-bg-surface-1, rgba(9, 18, 38, 0.9)),
      transparent 4%
    );
    --shell-surface-base: color-mix(
      in srgb,
      var(--efs-bg-surface-0, rgba(4, 11, 24, 0.96)),
      transparent 2%
    );
    --shell-border-base: color-mix(
      in srgb,
      var(--efs-border-default, rgba(122, 143, 171, 0.2)),
      transparent 6%
    );
    --shell-text: var(--efs-text-primary, #e6eefb);
    --shell-muted: var(--efs-text-secondary, #96a9c6);
    --shell-primary: var(--efs-accent-primary, #7dd3fc);
    --shell-primary-text: #04111f;
    --shell-card-shadow-base: 0 32px 68px rgba(0, 0, 0, 0.42);
    --shell-focus-ring:
      0 0 0 4px color-mix(
        in srgb,
        var(--efs-accent-focus, var(--efs-accent-primary, #7dd3fc)),
        transparent 78%
      );
    --shell-row-hover-base: color-mix(
      in srgb,
      var(--efs-accent-primary, #7dd3fc),
      transparent 92%
    );
  }

  :host([theme='green']) {
    color-scheme: dark;
    --shell-primary: var(--efs-accent-primary, #c6ff00);
    --shell-primary-text: #050804;
    --shell-panel-base: rgba(12, 20, 10, 0.8);
    --shell-surface-base: rgba(28, 39, 26, 0.62);
    --shell-border-base: rgba(198, 255, 0, 0.12);
    --shell-text: #e7eddc;
    --shell-muted: #a2b392;
    --shell-card-shadow-base: 0 20px 44px rgba(0, 0, 0, 0.32);
    --shell-focus-ring:
      0 0 0 4px color-mix(
        in srgb,
        var(--efs-accent-focus, var(--efs-accent-primary, #c6ff00)),
        transparent 80%
      );
    --shell-row-hover-base: color-mix(
      in srgb,
      var(--efs-accent-primary, #c6ff00),
      transparent 94%
    );
  }

  .workspace-canvas {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-auto-rows: 24px;
    grid-auto-flow: dense;
    gap: 1rem;
    min-height: 90rem;
    padding: 0.35rem;
    align-items: stretch;
  }

  .workspace-canvas::before {
    content: '';
    position: absolute;
    inset: 0.35rem;
    z-index: 0;
    border-radius: 32px;
    background:
      linear-gradient(
        90deg,
        transparent 0,
        transparent calc(100% / 12 - 1px),
        color-mix(in srgb, var(--shell-border), transparent 82%) calc(100% / 12 - 1px),
        transparent calc(100% / 12)
      ),
      linear-gradient(
        180deg,
        transparent 0,
        transparent 23px,
        color-mix(in srgb, var(--shell-border), transparent 88%) 23px,
        transparent 24px
      );
    opacity: 0.5;
    pointer-events: none;
  }

  .compact-workspace {
    grid-template-columns: minmax(0, 1fr);
    grid-auto-rows: auto;
    min-height: 0;
    padding: 0;
  }

  .compact-workspace::before {
    display: none;
  }

  @media (max-width: 63.99rem) {
    :host {
      padding: 1rem;
    }

    .workspace-canvas {
      grid-template-columns: minmax(0, 1fr);
      grid-auto-rows: auto;
      min-height: 0;
      padding: 0;
    }

    .workspace-canvas::before {
      display: none;
    }
  }
</style>
