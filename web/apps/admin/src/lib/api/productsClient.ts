import type { ProductListParams, ProductListResponse } from '@contracts/products';
import { authorizedFetch } from '@utils/bootstrap/authBridge';
import { describeJsonError, mustJson, queryString } from '@utils/http';

export async function listProducts(params: ProductListParams = {}): Promise<ProductListResponse> {
  const response = await authorizedFetch(`/api/products${queryString(params)}`);
  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<ProductListResponse>(response);
}
