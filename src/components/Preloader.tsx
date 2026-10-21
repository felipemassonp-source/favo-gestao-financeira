import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('favo_visited');
    if (hasVisited) {
      setIsLoading(false);
      setShouldRender(false);
      return;
    }
    
    // Bloqueia a rolagem durante o loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('favo_visited', 'true');
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fffff0] text-[#472f5b]"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-16 h-16 border border-[#D8B36B] flex items-center justify-center rounded-full"
            >
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-2 h-2 bg-[#D8B36B] rounded-full"
              ></motion.div>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="block font-serif text-3xl tracking-[0.4em] uppercase font-light text-[#472f5b]"
              >
                Favo
              </motion.span>
            </div>
            
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
              className="h-[1px] bg-[#472f5b]/10 relative overflow-hidden mt-4"
            >
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute inset-0 w-1/3 bg-[#D8B36B]"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
