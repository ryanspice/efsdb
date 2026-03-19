import type {
  ExplorerDetailsResponse,
  ExplorerItem as ContractExplorerItem,
  ExplorerListResponse,
  ExplorerMode as ContractExplorerMode,
  ExplorerTicketResponse
} from '@contracts/explorer';

export type ExplorerMode = ContractExplorerMode;
export type ExplorerItem = ContractExplorerItem;
export type ListResponse = ExplorerListResponse;
export type DetailsResponse = ExplorerDetailsResponse;
export type TicketResponse = ExplorerTicketResponse;

export interface ColumnState {
  path: string;
  items: ExplorerItem[];
  selectedItem: string | null;
  loading?: boolean;
}

export interface ExplorerLayout {
  coverHeight: number;
  previewWidth: number;
  scale: number;
}
