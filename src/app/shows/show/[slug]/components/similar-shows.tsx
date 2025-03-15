import ShowSlider from "@/components/show-slider";
import { Result } from "@/types/show/show-result";
// import { getSimilarShows } from "@/actions/shows/get-similar-shows";

// async function SimilarShows({ showId }: { showId: number }) {
//   const similarShows = await getSimilarShows(showId);
async function SimilarShows({ results }: { results: Result[] }) {
  return (
    <ShowSlider
      title="Similar Shows"
      results={results || []}
      showDescription={true}
    />
  );
}

export default SimilarShows;
