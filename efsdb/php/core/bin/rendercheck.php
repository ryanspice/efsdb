<?php
// bin/rendercheck.php

// Mock environment
define('EFSDB_TEST_MODE', true);
$_SERVER['REQUEST_URI'] = '/';
$_SERVER['REQUEST_METHOD'] = 'GET';
$_SERVER['HTTP_HOST'] = 'localhost';
$_SERVER['SERVER_PORT'] = 80;
$_SERVER['REMOTE_ADDR'] = '127.0.0.1';

// Load Auth Key & Generate Cookie
require_once __DIR__ . '/../src/AuthKey.php';
require_once __DIR__ . '/../src/Auth.php';
require_once __DIR__ . '/../src/Config.php';

Config::assertRepoPhpIniLoaded('bin/rendercheck.php');

$dataDir = Config::getDataDir();
$authKeyB64 = AuthKey::get($dataDir);

require_once __DIR__ . '/../src/App.php';
$app = new App($dataDir, __DIR__ . '/../schema');

$tenantUser = $app->getIdentity()->getUserById('root', 'tenant_admin');
if ($tenantUser === null) {
    $app->getIdentity()->createUser([
        'id' => 'root',
        'username' => 'root',
        'name' => 'Root',
        'roleId' => 'tenant_admin'
    ], 'secret');
    $tenantUser = $app->getIdentity()->getUserById('root', 'tenant_admin');
}
$session = $app->getIdentity()->createRefreshSession($tenantUser);
$token = $session['token'];
$_COOKIE['efsdb_refresh_token'] = $token;

// Prevent header() calls from failing
function header_mock($str) {}

// We can't easily override built-in header() unless we use runkit or namespaces.
// But we can just suppress output or ignore warnings.
// Actually, header() just emits headers, doesn't stop execution unless Location + exit.
// index.php doesn't redirect for these views.

// We need to capture output.

$tests = [
    ['action' => 'products', 'expect' => 'Products'],
    ['action' => 'preview', 'expect' => 'Preview'],
    // API Tests (Ensure no HTML artifacts)
    ['api' => true, 'uri' => '/_efsdb/api/health', 'expectJson' => true]
];

// Mock the Auth class to always return a root user for these tests, bypassing DB lookup
class MockAuth extends Auth {
    public function authenticate(bool $bearerOnly = false): User {
        return new User('root', 'Root', 'root', 'root', ['RAW_VIEW', 'NATURAL_VIEW', 'SITE_EDIT']);
    }
}
$auth = new MockAuth($app);

foreach ($tests as $test) {
    if (isset($test['api'])) {
        $uri = $test['uri'];
        $_SERVER['REQUEST_URI'] = $uri;
        $_SERVER['REQUEST_METHOD'] = 'GET';
        $action = "API $uri";
    } else {
        $action = $test['action'];
        $expected = $test['expect'];
        $_GET['action'] = $action;
        $_SERVER['REQUEST_URI'] = "/_efsdb/$action";
        $_SERVER['HTTP_AUTHORIZATION'] = ""; // Clear for view tests
    }

    ob_start();
    try {
        // Reset response code
        @http_response_code(200);
        @include __DIR__ . '/../public/index.php';
    } catch (Throwable $e) {
        echo "[ERROR] Exception in $action: " . $e->getMessage() . "\n";
    }
    $output = ob_get_clean();

    // Clean Output (remove warnings)
    $lines = explode("\n", $output);
    $cleanLines = [];
    foreach ($lines as $line) {
        if (!str_starts_with($line, 'Warning:') && trim($line) !== '') {
            $cleanLines[] = $line;
        }
    }
    $cleanOutput = implode("\n", $cleanLines);

    if (isset($test['api'])) {
        // Assert JSON and No HTML
        if (json_decode($cleanOutput) === null) {
            echo "[FAIL] $action: Invalid JSON output\n";
            echo "DEBUG: " . substr($output, 0, 200) . "...\n";
            exit(1);
        }
        if (str_contains($cleanOutput, '<html') || str_contains($cleanOutput, '<div')) {
            echo "[FAIL] $action: HTML detected in API response\n";
            exit(1);
        }
        echo "[PASS] $action: Valid JSON, no HTML\n";
    } else {
        // Assertions for Views
        // Use raw output for views as they might have HTML
        if (str_contains($output, $expected)) {
            echo "[PASS] Action '$action' contains '$expected'\n";
        } else {
            echo "[FAIL] Action '$action' missing '$expected'\n";
            echo "DEBUG OUTPUT (First 500 chars):\n" . substr($output, 0, 500) . "\n...\n";
            exit(1);
        }
    
        if (str_contains($output, '";')) {
             echo "[WARN] Possible dangling artifact in output of '$action'\n";
        }
    }
}

echo "Render checks complete.\n";
