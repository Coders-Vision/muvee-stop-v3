"use server";
import { fetchInstance } from "@/lib/fetch-instance";
import { SimilarMovies } from "@/types/movie/similar-movies";

export async function getSimilarMovies(movieId: number): Promise<SimilarMovies> {
  const response = await fetchInstance(`movie/${movieId}/similar`, {
    options: {
      next: { 
        revalidate: 86400  // Cache for 24 hours since similar movies don't change frequently
      }
    }
  });
  return response.json();
}
