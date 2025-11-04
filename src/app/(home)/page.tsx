import Slideshow from "./components/slideshow";
import Trending from "./components/movies/trending";
import Popular from "./components/movies/popular";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "@/layout/container";
import PopularShows from "./components/shows/popular-shows";
import TopRated from "./components/shows/top-rated";
import TrendingSlides from "./components/trending-slides";
import { getShowProviders } from "@/actions/shows/show-providers";
import { TMDB_WATCH_REGION } from "@/constants/tmdb-contants";
import { getMovieProviders } from "@/actions/movies/movie-providers";
import NetworkSlider from "@/components/network-slider";

import {
  getNowPlaying,
  getPopularMovies,
  getPopularShows,
  getTopRatedShows,
  getTrendingMovies,
} from "@/actions/home-actions";

export default async function Home() {

  const [
    nowPlaying,
    trending,
    popular,
    popularShows,
    topRatedTv,
    moviesProviders,
    showProviders,
  ] = await Promise.all([
    getNowPlaying(),
    getTrendingMovies(),
    getPopularMovies(),
    getPopularShows(),
    getTopRatedShows(),
    getMovieProviders(TMDB_WATCH_REGION),
    getShowProviders(TMDB_WATCH_REGION),
  ]);

  return (
    <>
      <section>
        <Container>
          <Slideshow slideshows={nowPlaying} />
        </Container>
        <Container>
          <TrendingSlides trending={trending} />
        </Container>
      </section>

      <section>
        <Container>
          <Tabs defaultValue="movies" className="">
            <div className="flex justify-center item-center">
              <TabsList className="rounded-full">
                <TabsTrigger value="movies" className="rounded-full">
                  Movies
                </TabsTrigger>
                <TabsTrigger value="shows" className="rounded-full">
                  Shows
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="movies" className="mt-2 border-0 p-0">
              <Trending trending={trending} />
              <NetworkSlider providers={moviesProviders} type="movies" />
              <Popular popular={popular} />
            </TabsContent>
            <TabsContent value="shows" className="mt-2 border-0 p-0">
              <TopRated topRated={topRatedTv} />
              <NetworkSlider providers={showProviders} type="shows" />
              <PopularShows popularShows={popularShows} />
            </TabsContent>
          </Tabs>
        </Container>
      </section>
    </>
  );
}
