"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Season } from "@/types/show/season";
import { Button } from "@/components/ui/button";

function SeasonOverview({ season }: { season: Season }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <Card className="rounded-2xl mx-2 ">
      <CardHeader>
        <h1 className="text-xl md:text-2xl font-bold ">Season Overview</h1>
      </CardHeader>
      <CardContent className="px-4">
        <p className="text-white text-sm md:text-base leading-tight">
          {showMore ? season.overview : `${season.overview.substring(0, 150)}...`}
          {season.overview.length > 150 && (
            <Button
              className="p-0 mx-1 bg-transparent hover:bg-transparent text-white hover:underline inline"
              size={"sm"}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </Button>
          )}
        </p>
      </CardContent>
    </Card>
  );
}

export default SeasonOverview;
