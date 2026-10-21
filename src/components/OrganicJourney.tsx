import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileSpreadsheet, AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OrganicJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (!pathRef.current || !containerRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set initial state for drawing the line
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    // Animate the line drawing based on scroll
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%", // Starts drawing when section is 60% down the viewport
        end: "bottom 80%", // Finishes drawing near the bottom
        scrub: 1.5, // Buttery smooth scrubbing
      }
    });

    // Reveal the cards organically
    gsap.utils.toArray('.journey-card').forEach((card: any, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        rotation: i % 2 === 0 ? -2 : 2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Animate glowing nodes on the path
    gsap.utils.toArray('.journey-dot-container').forEach((dotContainer: any, i) => {
      const dot = dotContainer.querySelector('.journey-dot');
      const ring = dotContainer.querySelector('.journey-ring');
      const branch = dotContainer.parentElement.querySelector('.branch-line');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: dotContainer,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Dot appears
      tl.from(dot, { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(2)" });
      
      // Branch grows to card
      if (branch) {
        tl.to(branch, { width: '100%', duration: 0.6, ease: "power2.out" }, "-=0.2");
      }

      // Ring pulses
      tl.from(ring, { scale: 0, opacity: 0, duration: 0.4 }, "-=0.4");
    });
  }, { scope: containerRef });

  const steps = [
    {
      id: 1,
      type: "pain",
      title: "O Caos Diário",
      desc: "Contas físicas misturadas com as da empresa, planilhas quebradas e o sentimento constante de que o dinheiro 'sumiu' no fim do mês.",
      icon: FileSpreadsheet,
      align: "left"
    },
    {
      id: 2,
      type: "pain",
      title: "A Sobrecarga",
      desc: "Você passa o fim de semana lançando notas, apagando incêndios com bancos e perdendo dinheiro por esquecer prazos de boletos.",
      icon: AlertTriangle,
      align: "right"
    },
    {
      id: 3,
      type: "solution",
      title: "A Intervenção Favo",
      desc: "Nós assumimos a trincheira. Mapeamos seu financeiro, limpamos os processos manuais e assumimos 100% da burocracia bancária.",
      icon: Lightbulb,
      align: "left"
    },
    {
      id: 4,
      type: "solution",
      title: "Paz e Lucratividade",
      desc: "Dashboard visual e preciso na sua mão. Você volta a dormir em paz e recupera o seu tempo para focar naquilo que traz dinheiro: vendas.",
      icon: TrendingUp,
      align: "right"
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#fffff0] relative overflow-hidden border-t border-[#472f5b]/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <span className="text-[#866428] text-[10px] uppercase tracking-[0.3em] mb-6 block font-medium">A Jornada</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#472f5b] mb-6 tracking-wide">
            Como conectamos o seu caos <br className="hidden md:block"/>
            à <span className="italic text-[#866428]">nossa clareza.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Organic SVG Line */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full md:w-[200px] h-full overflow-visible"
            >
              {/* Faded Background Trace */}
              <path
                d="M 50 0 Q 75 12.5, 50 25 T 50 50 T 50 75 T 50 100"
                stroke="#866428"
                strokeOpacity="0.1"
                strokeWidth="1"
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
              {/* Animated Golden Thread */}
              <path
                ref={pathRef}
                d="M 50 0 Q 75 12.5, 50 25 T 50 50 T 50 75 T 50 100"
                stroke="#D8B36B"
                strokeWidth="3"
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(216,179,107,0.7)]"
              />
            </svg>
          </div>

          {/* Steps Layout */}
          <div className="flex flex-col justify-between relative z-10" style={{ minHeight: '800px' }}>
            {steps.map((step, index) => {
              const isLeft = step.align === 'left';
              const isPain = step.type === 'pain';

              return (
                <div
                  key={step.id}
                  className={`flex items-center w-full my-12 md:my-0 ${
                    isLeft ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-full md:w-5/12 relative ${isLeft ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'}`}>
                    
                    {/* The Card */}
                    <div className={`journey-card relative bg-[#FFFFFF] p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-l-4 ${isPain ? 'border-[#472f5b]/40' : 'border-[#866428]'}`}>
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-md ${isPain ? 'bg-[#fffff0] border border-[#472f5b]/10 text-[#472f5b]/60' : 'bg-[#472f5b] text-[#D8B36B]'}`}>
                        <step.icon className="w-5 h-5" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-serif text-[#472f5b] mb-4 leading-tight">{step.title}</h3>
                      <p className="text-sm font-light text-[#2a3a1e] leading-relaxed tracking-wide">
                        {step.desc}
                      </p>
                    </div>

                    {/* Branching Line connecting Dot to Card */}
                    <div className={`branch-line absolute top-1/2 -translate-y-1/2 h-[2px] z-0 ${isPain ? 'bg-gradient-to-r from-transparent to-[#472f5b]/20' : 'bg-[#D8B36B]'}`} 
                         style={{ 
                           width: '0%', 
                           [isLeft ? 'right' : 'left']: '10%',
                           [isLeft ? 'left' : 'right']: 'auto',
                           maxWidth: 'calc(100% - 2rem)'
                         }}>
                    </div>

                    {/* Connecting Dot (Mobile positioned left/right, Desktop centered) */}
                    <div className={`journey-dot-container absolute top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 ${isLeft ? '-right-5 md:-right-16 md:translate-x-1/2' : '-left-5 md:-left-16 md:-translate-x-1/2'}`}>
                      <div className={`journey-dot relative z-20 w-4 h-4 rounded-full shadow-[0_0_20px_rgba(216,179,107,0.9)] ${isPain ? 'bg-[#472f5b]/50' : 'bg-[#D8B36B]'}`}></div>
                      {/* Pulse Ring */}
                      <div className={`journey-ring absolute z-10 w-10 h-10 rounded-full border border-dashed animate-[spin_5s_linear_infinite] ${isPain ? 'border-[#472f5b]/20' : 'border-[#D8B36B]/60'}`}></div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
