import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function VideoPlayer({
  videoId,
  showPlayer,
}: {
  videoId: string;
  showPlayer: boolean;
}) {
  //To Avoid Hydration Error in Next js
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && (
        <ReactPlayer
          src={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="100%"
          controls={true}
          playing={showPlayer}
        />
      )}
    </>
  );
}

export default VideoPlayer;
