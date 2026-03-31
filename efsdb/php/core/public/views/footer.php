<?php
$footerText = isset($footerText) && is_string($footerText) && $footerText !== ''
    ? $footerText
    : 'Canonical encrypted manifest runtime';
$titleText = 'EFSDB Control Plane';
$isExplorerAppPage = ($action ?? '') === 'explorer';
$isImpersonating = !$isGuest && $user->role !== $user->actualRole;
$hideFooterEnvironmentStamp = isset($hideFooterEnvironmentStamp) && $hideFooterEnvironmentStamp === true;
?>
</main>
<?php if (($shellMode ?? 'default') === 'guest-overlay'): ?>
    </div>
</body>

</html>
<?php return;
endif; ?>
<?php if ($isExplorerAppPage): ?>
    </body>

    </html>
<?php return;
endif; ?>
<?php if (!isset($_GET['popup'])): ?>
    <style>
        .footer-left-text {
            transition: opacity 1.5s ease-in-out;
        }
        body:has(a:hover) .footer-left-text {
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
        }
        .footer-status-trigger {
            --footer-orb-core: #7cf0a1;
            --footer-orb-mid: #1f9a53;
            --footer-orb-glow: rgba(74, 222, 128, 0.55);
            --footer-orb-rim: rgba(207, 255, 222, 0.6);
            position: relative;
            isolation: isolate;
            display: inline-flex;
            align-items: center;
            gap: 0.55rem;
            padding: 0;
            border: 0;
            background: transparent;
            color: inherit;
            cursor: pointer;
            transition: color 0.2s ease, transform 0.2s ease;
        }
        .footer-status-trigger::before {
            content: '';
            position: absolute;
            top: 50%;
            right: -0.35rem;
            width: 4.2rem;
            height: 2.7rem;
            border-radius: 999px;
            background:
                radial-gradient(circle at center, var(--footer-orb-glow) 0%, rgba(255, 255, 255, 0.08) 22%, transparent 72%);
            filter: blur(16px);
            opacity: 0.75;
            transform: translateY(-50%);
            pointer-events: none;
            z-index: 0;
            transition:
                opacity 0.2s ease,
                filter 0.2s ease,
                transform 0.2s ease;
        }
        .footer-status-trigger > * {
            position: relative;
            z-index: 1;
        }
        .footer-status-trigger:hover {
            color: var(--shell-text);
            transform: translateY(-1px);
        }
        .footer-status-trigger:hover::before {
            opacity: 0.92;
            filter: blur(18px);
            transform: translateY(-50%) scale(1.04);
        }
        .footer-status-trigger:focus-visible {
            outline: 2px solid color-mix(in srgb, var(--accent, #22c55e), white 20%);
            outline-offset: 4px;
            border-radius: 999px;
        }
        .footer-status-orb {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 1.1rem;
            height: 1.1rem;
            border-radius: 999px;
            overflow: hidden;
            box-shadow:
                0 0 0 1px rgba(0, 0, 0, 0.28),
                0 0 20px var(--footer-orb-glow),
                inset 0 0 0 1px var(--footer-orb-rim);
            background:
                radial-gradient(circle at 32% 26%, rgba(255, 255, 255, 0.92), transparent 18%),
                radial-gradient(circle at 48% 44%, var(--footer-orb-core) 0%, var(--footer-orb-mid) 56%, #051106 100%);
            animation: footer-orb-breathe 2.6s ease-in-out infinite;
        }
        .footer-status-orb::before {
            content: '';
            position: absolute;
            inset: -28%;
            border-radius: 50%;
            background:
                conic-gradient(
                    from 0deg,
                    transparent 0deg,
                    rgba(255, 255, 255, 0.12) 70deg,
                    transparent 130deg,
                    rgba(255, 255, 255, 0.18) 210deg,
                    transparent 290deg,
                    rgba(255, 255, 255, 0.06) 360deg
                );
            mix-blend-mode: screen;
            animation: footer-orb-swirl 5.2s linear infinite;
        }
        .footer-status-orb::after {
            content: '';
            position: absolute;
            inset: 0.14rem;
            border-radius: 50%;
            background:
                radial-gradient(circle at 36% 34%, rgba(255, 255, 255, 0.72), transparent 28%),
                radial-gradient(circle at 54% 58%, color-mix(in srgb, var(--footer-orb-core), white 10%) 0%, transparent 72%);
            opacity: 0.9;
        }
        .footer-status-trigger[data-status='processing'] {
            --footer-orb-core: #f9e066;
            --footer-orb-mid: #d1a10d;
            --footer-orb-glow: rgba(250, 204, 21, 0.6);
            --footer-orb-rim: rgba(255, 246, 188, 0.72);
        }
        .footer-status-trigger[data-status='long'] {
            --footer-orb-core: #ffb667;
            --footer-orb-mid: #ea6b14;
            --footer-orb-glow: rgba(249, 115, 22, 0.6);
            --footer-orb-rim: rgba(255, 224, 196, 0.72);
        }
        .footer-status-trigger[data-status='error'] {
            --footer-orb-core: #ff7b7b;
            --footer-orb-mid: #b91c1c;
            --footer-orb-glow: rgba(239, 68, 68, 0.68);
            --footer-orb-rim: rgba(255, 220, 220, 0.74);
        }
        .footer-status-trigger[data-status='processing'] .footer-status-orb {
            animation-duration: 1.4s;
        }
        .footer-status-trigger[data-status='long'] .footer-status-orb {
            animation-duration: 1s;
        }
        .footer-status-trigger[data-status='error'] .footer-status-orb {
            animation-duration: 0.82s;
        }
        @keyframes footer-orb-breathe {
            0%, 100% {
                transform: scale(1);
                box-shadow:
                    0 0 0 1px rgba(0, 0, 0, 0.28),
                    0 0 18px var(--footer-orb-glow),
                    inset 0 0 0 1px var(--footer-orb-rim);
            }
            50% {
                transform: scale(1.08);
                box-shadow:
                    0 0 0 1px rgba(0, 0, 0, 0.28),
                    0 0 26px var(--footer-orb-glow),
                    inset 0 0 0 1px var(--footer-orb-rim);
            }
        }
        @keyframes footer-orb-swirl {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    </style>
    <footer class="fixed bottom-0 left-0 right-0 z-40 bg-[var(--shell-panel-bg)] border-t border-[var(--shell-border)]">
        <div class="flex items-center justify-between px-4 py-1.5 text-[0.65rem] text-[var(--shell-muted)] font-mono uppercase tracking-wider">
            <div class="flex items-center gap-3 flex-1 footer-left-text">
                <span><?php echo htmlspecialchars($footerText, ENT_QUOTES, 'UTF-8'); ?></span>
            </div>
            <div class="flex items-center justify-center flex-1">
                <span><?php echo htmlspecialchars($titleText, ENT_QUOTES, 'UTF-8'); ?></span>
            </div>
            <div class="flex items-center justify-end gap-3 flex-1">
                <?php if ($isImpersonating): ?>
                    <span class="text-[var(--efs-state-warning, #f0b34a)]">As: <?php echo htmlspecialchars($user->role); ?></span>
                    <span class="opacity-50">|</span>
                <?php endif; ?>
                <span>v2.0</span>
                <span class="opacity-50">|</span>
                <button
                    id="footer-notification-trigger"
                    type="button"
                    class="footer-status-trigger"
                    data-status="idle"
                    onclick="document.dispatchEvent(new CustomEvent('efsdb:notifications:toggle', { detail: { source: 'footer' } }))"
                    title="System activity: waiting for work."
                    aria-label="System activity: waiting for work."
                >
                    <span><?php echo $hideFooterEnvironmentStamp ? 'EFSDB' : 'EFSDB ' . htmlspecialchars(Config::getEnv()); ?></span>
                    <span class="footer-status-orb" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    </footer>
<?php endif; ?>
<script src="/js/workspace-layout.js"></script>
</body>

</html>
