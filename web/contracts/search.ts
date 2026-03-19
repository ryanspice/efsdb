export interface SearchResult {
  entity: string;
  id: string;
  score: number;
  summary: Record<string, unknown>;
}

export interface SearchResponse {
  results: SearchResult[];
  meta: {
    entity: string;
    limit: number;
    nextCursor: string | null;
    strategy: string;
    indexed: boolean;
    warnings: string[];
  };
}

export interface SearchParams {
  entity: string;
  q?: string;
  limit?: number;
  cursor?: string;
  sort?: string;
}
