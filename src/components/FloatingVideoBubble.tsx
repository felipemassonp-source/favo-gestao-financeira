import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingVideoBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Auto-show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Bubble */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Tooltip / Message */}
        <AnimatePresence>
          {(isHovered || showTooltip) && !isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#fffff0] border border-[#866428]/20 shadow-xl px-5 py-3 rounded-2xl rounded-br-sm pointer-events-auto cursor-pointer relative"
              onClick={() => setIsOpen(true)}
            >
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#fffff0] border-r border-b border-[#866428]/20 rotate-45"></div>
              <p className="text-xs font-medium text-[#472f5b] whitespace-nowrap relative z-10">
                Aperte o <span className="text-[#866428]">play</span> 👋
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bubble Button */}
        <button 
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-2xl border-2 border-[#866428] pointer-events-auto group ring-4 ring-[#866428]/10 transition-all hover:scale-105 hover:ring-[#866428]/30"
        >
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
            alt="Andryelle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#472f5b]/40 group-hover:bg-[#472f5b]/20 transition-colors flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D8B36B] flex items-center justify-center animate-pulse shadow-lg">
              <Play className="w-3 h-3 md:w-4 md:h-4 text-[#472f5b] ml-1" />
            </div>
          </div>
        </button>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#472f5b]/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#fffff0] overflow-hidden shadow-2xl flex flex-col md:flex-row rounded-sm"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#fffff0] md:bg-[#472f5b]/10 flex items-center justify-center text-[#472f5b] hover:bg-[#D8B36B] hover:text-[#fffff0] transition-colors shadow-sm md:shadow-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Area Placeholder */}
              <div className="w-full md:w-2/3 aspect-video bg-black relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                   <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                   
                   {/* Mock Player UI */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-20 h-20 rounded-full bg-[#D8B36B] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                       <Play className="w-8 h-8 text-[#472f5b] ml-2" />
                     </div>
                   </div>
                   
                   <div className="absolute bottom-6 left-6 right-6">
                     <div className="h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer">
                       <div className="h-full bg-[#D8B36B] w-1/3 relative">
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                       </div>
                     </div>
                     <div className="flex justify-between mt-2">
                       <span className="text-white/70 text-[10px] font-mono">01:24</span>
                       <span className="text-white/70 text-[10px] font-mono">03:45</span>
                     </div>
                   </div>
                </div>
              </div>

              {/* Text / Context Area */}
              <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col justify-center bg-[#fffff0]">
                <p className="text-[10px] uppercase tracking-widest text-[#866428] mb-3 font-medium">
                  Mensagem da Fundadora
                </p>
                <h3 className="text-2xl font-serif text-[#472f5b] mb-4 leading-tight">
                  "O financeiro virou uma dor de cabeça?"
                </h3>
                <p className="text-sm text-[#2a3a1e] font-light leading-relaxed mb-8">
                  Assista a este vídeo rápido e entenda exatamente como a Favo organiza o caos, elimina planilhas e devolve o controle do seu caixa em até 6 semanas, sem que você precise contratar funcionários.
                </p>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#472f5b] text-[#fffff0] py-4 text-xs uppercase tracking-widest hover:bg-[#2a3a1e] transition-colors"
                >
                  Continuar no site
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
