# web/contracts

## Contract Ownership

- `*.ts` files are the authoritative typed payload contracts consumed by the web apps.
- `*.md` files are for behavioral rules, access policy, and route expectations that are not fully expressible in TypeScript alone.

## Scope

- shared contracts
- shared types
- payload expectations
- route and delivery behavior notes that remain active

## Out Of Scope

- PHP host files
- rendered views
- runtime seams
- archived migration plans

For the detailed auth model, use [`spec/auth-contract.md`](../../spec/auth-contract.md).
