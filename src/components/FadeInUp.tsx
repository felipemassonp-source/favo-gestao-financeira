import React, { useRef, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
}

export default function FadeInUp({ 
  children, 
  delay = 0, 
  className = "", 
  parallax = false, 
  parallaxSpeed = 0.1 
}: FadeInUpProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Premium Fade-in Up Effect
    gsap.fromTo(containerRef.current, 
      { 
        y: 60, 
        opacity: 0,
        // Add a slight rotation for a more organic feel if it's not a large layout container
        // rotation: 1 
      },
      {
        y: 0,
        opacity: 1,
        // rotation: 0,
        duration: 1.2,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Triggers when the top of the element hits 85% of the viewport height
          toggleActions: "play none none reverse", // Plays forward on enter, reverses on leave back
        }
      }
    );

    // Optional Parallax Effect
    if (parallax) {
      gsap.to(containerRef.current, {
        y: () => -window.innerHeight * parallaxSpeed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing
        }
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
