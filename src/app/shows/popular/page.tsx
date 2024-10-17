import { discoverShows } from "@/actions/shows/discover-shows";
import Container from "@/layout/container";
import { ShowFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";
import ShowsPaginated from "@/components/show-paginated";

type PopularShow = {
  searchParams: ShowFilterParams;
};

export const runtime = 'edge'
//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "Popular Shows",
};

async function Popular({ searchParams }: PopularShow) {
  const popularShows = await discoverShows({
    page: searchParams.page,
    sort_by: "popularity.desc",
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Popular Shows</h1>
      <ShowsPaginated
        shows={popularShows}
        paginatePath={"/shows/popular"}
      />
    </Container>
  );
}

export default Popular;
