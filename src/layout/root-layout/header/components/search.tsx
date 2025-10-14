"use client";
import React, { KeyboardEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchType, SearchResult } from "@/types/search/search";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { createUrlSLug } from "@/lib/slugify";
import ImageWithFallback from "@/components/image-with-fallback";
import { getOriginalImage, getPosterImage } from "@/lib/get-image-path";
import useGet from "@/hooks/api/use-get";
import { getSearch } from "@/actions/search";
import { useDebounce } from "@/hooks/use-debounce";
// import { searchQuery } from "@/client-apis/search-query";

function Suggestions({
  search,
  searchResult,
  onSuggestionHide,
}: {
  search: string;
  searchResult: SearchResult[];
  onSuggestionHide: () => void;
}) {
  const router = useRouter();

  const ViewAll = () => {
    return (
      <div className="inline-flex p-2">
        <Button
          onClick={() => {
            router.push(`/search?searchQuery=${search}&page=1`);
            onSuggestionHide && onSuggestionHide();
          }}
          className="w-full py-6 text-md rounded-2xl"
        >
          View All Results
        </Button>
      </div>
    );
  };

  const ResultDetails = ({ result }: { result: SearchResult }) => {
    const resultType =
      result?.media_type === "movie"
        ? "Movie"
        : result?.media_type === "tv"
        ? "Show"
        : "Celebrity";

    return (
      <div className="flex flex-wrap items-center justify-start gap-3 text-xs ">
        {resultType !== "Celebrity" ? (
          <div className="flex justify-center items-center gap-1">
            <Star fill="white" size={12} /> {result.vote_average?.toFixed(1)}
          </div>
        ) : (
          <></>
        )}
        <div>{resultType}</div>
        {resultType !== "Celebrity" ? (
          <div>
            {new Date(
              (resultType === "Movie"
                ? result.release_date
                : result.first_air_date) || ""
            ).getFullYear()}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  const goToPage = (result: SearchResult) => {
    onSuggestionHide && onSuggestionHide();
    if (result?.media_type === "movie") {
      router.push(
        `/movies/movie/${createUrlSLug(result.id + "", result.original_title!)}`
      );
    }
    if (result?.media_type === "tv") {
      router.push(`/shows/show/${createUrlSLug(result.id + "", result.name!)}`);
    }
    if (result?.media_type === "person") {
      router.push(`/person/${createUrlSLug(result.id + "", result.name!)}`);
    }
  };

  const MovieShow = ({ result }: { result: SearchResult }) => {
    const image =
      result.media_type !== "person"
        ? getPosterImage(result?.poster_path!)
        : getOriginalImage(result?.profile_path!);

    return (
      <div
        className="hover:bg-popover inline-flex p-2 select-none cursor-pointer transition duration-300"
        onClick={() => goToPage(result)}
      >
        <ImageWithFallback
          src={image}
          alt={`${result.original_title}`}
          className="w-fit h-14 rounded-xl object-cover aspect-square mr-2"
          width="0"
          height="0"
          sizes="md"
          loading="eager"
        />

        <div className="mt-1">
          <h4 className="font-bold">
            {result?.media_type === "movie"
              ? result.title ?? result.original_title
              : result.name ?? result.original_name}
          </h4>
          <ResultDetails result={result} />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-900/60 backdrop-filter backdrop-blur-xs rounded-2xl absolute mt-1 flex flex-col divide-y-2 divide-slate-400/4.5 transition-all duration-75 ease-in-out z-40 ">
      {searchResult?.map((result, index) => (
        <MovieShow result={result} key={index} />
      ))}
      <ViewAll />
    </div>
  );
}

function Search() {
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce(search);
  const router = useRouter();
  // const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const { data, error, isLoading } = useGet<SearchType>({
    fetchRecord: getSearch,
    IsFetch: search.length > 0 ? true : false,
    recordName: "search",
    recordQuery: { query: debouncedValue },
  });

  const searchList = Array.isArray(data?.results)
    ? data.results.slice(0, 4)
    : [];

  const closeSearchSuggestion = () => {
    if (search) {
      setSearch("");
    }
  };

  const goToSearchPage = (event: KeyboardEvent<HTMLInputElement>) => {
    const searchQuery = (event.target as HTMLInputElement).value;
    if (event.key === "Enter" && searchQuery) {
      router.push(`/search?searchQuery=${search}&page=1`);
      closeSearchSuggestion();
    }
  };

  return (
    <div className="relative mx-2 max-w-[900px] ">
      <Input
        className="rounded-2xl py-4"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for Movies and TV-Shows"
        onKeyUp={goToSearchPage}
      />
      <div className="transition-all duration-[0.5s] ease-[ease-in-out]">
        {search && searchList.length > 0 ? (
          <Suggestions
            search={search}
            searchResult={searchList}
            onSuggestionHide={closeSearchSuggestion}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Search;
