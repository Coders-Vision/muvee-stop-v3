import { discoverMovies } from "@/actions/movies/discover-movies";
import Container from "@/layout/container";
import { MovieFilterParams } from "@/types/filter/filter-params";
import { Metadata } from "next";
import MoviesPaginated from "@/components/movie-paginated";

type PopularMovie = {
  searchParams: MovieFilterParams;
};

//Next js SEO Tag Generation
export const metadata: Metadata = {
  title: "Popular Movies",
};

async function Popular({ searchParams }: PopularMovie) {
  const popularMovies = await discoverMovies({
    page: searchParams.page,
    sort_by: "popularity.desc",
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mt-4 mx-4">Popular Movies</h1>
      <MoviesPaginated movies={popularMovies}/>
    </Container>
  );
}

export default Popular;
