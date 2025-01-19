"use server";

import { axiosInstance } from "@/lib/axios-server";
import { Season } from "@/types/show/season";

export async function getSeasonDetails(showId: string, season: string) {
  const response = await axiosInstance.get(
    `/tv/${showId}/season/${season}?language=en-US&append_to_response=images,videos`
  );
  return response.data as Season;
}
