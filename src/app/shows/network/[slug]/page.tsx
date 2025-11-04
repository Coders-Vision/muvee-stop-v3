import { discoverShows } from "@/actions/shows/discover-shows";
import Filter from "@/components/filter";
import ShowsPaginated from "@/components/show-paginated";
import { TMDB_WATCH_REGION } from "@/constants/tmdb-contants";
import Container from "@/layout/container";
import { ShowFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";

type NetworkShows = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<ShowFilterParams>;
};
export const metadata: Metadata = {
  title: "Network Shows",
};

async function NetworkShows(props: NetworkShows) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const providerId = params.slug.split("-")[0];
  const providerName =
    params.slug.split("-").slice(1).join(" ") || "Network";

  const studioShows = await discoverShows({
    page: searchParams.page,
    with_watch_providers: providerId,
    watch_region: TMDB_WATCH_REGION,
    ...searchParams,
  });
  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">{providerName} Shows</h1>
      <Filter type="movies" />
      <ShowsPaginated
        shows={studioShows}
        paginatePath={`/shows/network/${params.slug}`}
      />
    </Container>
  );
}

export default NetworkShows;
