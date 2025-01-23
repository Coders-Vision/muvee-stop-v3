"use server";

import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { DiscoverMovies } from "@/types/movie/discover-movies";

//Excluding type
type DiscoverQuery = Omit<MovieFilterParams, "type">;

// export async function discoverMovies(query: DiscoverQuery) {
//   const response = await axiosInstance.get(`/discover/movie`, {
//     params: { ...query },
//   });
//   return response.data as DiscoverMovies;
// }

export async function discoverMovies(
  query: DiscoverQuery
): Promise<DiscoverMovies> {
  const response = await fetchInstance(`discover/movie`, {
    options: { cache: "no-store" },
    params: query
  });
  return response.json();
}
