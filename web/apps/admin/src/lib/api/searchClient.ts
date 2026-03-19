import type { SearchParams, SearchResponse } from '@contracts/search';
import { authorizedFetch } from '@utils/bootstrap/authBridge';
import { describeJsonError, mustJson, queryString } from '@utils/http';

export async function searchRecords(params: SearchParams): Promise<SearchResponse> {
  const response = await authorizedFetch(`/api/search${queryString({
    entity: params.entity,
    q: params.q,
    limit: params.limit,
    cursor: params.cursor,
    sort: params.sort
  })}`);

  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<SearchResponse>(response);
}
