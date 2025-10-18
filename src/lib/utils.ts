import { twMerge } from "tailwind-merge";

export function cn(
  ...classNames: Array<string | false | null | undefined>
): string {
  return twMerge(classNames.filter(Boolean).join(" "));
}

export function formatTimeLeft(msRemaining: number): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const totalSeconds = Math.max(0, Math.floor(msRemaining / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
}

export function capitalizeFirstLetter(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function ellipsizeText(text: string, maxLength: number = 15): string {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export function goToNectar() {
  window.open("https://nectar.ai", "_blank", "noopener,noreferrer");
}
