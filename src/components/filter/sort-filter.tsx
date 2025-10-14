"use client";

import React from "react";
import { Label } from "../ui/label";
import useFilter from "@/hooks/useFilter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectLabel } from "@radix-ui/react-select";
import { SORT_FILTER_OPTIONS } from "@/constants/filter-constants";

function SortFilter() {
  const { value, setValue, resetValue } = useFilter<string>({
    paramKey: "sort_by",
    initialValue: SORT_FILTER_OPTIONS[0].value,
    onFilterChange: () => {},
  });

  return (
    <div className="mt-1">
      <Label> Sort</Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full mt-2 ">
          <SelectValue placeholder="Select Sort" />
        </SelectTrigger>
        <SelectContent className="rounded-xl px-2 py-2">
          <SelectGroup>
            <SelectLabel className="pb-2">Select Sort</SelectLabel>
            {SORT_FILTER_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}

          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SortFilter;
