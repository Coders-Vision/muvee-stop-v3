"use client";

import React, { Suspense, useEffect, useState, useTransition } from "react";
import { Filmography as FilmographyType } from "@/types/movie/filmography";
import { getFilmography } from "@/actions/movies/get-filmography";
import MovieCard from "@/components/movie-card";
import MediaCardSkeleton from "@/components/skeletons/media-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { Result } from "@/types/movie/movie-result";

function Filmography({ personId }: { personId: number }) {
  const [filmography, setFilmography] = useState<Partial<FilmographyType>>({});
  const [isPending, startTransition] = useTransition();

  const getFilm = async (personId: number) => {
    const similarMovies = await getFilmography(personId);
    setFilmography(similarMovies);
  };

  useEffect(() => {
    if (personId) {
      startTransition(() => {
        getFilm(personId);
      });
    }
  }, [personId]);

  return isPending ? (
    <div className="mx-2 my-8">
      <h4 className="font-extrabold text-2xl my-2 ml-2">
        <Skeleton className="w-[175px] h-6  rounded-xl" />
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <MediaCardSkeleton skeletonCount={20} />
      </div>
    </div>
  ) : (
    <div className="mx-2 my-8">
      {filmography?.results?.length ? (
        <>
          <h4 className="font-extrabold text-2xl my-2 ml-2">Filmography</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {filmography.results?.map((film, index) => (
              <MovieCard
                key={film.id}
                movie={film as Result}
                showDescription={true}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h4 className="text-2xl my-2 ml-2">No Filmography</h4>
        </div>
      )}
    </div>
  );
}

export default Filmography;
