#!/usr/bin/env bash
set -euo pipefail

# Build only in a fresh directory owned by this checkout. Never reuse a module
# from another PHP lane: phpize, php-config and the runtime must agree.
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
evidence_root="$repo_root/.ai/evidence/ci"
source_root="$repo_root/efsdb/php/core/ext/blake3-src"
mkdir -p "$evidence_root"

php_version="$(php -n -r 'echo PHP_VERSION;')"
config_version="$(php-config --version)"
if [[ "$php_version" != "$config_version" ]]; then
  printf 'PHP runtime (%s) and php-config (%s) differ.\n' "$php_version" "$config_version" >&2
  exit 1
fi
php -n "$repo_root/scripts/check-php-runtime.php"
build_root="$(mktemp -d "$evidence_root/blake3-build.XXXXXX")"
cp "$source_root"/config.m4 "$source_root"/*.c "$source_root"/*.h "$source_root"/*.S "$build_root/"
cd "$build_root"
phpize
./configure --enable-blake3 --with-php-config="$(command -v php-config)"
make -j2
module="$build_root/modules/blake3.so"
test -s "$module"

# Loading the compiled module proves that this runtime accepts its ABI.
php -n -d "extension=$module" "$repo_root/scripts/ci-check-blake3.php"
{
  printf 'PHP version: %s\n' "$php_version"
  phpize --version
  php -n -r 'echo "PHP ZTS: ", PHP_ZTS, PHP_EOL, "PHP integer size: ", PHP_INT_SIZE, PHP_EOL;'
  sha256sum "$module"
} > "$evidence_root/blake3-build.txt"

if [[ -n "${GITHUB_ENV:-}" ]]; then
  printf 'EFSDB_PHP_BLAKE3_EXTENSION=%s\n' "$module" >> "$GITHUB_ENV"
else
  printf 'EFSDB_PHP_BLAKE3_EXTENSION=%s\n' "$module"
fi
