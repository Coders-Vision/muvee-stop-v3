"use client";

import ShowSlider from "@/components/show-slider";
import { Popular } from "@/types/show/popular";

function PopularShows({ popularShows }: { popularShows: Popular }) {
  return <ShowSlider results={popularShows.results} title="Popular" />;
}

export default PopularShows;
