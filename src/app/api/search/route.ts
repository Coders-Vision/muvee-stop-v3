import { axiosInstance } from "@/lib/axios-server";
import { NextResponse } from "next/server";

export const runtime = process.env.RUNTIME;

export async function GET(
  req: Request
  //   { params }: { params: { storeId: string } }
) {
  try {
    const url = new URL(req.url);
    const query = url.searchParams.get("query");
    if (!query) {
      NextResponse.json(
        { status: "error", message: "Query is empty!" },
        { status: 400 }
      );
    }
    const search = await axiosInstance.get("/search/multi", {
      params: { query },
    });
    
    return NextResponse.json(search.data, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error: ", { status: 500 });
  }
}
