"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React, { useState } from "react";
import { Season as SeasonType, Show } from "@/types/show/show";
import { getPosterImage } from "@/lib/get-image-path";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import ImageWithFallback from "@/components/image-with-fallback";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createUrlSLug } from "@/lib/slugify";
import Link from "next/link";

function Season({ season, showUrl }: { season: SeasonType; showUrl: string }) {
  const { poster_path, name, overview } = season;
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    overview?.length > 10 && setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Popover open={open}>
      <PopoverTrigger
        asChild
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="my-4">
          <div className="flex flex-col justify-center items-center my-2">
            <Card className="w-[100px] md:w-[150px] lg:w-[175px] rounded-xl shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <CardContent className="p-0">
                <Link
                  href={`/shows/show/${showUrl}/season/${season.season_number}`}
                >
                  <ImageWithFallback
                    src={getPosterImage(poster_path)}
                    alt={`${name}`}
                    placeholder="empty"
                    loading="eager"
                    width={175} // Set a fixed width
                    height={260} // Set a fixed height based on the image aspect ratio
                    sizes="100vw"
                    className="object-contain w-full h-auto rounded-xl"
                  />
                </Link>
              </CardContent>
            </Card>
            <h6 className="text-center mt-2 text-sm">{name}</h6>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-xl mx-4"
      >
        <div className="text-[0.75rem]">
          <p> {overview?.substring(0, 125)}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ShowSeasons({ show, showUrl }: { show: Show; showUrl: string }) {
  const { seasons } = show;

  return (
    <div className="mx-4 mt-2">
      <h4 className="text-xl my-4">Seasons</h4>

      <Card className="rounded-2xl shadow-2xl">
        <CardContent className="p-4 ">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            autoplay={{
              delay: 4000,
            }}
            speed={200}
            className="select-none"
            modules={[Pagination]}
            key={`seasons`}
            breakpoints={{
              280: { slidesPerView: 2, spaceBetween: 4 },
              360: { slidesPerView: 2.8, spaceBetween: 2 },
              480: { slidesPerView: 3.5, spaceBetween: 5 },
              768: { slidesPerView: 4, spaceBetween: 5 },
              820: { slidesPerView: 4, spaceBetween: 10 },
              900: { slidesPerView: 5, spaceBetween: 5 },
              1024: { slidesPerView: 5, spaceBetween: 5 },
              1200: { slidesPerView: 6, spaceBetween: 5 },
            }}
          >
            {seasons.map((result) => (
              <SwiperSlide key={result.id}>
                <Season showUrl={showUrl} season={result} />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContent>
      </Card>

      {/* <ScrollArea className="h-[calc(100vh-250px)] rounded-xl border p-4">
        <Accordion type="single" collapsible className="w-full">
          {seasons?.map((season) => (
            <AccordionItem value={`${season.id}`}>
              <AccordionTrigger>{season.name}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-row  items-start gap-6 my-3">
                  <ImageWithFallback
                    src={getPosterImage(season.poster_path!)}
                    alt={`${season.name}`}
                    placeholder="empty"
                    width="0"
                    height="0"
                    sizes="50vw"
                    className="w-[125px] rounded-xl flex-shrink-0"
                  />

                  <p className="my-2 font-light w-auto ">
                    {showMore
                      ? season.overview
                      : `${season.overview.substring(0, 250)}`}
                    {season.overview.length > 200 && (
                      <Button
                        className="p-0 mx-1 bg-transparent hover:bg-transparent text-white hover:underline inline"
                        size={"sm"}
                        onClick={() => setShowMore(!showMore)}
                      >
                        {showMore ? "Show less" : "Show more"}
                      </Button>
                    )}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea> */}
    </div>
  );
}

export default ShowSeasons;
