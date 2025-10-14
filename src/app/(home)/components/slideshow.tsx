"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { NowPlaying } from "@/types/movie/now-playing";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createUrlSLug } from "@/lib/slugify";
import { Result as MovieResult } from "@/types/movie/movie-result";
import { Result as ShowResult } from "@/types/show/show-result";
import { getBannerImage } from "@/lib/get-image-path";
import Link from "next/link";
import { StarIcon } from "lucide-react";

// import useDeviceInfo from "@/hooks/use-device-info";

function Slide({ result }: { result: MovieResult }) {
  return (
    <>
      <div className="absolute rounded-2xl inset-0 bg-black opacity-25 h-full w-full z-50"></div>
      <Image
        key={result.id}
        src={getBannerImage(result.backdrop_path!)}
        alt={`${result.id}`}
        placeholder="empty"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-2xl aspect-video md:aspect-[2.4/1] object-cover"
      />
      <div className="absolute bottom-0 z-50 mx-4 my-2">
        <h1 className="font-bold text-sm md:text-2xl lg:text-3xl leading-5">
          {result?.title}
        </h1>
        <div className="md:mt-2 md:w-3/4 text-[0.6rem] lg:text-[1rem]">
          <div className="flex gap-2">
            <div className="flex ">
              <div className="flex items-center gap-1">
                <StarIcon fill="white" size={14} />
                {result.vote_average?.toFixed(1)}
              </div>
            </div>
            <div>{result.release_date?.substring(0,4)}</div>
          </div>
          <div className="my-2">
            <p className="hidden md:block t4ext-left">
              {result?.overview.slice(0, 150).concat("...") ?? ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Slideshow({ slideshows }: { slideshows: NowPlaying }) {
  const router = useRouter();

  const goToPage = (media: MovieResult) => {
    router.push(`/movies/movie/${createUrlSLug(media.id + "", media.title)}`);
  };

  return (
    <div className="mx-4 my-8 rounded-2xl">
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        speed={200}
        loop={true}
        className="select-none"
        modules={[Autoplay]}
        key={`slideshow-en`}
      >
        {slideshows.results?.map((result, i) => (
          <SwiperSlide
            className="relative cursor-pointer"
            onClick={() => goToPage(result)}
            key={i}
          >
            <Link
              key={result.id}
              href={`/movies/movie/${createUrlSLug(
                result.id + "",
                result.title
              )}`}
            >
              <Slide result={result} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slideshow;
