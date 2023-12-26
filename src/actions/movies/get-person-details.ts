"use server";
import { axiosInstance } from "@/lib/axios-server";
import { Person } from "@/types/people/person";


export async function getPersonDetails(personId: number) {
  const response = await axiosInstance.get(
    `/person/${personId}?append_to_response=videos,images`
  );
  return response.data as Person;
}
