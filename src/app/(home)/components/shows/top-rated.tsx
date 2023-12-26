"use client";

import ShowSlider from "@/components/show-slider";
import { Popular } from "@/types/show/popular";
import { TopRatedTV } from "@/types/show/top-rated-tv";


function TopRated({ topRated }: { topRated: TopRatedTV }) {
  return (
  <ShowSlider results={topRated.results} title="Top Rated" />
  )
}

export default TopRated
