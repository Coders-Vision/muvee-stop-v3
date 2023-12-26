import { axiosInstance } from "@/lib/axios-server";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  // 1. const page = url.searchParams.get("page");
  //  const queryParams = new URLSearchParams({
  //     page: page ?? "",
  //   });
  const queryParams = Object.fromEntries(new URLSearchParams(url.searchParams));
  try {
    const discover = await axiosInstance.get("/discover/movie", {
      params:queryParams
    });
    return NextResponse.json(discover.data, { status: 200 });
  } catch (error) {
    const err=error as AxiosError
    console.error("[DISCOVER_ERROR]", err.response?.data);
    return new NextResponse("Internal Server Error: ", { status: 500 });
  }
}
