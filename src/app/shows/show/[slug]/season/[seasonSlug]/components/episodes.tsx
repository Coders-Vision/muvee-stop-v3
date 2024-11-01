import ImageWithFallback from "@/components/image-with-fallback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lucide } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDate } from "@/lib/date-funcs";
import { getBannerImageSmall } from "@/lib/get-image-path";
import { generateSeasonsEpisodeCode } from "@/lib/misc-funcs";
import { Episode } from "@/types/show/season";

function Episodes({ episodes }: { episodes: Episode[] }) {
  return (
    <div>
      <h1 className="font-extrabold text-2xl my-2 ml-2">
        Episodes ({episodes.length})
      </h1>
      <ScrollArea className="h-72 rounded-md border-0 px-3 ">
        <Accordion type="single" collapsible>
          {episodes.map((episode) => (
            <AccordionItem key={episode.id} value={`${episode.id}`}>
              <AccordionTrigger className="hover:no-underline">
                <div>
                  <span className="font-black">
                    {generateSeasonsEpisodeCode(
                      episode.season_number,
                      episode.episode_number
                    )}
                  </span>
                  {" - "}
                  {episode.name}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col items-center sm:flex-row gap-4">
                  <div className="relative w-72 sm:w-56 aspect-video overflow-hidden rounded-xl shadow-lg transition-all duration-300 filter grayscale hover:grayscale-0">
                    <ImageWithFallback
                      fallback="/images/default-landscape.svg"
                      src={getBannerImageSmall(episode.still_path)}
                      alt={`${episode.name}`}
                      placeholder="empty"
                      loading="eager"
                      width="0"
                      height="0"
                      sizes="(max-width: 640px) 160px, 224px"
                      className="object-cover w-full h-full"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-white bg-opacity-35 hover:bg-opacity-75">
                        <Lucide
                          name="Play"
                          size="40px"
                          className="text-ms-green"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="md:mx-4">
                    <div className="mb-2">
                      <h3 className="font-semibold mb-1">Synopsis</h3>
                      <p className="font-light">{episode.overview}</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-xs font-bold flex items-center gap-2">
                        <Lucide name="Star" size="20px" />
                        {episode.vote_count}
                      </div>
                      <div className="text-xs font-thin flex items-center gap-2">
                        <Lucide name="Tv" size="20px" />
                        {formatDate(episode.air_date, "PPP")}
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  );
}

export default Episodes;
