"use server";

import { Filmography } from "@/types/movie/filmography";
import { axiosInstance } from "@/lib/axios-server";

export async function getFilmography(personId: number) {
  const response = await axiosInstance.get(
    `/discover/movie?with_cast=${personId}&sort_by=release_date.desc`
  );
  return response.data as Filmography;
}
