"use client";
import { Trending as TrendingType } from "@/types/movie/trending";
import MovieSlider from "@/components/movie-slider";

function Trending({ trending }: { trending: TrendingType }) {
  return <MovieSlider results={trending.results} title="Trending" />;
}

export default Trending;
