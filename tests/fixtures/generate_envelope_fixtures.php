<?php

/**
 * Track A: Deterministic Fixture Generator (Full Matrix)
 * Generates exact binary envelope files to prove parser parity across PHP, Rust, and WASM.
 */

$fixturesDir = __DIR__;

function pack_uint64_le(int $value): string {
    return pack('P', $value);
}

$payload = "Hello, EFSDB!";
$payloadLen = pack_uint64_le(strlen($payload));

// Header Components
$magic = "EFS";
$version = "\x00";
$headerLengthBytes = pack('v', 16); // H = 16
$typeChunk = chr(0x01);
$flags = chr(0x00); // No extensions
$suiteBlake3 = chr(0x01);
$reserved = str_repeat("\x00", 7);

$suiteUnknown = chr(0x99);

// Base Header (16 bytes, H=16) + Payload Length (8 bytes at H)
$validHeader = $magic . $version . $headerLengthBytes . $typeChunk . $flags . $suiteBlake3 . $reserved . $payloadLen;

if (!function_exists('hash') || !in_array('blake3', hash_algos())) {
    echo "FATAL: ext-blake3 is missing.\n";
    echo "The fixture generator must run on a trusted runtime with real Blake3 support to create 01_valid_blake3.bin.\n";
    echo "Aborting to prevent fake zeroed checksums poisoning the parity baseline.\n";
    exit(1);
}

$checksum = hash('blake3', $validHeader . $payload, true);

// Extension scaffolds
$flagsWithExtAndCritical = chr(0x03); // Bit 0 (has extensions) | Bit 1 (critical)
$headerLengthExtBytes = pack('v', 24); // H = 24
$reservedExt = str_repeat("\x00", 7);

// Unsupported Critical Ext: ID 0x81
$extCritical = chr(0x81) . pack('v', 5) . "12345"; 
$headerWithCriticalExt = $magic . $version . $headerLengthExtBytes . $typeChunk . $flagsWithExtAndCritical . $suiteBlake3 . $reservedExt . $extCritical . $payloadLen;
$checksumCritical = hash('blake3', $headerWithCriticalExt . $payload, true);

// Malformed Ext Area: Ext length claims 50 bytes, but H says only 24 bytes total.
$extMalformed = chr(0x01) . pack('v', 50) . "12345";
$headerMalformedExt = $magic . $version . $headerLengthExtBytes . $typeChunk . $flagsWithExtAndCritical . $suiteBlake3 . $reservedExt . $extMalformed . $payloadLen;
$checksumMalformed = hash('blake3', $headerMalformedExt . $payload, true);

$fixtures = [
    // 1. Valid Blake3-Plain Envelope
    '01_valid_blake3.bin' => $validHeader . $payload . $checksum,
    
    // 2. Invalid Magic Bytes (First 3 bytes are not EFS)
    '02_err_invalid_magic.bin' => "BAD\x00" . substr($validHeader, 4) . $payload . $checksum,
    
    // 3. Unsupported Version (Byte 3 is > 0)
    '03_err_unsupported_version.bin' => $magic . "\x01" . substr($validHeader, 4) . $payload . hash('blake3', $magic . "\x01" . substr($validHeader, 4) . $payload, true),

    // 4. Truncated Header (Too short to read base header)
    '04_err_truncated_header.bin' => substr($validHeader, 0, 10),
    
    // 5. Unsupported Suite
    '05_err_unsupported_suite.bin' => $magic . $version . $headerLengthBytes . $typeChunk . $flags . $suiteUnknown . $reserved . $payloadLen . $payload . hash('blake3', $magic . $version . $headerLengthBytes . $typeChunk . $flags . $suiteUnknown . $reserved . $payloadLen . $payload, true),
    
    // 6. Checksum Mismatch
    '06_err_checksum_mismatch.bin' => $validHeader . "Hello, CORRUP" . $checksum,
    
    // 7. Truncated Payload (Shorter than H+8+N+C)
    '07_err_truncated_payload.bin' => $validHeader . substr($payload, 0, 5) . $checksum,

    // 8. Invalid Header (Alignment: H=17)
    '08_err_invalid_header_alignment.bin' => $magic . $version . pack('v', 17) . $typeChunk . $flags . $suiteBlake3 . $reserved . "\x00" . $payloadLen . $payload . hash('blake3', $magic . $version . pack('v', 17) . $typeChunk . $flags . $suiteBlake3 . $reserved . "\x00" . $payloadLen . $payload, true),

    // 9. Trailing Garbage
    '09_err_trailing_garbage.bin' => $validHeader . $payload . $checksum . "GARBAGE",

    // 10. Unsupported Critical Extension (Critical flag set, unknown ID)
    '10_err_unsupported_critical_ext.bin' => $headerWithCriticalExt . $payload . $checksumCritical,

    // 11. Invalid Header (Malformed Extension Area points past H)
    '11_err_invalid_header_malformed_ext.bin' => $headerMalformedExt . $payload . $checksumMalformed,
];

echo "Generating Full Fixture Matrix...\n";
foreach ($fixtures as $filename => $data) {
    $path = $fixturesDir . '/' . $filename;
    file_put_contents($path, $data);
    echo " -> $filename\n";
}
echo "Done.\n";
