"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  speed?: number; // Speed in seconds for a full loop
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  speed = 30,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 select-none [--duration:30s] [--gap:1rem] [gap:var(--gap)] flex-row",
        className
      )}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] min-w-full flex-row animate-marquee",
          reverse ? "direction-reverse" : "",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] min-w-full flex-row animate-marquee",
          reverse ? "direction-reverse" : "",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
