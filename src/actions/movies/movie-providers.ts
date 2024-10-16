"use server";

import { axiosInstance } from "@/lib/axios-server";
import { MovieProviders } from "@/types/movie/movie-providers";

export async function getMovieProviders(region: string) {
  const response = await axiosInstance.get(
    `/watch/providers/movie?watch_region=${region}`
  );
  return response.data as MovieProviders;
}
