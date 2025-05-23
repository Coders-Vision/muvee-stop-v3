import { Metadata } from "next";
import { createUrlSLug } from "@/lib/slugify";
import { getShowDetails } from "@/actions/shows/get-show-details";
import { getSimilarShows } from "@/actions/shows/get-similar-shows";
import Container from "@/layout/container";
import ShowBanner from "./components/show-banner";
import ShowDetails from "./components/show-details";
import ShowSeasons from "./components/show-seasons";
import SimilarShows from "./components/similar-shows";
import ShowCast from "./components/show-cast";
import { Suspense } from "react";
import MediaCardSkeleton from "@/components/skeletons/media-card-skeleton";

export const revalidate = 3600;

type ShowPage = {
  params: Promise<{
    slug: string;
  }>;
};

//Next js SEO Tag Generation
export async function generateMetadata(props: ShowPage): Promise<Metadata> {
  const params = await props.params;
  const showId = params.slug.split("-")[0];
  const getShow = await getShowDetails(showId);
  try {
    if (!getShow.original_name) {
      return {
        title: "",
      };
    } else {
      return {
        title: getShow.name,
        description: getShow.overview,
        openGraph: {
          title: getShow.name,
          description: getShow.overview,
          // images: product.images,
          type: "website",
        },
        twitter: {
          title: getShow.original_name,
          description: getShow.overview,
        },
        alternates: {
          canonical: `/shows/show/${createUrlSLug(
            showId,
            getShow.original_name
          )}`,
        },
      };
    }
  } catch (error) {
    return {
      title: "No Name",
    };
  }
}

async function Show(props: ShowPage) {
  const params = await props.params;
  const showId = params.slug.split("-")[0];

  const [show, similarMovies] = await Promise.all([
    getShowDetails(showId),
    getSimilarShows(+showId),
  ]);

  return (
    <>
      <section>
        <ShowBanner show={show} />
      </section>
      <section>
        <Container>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <ShowDetails show={show} />
            <ShowCast showId={show.id} />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <ShowSeasons show={show} showUrl={params.slug} />
        </Container>
      </section>
      <section className="mt-4">
        <Container>
          <Suspense
            fallback={
              <div className="flex items-center justify-center gap-x-4 ">
                <MediaCardSkeleton skeletonCount={5} />
              </div>
            }
          >
            <SimilarShows results={similarMovies.results} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}

export default Show;
