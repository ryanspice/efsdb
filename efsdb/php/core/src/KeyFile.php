<?php
declare(strict_types=1);

require_once __DIR__ . '/Crypto.php';
require_once __DIR__ . '/FilesystemLock.php';

/** Publish complete private keys once; an existing key is never implicitly rotated. */
final class KeyFile
{
    public static function loadOrCreate(string $dataDir, string $name): string
    {
        if (!in_array($name, ['master.key', 'auth.key'], true)) {
            throw new InvalidArgumentException('Unknown application key file');
        }

        return FilesystemLock::exclusive($dataDir, 'key:' . $name, static function () use ($dataDir, $name): string {
            $path = rtrim($dataDir, '/\\') . '/' . $name;
            if (file_exists($path) || is_link($path)) {
                return self::read($path);
            }

            $key = Crypto::randomKeyB64();
            $temporary = $path . '.tmp.' . bin2hex(random_bytes(12));
            $handle = @fopen($temporary, 'x+b');
            if ($handle === false) {
                throw new RuntimeException('Unable to create private key file');
            }

            try {
                // Restrict access before writing any key bytes. Windows applies
                // its directory ACL; production Unix workers require mode 0600.
                if (!chmod($temporary, 0600) || fwrite($handle, $key) !== strlen($key) || !fflush($handle) || !fsync($handle)) {
                    throw new RuntimeException('Unable to persist private key');
                }
                fclose($handle);
                $handle = null;

                // All supported writers hold the same lock. Refuse to replace
                // material created by an uncoordinated writer as well.
                clearstatcache(true, $path);
                if (file_exists($path) || is_link($path) || !rename($temporary, $path)) {
                    throw new RuntimeException('Unable to publish private key without replacement');
                }
                return self::read($path);
            } finally {
                if (is_resource($handle)) {
                    fclose($handle);
                }
                if (is_file($temporary)) {
                    unlink($temporary);
                }
            }
        });
    }

    private static function read(string $path): string
    {
        if (!is_file($path) || is_link($path)) {
            throw new RuntimeException('Invalid application key file');
        }
        $bytes = @file_get_contents($path);
        if ($bytes === false) {
            throw new RuntimeException('Unable to read application key file');
        }
        $key = trim($bytes);
        Crypto::keyFromB64($key);
        return $key;
    }
}
