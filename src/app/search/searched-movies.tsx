"use client";

import React, { useState } from "react";
import useGet from "@/hooks/api/use-get";
import MovieCard from "@/components/movie-card";
import { SearchType } from "@/types/search/search";
import ShowCard from "@/components/show-card";
import { Result as MovieResult } from "@/types/movie/movie-result";
// import { Card } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
import { getSearch } from "@/actions/search";
import PaginationButtons from "@/components/ui/pagination-buttons";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useDeviceInfo from "@/hooks/use-device-info";
import _ from "lodash";

function SearcheddMovies({
  page,
  searchQuery,
}: {
  page: number;
  searchQuery: string;
}) {
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const current = new URLSearchParams(Array.from(searchParams.entries()));

  const { width } = useDeviceInfo();
  // const [search, setSearch] = useState<string>("");

  const { data, error, isLoading } = useGet<SearchType>({
    fetchRecord: getSearch,
    IsFetch: true,
    recordName: "searchPage",
    recordQuery: { query: searchQuery, page },
  });

  // const onSearch = (queryString: string) => {
  //   const query = search ? `?${queryString}` : "";
  //   router.push(`${pathname}${query}`);
  // };

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.trim();
  //   if (!value) {
  //     current.delete("");
  //   } else {
  //     current.set("searchQuery", e.target.value);
  //     current.set("page", "1");
  //   }
  //   const queryString = current.toString();
  //   onSearch(queryString);
  //   setSearch(e.target.value);
  // };

  return (
    <div className="mt-5 flex gap-x-4 flex-col w-full ">
      {/* <div className="mb-4 flex flex-col gap-4 ">
        <Card className="w-auto space-y-2 p-2 mx-2 bg-gray-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-80">
          <Input
            value={search}
            onChange={handleSearch}
            className="rounded-xl"
            placeholder="Search for Movies and Shows"
          />
        </Card>
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {data?.results.length === 0 && (
          <div className="w-96 mx-auto">No Movies or Shows Found</div>
        )}

        {data?.results?.map((media) => {
          return media?.media_type === "movie" ? (
            <MovieCard
              key={media.id}
              movie={media as unknown as MovieResult}
              showDescription={true}
            />
          ) : media?.media_type === "tv" ? (
            <ShowCard
              key={media.id}
              show={media as unknown as any}
              showDescription={true}
            />
          ) : (
            <></>
          );
        })}
      </div>
      {data?.results.length! > 0 && (
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

export default SearcheddMovies;
