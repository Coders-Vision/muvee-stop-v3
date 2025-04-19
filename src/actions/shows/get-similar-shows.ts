"use server";

import { fetchInstance } from "@/lib/fetch-instance";
import { SimilarShows } from "@/types/show/similar-shows";

export async function getSimilarShows(showId: number): Promise<SimilarShows> {
  const response = await fetchInstance(`tv/${showId}/similar`, {
    options: {
      next: { 
        revalidate: 86400  // Cache for 24 hours since similar shows don't change frequently
      }
    }
  });
  return response.json();
}
