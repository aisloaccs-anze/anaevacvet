"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  borderRadius?: string;
  borderWidth?: number;
  duration?: number;
  color?: string[];
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = "1rem",
  borderWidth = 1,
  duration = 8,
  color = ["#A4B29D", "#D9C4BE", "#EFE7DC"], // sage, blush, and beige
  className,
  children,
  ...props
}: ShineBorderProps) {
  const borderGradient = color.join(", ");

  return (
    <div
      className={cn(
        "relative flex w-full h-full min-h-full items-stretch justify-stretch overflow-hidden bg-background",
        className
      )}
      style={{
        borderRadius,
      } as React.CSSProperties}
      {...props}
    >
      {/* Shine overlay */}
      <div
        className="pointer-events-none absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-10 animate-shine"
        style={{
          background: `conic-gradient(from 0deg, ${borderGradient}, ${color[0]})`,
          borderRadius: `calc(${borderRadius} + 2px)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />
      
      {/* Static premium border when not hovered */}
      <div className="absolute inset-0 border border-border-color rounded-2xl pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

      <div className="relative z-20 flex w-full flex-col">{children}</div>
    </div>
  );
}
