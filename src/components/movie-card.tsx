"use clent";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { createUrlSLug } from "@/lib/slugify";
import ImageWithFallback from "./image-with-fallback";
import { Result as MovieResult } from "@/types/movie/movie-result";
import { getPosterImage } from "@/lib/get-image-path";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { StarIcon } from "lucide-react";

function MovieCard({
  movie,
  showDescription,
  showLabel = false,
}: {
  movie: MovieResult;
  showDescription: boolean;
  showLabel?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const handleMouseEnter = () => {
    showDescription && setOpen(true);
  };
  const handleMouseLeave = () => {
    showDescription && setOpen(false);
  };

  return (
    <Popover open={open}>
      <PopoverTrigger
        asChild
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col justify-center items-center my-2">
          <Card className="w-[125px] md:w-[150px] lg:w-[175px] rounded-xl shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <CardContent className="relative p-0">
              <Link
                className=""
                href={`/movies/movie/${createUrlSLug(
                  movie.id + "",
                  movie?.title ?? movie.original_title
                )}`}
              >
                {showLabel && (
                  <div className="absolute right-2 top-2">
                    <span
                      className="inline-flex items-center px-2 py-1 rounded-full text-[0.65rem] font-semibold bg-black bg-opacity-60 text-white backdrop-blur"
                      aria-label="Media type"
                    >
                      Movie
                    </span>
                  </div>
                )}
                <ImageWithFallback
                  src={getPosterImage(movie.poster_path)}
                  alt={`${movie.title}`}
                  placeholder="empty"
                  loading="eager"
                  width={175} // Set a fixed width
                  height={260} // Set a fixed height based on the image aspect ratio
                  sizes="100vw"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain w-full h-auto rounded-xl"
                />
              </Link>
            </CardContent>
          </Card>
          <h6 className="text-center mt-2 text-sm">{movie.title}</h6>
        </div>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-xl mx-4 my-3"
      >
        <div className="">
          <h4 className="font-bold ">{movie.title}</h4>
          <div className="flex gap-2 text-[0.75rem] my-2">
            <div className="flex ">
              <div className="flex items-center gap-1">
                <StarIcon fill="white" size={18} />
                {movie.vote_average?.toFixed(1)}
              </div>
            </div>
            <div>{movie.release_date?.substring(0, 4)}</div>
          </div>
          <p className="my-2 text-[0.75rem]">
            {movie.overview.substring(0, 125)}
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default MovieCard;
