"use server";

import { Credit } from "@/types/people/cast";
import { fetchInstance } from "@/lib/fetch-instance";

export async function getShowCredits(showId: number): Promise<Credit> {
  const response = await fetchInstance(`tv/${showId}/credits`, {
    options: { 
      // cache: "force-cache", 
      next: { revalidate: 7200 } 
    },
  });
  return response.json();
}
