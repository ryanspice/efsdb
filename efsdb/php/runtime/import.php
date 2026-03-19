<?php
declare(strict_types=1);

require_once __DIR__ . '/Efsdb.php';

$args = getopt('', ['src:', 'web:', 'chunk::', 'prefix:']);
$src = $args['src'] ?? null;
$web = $args['web'] ?? null;
$chunk = isset($args['chunk']) ? (int)$args['chunk'] : 262144;
$prefix = $args['prefix'] ?? '';

if (!$src || !$web) {
  fwrite(STDERR, "Missing --src or --web\n");
  exit(2);
}

$cfg = Efsdb\Config::forWebRoot($web, $chunk);
$store = new Efsdb\PageStore($cfg);

$imported = 0;

$walker = function(string $root, string $prefix = '') use (&$walker, &$imported, $store) {
  if (!is_dir($root)) return;
  $it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS));
  foreach ($it as $file) {
    /** @var SplFileInfo $file */
    if (!$file->isFile()) continue;
    $abs = $file->getPathname();
    $rel = str_replace('\\', '/', substr($abs, strlen($root)));
    if ($rel === false) continue;
    $rel = ltrim($rel, '/');

    $logical = $prefix . '/' . $rel;
    $logical = str_replace('//', '/', $logical);

    if (str_ends_with($logical, '.DS_Store') || str_ends_with($logical, 'Thumbs.db')) {
      continue;
    }

    $bytes = file_get_contents($abs);
    if ($bytes === false) continue;

    $mime = Efsdb\Http::guessMime($logical, $bytes);

    $store->putByPath('/' . ltrim($logical, '/'), $bytes, $mime);
    $imported++;

    if ($imported % 100 === 0) {
      fwrite(STDOUT, "Imported {$imported} files...\n");
    }
  }
};

if ($prefix !== '') {
  fwrite(STDOUT, "Importing client assets with prefix: {$prefix}\n");
  $walker($src, $prefix);
} else {
  fwrite(STDOUT, "Importing prerendered content from {$src}...\n");
  $walker($src, '');
}

fwrite(STDOUT, "Total imported files: {$imported}\n");
