"use client";

import React, { useEffect, useState, useRef } from "react";
import MovieCard from "@/components/movie-card";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Result } from "@/types/movie/movie-result";

type MovieInfiniteScroll = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

function MovieInfiniteScroll({
  movies,
  paginatePath,
}: {
  movies: MovieInfiniteScroll;
  paginatePath: string;
}) {
  const router = useRouter();
  const [moviesList, setMoviesList] = useState<Result[]>([]);
  const lastPageRef = useRef<number>(movies.page || 1);

  useEffect(() => {
    if (movies?.results.length) {
      setMoviesList((prevMovies) => {
        const newMovies = movies.results.filter(
          (newMovie) => !prevMovies.some((movie) => movie.id === newMovie.id)
        );
        return [...prevMovies, ...newMovies];
      });
      lastPageRef.current = movies.page;
    }
  }, [movies]);

  const loadMore = () => {
    if (lastPageRef.current < movies.total_pages) {
      router.replace(`${paginatePath}?page=${lastPageRef.current + 1}`, {
        scroll: false,
      });
    }
  };

  return (
    <div className="mt-5 flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {moviesList.length === 0 && (
          <div className="mx-auto">No Movies Found</div>
        )}
        {moviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} showDescription={true} />
        ))}
      </div>
      {movies.page < movies.total_pages && (
        <div className="my-10 mx-auto">
          <Button
            onClick={loadMore}
            variant="outline"
            className="flex items-center gap-x-2 bg-transparent border-2 border-white rounded-xl text-white"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}

export default MovieInfiniteScroll;


