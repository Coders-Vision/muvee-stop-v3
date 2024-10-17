import { discoverShows } from "@/actions/shows/discover-shows";
import Container from "@/layout/container";
import { ShowFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";
import ShowsPaginated from "@/components/show-paginated";

type TopRatedShow = {
  searchParams: ShowFilterParams;
};

export const runtime = process.env.RUNTIME;
//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "Top Rated Shows",
};


async function TopRated({ searchParams }: TopRatedShow) {
  const topRatedShows = await discoverShows({
    page: searchParams.page,
    sort_by: "vote_average.desc",
    "vote_count.gte":"200"
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Top Rated Shows</h1>
      <ShowsPaginated
        shows={topRatedShows}
        paginatePath={"/shows/top-rated"}
      />
    </Container>
  );
}

export default TopRated;
