"use server";

import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";
import { AiringToday } from "@/types/show/airing-today";

// export async function getAiringToday() {
//   const response = await axiosInstance.get(
//     `/tv/airing_today?&include_adult=false&language=en-US`
//   );
//   return response.data as AiringToday;
// }

export async function getAiringToday(): Promise<AiringToday> {
  const response = await fetchInstance(`tv/airing_today`, {
    options: { cache: "no-cache" },
    params: {
      language: "en-US",
      include_adult: "false",
    },
  });
  return response.json();
}
