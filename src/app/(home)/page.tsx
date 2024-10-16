import { NowPlaying } from "@/types/movie/now-playing";
import Slideshow from "./components/slideshow";
import getCurrentHost from "@/lib/get-current-host";
import { Popular as PopularT } from "@/types/movie/popular";
import { Trending as TrendingType } from "@/types/movie/trending";
import Trending from "./components/movies/trending";
import Popular from "./components/movies/popular";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "@/layout/container";
import { Popular as PopularShowsType } from "@/types/show/popular";
import PopularShows from "./components/shows/popular-shows";
import { TopRatedTV } from "@/types/show/top-rated-tv";
import TopRated from "./components/shows/top-rated";
import TrendingSlides from "./components/trending-slides";
import { getShowProviders } from "@/actions/shows/show-providers";
import { TMDB_WATCH_REGION } from "@/constants/tmdb-contants";
import { getMovieProviders } from "@/actions/movies/movie-providers";
import StudioSlider from "@/components/studio-slider";

export const revalidate = 3600;

async function getNowPlaying(): Promise<NowPlaying> {
  const res = await fetch(`${getCurrentHost()}/api/movies/now-playing`);
  return res.json();
}
async function getTrending(): Promise<TrendingType> {
  const res = await fetch(`${getCurrentHost()}/api/movies/trending`);
  return res.json();
}

async function getPopular(): Promise<PopularT> {
  const res = await fetch(`${getCurrentHost()}/api/movies/popular`);
  return res.json();
}

async function getPopularShows(): Promise<PopularShowsType> {
  const res = await fetch(`${getCurrentHost()}/api/shows/popular`);
  return res.json();
}

async function getTopRatedShows(): Promise<TopRatedTV> {
  const res = await fetch(`${getCurrentHost()}/api/shows/top-rated`);
  return res.json();
}

export default async function Home() {
  const nowPlayingData = getNowPlaying();
  const trendingData = getTrending();
  const popularData = getPopular();
  const popularShowsData = getPopularShows();
  const topRatedTvData = getTopRatedShows();
  const [nowPlaying, trending, popular, popularShows, topRatedTv] =
    await Promise.all([
      nowPlayingData,
      trendingData,
      popularData,
      popularShowsData,
      topRatedTvData,
    ]);

  const moviesProviders = await getMovieProviders(TMDB_WATCH_REGION);
  const showProviders = await getShowProviders(TMDB_WATCH_REGION);

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
              <StudioSlider providers={moviesProviders} type="movies" />
              <Popular popular={popular} />
            </TabsContent>
            <TabsContent value="shows" className="mt-2 border-0 p-0">
              <TopRated topRated={topRatedTv} />
              <StudioSlider providers={showProviders} type="shows" />
              <PopularShows popularShows={popularShows} />
            </TabsContent>
          </Tabs>
        </Container>
      </section>
    </>
  );
}
