<?php
$canAdmin = !$isGuest && $perms->canManageSettings($user);
if (!$canAdmin) {
    echo "<div class='flash-error'>Settings management requires tenant admin access.</div>";
    return;
}

$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $accent = (string)($_POST['accent'] ?? '');
    if ($accent !== '') {
        try {
            $app->getIdentity()->writeTenantSetting('accent', $accent);
            $success = 'Settings updated. Close this window to see changes.';
        } catch (Throwable $e) {
            $error = $e->getMessage();
        }
    }
}

$tenantSettings = $app->getIdentity()->getTenantSettings();
$currentAccent = $tenantSettings['settings']['accent'] ?? 'default';
?>
<style>
    body.is-popup { background: transparent !important; }
    body.is-popup .form-card { box-shadow: none !important; border: none !important; margin-top: 0 !important; padding: 1.5rem !important; background: transparent; }
    body.is-popup .page-title { display: none; }
    body.is-popup .section-label { display: none; }
</style>
<script>
    if (window.parent && window.parent !== window) {
        document.body.classList.add('is-popup');
    }
</script>
<section class="form-card max-w-xl mx-auto mt-8">
    <div class="section-label">Appearance</div>
    <h1 class="page-title mt-2 mb-6">Settings</h1>

    <?php if ($error !== ''): ?>
        <div class="flash-error mb-6"><?php echo htmlspecialchars($error); ?></div>
    <?php endif; ?>
    
    <?php if ($success !== ''): ?>
        <div class="notice mb-6" style="background: color-mix(in srgb, var(--efs-state-success, #48c78e), transparent 88%); border-color: var(--efs-state-success, #48c78e); color: var(--shell-text-strong);">
            <?php echo htmlspecialchars($success); ?>
            <script>
                // Notify parent window to reload if in an iframe
                if (window.parent && window.parent !== window) {
                    setTimeout(() => window.parent.location.reload(), 1500);
                }
            </script>
        </div>
    <?php endif; ?>

    <?php if (isset($_GET['popup'])): ?>
        <script type="module" src="/js/efsdb-theme-studio.js"></script>
        <efsdb-theme-studio></efsdb-theme-studio>
    <?php endif; ?>
    
    <form method="post" action="/_efsdb/settings" class="space-y-6">
        <div class="field-stack">
            <label>Theme Mode</label>
            <div class="flex items-center gap-3 p-1 rounded-full border border-[var(--shell-border)] bg-[var(--shell-surface)] w-fit" id="theme-mode-group">
                <button type="button" class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors" data-mode="light" onclick="setThemeMode('light')">Light</button>
                <button type="button" class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors" data-mode="dark" onclick="setThemeMode('dark')">Dark</button>
                <button type="button" class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors" data-mode="auto" onclick="setThemeMode('auto')">Auto</button>
            </div>
            <p class="shell-copy text-xs mt-1">Choose your preferred appearance or sync with your system.</p>
        </div>

        <script>
            function getThemeHostWindow() {
                return window.parent && window.parent !== window ? window.parent : window;
            }

            function updateThemeButtons(mode) {
                const buttons = document.querySelectorAll('#theme-mode-group button');
                buttons.forEach(btn => {
                    if (btn.dataset.mode === mode) {
                        btn.style.background = 'var(--accent)';
                        btn.style.color = 'var(--shell-pill-text)';
                    } else {
                        btn.style.background = 'transparent';
                        btn.style.color = 'var(--shell-text)';
                    }
                });
            }

            function syncThemeButtonsFromHost() {
                let currentMode = 'auto';
                const hostWindow = getThemeHostWindow();

                if (hostWindow && hostWindow.getEfsdbThemeSetting) {
                    currentMode = hostWindow.getEfsdbThemeSetting();
                } else if (window.getEfsdbThemeSetting) {
                    currentMode = window.getEfsdbThemeSetting();
                }

                updateThemeButtons(currentMode);
                return currentMode;
            }

            function setThemeMode(mode) {
                const hostWindow = getThemeHostWindow();
                if (hostWindow && hostWindow.setEfsdbTheme) {
                    hostWindow.setEfsdbTheme(mode);
                } else if (window.setEfsdbTheme) {
                    window.setEfsdbTheme(mode);
                }
                syncThemeButtonsFromHost();
            }

            document.addEventListener('DOMContentLoaded', () => {
                const hostWindow = getThemeHostWindow();
                syncThemeButtonsFromHost();

                if (hostWindow && hostWindow.addEventListener) {
                    hostWindow.addEventListener('efsdb-themechange', syncThemeButtonsFromHost);
                }

                window.addEventListener('efsdb-themechange', syncThemeButtonsFromHost);
            });
        </script>

        <div class="field-stack mt-6">
            <label for="accent">Accent Color</label>
            <script>
                const WINDOW_SETTINGS_STORAGE_KEY = 'efsdb:window-settings';
                const SETTINGS_THEME_VAR_NAMES = [
                    '--accent',
                    '--accent-strong',
                    '--accent-soft',
                    '--accent-secondary',
                    '--accent-secondary-soft',
                    '--surface',
                    '--surface-alt',
                    '--surface-inset',
                    '--border',
                    '--border-strong',
                    '--text',
                    '--text-muted',
                    '--on-accent',
                    '--on-secondary',
                    '--focus',
                    '--success',
                    '--warning',
                    '--danger',
                    '--theme-shadow',
                    '--efs-state-success',
                    '--efs-state-warning',
                    '--efs-state-danger',
                    '--efs-font-sans',
                    '--efs-window-font-family',
                    '--shell-primary',
                    '--shell-primary-strong',
                    '--shell-primary-soft',
                    '--shell-body-bg',
                    '--shell-overlay',
                    '--shell-overlay-opacity',
                    '--shell-panel-bg',
                    '--shell-panel-solid',
                    '--shell-panel-solid-subtle',
                    '--shell-panel-solid-muted',
                    '--shell-panel',
                    '--shell-surface',
                    '--shell-soft-bg',
                    '--shell-inset-bg',
                    '--shell-inset-strong-bg',
                    '--shell-nav-bg',
                    '--shell-hover-bg',
                    '--shell-row-hover',
                    '--shell-code-bg',
                    '--shell-pre-bg',
                    '--shell-input-bg',
                    '--shell-input-placeholder',
                    '--shell-shadow',
                    '--shell-pill-text',
                    '--shell-nav-text',
                    '--shell-code-text',
                    '--shell-chip-bg',
                    '--shell-scrollbar',
                    '--shell-border',
                    '--shell-border-strong',
                    '--shell-text',
                    '--shell-text-strong',
                    '--shell-muted',
                    '--shell-font-sans',
                    '--shell-focus-ring'
                ];

                function isEmbeddedSettingsPopup() {
                    return Boolean(window.parent && window.parent !== window);
                }

                function dispatchThemeStudioHostEvent(eventName, detail) {
                    if (!isEmbeddedSettingsPopup()) {
                        return false;
                    }

                    try {
                        window.parent.document.dispatchEvent(
                            new window.parent.CustomEvent(eventName, { detail: detail || {} })
                        );
                        return true;
                    } catch (error) {
                        return false;
                    }
                }

                function createThemeStudioAnchorRect(trigger) {
                    if (!(trigger instanceof HTMLElement)) {
                        return null;
                    }

                    const triggerRect = trigger.getBoundingClientRect();
                    if (!isEmbeddedSettingsPopup()) {
                        return {
                            left: triggerRect.left,
                            top: triggerRect.top,
                            right: triggerRect.right,
                            bottom: triggerRect.bottom,
                            width: triggerRect.width,
                            height: triggerRect.height
                        };
                    }

                    try {
                        const frame = window.frameElement;
                        if (!(frame instanceof HTMLElement)) {
                            return null;
                        }

                        const frameRect = frame.getBoundingClientRect();
                        return {
                            left: frameRect.left + triggerRect.left,
                            top: frameRect.top + triggerRect.top,
                            right: frameRect.left + triggerRect.right,
                            bottom: frameRect.top + triggerRect.bottom,
                            width: triggerRect.width,
                            height: triggerRect.height
                        };
                    } catch (error) {
                        return null;
                    }
                }

                function dispatchWindowSettingsSync(detail) {
                    const hostWindow = getThemeHostWindow();
                    const targets = hostWindow && hostWindow !== window ? [hostWindow, window] : [window];

                    return targets.some((targetWindow) => {
                        if (!targetWindow || !targetWindow.dispatchEvent) {
                            return false;
                        }

                        try {
                            targetWindow.dispatchEvent(
                                new targetWindow.CustomEvent('efsdb-window-settings-sync', {
                                    detail: detail || {}
                                })
                            );
                            return true;
                        } catch (error) {
                            return false;
                        }
                    });
                }

                function readSharedWindowSettings() {
                    const hostWindow = getThemeHostWindow();
                    const storageSource = hostWindow && hostWindow.localStorage
                        ? hostWindow.localStorage
                        : window.localStorage;

                    try {
                        const raw = storageSource.getItem(WINDOW_SETTINGS_STORAGE_KEY);
                        if (!raw) {
                            return {};
                        }

                        const parsed = JSON.parse(raw);
                        return parsed && typeof parsed === 'object' ? parsed : {};
                    } catch (error) {
                        return {};
                    }
                }

                function writeSharedWindowSettings(partial) {
                    if (!partial || typeof partial !== 'object') {
                        return;
                    }

                    const hostWindow = getThemeHostWindow();
                    const current = readSharedWindowSettings();
                    const next = Object.assign({}, current, partial);
                    const storageTargets = hostWindow && hostWindow !== window
                        ? [hostWindow, window]
                        : [window];

                    storageTargets.forEach((targetWindow) => {
                        try {
                            targetWindow.localStorage.setItem(
                                WINDOW_SETTINGS_STORAGE_KEY,
                                JSON.stringify(next)
                            );
                        } catch (error) {
                        }
                    });

                    dispatchWindowSettingsSync(partial);
                }

                function syncSharedSettingsControls() {
                    const sharedSettings = readSharedWindowSettings();
                    const fontPresetInput = document.getElementById('font-preset');
                    const pageThemeSpreadInput = document.getElementById('page-theme-spread');

                    if (fontPresetInput && typeof sharedSettings.fontPreset === 'string') {
                        fontPresetInput.value = sharedSettings.fontPreset;
                    }

                    if (pageThemeSpreadInput && typeof sharedSettings.pageThemeSpread === 'string') {
                        pageThemeSpreadInput.value = sharedSettings.pageThemeSpread;
                    }
                }

                function readSettingsWindowPreferences() {
                    const fontPresetInput = document.getElementById('font-preset');
                    const pageThemeSpreadInput = document.getElementById('page-theme-spread');

                    return {
                        fontPreset: fontPresetInput && typeof fontPresetInput.value === 'string'
                            ? fontPresetInput.value
                            : 'system',
                        pageThemeSpread: pageThemeSpreadInput && pageThemeSpreadInput.value === 'expanded'
                            ? 'expanded'
                            : 'contained'
                    };
                }

                function mirrorHostThemeSurface() {
                    const hostWindow = getThemeHostWindow();
                    if (!hostWindow || !hostWindow.document || !hostWindow.getComputedStyle) {
                        return;
                    }

                    try {
                        const hostRoot = hostWindow.document.documentElement;
                        const localRoot = document.documentElement;
                        const computed = hostWindow.getComputedStyle(hostRoot);

                        localRoot.dataset.theme = hostRoot.dataset.theme || localRoot.dataset.theme || 'light';
                        localRoot.dataset.themeSetting = hostRoot.dataset.themeSetting || localRoot.dataset.themeSetting || 'auto';
                        localRoot.style.colorScheme = hostRoot.style.colorScheme || localRoot.dataset.theme || 'light';

                        SETTINGS_THEME_VAR_NAMES.forEach((name) => {
                            const value = computed.getPropertyValue(name).trim();
                            if (value) {
                                localRoot.style.setProperty(name, value);
                            } else {
                                localRoot.style.removeProperty(name);
                            }
                        });
                    } catch (error) {
                    }
                }

                function syncSettingsChromeFromHost() {
                    mirrorHostThemeSurface();
                    syncThemeButtonsFromHost();
                    syncSharedSettingsControls();

                    const liveAccent = resolveAppliedAccent();
                    if (liveAccent) {
                        syncAccentInputs(liveAccent);
                    }
                }

                function openThemeStudio(event) {
                    const trigger = event && event.currentTarget instanceof HTMLElement
                        ? event.currentTarget
                        : document.getElementById('toolbar-theme-trigger');
                    const detail = {
                        source: 'toolbar',
                        anchorRect: createThemeStudioAnchorRect(trigger)
                    };

                    if (dispatchThemeStudioHostEvent('efsdb:theme-studio:toggle', detail)) {
                        return;
                    }

                    document.dispatchEvent(new CustomEvent('efsdb:theme-studio:toggle', { detail }));
                }

                document.addEventListener('pointerdown', () => {
                    dispatchThemeStudioHostEvent('efsdb:theme-studio:frame-pointerdown');
                }, true);
            </script>
            <div class="flex items-center gap-2">
                <input type="color" id="accent-picker" value="<?php echo $currentAccent === 'default' ? '#5b8cff' : htmlspecialchars($currentAccent); ?>" class="h-[2.7rem] w-12 p-0.5 rounded cursor-pointer border border-[var(--shell-border)] bg-[var(--shell-surface)]" oninput="document.getElementById('accent').value = this.value">
                <input type="text" id="accent" name="accent" value="<?php echo htmlspecialchars($currentAccent); ?>" placeholder="e.g. #c6ff00 or default" required class="flex-1" oninput="if(this.value.match(/^#[0-9a-fA-F]{6}$/)) document.getElementById('accent-picker').value = this.value;">
                <button type="button" id="toolbar-theme-trigger" class="pill-button" onclick="openThemeStudio(event)" title="Open Theme Studio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                    </svg>
                    Theme Studio
                </button>
            </div>
            <p class="shell-copy text-xs mt-1">Use <code>default</code> to fallback to the theme's built-in accent, or provide a hex code like <code>#c6ff00</code> for neon green.</p>
        </div>

        <div class="field-stack mt-6">
            <label for="font-preset">Site Font</label>
            <select id="font-preset" class="flex-1">
                <option value="system">System UI</option>
                <option value="segoe-ui">Segoe UI</option>
                <option value="mac-system">macOS System</option>
                <option value="ios-system">iOS System</option>
                <option value="android-system">Android System</option>
                <option value="linux-system">Linux Desktop</option>
                <option value="humanist">Humanist</option>
                <option value="serif">Serif UI</option>
                <option value="mono">Mono Display</option>
            </select>
            <p class="shell-copy text-xs mt-1">Applies to the header chrome, page shell, cards, and shared controls across the studio.</p>
        </div>

        <div class="field-stack mt-6">
            <label for="page-theme-spread">Theme Coverage</label>
            <select id="page-theme-spread" class="flex-1">
                <option value="contained">Contained shell</option>
                <option value="expanded">Expand across site</option>
            </select>
            <p class="shell-copy text-xs mt-1">Keep the theme focused on shared shell chrome, or extend the border, radius, accent wash, and surface treatment deeper into page headers and route cards.</p>
        </div>
        
        <script>
            function normalizeHexColor(value) {
                if (typeof value !== 'string') {
                    return null;
                }

                const cleaned = value.trim().replace('#', '');
                if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
                    return `#${cleaned.split('').map(char => `${char}${char}`).join('').toLowerCase()}`;
                }

                if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
                    return `#${cleaned.toLowerCase()}`;
                }

                return null;
            }

            function syncAccentInputs(value) {
                const normalized = normalizeHexColor(value);
                if (!normalized) {
                    return;
                }

                const input = document.getElementById('accent');
                const picker = document.getElementById('accent-picker');

                if (input) {
                    input.value = normalized;
                }

                if (picker) {
                    picker.value = normalized;
                }
            }

            function resolveAppliedAccent() {
                const hostWindow = getThemeHostWindow();

                try {
                    const raw = hostWindow.localStorage.getItem('efsdb:theme-studio');
                    if (raw) {
                        const parsed = JSON.parse(raw);
                        const paletteSeed = parsed && parsed.palette && parsed.palette.seed
                            ? normalizeHexColor(parsed.palette.seed)
                            : parsed && parsed.seed
                                ? normalizeHexColor(parsed.seed)
                                : null;
                        if (paletteSeed) {
                            return paletteSeed;
                        }
                    }
                } catch (error) {
                }

                try {
                    const computedAccent = hostWindow.getComputedStyle(hostWindow.document.documentElement)
                        .getPropertyValue('--accent')
                        .trim();
                    const normalizedAccent = normalizeHexColor(computedAccent);
                    if (normalizedAccent) {
                        return normalizedAccent;
                    }
                } catch (error) {
                }

                return null;
            }

            function applyThemeStudioPalette(detail) {
                const seed = detail && detail.palette && detail.palette.seed ? detail.palette.seed : null;
                mirrorHostThemeSurface();
                if (!seed) {
                    return;
                }
                syncAccentInputs(seed);
            }

            document.addEventListener('efsdb:theme-studio:applied', (e) => {
                applyThemeStudioPalette(e.detail);
            });

            document.addEventListener('DOMContentLoaded', () => {
                const hostWindow = getThemeHostWindow();
                const fontPresetInput = document.getElementById('font-preset');
                const pageThemeSpreadInput = document.getElementById('page-theme-spread');
                const form = document.querySelector('form[action="/_efsdb/settings"]');

                syncSettingsChromeFromHost();

                if (hostWindow && hostWindow.addEventListener) {
                    hostWindow.addEventListener('efsdb-theme-palettechange', (event) => {
                        applyThemeStudioPalette(event.detail);
                    });
                    hostWindow.addEventListener('efsdb-themechange', syncSettingsChromeFromHost);
                    hostWindow.addEventListener('efsdb-window-settings-sync', syncSharedSettingsControls);
                }

                if (fontPresetInput) {
                    fontPresetInput.addEventListener('change', () => {
                        writeSharedWindowSettings(readSettingsWindowPreferences());
                        window.requestAnimationFrame(syncSettingsChromeFromHost);
                    });
                }

                if (pageThemeSpreadInput) {
                    pageThemeSpreadInput.addEventListener('change', () => {
                        writeSharedWindowSettings(readSettingsWindowPreferences());
                        window.requestAnimationFrame(syncSettingsChromeFromHost);
                    });
                }

                if (form) {
                    form.addEventListener('submit', () => {
                        writeSharedWindowSettings(readSettingsWindowPreferences());
                    });
                }

                window.addEventListener('efsdb-themechange', syncSettingsChromeFromHost);
                window.addEventListener('efsdb-window-settings-sync', syncSharedSettingsControls);
                window.addEventListener('storage', (event) => {
                    if (event.key === WINDOW_SETTINGS_STORAGE_KEY) {
                        syncSharedSettingsControls();
                        return;
                    }

                    if (event.key === 'efsdb-theme' || event.key === 'efsdb:theme-studio') {
                        syncSettingsChromeFromHost();
                    }
                });

                window.requestAnimationFrame(syncSettingsChromeFromHost);
            });
        </script>
        
        <div class="flex justify-end gap-3 mt-8 pt-6" style="border-top: 1px solid var(--shell-border);">
            <?php if (isset($_GET['popup'])): ?>
            <button type="button" class="ghost-button" onclick="if(window.parent) window.parent.postMessage('close-settings', '*');">Cancel</button>
            <?php endif; ?>
            <button type="submit" class="pill-button">Save Settings</button>
        </div>
    </form>
</section>
