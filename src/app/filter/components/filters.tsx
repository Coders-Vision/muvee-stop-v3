"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ChevronsRightIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";
import { Card } from "@/components/ui/card";

function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  return (
    <div className="mb-4">
      <Card className="px-4 mx-4 bg-gray-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80">
        <div className="mt-2">
          <Label className="text-lg">Filter</Label>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6 ">
          {/* Type */}
          <div className="my-4">
            <Label>Type</Label>
            <Select>
              <SelectTrigger className="w-full mt-2 rounded-xl">
                <SelectValue placeholder="Select a Type" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectGroup>
                  <SelectLabel>Select Type</SelectLabel>
                  <SelectItem value="movies">Movie</SelectItem>
                  <SelectItem value="show">TV Show</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* Sort */}
          <div className="my-4">
            <Label> Sort</Label>
            <Select>
              <SelectTrigger className="w-full mt-2 rounded-xl">
                <SelectValue placeholder="Select Sort" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectGroup>
                  <SelectLabel>Select Sort</SelectLabel>
                  <SelectItem value="title.asc">Title (A-Z)</SelectItem>
                  <SelectItem value="title.desc">Title (Z-A)</SelectItem>
                  <SelectItem value="popularity.asc">
                    Popularity Ascending
                  </SelectItem>
                  <SelectItem value="popularity.desc">
                    Popularity Descending
                  </SelectItem>
                  <SelectItem value="vote_average.asc">
                    Rating Ascending
                  </SelectItem>
                  <SelectItem value="vote_average.desc">
                    Rating Descending
                  </SelectItem>
                  <SelectItem value="primary_release_date.asc">
                    Release Date Ascending
                  </SelectItem>
                  <SelectItem value="primary_release_date.desc">
                    Release Date Descending
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/*Relase Date */}
          <div className="my-4">
            <Label> Release Date From </Label>
            <Popover>
              <PopoverTrigger asChild className="mt-2">
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal rounded-xl",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto ">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/*Relase Date */}
          <div className="my-4">
            <Label> Release Date To </Label>
            <Popover>
              <PopoverTrigger className="mt-2" asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal rounded-xl",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Genre */}
          {/* <div className="mt-4">
            <Label> Genre</Label>
            <div className=" mt-2 flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="px-2 py-2">
                Action
              </Badge>
              <Badge variant="outline" className="px-2 py-2">
                Adeventure
              </Badge>
              <Badge variant="outline" className="px-2 py-2">
                Horror
              </Badge>
              <Badge variant="outline" className="px-2 py-2">
                Thriller
              </Badge>
              <Badge variant="outline" className="px-2 py-2">
                Musical
              </Badge>
              <Badge variant="outline" className="px-2 py-2">
                Docuentary
              </Badge>
              <Badge variant="outline" className="px-2 py-2">
                Romance
              </Badge>
            </div>
          </div> */}
        </div>
      </Card>
    </div>

  );
}

export default Filters;
