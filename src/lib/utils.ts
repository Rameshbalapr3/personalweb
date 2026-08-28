import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isPlaceholderUrl(value: string): boolean {
  return (
    value === "GITHUB_URL" ||
    value === "LINKEDIN_URL" ||
    value === "EMAIL" ||
    value === "PHONE" ||
    !value ||
    value.startsWith("YOUR_")
  );
}

export function getSocialHref(
  type: "github" | "linkedin" | "email" | "phone",
  value: string
): string | null {
  if (isPlaceholderUrl(value)) return null;

  switch (type) {
    case "github":
    case "linkedin":
      return value;
    case "email":
      return `mailto:${value}`;
    case "phone":
      return `tel:${value.replace(/\s/g, "")}`;
    default:
      return null;
  }
}
