import Container from "@/layout/container";
import { Skeleton } from "@/components/ui/skeleton";
import MediaCardSkeleton from "@/components/skeletons/media-card-skeleton";

function HomePageLOader() {
  return (
    <Container>
      <section>
        <Skeleton className="mx-4 my-8  w-full h-auto rounded-2xl aspect-[16/9] md:aspect-[2.4/1] object-cover" />
      </section>
      <section className="flex space-x-6 my-4">
        <Skeleton className="rounded-2xl w-[325px] h-[170px]" />
        <Skeleton className="rounded-2xl w-[325px] h-[170px]" />
        <Skeleton className="rounded-2xl w-[325px] h-[170px]" />
        <Skeleton className="rounded-2xl w-[325px] h-[170px]" />
      </section>
      <section>
        <div className="mt-10 flex gap-x-4  flex-col w-full ">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <MediaCardSkeleton skeletonCount={12} />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default HomePageLOader;
