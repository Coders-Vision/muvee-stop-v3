import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function MediaCard() {
  return (
    <div className="flex flex-col items-center space-y-4 my-2">
      <Skeleton className="w-[175px] h-56 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px] rounded-xl" />
      </div>
    </div>
  );
}

function MediaCardSkeleton({ skeletonCount = 1 }: { skeletonCount?: number }) {
  return (
    <>
      {Array.from({ length: skeletonCount }, (_, index) => (
        <MediaCard key={index} />
      ))}
    </>
  );
}

export default MediaCardSkeleton;
