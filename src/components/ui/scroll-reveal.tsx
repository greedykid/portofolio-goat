"use client";

import * as React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds (default 900ms for slow and smooth feel)
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // displacement in px (default 24px)
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 900,
  direction = "up",
  distance = 24,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isReducedMotion, setIsReducedMotion] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setIsReducedMotion(true);
        setIsVisible(true);
        return;
      }
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isReducedMotion || isVisible) return "translate(0, 0)";
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      case "none":
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible || isReducedMotion ? 1 : 0,
        transform: getTransform(),
        transitionProperty: isReducedMotion ? "none" : "opacity, transform",
        transitionDuration: isReducedMotion ? "0ms" : `${duration}ms`,
        transitionDelay: isReducedMotion ? "0ms" : `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
