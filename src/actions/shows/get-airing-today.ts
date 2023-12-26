"use server";

import { axiosInstance } from "@/lib/axios-server";
import { AiringToday } from "@/types/show/airing-today";

export async function getAiringToday() {
  const response = await axiosInstance.get(
    `/tv/airing_today?&include_adult=false&language=en-US`
  );
  return response.data as AiringToday;
}
