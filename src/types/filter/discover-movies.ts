import { Result } from "../movie/movie-result";

export interface DiscoverMovies {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
