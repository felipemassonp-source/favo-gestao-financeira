import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import BeeCursor from "./BeeCursor";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll instantly to top whenever pathname changes without hash
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    if (!location.hash) {
      lenis.scrollTo(0, { immediate: true });
    }

    // Refresh ScrollTrigger after DOM renders route at multiple intervals
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 50);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 200);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 500);

    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        if (target.pathname === window.location.pathname) {
          e.preventDefault();
          lenis.scrollTo(target.hash, { offset: -80 });
        }
      }
    };

    document.documentElement.addEventListener('click', handleAnchorClick);

    if (location.hash) {
      setTimeout(() => {
        lenis.scrollTo(location.hash, { offset: -80 });
      }, 400);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.documentElement.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fffff0] text-[#472f5b] font-sans selection:bg-[#D8B36B]/30 relative">
      {/* Noise Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.04] mix-blend-multiply" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
      <BeeCursor />
      <Header />
      <main className="relative flex-1 w-full overflow-x-clip">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
