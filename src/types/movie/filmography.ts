import { Result } from "./movie-result";

export interface Filmography {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
