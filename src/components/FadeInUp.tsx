import React, { ReactNode } from "react";
import { motion } from "motion/react";

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
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -20px 0px" }}
      transition={{ 
        duration: 0.7, 
        delay: Math.min(delay, 0.25), 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

