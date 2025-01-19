import { addDays, format, FormatOptions, startOfDay, subDays } from "date-fns";

export const getDate = () => format(new Date(), "yyyy-MM-dd");

export const addDate = (days: number) =>
  format(startOfDay(addDays(new Date(), days)), "yyyy-MM-dd");

export const getDifference = (days: number) =>
  format(startOfDay(subDays(new Date(), days)), "yyyy-MM-dd");

export const formatDate = (
  date: Date,
  formatString: string,
  options?: FormatOptions
) => format(date, formatString, options);
