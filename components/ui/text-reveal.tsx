"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface TextRevealProps extends Omit<HTMLMotionProps<"span">, "children"> {
  text: string;
  delay?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  once = true,
  ...props
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // premium custom ease-out
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={cn("inline-flex flex-wrap overflow-hidden", className)}
      {...props}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="relative inline-block overflow-hidden pb-1 mr-[0.25em]"
        >
          <motion.span
            variants={wordVariants}
            className="inline-block origin-bottom select-none"
          >
            {word === "" ? "\u00A0" : word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
