"use client";

import React, { useState } from "react";
import { Movie } from "@/types/movie/movie";
import { PlayCircle } from "lucide-react";
import ImageWithFallback from "@/components/image-with-fallback";
import VideoPlayer from "@/components/video-player";
import { getBannerImage } from "@/lib/get-image-path";
import EventButton from "@/components/analytics/event-button";
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
            fallback="/images/default-landscape.svg"
            src={getBannerImage(movie.backdrop_path)}
            alt={`${movie.title}`}
            placeholder="empty"
            loading="eager"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto aspect-video md:aspect-[2.7/1] object-cover"
          />
          {movie.videos?.results[trailerIndex]?.key && (
            <EventButton
              event="play-movie-trailer"
              value={movie.title}
              onClick={() => setShowPlayer(true)}
              className="absolute inset-0 flex items-center justify-center bg-transparent rounded-full hover:bg-transparent top-1/2 transform -translate-y-1/2"
            >
              <PlayCircle size={50} color="#6ebf8a" />
            </EventButton>
          )}
        </>
      ) : (
        <div className="w-full h-auto aspect-video md:aspect-[2.4/1] object-cover">
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
