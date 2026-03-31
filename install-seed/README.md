# Install Seed

Files in this directory are copied into the EFSDB public workspace on first bootstrap when the target environment does not already have a homepage route.

Current seed surface:

- `public-workspace/routes/index.php`
- `public-workspace/components/homepage-placeholder.php`

`PublicWorkspace` applies the same seed files to both `staging` and `production` the first time each root is initialized. Edit these files if you want a different starter experience on fresh installs.
