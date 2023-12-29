"use client";

import React from "react";
import PaginationButtons from "@/components/ui/pagination-buttons";
import useDeviceInfo from "@/hooks/use-device-info";
import { Result } from "@/types/show/show-result";
import ShowCard from "./show-card";

type ShowsPaginated = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

function ShowsPaginated({
  shows,
  paginatePath,
}: {
  shows: ShowsPaginated;
  paginatePath: string;
}) {
  const { width } = useDeviceInfo();

  return (
    <div className="mt-5 flex flex-col  ">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {shows?.results.length === 0 && (
          <div className="mx-auto">No Shows Found</div>
        )}

        {shows?.results?.map((show) => (
          <ShowCard key={show.id} show={show} showDescription={true} />
        ))}
      </div>
      {shows?.results.length! > 0 && (
        <div className="mx-auto mt-4">
          <PaginationButtons
            pathname={paginatePath}
            currentPage={Number(shows.page)}
            totalPages={Number(shows?.total_pages)}
            pagesToShow={(width || 480) > 300 ? 5 : 2}
          />
        </div>
      )}
    </div>
  );
}

export default ShowsPaginated;
