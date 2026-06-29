"use server";
import { fetchInstance } from "@/lib/fetch-instance";
import { Person } from "@/types/people/person";

export async function getPersonDetails(personId: number): Promise<Person> {
  const response = await fetchInstance(`person/${personId}`, {
    options: { next: { revalidate: 3600 } },
    params: { append_to_response: "videos,images" },
  });
  return response.json();
}
