import { Movie } from "@/types/movie/movie";
import { StarIcon } from "lucide-react";
import ImageWithFallback from "@/components/image-with-fallback";

import { getPosterImage } from "@/lib/get-image-path";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import ShareButton from "@/components/share-button";
import Overview from "@/components/overview";

function MovieDetails({ movie }: { movie: Movie }) {
  return (
    <div className="relative sm:flex gap-6 mt-20 mx-4 select-none sm:max-w-md sm:mx-auto  lg:max-w-none">
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-600 lg:bg-none md:flex-shrink-0 ">
        <ImageWithFallback
          src={getPosterImage(movie.poster_path)}
          alt={`${movie.title}`}
          placeholder="empty"
          loading="eager"
          width="0"
          height="0"
          sizes="100vw"
          className="w-[500px] lg:w-[250px] h-auto mix-blend-overlay opacity-80 md:opacity-100 lg:mix-blend-normal border-opacity-80 shadow-2xl rounded-xl border-[3px] border-[#f9f9f9]"
        />
      </div>
      <div className="absolute lg:static top-12 mx-2 max-w-[900px] text-opacity-30 text-[.75rem] md:text-[.85rem] lg:text-[1rem]">
        <ScrollArea className="h-[calc(100vh-350px)] md:h-auto">
          <div className="flex items-center space-x-6 justify-between">
            <h1 className="text-xl md:text-3xl font-bold my-2">
              {movie.title}
            </h1>
            <span>
              <ShareButton
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                url="movies/movie"
              />
            </span>
          </div>

          <div className="flex gap-2">
            <div className="flex ">
              <div className="flex items-center gap-1">
                <StarIcon fill="white" size={18} />
                {movie.vote_average?.toFixed(1)}
              </div>
            </div>
            <div>{new Date(movie.release_date).getFullYear()}</div>
            <div>{movie.runtime} min</div>
          </div>
          <Overview overview={movie.overview} />
          <dl className="grid grid-cols-[auto,1fr] gap-x-6 gap-y-4">
            <dt className="text-gray-300 font-light">Type</dt>
            <dd>Movie</dd>

            <dt className="text-gray-300 font-light">Status</dt>
            <dd>{movie.status}</dd>

            <dt className="text-gray-300 font-light">Country</dt>
            <dd>
              {movie.production_countries?.map((country, index) => (
                <span key={country.name}>
                  {country.name}
                  {index < movie.production_countries.length - 1 ? ", " : ""}
                </span>
              ))}
            </dd>

            <dt className="text-gray-300 font-light">Genre</dt>
            <dd className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <Badge key={genre.id} className="bg-ms-blue text-white">
                  {genre.name}
                </Badge>
              ))}
            </dd>

            <dt className="text-gray-300 font-light">Release</dt>
            <dd>{movie.release_date}</dd>

            <dt className="text-gray-300 font-light">Production</dt>
            <dd>
              {movie.production_companies.map((company, index) => (
                <span key={company.name}>
                  {company.name}
                  {index < movie.production_companies.length - 1 ? " • " : ""}
                </span>
              ))}
            </dd>
          </dl>
        </ScrollArea>
      </div>
    </div>
    // {/* <ImageWithFallback
    //   fill
    //   style={{ objectFit: "cover", objectPosition: "center left" }}
    //   alt="q"
    //   className="rounded-lg filter blur-lg absolute -z-40 top-0"
    //   src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    // /> */}
    // {/* </div> */}
  );
}

export default MovieDetails;
