# EFSDB intent

## Purpose

Give developers an inspectable encrypted storage foundation and a PHP-hosted workspace for managing documents, building sites, and understanding how the pieces interact. The public repository should show the problem, architecture, working example, engineering evidence, and limits within a few minutes.

## Product boundaries

PHP is the current application host and storage reference. Rust is a separate conformance/integration surface. Svelte applications consume typed contracts. Staging and production delivery must respect the same authorization policy as storage. SvelteKit PHP integration currently accepts imported static-prerender output.

Preserve active specifications in `spec/`, especially the frozen envelope and authentication semantics. Repository metadata is additive; `repo.schema.json` does not replace application data, API, encryption, or parser schemas.

## Priorities

1. Verify patched serving runtimes and close authorization/disclosure issues.
2. Prove bootstrap/token rotation with concurrent workers before PHP-FPM acceptance.
3. Update vulnerable frontend/build dependencies in compatible increments.
4. Make agent entry, ownership, useful commits, and handoff repeatable.
5. Present a credible GitHub project with an understandable demo and evidence.

The [modernization plan](docs/MODERNIZATION.md) defines work IDs, owners, dependencies, and acceptance gates. It is a proposed queue, not blanket deployment/publication authority.

## Repository metadata

This JSON block is the `intent` instance for `repo.schema.json`. Refresh the review date and commit when the baseline changes. Execution receipts belong in the active harness or ignored runtime output; promote only sanitized durable evidence into source control.

```json
{
  "schemaVersion": "1.0.0",
  "kind": "intent",
  "repository": "ryanspice/efsdb",
  "reviewedAt": "2026-10-23",
  "baselineCommit": "f060badc12c28558b80574b96b2c1ce18e1ed683",
  "status": "experimental",
  "purpose": "Encrypted file storage and a PHP-hosted workspace with explicit format, authorization, and conformance boundaries.",
  "entrypoints": ["README.md", "AGENTS.md", "spec/CURRENT_STATE.md", "docs/MODERNIZATION.md"],
  "sourceRoots": ["efsdb/php/core", "efsdb-core", "web", "spec"],
  "invariants": ["Frozen envelope and canonical result contract", "Tenant and role authorization before all delivery paths", "Static-prerender scope for imported SvelteKit output"],
  "verificationCommands": ["bun run check", "bun run web:typecheck", "bun run web:test:ui"],
  "releaseGates": ["Source security fixes", "Patched runtime and BLAKE3 ABI proof", "Concurrent-worker acceptance", "Independent review", "Hosted proof", "Owner publication authority"],
  "presentation": {
    "description": "Encrypted file storage with canonical manifests, a PHP runtime, and a Svelte workspace for exploring and publishing content.",
    "topics": ["php", "svelte", "encrypted-storage", "filesystem", "rust", "developer-tools"],
    "profilePitch": "EFSDB — encrypted storage and a browser workspace, with explicit format contracts and PHP/Rust conformance checks."
  }
}
```

## A useful contribution

A reader can identify the changed behavior, why it matters, source paths, how it was checked, and remaining limits. Leave a small patch, a meaningful regression check when needed, and a receipt another agent can resume without rebuilding conversation history.

## GitHub presentation target

Use EFSDB consistently; PHPFS is the local/historical workspace name. Keep the first screen focused on purpose and the demo. After browser acceptance, add a sanitized Explorer/Builder screenshot and a short write → inspect → publish capture, with alt text. Use badges only for real workflows/releases and the claims they prove.

Place EFSDB near `sveltekit-php` and `agent-skills` on the profile to connect storage, deployment, and workflow. The October 23 public profile already pins those two projects; EFSDB was not among the six visible pins. About text, topics, pinning and social preview are proposed remote actions. No profile README was retrieved at `ryanspice/ryanspice/README.md` (API 404); this is a retrieval limit, not proof one cannot exist.
