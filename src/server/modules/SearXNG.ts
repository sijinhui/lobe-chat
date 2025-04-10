import qs from 'query-string';
import urlJoin from 'url-join';

import { SearchResponse } from '@/types/tool/search';

export class SearXNGClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async search(query: string, optionalParams: Record<string, any> = {}): Promise<SearchResponse> {
    try {
      const { time_range, ...otherParams } = optionalParams;

      const processedParams = Object.entries(otherParams).reduce<Record<string, any>>(
        (acc, [key, value]) => {
          acc[key] = Array.isArray(value) ? value.join(',') : value;
          return acc;
        },
        {},
      );

      const searchParams = qs.stringify({
        ...processedParams,
        ...(time_range !== 'anytime' && { time_range }),
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
