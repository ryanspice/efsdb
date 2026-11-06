# Object Types

This registry defines the canonical `Object Type` identifiers used in the EFSDB Envelope Header.

| ID     | Name  | Description                                        |
| :----- | :---- | :------------------------------------------------- |
| `0x01` | Chunk | Raw file data slice.                               |
| `0x02` | Blob  | Logical file manifest (array of chunk hashes).     |
| `0x03` | Tree  | Directory manifest (map of names to blob/tree hashes). |
