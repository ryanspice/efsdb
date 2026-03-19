export interface ProductPrice {
  amount: number;
  currency: string;
}

export interface ProductSummary {
  id: string;
  type: string;
  sku: string;
  name: string;
  slug?: string;
  status?: string;
  category?: string;
  brand?: string;
  price?: ProductPrice;
  updatedAt?: string;
}

export interface ProductListResponse {
  results: ProductSummary[];
  meta: {
    entity?: 'products';
    limit: number;
    nextCursor: string | null;
    strategy: string;
    sort?: Record<string, string>;
  };
}

export interface ProductListParams {
  limit?: number;
  cursor?: string;
}

export interface ProductGetResponse {
  result: Record<string, unknown>;
}
