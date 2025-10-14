"use client";

import React, { useState, useEffect } from "react";
import { Cast, Credit } from "@/types/people/cast";
import { getMovieCredits } from "@/actions/movies/get-movie-credits";
import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";
import { createUrlSLug } from "@/lib/slugify";
import ImageWithFallback from "@/components/image-with-fallback";
import { getPosterImage } from "@/lib/get-image-path";

function CastCard({ cast }: { cast: Cast }) {
  return (
    <Card className=" mt-2 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 rounded-xl">
      <CardContent className="p-0 ">
        <Link href={`/person/${createUrlSLug(cast.id + "", cast.name)}`}>
          <div className="flex">
            <div className="rounded-xl shrink-0 ">
              <ImageWithFallback
                src={getPosterImage(cast.profile_path!)}
                alt={`${cast.name}`}
                placeholder="empty"
                loading="eager"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[50px] rounded-xl"
              />
            </div>
            <div className="mx-2 my-2">
              <h2 className="font-semibold">{cast.name}</h2>
              <h3 className="text-sm text-ms-gray-light">{cast.character}</h3>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

function MovieCast({ movieId }: { movieId: number }) {
  const [credit, setCredit] = useState<Credit>();

  const getCredits = async (movieId: number) => {
    const credits = await getMovieCredits(movieId);
    setCredit(credits);
  };

  useEffect(() => {
    if (movieId) {
      getCredits(movieId);
    }
  }, [movieId]);

  if (credit?.cast.length === 0) {
    return null;
  }

  return (
    <div className="lg:mt-20 my-4 mx-4 w-full md:w-[600px] lg:w-[400px] select-none  ">
      <h1 className="font-extrabold text-2xl my-2 ml-2">Cast</h1>
      <div className="h-[45vh]  no-scrollbar overflow-y-auto px-4 py-2">
        {credit?.cast.map((cast) => (
          <CastCard cast={cast} key={cast.cast_id} />
        ))}
      </div>
    </div>
  );
}

export default MovieCast;
