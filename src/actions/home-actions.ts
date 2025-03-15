"use server";
import { fetchInstance } from "@/lib/fetch-instance";
import { NowPlaying } from "@/types/movie/now-playing";
import { Trending } from "@/types/movie/trending";
import { Popular as PopularMovieType } from "@/types/movie/popular";
import { Popular as PopularShowsType } from "@/types/show/popular";
import { TopRatedTV } from "@/types/show/top-rated-tv";

export async function getNowPlaying(): Promise<NowPlaying> {
  const response = await fetchInstance(`movie/now_playing`, {
    options: { cache: "force-cache", next: { revalidate: 60 } }, 
  });
  return response.json();
}

export async function getPopularMovies(): Promise<PopularMovieType> {
  const response = await fetchInstance(`movie/popular`, {
    options: { cache: "force-cache" },
  });
  return response.json();
}

export async function getTrendingMovies(): Promise<Trending> {
  const response = await fetchInstance(`trending/movie/day`, {
    options: { cache: "force-cache", next: { revalidate: 60 } }, 
  });
  return response.json();
}

export async function getPopularShows(): Promise<PopularShowsType> {
  const response = await fetchInstance(`tv/popular`, {
    options: { cache: "force-cache", next: { revalidate: 60 } }, 
  });
  return response.json();
}

export async function getTopRatedShows(): Promise<TopRatedTV> {
  const response = await fetchInstance(`tv/top_rated`, {
    options: { cache: "force-cache", next: { revalidate: 60 } }, 
  });
  return response.json();
}