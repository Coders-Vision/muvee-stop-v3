"use server";
// import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";
import { Movie } from "@/types/movie/movie";

export async function getMovieDetails(movieId: string):Promise<Movie> {
  const response = await fetchInstance(`movie/${movieId}`, {
    options: { cache: "no-cache" },
    params: { append_to_response: "videos" },
  });
  return response.json();
}
