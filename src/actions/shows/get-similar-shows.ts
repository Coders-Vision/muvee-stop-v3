"use server";

import { fetchInstance } from "@/lib/fetch-instance";
import { SimilarShows } from "@/types/show/similar-shows";

export async function getSimilarShows(showId: number): Promise<SimilarShows> {
  const response = await fetchInstance(`tv/${showId}/similar`, {
    // options: { cache: "force-cache"},
  });
  return response.json();
}
