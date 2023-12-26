"use client";

import ShowSlider from "@/components/show-slider";
import { AiringToday as AiringTodayType } from "@/types/show/airing-today";

function AiringToday({ airingToday }: { airingToday: AiringTodayType }) {
  return <ShowSlider results={airingToday.results} title="Airing Today" />;
}

export default AiringToday;
