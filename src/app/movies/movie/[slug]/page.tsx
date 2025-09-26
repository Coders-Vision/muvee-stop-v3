import Container from "@/layout/container";
import { getMovieDetails } from "@/actions/movies/get-movie-details";
import { getSimilarMovies } from "@/actions/movies/get-similar-movies";
import { Metadata } from "next";
import { createUrlSLug } from "@/lib/slugify";
import MovieBanner from "./components/movie-banner";
import MovieDetails from "./components/movie-details";
import MovieCast from "./components/movie-cast";
import SimilarMovies from "./components/similar-movies";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import MediaCardSkeleton from "@/components/skeletons/media-card-skeleton";

type MoviePage = {
  params: Promise<{
    slug: string;
  }>;
};

//Next js SEO Tag Generation
export async function generateMetadata(props: MoviePage): Promise<Metadata> {
  const params = await props.params;
  const movieId = params.slug.split("-")[0];
  const getMovie = await getMovieDetails(movieId);

  try {
    if (!getMovie.title) {
      return {
        title: "",
      };
    } else {
      return {
        title: getMovie.title,
        description: getMovie.overview,
        openGraph: {
          title: getMovie.title,
          description: getMovie.overview,
          // images: product.images,
          type: "website",
        },
        twitter: {
          title: getMovie.title,
          description: getMovie.overview,
        },
        alternates: {
          canonical: `/movies/movie/${createUrlSLug(movieId, getMovie.title)}`,
        },
      };
    }
  } catch (error) {
    return {
      title: "No Name",
    };
  }
}

async function Movie(props: MoviePage) {
  const params = await props.params;
  const movieId = params.slug.split("-")[0];

  const [movie, similarMovies] = await Promise.all([
    getMovieDetails(movieId),
    getSimilarMovies(movieId),
  ]);

  // if (!movie) {
  //   notFound();
  // }

  return (
    <main className="flex flex-col min-h-screen space-y-8 pb-8">
      {/* Hero Banner Section */}
      <MovieBanner movie={movie} />

      {/* Movie Info Section */}
      <Container className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <MovieDetails movie={movie} />
          </div>
          <div className="lg:col-span-4">
            <MovieCast movieId={movie.id} />
          </div>
        </div>
      </Container>

      {/* Similar Movies Section */}
      <Container className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="flex items-center justify-center gap-x-4 ">
              <MediaCardSkeleton skeletonCount={5} />
            </div>
          }
        >
          <SimilarMovies results={similarMovies.results} />
        </Suspense>
      </Container>
    </main>
  );
}

export default Movie;
