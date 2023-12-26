"use client";

import { Popular as PopularType } from "@/types/movie/popular";
import MovieSlider from "@/components/movie-slider";

function Popular({ popular }: { popular: PopularType }) {
  return (
    <MovieSlider results={popular.results} title="Popular Movies" />
  );
}

export default Popular;
