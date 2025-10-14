import useFilter from "@/hooks/useFilter";
import React from "react";
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

function CountryFilter() {
  const { value, setValue, resetValue } = useFilter<string>({
    paramKey: "with_origin_country",
    initialValue: "US",
    // onFilterChange: () => {},
  });
  return (
    <div className="mt-1">
      <Label>Year</Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full mt-2 ">
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent className="rounded-xl px-2 py-2">
          <SelectGroup>
            <SelectLabel className="pb-2">Select Country</SelectLabel>
            <SelectItem value={"US"}>USA</SelectItem>
            <SelectItem value={"IN"}>India</SelectItem>
            <SelectItem value={"GB"}>UK</SelectItem>
            <SelectItem value={"CA"}>Canada</SelectItem>
            <SelectItem value={"FR"}>France</SelectItem>
            <SelectItem value={"DE"}>Germany</SelectItem>
            <SelectItem value={"JP"}>Japan</SelectItem>
            <SelectItem value={"KR"}>South Korea</SelectItem>
            <SelectItem value={"CN"}>China</SelectItem>
            <SelectItem value={"IT"}>Italy</SelectItem>
            <SelectItem value={"ES"}>Spain</SelectItem>
            <SelectItem value={"AU"}>Australia</SelectItem>
            <SelectItem value={"BR"}>Brazil</SelectItem>
            <SelectItem value={"MX"}>Mexico</SelectItem>
            <SelectItem value={"RU"}>Russia</SelectItem>
            <SelectItem value={"ZA"}>South Africa</SelectItem>
            <SelectItem value={"SE"}>Sweden</SelectItem>
            <SelectItem value={"NL"}>Netherlands</SelectItem>
            <SelectItem value={"TR"}>Turkey</SelectItem>
            <SelectItem value={"AR"}>Argentina</SelectItem>
            <SelectItem value={"BE"}>Belgium</SelectItem>
            <SelectItem value={"CH"}>Switzerland</SelectItem>
            <SelectItem value={"DK"}>Denmark</SelectItem>
            <SelectItem value={"FI"}>Finland</SelectItem>
            <SelectItem value={"NO"}>Norway</SelectItem>
            <SelectItem value={"PL"}>Poland</SelectItem>
            <SelectItem value={"PT"}>Portugal</SelectItem>
            <SelectItem value={"GR"}>Greece</SelectItem>
            <SelectItem value={"IE"}>Ireland</SelectItem>
            <SelectItem value={"NZ"}>New Zealand</SelectItem>
            <SelectItem value={"HU"}>Hungary</SelectItem>
            <SelectItem value={"CZ"}>Czech Republic</SelectItem>
            <SelectItem value={"AT"}>Austria</SelectItem>
            
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountryFilter;
