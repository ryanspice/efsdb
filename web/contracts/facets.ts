export interface FacetBucket {
  value: string;
  label: string;
  count: number;
}

export interface FacetResponse {
  results: Record<string, FacetBucket[]>;
  meta: {
    entity: string;
    strategy: string;
    warnings: string[];
  };
}

export interface FacetParams {
  entity: string;
  field: string[];
  q?: string;
}
