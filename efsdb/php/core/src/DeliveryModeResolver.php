<?php
declare(strict_types=1);

require_once __DIR__ . '/IdentityManager.php';
require_once __DIR__ . '/PublicWorkspace.php';

final class DeliveryModeResolver
{
    private const VALID_MODES = ['php-html', 'sveltekit-php-adapter'];

    public function __construct(
        private readonly IdentityManager $identity,
        private readonly PublicWorkspace $workspace
    ) {}

    public function resolve(string $root): string
    {
        $root = PublicWorkspace::normalizeEnvironmentRoot($root);
        $doc = $this->workspace->getRoot($root, false);
        $rootMode = is_array($doc) ? ($doc['deliveryMode'] ?? null) : null;
        if (is_string($rootMode) && in_array($rootMode, self::VALID_MODES, true)) {
            return $rootMode;
        }

        $settings = $this->identity->getTenantSettings();
        $tenantMode = $settings['settings']['publicWorkspace.' . $root . '.deliveryMode'] ?? null;
        if ($tenantMode === null && $root === PublicWorkspace::ROOT_PRODUCTION) {
            $tenantMode = $settings['settings']['publicWorkspace.published.deliveryMode'] ?? null;
        }
        if (is_string($tenantMode) && in_array($tenantMode, self::VALID_MODES, true)) {
            return $tenantMode;
        }

        return 'php-html';
    }
}
