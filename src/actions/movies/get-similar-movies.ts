"use server";

import { axiosInstance } from "@/lib/axios-server";
import { SimilarMovies,} from "@/types/movie/similar-movies";


export async function getSimilarMovies(movieId: number) {
  const response = await axiosInstance.get(
    `/movie/${movieId}/similar`
  );
  return response.data as SimilarMovies;
}
