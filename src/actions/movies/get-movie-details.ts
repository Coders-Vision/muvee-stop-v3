"use server";

import { axiosInstance } from "@/lib/axios-server";
import { Movie } from "@/types/movie/movie";

export async function getMovieDetails(movieId: string) {
  const response = await axiosInstance.get(
    `/movie/${movieId}?append_to_response=videos`
  );
  return response.data as Movie;
}
