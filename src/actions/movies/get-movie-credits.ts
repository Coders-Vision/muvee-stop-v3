"use server";

import { Credit } from "@/types/people/cast";
import { axiosInstance } from "@/lib/axios-server";

export async function getMovieCredits(movieId: number) {
  const response = await axiosInstance.get(
    `/movie/${movieId}/credits`
  );
  return response.data as Credit;
}
