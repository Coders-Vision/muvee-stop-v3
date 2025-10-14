"use client";
import React, { useState } from "react";
import { Show } from "@/types/show/show";
import VideoPlayer from "@/components/video-player";
import ImageWithFallback from "@/components/image-with-fallback";
import { PlayCircle } from "lucide-react";
import { getBannerImage } from "@/lib/get-image-path";
import EventButton from "@/components/analytics/event-button";
import { Lucide } from "@/components/ui/icons";

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
            fallback="/images/default-landscape.svg"
            src={getBannerImage(show.backdrop_path)}
            alt={`${show.original_name}`}
            placeholder="empty"
            loading="eager"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto aspect-video md:aspect-[2.7/1] object-cover"
          />
          {show.videos?.results[trailerIndex]?.key && (
            <EventButton
              event="play-show-trailer"
              value={show.name}
              onClick={() => setShowPlayer(true)}
              className="absolute inset-0 flex items-center justify-center bg-transparent rounded-full hover:bg-transparent top-1/2 transform -translate-y-1/2"
            >
              <Lucide name="CirclePlay" className="size-12"  color="#6ebf8a" />
            </EventButton>
          )}
        </>
      ) : (
        <div className="w-full h-auto aspect-video md:aspect-[2.4/1] object-cover">
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
