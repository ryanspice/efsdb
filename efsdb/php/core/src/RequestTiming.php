<?php
declare(strict_types=1);

require_once __DIR__ . '/Config.php';

final class RequestTiming
{
    private static ?self $current = null;

    /**
     * @var array<string,float>
     */
    private array $durations = [];

    private float $startedAt;
    private bool $emitted = false;

    private function __construct()
    {
        $this->startedAt = microtime(true);
    }

    public static function install(): self
    {
        return self::$current ??= new self();
    }

    public static function current(): ?self
    {
        return self::$current;
    }

    /**
     * @template T
     * @param callable():T $callback
     * @return T
     */
    public function measure(string $name, callable $callback): mixed
    {
        $startedAt = microtime(true);

        try {
            return $callback();
        } finally {
            $this->addDuration($name, (microtime(true) - $startedAt) * 1000);
        }
    }

    public function addDuration(string $name, float $durationMs): void
    {
        if ($durationMs < 0) {
            return;
        }

        $this->durations[$name] = ($this->durations[$name] ?? 0.0) + $durationMs;
    }

    public function emit(): void
    {
        if ($this->emitted) {
            return;
        }

        $this->emitted = true;
        $total = (microtime(true) - $this->startedAt) * 1000;
        $this->durations['total'] ??= $total;

        // Log slow requests for the Analyze dashboard
        if ($total > 500) { // arbitrary slow threshold (500ms)
            $logDir = Config::getDataDir() . '/.ghost/slow_logs';
            if (!is_dir($logDir)) {
                @mkdir($logDir, 0777, true);
            }
            $logFile = $logDir . '/slow_requests.log';
            $logEntry = json_encode([
                'time' => date('c'),
                'uri' => $_SERVER['REQUEST_URI'] ?? '/',
                'method' => $_SERVER['REQUEST_METHOD'] ?? 'GET',
                'totalMs' => $total,
                'durations' => $this->durations
            ]) . PHP_EOL;
            @file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
        }

        if ($this->durations === [] || headers_sent()) {
            return;
        }

        $segments = [];
        foreach ($this->durations as $name => $durationMs) {
            $segments[] = sprintf('%s;dur=%.2f', $this->normalizeName($name), $durationMs);
        }

        header('Server-Timing: ' . implode(', ', $segments));
    }

    private function normalizeName(string $name): string
    {
        $normalized = strtolower(trim($name));
        $normalized = preg_replace('/[^a-z0-9_-]+/', '-', $normalized) ?? $normalized;
        return trim($normalized, '-') ?: 'metric';
    }
}
