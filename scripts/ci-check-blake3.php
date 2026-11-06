<?php
declare(strict_types=1);

if (!function_exists('blake3') || !in_array('blake3', hash_algos(), true)) {
    fwrite(STDERR, "Native BLAKE3 and its hash API registration are required.\n");
    exit(1);
}

$vectors = [
    '' => 'af1349b9f5f9a1a6a0404dea36dcc9499bcb25c9adc112b7cc9a93cae41f3262',
    'abc' => '6437b3ac38465133ffb63b75273a8db548c558465d79db03fd359c6cd5bd9d85',
];
$checks = 0;
foreach ($vectors as $input => $expected) {
    foreach (['direct' => blake3($input), 'hash' => hash('blake3', $input)] as $api => $actual) {
        if ($actual !== $expected) {
            throw new RuntimeException($api . ' BLAKE3 known vector mismatch');
        }
        $checks++;
    }
    if (bin2hex(hash('blake3', $input, true)) !== $expected) {
        throw new RuntimeException('Binary hash output differs from the known vector');
    }
    $checks++;
}

$input = str_repeat("BLAKE3 binary\0fixture\xff", 256);
$expected = blake3($input);
$context = hash_init('blake3');
hash_update($context, substr($input, 0, 1031));
$copy = hash_copy($context);
hash_update($context, substr($input, 1031));
hash_update($copy, substr($input, 1031));
if (hash_final($context) !== $expected || hash_final($copy) !== $expected) {
    throw new RuntimeException('Incremental or copied hash context differs from direct BLAKE3');
}
$checks += 2;

echo json_encode([
    'passed' => true,
    'phpVersion' => PHP_VERSION,
    'checks' => $checks,
    'apis' => ['blake3', 'hash', 'hash_init', 'hash_update', 'hash_copy', 'hash_final'],
], JSON_THROW_ON_ERROR), PHP_EOL;
