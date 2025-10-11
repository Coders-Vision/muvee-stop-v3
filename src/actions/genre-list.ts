"use server";

import { fetchInstance } from "@/lib/fetch-instance";
import { GenreList } from "@/types/genre-list";

export async function genreList(): Promise<GenreList> {
  const response = await fetchInstance(`genre/movie/list`);
  return response.json();
}
