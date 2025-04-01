"use server";

import { fetchInstance } from "@/lib/fetch-instance";
import { ShowFilterParams } from "@/types/filter/filter-params";
import { DiscoverShows } from "@/types/show/discover-shows";

//Excluding type
type DiscoverQuery = Omit<ShowFilterParams, "type">;

export async function discoverShows(
  query: DiscoverQuery
): Promise<DiscoverShows> {
  const response = await fetchInstance(`discover/tv`, {
    // options: { cache: "no-cache" },
    params: query,
  });
  return response.json();
}
