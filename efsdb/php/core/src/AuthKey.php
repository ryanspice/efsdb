<?php
declare(strict_types=1);

require_once __DIR__ . '/KeyFile.php';

final class AuthKey
{
    /**
     * Retrieves the auth signing key, generating it if it doesn't exist.
     * 
     * @param string $dataDir The directory where keys are stored.
     * @return string The Base64 encoded key.
     */
    public static function get(string $dataDir): string
    {
        return KeyFile::loadOrCreate($dataDir, 'auth.key');
    }
}
