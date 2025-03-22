// "use client"
// import { getSimilarShows } from "@/actions/shows/get-similar-shows";
import ShowSlider from "@/components/show-slider";
import { Result } from "@/types/show/show-result";


// async function SimilarShows({ showId }: { showId: number }) {
//   const similarShows = await getSimilarShows(showId);
function SimilarShows({ results }: { results: Result[] }) {
  return (
    <ShowSlider
      title="Similar Shows"
      results={results || []}
      showDescription={true}
    />
  );
}

export default SimilarShows;
