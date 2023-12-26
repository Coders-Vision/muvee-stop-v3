import getCurrentHost from "@/lib/get-current-host";
import { createUrlSLug } from "@/lib/slugify";
import { NowPlaying } from "@/types/movie/now-playing";

async function sitemap() {
  async function getNowPlaying(): Promise<NowPlaying> {
    const res = await fetch(`${getCurrentHost()}/api/movies/now-playing`);
    return res.json();
  }
  const [nowPlaying] = await Promise.all([getNowPlaying()]);

  const nowPlayingMovieLink =
    nowPlaying.results.map((movie) => ({
      url: `${getCurrentHost().toString()}/movies/movie/${createUrlSLug(
        movie.id + "",
        movie.original_title
      )}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: getCurrentHost().toString(),
      lastModified: new Date(),
    },
    ...nowPlayingMovieLink,
  ];
}

export default sitemap;
