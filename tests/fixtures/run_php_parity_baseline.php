<?php

define('EFSDB_TEST_MODE', true);

require_once __DIR__ . '/php_parity_preflight.php';
require_once __DIR__ . '/../../efsdb/php/core/engine/EngineAdapter.php';
require_once __DIR__ . '/../../efsdb/php/core/engine/PurePhpEnvelopeCodec.php';

use EFSDB\Engine\PurePhpEnvelopeCodec;

$codec = PurePhpEnvelopeCodec::forFixtureTests();
$fixturesDir = __DIR__;
$files = glob($fixturesDir . '/*.bin');
sort($files);
$expectedPath = $fixturesDir . '/expected_results.json';

if (!is_file($expectedPath)) {
    fwrite(STDERR, "Missing canonical expected_results.json. Run python generate_fixtures.py first.\n");
    exit(1);
}

$expectedResults = json_decode((string) file_get_contents($expectedPath), true, 512, JSON_THROW_ON_ERROR);
$missingCapabilities = phpParityMissingCapabilities();

echo phpParityStatusLine($missingCapabilities) . PHP_EOL;

$results = [];
$mismatches = 0;

foreach ($files as $file) {
    $basename = basename($file);
    $bytes = file_get_contents($file);

    $result = $codec->verifyEnvelope($bytes);
    if (($result['ok'] ?? false) === false && ($result['error'] ?? null) === 'ERR_MISSING_CRYPTO_EXT') {
        echo "SKIP {$basename} (missing crypto support in this PHP runtime)\n";
        continue;
    }

    $results[$basename] = $result;
    if (($expectedResults[$basename] ?? null) !== $result) {
        echo "FAIL {$basename}\n";
        echo "Expected: " . json_encode($expectedResults[$basename] ?? null, JSON_UNESCAPED_SLASHES) . "\n";
        echo "Actual:   " . json_encode($result, JSON_UNESCAPED_SLASHES) . "\n";
        $mismatches++;
    } else {
        echo "PASS {$basename}\n";
    }
}

if ($mismatches > 0) {
    fwrite(STDERR, "PHP parity mismatch against canonical expected_results.json\n");
    exit(1);
}

echo "PHP parity matches canonical expected_results.json\n";
