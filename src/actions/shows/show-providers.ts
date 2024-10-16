"use server";

import { axiosInstance } from "@/lib/axios-server";
import { ShowProviders } from "@/types/show/show-providers";

export async function getShowProviders(region: string) {
  const response = await axiosInstance.get(
    `/watch/providers/tv?watch_region=${region}`
  );
  return response.data as ShowProviders;
}
