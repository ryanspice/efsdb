<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = __DIR__ . '/../../../.cache/efsdb/tests/core/phase0-api-content';
$bootstrapSecret = 'phase0-api-content-secret';

Phase0Harness::resetDir($dataDir);
Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$token = Phase0Harness::loginAccessToken($dataDir, $bootstrapSecret, $bootstrapSecret);

$cases = [
    [
        'label' => 'Health uses JSON response envelope only',
        'uri' => '/_efsdb/api/health',
        'method' => 'GET',
        'expectStatus' => 200,
        'bearer' => null,
    ],
    [
        'label' => 'Unknown API route uses JSON error envelope only',
        'uri' => '/_efsdb/api/not-real',
        'method' => 'GET',
        'expectStatus' => 404,
        'bearer' => null,
    ],
    [
        'label' => 'Invalid login returns JSON error envelope only',
        'uri' => '/_efsdb/api/auth/login',
        'method' => 'POST',
        'json' => ['key' => 'wrong-key'],
        'expectStatus' => 401,
        'bearer' => null,
    ],
    [
        'label' => 'Wrong admin method still returns JSON without HTML',
        'uri' => '/_efsdb/api/admin/users',
        'method' => 'PUT',
        'expectStatus' => 405,
        'bearer' => $token,
    ],
    [
        'label' => 'Permissive whoami POST still returns JSON without HTML',
        'uri' => '/_efsdb/api/auth/whoami',
        'method' => 'POST',
        'expectStatus' => 200,
        'bearer' => $token,
    ],
    [
        'label' => '/_efsdb/api/products returns JSON without HTML',
        'uri' => '/_efsdb/api/products',
        'method' => 'GET',
        'expectStatus' => 200,
        'bearer' => $token,
    ],
    [
        'label' => '/_efsdb/api/search returns JSON without HTML',
        'uri' => '/_efsdb/api/search?q=test',
        'method' => 'GET',
        'expectStatus' => 200,
        'bearer' => $token,
    ],
    [
        'label' => '/_efsdb/api/facets returns JSON without HTML',
        'uri' => '/_efsdb/api/facets',
        'method' => 'GET',
        'expectStatus' => 200,
        'bearer' => $token,
    ],
];

$failures = [];

foreach ($cases as $case) {
    $response = Phase0Harness::request($dataDir, $bootstrapSecret, $case['uri'], $case['method'], [
        'bearer' => $case['bearer'],
        'json' => $case['json'] ?? null,
    ]);

    $isJsonLike = is_array($response['json']);
    $hasHtmlArtifacts = str_contains($response['body'], '<html') || str_contains($response['body'], '<div');

    phase0_assert(
        $response['status'] === $case['expectStatus'] && $isJsonLike && !$hasHtmlArtifacts,
        $case['label'],
        $failures
    );
}

phase0_finish($failures);
