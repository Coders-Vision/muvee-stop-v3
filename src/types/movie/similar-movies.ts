import { Result } from "./movie-result";

export interface SimilarMovies {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
