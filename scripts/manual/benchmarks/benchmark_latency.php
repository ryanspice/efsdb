<?php
declare(strict_types=1);

$url = $argv[1] ?? 'http://127.0.0.1:8787/';
$iterations = max(1, (int)($argv[2] ?? 5));

for ($i = 0; $i < $iterations; $i++) {
    $start = microtime(true);
    $response = @file_get_contents($url);
    $end = microtime(true);
    if ($response !== false) {
        echo 'Iteration ' . ($i + 1) . ': ' . round(($end - $start) * 1000, 2) . " ms\n";
        continue;
    }

    echo 'Iteration ' . ($i + 1) . ": Failed\n";
}
