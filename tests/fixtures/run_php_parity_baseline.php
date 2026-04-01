<?php

require_once __DIR__ . '/../../efsdb/php/core/engine/EngineAdapter.php';
require_once __DIR__ . '/../../efsdb/php/core/engine/PurePhpEnvelopeCodec.php';

use EFSDB\Engine\PurePhpEnvelopeCodec;

$codec = new PurePhpEnvelopeCodec();
$fixturesDir = __DIR__;
$files = glob($fixturesDir . '/*.bin');
sort($files);

$results = [];

foreach ($files as $file) {
    $basename = basename($file);
    $bytes = file_get_contents($file);
    
    $result = $codec->verifyEnvelope($bytes);
    $results[$basename] = $result;
}

// Write the canonical JSON map for the Rust parity test to consume
file_put_contents($fixturesDir . '/expected_results.json', json_encode($results, JSON_PRETTY_PRINT));
echo "Canonical JSON results captured to expected_results.json\n";
