import ImageWithFallback from "@/components/image-with-fallback";
import { formatDate } from "@/lib/date-funcs";
import { getOriginalImage } from "@/lib/get-image-path";
import { Season } from "@/types/show/season";
import { Show } from "@/types/show/show";

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
        className="w-full h-auto aspect-[16/9] md:aspect-[2.7/1] object-cover"
      />
   

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90"></div>

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <button className="w-16 h-16 bg-ms-green rounded-full flex items-center justify-center hover:ms-green transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36px" height="36px">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>
      {/* Text Content */}
      <div className="absolute bottom-0 left-8 right-8 z-30 py-6">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white">
        {show.name} | Season {season.season_number} <span className="font-light">({formatDate(season.air_date, "yyyy")})</span>
        </h1>
        <p className="text-white text-sm md:text-base leading-tight mt-2 max-w-xl">
          {season.overview}
        </p>
        <div className="flex gap-2 mt-4">
          <span className="text-xs md:text-sm font-bold text-ms-green">IMDB {season.vote_average}</span>
          <span className="text-xs md:text-sm font-bold text-ms-green">{season.episodes.length} Episodes</span>
        </div>
      </div>
    </div>
  );
}

export default SeasonBanner;
