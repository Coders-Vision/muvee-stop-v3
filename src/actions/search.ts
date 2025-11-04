"use server";

// import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";
import { SearchResult } from "@/types/search/search";
import { SearchParams } from "@/types/search/search-params";

export async function getSearch({
  searchQuery,
  page = 1,
}: SearchParams): Promise<SearchResult> {
  const response = await fetchInstance(`search/multi`, {
    params: { query: searchQuery, page },
  });
  return response.json();
}
