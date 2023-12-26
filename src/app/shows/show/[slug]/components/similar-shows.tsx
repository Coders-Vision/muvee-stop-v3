import { getSimilarShows } from "@/actions/shows/get-similar-shows";
import ShowSlider from "@/components/show-slider";

async function SimilarShows({ showId }: { showId: number }) {
  const similarShows = await getSimilarShows(showId);

  return (
    <ShowSlider
      title="Similar Shows"
      results={similarShows.results || []}
      showDescription={true}
    />
  );
}

export default SimilarShows;
