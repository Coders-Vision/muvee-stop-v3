import MoviesPaginated from "@/components/movie-paginated";
import Container from "@/layout/container";
import { Metadata } from "next";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { discoverMovies } from "@/actions/movies/discover-movies";
import Filter from "@/components/filter";

type TopRatedMovie = {
  searchParams: Promise<MovieFilterParams>;
};

//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "Top Rated Movies",
};

async function UpcomingMovies(props: TopRatedMovie) {
  const searchParams = await props.searchParams;

  const topRatedMovies = await discoverMovies({
    page: searchParams.page,
    sort_by: "vote_average.desc",
    without_genres: "99,10755",
    "vote_count.gte": "200",
    ...searchParams,
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Top Rated Movies</h1>
      <Filter type="movies" />
      <MoviesPaginated
        movies={topRatedMovies}
        paginatePath={"/movies/top-rated"}
      />
    </Container>
  );
}

export default UpcomingMovies;
