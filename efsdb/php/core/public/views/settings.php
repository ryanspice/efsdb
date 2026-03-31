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

    <script type="module" src="/js/efsdb-theme-studio.js"></script>
    <efsdb-theme-studio></efsdb-theme-studio>
    
    <form method="post" action="/_efsdb/settings" class="space-y-6">
        <div class="field-stack">
            <label for="accent">Accent Color</label>
            <div class="flex items-center gap-2">
                <input type="color" id="accent-picker" value="<?php echo $currentAccent === 'default' ? '#5b8cff' : htmlspecialchars($currentAccent); ?>" class="h-[2.7rem] w-12 p-0.5 rounded cursor-pointer border border-[var(--shell-border)] bg-[var(--shell-surface)]" oninput="document.getElementById('accent').value = this.value">
                <input type="text" id="accent" name="accent" value="<?php echo htmlspecialchars($currentAccent); ?>" placeholder="e.g. #c6ff00 or default" required class="flex-1" oninput="if(this.value.match(/^#[0-9a-fA-F]{6}$/)) document.getElementById('accent-picker').value = this.value;">
                <button type="button" id="toolbar-theme-trigger" class="pill-button" onclick="document.dispatchEvent(new CustomEvent('efsdb:theme-studio:toggle'))" title="Open Theme Studio">
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
        
        <script>
            document.addEventListener('efsdb:theme-studio:applied', (e) => {
                if (e.detail && e.detail.palette && e.detail.palette.seed) {
                    const input = document.getElementById('accent');
                    if (input) {
                        input.value = e.detail.palette.seed;
                    }
                }
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
