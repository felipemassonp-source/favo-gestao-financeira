import React from "react";
import { Hexagon } from "lucide-react";
import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-[#472f5b]" : "text-[#fffff0]";
  
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex items-center justify-center">
        <Hexagon 
          strokeWidth={1.5} 
          className={cn(
            "w-8 h-8", 
            variant === "dark" ? "text-[#b2893d]" : "text-[#b2893d]"
          )} 
        />
        <div className={cn(
          "absolute w-2 h-2 rounded-full",
          variant === "dark" ? "bg-[#472f5b]" : "bg-[#fffff0]"
        )}></div>
      </div>
      <div className="flex flex-col">
        <span className={cn("font-serif text-xl leading-none tracking-widest uppercase", textColor)}>
          Favo
        </span>
        <span className="text-[7px] uppercase tracking-[0.3em] font-light text-[#b2893d] leading-none mt-1">
          Gestão Financeira
        </span>
      </div>
    </div>
  );
}
