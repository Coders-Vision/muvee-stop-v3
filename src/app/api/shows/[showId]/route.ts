import { NextResponse } from "next/server";
// import { getShowDetails } from "@/actions/shows/get-show-details";

export const runtime = process.env.RUNTIME;

export async function GET(
  _req: Request,
  { params }: { params: { showId: string } }
) {
  try {
    // const show = await getShowDetails(params.showId);
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error: ", { status: 500 });
  }
}
