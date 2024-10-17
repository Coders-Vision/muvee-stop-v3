import { axiosInstance } from "@/lib/axios-server";
import { NextResponse } from "next/server";

export const runtime = 'edge'

export async function GET(_req: Request) {
  try {

    const topRated = await axiosInstance.get("/tv/top_rated");
    return NextResponse.json(topRated.data, { status: 200 });

  } catch (error) {
    return new NextResponse("Internal Server Error: ", { status: 500 });
  }
}
