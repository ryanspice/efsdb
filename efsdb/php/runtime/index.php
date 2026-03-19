<?php
declare(strict_types=1);

require_once __DIR__ . '/Efsdb.php';

// Production Runtime Entry Point
// Serves files from EFSDB

$cfg = Efsdb\Config::fromEnv(__DIR__);
$runtime = Efsdb\CorePublicRuntime::boot($cfg);
$runtime->handle(
    parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/',
    $_SERVER['REQUEST_METHOD'] ?? 'GET'
);
