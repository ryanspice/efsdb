<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    let { envelopeUrl = '' } = $props<{
        envelopeUrl: string
    }>();

    let inspectResult: any = $state(null);
    let error: string | null = $state(null);
    let worker: Worker | null = null;
    let isWorkerReady = $state(false);
    let isVerifying = $state(false);
    let verifyResult = $state(null);
    let t0 = 0;

    onMount(() => {
        try {
            worker = new Worker(new URL('../workers/explorer.worker.ts', import.meta.url), { type: 'module' });
            
            worker.onmessage = (e) => {
                const { type, payload, metrics } = e.data;
                if (type === 'INSPECT_RESULT') {
                    inspectResult = payload;
                    if (metrics && t0 > 0) {
                        const envelopeInspectMs = Math.round(performance.now() - t0);
                        const fullMetrics = { ...metrics, envelopeInspectMs };
                        
                        // Emit a custom event for the showcase page telemetry
                        if (typeof window !== 'undefined') {
                            window.dispatchEvent(new CustomEvent('efsdb:inspector-metrics', { 
                                detail: fullMetrics
                            }));
                        }
                    }
                } else if (type === 'ERROR') {
                    error = payload;
                    inspectResult = { ok: false, error };
                } else if (type === 'READY') {
                    isWorkerReady = true;
                }
            };
        } catch (err: any) {
            error = err.message;
        }
    });

    $effect(() => {
        if (worker && isWorkerReady && envelopeUrl) {
            inspectResult = null;
            error = null;
            verifyResult = null;
            t0 = performance.now();
            worker.postMessage({ type: 'INSPECT', url: envelopeUrl, id: 1 });
        }
    });

    onDestroy(() => {
        if (worker) {
            worker.terminate();
        }
    });

    async function handleVerify() {
        isVerifying = true;
        // Scaffolded boundary: Await full fetch -> pass to wasm_verify_envelope
        console.log("Triggering full-buffer fetch for verify...");
        setTimeout(() => {
            isVerifying = false;
            verifyResult = { ok: false, error: "ERR_NOT_IMPLEMENTED_YET" };
        }, 500);
    }
</script>

<div class="inspector-panel p-4 border rounded" style="background: var(--shell-bg); border-color: var(--shell-border);">
    <h3 class="text-lg font-bold mb-2" style="color: var(--shell-text);">Envelope Inspector</h3>
    
    {#if !inspectResult}
        {#if error}
            <div class="error-box p-3 rounded" style="background: color-mix(in srgb, #ef4444, transparent 85%); color: #b91c1c;">
                <strong class="block">Initialization Failed</strong>
                <code>{error}</code>
            </div>
        {:else}
            <p class="text-sm" style="color: var(--shell-muted);">Loading metadata via WASM worker...</p>
        {/if}
    {:else if !inspectResult.ok}
        <div class="error-box p-3 rounded" style="background: color-mix(in srgb, #ef4444, transparent 85%); color: #b91c1c;">
            <strong class="block">Inspection Failed</strong>
            <code>{inspectResult.error}</code>
        </div>
    {:else}
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4" data-testid="envelope-metadata">
            <div class="p-2 rounded" style="background: var(--shell-surface); border: 1px solid var(--shell-border);">
                <div class="text-xs uppercase tracking-wider" style="color: var(--shell-muted);">Type</div>
                <div class="font-mono text-sm" style="color: var(--shell-text);">0x{inspectResult.type.toString(16).padStart(2, '0')}</div>
            </div>
            <div class="p-2 rounded" style="background: var(--shell-surface); border: 1px solid var(--shell-border);">
                <div class="text-xs uppercase tracking-wider" style="color: var(--shell-muted);">Flags</div>
                <div class="font-mono text-sm" style="color: var(--shell-text);">0x{inspectResult.flags.toString(16).padStart(2, '0')}</div>
            </div>
            <div class="p-2 rounded" style="background: var(--shell-surface); border: 1px solid var(--shell-border);">
                <div class="text-xs uppercase tracking-wider" style="color: var(--shell-muted);">Suite</div>
                <div class="font-mono text-sm" style="color: var(--shell-text);">0x{inspectResult.suite.toString(16).padStart(2, '0')}</div>
            </div>
            <div class="p-2 rounded" style="background: var(--shell-surface); border: 1px solid var(--shell-border);">
                <div class="text-xs uppercase tracking-wider" style="color: var(--shell-muted);">Header Length</div>
                <div class="font-mono text-sm" style="color: var(--shell-text);">{inspectResult.header_length} bytes</div>
            </div>
            <div class="p-2 rounded" style="background: var(--shell-surface); border: 1px solid var(--shell-border);">
                <div class="text-xs uppercase tracking-wider" style="color: var(--shell-muted);">Payload Length</div>
                <div class="font-mono text-sm" style="color: var(--shell-text);">{inspectResult.payload_length} bytes</div>
            </div>
            <div class="p-2 rounded" style="background: var(--shell-surface); border: 1px solid var(--shell-border);">
                <div class="text-xs uppercase tracking-wider" style="color: var(--shell-muted);">Extensions</div>
                <div class="font-mono text-sm" style="color: var(--shell-text);">{inspectResult.extensions?.length ?? 0}</div>
            </div>
        </div>

        <details class="mb-4">
            <summary class="text-sm cursor-pointer select-none" style="color: var(--shell-primary);">View Raw JSON Output</summary>
            <div class="mt-2 p-3 rounded text-xs font-mono overflow-auto" style="background: color-mix(in srgb, var(--shell-surface), transparent 50%); border: 1px solid var(--shell-border); color: var(--shell-muted); max-height: 200px;">
                <pre>{JSON.stringify(inspectResult, null, 2)}</pre>
            </div>
        </details>

        <button 
            class="px-4 py-2 rounded text-sm font-bold disabled:opacity-50 transition-colors"
            style="background: var(--shell-primary); color: white; border: none; cursor: pointer;"
            onclick={handleVerify}
            disabled={isVerifying}
        >
            {isVerifying ? 'Fetching Full Payload...' : 'Verify Checksum'}
        </button>

        {#if verifyResult}
            <div class="mt-3 p-3 rounded text-xs font-mono" style="background: color-mix(in srgb, var(--shell-surface), transparent 30%); border: 1px solid var(--shell-border); color: var(--shell-text);">
                <code>{JSON.stringify(verifyResult)}</code>
            </div>
        {/if}
    {/if}
</div>
