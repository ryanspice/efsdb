export type ExplorerMode = 'natural' | 'raw';

export interface ExplorerStorageSummary {
  kind: 'logical' | 'manifest' | 'chunk' | 'raw-dir';
  chunkCount?: number;
}

export interface ExplorerBuildError {
  path?: string;
  message: string;
  line?: number;
  column?: number;
  frame?: string | null;
}

export interface ExplorerBuildStatus {
  environment: 'staging' | 'production';
  status: 'idle' | 'building' | 'success' | 'failed';
  tool: string;
  startedAt?: string | null;
  updatedAt?: string | null;
  finishedAt?: string | null;
  lastSuccessfulAt?: string | null;
  lastFailureAt?: string | null;
  lastGoodPreview?: string | null;
  componentCount?: number;
  error?: ExplorerBuildError | null;
}

export interface ExplorerSitePreview {
  environment: 'staging' | 'production';
  kind: 'route' | 'environment';
  label: string;
  url: string;
}

export interface ExplorerSiteRuntimeResponse {
  preview: ExplorerSitePreview | null;
  build: ExplorerBuildStatus | null;
}

export interface ExplorerItem {
  name: string;
  type: 'dir' | 'file';
  size?: number;
  rawPath?: string;
  kind?: string;
  manifestId?: string;
  entity?: string;
  mime?: string;
  ext?: string;
  logicalPath?: string | null;
  preview?: string | null;
  storage?: ExplorerStorageSummary;
}

export interface ExplorerListResponse {
  path: string;
  mode: ExplorerMode;
  items: ExplorerItem[];
}

export interface ExplorerDetailsResponse {
  name: string;
  rawPath: string;
  entity: string;
  mime: string;
  size: number;
  ext?: string;
  preview?: string | null;
  logicalPath?: string | null;
  manifestId: string;
  storage?: Record<string, unknown>;
  siteRuntime?: ExplorerSiteRuntimeResponse | null;
}

export interface ExplorerTicketResponse {
  url: string;
  ticket: string;
  expiresIn: number;
}

export type ExplorerSaveResponse = ExplorerDetailsResponse;
