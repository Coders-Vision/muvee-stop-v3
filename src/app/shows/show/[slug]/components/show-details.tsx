import { Show } from "@/types/show/show";
import ImageWithFallback from "@/components/image-with-fallback";
import { getPosterImage } from "@/lib/get-image-path";
import { StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import ShareButton from "@/components/share-button";
import Overview from "@/components/overview";

function ShowDetails({ show }: { show: Show }) {
  const {
    id,
    poster_path,
    original_name,
    status,
    name,
    first_air_date,
    vote_average,
    number_of_seasons,
    overview,
    production_countries,
    genres,
    production_companies,
  } = show;

  return (
    <div className="relative sm:flex gap-6 mt-20 mx-4 select-none sm:max-w-md sm:mx-auto  lg:max-w-none">
      <div className="relative bg-linear-to-r from-gray-800 to-gray-600 lg:bg-none md:shrink-0 ">
        <ImageWithFallback
          src={getPosterImage(poster_path)}
          loading="eager"
          //   src={getBannerImage(backdrop_path)}
          alt={`${name}`}
          placeholder="empty"
          width="0"
          height="0"
          sizes="100vw"
          className="w-[500px] lg:w-[250px] h-auto mix-blend-overlay opacity-80 md:opacity-100 lg:mix-blend-normal border-opacity-80 shadow-2xl rounded-xl border-[3px] border-[#f9f9f9]"
        />
      </div>
      <div className="absolute lg:static top-12 mx-2 max-w-[900px] text-opacity-30 text-[.75rem] md:text-[.85rem] lg:text-[1rem]">
        <ScrollArea className="h-[calc(100vh-350px)] md:h-auto">
          <div className="flex items-center space-x-6 justify-between">
            <h1 className="text-xl md:text-3xl font-bold my-2">{name}</h1>
            <span>
              <ShareButton
                id={show.id}
                title={show.name}
                overview={show.overview}
                url="shows/show"
              />
            </span>
          </div>

          <div className="flex gap-2">
            <div className="flex ">
              <div className="flex items-center gap-1">
                <StarIcon fill="white" size={18} />
                {vote_average?.toFixed(1)}
              </div>
            </div>
            <div>{first_air_date?.substring(0,4)}</div>
            <div>{number_of_seasons} Seasons</div>
          </div>
          <Overview overview={show.overview} />
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4">
            <dt className="text-gray-300 font-light">Type</dt>
            <dd>Show</dd>

            <dt className="text-gray-300 font-light">Status</dt>
            <dd>
              <Badge className="bg-ms-blue text-white">{status}</Badge>
            </dd>
            <dt className="text-gray-300 font-light">Country</dt>
            <dd>
              {production_countries?.map((country, index) => (
                <span key={country.name}>
                  {country.name}
                  {index < production_countries.length - 1 ? ", " : ""}
                </span>
              ))}
            </dd>

            <dt className="text-gray-300 font-light">Genre</dt>
            <dd className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Badge key={genre.id} className="bg-ms-blue text-white">
                  {genre.name}
                </Badge>
              ))}
            </dd>
            {/* <dt className="text-gray-300 font-light">Release</dt>
            <dd>{show.release_date}</dd> */}
            <dt className="text-gray-300 font-light">Production</dt>
            <dd>
              {production_companies.map((company, index) => (
                <span key={company.name}>
                  {company.name}
                  {index <production_companies.length - 1 ? " • " : ""}
                </span>
              ))}
            </dd>
          </dl>
        </ScrollArea>
      </div>
    </div>
  );
}

export default ShowDetails;
