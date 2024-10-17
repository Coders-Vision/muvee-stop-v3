import { axiosInstance } from "@/lib/axios-server";
import { NextResponse } from "next/server";

export const runtime = process.env.RUNTIME;

export async function GET(_req: Request) {
  try {
    const nowPlaying = await axiosInstance.get("/movie/now_playing");
    return NextResponse.json(nowPlaying.data, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error: ", { status: 500 });
  }
}
