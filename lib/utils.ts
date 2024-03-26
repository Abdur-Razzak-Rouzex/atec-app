import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = (message: string, error: unknown) => {
  console.error(message, error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};
