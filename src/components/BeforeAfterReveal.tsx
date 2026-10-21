import React, { useRef, useState, useEffect } from 'react';
import { ChevronsLeftRight, AlertTriangle, TrendingDown, CheckCircle2, TrendingUp, FileSpreadsheet, ShieldCheck, PieChart, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

export default function BeforeAfterReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  
  // Motion values for buttery smooth, physics-based interaction
  const xPct = useMotionValue(50);
  const springXPct = useSpring(xPct, { stiffness: 150, damping: 25, mass: 0.8 });
  
  // Dynamic transformations based on slider position
  const clipPathCaos = useTransform(springXPct, (val) => `inset(0 ${100 - val}% 0 0)`);
  const handleLeft = useTransform(springXPct, (val) => `${val}%`);
  
  // Dynamic text reveals based on where the slider is
  const titleOpacityCaos = useTransform(springXPct, [20, 50], [1, 0.2]);
  const titleOpacityClareza = useTransform(springXPct, [50, 80], [0.2, 1]);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const pct = (currentX / rect.width) * 100;
    xPct.set(Math.max(0, Math.min(100, pct)));
  };

  // Auto-preview animation on mount to teach the user it's interactive
  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 1500));
      xPct.set(65);
      await new Promise(r => setTimeout(r, 600));
      xPct.set(35);
      await new Promise(r => setTimeout(r, 600));
      xPct.set(50);
    };
    sequence();
  }, [xPct]);

  return (
    <section className="py-24 bg-[#fffff0] relative border-b border-[#472f5b]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Dynamic Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          <span className="text-[#866428] text-[10px] uppercase tracking-[0.3em] mb-6 block font-medium">A Transformação Favo</span>
          
          <div className="relative h-20 md:h-24 flex items-center justify-center">
             <motion.h2 style={{ opacity: titleOpacityCaos }} className="absolute text-3xl md:text-5xl font-serif font-light text-red-900/80 tracking-wide text-center w-full">
               A ansiedade de <span className="italic font-medium text-red-600">apagar incêndios.</span>
             </motion.h2>
             
             <motion.h2 style={{ opacity: titleOpacityClareza }} className="absolute text-3xl md:text-5xl font-serif font-light text-[#472f5b] tracking-wide text-center w-full">
               A paz de uma <span className="italic font-medium text-[#866428]">gestão inteligente.</span>
             </motion.h2>
          </div>

          <p className="text-sm font-normal text-[#2a3a1e] tracking-wide leading-relaxed max-w-2xl mx-auto">
            Interaja com o quadro abaixo. Veja como substituímos o caos de papéis, multas e planilhas por relatórios visuais que colocam dinheiro no seu bolso.
          </p>
        </div>

        {/* Interactive Container */}
        <div 
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerDown={() => setIsInteracting(true)}
          onPointerUp={() => setIsInteracting(false)}
          onPointerLeave={() => {
            setIsInteracting(false);
            xPct.set(50); // Snap back to center when mouse leaves
          }}
          className="relative w-full max-w-6xl mx-auto aspect-[4/5] md:aspect-[21/9] bg-[#E8E6E1] shadow-2xl rounded-sm overflow-hidden group cursor-crosshair touch-none"
        >
          
          {/* ================= BACKGROUND: CLAREZA (RIGHT SIDE) ================= */}
          <div className="absolute inset-0 bg-[#fffff0]">
            <motion.img 
              animate={{ scale: isInteracting ? 1.05 : 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600" 
              alt="Empresária tranquila"
              className="w-full h-full object-cover opacity-90"
              draggable="false"
            />
            {/* Gradient Overlay for Clareza */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#472f5b]/20 mix-blend-multiply"></div>
            
            <div className="absolute top-6 right-6 z-20 bg-[#866428] text-[#fffff0] px-4 py-2 text-[10px] uppercase tracking-widest font-medium shadow-lg flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Com a Favo
            </div>

            {/* Floating UI Widget 1: Clareza */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-8 md:right-16 bg-[#fffff0]/90 backdrop-blur-md border border-[#866428]/20 p-4 shadow-xl rounded-lg flex items-center gap-4 max-w-[200px] md:max-w-[240px]"
            >
              <div className="w-10 h-10 rounded-full bg-[#866428]/10 flex items-center justify-center shrink-0">
                <PieChart className="w-5 h-5 text-[#866428]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-[#472f5b] font-semibold mb-1">Lucro Líquido</p>
                <p className="text-xl font-serif text-[#2a3a1e]">+ 24.5%</p>
              </div>
            </motion.div>

            {/* Floating UI Widget 2: Clareza */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-12 md:right-32 bg-[#472f5b]/95 backdrop-blur-md p-4 shadow-2xl rounded-lg flex flex-col gap-2 max-w-[180px]"
            >
              <div className="flex items-center gap-2 text-[#D8B36B]">
                <CheckCircle2 className="w-4 h-4" />
                <p className="text-[10px] uppercase tracking-widest font-medium">Conciliado</p>
              </div>
              <p className="text-xs text-[#fffff0]/80 font-light">Todas as contas batem com o banco. Zero furos.</p>
            </motion.div>
          </div>


          {/* ================= FOREGROUND: CAOS (LEFT SIDE) ================= */}
          <motion.div 
            style={{ clipPath: clipPathCaos }}
            className="absolute inset-0 z-20 bg-gray-100 will-change-transform"
          >
            <motion.img 
              animate={{ scale: isInteracting ? 1.05 : 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1580828369160-f1c990089a8a?auto=format&fit=crop&q=80&w=1600" 
              alt="Empresário estressado"
              className="w-full h-full object-cover filter grayscale-[0.5] sepia-[0.2]"
              draggable="false"
            />
            {/* Stressful dark/red overlay */}
            <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply"></div>
            
            <div className="absolute top-6 left-6 z-20 bg-red-600 text-white px-4 py-2 text-[10px] uppercase tracking-widest font-medium shadow-lg flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Fazendo Sozinho
            </div>

            {/* Floating UI Widget 1: Caos */}
            <motion.div 
              animate={{ y: [0, 10, 0], rotate: [-2, 0, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 left-8 md:left-16 bg-white/95 backdrop-blur-md border border-red-200 p-4 shadow-[0_10px_40px_rgba(220,38,38,0.15)] rounded-lg flex flex-col gap-2 max-w-[200px]"
            >
              <div className="flex items-center justify-between text-red-600 mb-1">
                <FileSpreadsheet className="w-5 h-5" />
                <span className="text-[9px] font-bold uppercase tracking-widest bg-red-100 px-2 py-1 rounded">Atrasado</span>
              </div>
              <p className="text-xs text-gray-800 font-medium">Controle_Financeiro_V8_FINAL.xlsx</p>
              <p className="text-[10px] text-gray-500 font-mono">Erro: Célula #REF!</p>
            </motion.div>

            {/* Floating UI Widget 2: Caos */}
            <motion.div 
              animate={{ y: [0, -6, 0], rotate: [2, 0, 2] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-1/4 left-12 md:left-24 bg-red-600/95 text-white backdrop-blur-md p-4 shadow-2xl rounded-lg flex items-center gap-4 max-w-[220px]"
            >
               <div className="w-10 h-10 rounded-full bg-red-800/50 flex items-center justify-center shrink-0">
                <TrendingDown className="w-5 h-5 text-red-200" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest font-semibold text-red-200 mb-1">Juros & Multas</p>
                <p className="text-lg font-serif">- R$ 845,90</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* ================= SLIDER HANDLE ================= */}
          <motion.div 
            style={{ left: handleLeft }}
            className="absolute top-0 bottom-0 w-0.5 bg-[#866428] z-30 pointer-events-none will-change-transform"
          >
            {/* Glowing line effect */}
            <div className="absolute inset-y-0 -left-[1px] w-[3px] bg-[#D8B36B] blur-sm opacity-70"></div>
            
            {/* The Dragger Button */}
            <motion.div 
              animate={{ scale: isInteracting ? 0.9 : 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#fffff0]/90 backdrop-blur-sm border border-[#866428] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(134,100,40,0.4)] transition-colors duration-200 group-hover:bg-[#fffff0]"
            >
               <ChevronsLeftRight className="w-6 h-6 text-[#866428]" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Call to Action Below the Interactive Area */}
        <div className="mt-16 text-center">
          <Link 
            to="/bpo" 
            className="inline-flex items-center justify-center gap-3 bg-[#472f5b] text-[#fffff0] px-8 py-5 text-xs uppercase tracking-widest font-medium hover:bg-[#2a3a1e] transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300"
          >
            Quero ter previsibilidade <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
