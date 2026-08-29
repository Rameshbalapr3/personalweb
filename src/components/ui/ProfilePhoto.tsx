"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  className?: string;
  size?: "md" | "lg" | "xl";
  showStatus?: boolean;
}

const sizeMap = {
  md: "w-24 aspect-[4/5]",
  lg: "w-44 sm:w-48 aspect-[4/5]",
  xl: "w-56 sm:w-64 lg:w-72 aspect-[4/5]",
};

export function ProfilePhoto({
  className,
  size = "lg",
  showStatus = true,
}: ProfilePhotoProps) {
  const [hasError, setHasError] = useState(false);

  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={cn("relative shrink-0", className)}>
      <div
        className={cn(
          "hero-photo-ring relative overflow-hidden rounded-[1.25rem] bg-zinc-950",
          sizeMap[size]
        )}
      >
        {!hasError ? (
          <Image
            src={siteConfig.profileImage}
            alt={`${siteConfig.name} — AI-Integrated Full Stack Engineer`}
            fill
            className="object-cover object-[center_20%]"
            sizes="(max-width: 1024px) 240px, 288px"
            priority
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <span className="font-mono text-3xl font-medium text-zinc-400 sm:text-4xl">
              {initials}
            </span>
          </div>
        )}
      </div>

      {showStatus && (
        <span
          className="absolute bottom-3 right-3 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500"
          title="Open to opportunities"
          aria-label="Open to opportunities"
        />
      )}
    </div>
  );
}
