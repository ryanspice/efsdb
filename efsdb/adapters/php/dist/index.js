// src/index.ts
import * as fs2 from "fs";
import * as path2 from "path";
import { fileURLToPath } from "url";

// src/utils.ts
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
function rimraf(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}
function execPhp(bin, args) {
  console.log(`Executing: ${bin} ${args.join(" ")}`);
  return new Promise((resolve2, reject) => {
    const child = spawn(bin, args, { stdio: "inherit" });
    child.on("close", (code) => {
      if (code === 0) resolve2();
      else reject(new Error(`PHP exited with code ${code}`));
    });
    child.on("error", reject);
  });
}
function pushCliOption(args, flag, value) {
  if (value === void 0 || value === null || value === "") {
    return;
  }
  args.push(`--${flag}=${value}`);
}

// src/index.ts
var defaults = {
  outDir: "build",
  dataDirName: ".efsdb",
  chunkSize: 262144,
  runPhpImport: true,
  phpBin: "php",
  clean: true,
  encryptAppAssets: true,
  root: "production",
  prefix: ""
};
function adapterEfsdbPhp(opts = {}) {
  const o = { ...defaults, ...opts };
  return {
    name: "@efsdb/adapter-php",
    async adapt(builder) {
      const outDir = o.outDir;
      const publicDir = path2.join(outDir, "public");
      const dataDirName = o.dataDirName;
      const dataDir = path2.join(outDir, dataDirName);
      if (o.clean) rimraf(outDir);
      fs2.mkdirSync(outDir, { recursive: true });
      const appDir = path2.join(publicDir, builder.config.kit.appDir);
      let clientTmp;
      if (o.encryptAppAssets) {
        builder.log.minor("Preparing client assets for EFSDB import...");
        clientTmp = path2.join(outDir, ".client_tmp");
        rimraf(clientTmp);
        fs2.mkdirSync(clientTmp, { recursive: true });
        builder.writeClient(clientTmp);
      } else {
        builder.log.minor("Writing client assets as regular files...");
        builder.writeClient(appDir);
      }
      const tmp = path2.join(outDir, ".prerendered_tmp");
      rimraf(tmp);
      fs2.mkdirSync(tmp, { recursive: true });
      builder.log.minor("Writing prerendered output (temp)...");
      builder.writePrerendered(tmp);
      fs2.mkdirSync(dataDir, { recursive: true });
      if (o.runPhpImport) {
        const importPhp = path2.resolve(
          path2.dirname(fileURLToPath(import.meta.url)),
          "../../../php/core/bin/import.php"
        );
        const basePath = builder.config.kit.paths.base || "/";
        const trailingSlash = "ignore";
        const buildImportArgs = (sourceDir, extra = []) => {
          const args = [
            ...o.phpArgs || [],
            "-d",
            "display_errors=1",
            importPhp,
            "--src",
            sourceDir,
            "--web",
            publicDir,
            `--chunk=${o.chunkSize}`
          ];
          pushCliOption(args, "root", o.root);
          if (o.setDeliveryMode !== false && !o.prefix) {
            pushCliOption(args, "delivery-mode", "sveltekit-php-adapter");
          }
          pushCliOption(args, "app-dir", builder.config.kit.appDir);
          pushCliOption(args, "base-path", basePath);
          pushCliOption(args, "trailing-slash", trailingSlash);
          for (const entry of extra) {
            args.push(entry);
          }
          return args;
        };
        const basePrefix = o.prefix ? `${o.prefix}/` : "";
        if (o.encryptAppAssets && clientTmp) {
          builder.log.minor("Importing client assets into EFSDB...");
          await execPhp(
            o.phpBin,
            buildImportArgs(clientTmp, [
              `--prefix=${basePrefix.slice(0, -1)}`
              // Remove trailing slash
            ])
          );
        }
        builder.log.minor("Importing prerendered files into EFSDB...");
        await execPhp(o.phpBin, buildImportArgs(tmp, o.prefix ? [`--prefix=${o.prefix}`] : []));
      }
    }
  };
}
export {
  adapterEfsdbPhp as default
};
