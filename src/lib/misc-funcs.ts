export const generateSeasonsEpisodeCode = (
  seasonNumber: number,
  episode: number
) =>
  `S${seasonNumber > 9 ? `${seasonNumber}` : `0${seasonNumber}`}E${
    episode > 9 ? `${episode}` : `0${episode}`
  }`;
