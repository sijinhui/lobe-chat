import qs from 'query-string';
import urlJoin from 'url-join';

import { SearchResponse } from '@/types/tool/search';

export class SearXNGClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async search(query: string, engines?: string[]): Promise<SearchResponse> {
    try {
      const searchParams = qs.stringify({
        engines: engines?.join(','),
        format: 'json',
        q: query,
      });

      const response = await fetch(urlJoin(this.baseUrl, `/search?${searchParams}`));

      if (response.ok) {
        // 临时限制返回的查询结果数，避免浪费太多token
        const result = await response.json();
        if ((result?.results?.length ?? 0) > 10) {
          result.results = result.results.slice(0, 10);
        }
        return result;
      }

      throw new Error(`Failed to search: ${response.statusText}`);
    } catch (error) {
      console.error('Error searching:', error);
      throw error;
    }
  }
}
