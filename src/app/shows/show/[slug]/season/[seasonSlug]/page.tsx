import { Metadata } from "next";
import { createUrlSLug } from "@/lib/slugify";
import Container from "@/layout/container";
import SeasonBannner from "./components/season-banner";
import { getSeasonDetails } from "@/actions/shows/get-season-details";
import SeasonEpisodes from "./components/season-episodes";
import { getShowDetails } from "@/actions/shows/get-show-details";
import { formatDate } from "@/lib/date-funcs";
import SeasonOverview from "./components/season-overview";

export const revalidate = 3600;

type SeasonPage = {
  params: Promise<{
    slug: string;
    seasonSlug: string;
  }>;
};

//Next js SEO Tag Generation
export async function generateMetadata(props: SeasonPage): Promise<Metadata> {
  const params = await props.params;
  const showId = params.slug.split("-")[0];
  const season = params.seasonSlug.split("-")[0];
  const showDetails = await getShowDetails(showId);
  const getSeason = await getSeasonDetails(showId, season);
  try {
    if (!getSeason.name) {
      return {
        title: `${showDetails.name} | Season ${getSeason.season_number} ()`,
      };
    } else {
      return {
        title: `${showDetails.name} | Season ${
          getSeason.season_number
        } (${formatDate(getSeason.air_date, "yyy")})`,
        description: getSeason.overview,
        openGraph: {
          title: `${showDetails.name} | Season ${
            getSeason.season_number
          } (${formatDate(getSeason.air_date, "yyy")})`,
          description: getSeason.overview,
          // images: product.images,
          type: "website",
        },
        twitter: {
          title: `${showDetails.name} | Season ${
            getSeason.season_number
          } (${formatDate(getSeason.air_date, "yyy")})`,
          description: getSeason.overview,
        },
        alternates: {
          canonical: `/shows/show/${params.seasonSlug}/season/${season}`,
        },
      };
    }
  } catch (error) {
    return {
      title: "No Name",
    };
  }
}

async function Season(props: SeasonPage) {
  const params = await props.params;
  const showId = params.slug.split("-")[0];
  const season = params.seasonSlug.split("-")[0];

  const showDetails = await getShowDetails(showId);
  const seasonDetails = await getSeasonDetails(showId, season);

  return (
    <>
      <SeasonBannner show={showDetails} season={seasonDetails} />
      <Container>
        {seasonDetails.overview && (
          <div className="my-8">
            <SeasonOverview season={seasonDetails} />
          </div>
        )}

        <div className="my-8">
          <SeasonEpisodes episodes={seasonDetails.episodes} />
        </div>
      </Container>
    </>
  );
}

export default Season;
