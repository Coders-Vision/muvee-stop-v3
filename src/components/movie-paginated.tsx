"use client";

import React from "react";
import MovieCard from "@/components/movie-card";
import PaginationButtons from "@/components/ui/pagination-buttons";
import useDeviceInfo from "@/hooks/use-device-info";
import { Result } from "@/types/movie/movie-result";

type MoviesPaginated = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

function MoviesPaginated({
  movies,
  paginatePath,
}: {
  movies: MoviesPaginated;
  paginatePath: string;
}) {
  const { width } = useDeviceInfo();

  return (
    <div className="mt-5 flex flex-col  ">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies?.results.length === 0 && (
          <div className="mx-auto">No Movies Found</div>
        )}
        {movies?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} showDescription={true} />
        ))}
      </div>
      {movies?.results.length! > 0 && (
        <div className="mx-auto mt-4">
          <PaginationButtons
            pathname={paginatePath}
            currentPage={Number(movies.page)}
            totalPages={Number(movies?.total_pages)}
            pagesToShow={(width || 480) > 300 ? 5 : 2}
          />
        </div>
      )}
    </div>
  );
}

export default MoviesPaginated;
