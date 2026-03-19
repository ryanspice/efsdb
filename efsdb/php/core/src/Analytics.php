<?php
declare(strict_types=1);

final class Analytics {
    public function __construct(string $dataDir) {}
    public function logRequest($method, $uri, $uid, $duration, $bytes) {}
}
