"use client";

import React from "react";
import MovieCard from "@/components/movie-card";
import ShowCard from "@/components/show-card";
import { SearchResult } from "@/types/search/search";
import { Result as MovieResult } from "@/types/movie/movie-result";
import PaginationButtons from "@/components/ui/pagination-buttons";
import useDeviceInfo from "@/hooks/use-device-info";

interface SearchedResultProps {
  page: number;
  data: SearchResult;
}

function SearchedResult({ page, data }: SearchedResultProps) {
  const { width } = useDeviceInfo();

  return (
    <div className="mt-5 flex gap-x-4 flex-col w-full ">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data?.results?.length === 0 && (
          <div className="w-96 mx-auto">No Movies or Shows Found</div>
        )}
        {data?.results?.map((media) => {
          return media?.media_type === "movie" ? (
            <MovieCard
              key={media.id}
              movie={media as unknown as MovieResult}
              showDescription={true}
              showLabel={true}
            />
          ) : media?.media_type === "tv" ? (
            <ShowCard
              key={media.id}
              show={media as unknown as any}
              showDescription={true}
              showLabel={true}
            />
          ) : (
            <></>
          );
        })}
      </div>
      {data?.results?.length! > 0 && (
        <div className="mx-auto mt-4">
          <PaginationButtons
            pathname={"/search"}
            currentPage={Number(page)}
            totalPages={Number(data?.total_pages)}
            pagesToShow={(width || 480) > 300 ? 5 : 2}
          />
        </div>
      )}
    </div>
  );
}

export default SearchedResult;
