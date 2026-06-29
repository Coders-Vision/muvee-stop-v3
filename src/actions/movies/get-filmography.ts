"use server";

import { Filmography } from "@/types/movie/filmography";
// import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";

export async function getFilmography(personId: number): Promise<Filmography> {
  const response = await fetchInstance(`discover/movie`, {
    options: { next: { revalidate: 3600 } },
    params: { with_cast: personId, sort_by: "release_date.desc" },
  });
  return response.json();
}
