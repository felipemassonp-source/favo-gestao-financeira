import { useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, Quote, TrendingUp, ChevronLeft, ChevronRight, Hand } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, Draggable);

const testimonials = [
  {
    author: "Juliana Librelon",
    role: "Proprietária",
    company: "Clínica de Estética",
    text: "Andry, eu quero te abraçar! Eu não tô acreditando que tô tirando essas férias. Já tô até programando a próxima com as crianças. A tranquilidade de saber que o negócio roda financeiramente sem mim não tem preço.",
    highlight: "Ganhou tempo e liberdade",
    stars: 5
  },
  {
    author: "Brunella Freitas",
    role: "CEO",
    company: "Agência de Marketing",
    text: "A Andry é muito mais do que uma terceirizada. Cada solução reflete o cuidado que ela dedica. Ela não apenas entende nossas necessidades, mas nos ajuda a superar desafios de caixa. Pessoa de extrema confiança e competência!",
    highlight: "Previsibilidade de Caixa",
    stars: 5
  },
  {
    author: "Graziele Cardoso",
    role: "Sócia-Fundadora",
    company: "Escritório de Advocacia",
    text: "Eu só sei as respostas exatas de quanto o escritório fatura e lucra porque tenho a melhor equipe cuidando disso para mim. Misturar conta de casa com a do escritório é coisa do passado.",
    highlight: "Controle e Clareza (PF/PJ)",
    stars: 5
  },
  {
    author: "Luiza Martini",
    role: "Diretora Criativa",
    company: "Estúdio de Design",
    text: "Muito obrigada Andry, tô muito feliz que tu tá aqui com a gente. Ter previsibilidade pra saber quando podemos contratar e investir em equipamentos novos mudou completamente a nossa operação.",
    highlight: "Crescimento Estruturado",
    stars: 5
  },
  {
    author: "B. Dias",
    role: "Fundadora",
    company: "E-commerce",
    text: "O suporte de vocês tem sido fundamental, vocês não fazem ideia! O BPO tirou um peso enorme das minhas costas. Chega de pagar juros por esquecer vencimentos no meio da loucura das vendas.",
    highlight: "Zero Atrasos e Multas",
    stars: 5
  },
  {
    author: "Gabriel Soares",
    role: "Fundador",
    company: "Startup de Tecnologia",
    text: "Acho o máximo que a Favo consegue nos dar essa visibilidade real dos números. Não sei o que seria da saúde financeira dessa empresa sem vocês. Obrigado por olharem estrategicamente pro nosso todo.",
    highlight: "Visão Estratégica",
    stars: 5
  }
];

export default function Testimonials({ showPricing = false }: { showPricing?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const updateBounds = () => {
      const trackWidth = track.scrollWidth;
      const wrapperWidth = wrapper.clientWidth;
      const maxX = wrapperWidth - trackWidth;

      if (draggableRef.current[0]) {
        draggableRef.current[0].kill();
      }

      draggableRef.current = Draggable.create(track, {
        type: "x",
        bounds: { minX: maxX < 0 ? maxX : 0, maxX: 0 },
        inertia: true,
        edgeResistance: 0.65,
        dragResistance: 0.1,
        onDrag: function() {
          const progress = Math.abs(this.x) / Math.abs(maxX || 1);
          const index = Math.round(progress * (testimonials.length - 1));
          setActiveIndex(Math.max(0, Math.min(testimonials.length - 1, index)));
        },
        onThrowUpdate: function() {
          const progress = Math.abs(this.x) / Math.abs(maxX || 1);
          const index = Math.round(progress * (testimonials.length - 1));
          setActiveIndex(Math.max(0, Math.min(testimonials.length - 1, index)));
        }
      });
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (draggableRef.current[0]) {
        draggableRef.current[0].kill();
      }
    };
  }, []);

  const handlePrev = () => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
    const cardWidth = track.children[0] ? (track.children[0] as HTMLElement).offsetWidth + 32 : 400;
    const targetX = Math.min(0, -newIndex * cardWidth);
    gsap.to(track, { x: targetX, duration: 0.8, ease: "power3.out" });
    if (draggableRef.current[0]) {
      draggableRef.current[0].update();
    }
  };

  const handleNext = () => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;
    const newIndex = Math.min(testimonials.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    const cardWidth = track.children[0] ? (track.children[0] as HTMLElement).offsetWidth + 32 : 400;
    const trackWidth = track.scrollWidth;
    const wrapperWidth = wrapper.clientWidth;
    const maxX = wrapperWidth - trackWidth;
    const targetX = Math.max(maxX, -newIndex * cardWidth);
    gsap.to(track, { x: targetX, duration: 0.8, ease: "power3.out" });
    if (draggableRef.current[0]) {
      draggableRef.current[0].update();
    }
  };

  return (
    <section ref={containerRef} className="py-32 border-t border-[#472f5b]/10 overflow-hidden bg-[#fffff0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[#866428] text-[10px] uppercase tracking-[0.3em] mb-6 block font-medium">Casos Reais</span>
            <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-[#472f5b]">
              Empresários que voltaram a <br/><span className="italic text-[#866428]">dormir tranquilos.</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#472f5b]/60">
              <Hand className="w-4 h-4 animate-pulse text-[#866428]" />
              <span>Arraste para explorar</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="w-12 h-12 rounded-full border border-[#472f5b]/20 flex items-center justify-center text-[#472f5b] hover:bg-[#472f5b] hover:text-[#fffff0] hover:border-[#472f5b] transition-all duration-300 disabled:opacity-30"
                disabled={activeIndex === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="w-12 h-12 rounded-full border border-[#472f5b]/20 flex items-center justify-center text-[#472f5b] hover:bg-[#472f5b] hover:text-[#fffff0] hover:border-[#472f5b] transition-all duration-300 disabled:opacity-30"
                disabled={activeIndex === testimonials.length - 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Draggable Carousel Track Container */}
        <div ref={wrapperRef} className="overflow-hidden cursor-grab active:cursor-grabbing pb-8 -mx-6 px-6">
          <div ref={trackRef} className="flex gap-8 select-none touch-pan-y">
            {testimonials.map((item, idx) => (
              <div 
                key={idx} 
                className={`testimonial-card shrink-0 w-[360px] md:w-[420px] bg-[#FFFFFF] border p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] relative group transition-all duration-500 ${activeIndex === idx ? 'border-[#866428] shadow-xl scale-[1.02]' : 'border-[#472f5b]/10 hover:border-[#866428]/40'}`}
              >
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-[#866428]/10 text-[#866428] px-3.5 py-1.5 rounded-full mb-8">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-[9px] uppercase tracking-widest font-semibold">{item.highlight}</span>
                </div>

                <Quote className="w-10 h-10 text-[#866428]/20 absolute top-10 right-10" />

                <p className="text-sm md:text-base text-[#2a3a1e] font-light leading-[1.8] tracking-wide mb-10 min-h-[120px]">
                  "{item.text}"
                </p>
                
                <div className="flex flex-col gap-1.5 pt-6 border-t border-[#472f5b]/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-base font-serif text-[#472f5b]">{item.author}</span>
                    <div className="flex gap-1 shrink-0">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#D8B36B] fill-[#D8B36B]" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#866428] font-medium">{item.role}</span>
                  <span className="text-xs font-light text-[#2a3a1e]/80">{item.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Pagination Bar */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                const track = trackRef.current;
                const wrapper = wrapperRef.current;
                if (!track || !wrapper) return;
                const cardWidth = track.children[0] ? (track.children[0] as HTMLElement).offsetWidth + 32 : 400;
                const trackWidth = track.scrollWidth;
                const wrapperWidth = wrapper.clientWidth;
                const maxX = wrapperWidth - trackWidth;
                const targetX = Math.max(maxX, Math.min(0, -idx * cardWidth));
                gsap.to(track, { x: targetX, duration: 0.8, ease: "power3.out" });
                if (draggableRef.current[0]) {
                  draggableRef.current[0].update();
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-12 bg-[#866428]' : 'w-3 bg-[#472f5b]/20 hover:bg-[#472f5b]/40'}`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>

        {showPricing && (
          <div className="mt-20 flex justify-center">
            <div className="inline-block bg-[#866428] text-[#fffff0] px-10 py-5 shadow-xl">
              <span className="text-sm tracking-widest uppercase font-light">
                Planos a partir de <strong className="font-semibold">R$ 990,00</strong> / mês
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
