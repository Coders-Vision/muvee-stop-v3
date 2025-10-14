import Container from "@/layout/container";
import { Skeleton } from "@/components/ui/skeleton";
import MediaCardSkeleton from "@/components/skeletons/media-card-skeleton";

function HomePageLOader() {
  return (
    <Container>
      <section>
        <Skeleton className=" my-8  w-full h-auto rounded-2xl aspect-video md:aspect-[2.4/1] " />
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

      {/* Skeleton for Movie and Show Providers */}
      <section className="no-scrollbar flex justify-center items-center my-4 space-x-10  w-full gap-4 sm:gap-6 overflow-x-auto">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={`provider-key-${index}`} className="space-y-2">
            <Skeleton className="rounded-xl w-[125px] h-[125px] " />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[100px] rounded-xl mx-auto" />
            </div>
          </div>
        ))}
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
