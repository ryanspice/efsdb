import { readFileSync } from 'fs';
import { join } from 'path';
import { expect, test } from 'vitest';
import { fetchAndInspectEnvelope } from '../lib/envelope-fetcher';
import init, { wasm_inspect_envelope } from '../lib/wasm/efsdb_core.js';

// Initialize WASM before tests
test('fetchAndInspectEnvelope handles the two-step variable header fetch against a real fixture', async () => {
    // Load the WASM binary synchronously for the test
    const wasmPath = join(__dirname, '../lib/wasm/efsdb_core_bg.wasm');
    const wasmBytes = readFileSync(wasmPath);
    await init(wasmBytes);

    const globalFetch = global.fetch;

    // Create a dummy binary blob matching the VALID fixture layout
    const dummyData = new Uint8Array(64);
    // Magic: "EFS", Version: 0
    dummyData.set([69, 70, 83, 0], 0);
    // H = 16 (bytes 4-5)
    dummyData.set([16, 0], 4);
    // Type = 1 (byte 6)
    dummyData[6] = 1;
    // Flags = 0 (byte 7)
    dummyData[7] = 0;
    // Suite = 1 (byte 8)
    dummyData[8] = 1;
    // Reserved = 0 (bytes 9-15)
    // Payload length = 13 (bytes 16-23)
    dummyData.set([13, 0, 0, 0, 0, 0, 0, 0], 16);

    let firstFetchRange = '';
    let secondFetchRange = '';

    global.fetch = async (url: RequestInfo | URL, init?: RequestInit) => {
        const range = (init?.headers as Record<string, string>)['Range'];
        let slice: Uint8Array;

        if (range === 'bytes=0-15') {
            firstFetchRange = range;
            slice = dummyData.slice(0, 16);
        } else if (range && range.startsWith('bytes=0-')) {
            secondFetchRange = range;
            const end = parseInt(range.split('-')[1], 10);
            slice = dummyData.slice(0, end + 1);
        } else {
            throw new Error(`Unexpected range: ${range}`);
        }

        return new Response(slice as unknown as BodyInit, { status: 206 }); // 206 Partial Content
    };

    try {
        const { result, metrics } = await fetchAndInspectEnvelope('http://localhost/fixture.bin', wasm_inspect_envelope);

        // Verify the two steps
        expect(firstFetchRange).toBe('bytes=0-15');
        const view = new DataView(dummyData.buffer, dummyData.byteOffset, dummyData.byteLength);
        const H = view.getUint16(4, true);

        expect(secondFetchRange).toBe(`bytes=0-${H + 7}`);

        // Verify the wasm result parsing returns Canonical JSON
        expect(result.ok).toBe(true);
        expect(result.type).toBe(1);
        expect(result.suite).toBe(1);
        expect(result.header_length).toBe(16);
        expect(result.payload_length).toBe(13);

        // Verify metrics
        expect(metrics).toBeDefined();
        expect(metrics?.totalBytesFetched).toBe(16 + (H + 8));

    } finally {
        global.fetch = globalFetch;
    }
});
