"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import MovieCard from "./movie-card";
import { Result } from "@/types/movie/movie-result";

type MovieSlider = {
  title: string;
  results: Result[];
  showDescription?: boolean;
};

function MovieSlider({ title, results, showDescription = false }: MovieSlider) {
  if (!results.length) {
    return <></>;
  }

  return (
    <div className="mx-2">
      <h4 className="text-xl">{title}</h4>
      <div className="">
        <Swiper
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          speed={200}
          className="select-none"
          modules={[Autoplay]}
          key={`${title.toLowerCase()}`}
          breakpoints={{
            280: { slidesPerView: 2, spaceBetween: 4 },
            360: { slidesPerView: 2.5, spaceBetween: 5 },
            480: { slidesPerView: 2.75, spaceBetween: 5 },
            768: { slidesPerView: 4, spaceBetween: 5 },
            820: { slidesPerView: 4, spaceBetween: 10 },
            900: { slidesPerView: 5, spaceBetween: 5 },
            1024: { slidesPerView: 5, spaceBetween: 5 },
            1200: { slidesPerView: 6, spaceBetween: 5 },
          }}
        >
          {results.map((result, index) => (
            <SwiperSlide key={index}>
              <div className="my-4">
                <MovieCard
                  movie={result}
                  key={index}
                  showDescription={showDescription}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieSlider;
