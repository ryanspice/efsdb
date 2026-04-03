#!/usr/bin/env sh
set -eu

image_tag="efsdb-blake3-build:ubuntu-24.04"
container_name="efsdb-blake3-build-copy"

mkdir -p ./compiled
docker build --pull=false --tag "${image_tag}" .
docker rm -f "${container_name}" >/dev/null 2>&1 || true
docker create --name "${container_name}" "${image_tag}" >/dev/null
docker cp "${container_name}:/making/compiled/blake3.so" ./compiled/blake3.so
docker rm "${container_name}" >/dev/null
