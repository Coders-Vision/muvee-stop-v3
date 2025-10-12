"use client";

import React from "react";
import { Card } from "../ui/card";
import GenreFilter from "./genre-filter";
import SortFilter from "./sort-filter";
import DatePicker from "./date-filter";
import useDeviceInfo from "@/hooks/use-device-info";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Lucide } from "../ui/icons";
import CountryFilter from "./country-filter";

interface FilterProps {
  type?: "movies" | "tv";
}

function FilterContent({ type }: FilterProps) {
  return (
    <>
      <GenreFilter />
      <SortFilter />
      <CountryFilter/>
      {type === "movies" && <DatePicker />}
    </>
  );
}

function Filter({ type }: FilterProps) {
  const { width } = useDeviceInfo();

  if (width == undefined || width < 768) {
    return (
      <div className="my-4 mx-4">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="w-full">
              <Lucide name="Funnel" size="20px" />
              Filter
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle> Choose Filters </DrawerTitle>
              <div className="space-y-4 mt-4">
                <FilterContent type={type} />
              </div>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Clear</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  return (
    <Card className="flex flex-col md:flex-row justify-start gap-4 md:gap-6 p-4 md:p-6 my-4 mx-4 rounded-md">
      <FilterContent type={type} />
    </Card>
  );
}

export default Filter;
