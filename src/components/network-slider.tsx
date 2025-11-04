"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShowProviders as ShowProvidersType } from "@/types/show/show-providers";
import { MovieProviders as MovieProvidersType } from "@/types/movie/movie-providers";
import ImageWithFallback from "@/components/image-with-fallback";
import { getOriginalImage } from "@/lib/get-image-path";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { createUrlSLug } from "@/lib/slugify";

type Slider = ShowProvidersType | MovieProvidersType;

function NetworkSlider({
  providers,
  type
}: {
  providers: Slider;
  type: "movies" | "shows";
}) {
  return (
    <div className="mx-2">
      <h4 className="text-xl">Networks</h4>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        speed={200}
        className="select-none"
        modules={[Autoplay]}
        key={`studios`}
        breakpoints={{
          280: { slidesPerView: 3, spaceBetween: 4 },
          360: { slidesPerView: 3.25, spaceBetween: 5 },
          480: { slidesPerView: 3.75, spaceBetween: 5 },
          768: { slidesPerView: 4, spaceBetween: 5 },
          820: { slidesPerView: 4, spaceBetween: 10 },
          900: { slidesPerView: 5, spaceBetween: 5 },
          1024: { slidesPerView: 5, spaceBetween: 5 },
          1200: { slidesPerView: 8, spaceBetween: 5 },
        }}
      >
        {providers.results.map((result, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center my-4">
              <div className="rounded-xl cursor-pointer select-none w-[100px] md:w-[100px]">
                <Link
                  href={`/${type}/network/${createUrlSLug(
                    result.provider_id + "",
                    result.provider_name
                  )}`}
                >
                  <ImageWithFallback
                    src={getOriginalImage(result.logo_path)}
                    alt={`${result.provider_name}`}
                    placeholder="empty"
                    loading="eager"
                    width={125}
                    height={125}
                    className=" w-full h-auto rounded-xl"
                  />
                </Link>
              </div>
              <div className="text-center text-sm my-2">
                {result.provider_name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NetworkSlider;
