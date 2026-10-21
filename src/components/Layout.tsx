import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Header from "./Header";
import BeeCursor from "./BeeCursor";
import Footer from "./Footer";
import InstagramFeed from "./InstagramFeed";
import FloatingVideoBubble from "./FloatingVideoBubble";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        // Only intercept if it's pointing to the same page
        if (target.pathname === window.location.pathname) {
          e.preventDefault();
          lenis.scrollTo(target.hash, { offset: -80 }); // Offset for potential fixed header
        }
      }
    };

    document.documentElement.addEventListener('click', handleAnchorClick);

    // If there's a hash on initial load or route change to a page with hash
    if (location.hash) {
      // Small delay to ensure DOM is ready and page transition finished
      setTimeout(() => {
        lenis.scrollTo(location.hash, { offset: -80 });
      }, 800);
    }

    return () => {
      document.documentElement.removeEventListener('click', handleAnchorClick);
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
      <FloatingVideoBubble />
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        {/* AnimatePresence for Barba.js style page transitions */}
        <AnimatePresence mode="wait" onExitComplete={() => {
          if (!window.location.hash) {
            window.scrollTo(0, 0);
          }
        }}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <InstagramFeed />
      <Footer />
    </div>
  );
}
