"use server";

import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";
import { SearchType } from "@/types/search/search";

export async function getSearch({
  query,
  page = 1,
}: {
  query: string;
  page?: number;
}) {
  const response = await fetchInstance(`search/multi`, {
    params: { query, page },
  });
  return response.json();
}
