import { format, startOfDay, subDays } from "date-fns";

export const getDate = () => format(new Date(), "yyyy-MM-dd");

export const getDifference = (days: number) =>
  format(startOfDay(subDays(new Date(), days)), "yyyy-MM-dd");
