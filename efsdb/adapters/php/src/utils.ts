import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

export function rimraf(dir: string) {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
    }
}

export function copyDir(src: string, dest: string) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

export function writeFile(file: string, data: string) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, data);
}

export function execPhp(bin: string, args: string[]): Promise<void> {
    console.log(`Executing: ${bin} ${args.join(' ')}`);
    return new Promise((resolve, reject) => {
        const child = spawn(bin, args, { stdio: 'inherit' });
        child.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error(`PHP exited with code ${code}`));
        });
        child.on('error', reject);
    });
}

export function pushCliOption(args: string[], flag: string, value: string | number | undefined | null) {
    if (value === undefined || value === null || value === '') {
        return;
    }

    args.push(`--${flag}=${value}`);
}
