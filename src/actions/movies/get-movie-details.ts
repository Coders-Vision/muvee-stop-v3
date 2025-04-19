"use server";
// import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";
import { Movie } from "@/types/movie/movie";
import { notFound } from "next/navigation";

export async function getMovieDetails(movieId: string): Promise<Movie> {
  const response = await fetchInstance(`movie/${movieId}`, {
    options: {
      next: { 
        revalidate: 7200,  // 2 hours
        tags: [`movie-${movieId}`]  // Add cache tag for targeted revalidation
      }
    },
    params: { append_to_response: "videos" },
  });
  if (!response.ok) {
    console.error("Error fetching movie details:", response.statusText);
    throw notFound();
  }
  return response.json();
}
