import React, { useEffect, useMemo, useState } from "react";
import Image, { ImageProps } from "next/image";
// import fallbackImage from "../../public/images/default-poster.svg";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

type FallBackType = { fallback?: string };
type ImageWithFallbackProps = ImageProps & FallBackType;

const defaultImage = "/images/default-poster.svg";

function ImageWithFallback({
  fallback = defaultImage,
  alt,
  src,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState<null | Error>(null);
  const [loaded, setLoaded] = useState(false);
  // const memoziedLoader = useMemo(() => loaded, [loaded]);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <>
      <Image
        alt={alt || ""}
        onError={() => setError(new Error("Image failed to load"))}
        onLoad={() => setLoaded(true)}
        // src={error || !loaded ? fallback : src}
        src={error ? defaultImage : src}
        className={cn(
          `transition-opacity duration-[2s] ${
            !loaded ? "opacity-0" : "ease-in duration-100"
          }`,
          className
        )}
        {...props}
      />
      {/* {!memoziedLoader && <Skeleton className="w-[175px] h-60 rounded-xl" />} */}
    </>
  );
}

export default ImageWithFallback;
