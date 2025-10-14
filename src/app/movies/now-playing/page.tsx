import MoviesPaginated from "@/components/movie-paginated";
import Container from "@/layout/container";
import { Metadata } from "next";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { discoverMovies } from "@/actions/movies/discover-movies";
import { getDate, getDifference } from "@/lib/date-funcs";
import Filter from "@/components/filter";

type NowPlayingMovie = {
  searchParams: Promise<MovieFilterParams>;
};

//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "Now Playing Movies",
};

async function NowPlaying(props: NowPlayingMovie) {
  const searchParams = await props.searchParams;
  const getTodaysDate = getDate();
  const twoWeekDiff = getDifference(14);

  const nowPlayingMovies = await discoverMovies({
    page: searchParams.page,
    sort_by: "popularity.desc",
    with_release_type: "2|3",
    "release_date.gte": twoWeekDiff,
    "release_date.lte": getTodaysDate,
    ...searchParams,
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Now Playing Movies</h1>
      <Filter type="movies" />
      <MoviesPaginated
        movies={nowPlayingMovies}
        paginatePath={"/movies/now-playing"}
      />
    </Container>
  );
}

export default NowPlaying;
