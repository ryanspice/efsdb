import init, { wasm_inspect_envelope } from '../lib/wasm/efsdb_core.js';
import wasmUrl from '../lib/wasm/efsdb_core_bg.wasm?url';
import { fetchAndInspectEnvelope } from '../lib/envelope-fetcher';

let wasmReady = false;

// Initialize WASM when the worker starts
init(wasmUrl).then(() => {
    wasmReady = true;
    self.postMessage({ type: 'READY' });
}).catch((err) => {
    console.error("WASM init failed:", err);
    self.postMessage({ type: 'ERROR', payload: 'WASM initialization failed' });
});

self.onmessage = async (event: MessageEvent) => {
    if (!wasmReady) {
        self.postMessage({ type: 'ERROR', payload: 'WASM not ready yet' });
        return;
    }

    const { type, url, id } = event.data;

    if (type === 'INSPECT') {
        try {
            console.log("Worker: received INSPECT", url);
            // Use the two-step fetcher mapped to the WASM method
            const response = await fetchAndInspectEnvelope(url, wasm_inspect_envelope);
            console.log("Worker: inspect result", response.result);
            self.postMessage({ type: 'INSPECT_RESULT', id, payload: response.result, metrics: response.metrics });
        } catch (error: any) {
            console.error("Worker: inspect error", error);
            self.postMessage({ type: 'ERROR', id, payload: error.message });
        }
    }
};
