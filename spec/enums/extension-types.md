# Extension Types

This registry defines the canonical `Extension Type` identifiers for the EFSDB Envelope Header.
Extensions are critical if their MSB is 1, and advisory if their MSB is 0.

| Wire ID | Critical? | Name        | Description                                   | Status |
| :------ | :-------- | :---------- | :-------------------------------------------- | :----- |
| `0x01`  | No        | Key-ID      | Advisory key selector for AEAD suites.        | Draft |
| `0x02`  | No        | Timestamp   | Advisory creation timestamp as `u64 LE`.      | Draft |
| `0x81`  | Yes       | Compression | Critical payload transform marker.            | Reserved, unsupported |

*Note: Extension wire IDs are one byte wide. Criticality is encoded in the high bit of the wire ID, and unsupported critical extensions must fail with `ERR_UNSUPPORTED_CRITICAL_EXTENSION`.*
