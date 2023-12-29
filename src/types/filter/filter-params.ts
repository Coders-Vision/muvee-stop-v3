export interface MovieFilterParams {
  type?: string;
  page?: string;
  include_video?: boolean;
  language?: "en-US";
  primary_release_year?: number;
  // primary_release_date?: DateType;
  region?: string;
  // release_date?: DateType;
  "release_date.gte"?: string;
  "release_date.lte"?: string;
  sort_by?: string;
  // vote_average?: ValueType;
  "vote_average.gte"?: string;
  "vote_average.lte"?: string;
  // vote_count?: ValueType;
  "vote_count.gte"?: string;
  "vote_count.lte"?: string;
  watch_region?: string;
  with_cast?: string;
  with_companies?: string;
  with_crew?: string;
  with_genres?: string;
  with_keywords?: string;
  with_origin_country?: string;
  with_original_language?: string;
  with_people?: string;
  with_release_type?: string;
  // with_runtime?: ValueType;
  "with_runtime.gte"?: string;
  "with_runtime.lte"?: string;
  with_watch_monetization_types?: string;
  with_watch_providers?: string;
  without_companies?: string;
  without_genres?: string;
  without_keywords?: string;
  without_watch_providers?: string;
  year?: number;
}

export interface ShowFilterParams {
  type?: string;
  page?: number;
  first_air_date_year?: number;
  "air_date.gte"?: string;
  "air_date.lte"?: string;
  "first_air_date.gte"?: string;
  "first_air_date.lte"?: string;
  "vote_average.gte"?: string;
  "vote_average.lte"?: string;
  "vote_count.gte"?: string;
  "vote_count.lte"?: string;
  "with_runtime.gte"?: string;
  "with_runtime.lte"?: string;
  include_adult?: boolean;
  include_null_first_air_dates?: boolean;
  language?: string;
  screened_theatrically?: boolean;
  sort_by?: string;
  timezone?: string;
  watch_region?: string;
  with_companies?: string;
  with_genres?: string;
  with_keywords?: string;
  with_networks?: number;
  with_origin_country?: string;
  with_original_language?: string;
  with_status?: string;
  with_watch_monetization_types?: string;
  with_watch_providers?: string;
  without_companies?: string;
  without_genres?: string;
  without_keywords?: string;
  without_watch_providers?: string;
  with_type?: string;
}

// export type DateType = {
//   gte: Date;
//   lte: Date;
// };

export type ValueType = {
  gte: number;
  lte: number;
};
