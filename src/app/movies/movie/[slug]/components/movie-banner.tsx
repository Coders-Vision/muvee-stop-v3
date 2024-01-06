"use client";

import React, { useState } from "react";
import { Movie } from "@/types/movie/movie";
import IconButton from "@/components/ui/icon-button";
import { PlayCircle } from "lucide-react";
import ImageWithFallback from "@/components/image-with-fallback";
import VideoPlayer from "@/components/video-player";
import { getBannerImage } from "@/lib/get-image-path";
// import VideoPlayerModal from "@/components/video-player-modal";

function MovieBanner({ movie }: { movie: Movie }) {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);

  const trailerIndex = movie.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );

  return (
    <div className="relative mt-2">
      {!showPlayer ? (
        <>
          <ImageWithFallback
            fallback="/images/default-banner.svg"
            src={getBannerImage(movie.backdrop_path)}
            alt={`${movie.title}`}
            placeholder="empty"
            loading="eager"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto aspect-[16/9] md:aspect-[2.7/1] object-cover"
          />
          {movie.videos?.results[trailerIndex]?.key && (
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
            videoId={`${movie.videos?.results[trailerIndex]?.key}`}
          />
        </div>
      )}
      {/* <VideoPlayerModal
        setShowPlayer={setShowPlayer}
        showPlayer={showPlayer}
        videoId={`${movie.videos?.results[trailerIndex]?.key}`}
      /> */}
    </div>
  );
}

export default MovieBanner;
