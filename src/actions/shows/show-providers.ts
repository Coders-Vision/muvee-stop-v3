"use server";

import { fetchInstance } from "@/lib/fetch-instance";
import { ShowProviders } from "@/types/show/show-providers";

export async function getShowProviders(region: string): Promise<ShowProviders> {
  const response = await fetchInstance(`watch/providers/tv`, {
    options: { cache: "no-cache" },
    params: { watch_region: region },
  });
  return response.json();
}
