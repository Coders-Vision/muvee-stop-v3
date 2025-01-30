"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface OverviewProps {
  overview: string;
  overviewLength?: number;
}

function Overview({ overview, overviewLength = 200 }: OverviewProps) {
  const [showMore, setShowMore] = useState(false);
  return (
    <ScrollArea className="h-[120px] lg:h-auto">
      <p className="my-2 font-light w-auto ">
        {showMore ? overview : `${overview.substring(0, overviewLength)}...`}
        <Button
          className="p-0 mx-1 bg-transparent hover:bg-transparent text-white hover:underline inline"
          size={"sm"}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </Button>
      </p>
    </ScrollArea>
  );
}

export default Overview;
