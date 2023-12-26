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
}: {
  movie: MovieResult;
  showDescription: boolean;
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
          <Card className="max-w-[125px] md:max-w-[175px] rounded-xl shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <CardContent className="p-0">
              <Link
                href={`/movies/movie/${createUrlSLug(
                  movie.id + "",
                  movie?.title ?? movie.original_title
                )}`}
              >
                <ImageWithFallback
                  src={getPosterImage(movie.poster_path)}
                  alt={`${movie.title}`}
                  placeholder="empty"
                  loading="lazy"
                  width="0"
                  height="0"
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
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <div>{new Date(movie.release_date).getFullYear()}</div>
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
