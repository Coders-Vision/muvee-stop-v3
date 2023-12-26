/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
//@ts-nocheck

type MoviePage = {
  params: {
    slug: string;
  };
};

import getCurrentHost from "@/lib/get-current-host";
import { getBannerImage } from "@/lib/get-image-path";
import { ImageResponse } from "next/og";

import { getMovieDetails } from "@/actions/movies/get-movie-details";
// Route segment config
export const runtime = process.env.RUNTIME;

// Image metadata
export const alt = "movie_name";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: MoviePage) {
  const movieId = params.slug.split("-")[0];

  try {
    const movie = await getMovieDetails(movieId);

    const imagePath = await fetch(getBannerImage(movie.backdrop_path)).then(
      (res) => res.arrayBuffer()
    );

    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div tw="relative w-[100%] h-[100%] flex justify-center items-center">
          <img
            src={imagePath}
            alt={`${movie.original_title}`}
            // placeholder="empty"
            width="100%"
            // sizes="100vw"
            // tw=""
          />
          <div tw="flex absolute bottom-4 left-4">
            <img
              src={`${getCurrentHost()}/images/logo/muvee-stop.svg`}
              width="125px"
              height="50vh"
            />
          </div>
        </div>
      ),
      // ImageResponse options
      {
        ...size,
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
      }
    );
  } catch (error) {
    return new Response("Failed to generate OG Image", { status: 500 });
  }
}
