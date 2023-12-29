//Not using this way of fetching data from 'api' routes (CSR).
//Favouring Server Actions Instead, check 'actions' folder for similar implementation.

import { axiosInstanceClient } from "@/lib/axios-client";
import { DiscoverMovies } from "@/types/movie/discover-movies";

export async function filterMovies(query: any) {
  const filter = await axiosInstanceClient("/api/movies/discover", {
    params: query,
  });
  return filter.data as DiscoverMovies;
}
