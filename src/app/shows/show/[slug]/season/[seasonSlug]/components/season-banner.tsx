import ImageWithFallback from "@/components/image-with-fallback";
import { formatDate } from "@/lib/date-funcs";
import { getOriginalImage } from "@/lib/get-image-path";
import { Season } from "@/types/show/season";
import { Show } from "@/types/show/show";
import SeasonPlayer from "./season-player";

function SeasonBanner({ season, show }: { season: Season; show: Show }) {
  return (
    <div className="relative mt-2">
      {/* Background image */}
      <ImageWithFallback
        fallback="/images/default-landscape.svg"
        src={getOriginalImage(season.poster_path)}
        alt={`${season.name}`}
        placeholder="empty"
        loading="eager"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto aspect-video md:aspect-[2.7/1] object-cover"
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent opacity-90"></div>

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-40">
        {/* <SeasonPlayer /> */}
      </div>
      {/* Text Content */}
      <div className="absolute bottom-0 left-8 right-8 z-30 py-3 md:py-6 bg-stone-600 bg-opacity-30 rounded-xl px-4">
        <h1 className="text-lg md:text-4xl font-extrabold text-white">
          {show.name} | Season {season.season_number}{" "}
          <span className="font-light">
            ({season.air_date && formatDate(season.air_date, "yyyy")})
          </span>
        </h1>

        <div className="flex gap-2 mt-1 md:mt-4">
          <span className="text-xs md:text-sm font-bold text-ms-green">
            IMDB {season.vote_average}
          </span>
          <span className="text-xs md:text-sm font-bold text-ms-green">
            {season.episodes.length} Episodes
          </span>
        </div>
      </div>
    </div>
  );
}

export default SeasonBanner;
