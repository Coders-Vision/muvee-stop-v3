"use server";

import { Filmography } from "@/types/movie/filmography";
// import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";

export async function getFilmography(personId: number): Promise<Filmography> {
  const response = await fetchInstance(`discover/movie`, {
    options: { cache: "no-cache" },
    params: { with_cast: personId, sort_by: "release_date.desc" },
  });
  return response.json();
}
