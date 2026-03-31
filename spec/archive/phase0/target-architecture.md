# Target 1.0 Architecture

- PHP remains runtime/bootstrap/router/API/auth/storage layer
- Main live control-plane route becomes `/admin`
- Public published root becomes `/`
- Public staging root becomes `/staging`
- Admin/control-plane UI moves into Svelte custom elements delivered through thin PHP hosts
- Public site delivery resolves through logical path lookup, manifest/chunk reads, decrypt-on-serve
- Published and staging roots are tenant-owned logical roots with tenant-scoped visibility and editing
- Delete model becomes tombstone plus restore plus manual GC
- Search/facets/products become schema-driven and move closer to the original LSM/Bloom intent
- Raw low-level storage inspection remains more restricted than current broad raw entitlement access
