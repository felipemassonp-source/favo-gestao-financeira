import React, { useState } from "react";
import { Hexagon } from "lucide-react";
import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "md" | "lg";
  onlySymbol?: boolean;
}

export default function Logo({ className, variant = "dark", size = "md", onlySymbol = false }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const textColor = variant === "dark" ? "text-[#38183A]" : "text-[#FFFFF0]";
  const logoSrc = onlySymbol ? "/logo-abelha.png" : "/logo-favo.png";

  if (!imgError) {
    return (
      <div className={cn("flex items-center group", className)}>
        <img 
          src={logoSrc} 
          alt="Favo Gestão Financeira" 
          onError={() => setImgError(true)}
          className={cn(
            "w-auto object-contain transition-transform duration-300 group-hover:scale-105",
            onlySymbol ? "h-11 md:h-14" : size === "lg" ? "h-16 md:h-20" : "h-14 md:h-16"
          )}
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative flex items-center justify-center">
        <Hexagon 
          strokeWidth={1.75} 
          className="w-8 h-8 text-[#38183A] fill-[#38183A]/10 transition-transform duration-300 group-hover:rotate-12" 
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
