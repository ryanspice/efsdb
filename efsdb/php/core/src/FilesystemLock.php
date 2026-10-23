<?php
declare(strict_types=1);

/** Process-shared locks for coordinated mutations on one local data directory. */
final class FilesystemLock
{
    /**
     * Lock files are deliberately retained: unlinking one could let waiters lock
     * different inodes for the same resource. Every participant must use this lock.
     *
     * @template T
     * @param callable(): T $operation
     * @return T
     */
    public static function exclusive(string $dataDir, string $resource, callable $operation): mixed
    {
        $lockDir = rtrim($dataDir, '/\\') . '/.locks';
        if (!is_dir($lockDir) && !@mkdir($lockDir, 0700, true) && !is_dir($lockDir)) {
            throw new RuntimeException('Unable to create data lock directory');
        }

        $path = $lockDir . '/' . hash('sha256', $resource) . '.lock';
        $handle = @fopen($path, 'c+b');
        if ($handle === false) {
            throw new RuntimeException('Unable to open data lock');
        }

        try {
            if (!chmod($path, 0600) || !flock($handle, LOCK_EX)) {
                throw new RuntimeException('Unable to acquire data lock');
            }

            // Another worker may have created/replaced files while we waited.
            clearstatcache();
            return $operation();
        } finally {
            flock($handle, LOCK_UN);
            fclose($handle);
        }
    }
}
