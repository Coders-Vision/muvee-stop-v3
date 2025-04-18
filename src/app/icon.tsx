import getCurrentHost from "@/lib/get-current-host";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime ="edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default async function Icon() {
  const currentHost = await getCurrentHost();
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="w-full h-full flex items-center justify-center bg-none  ">
        <img
          src={`${currentHost}/images/reel.svg`}
          alt={`muvee_stop`}
          width="175px"
          height="175px"
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
