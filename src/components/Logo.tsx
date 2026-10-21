import React, { useState } from "react";
import { Hexagon } from "lucide-react";
import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className, variant = "dark" }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const textColor = variant === "dark" ? "text-[#472F5B]" : "text-[#FFFFF0]";
  const logoSrc = variant === "dark" ? "/logo-dark.png" : "/logo-light.png";

  if (!imgError) {
    return (
      <div className={cn("flex items-center group", className)}>
        <img 
          src={logoSrc} 
          alt="Favo Gestão Financeira" 
          onError={() => setImgError(true)}
          className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative flex items-center justify-center">
        <Hexagon 
          strokeWidth={1.75} 
          className="w-8 h-8 text-[#472F5B] fill-[#472F5B]/10 transition-transform duration-300 group-hover:rotate-12" 
        />
        <div className={cn(
          "absolute w-2 h-2 rounded-full",
          variant === "dark" ? "bg-[#D97706]" : "bg-[#FFFFF0]"
        )}></div>
      </div>
      <div className="flex flex-col">
        <span className={cn("font-serif text-xl leading-none tracking-widest uppercase font-medium", textColor)}>
          Favo
        </span>
        <span className="text-[7.5px] uppercase tracking-[0.3em] font-medium text-[#D97706] leading-none mt-1">
          Gestão Financeira
        </span>
      </div>
    </div>
  );
}
