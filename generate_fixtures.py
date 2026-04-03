import json
from pathlib import Path
import os
import struct

import blake3

repo_root = Path(__file__).resolve().parent
fixtures_dir = repo_root / "tests" / "fixtures"
public_fixtures_dir = repo_root / "efsdb" / "php" / "core" / "public" / "fixtures"

os.makedirs(fixtures_dir, exist_ok=True)
os.makedirs(public_fixtures_dir, exist_ok=True)

payload = b"Hello, EFSDB!"
payload_len = struct.pack("<Q", len(payload))
magic = b"EFS"
version = b"\x00"
header_length_bytes = struct.pack("<H", 16)
type_chunk = b"\x01"
flags = b"\x00"
suite_blake3 = b"\x01"
reserved = b"\x00" * 7
suite_unknown = b"\x99"
valid_header = magic + version + header_length_bytes + type_chunk + flags + suite_blake3 + reserved + payload_len
checksum = blake3.blake3(valid_header + payload).digest()
flags_with_ext_and_critical = b"\x03"
header_length_ext_bytes = struct.pack("<H", 24)
reserved_ext = b"\x00" * 7
ext_critical = b"\x81" + struct.pack("<H", 5) + b"12345"
header_with_critical_ext = magic + version + header_length_ext_bytes + type_chunk + flags_with_ext_and_critical + suite_blake3 + reserved_ext + ext_critical + payload_len
checksum_critical = blake3.blake3(header_with_critical_ext + payload).digest()
ext_malformed = b"\x01" + struct.pack("<H", 50) + b"12345"
header_malformed_ext = magic + version + header_length_ext_bytes + type_chunk + flags_with_ext_and_critical + suite_blake3 + reserved_ext + ext_malformed + payload_len
checksum_malformed = blake3.blake3(header_malformed_ext + payload).digest()

aead_nonce = bytes.fromhex("bbbbbbbbbbbbbbbbbbbbbbbb")
aead_ciphertext = bytes.fromhex("187297aba9228b8fb76676af9e6b74910e9f943d2e6807")
aead_tag = bytes.fromhex("cb96f6a2dea3ddc7fcbf3a4fa0a1dedc")
aead_payload_length = struct.pack("<Q", len(aead_nonce) + len(aead_ciphertext))
suite_chacha20_poly1305 = b"\x02"
aead_header = magic + version + header_length_bytes + type_chunk + flags + suite_chacha20_poly1305 + reserved + aead_payload_length
aead_valid = aead_header + aead_nonce + aead_ciphertext + aead_tag
aead_tampered_aad_header = magic + version + header_length_bytes + type_chunk + flags + suite_chacha20_poly1305 + b"\x01" + (b"\x00" * 6) + aead_payload_length
aead_tampered_aad = aead_tampered_aad_header + aead_nonce + aead_ciphertext + aead_tag
aead_tampered_tag = aead_header + aead_nonce + aead_ciphertext + aead_tag[:-1] + b"\xdd"
aead_truncated = aead_valid[:-1]
aead_trailing_garbage = aead_valid + b"\x00"

fixtures = {
    "01_valid_blake3.bin": valid_header + payload + checksum,
    "02_err_invalid_magic.bin": b"BAD\x00" + valid_header[4:] + payload + checksum,
    "03_err_unsupported_version.bin": magic + b"\x01" + valid_header[4:] + payload + blake3.blake3(magic + b"\x01" + valid_header[4:] + payload).digest(),
    "04_err_truncated_header.bin": valid_header[:10],
    "05_err_unsupported_suite.bin": magic + version + header_length_bytes + type_chunk + flags + suite_unknown + reserved + payload_len + payload + blake3.blake3(magic + version + header_length_bytes + type_chunk + flags + suite_unknown + reserved + payload_len + payload).digest(),
    "06_err_checksum_mismatch.bin": valid_header + b"Hello, CORRUP" + checksum,
    "07_err_truncated_payload.bin": valid_header + payload[:5] + checksum,
    "08_err_invalid_header_alignment.bin": magic + version + struct.pack("<H", 17) + type_chunk + flags + suite_blake3 + reserved + b"\x00" + payload_len + payload + blake3.blake3(magic + version + struct.pack("<H", 17) + type_chunk + flags + suite_blake3 + reserved + b"\x00" + payload_len + payload).digest(),
    "09_err_trailing_garbage.bin": valid_header + payload + checksum + b"GARBAGE",
    "10_err_unsupported_critical_ext.bin": header_with_critical_ext + payload + checksum_critical,
    "11_err_invalid_header_malformed_ext.bin": header_malformed_ext + payload + checksum_malformed,
    "12_valid_chacha20_poly1305.bin": aead_valid,
    "13_err_aead_aad_mismatch.bin": aead_tampered_aad,
    "14_err_aead_tag_mismatch.bin": aead_tampered_tag,
    "15_err_aead_truncated_payload.bin": aead_truncated,
    "16_err_aead_trailing_garbage.bin": aead_trailing_garbage,
}

expected_results = {
    "01_valid_blake3.bin": {
        "ok": True,
        "type": 1,
        "flags": 0,
        "suite": 1,
        "header_length": 16,
        "payload_length": len(payload),
        "extensions": [],
    },
    "02_err_invalid_magic.bin": {"ok": False, "error": "ERR_INVALID_MAGIC"},
    "03_err_unsupported_version.bin": {"ok": False, "error": "ERR_UNSUPPORTED_VERSION"},
    "04_err_truncated_header.bin": {"ok": False, "error": "ERR_TRUNCATED_HEADER"},
    "05_err_unsupported_suite.bin": {"ok": False, "error": "ERR_UNSUPPORTED_SUITE"},
    "06_err_checksum_mismatch.bin": {"ok": False, "error": "ERR_CHECKSUM_MISMATCH"},
    "07_err_truncated_payload.bin": {"ok": False, "error": "ERR_TRUNCATED_PAYLOAD"},
    "08_err_invalid_header_alignment.bin": {"ok": False, "error": "ERR_INVALID_HEADER"},
    "09_err_trailing_garbage.bin": {"ok": False, "error": "ERR_TRAILING_GARBAGE"},
    "10_err_unsupported_critical_ext.bin": {"ok": False, "error": "ERR_UNSUPPORTED_CRITICAL_EXTENSION"},
    "11_err_invalid_header_malformed_ext.bin": {"ok": False, "error": "ERR_INVALID_HEADER"},
    "12_valid_chacha20_poly1305.bin": {
        "ok": True,
        "type": 1,
        "flags": 0,
        "suite": 2,
        "header_length": 16,
        "payload_length": 35,
        "extensions": [],
    },
    "13_err_aead_aad_mismatch.bin": {"ok": False, "error": "ERR_CHECKSUM_MISMATCH"},
    "14_err_aead_tag_mismatch.bin": {"ok": False, "error": "ERR_CHECKSUM_MISMATCH"},
    "15_err_aead_truncated_payload.bin": {"ok": False, "error": "ERR_TRUNCATED_PAYLOAD"},
    "16_err_aead_trailing_garbage.bin": {"ok": False, "error": "ERR_TRAILING_GARBAGE"},
}

print("tests/fixtures/ is the canonical parity source.")
print("efsdb/php/core/public/fixtures/ is a generated demo mirror for showcase/explorer use.")

for filename, data in fixtures.items():
    (fixtures_dir / filename).write_bytes(data)
    (public_fixtures_dir / filename).write_bytes(data)
    print(f"Generated {filename}")

(fixtures_dir / "expected_results.json").write_text(
    json.dumps(expected_results, indent=4) + "\n",
    encoding="utf-8",
)

print("Done generating fixtures.")
