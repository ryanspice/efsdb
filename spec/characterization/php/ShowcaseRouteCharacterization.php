<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';
require_once __DIR__ . '/../../../efsdb/php/core/src/ShowcaseDemo.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/showcase-route';
$bootstrapSecret = 'showcase-route-secret';

Phase0Harness::resetDir($dataDir);
Phase0Harness::bootApp($dataDir, $bootstrapSecret);

$failures = [];

try {
    $demo = ShowcaseDemo::build();
    $demoValidated = isset($demo['precision']['notice']) && $demo['precision']['notice'] === 'Representative demo using synthetic data, not a live storage trace.';
} catch (Throwable) {
    $demoValidated = false;
}

phase0_assert(
    $demoValidated,
    'Showcase demo fixtures build successfully and pass the blocked-content guardrails',
    $failures
);

$adminToken = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);
$paths = [
    '/_efsdb/showcase' => [
        'Focused walkthroughs',
        '/_efsdb/showcase/storage',
        '/_efsdb/showcase/precision',
        '/_efsdb/showcase/security',
        '/_efsdb/showcase/runtime',
        '/_efsdb/showcase/operations',
        'Representative storage profile',
    ],
    '/_efsdb/showcase/storage' => [
        'Representative storage profile',
        'Compression Wins',
        'What this walkthrough demonstrates',
    ],
    '/_efsdb/showcase/precision' => [
        'Precision File Manipulation Demo',
        'Click to expand diff details and code examples',
        'Representative footprint legend',
    ],
    '/_efsdb/showcase/security' => [
        'Crypto Example',
        'Why the omissions are intentional',
        'Representative pseudocode only',
    ],
    '/_efsdb/showcase/runtime' => [
        'SvelteKit on EFSDB',
        '@efsdb/adapter-php',
        'Representative packaging view',
    ],
    '/_efsdb/showcase/operations' => [
        'Practical Workflows',
        'Representative git-like graph',
        'Continue in the control plane',
    ],
];

$responses = [];
foreach ($paths as $path => $_requiredStrings) {
    $responses[$path] = Phase0Harness::request($dataDir, $bootstrapSecret, $path, 'GET', [
        'bearer' => $adminToken,
    ]);
}

phase0_assert(
    (static function (array $responses, array $paths): bool {
        foreach ($paths as $path => $requiredStrings) {
            $response = $responses[$path] ?? null;
            if (!is_array($response) || ($response['status'] ?? 500) !== 200) {
                return false;
            }

            $body = (string)($response['body'] ?? '');
            if (!str_contains($body, 'Representative synthetic fixtures')) {
                return false;
            }

            foreach ($requiredStrings as $required) {
                if (!str_contains($body, $required)) {
                    return false;
                }
            }
        }

        return true;
    })($responses, $paths),
    'Authenticated showcase routes render as a compact hub plus focused synthetic detail pages with the hardened legends',
    $failures
);

$blockedMarkers = [
    'BEGIN PRIVATE KEY',
    'process.env',
    '.env',
    'postgres://',
    'mysql://',
    'mongodb://',
    'redis://',
    'DefaultEndpointsProtocol=',
    'AccountKey=',
    'localhost',
    '127.0.0.1',
    'B:\\',
    'C:\\',
    '/Users/',
    '/var/',
];

$combinedBody = '';
foreach ($responses as $response) {
    $combinedBody .= "\n" . (string)($response['body'] ?? '');
}

$containsBlockedMarker = false;
foreach ($blockedMarkers as $marker) {
    if (str_contains($combinedBody, $marker)) {
        $containsBlockedMarker = true;
        break;
    }
}

phase0_assert(
    !$containsBlockedMarker,
    'Showcase hub and detail pages omit blocked secret markers, env references, connection strings, hostnames, and absolute path markers',
    $failures
);

$envStampLeaked = class_exists('Config') && str_contains($combinedBody, 'EFSDB ' . Config::getEnv());

phase0_assert(
    !$envStampLeaked,
    'Showcase routes suppress the shared footer environment stamp so the runtime env label is not exposed',
    $failures
);

phase0_finish($failures);
