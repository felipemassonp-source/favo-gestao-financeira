import React, { useRef, ReactElement } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticButtonProps {
  children: ReactElement;
  strength?: number;
}

export default function MagneticButton({ children, strength = 40 }: MagneticButtonProps) {
  const magneticRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const element = magneticRef.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * (strength / 100));
      yTo(y * (strength / 100));
    };

    const handleMouseEnter = () => {
      gsap.to(element, { scale: 1.06, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      gsap.to(element, { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return React.cloneElement(children, { ref: magneticRef } as any);
}

