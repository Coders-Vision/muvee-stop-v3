import { discoverShows } from "@/actions/shows/discover-shows";
import Container from "@/layout/container";
import { ShowFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";
import ShowsPaginated from "@/components/show-paginated";
import { getDate, addDate } from "@/lib/date-funcs";

type OnTVShow = {
  searchParams: ShowFilterParams;
};

//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "On TV",
};

async function OnTV({ searchParams }: OnTVShow) {
  const getTodaysDate = getDate();
  const addOneWeek = addDate(7);

  const onTvToday = await discoverShows({
    page: searchParams.page,
    sort_by: "popularity.desc",
    "air_date.gte": getTodaysDate,
    "air_date.lte": addOneWeek,
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Shows On TV</h1>
      <ShowsPaginated shows={onTvToday} paginatePath={"/shows/on-tv"} />
    </Container>
  );
}

export default OnTV;
