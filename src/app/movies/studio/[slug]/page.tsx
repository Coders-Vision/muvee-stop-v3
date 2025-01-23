import { discoverMovies } from "@/actions/movies/discover-movies";
import MoviesPaginated from "@/components/movie-paginated";
import { TMDB_WATCH_REGION } from "@/constants/tmdb-contants";
import Container from "@/layout/container";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";

type StudioMovies = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<MovieFilterParams>;
};

export const metadata: Metadata = {
  title: "Studio Movies",
};

async function StudioMovies(props: StudioMovies) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const providerId = params.slug.split("-")[0];
  const studioMovies = await discoverMovies({
    page: searchParams?.page,
    with_watch_providers: providerId,
    watch_region: TMDB_WATCH_REGION,
  });
  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Studio Movies</h1>
      <MoviesPaginated
        movies={studioMovies}
        paginatePath={`/movies/studio/${params.slug}`}
      />
    </Container>
  );
}

export default StudioMovies;
