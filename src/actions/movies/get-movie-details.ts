"use server";
// import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";
import { Movie } from "@/types/movie/movie";

export async function getMovieDetails(movieId: string): Promise<Movie> {
  const response = await fetchInstance(`movie/${movieId}`, {
    options: {
      // cache: "force-cache",
      next: { revalidate: 7200 },
    }, // revalidate every 2 hours
    params: { append_to_response: "videos" },
  });
  return response.json();
}
