import { discoverShows } from "@/actions/shows/discover-shows";
import ShowsPaginated from "@/components/show-paginated";
import { TMDB_WATCH_REGION } from "@/constants/tmdb-contants";
import Container from "@/layout/container";
import { ShowFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";

type StudioShows = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<ShowFilterParams>;
};
export const metadata: Metadata = {
  title: "Studio Shows",
};

async function StudioShows(props: StudioShows) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const providerId = params.slug.split("-")[0];
  const studioShows = await discoverShows({
    page: searchParams.page,
    with_watch_providers: providerId,
    watch_region:TMDB_WATCH_REGION

  });
  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Studio Shows</h1>
      <ShowsPaginated
        shows={studioShows}
        paginatePath={`/shows/studio/${params.slug}`}
      />
    </Container>
  );
}

export default StudioShows;
