"use client";

import React from "react";
import useFilter from "@/hooks/useFilter";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function DateFilter() {
  const { value, setValue, resetValue } = useFilter<string>({
    paramKey: "year",
    initialValue: "2025",
    // onFilterChange: () => {},
  });

  return (
    <div className="mt-1">
      <Label>Year</Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full mt-2 ">
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>
        <SelectContent className="rounded-xl px-2 py-2">
          <SelectGroup>
            <SelectLabel className="pb-2">Select Year</SelectLabel>
            <SelectItem value={"2025"}>2025</SelectItem>
            <SelectItem value={"2024"}>2024</SelectItem>
            <SelectItem value={"2023"}>2023</SelectItem>
            <SelectItem value={"2022"}>2022</SelectItem>
            <SelectItem value={"2021"}>2021</SelectItem>
            <SelectItem value={"2020"}>2020</SelectItem>
            <SelectItem value={"2019"}>2019</SelectItem>
            <SelectItem value={"2018"}>2018</SelectItem>
            <SelectItem value={"2017"}>2017</SelectItem>
            <SelectItem value={"2016"}>2016</SelectItem>
            <SelectItem value={"2015"}>2015</SelectItem>
            <SelectItem value={"2014"}>2014</SelectItem>
            <SelectItem value={"2013"}>2013</SelectItem>
            <SelectItem value={"2012"}>2012</SelectItem>
            <SelectItem value={"2011"}>2011</SelectItem>
            <SelectItem value={"2010"}>2010</SelectItem>
            <SelectItem value={"2009"}>2009</SelectItem>
            <SelectItem value={"2008"}>2008</SelectItem>
            <SelectItem value={"2007"}>2007</SelectItem>
            <SelectItem value={"2006"}>2006</SelectItem>
            <SelectItem value={"2005"}>2005</SelectItem>
            <SelectItem value={"2004"}>2004</SelectItem>
            <SelectItem value={"2003"}>2003</SelectItem>
            <SelectItem value={"2002"}>2002</SelectItem>
            <SelectItem value={"2001"}>2001</SelectItem>
            <SelectItem value={"2000"}>2000</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default DateFilter;
