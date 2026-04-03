# Fixtures Directory

**IMPORTANT**: `tests/fixtures/` is the canonical parity source.

`tests/fixtures/` is the canonical parity source. `efsdb/php/core/public/fixtures/` is a generated demo mirror for showcase/explorer use.

Do not manually edit the `.bin` files here. Instead, generate them at the root level using the python script, which will automatically update both locations.

You can use the following command to sync/regenerate them:
```bash
python generate_fixtures.py
```
