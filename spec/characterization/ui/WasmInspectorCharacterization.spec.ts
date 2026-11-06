import { expect, test } from '@playwright/test';
import { loginViaUi } from './helpers/auth';

test.describe('WASM Inspector Track C', () => {
    test('Two-step range fetch and canonical JSON rendering', async ({ page, request }) => {
        page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));

        // 1. Authenticate
        await loginViaUi(page);

        // 2. Create a small mock binary file with EFS signature and H=16
        const mockBinary = Buffer.alloc(64);
        mockBinary.write('EFS\x00', 0); // Magic + Version
        mockBinary.writeUInt16LE(16, 4); // H = 16
        mockBinary.writeUInt8(0x01, 6);  // Type
        mockBinary.writeUInt8(0x00, 7);  // Flags
        mockBinary.writeUInt8(0x01, 8);  // Suite
        // Payload length = 0
        mockBinary.writeBigInt64LE(BigInt(0), 16);

        // 3. Upload fixture via admin API to workspace
        await page.evaluate(async (bufferBase64) => {
            const bytes = Uint8Array.from(atob(bufferBase64), c => c.charCodeAt(0));
            // Convert bytes to a binary string (since all our bytes in this test are <= 127, this is safe UTF-8)
            let binaryString = '';
            for (let i = 0; i < bytes.length; i++) {
                binaryString += String.fromCharCode(bytes[i]);
            }
            
            const response = await fetch('/_efsdb/api/admin/public-workspace/file', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    root: 'staging',
                    path: '/test.bin',
                    content: binaryString,
                    mime: 'application/octet-stream'
                })
            });
            if (!response.ok) throw new Error('Upload failed: ' + await response.text());
        }, mockBinary.toString('base64'));

        // 4. Inject the custom element into the current admin page
        await page.evaluate(() => {
            // Load the explorer JS which registers efsdb-envelope-inspector
            const script = document.createElement('script');
            script.type = 'module';
            script.src = '/js/efsdb-explorer.js';
            document.head.appendChild(script);

            // Add the element
            const container = document.createElement('div');
            container.innerHTML = '<efsdb-envelope-inspector url="/staging/test.bin"></efsdb-envelope-inspector>';
            document.body.appendChild(container);
        });

        // 5. Verify UI renders canonical JSON values
        const inspector = page.locator('efsdb-envelope-inspector');
        await expect(inspector).toBeVisible();

        const metadataList = page.locator('[data-testid="envelope-metadata"]');
        const errorBox = page.locator('.error-box');

        await expect(metadataList.or(errorBox)).toBeVisible({ timeout: 15000 });

        if (await errorBox.isVisible()) {
            throw new Error('Inspector Error: ' + await errorBox.textContent());
        }

        await expect(metadataList.locator('.metric-card').filter({ hasText: 'Header' })).toContainText('16 B');
        await expect(metadataList.locator('.metric-card').filter({ hasText: 'Payload' })).toContainText('0 B');

        // The inspector presents summary cards and a redacted canonical JSON view.
        // Assert the parser contract directly rather than the retired list markup.
        await inspector.getByText('View metadata JSON', { exact: true }).click();
        const metadata = JSON.parse(await inspector.locator('.json-details pre').innerText());
        expect(metadata).toMatchObject({
            ok: true,
            type: 1,
            flags: 0,
            suite: 1,
            header_length: 16,
            payload_length: 0,
            extensions: []
        });
    });
});
