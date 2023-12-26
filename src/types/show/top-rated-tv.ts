import { Result } from "./show-result";

export interface TopRatedTV {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

