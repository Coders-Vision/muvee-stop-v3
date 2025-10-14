import { discoverShows } from "@/actions/shows/discover-shows";
import Container from "@/layout/container";
import { ShowFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";
import ShowsPaginated from "@/components/show-paginated";
import Filter from "@/components/filter";

type PopularShow = {
  searchParams: Promise<ShowFilterParams>;
};

//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "Popular Shows",
};

async function Popular(props: PopularShow) {
  const searchParams = await props.searchParams;
  const popularShows = await discoverShows({
    page: searchParams.page,
    sort_by: "popularity.desc",
    ...searchParams,
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Popular Shows</h1>
      <Filter type="tv" />
      <ShowsPaginated shows={popularShows} paginatePath={"/shows/popular"} />
    </Container>
  );
}

export default Popular;
