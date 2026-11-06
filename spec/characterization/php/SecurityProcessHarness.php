<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

/** Bounded independent PHP workers; all data and receipts stay in the owned temp directory. */
final class SecurityProcessHarness
{
    /** @return array{process:resource,output:string,error:string,ready:string} */
    public static function start(string $script, string $dir, string $mode, int $id): array
    {
        $command = [PHP_BINARY];
        if (php_ini_loaded_file() !== false) {
            $command = array_merge($command, ['-c', php_ini_loaded_file()]);
        }
        $command = array_merge($command, [$script, '--worker', $dir, $mode, (string)$id]);
        $output = "$dir/worker-$mode-$id.out";
        $error = "$dir/worker-$mode-$id.err";
        $process = proc_open($command, [0 => ['pipe', 'r'], 1 => ['file', $output, 'w'], 2 => ['file', $error, 'w']], $pipes, null, null, ['bypass_shell' => true]);
        if ($process === false) {
            throw new RuntimeException('Unable to start security worker');
        }
        fclose($pipes[0]);
        return ['process' => $process, 'output' => $output, 'error' => $error, 'ready' => "$dir/ready-$mode-$id"];
    }

    public static function waitForFile(string $path): void
    {
        $deadline = microtime(true) + 25;
        do {
            clearstatcache(true, $path);
            if (is_file($path)) {
                return;
            }
            usleep(10000);
        } while (microtime(true) < $deadline);
        throw new RuntimeException('Security worker barrier timed out: ' . basename($path));
    }

    public static function barrier(string $dir, string $mode, int $id): void
    {
        file_put_contents("$dir/ready-$mode-$id", 'ready');
        self::waitForFile("$dir/go-$mode");
    }

    /** @param list<array{process:resource,output:string,error:string,ready:string}> $workers */
    public static function release(array $workers, string $dir, string $mode): void
    {
        foreach ($workers as $worker) {
            self::waitForFile($worker['ready']);
        }
        file_put_contents("$dir/go-$mode", 'go');
    }

    /** @return array<string,mixed> */
    public static function collect(array $worker): array
    {
        $deadline = microtime(true) + 25;
        do {
            $status = proc_get_status($worker['process']);
            if (!$status['running']) {
                $closeCode = proc_close($worker['process']);
                $exitCode = $status['exitcode'] >= 0 ? $status['exitcode'] : $closeCode;
                $error = trim((string)file_get_contents($worker['error']));
                if ($exitCode !== 0 || $error !== '') {
                    throw new RuntimeException("Security worker failed ($exitCode): $error");
                }
                $result = json_decode((string)file_get_contents($worker['output']), true, 512, JSON_THROW_ON_ERROR);
                if (!is_array($result)) {
                    throw new RuntimeException('Security worker returned an invalid receipt');
                }
                return $result;
            }
            usleep(10000);
        } while (microtime(true) < $deadline);
        self::stop($worker);
        throw new RuntimeException('Security worker timed out');
    }

    public static function stop(array $worker): void
    {
        if (!is_resource($worker['process'])) {
            return;
        }
        $status = proc_get_status($worker['process']);
        if ($status['running']) {
            proc_terminate($worker['process']);
        }
        proc_close($worker['process']);
    }
}
