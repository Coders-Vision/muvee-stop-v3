"use server";

// import { axiosInstance } from "@/lib/axios-server";
import { fetchInstance } from "@/lib/fetch-instance";
import { Show } from "@/types/show/show";

// export async function getShowDetails(showId: string) {
//   const response = await axiosInstance.get(
//     `/tv/${showId}?language=en-US&append_to_response=videos`
//   );
//   return response.data as Show;
// }

export async function getShowDetails(showId: string): Promise<Show> {
  const response = await fetchInstance(`tv/${showId}`, {
    // options: { cache: "force-cache" },
    params: { language: "en-US", append_to_response: "videos" },
  });
  return response.json();
}
