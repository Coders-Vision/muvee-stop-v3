import { Result } from "../show/show-result";

export interface DiscoverShows{
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
