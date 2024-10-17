import { axiosInstance } from "@/lib/axios-server";
import { NextResponse } from "next/server";

export const runtime = 'edge'

export async function GET(_req: Request) {
  try {
    const airingToday = await axiosInstance.get("/tv/airing_today");
    return NextResponse.json(airingToday.data, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error: ", { status: 500 });
  }
}
