"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectScreenshot } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProjectShotProps {
  screenshot?: ProjectScreenshot;
  title: string;
  className?: string;
  priority?: boolean;
}

export function ProjectShot({
  screenshot,
  title,
  className,
  priority = false,
}: ProjectShotProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(screenshot?.src) && !failed;

  return (
    <div
      className={cn(
        "project-shot relative overflow-hidden rounded-xl border border-border/70",
        className
      )}
    >
      {showImage ? (
        <Image
          src={screenshot!.src}
          alt={screenshot!.alt || title}
          fill
          priority={priority}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 60vw"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
          <div className="project-shot-grid absolute inset-0" aria-hidden="true" />
          <div className="relative flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="ml-3 truncate font-mono text-[10px] text-muted/70">
              {screenshot?.caption ?? title}
            </span>
          </div>
          <div className="relative space-y-2">
            <div className="h-2 max-w-[12rem] w-[66%] rounded bg-foreground/10" />
            <div className="h-2 max-w-[9rem] w-[50%] rounded bg-foreground/10" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="aspect-video rounded-md border border-border/60 bg-background/40" />
              <div className="aspect-video rounded-md border border-border/60 bg-background/30" />
              <div className="aspect-video rounded-md border border-border/60 bg-background/20" />
            </div>
          </div>
          <p className="relative font-mono text-[10px] uppercase tracking-widest text-muted/60">
            Add screenshot → {screenshot?.src?.split("/").pop() ?? "image.png"}
          </p>
        </div>
      )}
    </div>
  );
}
