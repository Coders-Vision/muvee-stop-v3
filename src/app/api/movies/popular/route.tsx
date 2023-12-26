import { axiosInstance } from "@/lib/axios-server";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  try {
    const popularMovies = await axiosInstance.get("/movie/popular");
    return NextResponse.json(popularMovies.data, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error: ", { status: 500 });
  }
}
