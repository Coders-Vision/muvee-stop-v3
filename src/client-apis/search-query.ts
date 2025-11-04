//Not using this way of fetching data from 'api' routes (CSR).
//Favouring Server Actions Instead, check 'actions' folder for similar implementation.

import { axiosInstanceClient } from "@/lib/axios-client";
import { SearchResult } from "@/types/search/search";

export const searchQuery = async (params: any) => {
  const result = await axiosInstanceClient.get(`/api/search`, { params });
  return result.data as SearchResult;
};
