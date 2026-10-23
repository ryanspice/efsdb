<?php
declare(strict_types=1);

// Exercise the exact front controller under cli-server without touching the
// application's public tree or initializing any storage. Only the pre-bootstrap
// policy dependency is copied; a fallthrough would fail instead of returning 403.
$workspace = dirname(__DIR__, 3);
$fixture = $workspace . '/.cache/efsdb/tests/security/static-http-' . bin2hex(random_bytes(8));
$public = $fixture . '/public';
mkdir($public . '/.ghost/production', 0700, true);
mkdir($public . '/nested', 0700, true);
mkdir($public . '/assets', 0700, true);
mkdir($public . '/views', 0700, true);
mkdir($public . '/src', 0700, true);
mkdir($fixture . '/src', 0700, true);
copy($workspace . '/efsdb/php/core/public/index.php', $public . '/index.php');
copy($workspace . '/efsdb/php/core/src/PublicAssetPolicy.php', $fixture . '/src/PublicAssetPolicy.php');
foreach (['.ghost/production/fixture.html', 'nested/.env', 'package.json', 'views/private.php', 'app.js.map', 'src/private.js'] as $path) {
    file_put_contents($public . '/' . $path, 'PRIVATE-HTTP-MARKER');
}
file_put_contents($public . '/assets/visible.css', 'body{color:green}');
$privateAlias = @symlink($public . '/src/private.js', $public . '/assets/private-alias.js');
$privateAliasUri = $privateAlias ? '/assets/private-alias.js' : null;
if (!$privateAlias && PHP_OS_FAMILY === 'Windows') {
    // Directory junctions do not need the symlink privilege on Windows.
    $junction = $public . '/assets/private-directory';
    exec('mklink /J ' . escapeshellarg(str_replace('/', '\\', $junction)) . ' '
        . escapeshellarg(str_replace('/', '\\', $public . '/src')) . ' 2>&1', $linkOutput, $linkStatus);
    file_put_contents($fixture . '/junction.log', implode("\n", $linkOutput));
    if ($linkStatus === 0 && is_dir($junction)) {
        $privateAliasUri = '/assets/private-directory/private.js';
    }
}
$reservation = stream_socket_server('tcp://127.0.0.1:0', $errorCode, $error);
if ($reservation === false) throw new RuntimeException('Unable to reserve a loopback test port');
$address = stream_socket_get_name($reservation, false);
fclose($reservation);
$process = proc_open([PHP_BINARY, '-n', '-S', $address, '-t', $public, $public . '/index.php'], [
    0 => ['pipe', 'r'], 1 => ['file', $fixture . '/stdout.log', 'a'], 2 => ['file', $fixture . '/stderr.log', 'a'],
], $pipes, $fixture, null, ['bypass_shell' => true]);
if (!is_resource($process)) throw new RuntimeException('Unable to start isolated PHP HTTP server');
fclose($pipes[0]);
$failures = [];
$passes = 0;
$request = static function (string $uri, string $method = 'GET') use ($address): array {
    $context = stream_context_create(['http' => ['method' => $method, 'ignore_errors' => true, 'follow_location' => 0, 'timeout' => 3]]);
    $body = @file_get_contents('http://' . $address . $uri, false, $context);
    $headers = $http_response_header ?? [];
    preg_match('/\s(\d{3})\s/', $headers[0] ?? '', $status);
    return ['status' => (int)($status[1] ?? 0), 'body' => $body === false ? '' : $body, 'headers' => $headers];
};
$check = static function (bool $condition, string $label) use (&$failures, &$passes): void {
    echo ($condition ? '[PASS] ' : '[FAIL] ') . $label . "\n";
    if ($condition) $passes++; else $failures[] = $label;
};
try {
    $ready = false;
    for ($attempt = 0; $attempt < 60; $attempt++) {
        $connection = @stream_socket_client('tcp://' . $address, $errorCode, $error, 0.1);
        if (is_resource($connection)) { fclose($connection); $ready = true; break; }
        usleep(50000);
    }
    if (!$ready) throw new RuntimeException('Isolated PHP HTTP server did not become ready');
    foreach (['/.ghost/production/fixture.html', '/%2eghost/production/fixture.html', '/%252eghost/production/fixture.html', '/nested/.env', '/package.json', '/views/private.php', '/app.js.map', '/src/private.js',
        '/src./private.js', '/src%20/private.js', '/package.json.', '/package.json%20', '/assets/CON.txt', '/assets/com1.js', '/assets/bad%01.txt', '/assets/bad%3F.txt'] as $uri) {
        $response = $request($uri);
        $check($response['status'] === 403 && $response['body'] === '403 Forbidden'
            && in_array('Cache-Control: no-store', $response['headers'], true), "$uri is forbidden before bootstrap and static delegation");
    }
    if ($privateAliasUri !== null) {
        $alias = $request($privateAliasUri);
        $check($alias['status'] === 403 && $alias['body'] === '403 Forbidden', 'Public-looking static alias to a private canonical path is forbidden');
    } else {
        echo "[SKIP] Host does not permit creating a symlink or junction for the canonical-target HTTP fixture\n";
    }
    $head = $request('/.ghost/production/fixture.html', 'HEAD');
    $check($head['status'] === 403 && $head['body'] === '', 'HEAD private requests return 403 without a body');
    $asset = $request('/assets/visible.css');
    $check($asset['status'] === 200 && $asset['body'] === 'body{color:green}', 'Benign public CSS still uses native static delivery');
    $check(!is_dir($fixture . '/.cache') && !is_file($fixture . '/src/App.php'), 'Requests complete without application bootstrap dependencies or data');
} finally {
    proc_terminate($process);
    proc_close($process);
}
echo "Summary: $passes passed, " . count($failures) . " failed. Fixture: $fixture\n";
exit($failures === [] ? 0 : 1);
