"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { X } from "lucide-react";

function VideoPlayerModal({
  videoId,
  showPlayer,
  setShowPlayer,
}: {
  videoId: string;
  showPlayer: boolean;
  setShowPlayer: React.Dispatch<boolean>;
}) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && showPlayer && (
        <>
          <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
          <div
            className={`absolute top-[20vh] inset-x-[7%] md:inset-x-[13%] rounded overflow-hiden transition duration-1000 ${
              showPlayer ? "opacity-100 z-50" : "opacity-0"
            }`}
          >
            <div className=" flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
              <span className="font-semibold">Play Trailer</span>
              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]"
                onClick={() => setShowPlayer(false)}
              >
                <X className="h-5" />
              </div>
            </div>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  zIndex: "1000",
                }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default VideoPlayerModal;
