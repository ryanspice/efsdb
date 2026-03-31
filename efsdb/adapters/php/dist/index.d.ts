import { Adapter } from '@sveltejs/kit';

interface AdapterEfsdbPhpOptions {
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
declare function adapterEfsdbPhp(opts?: AdapterEfsdbPhpOptions): Adapter;

export { type AdapterEfsdbPhpOptions, adapterEfsdbPhp as default };
