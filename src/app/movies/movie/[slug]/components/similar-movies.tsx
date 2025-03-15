import { getSimilarMovies } from "@/actions/movies/get-similar-movies";
// import { SimilarMovies as SimilarMoviesType } from "@/types/movie/similar-movies";
import { Result } from "@/types/movie/movie-result";
import MovieSlider from "@/components/movie-slider";

// async function SimilarMovies({ movieId }: { movieId: number }) {
  // const similarMovies = await getSimilarMovies(movieId);
  async function SimilarMovies({ results }: { results: Result[] }) {
    
  return (
    <MovieSlider
      title="Similar Movies"
      results={results || []}
      showDescription={true}
    />
  );
}

export default SimilarMovies;
