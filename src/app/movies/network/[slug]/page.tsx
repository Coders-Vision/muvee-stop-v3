import { discoverMovies } from "@/actions/movies/discover-movies";
import Filter from "@/components/filter";
import MoviesPaginated from "@/components/movie-paginated";
import { TMDB_WATCH_REGION } from "@/constants/tmdb-contants";
import Container from "@/layout/container";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";

type NetworkMovies = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<MovieFilterParams>;
};

export const metadata: Metadata = {
  title: "Network Movies",
};

async function NetworkMovies(props: NetworkMovies) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const providerId = params.slug.split("-")[0];
  const providerName = params.slug.split("-").slice(1).join(" ") || "Network";

  const studioMovies = await discoverMovies({
    page: searchParams?.page,
    with_watch_providers: providerId,
    watch_region: TMDB_WATCH_REGION,
    ...searchParams,
  });
  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">{providerName} Movies</h1>
      <Filter type="movies" />
      <MoviesPaginated
        movies={studioMovies}
        paginatePath={`/movies/network/${params.slug}`}
      />
    </Container>
  );
}

export default NetworkMovies;
