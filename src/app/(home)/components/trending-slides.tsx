"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Trending as TrendingType } from "@/types/movie/trending";
import { Result as MovieResult } from "@/types/movie/movie-result";
import { Result as ShowResult } from "@/types/show/show-result";
import { Card, CardContent } from "@/components/ui/card";
import ImageWithFallback from "@/components/image-with-fallback";
import { getBannerImage } from "@/lib/get-image-path";
import { useRouter } from "next/navigation";
import { createUrlSLug } from "@/lib/slugify";

function Trending({ movie }: { movie: MovieResult }) {
  const { title, backdrop_path } = movie;
  return (
    <Card className="relative max-w-[275px] md:max-w-[350px]   mx-1 rounded-2xl shadow-xl cursor-pointer  hover:shadow-2xl transform hover:scale-105 transition duration-300 ">
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute rounded-2xl inset-0 bg-zinc-800 opacity-50 h-full w-full z-50 hover:shadow-[0px_2px_45px_20px_rgba(73,128,205,1)_inset] transition duration-300"></div>
          <ImageWithFallback
            fallback="/images/default-banner.svg"
            src={getBannerImage(backdrop_path || "")}
            alt={`${title}`}
            placeholder="empty"
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
            className="object-contain w-full h-auto rounded-xl"
          />
          <div className="absolute bottom-4 left-4 z-50">
            <h3 className="font-black">{movie.title}</h3>
            {/* Genre Ids */}
            {/* <div className="flex gap-4">
              {movie.genre_ids.map((id) => (
                <h4 key={id}>{id}</h4>
              ))}
            </div> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TrendingSlides({ trending }: { trending: TrendingType }) {
  const router = useRouter();

  const goToPage = (media: MovieResult) => {
    router.push(`/movies/movie/${createUrlSLug(media.id + "", media.title)}`);
  };

  return (
    <div className="mx-4 mt-2">
      <Swiper
        pagination={{
          // el: '.swiper-pagination',
          type: "progressbar",
          // el: '.swiper-progress-bar',
          // renderProgressbar(progressbarFillClass) {
          //   return `<span class="${progressbarFillClass}" style="bottom: 0;"></span>`;
          // },
        }}
        autoplay={{
          delay: 4000,
        }}
        speed={200}
        className="select-none"
        modules={[Pagination]}
        key={`seasons`}
        breakpoints={{
          280: { slidesPerView: 1, spaceBetween: 2 },
          360: { slidesPerView: 1.15, spaceBetween: 2 },
          480: { slidesPerView: 1.25, spaceBetween: 2 },
          540: { slidesPerView: 2, spaceBetween: 2 },
          768: { slidesPerView: 3, spaceBetween: 2},
          820: { slidesPerView: 3.5, spaceBetween: 4 },
          900: { slidesPerView: 4, spaceBetween: 4 },
        }}
      >
        {trending.results.map((result) => (
          <SwiperSlide key={result.id} onClick={() => goToPage(result)}>
            <div className="my-4">
              <Link
                key={result.id}
                href={`/movies/movie/${createUrlSLug(
                  result.id + "",
                  result.title
                )}`}
              >
                <Trending movie={result} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingSlides;
