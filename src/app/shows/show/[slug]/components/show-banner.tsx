"use client";
import React, { useState } from "react";
import { Show } from "@/types/show/show";
import VideoPlayer from "@/components/video-player";
import ImageWithFallback from "@/components/image-with-fallback";
import IconButton from "@/components/ui/icon-button";
import { PlayCircle } from "lucide-react";
import { getBannerImage } from "@/lib/get-image-path";

function ShowBanner({ show }: { show: Show }) {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const trailerIndex = show.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );

  return (
    <div className="relative mt-2">
      {!showPlayer ? (
        <>
          <ImageWithFallback
            fallback="/images/default-banner.svg"
            src={getBannerImage(show.backdrop_path)}
            alt={`${show.original_name}`}
            placeholder="empty"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto aspect-[16/9] md:aspect-[2.7/1] object-cover"
          />
          {show.videos?.results[trailerIndex]?.key && (
            <IconButton
              icon={<PlayCircle size={50} color="#6ebf8a" />}
              onClick={() => setShowPlayer(true)}
              className="absolute top-[50%] left-[45%]  bg-transparent rounded-full  hover:bg-transparent"
            />
          )}
        </>
      ) : (
        <div className="w-full h-auto aspect-[16/9] md:aspect-[2.4/1] object-cover">
          <VideoPlayer
            showPlayer={showPlayer}
            videoId={`${show.videos?.results[trailerIndex]?.key}`}
          />
        </div>
      )}
    </div>
  );
}

export default ShowBanner;
