import { Metadata } from "next";
import Filters from "./components/filters";
import Container from "@/layout/container";
import { MovieFilterParams } from "@/types/filter/filter-params";

type FilterPage = {
  searchParams: MovieFilterParams;
};

export const metadata: Metadata = {
  title: `Filter`,
  openGraph: {
    title: `Filter`,
  },
  twitter: {
    title: `Filter`,
  },
};

async function Filter({ searchParams }: FilterPage) {
  return (
    <>
      <section>
        <Container>
          <Filters />
          Filter
        </Container>
      </section>
      <section>
        <Container>...</Container>
      </section>
    </>
  );
}

export default Filter;
