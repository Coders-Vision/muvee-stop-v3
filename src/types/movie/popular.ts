import { Result } from "./movie-result";

export interface Popular {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

