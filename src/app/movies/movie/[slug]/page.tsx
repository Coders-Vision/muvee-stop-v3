import Container from "@/layout/container";
import { getMovieDetails } from "@/actions/movies/get-movie-details";
import { Metadata } from "next";
import { createUrlSLug } from "@/lib/slugify";
import MovieBanner from "./components/movie-banner";
import MovieDetails from "./components/movie-details";
import MovieCast from "./components/movie-cast";
import SimilarMovies from "./components/similar-movies";
import { notFound } from "next/navigation";

export const revalidate = 3600;

type MoviePage = {
  params: {
    slug: string;
  };
};

//Next js SEO Tag Generation
export async function generateMetadata({
  params,
}: MoviePage): Promise<Metadata> {
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

async function Movie({ params }: MoviePage) {
  const movieId = params.slug.split("-")[0];
  const movie = await getMovieDetails(movieId);

  // if (!movie) {
  //   notFound();
  // }

  return (
    <>
      <section>
        <MovieBanner movie={movie} />
      </section>
      <section>
        <Container>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <MovieDetails movie={movie} />
            <MovieCast movieId={movie.id} />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <SimilarMovies movieId={movie.id} />
        </Container>
      </section>
    </>
  );
}

export default Movie;
