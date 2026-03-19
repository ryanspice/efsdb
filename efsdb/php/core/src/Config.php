<?php
declare(strict_types=1);

final class Config
{
    public static function getDataDir(): string
    {
        $env = self::env('EFSDB_DATA_DIR');
        $path = '';
        if ($env !== null && $env !== '') {
            $path = self::normalizePath($env);
        } else {
            $path = self::normalizePath(__DIR__ . '/../data');
        }

        self::assertSafeDataDir($path);
        return $path;
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
        return self::env('EFSDB_UI_ACCENT') ?? '#c6ff00';
    }

    public static function getWebRoot(): string
    {
        $root = self::env('EFSDB_WEB_ROOT')
            ?? ($_SERVER['DOCUMENT_ROOT'] ?? null)
            ?? (__DIR__ . '/../public');

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
        return rtrim(str_replace('\\', '/', $path), '/');
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
