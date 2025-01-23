import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function removeNullUndefined(obj: { [key: string]: any }) {
  return Object.entries(obj).reduce<{ [key: string]: any }>(
    (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {}
  );
}
