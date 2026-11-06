<?php
declare(strict_types=1);

/** Validate component inputs before any network, extraction, or workspace writes. */
final class ComponentMutationPolicy
{
    public const MAX_ARCHIVE_BYTES = 16777216;
    private const MAX_FILES = 2048;
    private const MAX_FILE_BYTES = 8388608;
    private const MAX_EXPANDED_BYTES = 67108864;
    private const FRAMEWORKS = ['sveltekit', 'svelte', 'react', 'angular'];

    public static function environment(string $environment): string
    {
        if (!in_array($environment, ['staging', 'production'], true)) {
            throw new InvalidArgumentException('Unknown component environment');
        }
        return $environment;
    }

    public static function template(string $framework, string $examplesRoot): string
    {
        if (!in_array($framework, self::FRAMEWORKS, true)) {
            throw new InvalidArgumentException('Unknown component framework');
        }
        $root = realpath($examplesRoot);
        $path = realpath($examplesRoot . '/' . $framework);
        if ($root === false || $path === false || !is_dir($path) || is_link($examplesRoot . '/' . $framework)
            || !str_starts_with(str_replace('\\', '/', $path), str_replace('\\', '/', $root) . '/')) {
            throw new InvalidArgumentException('Component template is unavailable or outside the examples directory');
        }
        self::validateTree($path, true);
        return $path;
    }

    public static function githubArchiveUrl(string $url, string $branch): string
    {
        if (!preg_match('#^https://github\.com/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+?)(?:\.git)?/?$#D', $url, $matches)
            || in_array($matches[1], ['.', '..'], true) || in_array($matches[2], ['.', '..'], true)) {
            throw new InvalidArgumentException('Expected an HTTPS GitHub owner/repository URL');
        }
        return 'https://github.com/' . $matches[1] . '/' . $matches[2] . '/archive/refs/heads/' . $branch . '.zip';
    }

    public static function validateTree(string $root, bool $template = false): void
    {
        $count = 0;
        $total = 0;
        $directory = new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS);
        $filtered = new RecursiveCallbackFilterIterator($directory, static fn(SplFileInfo $file): bool => !$template || $file->getFilename() !== 'node_modules');
        $iterator = new RecursiveIteratorIterator($filtered);
        $canonicalRoot = str_replace('\\', '/', realpath($root) ?: $root) . '/';
        foreach ($iterator as $file) {
            if ($file->isLink() || !$file->isFile() || !str_starts_with(str_replace('\\', '/', $file->getRealPath() ?: ''), $canonicalRoot)) {
                throw new InvalidArgumentException('Component links and special files are not allowed');
            }
            self::checkBudget(++$count, (int)$file->getSize(), $total);
        }
    }

    public static function extract(string $archive, string $destination, bool $tar): void
    {
        if (!is_file($archive) || filesize($archive) > self::MAX_ARCHIVE_BYTES) {
            throw new InvalidArgumentException('Component archive exceeds the compressed size limit');
        }
        $entries = [];
        $total = 0;
        $zip = null;
        if (!$tar) {
            $zip = new ZipArchive();
            if ($zip->open($archive) !== true) {
                throw new InvalidArgumentException('Failed to open component ZIP archive');
            }
            try {
                for ($index = 0; $index < $zip->numFiles; $index++) {
                    $stat = $zip->statIndex($index);
                    if (!is_array($stat)) {
                        throw new InvalidArgumentException('Invalid ZIP entry');
                    }
                    $name = self::entryPath((string)$stat['name']);
                    $opsys = $attributes = 0;
                    $zip->getExternalAttributesIndex($index, $opsys, $attributes);
                    $type = ($attributes >> 16) & 0170000;
                    if ($type !== 0 && !in_array($type, [0100000, 0040000], true)) {
                        throw new InvalidArgumentException('Archive links and special files are not allowed');
                    }
                    $directory = str_ends_with((string)$stat['name'], '/');
                    self::checkBudget(count($entries) + 1, (int)$stat['size'], $total);
                    if (isset($entries[$name])) {
                        throw new InvalidArgumentException('Duplicate component archive entry');
                    }
                    $entries[$name] = ['directory' => $directory, 'size' => (int)$stat['size'], 'source' => (string)$stat['name']];
                }
                self::writeEntries($entries, $destination, static fn(string $name) => $zip->getStream($name));
            } finally {
                $zip->close();
            }
        } else {
            self::preflightTar($archive);
            $phar = new PharData($archive);
            $prefix = 'phar://' . str_replace('\\', '/', realpath($archive) ?: $archive) . '/';
            foreach (new RecursiveIteratorIterator($phar, RecursiveIteratorIterator::SELF_FIRST) as $entry) {
                $source = str_replace('\\', '/', $entry->getPathname());
                if (!str_starts_with($source, $prefix) || $entry->isLink() || (!$entry->isDir() && !$entry->isFile())) {
                    throw new InvalidArgumentException('Archive links and special files are not allowed');
                }
                $name = self::entryPath(substr($source, strlen($prefix)));
                self::checkBudget(count($entries) + 1, (int)$entry->getSize(), $total);
                $entries[$name] = ['directory' => $entry->isDir(), 'size' => (int)$entry->getSize(), 'source' => $source];
            }
            self::writeEntries($entries, $destination, static fn(string $name) => fopen($name, 'rb'));
        }
        self::validateTree($destination);
    }

    /** Bound gzip expansion before Phar opens it, and reject TAR link types. */
    private static function preflightTar(string $archive): void
    {
        $stream = gzopen($archive, 'rb');
        if ($stream === false) {
            throw new InvalidArgumentException('Unable to inspect component TAR archive');
        }
        $expanded = 0;
        $read = static function (int $length) use ($stream, &$expanded): string {
            $bytes = '';
            while (strlen($bytes) < $length && !gzeof($stream)) {
                $part = gzread($stream, min(8192, $length - strlen($bytes)));
                if ($part === false || $part === '') break;
                $expanded += strlen($part);
                if ($expanded > self::MAX_EXPANDED_BYTES + self::MAX_FILES * 1024) {
                    throw new InvalidArgumentException('Component TAR exceeds the expanded size limit');
                }
                $bytes .= $part;
            }
            return $bytes;
        };
        try {
            $count = 0;
            while (($header = $read(512)) !== '') {
                if (strlen($header) !== 512) throw new InvalidArgumentException('Truncated TAR header');
                if ($header === str_repeat("\0", 512)) break;
                $type = $header[156];
                if (!in_array($type, ["\0", '0', '5', 'x', 'g', 'L'], true) || ++$count > self::MAX_FILES) {
                    throw new InvalidArgumentException('TAR links, special files or excessive entries are not allowed');
                }
                $sizeField = trim(substr($header, 124, 12), " \0");
                if (!preg_match('/^[0-7]+$/', $sizeField)) throw new InvalidArgumentException('Invalid TAR size');
                $size = (int)octdec($sizeField);
                if ($size > self::MAX_FILE_BYTES) throw new InvalidArgumentException('TAR entry exceeds the file size limit');
                $remaining = (int)(ceil($size / 512) * 512);
                while ($remaining > 0) {
                    $chunk = $read(min(8192, $remaining));
                    if ($chunk === '') throw new InvalidArgumentException('Truncated TAR payload');
                    $remaining -= strlen($chunk);
                }
            }
            // Phar may decompress the entire stream, including trailing blocks.
            while ($read(8192) !== '') {}
        } finally {
            gzclose($stream);
        }
    }

    private static function entryPath(string $name): string
    {
        if ($name === '' || str_contains($name, "\0") || str_contains($name, ':') || str_contains($name, '\\') || str_starts_with($name, '/')) {
            throw new InvalidArgumentException('Invalid component archive path');
        }
        $name = rtrim($name, '/');
        foreach (explode('/', $name) as $segment) {
            if ($segment === '' || $segment === '.' || $segment === '..'
                || preg_match('/[<>:"|?*\x00-\x1f]/', $segment)
                || preg_match('/[. ]$/', $segment)
                || preg_match('/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i', $segment)) {
                throw new InvalidArgumentException('Invalid component archive path');
            }
        }
        return $name;
    }

    private static function checkBudget(int $count, int $size, int &$total): void
    {
        $total += $size;
        if ($count > self::MAX_FILES || $size < 0 || $size > self::MAX_FILE_BYTES || $total > self::MAX_EXPANDED_BYTES) {
            throw new InvalidArgumentException('Component files exceed the extraction limits');
        }
    }

    private static function writeEntries(array $entries, string $destination, callable $open): void
    {
        $canonicalDestination = realpath($destination);
        if ($canonicalDestination === false || is_link($destination)) {
            throw new InvalidArgumentException('Invalid component extraction directory');
        }
        $canonicalDestination = str_replace('\\', '/', $canonicalDestination);
        foreach ($entries as $name => $entry) {
            $path = $destination . '/' . $name;
            $parent = $entry['directory'] ? $path : dirname($path);
            if (!is_dir($parent) && !mkdir($parent, 0700, true) && !is_dir($parent)) {
                throw new RuntimeException('Unable to create component extraction directory');
            }
            $canonicalParent = realpath($parent);
            $canonicalParent = $canonicalParent === false ? '' : str_replace('\\', '/', $canonicalParent);
            if ($canonicalParent !== $canonicalDestination && !str_starts_with($canonicalParent, $canonicalDestination . '/')) {
                throw new InvalidArgumentException('Component archive path escapes the extraction directory');
            }
            $walk = $destination;
            foreach (explode('/', $name) as $segment) {
                $walk .= '/' . $segment;
                if (is_link($walk)) throw new InvalidArgumentException('Component extraction paths must not contain links');
            }
            if ($entry['directory']) {
                continue;
            }
            $input = $open($entry['source']);
            $output = fopen($path, 'xb');
            if (!is_resource($input) || !is_resource($output)) {
                if (is_resource($input)) fclose($input);
                if (is_resource($output)) fclose($output);
                throw new RuntimeException('Unable to extract component file');
            }
            try {
                $copied = stream_copy_to_stream($input, $output, $entry['size'] + 1);
                if ($copied !== $entry['size']) {
                    throw new InvalidArgumentException('Component archive size mismatch');
                }
            } finally {
                fclose($input);
                fclose($output);
            }
        }
    }

    public static function removeTemporaryDirectory(string $directory): void
    {
        if (is_link($directory)) {
            unlink($directory);
        } elseif (is_dir($directory)) {
            foreach (new FilesystemIterator($directory, FilesystemIterator::SKIP_DOTS) as $entry) {
                self::removeTemporaryDirectory($entry->getPathname());
            }
            rmdir($directory);
        } elseif (is_file($directory)) {
            unlink($directory);
        }
    }
}
