import getCurrentHost from "@/lib/get-current-host";
import { createUrlSLug } from "@/lib/slugify";
import { NowPlaying } from "@/types/movie/now-playing";

export const runtime = 'edge'

async function sitemap() {
  // async function getNowPlaying(): Promise<NowPlaying> {
  //   const res = await fetch(`${getCurrentHost()}/api/movies/now-playing`);
  //   return res.json();
  // }
  // const [nowPlaying] = await Promise.all([getNowPlaying()]);

  // const nowPlayingMovieLink =
  //   nowPlaying.results.map((movie) => ({
  //     url: `${getCurrentHost().toString()}/movies/movie/${createUrlSLug(
  //       movie.id + "",
  //       movie.original_title
  //     )}`,
  //     lastModified: new Date(),
  //   })) ?? [];

  const webLinks = (staticUrl: string) => ({
    url: `${getCurrentHost().toString()}${staticUrl}`,
    lastModified: new Date(),
  });

  return [
    {
      url: getCurrentHost().toString(),
      lastModified: new Date(),
    },
    //Movies
    webLinks("/movies/popular"),
    webLinks("/movies/now-playing"),
    webLinks("/movies/upcoming"),
    webLinks("/movies/top-rated"),

    //Shows
    webLinks("/shows/popular"),
    webLinks("/shows/airing-today"),
    webLinks("/shows/on-tv"),
    webLinks("/shows/top-rated"),

    // ...nowPlayingMovieLink,
  ];
}

export default sitemap;
