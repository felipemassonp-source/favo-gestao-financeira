import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function BeeCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  
  const isHoveringTextRef = useRef(false);
  const isVisibleRef = useRef(false);
  const lastPollenPos = useRef({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotation = useMotionValue(0);

  // Smooth out the movement slightly for a natural "flying" feel
  const springX = useSpring(mouseX, { stiffness: 800, damping: 35, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 800, damping: 35, mass: 0.5 });
  const springRot = useSpring(rotation, { stiffness: 200, damping: 20 });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const createPollen = (x: number, y: number) => {
      // Don't create pollen if bee is hidden/hovering text
      if (isHoveringTextRef.current || !isVisibleRef.current) return;

      const pollen = document.createElement('div');
      
      // Random size between 3px and 6px
      const size = Math.random() * 3 + 3;
      pollen.style.width = `${size}px`;
      pollen.style.height = `${size}px`;
      
      // Styling
      pollen.style.position = 'fixed';
      pollen.style.backgroundColor = '#D8B36B'; // Golden color
      pollen.style.borderRadius = '50%';
      pollen.style.pointerEvents = 'none';
      pollen.style.zIndex = '99998'; // Just behind the bee (which is 99999)
      
      // Initial position (center)
      pollen.style.left = `${x - size/2}px`;
      pollen.style.top = `${y - size/2}px`;
      pollen.style.opacity = '0.7';
      
      // Transition setup
      pollen.style.transition = 'transform 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98), opacity 0.8s ease-out';
      
      document.body.appendChild(pollen);
      
      // Trigger reflow to ensure the starting position is registered
      void pollen.offsetWidth;
      
      // Randomize destination (drift away slightly)
      const endX = (Math.random() - 0.5) * 30; // -15px to 15px drift
      const endY = 15 + Math.random() * 20;    // 15px to 35px fall
      
      // Animate
      pollen.style.transform = `translate(${endX}px, ${endY}px) scale(0)`;
      pollen.style.opacity = '0';
      
      // Cleanup after animation finishes
      setTimeout(() => {
        pollen.remove();
      }, 800);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        setIsVisible(true);
        isVisibleRef.current = true;
      }
      
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      
      // Calculate angle in degrees if moving fast enough
      if (Math.abs(deltaX) > 1.5 || Math.abs(deltaY) > 1.5) {
        // Offset by 90 degrees because our bee SVG faces UP
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
        
        // Handle rotation wrapping to prevent spinning (shortest path)
        let currentRot = rotation.get();
        let diff = angle - (currentRot % 360);
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        
        rotation.set(currentRot + diff);
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Pollen Logic: Drop a pollen every 25 pixels of movement
      const distSinceLastPollen = Math.hypot(e.clientX - lastPollenPos.current.x, e.clientY - lastPollenPos.current.y);
      if (distSinceLastPollen > 25) {
        createPollen(e.clientX, e.clientY);
        lastPollenPos.current = { x: e.clientX, y: e.clientY };
      }
      
      lastX = e.clientX;
      lastY = e.clientY;

      // Check what we are hovering
      const target = e.target as HTMLElement;
      
      // Check for text inputs
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.getAttribute('contenteditable') === 'true') {
        if (!isHoveringTextRef.current) {
          setIsHoveringText(true);
          isHoveringTextRef.current = true;
          setIsHoveringInteractive(false);
        }
      } else {
        if (isHoveringTextRef.current) {
          setIsHoveringText(false);
          isHoveringTextRef.current = false;
        }
        // Check for links and buttons
        const isInteractive = target.closest('a') !== null || target.closest('button') !== null || target.closest('[role="button"]') !== null;
        setIsHoveringInteractive(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      isVisibleRef.current = false;
    };
    const handleMouseEnter = () => {
      setIsVisible(true);
      isVisibleRef.current = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, rotation]); // Dependencies remain stable

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: springX,
        y: springY,
        rotate: springRot,
        opacity: isVisible && !isHoveringText ? 1 : 0,
        // Offset the center of the bee to the cursor position
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isVisible && !isHoveringText ? (isHoveringInteractive ? 1.3 : 1) : 0.5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left Wing */}
        <path d="M11 10C8 5 4 4 2 6C0 7.5 1 11 5 11.5C8 12 10 11 11 10Z" fill="#fffff0" stroke="#b2893d" strokeWidth="1" strokeLinejoin="round"/>
        {/* Right Wing */}
        <path d="M13 10C16 5 20 4 22 6C24 7.5 23 11 19 11.5C16 12 14 11 13 10Z" fill="#fffff0" stroke="#b2893d" strokeWidth="1" strokeLinejoin="round"/>
        {/* Body */}
        <rect x="8" y="7" width="8" height="12" rx="4" fill="#b2893d"/>
        {/* Stripes */}
        <line x1="8" y1="11" x2="16" y2="11" stroke="#472f5b" strokeWidth="2"/>
        <line x1="8" y1="15" x2="16" y2="15" stroke="#472f5b" strokeWidth="2"/>
        {/* Stinger */}
        <path d="M12 19L12 22" stroke="#472f5b" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Head/Antennae */}
        <circle cx="12" cy="6" r="2.5" fill="#472f5b"/>
        <path d="M11 4C11 4 9 2 8 2" stroke="#472f5b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 4C13 4 15 2 16 2" stroke="#472f5b" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </motion.div>
  );
}
