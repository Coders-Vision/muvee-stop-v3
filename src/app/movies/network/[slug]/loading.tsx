import Container from "@/layout/container";
import MediaCardSkeleton from "@/components/skeletons/media-card-skeleton";


function Loader() {
  return (
    <Container>
      <div className="mt-10 flex gap-x-4  flex-col w-full ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <MediaCardSkeleton skeletonCount={20} />
        </div>
      </div>
    </Container>
  );
}

export default Loader;
