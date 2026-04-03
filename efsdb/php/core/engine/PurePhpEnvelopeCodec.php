<?php

namespace EFSDB\Engine;

/**
 * The first-class pure PHP fallback implementation of the EngineAdapter.
 * Guarantees that EFSDB can operate on cheap, native hosting without compiled extensions,
 * serving as the truth anchor for the Rust and WASM implementations.
 */
class PurePhpEnvelopeCodec implements EngineAdapter {
    private const SUITE_BLAKE3_PLAIN = 0x01;
    private const SUITE_CHACHA20_POLY1305_IETF = 0x02;
    private const BLAKE3_TAG_LENGTH = 32;
    private const CHACHA20_POLY1305_NONCE_LENGTH = 12;
    private const CHACHA20_POLY1305_TAG_LENGTH = 16;
    private const FIXTURE_ONLY_CHACHA20_POLY1305_KEY = "\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA\xAA";
    private $keyResolver;
    private $fixtureKeyModeEnabled;

    public function __construct(?callable $keyResolver = null, bool $fixtureKeyModeEnabled = false)
    {
        $this->keyResolver = $keyResolver;
        $this->fixtureKeyModeEnabled = $fixtureKeyModeEnabled;
    }

    public static function forFixtureTests(?callable $keyResolver = null): self
    {
        return new self($keyResolver, true);
    }

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
        if ($suite === self::SUITE_BLAKE3_PLAIN) {
            return $this->verifyBlake3Plain($envelopeBytes, $inspect);
        }

        if ($suite === self::SUITE_CHACHA20_POLY1305_IETF) {
            return $this->verifyChaCha20Poly1305Ietf($envelopeBytes, $inspect);
        }

        return ['ok' => false, 'error' => 'ERR_UNSUPPORTED_SUITE'];
    }

    public function verifyEnvelopeStream($stream): array
    {
        if (!is_resource($stream)) {
            return ['ok' => false, 'error' => 'ERR_IO'];
        }

        $fixedHeader = $this->readExact($stream, 16, 'ERR_TRUNCATED_HEADER');
        if (!($fixedHeader['ok'] ?? false)) {
            return $fixedHeader;
        }

        $fixedHeaderBytes = (string)($fixedHeader['bytes'] ?? '');
        if (substr($fixedHeaderBytes, 0, 3) !== 'EFS') {
            return ['ok' => false, 'error' => 'ERR_INVALID_MAGIC'];
        }

        if (ord($fixedHeaderBytes[3]) > 0) {
            return ['ok' => false, 'error' => 'ERR_UNSUPPORTED_VERSION'];
        }

        $headerLength = unpack('v', substr($fixedHeaderBytes, 4, 2))[1];
        if ($headerLength < 16 || $headerLength % 8 !== 0) {
            return ['ok' => false, 'error' => 'ERR_INVALID_HEADER'];
        }

        $headerAndLength = $fixedHeaderBytes;
        if ($headerLength > 16) {
            $extensionBytes = $this->readExact($stream, $headerLength - 16, 'ERR_INVALID_HEADER');
            if (!($extensionBytes['ok'] ?? false)) {
                return $extensionBytes;
            }

            $headerAndLength .= (string)($extensionBytes['bytes'] ?? '');
        }

        $payloadLengthBytes = $this->readExact($stream, 8, 'ERR_TRUNCATED_PAYLOAD');
        if (!($payloadLengthBytes['ok'] ?? false)) {
            return $payloadLengthBytes;
        }

        $headerAndLength .= (string)($payloadLengthBytes['bytes'] ?? '');
        $inspect = $this->inspectEnvelope($headerAndLength);
        if (!($inspect['ok'] ?? false)) {
            return $inspect;
        }

        $suite = $inspect['suite'];
        if ($suite === self::SUITE_BLAKE3_PLAIN) {
            return $this->verifyBlake3PlainStream($stream, $inspect, $headerAndLength);
        }

        if ($suite === self::SUITE_CHACHA20_POLY1305_IETF) {
            return $this->verifyChaCha20Poly1305IetfStream($stream, $inspect, $headerAndLength);
        }

        return ['ok' => false, 'error' => 'ERR_UNSUPPORTED_SUITE'];
    }

    private function verifyBlake3Plain(string $envelopeBytes, array $inspect): array
    {
        $lengthError = $this->validateExactEnvelopeLength($envelopeBytes, $inspect, self::BLAKE3_TAG_LENGTH);
        if ($lengthError !== null) {
            return $lengthError;
        }

        $bodyOffset = $inspect['header_length'] + 8;
        $payloadLength = (int) $inspect['payload_length'];
        $headerAndPayload = substr($envelopeBytes, 0, $bodyOffset + $payloadLength);
        $expectedChecksum = substr($envelopeBytes, $bodyOffset + $payloadLength, self::BLAKE3_TAG_LENGTH);

        if (!function_exists('hash') || !in_array('blake3', hash_algos(), true)) {
            return ['ok' => false, 'error' => 'ERR_MISSING_CRYPTO_EXT'];
        }

        $actualChecksum = hash('blake3', $headerAndPayload, true);

        if (!hash_equals($expectedChecksum, $actualChecksum)) {
            return ['ok' => false, 'error' => 'ERR_CHECKSUM_MISMATCH'];
        }

        return $inspect;
    }

    private function verifyBlake3PlainStream($stream, array $inspect, string $headerAndLength): array
    {
        if (!function_exists('hash') || !in_array('blake3', hash_algos(), true)) {
            return ['ok' => false, 'error' => 'ERR_MISSING_CRYPTO_EXT'];
        }

        $payloadLength = (int) $inspect['payload_length'];
        $hash = hash_init('blake3');
        hash_update($hash, $headerAndLength);

        $remaining = $payloadLength;
        while ($remaining > 0) {
            $chunkSize = min($remaining, 8192);
            $chunk = $this->readExact($stream, $chunkSize, 'ERR_TRUNCATED_PAYLOAD');
            if (!($chunk['ok'] ?? false)) {
                return $chunk;
            }

            $bytes = (string)($chunk['bytes'] ?? '');
            hash_update($hash, $bytes);
            $remaining -= strlen($bytes);
        }

        $expectedChecksum = $this->readExact($stream, self::BLAKE3_TAG_LENGTH, 'ERR_TRUNCATED_PAYLOAD');
        if (!($expectedChecksum['ok'] ?? false)) {
            return $expectedChecksum;
        }

        if ($this->streamHasTrailingBytes($stream)) {
            return ['ok' => false, 'error' => 'ERR_TRAILING_GARBAGE'];
        }

        $actualChecksum = hash_final($hash, true);
        if (!hash_equals((string)($expectedChecksum['bytes'] ?? ''), $actualChecksum)) {
            return ['ok' => false, 'error' => 'ERR_CHECKSUM_MISMATCH'];
        }

        return $inspect;
    }

    private function verifyChaCha20Poly1305Ietf(string $envelopeBytes, array $inspect): array
    {
        $lengthError = $this->validateExactEnvelopeLength($envelopeBytes, $inspect, self::CHACHA20_POLY1305_TAG_LENGTH);
        if ($lengthError !== null) {
            return $lengthError;
        }

        $payloadLength = (int) $inspect['payload_length'];
        if ($payloadLength < self::CHACHA20_POLY1305_NONCE_LENGTH) {
            return ['ok' => false, 'error' => 'ERR_TRUNCATED_PAYLOAD'];
        }

        $key = $this->resolveChaCha20Poly1305Key($inspect);
        if (!is_string($key)) {
            return $key;
        }

        if (!function_exists('sodium_crypto_aead_chacha20poly1305_ietf_decrypt')) {
            return ['ok' => false, 'error' => 'ERR_MISSING_CRYPTO_EXT'];
        }

        $bodyOffset = $inspect['header_length'] + 8;
        $aad = substr($envelopeBytes, 0, $bodyOffset);
        $nonce = substr($envelopeBytes, $bodyOffset, self::CHACHA20_POLY1305_NONCE_LENGTH);
        $ciphertextLength = $payloadLength - self::CHACHA20_POLY1305_NONCE_LENGTH;
        $ciphertext = substr($envelopeBytes, $bodyOffset + self::CHACHA20_POLY1305_NONCE_LENGTH, $ciphertextLength);
        $tag = substr($envelopeBytes, $bodyOffset + $payloadLength, self::CHACHA20_POLY1305_TAG_LENGTH);
        $plaintext = sodium_crypto_aead_chacha20poly1305_ietf_decrypt(
            $ciphertext . $tag,
            $aad,
            $nonce,
            $key
        );

        if ($plaintext === false) {
            return ['ok' => false, 'error' => 'ERR_CHECKSUM_MISMATCH'];
        }

        return $inspect;
    }

    private function verifyChaCha20Poly1305IetfStream($stream, array $inspect, string $headerAndLength): array
    {
        $payloadLength = (int) $inspect['payload_length'];
        if ($payloadLength < self::CHACHA20_POLY1305_NONCE_LENGTH) {
            return ['ok' => false, 'error' => 'ERR_TRUNCATED_PAYLOAD'];
        }

        $key = $this->resolveChaCha20Poly1305Key($inspect);
        if (!is_string($key)) {
            return $key;
        }

        $body = $this->readExact($stream, $payloadLength + self::CHACHA20_POLY1305_TAG_LENGTH, 'ERR_TRUNCATED_PAYLOAD');
        if (!($body['ok'] ?? false)) {
            return $body;
        }

        if ($this->streamHasTrailingBytes($stream)) {
            return ['ok' => false, 'error' => 'ERR_TRAILING_GARBAGE'];
        }

        return $this->verifyChaCha20Poly1305Ietf(
            $headerAndLength . (string)($body['bytes'] ?? ''),
            $inspect
        );
    }

    private function validateExactEnvelopeLength(string $envelopeBytes, array $inspect, int $tagLength): ?array
    {
        $expectedLen = $inspect['header_length'] + 8 + $inspect['payload_length'] + $tagLength;
        $actualLen = strlen($envelopeBytes);

        if ($actualLen < $expectedLen) {
            return ['ok' => false, 'error' => 'ERR_TRUNCATED_PAYLOAD'];
        }

        if ($actualLen > $expectedLen) {
            return ['ok' => false, 'error' => 'ERR_TRAILING_GARBAGE'];
        }

        return null;
    }

    private function resolveChaCha20Poly1305Key(array $inspect)
    {
        if ($this->keyResolver !== null) {
            $key = ($this->keyResolver)($inspect, self::SUITE_CHACHA20_POLY1305_IETF);
            if (is_string($key) && strlen($key) === 32) {
                return $key;
            }

            return ['ok' => false, 'error' => 'ERR_UNKNOWN_KEY'];
        }

        if ($this->isFixtureKeyModeEnabled()) {
            return self::FIXTURE_ONLY_CHACHA20_POLY1305_KEY;
        }

        return ['ok' => false, 'error' => 'ERR_MISSING_RUNTIME_KEY'];
    }

    private function isFixtureKeyModeEnabled(): bool
    {
        return $this->fixtureKeyModeEnabled;
    }

    private function readExact($stream, int $length, string $error): array
    {
        if ($length === 0) {
            return ['ok' => true, 'bytes' => ''];
        }

        $buffer = '';
        while (strlen($buffer) < $length) {
            $chunk = fread($stream, $length - strlen($buffer));
            if ($chunk === false) {
                return ['ok' => false, 'error' => 'ERR_IO'];
            }

            if ($chunk === '') {
                return ['ok' => false, 'error' => feof($stream) ? $error : 'ERR_IO'];
            }

            $buffer .= $chunk;
        }

        return ['ok' => true, 'bytes' => $buffer];
    }

    private function streamHasTrailingBytes($stream): bool
    {
        $trailing = fread($stream, 1);
        return !is_string($trailing) || $trailing !== '';
    }
}
