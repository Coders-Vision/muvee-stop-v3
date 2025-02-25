import MoviesPaginated from "@/components/movie-paginated";
import Container from "@/layout/container";
import { Metadata } from "next";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { discoverMovies } from "@/actions/movies/discover-movies";
import { addDate, getDate,  } from "@/lib/date-funcs";

type UpcomingMovie = {
  searchParams: Promise<MovieFilterParams>;
};

//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "Upcoming Movies",
};

async function UpcomingMovies(props: UpcomingMovie) {
  const searchParams = await props.searchParams;
  const twoMonthsAdd = addDate(60);
  const fouraMonthsAdd = addDate(240);

  const nowPlayingMovies = await discoverMovies({
    page: searchParams.page,
    sort_by: "popularity.desc",
    with_release_type: "2|3",
    "release_date.gte": twoMonthsAdd,
    "release_date.lte": fouraMonthsAdd,
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Upcoming Movies</h1>
      <MoviesPaginated
        movies={nowPlayingMovies}
        paginatePath={"/movies/upcoming"}
      />
    </Container>
  );
}

export default UpcomingMovies;
