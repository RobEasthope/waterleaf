import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge css classes together.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Check if there are any styles to apply to the component. If there are no styles, return undefined.
export function stylesCheck(styles: string | undefined) {
  if (!styles) return undefined;

  return styles;
}
