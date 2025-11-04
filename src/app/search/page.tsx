import Container from "@/layout/container";
import SearchedResult from "./components/searched-result";
import { SearchParams } from "@/types/search/search-params";
import { getSearch } from "@/actions/search";
import { Metadata } from "next";

type SearchPage = {
  searchParams: Promise<SearchParams>;
};

//Next js SEO Tag Generation
export async function generateMetadata(props: SearchPage): Promise<Metadata> {
  const searchParams = await props.searchParams;
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

async function Search(props: SearchPage) {
  const searchParams = await props.searchParams;
  const searchQuery = searchParams.searchQuery;
  
  const searchedResult = await getSearch({
    searchQuery,
    page: searchParams.page,
    // ...searchParams,
  });

  return (
    <Container>
      <h1 className="font-semibold text-xl mx-4">
        Search for {searchParams.searchQuery}
      </h1>
      <SearchedResult
        page={searchParams.page}
        data={searchedResult}
      />
    </Container>
  );
}

export default Search;
