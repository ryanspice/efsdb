export type ExplorerMode = 'natural' | 'raw';

export interface ExplorerItem {
  name: string;
  type: 'dir' | 'file';
  size?: number;
  rawPath?: string;
  kind?: string;
  manifestId?: string;
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
}

export interface ExplorerTicketResponse {
  url: string;
  ticket: string;
  expiresIn: number;
}
