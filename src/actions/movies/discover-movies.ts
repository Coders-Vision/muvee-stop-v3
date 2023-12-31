"use server";

import { axiosInstance } from "@/lib/axios-server";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { DiscoverMovies } from "@/types/movie/discover-movies";

//Excluding type
type DiscoverQuery = Omit<MovieFilterParams, "type">;

export async function discoverMovies(query: DiscoverQuery) {
  const response = await axiosInstance.get(`/discover/movie`, {
    params: { ...query },
  });
  return response.data as DiscoverMovies;
}
