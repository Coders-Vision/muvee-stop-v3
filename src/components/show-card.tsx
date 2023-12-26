"use clent";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { createUrlSLug } from "@/lib/slugify";
import ImageWithFallback from "./image-with-fallback";

import { getPosterImage } from "@/lib/get-image-path";
import { Result as ShowResult } from "@/types/show/show-result";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { StarIcon } from "lucide-react";

function ShowCard({
  show,
  showDescription,
}: {
  show: ShowResult;
  showDescription: boolean;
}) {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    showDescription && setOpen(true);
  };

  const handleMouseLeave = () => {
    showDescription && setOpen(false);
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
        <div className="flex flex-col justify-center items-center my-2">
          <Card className="max-w-[125px] md:max-w-[175px] rounded-xl shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <CardContent className="p-0">
              <Link href={`/shows/show/${createUrlSLug(show.id + "", show.name)}`}>
                <ImageWithFallback
                  src={getPosterImage(show.poster_path)}
                  alt={`${show.name}`}
                  placeholder="empty"
                  loading="lazy"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="object-contain w-full h-auto rounded-xl"
                />
              </Link>
            </CardContent>
          </Card>
          <h6 className="text-center mt-2 text-sm">{show.name}</h6>
        </div>
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-xl mx-4 my-3"
      >
        <div className="">
          <h4 className="font-bold ">{show.name}</h4>
          <div className="flex gap-2 text-[0.75rem] my-2">
            <div className="flex ">
              <div className="flex items-center gap-1">
                <StarIcon fill="white" size={18} />
                {show.vote_average.toFixed(1)}
              </div>
            </div>
            <div>{new Date(show.first_air_date).getFullYear()}</div>
          </div>
          <p className="my-2 text-[0.75rem]">
            {show.overview.substring(0, 125)}
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ShowCard;
