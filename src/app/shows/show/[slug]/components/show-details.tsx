"use client";

import React, { useState } from "react";
import { Show } from "@/types/show/show";
import ImageWithFallback from "@/components/image-with-fallback";
import { getPosterImage } from "@/lib/get-image-path";
import { Share2, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createUrlSLug } from "@/lib/slugify";

function ShowDetails({ show }: { show: Show }) {
  const [showMore, setShowMore] = useState(false);

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

  const openShareDrawer = () => {
    const dataShare = {
      title: name,
      text: overview,
      url: `${process.env.NEXT_PUBLIC_DEPOLY_URL}/shows/show/${createUrlSLug(
        `${id}`,
        name
      )}`,
    };
    if (navigator.share && navigator.canShare(dataShare)) {
      navigator.share(dataShare);
    } else {
      alert("Sharing not supported in this browser");
    }
  };

  return (
    <div className="relative sm:flex gap-6 mt-20 mx-4 select-none sm:max-w-md sm:mx-auto  lg:max-w-none">
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-600 lg:bg-none md:flex-shrink-0 ">
        <ImageWithFallback
          src={getPosterImage(poster_path)}
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
              {!!navigator.canShare && (
                <Button
                  onClick={openShareDrawer}
                  className="flex item-center gap-x-2 bg-transparent border-2 border-white rounded-full text-white"
                >
                  <Share2 />
                  Share
                </Button>
              )}
            </span>
          </div>

          <div className="flex gap-2">
            <div className="flex ">
              <div className="flex items-center gap-1">
                <StarIcon fill="white" size={18} />
                {vote_average?.toFixed(1)}
              </div>
            </div>
            <div>{new Date(first_air_date).getFullYear()}</div>
            <div>{number_of_seasons} Seasons</div>
          </div>
          <ScrollArea className="h-[120px] lg:h-auto">
            <p className="my-2 font-light w-auto ">
              {showMore ? overview : `${overview.substring(0, 250)}`}
              {overview.length > 200 && (
                <Button
                  className="p-0 mx-1 bg-transparent hover:bg-transparent text-white hover:underline inline"
                  size={"sm"}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show less" : "Show more"}
                </Button>
              )}
            </p>
          </ScrollArea>
          <div className="flex gap-4">
            <div className="">
              <div className="my-2 font-light">Type: </div>
              <div className="my-2 font-light">Status: </div>
              <div className="my-2 font-light">Country: </div>
              <div className="my-2 font-light">Genre: </div>
              <div className="my-2 font-light">Release: </div>

              <div className="my-2 font-light">Production: </div>
            </div>
            <div className="">
              <div className="my-2">show</div>
              <div className="my-2">
                <Badge className="bg-ms-blue text-white">{status}</Badge>
              </div>
              <div className="my-2">
                {production_countries?.map((county) => `${county.name}`)}
              </div>
              <div className="my-2 ">
                {genres.map((genre) => `${genre.name} `)}
              </div>
              {/* <div className="my-2">{release_date}</div> */}
              <div className="my-2">
                {production_companies.map((company) => `${company.name} `)}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default ShowDetails;
