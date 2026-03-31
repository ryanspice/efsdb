import type { BootstrapPayload } from './bootstrap';
import type { ExplorerItem } from './explorer';

export interface BuilderBootstrapTrees {
  stagingRoot?: ExplorerItem[];
  productionRoot?: ExplorerItem[];
  secondaryRoot?: ExplorerItem[];
}

export interface BuilderBootstrapSelectedFile {
  path: string;
  contentBase64: string;
  mime?: string;
  ext?: string;
}

export interface BuilderBootstrapInitial {
  path?: string;
  trees?: BuilderBootstrapTrees;
  branches?: Record<string, ExplorerItem[]>;
  selectedFile?: BuilderBootstrapSelectedFile | null;
}

export type BuilderBootstrapPayload = BootstrapPayload & {
  app: 'builder';
  tag: 'efsdb-builder';
  initial?: BuilderBootstrapInitial;
};
