"use client";

import React, { useState } from "react";
import { Movie } from "@/types/movie/movie";
import { StarIcon } from "lucide-react";
import ImageWithFallback from "@/components/image-with-fallback";
import { Button } from "@/components/ui/button";
import { getPosterImage } from "@/lib/get-image-path";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

function MovieDetails({ movie }: { movie: Movie }) {
  const [showMore, setShowMore] = useState(false);

  return (
    // <div className="relative">

    <div className="relative sm:flex gap-6 mt-20 mx-4 select-none sm:max-w-md sm:mx-auto  lg:max-w-none">
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-600 lg:bg-none md:flex-shrink-0 ">
        <ImageWithFallback
          src={getPosterImage(movie.poster_path)}
          alt={`${movie.title}`}
          placeholder="empty"
          width="0"
          height="0"
          sizes="100vw"
          className="w-[500px] lg:w-[250px] h-auto mix-blend-overlay opacity-80 md:opacity-100 lg:mix-blend-normal border-opacity-80 shadow-2xl rounded-xl border-[3px] border-[#f9f9f9]"
        />
      </div>
      <div className="absolute lg:static top-12 mx-2 max-w-[900px] text-opacity-30 text-[.75rem] md:text-[.85rem] lg:text-[1rem]">
        <ScrollArea className="h-[calc(100vh-350px)] md:h-auto">
          <h1 className="text-xl md:text-3xl font-bold my-2">
            {movie.title}
          </h1>
          <div className="flex gap-2">
            <div className="flex ">
              <div className="flex items-center gap-1">
                <StarIcon fill="white" size={18} />
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <div>{new Date(movie.release_date).getFullYear()}</div>
            <div>{movie.runtime} min</div>
          </div>
          <ScrollArea className="h-[120px] lg:h-auto">
            <p className="my-2 font-light w-auto ">
              {showMore
                ? movie?.overview
                : `${movie?.overview.substring(0, 250)}`}
              {movie?.overview.length > 200 && (
                <Button
                  className="p-0 mx-1 bg-transparent hover:bg-transparent text-white hover:underline inline"
                  size={"sm"}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show less" : "Show more"}
                </Button>
              )}
            </p>
          </ScrollArea>
          <div className="flex gap-4">
            <div className="">
              <div className="my-2 font-light">Type: </div>
              <div className="my-2 font-light">Status: </div>
              <div className="my-2 font-light">Country: </div>
              <div className="my-2 font-light">Genre: </div>
              <div className="my-2 font-light">Release: </div>

              <div className="my-2 font-light">Production: </div>
            </div>
            <div className="">
              <div className="my-2">Movie</div>
              <div className="my-2">{movie.status}</div>
              <div className="my-2">
                {movie.production_countries?.map(
                  (county) => `${county.name}, `
                )}
              </div>
              <div className="my-2 ">
                {movie.genres.map((genre) => (
                  <Badge
                    key={genre.id}
                    className="bg-ms-blue text-white mr-1 my-1"
                  >
                    {genre.name}
                  </Badge>
                ))}
              </div>
              <div className="my-2">{movie.release_date}</div>
              <div className="my-2">
                {movie.production_companies.map(
                  (company) => `${company.name} `
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
    // {/* <ImageWithFallback
    //   fill
    //   style={{ objectFit: "cover", objectPosition: "center left" }}
    //   alt="q"
    //   className="rounded-lg filter blur-lg absolute -z-40 top-0"
    //   src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    // /> */}
    // {/* </div> */}
  );
}

export default MovieDetails;
