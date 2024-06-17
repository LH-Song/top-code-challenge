import hmv from "../../public/assets/hero.mp4";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const heroVideo = hmv;
export const smallHeroVideo = hmv;
