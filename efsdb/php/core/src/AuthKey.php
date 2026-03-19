<?php
declare(strict_types=1);

require_once __DIR__ . '/Crypto.php';

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
        $keyFile = $dataDir . '/auth.key';

        if (!is_dir($dataDir)) {
            mkdir($dataDir, 0775, true);
        }
        
        if (!file_exists($keyFile)) {
            // Generate a new 256-bit key
            $key = Crypto::randomKeyB64();
            
            // Save securely
            file_put_contents($keyFile, $key, LOCK_EX);
            
            // Set restrictive permissions (though Windows ignores this mostly)
            chmod($keyFile, 0600);
        }
        
        $key = trim((string)@file_get_contents($keyFile));
        
        if (strlen($key) < 43) { // Base64 32 bytes is ~44 chars
            throw new RuntimeException("Invalid auth.key in $keyFile");
        }
        
        return $key;
    }
}
