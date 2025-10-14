"use client";

import React from "react";
import { Check, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Label } from "../ui/label";
import { GENRE_FILTER_OPTIONS } from "@/constants/filter-constants";
import useFilter from "@/hooks/useFilter";

interface Option {
  label: string;
  value: number;
}

function GenreFilter() {
  
  const {
    value: selectedGenres,
    setValue: setSelectedGenres,
    resetValue,
  } = useFilter<Option[]>({
    paramKey: "with_genres",
    initialValue: [],
    transform: {
      toString: (value) => value.map((v) => v.value).join(","),
      fromString: (value) => {
        if (!value) return [];
        return value
          .split(",")
          .map((id) =>
            GENRE_FILTER_OPTIONS.find((opt) => opt.value === Number(id))
          )
          .filter((opt): opt is Option => opt !== undefined);
      },
    },
    // onFilterChange: onChange
  });

  const handleSelect = (option: Option) => {
    const isSelected = selectedGenres.some((s) => s.value === option.value);
    let newSelectedOptions: Option[];

    if (isSelected) {
      newSelectedOptions = selectedGenres.filter(
        (s) => s.value !== option.value
      );
    } else {
      newSelectedOptions = [...selectedGenres, option];
    }
    setSelectedGenres(newSelectedOptions);
  };

  // const handleClearFilters = () => {
  //   onChange([]);
  // };

  return (
    <div className="mt-1">
      <Label className="mb-2 font-medium">Genre</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="lg"

            className="h-10 rounded-xl border-dashed w-full" 
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Choose Genre
            {selectedGenres.length > 0 && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal lg:hidden"
                >
                  {selectedGenres.length}
                </Badge>
                <div className="hidden space-x-1 lg:flex">
                  {selectedGenres.length > 0 ? (
                    <Badge
                      variant="secondary"
                      className="rounded-sm px-1 font-normal"
                    >
                      {selectedGenres.length} selected
                    </Badge>
                  ) : (
                    selectedGenres.map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                  )}
                </div>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandInput placeholder={`Search by Genre`} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {GENRE_FILTER_OPTIONS.map((option) => {
                  const isSelected = selectedGenres.some(
                    (s) => s.value === option.value
                  );
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => handleSelect(option)}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <Check className={cn("h-4 w-4")} />
                      </div>
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              {selectedGenres.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem
                      onSelect={resetValue}
                      className="justify-center text-center"
                    >
                      Clear filters
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default GenreFilter;
