"use server";

import { fetchInstance } from "@/lib/fetch-instance";
import { MovieProviders } from "@/types/movie/movie-providers";


export async function getMovieProviders(
  region: string
): Promise<MovieProviders> {
  const response = await fetchInstance(`watch/providers/movie`, {
    options: { cache: "no-cache" },
    params: { watch_region: region },
  });
  return response.json();
}
