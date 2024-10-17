import Container from "@/layout/container";
import SearcheddMovies from "./searched-movies";
import { SearchParams } from "@/types/search/search-params";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getSearch } from "@/actions/search";
import { SearchType } from "@/types/search/search";
import { Metadata } from "next";

export const runtime = 'edge'
type SearchPage = {
  searchParams: SearchParams;
};

//Next js SEO Tag Generation
export async function generateMetadata({
  searchParams,
}: SearchPage): Promise<Metadata> {
  try {
    return {
      title: `Search Results for ${searchParams.searchQuery}`,
      openGraph: {
        title: `Search Results for ${searchParams.searchQuery}`,
      },
      twitter: {
        title: `Search Results for ${searchParams.searchQuery}`,
      },
    };
  } catch (error) {
    return {
      title: "No Name",
    };
  }
}

async function Search({ searchParams }: SearchPage) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<SearchType>({
    queryKey: [
      "searchPage",
      { query: searchParams.searchQuery, page: searchParams.page },
    ],
    queryFn: () =>
      getSearch({ query: searchParams.searchQuery, page: searchParams.page }),
  });

  return (
    <Container>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <h1 className="font-semibold text-xl mx-4">
          Search for {searchParams.searchQuery}
        </h1>
        <SearcheddMovies
          page={searchParams.page}
          searchQuery={searchParams.searchQuery}
        />
      </HydrationBoundary>
    </Container>
  );
}

export default Search;
