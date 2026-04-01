<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    let { envelopeUrl = '' } = $props<{
        envelopeUrl: string
    }>();

    let inspectResult: any = $state(null);
    let error: string | null = $state(null);
    let worker: Worker | null = null;
    let isVerifying = $state(false);
    let verifyResult = $state(null);
    let t0 = 0;

    onMount(() => {
        if (envelopeUrl) {
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
                        t0 = performance.now();
                        worker?.postMessage({ type: 'INSPECT', url: envelopeUrl, id: 1 });
                    }
                };
            } catch (err: any) {
                error = err.message;
            }
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

<div class="inspector-panel p-4 border rounded bg-surface">
    <h3 class="text-lg font-bold mb-2">Envelope Inspector</h3>
    
    {#if !inspectResult}
        {#if error}
            <div class="error-box p-3 bg-red-100 text-red-800 rounded">
                <strong class="block">Initialization Failed</strong>
                <code>{error}</code>
            </div>
        {:else}
            <p class="text-sm text-gray-500">Loading metadata via WASM worker...</p>
        {/if}
    {:else if !inspectResult.ok}
        <div class="error-box p-3 bg-red-100 text-red-800 rounded">
            <strong class="block">Inspection Failed</strong>
            <code>{inspectResult.error}</code>
        </div>
    {:else}
        <ul class="text-sm space-y-1 mb-4" data-testid="envelope-metadata">
            <li><strong>Type:</strong> 0x{inspectResult.type.toString(16).padStart(2, '0')}</li>
            <li><strong>Flags:</strong> 0x{inspectResult.flags.toString(16).padStart(2, '0')}</li>
            <li><strong>Suite:</strong> 0x{inspectResult.suite.toString(16).padStart(2, '0')}</li>
            <li><strong>Header Length:</strong> {inspectResult.header_length} bytes</li>
            <li><strong>Payload Length:</strong> {inspectResult.payload_length} bytes</li>
            <li><strong>Extensions:</strong> {inspectResult.extensions?.length ?? 0}</li>
        </ul>

        <button 
            class="px-3 py-1 bg-blue-600 text-white rounded text-sm disabled:opacity-50"
            onclick={handleVerify}
            disabled={isVerifying}
        >
            {isVerifying ? 'Fetching Full Payload...' : 'Verify Checksum'}
        </button>

        {#if verifyResult}
            <div class="mt-3 p-2 bg-gray-100 rounded text-xs">
                <code>{JSON.stringify(verifyResult)}</code>
            </div>
        {/if}
    {/if}
</div>
