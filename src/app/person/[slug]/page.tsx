import { Metadata } from "next";
import Container from "@/layout/container";
import PersonDetails from "./components/person-details";
import { getPersonDetails } from "@/actions/movies/get-person-details";
import { notFound } from "next/navigation";
import Filmography from "./components/filmography";
import { createUrlSLug } from "@/lib/slugify";

type PersonPage = {
  params: {
    slug: string;
  };
};

//Next js SEO Tag Generation
export async function generateMetadata({
  params,
}: PersonPage): Promise<Metadata> {
  const persomId = params.slug.split("-")[0];
  const getPerson = await getPersonDetails(parseInt(persomId));
  try {
    if (!getPerson.name) {
      return {
        title: "",
      };
    } else {
      return {
        title: getPerson.name,
        description: getPerson.biography,
        openGraph: {
          title: getPerson.name,
          description: getPerson.biography,
          // images: product.images,
          type: "website",
        },
        twitter: {
          title: getPerson.name,
          description: getPerson.biography,
        },
        alternates: {
          canonical: `/person/${createUrlSLug(persomId, getPerson.name)}`,
        },
      };
    }
  } catch (error) {
    return {
      title: "No Name",
    };
  }
}

async function Person({ params }: PersonPage) {
  const persomId = params.slug.split("-")[0];
  const getPerson = await getPersonDetails(parseInt(persomId));
  if (!getPerson) {
    notFound();
  }
  return (
    <>
      <section className="mt-10">
        <Container>
          <PersonDetails person={getPerson} />
        </Container>
      </section>
      <section>
        <Container>
          <Filmography personId={getPerson.id} />
        </Container>
      </section>
    </>
  );
}

export default Person;
