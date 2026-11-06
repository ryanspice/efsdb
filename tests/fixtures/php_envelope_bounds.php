<?php

require_once __DIR__ . '/../../efsdb/php/core/engine/EngineAdapter.php';
require_once __DIR__ . '/../../efsdb/php/core/engine/PurePhpEnvelopeCodec.php';

use EFSDB\Engine\PurePhpEnvelopeCodec;

// No BLAKE3 extension is needed: impossible lengths must fail before crypto.
// Run with a bounded memory_limit when reproducing the former oversized fread.
$group = $argv[1] ?? 'all';
if (!in_array($group, ['all', 'buffer', 'stream-impossible', 'stream-bounded', 'control'], true)) {
    fwrite(STDERR, "Unknown test group\n");
    exit(2);
}

$lengths = [
    'u64-max' => 'ffffffffffffffff',
    'signed-max' => 'ffffffffffffff7f',
    'signed-max-minus-one' => 'feffffffffffff7f',
    'signed-max-minus-sixteen' => 'efffffffffffff7f',
    'signed-max-minus-sixty-four' => 'bfffffffffffff7f',
    'four-gib' => '0000000001000000',
];
$codec = PurePhpEnvelopeCodec::forFixtureTests();
$passed = 0;
$failed = 0;

function boundsEnvelope(int $suite, string $lengthHex, int $tailLength): string
{
    return "EFS\0" . pack('v', 16) . "\x01\x00" . chr($suite) . str_repeat("\0", 7)
        . hex2bin($lengthHex) . str_repeat("\0", $tailLength);
}

function checkBoundsCase(string $name, string $bytes, bool $stream, string $expectedError): void
{
    global $codec, $passed, $failed;
    $handle = null;
    try {
        if ($stream) {
            $handle = fopen('php://memory', 'w+b');
            fwrite($handle, $bytes);
            rewind($handle);
            $actual = $codec->verifyEnvelopeStream($handle);
        } else {
            $actual = $codec->verifyEnvelope($bytes);
        }
        $expected = ['ok' => false, 'error' => $expectedError];
        if ($actual !== $expected) {
            throw new RuntimeException('Expected ' . json_encode($expected) . ', got ' . json_encode($actual));
        }
        $passed++;
        echo "PASS {$name}\n";
    } catch (Throwable $error) {
        $failed++;
        echo "FAIL {$name}: " . get_class($error) . ': ' . $error->getMessage() . "\n";
    } finally {
        if (is_resource($handle)) {
            fclose($handle);
        }
    }
}

foreach ([1, 2] as $suite) {
    foreach ($lengths as $label => $lengthHex) {
        foreach ([0, 64] as $tailLength) {
            $bytes = boundsEnvelope($suite, $lengthHex, $tailLength);
            $name = "suite-{$suite}/{$label}/tail-{$tailLength}";
            if ($group === 'all' || $group === 'buffer') {
                checkBoundsCase("buffer/{$name}", $bytes, false, 'ERR_TRUNCATED_PAYLOAD');
            }
            $impossible = in_array($label, ['u64-max', 'signed-max', 'signed-max-minus-one', 'signed-max-minus-sixteen'], true);
            if ($impossible && ($group === 'all' || $group === 'stream-impossible')) {
                checkBoundsCase("stream/{$name}", $bytes, true, 'ERR_TRUNCATED_PAYLOAD');
            }
            // Representable huge short reads exercise the buffered ChaCha path,
            // preserving BLAKE3's existing missing-extension error precedence.
            if (!$impossible && $suite === 2 && ($group === 'all' || $group === 'stream-bounded')) {
                checkBoundsCase("stream/{$name}", $bytes, true, 'ERR_TRUNCATED_PAYLOAD');
            }
        }
    }
}

if ($group === 'all' || $group === 'control') {
    // A complete body larger than a read chunk must reach crypto validation,
    // not become a newly imposed size limit. The zero tag is deliberately invalid.
    $bytes = boundsEnvelope(2, bin2hex(pack('P', 16384)), 16384 + 16);
    $error = function_exists('sodium_crypto_aead_chacha20poly1305_ietf_decrypt')
        ? 'ERR_CHECKSUM_MISMATCH' : 'ERR_MISSING_CRYPTO_EXT';
    checkBoundsCase('control/buffer-body-over-chunk', $bytes, false, $error);
    checkBoundsCase('control/stream-body-over-chunk', $bytes, true, $error);
    if (!in_array('blake3', hash_algos(), true)) {
        checkBoundsCase('control/blake3-capability-precedence', boundsEnvelope(1, bin2hex(pack('P', 1)), 0),
            true, 'ERR_MISSING_CRYPTO_EXT');
    }
}

echo json_encode(['group' => $group, 'passed' => $passed, 'failed' => $failed], JSON_UNESCAPED_SLASHES) . "\n";
exit($failed === 0 ? 0 : 1);
