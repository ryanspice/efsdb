import { defineConfig } from 'vite'
import path from 'path'

const componentName = path.basename(process.cwd());
const basePath = process.env.EFSDB_BASE_PATH || '';

// https://vite.dev/config/
export default defineConfig({
  base: `${basePath}/components/${componentName}/dist/`,
})