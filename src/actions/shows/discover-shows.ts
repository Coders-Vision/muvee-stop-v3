"use server";

import { axiosInstance } from "@/lib/axios-server";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { DiscoverMovies } from "@/types/filter/discover-movies";

//Excluding type
type DiscoverQuery = Omit<MovieFilterParams, "type">;

export async function discover(query: DiscoverQuery) {
  const response = await axiosInstance.get(`/discover/tv`, {
    params: { query },
  });
  return response.data as DiscoverMovies;
}
