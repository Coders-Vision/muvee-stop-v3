"use client";

import MovieCard from "@/components/movie-card";
import PaginationButtons from "@/components/ui/pagination-buttons";
import useDeviceInfo from "@/hooks/use-device-info";
import { DiscoverMovies } from "@/types/filter/discover-movies";
import React from "react";

function PopularMovies({ popularMovies }: { popularMovies: DiscoverMovies }) {
  const { width } = useDeviceInfo();
  return (
    <div className="mt-5 flex flex-col  ">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {popularMovies?.results.length === 0 && (
          <div className="mx-auto">No Movies Found</div>
        )}

        {popularMovies?.results?.map((media) => (
          <MovieCard key={media.id} movie={media} showDescription={true} />
        ))}
      </div>
      {popularMovies?.results.length! > 0 && (
        <div className="mx-auto mt-4">
          <PaginationButtons
            pathname={"/movies/popular"}
            currentPage={Number(popularMovies.page)}
            totalPages={Number(popularMovies?.total_pages)}
            pagesToShow={(width || 480) > 300 ? 5 : 2}
          />
        </div>
      )}
    </div>
  );
}

export default PopularMovies;
