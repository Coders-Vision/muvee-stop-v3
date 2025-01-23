import { discoverShows } from "@/actions/shows/discover-shows";
import Container from "@/layout/container";
import { ShowFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";
import ShowsPaginated from "@/components/show-paginated";
import { getDate, getDifference } from "@/lib/date-funcs";

type AiringTodayShow = {
  searchParams: Promise<ShowFilterParams>;
};

//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "Shows Airing Today",
};

async function AiringToday(props: AiringTodayShow) {
  const searchParams = await props.searchParams;
  const getTodaysDate = getDate();
  const ondeDayDiff = getDifference(1);

  const showsAiringToday = await discoverShows({
    page: searchParams.page,
    sort_by: "popularity.desc",
    "air_date.gte": getTodaysDate,
    "air_date.lte": getTodaysDate,
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Shows Airing Today</h1>
      <ShowsPaginated
        shows={showsAiringToday}
        paginatePath={"/shows/airing-today"}
      />
    </Container>
  );
}

export default AiringToday;
