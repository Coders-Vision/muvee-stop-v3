"use server";

import { axiosInstance } from "@/lib/axios-server";
import { SimilarShows } from "@/types/show/similar-shows";

export async function getSimilarShows(showId: number) {
  const response = await axiosInstance.get(`/tv/${showId}/similar`);
  return response.data as SimilarShows;
}
