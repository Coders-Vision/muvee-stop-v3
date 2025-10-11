import React from "react";
import { Card } from "../ui/card";
import GenreFilter from "./genre-filter";
import SortFilter from "./sort-filter";
import { DatePicker } from "../ui/date-picker";

interface FilterProps {
  type?: "movies" | "tv";
}

export function Filter({ type }: FilterProps) {
  return (
    <Card className="flex flex-col md:flex-row  justify-start gap-4 md:gap-6 p-4 md:p-6 my-4 mx-4 rounded-md">
      <GenreFilter />
      <SortFilter />
      <DatePicker placeholder="Release Date From" className="w-[200px]" mode="range" />
      {/* <Link
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "rounded-xl",
        })}
        href={{
          pathname,
          query: {
            ...removeNullUndefined(getExistingQuery()),
            with_genres: selectedGenres.map((g) => g.value).join(","),
            sort_by: selectedSort,
          },
        }}
      >
        <Lucide name="Funnel" className="size-4" fill="#fff" />
        Apply Filters
      </Link> */}
    </Card>
  );
}
