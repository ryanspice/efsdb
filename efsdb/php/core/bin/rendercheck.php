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
$dataDir = __DIR__ . '/../data';
$authKeyB64 = AuthKey::get($dataDir);

// Create valid Refresh Token (HS256)
$header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
$payload = json_encode([
    'sub' => 'root',
    'name' => 'Root',
    'role' => 'root',
    'uid' => 0,
    'gid' => 0,
    'ent' => ['RAW_VIEW', 'NATURAL_VIEW'],
    'iat' => time(),
    'exp' => time() + 3600,
    'type' => 'refresh'
]);

$b64Header = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
$b64Payload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
$sig = hash_hmac('sha256', "$b64Header.$b64Payload", $authKeyB64, true);
$b64Sig = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($sig));
$token = "$b64Header.$b64Payload.$b64Sig";

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
    ['api' => true, 'uri' => '/api/health', 'expectJson' => true],
    ['api' => true, 'uri' => '/api/products', 'expectJson' => true]
];

foreach ($tests as $test) {
    if (isset($test['api'])) {
        $uri = $test['uri'];
        $_SERVER['REQUEST_URI'] = $uri;
        $_SERVER['REQUEST_METHOD'] = 'GET';
        // Ensure Bearer for API (using the cookie logic for legacy, but API needs Bearer or Cookie?)
        // The token generated above is a REFRESH token in cookie.
        // API endpoints check Bearer first, then cookie (for some).
        // Wait, /api/products requires Bearer Only?
        // index.php: $user = $auth->authenticate(true); // Bearer Only
        // So cookie won't work for /api/products.
        // We need to set Authorization header.
        
        // Re-use the token we generated (it has type='refresh', might fail if verifyAccessToken checks type='access')
        // Auth.php verifyAccessToken checks type='access'.
        // So we need an access token.
        
        // Let's generate an access token here using the same key.
        $accPayload = json_encode([
            'sub' => 'root', 'name' => 'Root', 'role' => 'root',
            'uid' => 0, 'gid' => 0, 'ent' => ['RAW_VIEW'],
            'iat' => time(), 'exp' => time() + 3600, 'type' => 'access'
        ]);
        $b64AccPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($accPayload));
        $accSig = hash_hmac('sha256', "$b64Header.$b64AccPayload", $authKeyB64, true);
        $b64AccSig = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($accSig));
        $accToken = "$b64Header.$b64AccPayload.$b64AccSig";
        
        $_SERVER['HTTP_AUTHORIZATION'] = "Bearer $accToken";
        $action = "API $uri";
    } else {
        $action = $test['action'];
        $expected = $test['expect'];
        $_GET['action'] = $action;
        $_SERVER['REQUEST_URI'] = "/?action=$action";
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
