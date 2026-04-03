/**
 * Track C: Two-Step WASM Inspector Fetch Flow
 * Implements the explicit variable-header inspect contract without full-buffer fetches.
 */

// This function assumes it has access to the compiled WASM method.
export interface EnvelopeMetrics {
    probeFetchMs: number;
    headerFetchMs: number;
    wasmParseMs: number;
    totalBytesFetched: number;
}

export interface InspectResponse {
    result: any;
    metrics?: EnvelopeMetrics;
}

export async function fetchAndInspectEnvelope(
    url: string,
    wasmInspectEnvelope: (bytes: Uint8Array) => string
): Promise<InspectResponse> {
    const metrics: EnvelopeMetrics = {
        probeFetchMs: 0,
        headerFetchMs: 0,
        wasmParseMs: 0,
        totalBytesFetched: 0
    };

    try {
        // Step 1: Probe Fetch (First 16 bytes)
        const t0 = performance.now();
        let probeRes;
        try {
            probeRes = await fetch(url, {
                headers: { Range: 'bytes=0-15' },
                cache: 'no-store',
            });
        } catch (e: any) {
            throw new Error(`Probe fetch network error: ${e.message}`);
        }

        if (!probeRes.ok) {
            throw new Error(`Probe fetch failed: ${probeRes.status}`);
        }

        const probeBuffer = new Uint8Array(await probeRes.arrayBuffer());
        metrics.probeFetchMs = Math.round(performance.now() - t0);
        metrics.totalBytesFetched += probeBuffer.length;

        if (probeBuffer.length < 16) {
            const tParse = performance.now();
            const result = JSON.parse(wasmInspectEnvelope(probeBuffer));
            metrics.wasmParseMs = Math.round(performance.now() - tParse);
            return { result, metrics };
        }

        // Parse H directly from bytes 4-5 (Little Endian uint16)
        const view = new DataView(probeBuffer.buffer, probeBuffer.byteOffset, probeBuffer.byteLength);
        const H = view.getUint16(4, true);

        // Step 2: Full Header + Payload Length Fetch
        const t1 = performance.now();
        let headerRes;
        try {
            headerRes = await fetch(url, {
                headers: { Range: `bytes=0-${H + 7}` },
                cache: 'no-store',
            });
        } catch (e: any) {
            throw new Error(`Header fetch network error: ${e.message}`);
        }

        if (!headerRes.ok) {
            throw new Error(`Header fetch failed: ${headerRes.status}`);
        }

        const fullHeaderBuffer = new Uint8Array(await headerRes.arrayBuffer());
        metrics.headerFetchMs = Math.round(performance.now() - t1);
        metrics.totalBytesFetched += fullHeaderBuffer.length;

        // Step 3: Parse Metadata using Canonical WASM Inspect
        const t2 = performance.now();
        const jsonResult = wasmInspectEnvelope(fullHeaderBuffer);
        const result = JSON.parse(jsonResult);
        metrics.wasmParseMs = Math.round(performance.now() - t2);

        return { result, metrics };

    } catch (error: any) {
        console.error("fetchAndInspectEnvelope error:", error);
        return {
            result: {
                ok: false,
                error: error.message || 'ERR_NETWORK_FETCH'
            },
            metrics
        };
    }
}
