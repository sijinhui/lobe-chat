import qs from 'query-string';
import urlJoin from 'url-join';

export interface SearXNGSearchResult {
  category: string;
  content?: string;
  engine: string;
  engines: string[];
  iframe_src?: string;
  img_src?: string;
  parsed_url: string[];
  positions: number[];
  publishedDate?: string | null;
  score: number;
  template: string;
  thumbnail?: string | null;
  thumbnail_src?: string | null;
  title: string;
  url: string;
}

export interface SearXNGSearchResponse {
  answers: any[];
  corrections: any[];
  infoboxes: any[];
  number_of_results: number;
  query: string;
  results: SearXNGSearchResult[];
  suggestions: string[];
  unresponsive_engines: any[];
}

export class SearXNGClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async search(
    query: string,
    optionalParams: Record<string, any> = {},
  ): Promise<SearXNGSearchResponse> {
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
