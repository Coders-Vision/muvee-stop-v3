"use server";

import { axiosInstance } from "@/lib/axios-server";
import { SearchType } from "@/types/search/search";

export async function getSearch({
  query,
  page = 1,
}: {
  query: string;
  page?: number;
}) {
  const response = await axiosInstance.get(`/search/multi`, {
    params: { query, page },
  });
  return response.data as SearchType;
}
