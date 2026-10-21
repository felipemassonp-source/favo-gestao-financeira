import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import MagneticButton from "./MagneticButton";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Início", path: "/" },
    { name: "Gestão Financeira", path: "/gestao-financeira" },
    { name: "Consultoria", path: "/consultoria" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-[#472f5b] bg-[#fffff0]/80 backdrop-blur-md border-b border-[#472f5b]/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[10px] uppercase tracking-[0.2em] hover:text-[#b2893d] transition-colors duration-300 font-light",
                location.pathname === link.path ? "text-[#b2893d]" : "text-[#2a3a1e]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <MagneticButton>
            <a
              href="#contato"
              className="border border-[#472f5b]/20 text-[#472f5b] px-8 py-3 text-[10px] font-medium uppercase tracking-[0.2em] rounded-full hover:border-[#D8B36B] hover:text-[#b2893d] transition-colors inline-block"
            >
              Fale Conosco
            </a>
          </MagneticButton>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#472f5b] hover:text-[#b2893d] transition-colors focus:outline-none p-2"
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
            className="md:hidden fixed top-24 left-0 w-full bg-[#fffff0]/95 backdrop-blur-md border-t border-[#472f5b]/10 overflow-hidden flex flex-col items-center pt-8 pb-32 gap-4 z-40"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "w-full text-center py-6 text-sm uppercase tracking-[0.2em] transition-colors duration-300 font-medium active:bg-[#472f5b]/5",
                  location.pathname === link.path ? "text-[#b2893d]" : "text-[#472f5b]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 border border-[#472f5b]/20 text-[#472f5b] bg-[#FFFFFF] px-12 py-5 text-xs font-normal uppercase tracking-[0.2em] rounded-full hover:border-[#D8B36B] hover:text-[#b2893d] transition-colors shadow-sm active:bg-[#472f5b]/5"
            >
              Fale Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
