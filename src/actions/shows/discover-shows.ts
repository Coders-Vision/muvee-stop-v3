"use server";

import { axiosInstance } from "@/lib/axios-server";
import { ShowFilterParams } from "@/types/filter/filter-params";
import { DiscoverShows } from "@/types/show/discover-shows";


//Excluding type
type DiscoverQuery = Omit<ShowFilterParams, "type">;

export async function discoverShows(query: DiscoverQuery) {
  const response = await axiosInstance.get(`/discover/tv`, {
    params: { ...query },
  });
  return response.data as DiscoverShows;
}
