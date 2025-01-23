"use server";

import { Credit } from "@/types/people/cast";
import { fetchInstance } from "@/lib/fetch-instance";

export async function getMovieCredits(movieId: number): Promise<Credit> {
  const response = await fetchInstance(`movie/${movieId}/credits`, {
    options: { cache: "no-cache" },
  });
  return response.json();
}
