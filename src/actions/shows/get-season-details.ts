"use server";
import { fetchInstance } from "@/lib/fetch-instance";
import { Season } from "@/types/show/season";

export async function getSeasonDetails(
  showId: string, season: string
): Promise<Season> {
  const response = await fetchInstance(`tv/${showId}/season/${season}`, {
    options: { cache: "force-cache", next: { revalidate: 7200 } }, // revalidate every 2 hours
    params: {
      language: "en-US",
      append_to_response: "images,videos",
    },
  });
  return response.json();
}

