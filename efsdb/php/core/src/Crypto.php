<?php
declare(strict_types=1);

final class Crypto
{
    public static function randomKeyB64(): string
    {
        return base64_encode(random_bytes(32));
    }

    public static function keyFromB64(string $b64): string
    {
        $raw = base64_decode($b64, true);
        if ($raw === false || strlen($raw) !== 32) {
            throw new RuntimeException("Master key must be base64(32 bytes)");
        }
        return $raw;
    }

    public static function aeadEncrypt(string $plaintext, string $key32, string $aad): string
    {
        // Prefer AEGIS-256 if available; otherwise XChaCha20-Poly1305.
        if (function_exists('sodium_crypto_aead_aegis256_encrypt') && defined('SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES')) {
            $nonce = random_bytes(SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES);
            $cipher = sodium_crypto_aead_aegis256_encrypt($plaintext, $aad, $nonce, $key32);
            return "AEG1" . $nonce . $cipher;
        }

        if (!defined('SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES')) {
             throw new RuntimeException("Sodium extension missing or too old (XChaCha20-Poly1305 required).");
        }

        $nonce = random_bytes(SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES);
        $cipher = sodium_crypto_aead_xchacha20poly1305_ietf_encrypt($plaintext, $aad, $nonce, $key32);
        return "XCH1" . $nonce . $cipher;
    }

    public static function aeadDecrypt(string $blob, string $key32, string $aad): string
    {
        $tag = substr($blob, 0, 4);
        $rest = substr($blob, 4);

        if ($tag === "AEG1") {
            if (!defined('SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES')) {
                 throw new RuntimeException("AEGIS-256 not supported in this environment.");
            }
            $nonce = substr($rest, 0, SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES);
            $cipher = substr($rest, SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES);
            $plain = sodium_crypto_aead_aegis256_decrypt($cipher, $aad, $nonce, $key32);
            if ($plain === false) throw new RuntimeException("Decrypt failed (AEGIS)");
            return $plain;
        }

        if ($tag === "XCH1") {
            if (!defined('SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES')) {
                 throw new RuntimeException("XChaCha20-Poly1305 not supported in this environment.");
            }
            $nonce = substr($rest, 0, SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES);
            $cipher = substr($rest, SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES);
            $plain = sodium_crypto_aead_xchacha20poly1305_ietf_decrypt($cipher, $aad, $nonce, $key32);
            if ($plain === false) throw new RuntimeException("Decrypt failed (XChaCha)");
            return $plain;
        }

        throw new RuntimeException("Unknown AEAD blob tag");
    }

    public static function kdf(string $masterKey32, string $context8, int $subkeyId): string
    {
        if (strlen($context8) !== 8) throw new RuntimeException("context must be 8 bytes");
        return sodium_crypto_kdf_derive_from_key(32, $subkeyId, $context8, $masterKey32);
    }
}
