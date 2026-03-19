<?php
declare(strict_types=1);

namespace Efsdb;

final class Config
{
    public function __construct(
        public readonly string $webRoot,
        public readonly string $dataDir,
        public readonly int $chunkSize,
        public readonly string $env,
        public readonly bool $allowInsecurePublicData
    ) {}

    public static function forWebRoot(string $webRoot, int $chunkSize): self
    {
        $webRoot = self::normalizePath($webRoot);
        $dataDir = self::normalizePath(dirname($webRoot) . '/.efsdb');
        return new self($webRoot, $dataDir, $chunkSize, 'development', true);
    }

    public static function fromEnv(string $publicDir): self
    {
        $webRoot = self::normalizePath($publicDir);
        $chunk = (int)($_SERVER['EFSDB_CHUNK_SIZE'] ?? $_ENV['EFSDB_CHUNK_SIZE'] ?? 262144);
        $env = strtolower((string)($_SERVER['EFSDB_ENV'] ?? $_ENV['EFSDB_ENV'] ?? (PHP_SAPI === 'cli-server' ? 'development' : 'production')));
        $env = in_array($env, ['dev', 'development', 'test'], true) ? 'development' : 'production';
        $dataDir = (string)($_SERVER['EFSDB_DATA_DIR'] ?? $_ENV['EFSDB_DATA_DIR'] ?? (dirname($webRoot) . '/.efsdb'));
        $dataDir = self::normalizePath($dataDir);
        $allow = strtolower((string)($_SERVER['EFSDB_ALLOW_INSECURE_PUBLIC_DATA'] ?? $_ENV['EFSDB_ALLOW_INSECURE_PUBLIC_DATA'] ?? ($env === 'development' ? '1' : '0')));
        $cfg = new self($webRoot, $dataDir, $chunk, $env, in_array($allow, ['1', 'true', 'yes', 'on'], true));
        $cfg->assertSafe();
        return $cfg;
    }

    private function assertSafe(): void
    {
        if ($this->allowInsecurePublicData) {
            return;
        }

        if (str_starts_with($this->dataDir . '/', $this->webRoot . '/')) {
            throw new \RuntimeException('EFSDB_DATA_DIR must resolve outside the web root in secure mode.');
        }
    }

    private static function normalizePath(string $path): string
    {
        return rtrim(str_replace('\\', '/', $path), '/');
    }
}

final class Crypto
{
    public static function requireSodium(): void
    {
        if (!extension_loaded('sodium')) {
            throw new \RuntimeException('ext-sodium is required (libsodium).');
        }
    }

    public static function loadOrInitMasterKey(string $dataDir): string
    {
        self::requireSodium();
        if (!is_dir($dataDir)) {
            mkdir($dataDir, 0777, true);
        }

        $keyFile = $dataDir . '/master.key';
        if (is_file($keyFile)) {
            $b64 = trim((string)file_get_contents($keyFile));
            $raw = base64_decode($b64, true);
            if ($raw === false || strlen($raw) !== 32) {
                throw new \RuntimeException('Invalid master.key');
            }

            return $raw;
        }

        $raw = random_bytes(32);
        file_put_contents($keyFile, base64_encode($raw), LOCK_EX);
        return $raw;
    }

    public static function kdf(string $masterKey32, string $context8, int $subkeyId): string
    {
        if (strlen($context8) !== 8) {
            throw new \RuntimeException('context must be 8 bytes');
        }

        return sodium_crypto_kdf_derive_from_key(32, $subkeyId, $context8, $masterKey32);
    }

    public static function aeadEncrypt(string $plaintext, string $key32, string $aad): string
    {
        if (function_exists('sodium_crypto_aead_aegis256_encrypt') && defined('SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES')) {
            $nonce = random_bytes(SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES);
            $cipher = sodium_crypto_aead_aegis256_encrypt($plaintext, $aad, $nonce, $key32);
            return 'AEG1' . $nonce . $cipher;
        }

        if (!defined('SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES')) {
            throw new \RuntimeException('Sodium extension missing or too old (XChaCha20-Poly1305 required).');
        }

        $nonce = random_bytes(SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES);
        $cipher = sodium_crypto_aead_xchacha20poly1305_ietf_encrypt($plaintext, $aad, $nonce, $key32);
        return 'XCH1' . $nonce . $cipher;
    }

    public static function aeadDecrypt(string $blob, string $key32, string $aad): string
    {
        $tag = substr($blob, 0, 4);
        $rest = substr($blob, 4);

        if ($tag === 'AEG1') {
            if (!defined('SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES')) {
                throw new \RuntimeException('AEGIS-256 not supported in this environment.');
            }

            $nonce = substr($rest, 0, SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES);
            $cipher = substr($rest, SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES);
            $plain = sodium_crypto_aead_aegis256_decrypt($cipher, $aad, $nonce, $key32);
            if ($plain === false) {
                throw new \RuntimeException('Decrypt failed (AEGIS)');
            }

            return $plain;
        }

        if ($tag === 'XCH1') {
            if (!defined('SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES')) {
                throw new \RuntimeException('XChaCha20-Poly1305 not supported in this environment.');
            }

            $nonce = substr($rest, 0, SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES);
            $cipher = substr($rest, SODIUM_CRYPTO_AEAD_XCHACHA20POLY1305_IETF_NPUBBYTES);
            $plain = sodium_crypto_aead_xchacha20poly1305_ietf_decrypt($cipher, $aad, $nonce, $key32);
            if ($plain === false) {
                throw new \RuntimeException('Decrypt failed (XChaCha)');
            }

            return $plain;
        }

        throw new \RuntimeException('Unknown AEAD blob tag');
    }
}

final class PageStore
{
    private const ENTITY = 'site_pages';

    private string $masterKey;
    private string $manifestKey;
    private string $chunkKey;
    private string $lookupKey;

    public function __construct(private readonly Config $cfg)
    {
        $this->masterKey = Crypto::loadOrInitMasterKey($cfg->dataDir);
        $this->manifestKey = Crypto::kdf($this->masterKey, "manifest", 2);
        $this->chunkKey = Crypto::kdf($this->masterKey, str_pad('chunk', 8, "\0"), 3);
        $this->lookupKey = Crypto::kdf($this->masterKey, 'EFSLOOKP', 5);
    }

    public function putByPath(string $path, string $bytes, string $mime): void
    {
        $logicalPath = Http::normalizeLogicalPath($path);
        $id = $this->idForPath($logicalPath);
        $dir = $this->manifestDir($id);
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }

        $chunks = [];
        $size = strlen($bytes);
        $offset = 0;
        $idx = 0;

        while ($offset < $size) {
            $part = substr($bytes, $offset, min($this->cfg->chunkSize, $size - $offset));
            $hash = bin2hex(sodium_crypto_generichash($part));
            $chunkPath = $this->chunkPath($hash);

            if (!is_file($chunkPath)) {
                $chunkDir = dirname($chunkPath);
                if (!is_dir($chunkDir)) {
                    mkdir($chunkDir, 0777, true);
                }
                $blob = Crypto::aeadEncrypt($part, $this->chunkKey, "chunk:$hash");
                $tmp = $chunkPath . '.tmp';
                file_put_contents($tmp, $blob, LOCK_EX);
                rename($tmp, $chunkPath);
            }

            $len = strlen($part);
            $chunks[] = [
                'i' => $idx++,
                'offset' => $offset,
                'len' => $len,
                'hash' => $hash,
            ];
            $offset += $len;
        }

        $manifest = [
            'v' => 1,
            'id' => $id,
            'entity' => self::ENTITY,
            'logicalPath' => $logicalPath,
            'size' => $size,
            'mime' => $mime,
            'mtime' => gmdate('c'),
            'chunking' => ['mode' => 'fixed', 'size' => $this->cfg->chunkSize],
            'hash' => ['algo' => 'blake2b'],
            'chunks' => $chunks,
            'indexes' => [
                'id' => $id,
                'entity' => self::ENTITY,
                'logicalPath' => $logicalPath,
                'name' => basename($logicalPath),
                'mime' => $mime,
                'size' => $size,
                'updatedAt' => gmdate('c'),
            ],
        ];

        $manifestPath = $this->manifestPath($id);
        $blob = Crypto::aeadEncrypt(
            json_encode($manifest, JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR),
            $this->manifestKey,
            "manifest:$id"
        );
        $tmp = $manifestPath . '.tmp';
        file_put_contents($tmp, $blob, LOCK_EX);
        rename($tmp, $manifestPath);
    }

    /**
     * @return array{manifest: array<string,mixed>, bytes: string}|null
     */
    public function getByPath(string $path): ?array
    {
        $logicalPath = Http::normalizeLogicalPath($path);
        $id = $this->idForPath($logicalPath);
        $manifestPath = $this->manifestPath($id);
        if (!is_file($manifestPath)) {
            return null;
        }

        $blob = file_get_contents($manifestPath);
        if ($blob === false) {
            throw new \RuntimeException('manifest read failed');
        }

        $manifest = json_decode(Crypto::aeadDecrypt($blob, $this->manifestKey, "manifest:$id"), true, 512, JSON_THROW_ON_ERROR);
        if (!is_array($manifest)) {
            throw new \RuntimeException('manifest decode failed');
        }

        $out = '';
        foreach ($manifest['chunks'] as $chunk) {
            $hash = (string)$chunk['hash'];
            $chunkBlob = file_get_contents($this->chunkPath($hash));
            if ($chunkBlob === false) {
                throw new \RuntimeException("chunk read failed: $hash");
            }

            $plain = Crypto::aeadDecrypt($chunkBlob, $this->chunkKey, "chunk:$hash");
            $check = bin2hex(sodium_crypto_generichash($plain));
            if (!hash_equals($hash, $check)) {
                throw new \RuntimeException("chunk hash mismatch: $hash");
            }

            $out .= $plain;
        }

        return ['manifest' => $manifest, 'bytes' => $out];
    }

    private function idForPath(string $logicalPath): string
    {
        return bin2hex(hash_hmac('sha256', $logicalPath, $this->lookupKey, true));
    }

    private function manifestDir(string $id): string
    {
        return $this->cfg->dataDir . '/' . self::ENTITY . '/manifests';
    }

    private function manifestPath(string $id): string
    {
        return $this->manifestDir($id) . "/manifest_$id.m";
    }

    private function chunkPath(string $hash): string
    {
        $p1 = substr($hash, 0, 2);
        $p2 = substr($hash, 2, 2);
        return $this->cfg->dataDir . '/' . self::ENTITY . "/chunks/$p1/$p2/$hash.c";
    }
}

final class Http
{
    public static function normalizeLogicalPath(string $path): string
    {
        $path = str_replace('\\', '/', $path);
        $path = preg_replace('#/+#', '/', $path) ?? $path;
        $path = trim($path);
        $path = ltrim($path, '/');
        return $path === '' ? 'index.html' : $path;
    }

    public static function guessMime(string $path, string $bytes): string
    {
        $p = strtolower($path);
        return match (true) {
            str_ends_with($p, '.html') => 'text/html; charset=utf-8',
            str_ends_with($p, '.json') => 'application/json; charset=utf-8',
            str_ends_with($p, '.txt') => 'text/plain; charset=utf-8',
            str_ends_with($p, '.css') => 'text/css; charset=utf-8',
            str_ends_with($p, '.js') => 'application/javascript; charset=utf-8',
            str_ends_with($p, '.svg') => 'image/svg+xml',
            str_ends_with($p, '.png') => 'image/png',
            str_ends_with($p, '.jpg'), str_ends_with($p, '.jpeg') => 'image/jpeg',
            default => 'application/octet-stream',
        };
    }

    public static function sendItem(array $item): void
    {
        $manifest = $item['manifest'];
        $bytes = (string)$item['bytes'];

        header('Content-Type: ' . (string)$manifest['mime']);
        header('Content-Length: ' . strlen($bytes));
        header('X-EFSDB-Manifest: ' . (string)$manifest['id']);
        header('X-EFSDB-Logical-Path: ' . (string)($manifest['logicalPath'] ?? ''));
        echo $bytes;
    }
}

final class CorePublicRuntime
{
    private function __construct(
        private readonly \App $app,
        private readonly \Auth $auth
    ) {}

    public static function boot(Config $cfg): self
    {
        $coreDir = dirname(__DIR__) . '/core';

        $_SERVER['EFSDB_DATA_DIR'] = $cfg->dataDir;
        $_ENV['EFSDB_DATA_DIR'] = $cfg->dataDir;
        putenv('EFSDB_DATA_DIR=' . $cfg->dataDir);

        if (!isset($_SERVER['EFSDB_SCHEMA_DIR'])) {
            $_SERVER['EFSDB_SCHEMA_DIR'] = $coreDir . '/schema';
            $_ENV['EFSDB_SCHEMA_DIR'] = $coreDir . '/schema';
            putenv('EFSDB_SCHEMA_DIR=' . $coreDir . '/schema');
        }

        require_once $coreDir . '/src/App.php';
        require_once $coreDir . '/src/Auth.php';

        $app = new \App($cfg->dataDir, (string)$_SERVER['EFSDB_SCHEMA_DIR']);
        $auth = new \Auth($app);
        return new self($app, $auth);
    }

    public function handle(string $uriPath, string $method): void
    {
        $response = $this->app->getPublicSiteRouter()->handle($uriPath, $method, $this->auth->authenticate());
        if ($response === null) {
            http_response_code(404);
            echo '404 Not Found (EFSDB)';
            return;
        }

        http_response_code((int)$response['status']);
        foreach ($response['headers'] as $name => $value) {
            header($name . ': ' . $value);
        }
        echo $response['body'];
    }
}
