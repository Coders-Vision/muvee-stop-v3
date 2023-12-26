export interface Result {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: OriginalLanguage;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: Date;
  name: string;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
  Ja = "ja",
  Ko = "ko",
}
