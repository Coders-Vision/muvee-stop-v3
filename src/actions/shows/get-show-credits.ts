"use server";

import { Credit } from "@/types/people/cast";
import { axiosInstance } from "@/lib/axios-server";

export async function getShowCredits(showId: number) {
  const response = await axiosInstance.get(
    `/tv/${showId}/credits`
  );
  return response.data as Credit;
}
