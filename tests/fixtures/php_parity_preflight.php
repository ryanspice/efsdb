<?php

function phpParityRuntimeCapabilities(): array
{
    return [
        'blake3 hashing' => function_exists('hash') && in_array('blake3', hash_algos(), true),
        'libsodium loaded' => extension_loaded('sodium'),
        'sodium_crypto_aead_chacha20poly1305_ietf_decrypt' => function_exists('sodium_crypto_aead_chacha20poly1305_ietf_decrypt'),
    ];
}

function phpParityMissingCapabilities(?array $capabilities = null): array
{
    $capabilities ??= phpParityRuntimeCapabilities();

    return array_keys(array_filter(
        $capabilities,
        static fn (bool $present): bool => !$present
    ));
}

function phpParityStatusLine(?array $missingCapabilities = null): string
{
    $missingCapabilities ??= phpParityMissingCapabilities();

    if ($missingCapabilities === []) {
        return 'full parity runnable';
    }

    return 'partial parity only, missing capabilities: ' . implode(', ', $missingCapabilities);
}

function phpParityRequireFullCapabilities(): void
{
    $missingCapabilities = phpParityMissingCapabilities();
    $statusLine = phpParityStatusLine($missingCapabilities);

    if ($missingCapabilities === []) {
        fwrite(STDOUT, $statusLine . PHP_EOL);
        return;
    }

    fwrite(STDERR, $statusLine . PHP_EOL);
    exit(1);
}

if (realpath($_SERVER['SCRIPT_FILENAME'] ?? '') === __FILE__) {
    phpParityRequireFullCapabilities();
}
