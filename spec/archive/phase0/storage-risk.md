# Storage Risk Table

| Risk area | Current behavior | Consequence |
| --- | --- | --- |
| same-id overwrite | repeated writes to the same id replace the same manifest path | latest manifest body becomes the only visible state for that id |
| duplicate logicalPath ambiguity | multiple ids can share the same logical path | path lookup can resolve to the first scanned manifest instead of a unique logical file |
| stale lookup residue | old lookup files remain on disk after indexed values change | storage residue accumulates, although read paths revalidate documents and reject stale hits |
| manifest/chunk crash ordering | chunks are written before the manifest, and lookups are written after the manifest | chunk orphans are possible before manifest rename; manifest-visible state can lead lookup-visible state after manifest rename |
| current atomicity boundary | temp-write plus rename is used per file, not across the full update set | there is no transaction spanning chunks, manifests, and lookup files |

Measured current behavior:
- same-id overwrite is live
- duplicate logicalPath ambiguity is live
- stale lookup residue is live
- stale lookups are mitigated by document revalidation in the read path
