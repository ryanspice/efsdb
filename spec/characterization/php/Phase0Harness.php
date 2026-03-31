<?php
declare(strict_types=1);

if (!defined('EFSDB_TEST_MODE')) {
    define('EFSDB_TEST_MODE', true);
}

if (ob_get_level() === 0) {
    ob_start();
}

require_once __DIR__ . '/../../../efsdb/php/core/src/App.php';
require_once __DIR__ . '/../../../efsdb/php/core/src/Auth.php';
require_once __DIR__ . '/../../../efsdb/php/core/src/Config.php';
require_once __DIR__ . '/../../../efsdb/php/core/src/Store.php';
require_once __DIR__ . '/../../../efsdb/php/core/src/Schema.php';

final class Phase0Harness
{
    public const LIVE_SEAM = __DIR__ . '/../../../efsdb/php/core/public/index.php';
    public const SCHEMA_DIR = __DIR__ . '/../../../efsdb/php/core/schema';

    public static function resetDir(string $dir): void
    {
        if (!is_dir($dir)) {
            return;
        }

        $it = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
            RecursiveIteratorIterator::CHILD_FIRST
        );

        foreach ($it as $item) {
            ($item->isDir() ? 'rmdir' : 'unlink')($item->getRealPath());
        }

        rmdir($dir);
    }

    public static function primeEnv(string $dataDir, string $bootstrapSecret): void
    {
        $_SERVER['EFSDB_DATA_DIR'] = $dataDir;
        $_SERVER['EFSDB_ENV'] = 'test';
        $_SERVER['EFSDB_BOOTSTRAP_SECRET'] = $bootstrapSecret;
        $_SERVER['HTTP_HOST'] = 'localhost';
        $_SERVER['SERVER_PORT'] = 80;
        $_SERVER['REMOTE_ADDR'] = '127.0.0.1';

        $_ENV['EFSDB_DATA_DIR'] = $dataDir;
        $_ENV['EFSDB_ENV'] = 'test';
        $_ENV['EFSDB_BOOTSTRAP_SECRET'] = $bootstrapSecret;

        putenv("EFSDB_DATA_DIR=$dataDir");
        putenv('EFSDB_ENV=test');
        putenv("EFSDB_BOOTSTRAP_SECRET=$bootstrapSecret");
    }

    public static function bootApp(string $dataDir, string $bootstrapSecret): App
    {
        self::primeEnv($dataDir, $bootstrapSecret);
        return new App($dataDir, self::SCHEMA_DIR);
    }

    /**
     * @param array<string,mixed> $options
     * @return array{status:int,body:string,json:mixed,headers:list<string>,headerMap:array<string,list<string>>}
     */
    public static function request(string $dataDir, string $bootstrapSecret, string $uri, string $method = 'GET', array $options = []): array
    {
        self::primeEnv($dataDir, $bootstrapSecret);

        foreach (array_keys($_SERVER) as $key) {
            if (!is_string($key)) {
                continue;
            }

            if (($key === 'CONTENT_TYPE' || $key === 'CONTENT_LENGTH' || str_starts_with($key, 'HTTP_')) && $key !== 'HTTP_HOST') {
                unset($_SERVER[$key]);
            }
        }

        $_SERVER['REQUEST_METHOD'] = $method;
        $_SERVER['REQUEST_URI'] = $uri;
        $_SERVER['HTTP_AUTHORIZATION'] = '';
        $_GET = [];
        $_POST = [];
        $_COOKIE = [];

        if (isset($options['bearer']) && is_string($options['bearer']) && $options['bearer'] !== '') {
            $_SERVER['HTTP_AUTHORIZATION'] = 'Bearer ' . $options['bearer'];
        }

        if (isset($options['cookies']) && is_array($options['cookies'])) {
            $_COOKIE = $options['cookies'];
        }

        if (isset($options['headers']) && is_array($options['headers'])) {
            foreach ($options['headers'] as $name => $value) {
                if (!is_string($name) || !is_scalar($value)) {
                    continue;
                }

                $normalized = strtoupper(str_replace('-', '_', trim($name)));
                if ($normalized === 'CONTENT_TYPE' || $normalized === 'CONTENT_LENGTH') {
                    $_SERVER[$normalized] = (string)$value;
                    continue;
                }

                $_SERVER['HTTP_' . $normalized] = (string)$value;
            }
        }

        $parts = parse_url($uri);
        if (isset($parts['query']) && is_string($parts['query'])) {
            parse_str($parts['query'], $_GET);
        }

        if (isset($options['post']) && is_array($options['post'])) {
            $_POST = $options['post'];
        }

        if (array_key_exists('json', $options)) {
            $GLOBALS['EFSDB_TEST_JSON_BODY'] = json_encode($options['json'], JSON_THROW_ON_ERROR);
        } else {
            unset($GLOBALS['EFSDB_TEST_JSON_BODY']);
        }

        @header_remove();
        @http_response_code(200);
        ob_start();
        include self::LIVE_SEAM;
        $body = (string)ob_get_clean();
        $headers = headers_list();
        $headerMap = self::normalizeHeaders($headers);
        @header_remove();
        unset($GLOBALS['EFSDB_TEST_JSON_BODY']);

        return [
            'status' => http_response_code(),
            'body' => $body,
            'json' => json_decode($body, true),
            'headers' => $headers,
            'headerMap' => $headerMap,
        ];
    }

    /**
     * @param list<string> $headers
     * @return array<string,list<string>>
     */
    private static function normalizeHeaders(array $headers): array
    {
        $normalized = [];
        foreach ($headers as $header) {
            $parts = explode(':', $header, 2);
            if (count($parts) !== 2) {
                continue;
            }

            $name = strtolower(trim($parts[0]));
            $value = trim($parts[1]);
            $normalized[$name] ??= [];
            $normalized[$name][] = $value;
        }

        return $normalized;
    }

    public static function loginAccessToken(string $dataDir, string $bootstrapSecret, string $loginKey): string
    {
        $login = self::request($dataDir, $bootstrapSecret, '/_efsdb/api/auth/login', 'POST', [
            'json' => ['key' => $loginKey],
        ]);

        if ($login['status'] !== 200 || !is_array($login['json']) || !is_string($login['json']['accessToken'] ?? null)) {
            throw new RuntimeException('Unable to obtain access token for characterization.');
        }

        return (string)$login['json']['accessToken'];
    }
}

/**
 * @param list<string> $failures
 */
function phase0_assert(bool $condition, string $label, array &$failures): void
{
    if ($condition) {
        echo "[PASS] $label\n";
        return;
    }

    $failures[] = $label;
    echo "[FAIL] $label\n";
}

/**
 * @param list<string> $failures
 */
function phase0_finish(array $failures): void
{
    $count = count($failures);
    echo "\nSummary: " . ($count === 0 ? 'all checks passed' : "$count failure(s)") . "\n";
    while (ob_get_level() > 0) {
        ob_end_flush();
    }
    exit($count === 0 ? 0 : 1);
}
