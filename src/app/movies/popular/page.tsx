import { discoverMovies } from "@/actions/movies/discover-movies";
import Container from "@/layout/container";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";
import MoviesPaginated from "@/components/movie-paginated";
import Filter from "@/components/filter";

// import MovieInfiniteScroll from "@/components/movie-infinite-scroll";

type PopularMovie = {
  searchParams: Promise<MovieFilterParams>;
};

//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "Popular Movies",
};

async function Popular(props: PopularMovie) {
  const searchParams = await props.searchParams;
  const popularMovies = await discoverMovies({
    ...searchParams,
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Popular Movies</h1>
      <Filter type="movies" />
      <MoviesPaginated
        movies={popularMovies}
        paginatePath={"/movies/popular"}
      />
      {/* <MovieInfiniteScroll
        movies={popularMovies}
        paginatePath="/movies/popular"
      /> */}
    </Container>
  );
}

export default Popular;
