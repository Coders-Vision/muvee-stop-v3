"use server";

import { axiosInstance } from "@/lib/axios-server";
import { Show } from "@/types/show/show";

export async function getShowDetails(showId: string) {
  const response = await axiosInstance.get(
    `/tv/${showId}?language=en-US&append_to_response=videos`
  );
  return response.data as Show;
}
