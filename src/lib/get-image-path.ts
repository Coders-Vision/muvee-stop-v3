export function getBannerImage(backdropPath: string) {
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BANNER}/${backdropPath}`;
}
export function getPosterImage(posterPath: string) {
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_POSTER}/${posterPath}`;
}

export function getOriginalImage(imagePath: string) {
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_ORIGINAL}/${imagePath}`;
}
