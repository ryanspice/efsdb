import { test, expect } from '@playwright/test';
import { gotoLoginHost, playwrightBootstrapSecret } from './helpers/auth';
import {
  adminHost,
  expectModuleScript,
  loginBundlePath,
  loginHost,
  loginInput,
  loginSubmit,
  readBootstrapPayload,
  waitForCustomElement
} from './helpers/selectors';

test('login host boots with shared bootstrap contract', async ({ page }) => {
  await gotoLoginHost(page);
  await expectModuleScript(page, loginBundlePath);

  const bootstrap = await readBootstrapPayload(page);
  expect(bootstrap).toMatchObject({
    app: 'login',
    tag: 'efsdb-login',
    assetFile: loginBundlePath,
    apiBase: '/_efsdb/api/auth',
    authBase: '/_efsdb/api/auth'
  });
});

test('login failure preserves current error path', async ({ page }) => {
  await gotoLoginHost(page);

  const input = loginInput(page);
  await input.fill('not-a-real-login-key');
  await loginSubmit(page).click();

  await expect(loginHost(page).locator('.alert.error')).toContainText('Invalid login key');
});

test('login happy path redirects to admin', async ({ page }) => {
  await gotoLoginHost(page);

  await loginInput(page).fill(playwrightBootstrapSecret);
  await loginSubmit(page).click();

  await page.waitForURL((url) => {
    return url.pathname.replace(/\/+$/, '') === '/_efsdb/admin';
  });
  await waitForCustomElement(page, 'efsdb-admin');
  await expect(adminHost(page)).toBeVisible();
});

test('login input is focused for unauthenticated users', async ({ page }) => {
  await gotoLoginHost(page);
  await expect(loginInput(page)).toBeFocused();
});

test('light mode login uses contrast-safe accent tokens on bright surfaces', async ({ page }) => {
  const contrastRatio = (foreground: string, background: string): number => {
    const toLinear = (value: number): number => {
      const normalized = value / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : ((normalized + 0.055) / 1.055) ** 2.4;
    };

    const parseHex = (value: string): [number, number, number] => {
      const normalized = value.replace('#', '');
      const parts = normalized.length === 3
        ? normalized.split('').map((part) => part + part)
        : [normalized.slice(0, 2), normalized.slice(2, 4), normalized.slice(4, 6)];

      return parts.map((part) => Number.parseInt(part, 16)) as [number, number, number];
    };

    const luminance = (value: string): number => {
      const [red, green, blue] = parseHex(value);
      return 0.2126 * toLinear(red) + 0.7152 * toLinear(green) + 0.0722 * toLinear(blue);
    };

    const lighter = Math.max(luminance(foreground), luminance(background));
    const darker = Math.min(luminance(foreground), luminance(background));
    return (lighter + 0.05) / (darker + 0.05);
  };

  await page.addInitScript(() => {
    window.localStorage.setItem('efsdb-theme', 'light');
    Object.assign(window as Window & {
      getEfsdbTheme?: () => 'light';
      setEfsdbTheme?: (theme: 'light') => 'light';
    }, {
      getEfsdbTheme: () => 'light',
      setEfsdbTheme: () => 'light'
    });
  });

  await gotoLoginHost(page);
  await expect.poll(() => loginHost(page).evaluate((host) => host.getAttribute('theme'))).toBe('light');

  await loginHost(page).evaluate((host) => {
    host.setAttribute('theme', 'light');
    host.style.setProperty('--accent', '#c6ff00');
  });

  const styles = await loginHost(page).evaluate((host) => {
    const root = host.shadowRoot;
    if (!root) {
      throw new Error('efsdb-login shadow root missing');
    }

    const normalizeColor = (value: string): string => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;

      const context = canvas.getContext('2d');
      if (!context) {
        throw new Error('Unable to create canvas context for color normalization');
      }

      context.fillStyle = value;
      context.fillRect(0, 0, 1, 1);

      const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;
      return `#${[red, green, blue].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
    };

    const submit = root.querySelector('button[type="submit"]');
    const eyebrow = root.querySelector('.eyebrow');
    if (!(submit instanceof HTMLButtonElement) || !(eyebrow instanceof HTMLElement)) {
      throw new Error('login primary controls missing');
    }

    return {
      buttonBg: normalizeColor(getComputedStyle(submit).backgroundColor),
      buttonText: normalizeColor(getComputedStyle(submit).color),
      eyebrowColor: normalizeColor(getComputedStyle(eyebrow).color)
    };
  });

  expect(styles.buttonBg).not.toBe('#c6ff00');
  expect(styles.eyebrowColor).not.toBe('#c6ff00');
  expect(contrastRatio(styles.buttonText, styles.buttonBg)).toBeGreaterThanOrEqual(4.5);
});
