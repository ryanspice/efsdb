<?php

$root = dirname(__DIR__, 2);
$script = $root . DIRECTORY_SEPARATOR . 'generate_fixtures.py';

if (!is_file($script)) {
    fwrite(STDERR, "Missing canonical generator: {$script}\n");
    exit(1);
}

$commands = [
    'python ' . escapeshellarg($script),
    'py -3 ' . escapeshellarg($script),
];

foreach ($commands as $command) {
    passthru($command, $exitCode);
    if ($exitCode === 0) {
        exit(0);
    }
}

fwrite(STDERR, "Fixture generation failed. Use the canonical generator at {$script}.\n");
exit(1);
