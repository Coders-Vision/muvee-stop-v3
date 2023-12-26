import { getSimilarMovies } from "@/actions/movies/get-similar-movies";
// import { SimilarMovies as SimilarMoviesType } from "@/types/movie/similar-movies";
import MovieSlider from "@/components/movie-slider";

async function SimilarMovies({ movieId }: { movieId: number }) {
  const similarMovies = await getSimilarMovies(movieId);

  return (
    <MovieSlider
      title="Similar Movies"
      results={similarMovies?.results! || []}
      showDescription={true}
    />
  );
}

export default SimilarMovies;
