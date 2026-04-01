<?php

namespace EFSDB\Engine;

/**
 * The first-class pure PHP fallback implementation of the EngineAdapter.
 * Guarantees that EFSDB can operate on cheap, native hosting without compiled extensions,
 * serving as the truth anchor for the Rust and WASM implementations.
 */
class PurePhpEnvelopeCodec implements EngineAdapter {
    
    public function inspectEnvelope(string $envelopeBytes): array {
        $len = strlen($envelopeBytes);
        // Fixed base header is 16 bytes. If we don't have that, it's truncated.
        if ($len < 16) {
            return ['ok' => false, 'error' => 'ERR_TRUNCATED_HEADER'];
        }

        // Magic is bytes 0..2 ("EFS")
        $magic = substr($envelopeBytes, 0, 3);
        if ($magic !== "EFS") {
            return ['ok' => false, 'error' => 'ERR_INVALID_MAGIC'];
        }

        // Byte 3 is the version. We only support v0 (\x00).
        $version = ord($envelopeBytes[3]);
        if ($version > 0) {
            return ['ok' => false, 'error' => 'ERR_UNSUPPORTED_VERSION'];
        }

        // Bytes 4-5 are H (Header Length)
        $headerLength = unpack('v', substr($envelopeBytes, 4, 2))[1];

        // Ensure H is a multiple of 8 and at least 16
        if ($headerLength < 16 || $headerLength % 8 !== 0) {
            return ['ok' => false, 'error' => 'ERR_INVALID_HEADER'];
        }

        // If the buffer doesn't even contain the full variable header, it's malformed structure.
        if ($len < $headerLength) {
            return ['ok' => false, 'error' => 'ERR_INVALID_HEADER'];
        }

        // Bytes 6, 7, 8 are Type, Flags, Suite
        $type = ord($envelopeBytes[6]);
        $flags = ord($envelopeBytes[7]);
        $suite = ord($envelopeBytes[8]);
        
        $extensions = [];

        // Critical flag logic: Bit 0 of flags indicates if extensions are present.
        // Bit 1 of flags indicates if any of those extensions are CRITICAL.
        $hasExtensions = ($flags & 0x01) === 0x01;
        $hasCriticalExt = ($flags & 0x02) === 0x02;

        if ($hasExtensions && $headerLength > 16) {
            $extOffset = 16;
            while ($extOffset < $headerLength) {
                if ($extOffset + 3 > $headerLength) {
                    return ['ok' => false, 'error' => 'ERR_INVALID_HEADER'];
                }
                $extId = ord($envelopeBytes[$extOffset]);
                $extLen = unpack('v', substr($envelopeBytes, $extOffset + 1, 2))[1];
                
                if ($extOffset + 3 + $extLen > $headerLength) {
                    return ['ok' => false, 'error' => 'ERR_INVALID_HEADER'];
                }

                // If the parser hits an extension ID it doesn't support, and the critical flag is set
                // (or if we determine criticality per-extension via ID later, but the spec rule mentioned flag + ID):
                // For now, if the critical flag is set, any unknown extension causes a failure.
                // Since we support 0 extensions right now, any extension + critical flag = fail.
                if ($hasCriticalExt) {
                    return ['ok' => false, 'error' => 'ERR_UNSUPPORTED_CRITICAL_EXTENSION'];
                }
                
                $extOffset += (3 + $extLen);
            }
        } elseif ($hasExtensions && $headerLength <= 16) {
            // Contradiction: Flags say extensions exist, but H leaves no room for them.
            return ['ok' => false, 'error' => 'ERR_INVALID_HEADER'];
        }

        // If we don't have enough bytes to read the 8-byte payload length field located at H..H+7,
        // it means the file is truncated before we could even find out how big the payload is.
        if ($len < $headerLength + 8) {
            return ['ok' => false, 'error' => 'ERR_TRUNCATED_PAYLOAD'];
        }

        $payloadLenBytes = substr($envelopeBytes, $headerLength, 8);
        $payloadLen = unpack('P', $payloadLenBytes)[1];

        return [
            'ok' => true,
            'type' => $type,
            'flags' => $flags,
            'suite' => $suite,
            'header_length' => $headerLength,
            'payload_length' => $payloadLen,
            'extensions' => $extensions
        ];
    }

    public function verifyEnvelope(string $envelopeBytes): array {
        $inspect = $this->inspectEnvelope($envelopeBytes);
        if (!$inspect['ok']) {
            return $inspect;
        }

        $suite = $inspect['suite'];
        if ($suite !== 1) { // 0x01 Blake3-Plain
            return ['ok' => false, 'error' => 'ERR_UNSUPPORTED_SUITE'];
        }

        // H + 8 (payload len field) + N (payload bytes) + C (tag length, 32 for Blake3)
        $expectedLen = $inspect['header_length'] + 8 + $inspect['payload_length'] + 32; 
        $actualLen = strlen($envelopeBytes);

        if ($actualLen < $expectedLen) {
            return ['ok' => false, 'error' => 'ERR_TRUNCATED_PAYLOAD'];
        }

        if ($actualLen > $expectedLen) {
            return ['ok' => false, 'error' => 'ERR_TRAILING_GARBAGE'];
        }

        $headerAndPayload = substr($envelopeBytes, 0, $inspect['header_length'] + 8 + $inspect['payload_length']);
        $expectedChecksum = substr($envelopeBytes, $inspect['header_length'] + 8 + $inspect['payload_length'], 32);

        // Crypto Policy Enforcement: 
        if (!function_exists('hash') || !in_array('blake3', hash_algos())) {
            return ['ok' => false, 'error' => 'ERR_MISSING_CRYPTO_EXT'];
        }

        $actualChecksum = hash('blake3', $headerAndPayload, true);
        
        if (!hash_equals($expectedChecksum, $actualChecksum)) {
            return ['ok' => false, 'error' => 'ERR_CHECKSUM_MISMATCH'];
        }

        return $inspect;
    }
}
