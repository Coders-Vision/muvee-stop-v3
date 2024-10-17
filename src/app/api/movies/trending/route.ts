import { NextResponse } from "next/server";
import { axiosInstance } from "@/lib/axios-server";

export const runtime = process.env.RUNTIME;

export async function GET(_req: Request) {
  try {
    const trending = await axiosInstance.get("/trending/movie/day");
    return NextResponse.json(trending.data, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error: ", { status: 500 });
  }
}
