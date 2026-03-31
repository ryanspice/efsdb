<?php
declare(strict_types=1);

final class Config
{
    public static function getDataDir(): string
    {
        $env = self::env('EFSDB_DATA_DIR');
        $path = $env !== null && $env !== ''
            ? self::normalizePath($env)
            : self::getCacheRoot() . '/live/data';

        self::assertSafeDataDir($path);
        return $path;
    }

    public static function getWorkspaceRoot(): string
    {
        $env = self::env('EFSDB_WORKSPACE_ROOT');
        if ($env !== null && trim($env) !== '') {
            return self::normalizePath($env);
        }

        $candidates = [
            dirname(__DIR__, 4),
            dirname(__DIR__),
        ];

        foreach ($candidates as $candidate) {
            if (self::looksLikeWorkspaceRoot($candidate)) {
                return self::normalizePath($candidate);
            }
        }

        return self::normalizePath(dirname(__DIR__));
    }

    public static function getCacheRoot(): string
    {
        $env = self::env('EFSDB_CACHE_ROOT');
        if ($env !== null && trim($env) !== '') {
            return self::normalizePath($env);
        }

        return self::getWorkspaceRoot() . '/.cache/efsdb';
    }

    public static function getWorkspacesRoot(): string
    {
        return self::getCacheRoot() . '/workspaces';
    }

    public static function getArtifactsRoot(): string
    {
        return self::getCacheRoot() . '/artifacts';
    }

    public static function getTestsRoot(): string
    {
        return self::getCacheRoot() . '/tests';
    }

    public static function getInstallSeedDir(): string
    {
        $env = self::env('EFSDB_INSTALL_SEED_DIR');
        if ($env !== null && trim($env) !== '') {
            return self::normalizePath($env);
        }

        return self::getWorkspaceRoot() . '/install-seed';
    }

    public static function getSchemaDir(): string
    {
        $env = self::env('EFSDB_SCHEMA_DIR');
        if ($env !== null && $env !== '') {
            return self::normalizePath($env);
        }

        return self::normalizePath(__DIR__ . '/../schema');
    }

    public static function getEnv(): string
    {
        $raw = strtolower((string)(self::env('EFSDB_ENV') ?? ''));
        if ($raw !== '') {
            return match ($raw) {
                'prod', 'production' => 'production',
                'test', 'testing' => 'test',
                default => 'development',
            };
        }

        if (defined('EFSDB_TEST_MODE')) {
            return 'test';
        }

        if (in_array(PHP_SAPI, ['cli', 'cli-server'], true)) {
            return 'development';
        }

        return 'production';
    }

    public static function isProduction(): bool
    {
        return self::getEnv() === 'production';
    }

    public static function isDevelopment(): bool
    {
        return self::getEnv() === 'development';
    }

    public static function isDebugEnabled(): bool
    {
        $flag = strtolower((string)(self::env('EFSDB_DEBUG') ?? ''));
        if ($flag !== '') {
            return in_array($flag, ['1', 'true', 'yes', 'on'], true);
        }

        if (defined('EFSDB_TEST_MODE')) {
            return true;
        }

        return self::isDevelopment();
    }

    public static function getBootstrapSecret(): ?string
    {
        $secret = self::env('EFSDB_BOOTSTRAP_SECRET');
        if ($secret === null) {
            return null;
        }

        $secret = trim($secret);
        return $secret === '' ? null : $secret;
    }

    public static function getOAuthSettings(string $provider): ?array
    {
        return null;
    }

    public static function getBootstrapNoticePath(): string
    {
        return self::getDataDir() . '/.bootstrap_notice';
    }

    public static function getServerNoticePath(): string
    {
        return self::getDataDir() . '/.server_notice';
    }

    public static function getUiAccent(): string
    {
        return self::env('EFSDB_UI_ACCENT') ?? '#2563eb';
    }

    public static function getWebRoot(): string
    {
        $root = self::env('EFSDB_WEB_ROOT');
        if ($root === null || trim($root) === '') {
            $serverRoot = $_SERVER['DOCUMENT_ROOT'] ?? null;
            if (is_string($serverRoot) && trim($serverRoot) !== '') {
                $root = $serverRoot;
            } else {
                $root = __DIR__ . '/../public';
            }
        }

        return self::normalizePath((string)$root);
    }

    public static function allowInsecurePublicData(): bool
    {
        $flag = strtolower((string)(self::env('EFSDB_ALLOW_INSECURE_PUBLIC_DATA') ?? ''));
        return in_array($flag, ['1', 'true', 'yes', 'on'], true);
    }

    private static function env(string $key): ?string
    {
        $value = $_SERVER[$key] ?? $_ENV[$key] ?? getenv($key);
        if ($value === false || $value === null) {
            return null;
        }

        return (string)$value;
    }

    private static function normalizePath(string $path): string
    {
        $path = str_replace('\\', '/', $path);
        $resolved = realpath($path);
        if (is_string($resolved) && $resolved !== '') {
            $path = str_replace('\\', '/', $resolved);
        }

        $prefix = '';
        if (preg_match('#^[A-Za-z]:#', $path, $matches) === 1) {
            $prefix = strtoupper($matches[0]);
            $path = substr($path, strlen($matches[0]));
        } elseif (str_starts_with($path, '//')) {
            $prefix = '//';
            $path = ltrim($path, '/');
        } elseif (str_starts_with($path, '/')) {
            $prefix = '/';
            $path = ltrim($path, '/');
        }

        $parts = [];
        foreach (explode('/', $path) as $part) {
            if ($part === '' || $part === '.') {
                continue;
            }

            if ($part === '..') {
                if ($parts !== [] && end($parts) !== '..') {
                    array_pop($parts);
                } elseif ($prefix === '') {
                    $parts[] = $part;
                }
                continue;
            }

            $parts[] = $part;
        }

        $normalized = implode('/', $parts);
        if ($prefix === '//') {
            return rtrim('//' . $normalized, '/');
        }

        if ($prefix !== '') {
            return rtrim($prefix . ($normalized !== '' ? '/' . $normalized : ''), '/');
        }

        return rtrim($normalized, '/');
    }

    private static function looksLikeWorkspaceRoot(string $candidate): bool
    {
        $candidate = self::normalizePath($candidate);
        if ($candidate === '' || !is_dir($candidate)) {
            return false;
        }

        $repoStyleRoot = is_file($candidate . '/package.json')
            && is_dir($candidate . '/efsdb/php/core/public');
        $standaloneCoreRoot = is_dir($candidate . '/public')
            && is_dir($candidate . '/src');

        return $repoStyleRoot || $standaloneCoreRoot;
    }

    private static function assertSafeDataDir(string $path): void
    {
        $webRoot = self::getWebRoot();
        if ($webRoot === '' || !self::isPathInside($path, $webRoot)) {
            return;
        }

        if (self::isProduction()) {
            throw new RuntimeException('EFSDB_DATA_DIR must resolve outside the web root in production.');
        }

        if (!self::allowInsecurePublicData()) {
            throw new RuntimeException(
                'EFSDB_DATA_DIR resolves inside the web root. Move it outside the served tree or set EFSDB_ALLOW_INSECURE_PUBLIC_DATA=1 for explicit development override.'
            );
        }
    }

    private static function isPathInside(string $path, string $root): bool
    {
        $path = self::normalizePath($path);
        $root = self::normalizePath($root);

        if ($path === '' || $root === '') {
            return false;
        }

        return $path === $root || str_starts_with($path . '/', $root . '/');
    }
}
