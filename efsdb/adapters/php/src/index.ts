import type { Adapter } from '@sveltejs/kit';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'url';
import { execPhp, pushCliOption, rimraf } from './utils.js';

// Minimal options interface
export interface AdapterEfsdbPhpOptions {
  outDir?: string;
  dataDirName?: string;
  chunkSize?: number;
  runPhpImport?: boolean;
  phpBin?: string;
  phpArgs?: string[];
  clean?: boolean;
  encryptAppAssets?: boolean;
  root?: string;
  prefix?: string;
  setDeliveryMode?: boolean;
}

const defaults: AdapterEfsdbPhpOptions = {
  outDir: 'build',
  dataDirName: '.efsdb',
  chunkSize: 262144,
  runPhpImport: true,
  phpBin: 'php',
  clean: true,
  encryptAppAssets: true,
  root: 'production',
  prefix: '',
};

export default function adapterEfsdbPhp(
  opts: AdapterEfsdbPhpOptions = {}
): Adapter {
  const o = { ...defaults, ...opts };
  return {
    name: '@efsdb/adapter-php',
    async adapt(builder) {
      const outDir = o.outDir!;
      const publicDir = path.join(outDir, 'public');
      const dataDirName = o.dataDirName!;
      const dataDir = path.join(outDir, dataDirName);

      if (o.clean) rimraf(outDir);
      fs.mkdirSync(outDir, { recursive: true });

      // 1) write client assets
      const appDir = path.join(publicDir, builder.config.kit.appDir);
      let clientTmp: string | undefined;

      if (o.encryptAppAssets) {
        builder.log.minor('Preparing client assets for EFSDB import...');
        clientTmp = path.join(outDir, '.client_tmp');
        rimraf(clientTmp);
        fs.mkdirSync(clientTmp, { recursive: true });
        builder.writeClient(clientTmp);
      } else {
        builder.log.minor('Writing client assets as regular files...');
        builder.writeClient(appDir);
      }

      // 2) prerender to temp
      const tmp = path.join(outDir, '.prerendered_tmp');
      rimraf(tmp);
      fs.mkdirSync(tmp, { recursive: true });
      builder.log.minor('Writing prerendered output (temp)...');
      builder.writePrerendered(tmp);

      // 3) write runtime files
      // EFSDB no longer exports a standalone runtime into the SvelteKit build output.
      // The EFSDB core host (efsdb/php/core/public/index.php) serves all applications.

      fs.mkdirSync(dataDir, { recursive: true });

      // 4) import files via PHP
      if (o.runPhpImport) {
        // Find the EFSDB import binary in the core bin directory
        const importPhp = path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          '../../../php/core/bin/import.php'
        );
        const basePath = builder.config.kit.paths.base || '/';
        // SvelteKit's builder config does not expose one root-level trailingSlash value.
        // The PHP runtime can resolve imported static output permissively when metadata is "ignore".
        const trailingSlash = 'ignore';

        const buildImportArgs = (sourceDir: string, extra: string[] = []) => {
          const args = [
            ...(o.phpArgs || []),
            '-d',
            'display_errors=1',
            importPhp,
            '--src',
            sourceDir,
            '--web',
            publicDir,
            `--chunk=${o.chunkSize}`,
          ];

          pushCliOption(args, 'root', o.root!);
          if (o.setDeliveryMode !== false && !o.prefix) {
            pushCliOption(args, 'delivery-mode', 'sveltekit-php-adapter');
          }
          pushCliOption(args, 'app-dir', builder.config.kit.appDir);
          pushCliOption(args, 'base-path', basePath);
          pushCliOption(args, 'trailing-slash', trailingSlash);

          for (const entry of extra) {
            args.push(entry);
          }

          return args;
        };

        const basePrefix = o.prefix ? `${o.prefix}/` : '';

        if (o.encryptAppAssets && clientTmp) {
          builder.log.minor('Importing client assets into EFSDB...');
          await execPhp(
            o.phpBin!,
            buildImportArgs(clientTmp, [
              `--prefix=${basePrefix.slice(0, -1)}`, // Remove trailing slash
            ])
          );
        }

        builder.log.minor('Importing prerendered files into EFSDB...');
        await execPhp(o.phpBin!, buildImportArgs(tmp, o.prefix ? [`--prefix=${o.prefix}`] : []));
      }
    },
  };
}
