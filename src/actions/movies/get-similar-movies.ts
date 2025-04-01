"use server";
import { fetchInstance } from "@/lib/fetch-instance";
import { SimilarMovies } from "@/types/movie/similar-movies";

export async function getSimilarMovies(
  movieId: number
): Promise<SimilarMovies> {
  const response = await fetchInstance(`movie/${movieId}/similar`, {
    // options: { cache: "force-cache"},
  });
  return response.json();
}
