import type { FacetParams, FacetResponse } from '@contracts/facets';
import { authorizedFetch } from '@utils/bootstrap/authBridge';
import { describeJsonError, mustJson, queryString } from '@utils/http';

export async function loadFacets(params: FacetParams): Promise<FacetResponse> {
  const response = await authorizedFetch(`/_efsdb/api/facets${queryString({
    entity: params.entity,
    field: params.field,
    q: params.q
  })}`);

  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<FacetResponse>(response);
}
