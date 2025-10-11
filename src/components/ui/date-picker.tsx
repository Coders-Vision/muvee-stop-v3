"use client";

import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import { Calendar, CalendarProps } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@radix-ui/react-label";

export interface DatePickerBaseProps {
  /** Calendar props */
  /** The selected date */
  value?: Date;
  /** Callback when date changes */
  onChange?: (date: Date | undefined) => void;
  /** Format for the date display. Defaults to "PPP" */
  dateFormat?: string;
  /** Placeholder text when no date is selected */
  placeholder?: string;
  /** Custom class name for the button */
  className?: string;
  /** Props to pass to the button component */
  buttonProps?: Partial<ButtonProps>;
  /** Props to pass to the popover component */
  // popoverProps?: Partial<PopoverProps>;
  /** Whether the date picker is disabled */
  disabled?: boolean;
}

export type DatePickerProps = DatePickerBaseProps & CalendarProps;

export function DatePicker({
  value,
  onChange,
  dateFormat = "PPP",
  placeholder = "Pick a date",
  className,
  buttonProps,
  disabled,
  ...calendarProps
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value);

  // Handle button click when disabled
  const handleButtonClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="date-picker" className="mb-2 text-sm font-medium">
        {placeholder}
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            data-empty={!date}
            className={cn(
              "data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal",
              { "opacity-50 cursor-not-allowed": disabled },
              className
            )}
            disabled={disabled}
            onClick={handleButtonClick}
            {...buttonProps}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, dateFormat) : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar captionLayout="dropdown" {...calendarProps} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
