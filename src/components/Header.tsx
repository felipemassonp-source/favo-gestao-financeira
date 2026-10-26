import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import MagneticButton from "./MagneticButton";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToFormulario = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const formEl =
      document.getElementById("formulario") ||
      document.getElementById("formulario-bpo") ||
      document.getElementById("formulario-consultoria");

    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      navigate("/gestao-financeira");
      setTimeout(() => {
        const target =
          document.getElementById("formulario") ||
          document.getElementById("formulario-bpo");
        target?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 350);
    }
  };

  const links = [
    { name: "Início", path: "/" },
    { name: "Serviços & Planos", path: "/gestao-financeira" },
    { name: "Perguntas Frequentes", path: "/perguntas-frequentes" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-[#1F242D] bg-[#FFFFF0]/90 backdrop-blur-md border-b border-[#38183A]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo onlySymbol />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[10.5px] uppercase tracking-[0.2em] transition-colors duration-300 font-medium py-1",
                location.pathname === link.path 
                  ? "text-[#38183A] font-semibold border-b-2 border-[#38183A]" 
                  : "text-[#1F242D]/70 hover:text-[#38183A]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <MagneticButton>
            <a
              href="#formulario"
              onClick={scrollToFormulario}
              className="bg-[#38183A] hover:bg-[#2B112D] text-[#FFFFF0] border border-[#38183A] px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full shadow-sm hover:shadow-md transition-all inline-block cursor-pointer"
            >
              Fale Conosco
            </a>
          </MagneticButton>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#38183A] hover:text-[#2B112D] transition-colors focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed top-20 left-0 w-full bg-[#FFFFF0]/98 backdrop-blur-md border-t border-[#38183A]/10 overflow-hidden flex flex-col items-center pt-8 pb-32 gap-4 z-40"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "w-full text-center py-6 text-sm uppercase tracking-[0.2em] transition-colors duration-300 font-medium active:bg-[#38183A]/5",
                  location.pathname === link.path ? "text-[#38183A] font-bold" : "text-[#1F242D]/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#formulario"
              onClick={scrollToFormulario}
              className="mt-4 px-8 py-3.5 bg-[#38183A] text-[#FFFFF0] text-xs uppercase tracking-widest font-semibold rounded-full cursor-pointer"
            >
              Fale Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
