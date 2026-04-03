<script lang="ts">
  import AppIcon from '@ui/components/icons/AppIcon.svelte';
  import type { AppIconName } from '@ui/components/icons/appIconCatalog';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetId, AdminWidgetMode } from '../lib/types';

  export type WorkspaceButtonsWidgetItem = {
    kind: 'widget';
    id: AdminWidgetId;
    label: string;
    barLabel: string;
    iconMask: string;
    inToolbar: boolean;
    edgePinned: boolean;
    inWorkspace: boolean;
    open: boolean;
    presentation: 'icon' | 'label';
    group: string;
    summary: string;
  };

  export type WorkspaceButtonsActionDraft = {
    label: string;
    barLabel: string;
    summary: string;
    iconName: AppIconName;
    steps: Array<{
      widgetId: AdminWidgetId;
      pinned: boolean;
    }>;
  };

  export type WorkspaceButtonsActionItem = {
    kind: 'action';
    id: string;
    label: string;
    barLabel: string;
    iconMask: string;
    iconName: AppIconName;
    inToolbar: boolean;
    group: string;
    summary: string;
    stepCount: number;
  };

  export type WorkspaceButtonsItem = WorkspaceButtonsWidgetItem | WorkspaceButtonsActionItem;

  type Props = {
    items: WorkspaceButtonsItem[];
    actionIconOptions: Array<{
      value: AppIconName;
      label: string;
    }>;
    mode?: AdminWidgetMode;
    onToggleToolbar: (widgetId: AdminWidgetId) => void;
    onToggleWorkspace: (widgetId: AdminWidgetId) => void;
    onToggleEdgePin: (widgetId: AdminWidgetId) => void;
    onOpenWidget: (widgetId: AdminWidgetId) => void;
    onToggleToolbarAction: (actionId: string) => void;
    onRunAction: (actionId: string) => void;
    onDeleteAction: (actionId: string) => void;
    onCreateAction: (draft: WorkspaceButtonsActionDraft) => void;
  };

  let {
    items,
    actionIconOptions,
    mode = 'card',
    onToggleToolbar,
    onToggleWorkspace,
    onToggleEdgePin,
    onOpenWidget,
    onToggleToolbarAction,
    onRunAction,
    onDeleteAction,
    onCreateAction
  }: Props = $props();

  let widgetItems = $derived(
    items.filter((item): item is WorkspaceButtonsWidgetItem => item.kind === 'widget')
  );
  let actionItems = $derived(
    items.filter((item): item is WorkspaceButtonsActionItem => item.kind === 'action')
  );
  let toolbarCount = $derived(items.filter((item) => item.inToolbar).length);
  let canvasCount = $derived(widgetItems.filter((item) => item.inWorkspace).length);
  let defaultActionIcon = $derived(actionIconOptions[0]?.value ?? 'buttons-manager');

  let actionForm = $state<WorkspaceButtonsActionDraft>({
    label: '',
    barLabel: '',
    summary: '',
    iconName: 'buttons-manager',
    steps: []
  });

  function hasStep(widgetId: AdminWidgetId): boolean {
    return actionForm.steps.some((step) => step.widgetId === widgetId);
  }

  function toggleStep(widgetId: AdminWidgetId): void {
    if (hasStep(widgetId)) {
      actionForm.steps = actionForm.steps.filter((step) => step.widgetId !== widgetId);
      return;
    }

    actionForm.steps = [...actionForm.steps, { widgetId, pinned: false }];
  }

  function togglePinnedStep(widgetId: AdminWidgetId): void {
    actionForm.steps = actionForm.steps.map((step) =>
      step.widgetId === widgetId ? { ...step, pinned: !step.pinned } : step
    );
  }

  function submitAction(): void {
    const label = actionForm.label.trim();
    if (!label || actionForm.steps.length === 0) {
      return;
    }

    onCreateAction({
      label,
      barLabel: actionForm.barLabel.trim(),
      summary: actionForm.summary.trim(),
      iconName: actionForm.iconName,
      steps: actionForm.steps
    });

    actionForm = {
      label: '',
      barLabel: '',
      summary: '',
      iconName: defaultActionIcon,
      steps: []
    };
  }

  $effect(() => {
    if (!actionIconOptions.some((option) => option.value === actionForm.iconName)) {
      actionForm.iconName = defaultActionIcon;
    }
  });
</script>

<AdminWidgetFrame
  eyebrow="Workspace tools"
  title="Buttons & widgets"
  description="Add or remove toolbar buttons, hide widgets from the canvas, pin shortcuts to the browser edge, and build custom button chains."
  {mode}
  allowPopout={false}
>
  <div class="manager-summary">
    <span>{toolbarCount} on toolbar</span>
    <span>{canvasCount} on canvas</span>
    <span>{actionItems.length} custom</span>
  </div>

  <section class="manager-section">
    <div class="section-heading">
      <strong>Workspace widgets</strong>
      <span>Accent rows are loaded. Matte rows stay available until you add them.</span>
    </div>

    <div class="button-list" role="list" aria-label="Workspace widgets">
      {#each widgetItems as item (item.id)}
        <article
          class="button-row"
          class:is-selected={item.inToolbar}
          class:is-muted={!item.inToolbar && !item.inWorkspace && !item.edgePinned}
          role="listitem"
        >
          <button
            class="button-row-main"
            type="button"
            aria-pressed={item.inToolbar}
            aria-label={item.inToolbar ? `Remove ${item.label} from the toolbar` : `Add ${item.label} to the toolbar`}
            onclick={() => onToggleToolbar(item.id)}
          >
            <span class="button-row-icon" style:--icon-mask={item.iconMask}></span>
            <span class="button-row-copy">
              <strong>{item.label}</strong>
              <span>{item.summary}</span>
            </span>
          </button>

          <div class="button-row-meta" aria-hidden="true">
            <span class="row-chip">{item.group}</span>
            <span class="row-chip">{item.presentation === 'label' ? item.barLabel : 'Icon button'}</span>
            <span class="row-chip">{item.inWorkspace ? 'Canvas' : 'Hidden'}</span>
          </div>

          <div class="button-row-actions">
            <button
              class="row-action"
              class:is-active={item.inWorkspace}
              class:active={item.inWorkspace}
              type="button"
              aria-pressed={item.inWorkspace}
              aria-label={item.inWorkspace ? `Remove ${item.label} from the workspace canvas` : `Add ${item.label} back to the workspace canvas`}
              title={item.inWorkspace ? 'Remove from canvas' : 'Add to canvas'}
              onclick={() => onToggleWorkspace(item.id)}
            >
              <AppIcon name="restore" />
            </button>
            <button
              class="row-action"
              class:is-active={item.edgePinned}
              class:active={item.edgePinned}
              type="button"
              aria-pressed={item.edgePinned}
              aria-label={item.edgePinned ? `Remove ${item.label} from the browser edge` : `Pin ${item.label} to the browser edge`}
              title={item.edgePinned ? 'Unpin edge shortcut' : 'Pin to edge'}
              onclick={() => onToggleEdgePin(item.id)}
            >
              <AppIcon name="edge" />
            </button>
            <button
              class="row-action"
              class:is-active={item.open}
              type="button"
              aria-label={`Open ${item.label}`}
              title="Open widget"
              onclick={() => onOpenWidget(item.id)}
            >
              <AppIcon name="open" />
            </button>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="manager-section">
    <div class="section-heading">
      <strong>Custom buttons</strong>
      <span>Chain widgets together for repeat admin flows and keep the button on the toolbar if you use it often.</span>
    </div>

    <div class="button-list" role="list" aria-label="Custom toolbar actions">
      {#if actionItems.length === 0}
        <div class="empty-state">No custom buttons yet. Build one below and it will show up here.</div>
      {/if}

      {#each actionItems as item (item.id)}
        <article class="button-row" class:is-selected={item.inToolbar} role="listitem">
          <button
            class="button-row-main"
            type="button"
            aria-pressed={item.inToolbar}
            aria-label={item.inToolbar ? `Remove ${item.label} from the toolbar` : `Add ${item.label} to the toolbar`}
            onclick={() => onToggleToolbarAction(item.id)}
          >
            <span class="button-row-icon button-row-icon-app">
              <AppIcon name={item.iconName} />
            </span>
            <span class="button-row-copy">
              <strong>{item.label}</strong>
              <span>{item.summary}</span>
            </span>
          </button>

          <div class="button-row-meta" aria-hidden="true">
            <span class="row-chip">Macro</span>
            <span class="row-chip">{item.stepCount} step{item.stepCount === 1 ? '' : 's'}</span>
            <span class="row-chip">{item.barLabel}</span>
          </div>

          <div class="button-row-actions">
            <button
              class="row-action"
              type="button"
              aria-label={`Run ${item.label}`}
              title="Run now"
              onclick={() => onRunAction(item.id)}
            >
              <AppIcon name="open" />
            </button>
            <button
              class="row-action destructive"
              type="button"
              aria-label={`Delete ${item.label}`}
              title="Delete custom button"
              onclick={() => onDeleteAction(item.id)}
            >
              <AppIcon name="close" />
            </button>
          </div>
        </article>
      {/each}
    </div>

    <form
      class="builder"
      onsubmit={(event) => {
        event.preventDefault();
        submitAction();
      }}
    >
      <div class="builder-grid">
        <label class="field">
          <span>Button label</span>
          <input
            type="text"
            bind:value={actionForm.label}
            maxlength="28"
            placeholder="Search stack"
          />
        </label>

        <label class="field">
          <span>Toolbar text</span>
          <input type="text" bind:value={actionForm.barLabel} maxlength="18" placeholder="Stack" />
        </label>
      </div>

      <div class="builder-grid">
        <label class="field">
          <span>Icon</span>
          <select bind:value={actionForm.iconName}>
            {#each actionIconOptions as option (option.value)}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        </label>

        <label class="field">
          <span>Summary</span>
          <input
            type="text"
            bind:value={actionForm.summary}
            maxlength="96"
            placeholder="Open a focused set of admin widgets together."
          />
        </label>
      </div>

      <div class="field">
        <span>Steps</span>
        <div class="step-list" role="group" aria-label="Custom button steps">
          {#each widgetItems as item (item.id)}
            <div class="step-row" class:is-selected={hasStep(item.id)}>
              <button
                class="step-toggle"
                class:is-selected={hasStep(item.id)}
                class:active={hasStep(item.id)}
                type="button"
                aria-pressed={hasStep(item.id)}
                onclick={() => toggleStep(item.id)}
              >
                <span class="step-icon" style:--icon-mask={item.iconMask}></span>
                <span>{item.label}</span>
              </button>

              <button
                class="pin-toggle"
                class:is-active={hasStep(item.id) && actionForm.steps.find((step) => step.widgetId === item.id)?.pinned}
                class:active={hasStep(item.id) && actionForm.steps.find((step) => step.widgetId === item.id)?.pinned}
                type="button"
                disabled={!hasStep(item.id)}
                aria-label={`Pin ${item.label} when this custom button runs`}
                title="Pin when opened"
                onclick={() => togglePinnedStep(item.id)}
              >
                <AppIcon name="pin" />
              </button>
            </div>
          {/each}
        </div>
      </div>

      <div class="builder-actions">
        <button
          class="create-button"
          type="submit"
          disabled={actionForm.label.trim().length === 0 || actionForm.steps.length === 0}
        >
          <AppIcon name="buttons-manager" />
          Add custom button
        </button>
      </div>
    </form>
  </section>
</AdminWidgetFrame>

<style>
  .manager-summary {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .manager-summary span,
  .row-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 1.8rem;
    padding: 0 0.72rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 12%);
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-surface), transparent 8%);
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .manager-section {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .section-heading {
    display: flex;
    flex-direction: column;
    gap: 0.22rem;
  }

  .section-heading strong {
    color: var(--shell-text);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .section-heading span,
  .empty-state {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.5;
  }

  .button-list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .button-row {
    display: grid;
    gap: 0.55rem;
    padding: 0.72rem 0.8rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-surface), transparent 4%);
    transition:
      border-color 160ms ease,
      background-color 160ms ease,
      box-shadow 160ms ease,
      opacity 160ms ease;
  }

  .button-row.is-selected {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 52%);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 72%),
      color-mix(in srgb, var(--shell-primary), transparent 88%);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 78%);
  }

  .button-row.is-muted {
    opacity: 0.82;
  }

  .button-row-main {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.72rem;
    width: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    text-align: left;
  }

  .button-row-icon {
    display: inline-flex;
    width: 2.15rem;
    height: 2.15rem;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: color-mix(in srgb, var(--shell-panel), transparent 4%);
    color: var(--shell-text);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--shell-border), transparent 18%);
    flex: none;
  }

  .button-row-icon::before {
    content: '';
    width: 1rem;
    height: 1rem;
    background: currentColor;
    mask: var(--icon-mask) center / contain no-repeat;
    -webkit-mask: var(--icon-mask) center / contain no-repeat;
  }

  .button-row-icon-app::before {
    content: none;
  }

  .button-row-icon :global(.app-icon) {
    width: 1rem;
    height: 1rem;
  }

  .button-row-copy {
    display: flex;
    flex-direction: column;
    gap: 0.16rem;
    min-width: 0;
  }

  .button-row-copy strong {
    color: var(--shell-text);
    font: var(--efs-font-title-sm);
  }

  .button-row-copy span {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  .button-row-meta,
  .button-row-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .row-action,
  .pin-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.1rem;
    height: 2.1rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-surface), transparent 8%);
    color: var(--shell-muted);
    cursor: pointer;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease;
  }

  .row-action:hover,
  .pin-toggle:hover:not(:disabled) {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 46%);
    color: var(--shell-text);
  }

  .row-action.is-active,
  .pin-toggle.is-active {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 52%);
    background: color-mix(in srgb, var(--shell-primary), transparent 84%);
    color: var(--shell-text);
  }

  .row-action.destructive:hover {
    border-color: color-mix(in srgb, #ef4444, transparent 28%);
    background: color-mix(in srgb, #ef4444, transparent 90%);
    color: #fca5a5;
  }

  .row-action :global(.app-icon),
  .pin-toggle :global(.app-icon) {
    width: 0.92rem;
    height: 0.92rem;
  }

  .builder {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 0.4rem;
    border-top: 1px solid color-mix(in srgb, var(--shell-border), transparent 18%);
  }

  .builder-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.38rem;
    min-width: 0;
  }

  .field span {
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .field input,
  .field select {
    width: 100%;
    min-width: 0;
    padding: 0.72rem 0.82rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    border-radius: 14px;
    background: color-mix(in srgb, var(--shell-surface), transparent 4%);
    color: var(--shell-text);
    font: var(--efs-font-body-sm);
  }

  .step-list {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .step-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.5rem;
    align-items: center;
  }

  .step-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    min-height: 2.4rem;
    padding: 0 0.8rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 16px;
    background: color-mix(in srgb, var(--shell-surface), transparent 4%);
    color: var(--shell-muted);
    cursor: pointer;
    transition:
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease;
  }

  .step-toggle.is-selected {
    border-color: color-mix(in srgb, var(--shell-primary), transparent 52%);
    background: color-mix(in srgb, var(--shell-primary), transparent 88%);
    color: var(--shell-text);
  }

  .step-icon {
    display: inline-flex;
    width: 0.95rem;
    height: 0.95rem;
    background: currentColor;
    mask: var(--icon-mask) center / contain no-repeat;
    -webkit-mask: var(--icon-mask) center / contain no-repeat;
    flex: none;
  }

  .builder-actions {
    display: flex;
    justify-content: flex-end;
  }

  .create-button {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    min-height: 2.55rem;
    padding: 0 1rem;
    border: 1px solid color-mix(in srgb, var(--shell-primary), transparent 54%);
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-primary), transparent 84%);
    color: var(--shell-text);
    cursor: pointer;
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      opacity 160ms ease;
  }

  .create-button:hover:not(:disabled) {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 38%);
  }

  .create-button:disabled,
  .pin-toggle:disabled {
    opacity: 0.42;
    cursor: not-allowed;
  }

  .create-button :global(.app-icon) {
    width: 0.95rem;
    height: 0.95rem;
  }

  :global(.widget-frame.win7-theme) .manager-summary span,
  :global(.widget-frame.win7-theme) .row-chip {
    min-height: 22px;
    padding: 0 8px;
    border-color: color-mix(in srgb, var(--w7-el-bd), transparent 14%);
    border-radius: var(--w7-el-bdr);
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--w7-surface), white 20%),
      color-mix(in srgb, var(--w7-surface), transparent 4%)
    );
    box-shadow: inset 0 0 0 1px color-mix(in srgb, white, transparent 18%);
    color: color-mix(in srgb, var(--w7-el-c), transparent 30%);
    font: var(--w7-font);
    letter-spacing: 0;
    text-transform: none;
  }

  :global(.widget-frame.win7-theme) .section-heading strong {
    color: var(--w7-el-c);
    font: var(--w7-font);
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
  }

  :global(.widget-frame.win7-theme) .section-heading span,
  :global(.widget-frame.win7-theme) .empty-state,
  :global(.widget-frame.win7-theme) .field span {
    color: color-mix(in srgb, var(--w7-el-c), transparent 30%);
    font: var(--w7-font);
    letter-spacing: 0;
    text-transform: none;
  }

  :global(.widget-frame.win7-theme) .button-row {
    gap: 0.45rem;
    padding: 6px;
    border-color: color-mix(in srgb, var(--w7-w-bd), transparent 14%);
    border-radius: var(--w7-el-bdr);
    background: linear-gradient(
      180deg,
      color-mix(in srgb, var(--w7-surface), white 14%),
      var(--w7-surface)
    );
    box-shadow: inset 0 0 0 1px color-mix(in srgb, white, transparent 16%);
  }

  :global(.widget-frame.win7-theme) .button-row.is-selected {
    border-color: var(--w7-li-bd-hl);
    background: var(--w7-li-bg-hl);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, white, transparent 12%);
  }

  :global(.widget-frame.win7-theme) .button-row.is-muted {
    opacity: 0.92;
  }

  :global(.widget-frame.win7-theme) .button-row-main {
    align-items: center;
    gap: 0.65rem;
  }

  :global(.widget-frame.win7-theme) .button-row-icon {
    width: 23px;
    height: 23px;
    border-color: var(--w7-el-bd);
    border-radius: var(--w7-el-bdr);
    background: var(--w7-el-grad);
    color: var(--w7-el-c);
    box-shadow: var(--w7-el-sd);
  }

  :global(.widget-frame.win7-theme) .button-row-copy strong {
    color: var(--w7-el-c);
    font: var(--w7-font);
    font-weight: 600;
  }

  :global(.widget-frame.win7-theme) .button-row-copy span {
    color: color-mix(in srgb, var(--w7-el-c), transparent 30%);
    font: var(--w7-font);
  }

  :global(.widget-frame.win7-theme) .row-action,
  :global(.widget-frame.win7-theme) .pin-toggle {
    width: 23px;
    min-width: 23px;
    height: 23px;
    min-height: 23px;
    padding: 0;
    transform: none;
  }

  :global(.widget-frame.win7-theme) .row-action:hover,
  :global(.widget-frame.win7-theme) .pin-toggle:hover:not(:disabled),
  :global(.widget-frame.win7-theme) .row-action.is-active,
  :global(.widget-frame.win7-theme) .pin-toggle.is-active {
    transform: none;
    color: var(--w7-el-c);
  }

  :global(.widget-frame.win7-theme) .row-action.destructive {
    color: color-mix(in srgb, #7d0d01, var(--w7-el-c) 22%);
  }

  :global(.widget-frame.win7-theme) .builder {
    padding-top: 6px;
    border-top-color: color-mix(in srgb, var(--w7-w-bd), transparent 18%);
  }

  :global(.widget-frame.win7-theme) .field input,
  :global(.widget-frame.win7-theme) .field select,
  :global(.widget-frame.win7-theme) .step-toggle,
  :global(.widget-frame.win7-theme) .create-button {
    font: var(--w7-font);
  }

  :global(.widget-frame.win7-theme) .step-toggle,
  :global(.widget-frame.win7-theme) .create-button {
    min-height: 23px;
    letter-spacing: 0;
    text-transform: none;
    transform: none;
  }

  :global(.widget-frame.win7-theme) .step-toggle {
    gap: 0.45rem;
  }

  :global(.widget-frame.win7-theme) .create-button:hover:not(:disabled) {
    transform: none;
  }

  @media (max-width: 47.99rem) {
    .builder-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
