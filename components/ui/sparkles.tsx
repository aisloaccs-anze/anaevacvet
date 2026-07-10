"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  color?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
}

export function Sparkles({
  className,
  color = "#D9C4BE", // Default to blush pink
  minSize = 0.5,
  maxSize = 2.5,
  particleDensity = 40,
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Monitor visibility of the canvas inside the viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.01, // trigger if even 1% is visible
      }
    );

    observer.observe(canvas);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Monitor element resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        if (parent) {
          setDimensions({
            width: parent.clientWidth,
            height: parent.clientHeight,
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Particle animation loop
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0 || !isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Scale canvas for high-DPI screens
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      direction: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.floor((dimensions.width * dimensions.height) / (100000 / particleDensity));

    const createParticle = (isInitial = false): Particle => {
      return {
        x: Math.random() * dimensions.width,
        y: isInitial ? Math.random() * dimensions.height : dimensions.height + 10,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -(Math.random() * 0.2 + 0.1), // Drift upwards
        opacity: Math.random(),
        fadeSpeed: Math.random() * 0.005 + 0.002,
        direction: Math.random() > 0.5 ? 1 : -1,
      };
    };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particles.forEach((p, idx) => {
        // Update positions
        p.y += p.speedY;
        p.x += p.speedX;

        // Fade in and out
        p.opacity += p.fadeSpeed * p.direction;
        if (p.opacity >= 1) {
          p.direction = -1;
        } else if (p.opacity <= 0) {
          particles[idx] = createParticle();
        }

        // Keep inside bounds horizontally
        if (p.x < 0) p.x = dimensions.width;
        if (p.x > dimensions.width) p.x = 0;

        // Reset if drifted past top
        if (p.y < -10) {
          particles[idx] = createParticle();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.opacity * 0.4; // Soften the opacity limit
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow for performance
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions, color, minSize, maxSize, particleDensity, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      className={cn("pointer-events-none absolute inset-0 block", className)}
    />
  );
}
