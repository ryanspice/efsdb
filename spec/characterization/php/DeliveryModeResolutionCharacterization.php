<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase1-delivery-mode';
$bootstrapSecret = 'phase1-delivery-mode-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$identity = $app->getIdentity();
$workspace = $app->getPublicWorkspace();
$resolver = $app->getDeliveryModeResolver();

$failures = [];

phase0_assert(
    $resolver->resolve('published') === 'php-html' && $resolver->resolve('staging') === 'php-html',
    'Delivery mode defaults to php-html for both published and staging roots',
    $failures
);

$identity->writeTenantSetting('publicWorkspace.published.deliveryMode', 'sveltekit-php-adapter');
phase0_assert(
    $resolver->resolve('published') === 'sveltekit-php-adapter' && $resolver->resolve('staging') === 'php-html',
    'Tenant settings provide per-root fallback delivery modes',
    $failures
);

$workspace->setRootConfig('staging', ['deliveryMode' => 'sveltekit-php-adapter']);
phase0_assert(
    $resolver->resolve('staging') === 'sveltekit-php-adapter',
    'Explicit root configuration overrides tenant-level delivery mode defaults',
    $failures
);

phase0_finish($failures);
