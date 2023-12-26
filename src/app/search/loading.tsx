import MediaCardSkeleton from "@/components/skeletons/media-card-skeleton";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function SearchLoader() {
  return (
    <div className="mt-10 flex gap-x-4  flex-col w-full ">
      <div className="flex flex-col gap-4">
        <Card className="w-auto space-y-2 p-2 mx-2 bg-gray-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80">
          <Skeleton className="h-4" />
        </Card>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <MediaCardSkeleton skeletonCount={14} />
      </div>
    </div>
  );
}

export default SearchLoader;
