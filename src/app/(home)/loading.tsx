import Container from "@/layout/container";
import { Skeleton } from "@/components/ui/skeleton";
import MediaCardSkeleton from "@/components/skeletons/media-card-skeleton";

function HomePageLOader() {
  return (
    <Container>
      <section>
        <Skeleton className=" my-8  w-full h-auto rounded-2xl aspect-[16/9] md:aspect-[2.4/1] " />
      </section>
      <section className="grid grid-flow-col auto-cols-[325px] gap-6 my-4 overflow-x-scroll md:grid-flow-row md:grid-cols-4 no-scrollbar">
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
