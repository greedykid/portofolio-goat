"use client";

import * as React from "react";
import Lenis from "lenis";
import { ArrowUp } from "lucide-react";

export function SmoothScroll() {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const handleNativeScroll = () => {
        const totalScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
          setScrollProgress(window.scrollY / totalScroll);
        }
        setShowBackToTop(window.scrollY > 400);
      };
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleNativeScroll);
    }

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    // Listen to Lenis scroll events for progress & back-to-top visibility
    lenis.on("scroll", (e: { progress: number; scroll: number }) => {
      setScrollProgress(e.progress);
      setShowBackToTop(e.scroll > 400);
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Reading Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#5865f2] via-[#8891f2] to-[#57f287] origin-left transition-transform duration-75 ease-out shadow-sm shadow-[#5865f2]/40"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#23272a]/90 backdrop-blur-md border border-[#50555f]/50 text-white shadow-xl shadow-black/40 hover:border-[#5865f2] hover:bg-[#5865f2] hover:shadow-[#5865f2]/25 active:scale-[0.95] transition-all duration-300 cursor-pointer group ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Kembali ke atas halaman"
      >
        <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </>
  );
}
