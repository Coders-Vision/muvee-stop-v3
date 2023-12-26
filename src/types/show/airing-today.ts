import { Result } from "./show-result";

export interface AiringToday {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
