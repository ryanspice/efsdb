# Extension Types

This registry defines the canonical `Extension Type` identifiers for the EFSDB Envelope Header.
Extensions are critical if their MSB is 1, and advisory if their MSB is 0.

| ID     | Hex    | Critical? | Name       | Description                                              | Status         |
| :----- | :----- | :-------- | :--------- | :------------------------------------------------------- | :------------- |
| `1`    | `0x01` | No        | Tenant-ID  | Advisory tenant isolation marker.                        | Draft (Blocked)|
| `129`  | `0x81` | Yes       | Commit-Ref | Critical commit dependency pointer.                      | Draft (Blocked)|

*Note: Extensions are blocked pending the [Extension Model Sub-spec](../envelope-extensions-subspec.md) detailing encoding rules, passthrough behavior, and rewrite semantics.*
