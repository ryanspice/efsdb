<script lang="ts">
  import { onDestroy } from 'svelte';
  import ToolPopover from '@ui/components/shell/ToolPopover.svelte';
  import AppIcon from '@ui/components/icons/AppIcon.svelte';
  import type { AppIconName } from '@ui/components/icons/appIconCatalog';
  import WorkspaceButtonsWidget, {
    type WorkspaceButtonsActionDraft,
    type WorkspaceButtonsItem,
    type WorkspaceButtonsWidgetItem
  } from './WorkspaceButtonsWidget.svelte';
  import type { AdminWidgetId, AdminWorkspaceProfileMeta } from '../lib/types';

  type Props = {
    items: WorkspaceButtonsItem[];
    profiles: AdminWorkspaceProfileMeta[];
    editing: boolean;
    compact: boolean;
    layoutDirty: boolean;
    managerOpen: boolean;
    actionIconOptions: Array<{
      value: AppIconName;
      label: string;
    }>;
    onToggleEditing: () => void;
    onResetLayout: () => void;
    onSaveWorkspace: () => void;
    onToggleManager: () => void;
    onActivateWidget: (widgetId: AdminWidgetId) => void;
    onToggleToolbar: (widgetId: AdminWidgetId) => void;
    onToggleWorkspace: (widgetId: AdminWidgetId) => void;
    onToggleEdgePin: (widgetId: AdminWidgetId) => void;
    onActivateAction: (actionId: string) => void;
    onToggleToolbarAction: (actionId: string) => void;
    onDeleteAction: (actionId: string) => void;
    onCreateAction: (draft: WorkspaceButtonsActionDraft) => void;
  };

  let {
    items,
    profiles,
    editing,
    compact,
    layoutDirty,
    managerOpen,
    actionIconOptions,
    onToggleEditing,
    onResetLayout,
    onSaveWorkspace,
    onToggleManager,
    onActivateWidget,
    onToggleToolbar,
    onToggleWorkspace,
    onToggleEdgePin,
    onActivateAction,
    onToggleToolbarAction,
    onDeleteAction,
    onCreateAction
  }: Props = $props();

  let managerAnchor = $state<HTMLButtonElement | null>(null);
  let resetArmed = $state(false);
  let resetTimer: ReturnType<typeof setTimeout> | null = null;

  let activityItems = $derived(items.filter((item) => item.inToolbar));
  let activeWorkspace = $derived(profiles[0] ?? null);
  let activeSavedLabel = $derived.by(() => {
    if (!activeWorkspace?.savedAt) {
      return 'Unsaved';
    }

    return `Saved ${new Intl.DateTimeFormat(undefined, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(new Date(activeWorkspace.savedAt))}`;
  });

  function isWidgetItem(item: WorkspaceButtonsItem): item is WorkspaceButtonsWidgetItem {
    return item.kind === 'widget';
  }

  function showsToolbarLabel(item: WorkspaceButtonsItem): boolean {
    return !isWidgetItem(item) || item.presentation === 'label';
  }

  function clearResetArm(): void {
    if (resetTimer) {
      clearTimeout(resetTimer);
      resetTimer = null;
    }

    resetArmed = false;
  }

  function armReset(): void {
    clearResetArm();
    resetArmed = true;
    resetTimer = setTimeout(() => {
      resetArmed = false;
      resetTimer = null;
    }, 2400);
  }

  function handleReset(): void {
    if (compact || !layoutDirty) {
      return;
    }

    if (resetArmed) {
      clearResetArm();
      onResetLayout();
      return;
    }

    armReset();
  }

  onDestroy(() => {
    clearResetArm();
  });
</script>

<section class="workspace-toolbar-shell">
  <div class="workspace-toolbar-main" role="toolbar" aria-label="Admin workspace toolbar">
    <div class="workspace-toolbar-start">
      <button
        bind:this={managerAnchor}
        class="manager-button"
        class:is-active={managerOpen}
        type="button"
        aria-label={managerOpen ? 'Close buttons and widgets manager' : 'Open buttons and widgets manager'}
        aria-pressed={managerOpen}
        title={managerOpen ? 'Close buttons and widgets manager' : 'Open buttons and widgets manager'}
        onclick={onToggleManager}
      >
        <AppIcon name="buttons-manager" />
        <span>Buttons + widgets</span>
      </button>

      <div class="workspace-strip" aria-label="Workspace slots">
        {#each profiles as profile (profile.id)}
          <button
            class="workspace-pill"
            class:is-active={!profile.locked}
            class:is-locked={profile.locked}
            type="button"
            disabled={profile.locked}
            aria-label={profile.locked ? `${profile.label} is locked` : `${profile.label} is active`}
            title={profile.locked ? `${profile.label} is locked` : `${profile.label} is active`}
          >
            <span>{profile.label}</span>
            {#if profile.locked}
              <AppIcon name="layout-lock" />
            {/if}
          </button>
        {/each}

        <button
          class="save-button"
          type="button"
          aria-label="Save workspace"
          title="Save workspace"
          onclick={onSaveWorkspace}
        >
          <AppIcon name="restore" />
          <span>Save</span>
        </button>

        <span class="workspace-saved">{activeSavedLabel}</span>
      </div>
    </div>

    <div class="activity-bar">
      {#each activityItems as item (item.id)}
        <button
          class="activity-button"
          class:is-active={isWidgetItem(item) && item.open}
          class:is-label={showsToolbarLabel(item)}
          type="button"
          aria-label={!isWidgetItem(item) ? `Run ${item.label}` : `Open ${item.label}`}
          title={item.label}
          onclick={() => (isWidgetItem(item) ? onActivateWidget(item.id) : onActivateAction(item.id))}
        >
          <span class="activity-icon" style:--icon-mask={item.iconMask}></span>
          {#if showsToolbarLabel(item)}
            <span class="activity-label">{item.barLabel}</span>
          {/if}
        </button>
      {/each}
    </div>

    <div class="workspace-toolbar-end">
      <div class="reset-shell" class:is-armed={resetArmed}>
        <button
          class="control-button reset-button"
          type="button"
          aria-label="Reset workspace"
          disabled={!layoutDirty || compact}
          title="Reset workspace"
          onclick={handleReset}
        >
          <AppIcon name="layout-reset" />
          <span>Reset</span>
        </button>

        <button
          class="reset-question"
          type="button"
          tabindex="-1"
          aria-hidden="true"
          title="Double-click reset to restore the default canvas, reveal hidden widgets, and reload the default toolbar set. Custom buttons stay saved."
        >
          ❓
        </button>

        <div class="reset-tooltip" role="tooltip">
          Double-click reset to restore the default canvas, reveal hidden widgets, and reload the default toolbar set. Custom buttons stay saved.
        </div>
      </div>

      <button
        class="control-button"
        class:is-active={editing}
        type="button"
        aria-label={editing ? 'Lock layout editing' : 'Unlock layout editing'}
        aria-pressed={editing}
        disabled={compact}
        title={
          compact
            ? 'Layout editing is disabled on compact screens'
            : editing
              ? 'Lock layout editing'
              : 'Unlock layout editing'
        }
        onclick={onToggleEditing}
      >
        <AppIcon name={editing ? 'layout-unlock' : 'layout-lock'} />
        <span>{editing ? 'Layout unlocked' : 'Layout locked'}</span>
      </button>
    </div>
  </div>

  <ToolPopover
    open={managerOpen}
    anchor={managerAnchor}
    placement="bottom-start"
    width="min(24rem, calc(100vw - 1rem))"
    zIndex={520}
    onClose={onToggleManager}
  >
    <WorkspaceButtonsWidget
      items={items}
      {actionIconOptions}
      onToggleToolbar={onToggleToolbar}
      onToggleWorkspace={onToggleWorkspace}
      onToggleEdgePin={onToggleEdgePin}
      onOpenWidget={onActivateWidget}
      onToggleToolbarAction={onToggleToolbarAction}
      onRunAction={onActivateAction}
      onDeleteAction={onDeleteAction}
      onCreateAction={onCreateAction}
    />
  </ToolPopover>
</section>

<style>
  .workspace-toolbar-shell {
    position: relative;
  }

  .workspace-toolbar-main {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 0.85rem;
    align-items: center;
    padding: 0.7rem 0.8rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 24px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 72%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);
    box-shadow: var(--shell-card-shadow);
  }

  .workspace-toolbar-start,
  .workspace-toolbar-end,
  .workspace-strip,
  .activity-bar {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
  }

  .workspace-toolbar-start {
    flex-wrap: wrap;
  }

  .manager-button,
  .workspace-pill,
  .save-button,
  .control-button,
  .activity-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    min-height: 2.55rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    color: var(--shell-muted);
    cursor: pointer;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease,
      opacity 160ms ease,
      box-shadow 160ms ease;
  }

  .manager-button:hover:not(:disabled),
  .workspace-pill:hover:not(:disabled),
  .save-button:hover,
  .control-button:hover:not(:disabled),
  .activity-button:hover {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 42%);
    color: var(--shell-text);
  }

  .manager-button {
    padding: 0 1rem;
    border-radius: 18px;
    border-color: color-mix(in srgb, var(--shell-primary), transparent 54%);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 72%),
      color-mix(in srgb, var(--shell-primary), transparent 86%);
    color: var(--shell-text);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 80%);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .manager-button.is-active {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 36%);
    background: color-mix(in srgb, var(--shell-primary), transparent 78%);
  }

  .manager-button :global(.app-icon),
  .workspace-pill :global(.app-icon),
  .save-button :global(.app-icon),
  .control-button :global(.app-icon),
  .activity-button :global(.app-icon) {
    width: 1rem;
    height: 1rem;
  }

  .workspace-strip {
    flex-wrap: wrap;
  }

  .workspace-pill,
  .save-button,
  .control-button {
    padding: 0 0.9rem;
    border-radius: 16px;
    background: color-mix(in srgb, var(--shell-surface), transparent 6%);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .workspace-pill.is-active {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 60%);
    background: color-mix(in srgb, var(--shell-row-hover), transparent 2%);
    color: var(--shell-text);
  }

  .workspace-pill.is-locked {
    opacity: 0.54;
    cursor: not-allowed;
  }

  .workspace-saved {
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .activity-bar {
    min-width: 0;
    flex-wrap: wrap;
    justify-content: center;
  }

  .activity-button {
    padding: 0 0.8rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-surface), transparent 6%);
  }

  .activity-button:not(.is-label) {
    width: 2.7rem;
    padding-inline: 0;
  }

  .activity-button.is-active {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 52%);
    background: color-mix(in srgb, var(--shell-primary), transparent 84%);
    color: var(--shell-text);
  }

  .activity-icon {
    display: inline-flex;
    width: 1rem;
    height: 1rem;
    background: currentColor;
    mask: var(--icon-mask) center / contain no-repeat;
    -webkit-mask: var(--icon-mask) center / contain no-repeat;
  }

  .activity-label {
    min-width: 0;
    max-width: 8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .workspace-toolbar-end {
    justify-content: flex-end;
  }

  .control-button.is-active {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 56%);
    background: color-mix(in srgb, var(--shell-primary), transparent 88%);
    color: var(--shell-text);
  }

  .control-button:disabled {
    opacity: 0.42;
    cursor: not-allowed;
  }

  .reset-shell {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .reset-button {
    position: relative;
    z-index: 2;
    border-color: color-mix(in srgb, #ef4444, transparent 52%);
    background: color-mix(in srgb, #ef4444, transparent 92%);
    color: #fca5a5;
  }

  .reset-button:hover:not(:disabled) {
    border-color: color-mix(in srgb, #ef4444, transparent 18%);
    background: color-mix(in srgb, #ef4444, transparent 88%);
    color: #fee2e2;
  }

  .reset-question {
    position: absolute;
    right: 0.18rem;
    z-index: 1;
    width: 1.35rem;
    height: 1.35rem;
    border: 1px solid color-mix(in srgb, #f8fafc, transparent 8%);
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.94);
    color: #f8fafc;
    cursor: help;
    opacity: 0;
    pointer-events: none;
    transform: translate(0.2rem, 0.1rem) scale(0.8);
    transition:
      opacity 160ms ease,
      transform 160ms ease;
  }

  .reset-shell.is-armed .reset-question,
  .reset-shell:hover .reset-question,
  .reset-shell:focus-within .reset-question {
    opacity: 1;
    transform: translate(1.15rem, 0.35rem) scale(1);
    pointer-events: auto;
  }

  .reset-tooltip {
    position: absolute;
    right: 0;
    top: calc(100% + 0.68rem);
    z-index: 4;
    width: min(20rem, 70vw);
    padding: 0.85rem 0.95rem;
    border: 1px solid color-mix(in srgb, #ef4444, transparent 58%);
    border-radius: 16px;
    background:
      radial-gradient(circle at top left, rgba(239, 68, 68, 0.12), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 82%),
      color-mix(in srgb, var(--shell-panel), transparent 2%);
    color: var(--shell-text);
    box-shadow:
      var(--shell-card-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 24%);
    font: var(--efs-font-body-sm);
    line-height: 1.5;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-0.2rem);
    transition:
      opacity 140ms ease,
      transform 140ms ease;
  }

  .reset-shell:hover .reset-tooltip,
  .reset-shell:focus-within .reset-tooltip {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 71.99rem) {
    .workspace-toolbar-main {
      grid-template-columns: 1fr;
    }

    .activity-bar {
      justify-content: flex-start;
    }

    .workspace-toolbar-end {
      justify-content: flex-start;
    }
  }

  @media (max-width: 47.99rem) {
    .workspace-saved,
    .workspace-pill span:not(:first-child),
    .manager-button span,
    .save-button span,
    .control-button span {
      display: none;
    }

    .manager-button,
    .save-button,
    .control-button {
      width: 2.7rem;
      padding-inline: 0;
    }

    .workspace-pill {
      padding-inline: 0.75rem;
    }
  }
</style>
