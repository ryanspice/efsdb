<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import type { EnvelopeMetrics } from '../lib/envelope-fetcher';

    type ExtensionMetadata = {
        id: number;
        critical: boolean;
        length: number;
        value?: string;
    };

    type InspectSuccess = {
        ok: true;
        type: number;
        flags: number;
        suite: number;
        header_length: number;
        payload_length: number;
        extensions: ExtensionMetadata[];
    };

    type InspectFailure = {
        ok: false;
        error: string;
    };

    type InspectResult = InspectSuccess | InspectFailure;

    type WorkerPayload = {
        type?: unknown;
        payload?: unknown;
        metrics?: unknown;
    };

    type VerificationState =
        | { tone: 'pending'; label: 'Inspecting'; message: string }
        | { tone: 'danger'; label: 'Inspection failed'; message: string }
        | { tone: 'success'; label: 'Metadata ready'; message: string };

    type KeyResolutionBadge = {
        tone: 'neutral' | 'success' | 'warn';
        label: string;
        detail: string;
    };

    type VerifyActionBadge = {
        tone: 'neutral' | 'success';
        label: string;
        detail: string;
    };

    type SuiteBadge = {
        label: string;
        wire: string;
        detail: string;
    };

    type ExtensionSummary = {
        countLabel: string;
        detail: string;
        items: Array<{
            label: string;
            detail: string;
        }>;
    };

    let { envelopeUrl = '' } = $props<{
        envelopeUrl: string;
    }>();

    const verifySupported = false;

    let inspectResult = $state<InspectResult | null>(null);
    let inspectMetrics = $state<EnvelopeMetrics | null>(null);
    let error = $state<string | null>(null);
    let worker = $state<Worker | null>(null);
    let isWorkerReady = $state(false);
    let isVerifying = $state(false);
    let t0 = 0;

    function isRecord(value: unknown): value is Record<string, unknown> {
        return typeof value === 'object' && value !== null;
    }

    function parseNumber(value: unknown): number {
        return typeof value === 'number' && Number.isFinite(value) ? value : 0;
    }

    function parseBoolean(value: unknown): boolean {
        return value === true;
    }

    function parseString(value: unknown, fallback = ''): string {
        return typeof value === 'string' ? value : fallback;
    }

    function normalizeExtensions(value: unknown): ExtensionMetadata[] {
        if (!Array.isArray(value)) {
            return [];
        }

        return value
            .filter(isRecord)
            .map((extension) => ({
                id: parseNumber(extension.id),
                critical: parseBoolean(extension.critical),
                length: parseNumber(extension.length),
                value: typeof extension.value === 'string' ? extension.value : undefined,
            }));
    }

    function normalizeInspectResult(payload: unknown): InspectResult {
        if (!isRecord(payload)) {
            return { ok: false, error: 'ERR_INVALID_INSPECT_RESULT' };
        }

        if (payload.ok === true) {
            return {
                ok: true,
                type: parseNumber(payload.type),
                flags: parseNumber(payload.flags),
                suite: parseNumber(payload.suite),
                header_length: parseNumber(payload.header_length),
                payload_length: parseNumber(payload.payload_length),
                extensions: normalizeExtensions(payload.extensions),
            };
        }

        return {
            ok: false,
            error: parseString(payload.error, 'ERR_ENVELOPE_INSPECTION_FAILED'),
        };
    }

    function isInspectSuccess(result: InspectResult | null): result is InspectSuccess {
        return result !== null && result.ok;
    }

    function formatWireByte(value: number): string {
        return `0x${value.toString(16).padStart(2, '0')}`;
    }

    function formatDuration(value: number): string {
        return `${Math.max(0, Math.round(value))} ms`;
    }

    function formatBytes(value: number): string {
        return `${value.toLocaleString()} B`;
    }

    function extensionName(extensionId: number): string {
        switch (extensionId) {
            case 0x01:
                return 'Key ID';
            case 0x02:
                return 'Timestamp';
            default:
                return `Extension ${formatWireByte(extensionId)}`;
        }
    }

    function hasKeyIdExtension(result: InspectSuccess): boolean {
        return result.extensions.some((extension) => extension.id === 0x01);
    }

    function describeSuite(result: InspectSuccess): SuiteBadge {
        switch (result.suite) {
            case 0x01:
                return {
                    label: 'BLAKE3 Plain',
                    wire: formatWireByte(result.suite),
                    detail: 'Integrity-only envelope',
                };
            case 0x02:
                return {
                    label: 'ChaCha20-Poly1305',
                    wire: formatWireByte(result.suite),
                    detail: 'Runtime key required for full verification',
                };
            default:
                return {
                    label: 'Unknown suite',
                    wire: formatWireByte(result.suite),
                    detail: 'Inspect metadata only',
                };
        }
    }

    function describeKeyResolution(result: InspectSuccess): KeyResolutionBadge {
        if (result.suite === 0x01) {
            return {
                tone: 'neutral',
                label: 'Not required',
                detail: 'This suite does not resolve a runtime verification key',
            };
        }

        if (hasKeyIdExtension(result)) {
            return {
                tone: 'success',
                label: 'Key ID present',
                detail: 'Resolver input is present, but no secret material is shown here',
            };
        }

        return {
            tone: 'warn',
            label: 'No key ID',
            detail: 'Full verification may need an explicit runtime key path',
        };
    }

    function describeExtensions(result: InspectSuccess): ExtensionSummary {
        if (result.extensions.length === 0) {
            return {
                countLabel: '0 extensions',
                detail: 'No extension metadata present',
                items: [],
            };
        }

        return {
            countLabel: `${result.extensions.length} extension${result.extensions.length === 1 ? '' : 's'}`,
            detail: 'Metadata only; extension values stay hidden',
            items: result.extensions.map((extension) => ({
                label: extensionName(extension.id),
                detail: `${extension.critical ? 'Critical' : 'Advisory'} · ${extension.length} B`,
            })),
        };
    }

    function describeVerifyAction(): VerifyActionBadge {
        if (verifySupported) {
            return {
                tone: 'success',
                label: 'Verify now available',
                detail: 'Raw preview can run a real verifier path for this object',
            };
        }

        return {
            tone: 'neutral',
            label: 'Inspect only',
            detail: 'Verify now stays hidden until the explorer is wired to a real verification path',
        };
    }

    function redactInspectResult(result: InspectSuccess): Record<string, unknown> {
        return {
            ...result,
            extensions: result.extensions.map((extension) => ({
                id: extension.id,
                critical: extension.critical,
                length: extension.length,
                value: extension.value ? '[hidden]' : undefined,
            })),
        };
    }

    let inspectSuccess = $derived(isInspectSuccess(inspectResult) ? inspectResult : null);
    let verificationState = $derived.by<VerificationState>(() => {
        if (error) {
            return {
                tone: 'danger',
                label: 'Inspection failed',
                message: error,
            };
        }

        if (inspectResult === null) {
            return {
                tone: 'pending',
                label: 'Inspecting',
                message: 'Loading envelope metadata from the worker',
            };
        }

        if (!inspectResult.ok) {
            return {
                tone: 'danger',
                label: 'Inspection failed',
                message: inspectResult.error,
            };
        }

        return {
            tone: 'success',
            label: 'Metadata ready',
            message: 'Raw preview shows metadata only and never exposes payload bytes, resolver secrets, or key material',
        };
    });
    let suiteBadge = $derived(inspectSuccess ? describeSuite(inspectSuccess) : null);
    let keyResolutionBadge = $derived(inspectSuccess ? describeKeyResolution(inspectSuccess) : null);
    let verifyActionBadge = $derived(inspectSuccess ? describeVerifyAction() : null);
    let extensionSummary = $derived(inspectSuccess ? describeExtensions(inspectSuccess) : null);
    let safeInspectJson = $derived(
        inspectSuccess ? JSON.stringify(redactInspectResult(inspectSuccess), null, 2) : null
    );
    let summaryMetrics = $derived.by(() => {
        if (!inspectSuccess) {
            return [];
        }

        const items = [
            { label: 'Header', value: formatBytes(inspectSuccess.header_length) },
            { label: 'Payload', value: formatBytes(inspectSuccess.payload_length) },
            { label: 'Extensions', value: String(inspectSuccess.extensions.length) },
        ];

        if (inspectMetrics) {
            items.push({ label: 'Metadata fetched', value: formatBytes(inspectMetrics.totalBytesFetched) });
            items.push({ label: 'Inspect time', value: formatDuration(inspectMetrics.probeFetchMs + inspectMetrics.headerFetchMs + inspectMetrics.wasmParseMs) });
        }

        return items;
    });

    onMount(() => {
        try {
            worker = new Worker(new URL('../workers/explorer.worker.ts', import.meta.url), { type: 'module' });

            worker.onmessage = (event: MessageEvent<WorkerPayload>) => {
                const messageType = parseString(event.data.type);
                if (messageType === 'INSPECT_RESULT') {
                    inspectResult = normalizeInspectResult(event.data.payload);
                    inspectMetrics = isRecord(event.data.metrics)
                        ? {
                              probeFetchMs: parseNumber(event.data.metrics.probeFetchMs),
                              headerFetchMs: parseNumber(event.data.metrics.headerFetchMs),
                              wasmParseMs: parseNumber(event.data.metrics.wasmParseMs),
                              totalBytesFetched: parseNumber(event.data.metrics.totalBytesFetched),
                          }
                        : null;

                    if (inspectMetrics && t0 > 0 && typeof window !== 'undefined') {
                        window.dispatchEvent(
                            new CustomEvent('efsdb:inspector-metrics', {
                                detail: {
                                    ...inspectMetrics,
                                    envelopeInspectMs: Math.round(performance.now() - t0),
                                },
                            })
                        );
                    }
                    return;
                }

                if (messageType === 'ERROR') {
                    const nextError = parseString(event.data.payload, 'ERR_ENVELOPE_INSPECTION_FAILED');
                    error = nextError;
                    inspectMetrics = null;
                    inspectResult = { ok: false, error: nextError };
                    return;
                }

                if (messageType === 'READY') {
                    isWorkerReady = true;
                }
            };
        } catch (mountError) {
            error = mountError instanceof Error ? mountError.message : 'ERR_ENVELOPE_WORKER_INIT';
        }
    });

    $effect(() => {
        if (worker && isWorkerReady && envelopeUrl) {
            inspectResult = null;
            inspectMetrics = null;
            error = null;
            t0 = performance.now();
            worker.postMessage({ type: 'INSPECT', url: envelopeUrl, id: 1 });
        }
    });

    onDestroy(() => {
        worker?.terminate();
    });

    async function handleVerify(): Promise<void> {
        if (!verifySupported) {
            return;
        }

        isVerifying = true;
        isVerifying = false;
    }
</script>

<div class="inspector-panel">
    <div class="header">
        <div>
            <div class="eyebrow">Envelope</div>
            <h3>Verification</h3>
        </div>
        {#if suiteBadge}
            <div class="suite-pill">
                <span>{suiteBadge.label}</span>
                <code>{suiteBadge.wire}</code>
            </div>
        {/if}
    </div>

    <section class={`status-card tone-${verificationState.tone}`}>
        <div class="status-head">
            <div>
                <div class="status-label">{verificationState.label}</div>
                <div class="status-copy">{verificationState.message}</div>
            </div>
        </div>

        <div class="badge-grid">
            {#if suiteBadge}
                <div class="badge-card">
                    <div class="badge-card-head">
                        <div class="badge-card-label">Suite</div>
                        <div class="badge tone-neutral">
                            <span>{suiteBadge.label}</span>
                        </div>
                    </div>
                    <div class="support-copy">{suiteBadge.detail}</div>
                </div>
            {/if}

            {#if keyResolutionBadge}
                <div class="badge-card">
                    <div class="badge-card-head">
                        <div class="badge-card-label">Key resolution</div>
                        <div class={`badge tone-${keyResolutionBadge.tone}`}>
                            <span>{keyResolutionBadge.label}</span>
                        </div>
                    </div>
                    <div class="support-copy">{keyResolutionBadge.detail}</div>
                </div>
            {/if}

            {#if verifyActionBadge}
                <div class="badge-card">
                    <div class="badge-card-head">
                        <div class="badge-card-label">Action</div>
                        <div class={`badge tone-${verifyActionBadge.tone}`}>
                            <span>{verifyActionBadge.label}</span>
                        </div>
                    </div>
                    <div class="support-copy">{verifyActionBadge.detail}</div>
                </div>
            {/if}
        </div>
    </section>

    {#if inspectSuccess && extensionSummary}
        <div class="metric-grid" data-testid="envelope-metadata">
            {#each summaryMetrics as metric (metric.label)}
                <div class="metric-card">
                    <div class="metric-label">{metric.label}</div>
                    <div class="metric-value">{metric.value}</div>
                </div>
            {/each}
        </div>

        <section class="section-card">
            <div class="section-head">
                <div>
                    <div class="section-title">Extensions</div>
                    <div class="section-copy">{extensionSummary.detail}</div>
                </div>
                <div class="badge tone-neutral">
                    <span>{extensionSummary.countLabel}</span>
                </div>
            </div>

            {#if extensionSummary.items.length > 0}
                <div class="extension-list">
                    {#each extensionSummary.items as extension (extension.label + extension.detail)}
                        <div class="extension-item">
                            <div class="extension-label">{extension.label}</div>
                            <div class="extension-detail">{extension.detail}</div>
                        </div>
                    {/each}
                </div>
            {:else}
                <div class="empty-copy">No extension metadata on this object.</div>
            {/if}
        </section>

        {#if verifySupported}
            <button class="verify-button" type="button" onclick={handleVerify} disabled={isVerifying}>
                {isVerifying ? 'Verifying…' : 'Verify now'}
            </button>
        {/if}

        {#if safeInspectJson}
            <details class="json-details">
                <summary>View metadata JSON</summary>
                <pre>{safeInspectJson}</pre>
            </details>
        {/if}
    {/if}
</div>

<style>
    .inspector-panel {
        display: grid;
        gap: 0.9rem;
        padding: 1rem;
        border: 1px solid var(--shell-border);
        border-radius: 16px;
        background:
            linear-gradient(
                180deg,
                color-mix(in srgb, var(--shell-panel, var(--shell-bg, var(--shell-panel-bg))), white 4%),
                var(--shell-panel, var(--shell-bg, var(--shell-panel-bg)))
            );
        color: var(--shell-text);
    }

    .header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.75rem;
    }

    .eyebrow,
    .metric-label,
    .section-copy,
    .status-copy,
    .support-copy,
    .extension-detail,
    .empty-copy,
    .json-details summary {
        color: var(--shell-muted);
    }

    .eyebrow,
    .metric-label {
        font-size: 0.72rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-weight: 700;
    }

    h3,
    .section-title,
    .status-label,
    .metric-value,
    .extension-label {
        margin: 0;
        color: var(--shell-text);
    }

    h3 {
        font-size: 1rem;
        line-height: 1.2;
    }

    .suite-pill,
    .badge {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        min-height: 30px;
        padding: 0.35rem 0.65rem;
        border-radius: 999px;
        border: 1px solid color-mix(in srgb, var(--shell-border), var(--shell-primary) 12%);
        background: color-mix(in srgb, var(--shell-surface), transparent 16%);
        font-size: 0.76rem;
        font-weight: 700;
    }

    .suite-pill code {
        color: var(--shell-muted);
        font-size: 0.72rem;
    }

    .status-card,
    .section-card,
    .metric-card,
    .json-details {
        border: 1px solid var(--shell-border);
        border-radius: 14px;
        background: color-mix(in srgb, var(--shell-surface), transparent 12%);
    }

    .status-card,
    .section-card,
    .json-details {
        padding: 0.9rem;
    }

    .status-head,
    .section-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.75rem;
    }

    .status-card {
        display: grid;
        gap: 0.55rem;
    }

    .badge-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 0.65rem;
    }

    .badge-card {
        display: grid;
        gap: 0.4rem;
        padding: 0.75rem;
        border-radius: 12px;
        border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
        background: color-mix(in srgb, var(--shell-panel, var(--shell-bg)), transparent 14%);
    }

    .badge-card-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.55rem;
    }

    .badge-card-label {
        font-size: 0.72rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--shell-muted);
    }

    .tone-success {
        border-color: color-mix(in srgb, var(--efs-state-success, #10b981), transparent 58%);
    }

    .tone-danger {
        border-color: color-mix(in srgb, var(--efs-state-danger, #ef4444), transparent 56%);
    }

    .tone-warn {
        border-color: color-mix(in srgb, var(--efs-state-warning, #f59e0b), transparent 56%);
    }

    .badge.tone-success {
        color: var(--efs-state-success-ink, #0f766e);
        background: color-mix(in srgb, var(--efs-state-success, #10b981), transparent 88%);
    }

    .badge.tone-warn {
        color: var(--efs-state-warning-ink, #b45309);
        background: color-mix(in srgb, var(--efs-state-warning, #f59e0b), transparent 88%);
    }

    .badge.tone-neutral {
        color: var(--shell-text);
    }

    .metric-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 0.65rem;
    }

    .metric-card {
        padding: 0.75rem;
        display: grid;
        gap: 0.35rem;
    }

    .metric-value,
    .extension-label {
        font-size: 0.92rem;
        font-weight: 700;
    }

    .extension-list {
        display: grid;
        gap: 0.55rem;
        margin-top: 0.8rem;
    }

    .extension-item {
        display: grid;
        gap: 0.18rem;
        padding: 0.7rem 0.8rem;
        border-radius: 12px;
        background: color-mix(in srgb, var(--shell-panel, var(--shell-bg)), transparent 14%);
        border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    }

    .empty-copy {
        margin-top: 0.8rem;
        font-size: 0.9rem;
    }

    .verify-button {
        justify-self: start;
        min-height: 36px;
        padding: 0.55rem 0.9rem;
        border: 1px solid color-mix(in srgb, var(--shell-primary, var(--accent, #2563eb)), transparent 30%);
        border-radius: 12px;
        background: var(--shell-primary, var(--accent, #2563eb));
        color: var(--shell-primary-text, var(--shell-pill-text, #fff));
        font-weight: 700;
        cursor: pointer;
    }

    .verify-button:disabled {
        opacity: 0.6;
        cursor: default;
    }

    .json-details summary {
        cursor: pointer;
        user-select: none;
        font-size: 0.84rem;
        font-weight: 700;
    }

    .json-details pre {
        margin: 0.75rem 0 0;
        overflow: auto;
        max-height: 200px;
        font-size: 0.74rem;
        line-height: 1.45;
        color: var(--shell-text);
    }

    @media (max-width: 640px) {
        .header,
        .status-head,
        .section-head {
            flex-direction: column;
        }
    }
</style>
