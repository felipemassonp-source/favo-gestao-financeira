import { useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, Quote, TrendingUp, ChevronLeft, ChevronRight, Hand } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, Draggable);

const testimonials = [
  {
    author: "J. Librelon",
    role: "Proprietária",
    company: "Assessoria virtual",
    text: "Andry, eu quero te abraçar! Eu não tô acreditando que tô tirando essas férias. Já tô até programando a próxima com as crianças. A tranquilidade de saber que o negócio roda financeiramente sem mim não tem preço.",
    highlight: "Ganhou tempo e liberdade",
    stars: 5
  },
  {
    author: "Brunella Freitas",
    role: "CEO",
    company: "Agência de Videomaker",
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
    company: "Empresa confidencial",
    text: "O suporte de vocês tem sido fundamental, vocês não fazem ideia! O BPO tirou um peso enorme das minhas costas. Chega de pagar juros por esquecer vencimentos no meio da loucura das vendas.",
    highlight: "Zero Atrasos e Multas",
    stars: 5
  },
  {
    author: "Lads Queiroz",
    role: "Sócio",
    company: "Grupo VK Digital",
    text: "Eu estava desesperado. Há 3 anos que nós não conseguíamos ver os números da nossa empresa e pensar nas estratégias. Foram 3 financeiros diferentes até vocês chegarem. Os sócios e eu estamos muito felizes com o que estamos construindo e tudo que você e as meninas estão trazendo de melhorias pra nós. Finalmente conseguimos analisar nossos números. Muito obrigado.",
    highlight: "Clareza nos Números",
    stars: 5
  },
  {
    author: "Sarah Mota",
    role: "Fundadora",
    company: "The Good Company",
    text: "Tem sido incrível trabalhar com a Favo! Pela primeira vez tô tendo uma visão muito cirúrgica do nosso financeiro, gastos e previsões. Todo o processo a Andry conduziu explicando cada passo e eu confio totalmente no trabalho da Favo. É ótimo dormir sabendo quanto tem no banco e qual o tamanho da nossa reserva, ou planos de ação. É muito bom poder contar com alguém para trocar ideias sobre decisões estratégicas.",
    highlight: "Visão Cirúrgica & Reserva",
    stars: 5
  },
  {
    author: "Cássio",
    role: "Fundador",
    company: "Saúde Diária",
    text: "Meninas, eu estava fazendo o lançamento do financeiro paralelo, em planilha aqui, enquanto estamos nessa transição, por medo de dar algum desencontro, ou eu ter esquecido de passar alguma coisa pra vocês, mas acabei de perceber que está tudo perfeito. Ficou muito claro, e eu também estou surpreso por ter sido tão rápido. Vocês estão de parabéns pela entrega. Estou muito feliz.",
    highlight: "Transição Ágil e Perfeita",
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
    <section ref={containerRef} className="py-32 border-t border-[#38183A]/15 overflow-hidden bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[#38183A] text-[10px] uppercase tracking-[0.3em] mb-4 block font-semibold bg-[#38183A]/10 px-3.5 py-1 rounded-full border border-[#38183A]/20 w-fit">Casos Reais</span>
            <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-[#1F242D] mt-2">
              Empresários que voltaram a <br className="hidden sm:block" /><span className="italic text-[#38183A] font-medium">dormir tranquilos.</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#4B5262]">
              <Hand className="w-4 h-4 animate-pulse text-[#38183A]" />
              <span>Arraste para explorar</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="w-12 h-12 rounded-full border border-[#38183A]/20 flex items-center justify-center text-[#38183A] hover:bg-[#38183A] hover:text-[#FFFFF0] hover:border-[#38183A] transition-all duration-300 disabled:opacity-30"
                disabled={activeIndex === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="w-12 h-12 rounded-full border border-[#38183A]/20 flex items-center justify-center text-[#38183A] hover:bg-[#38183A] hover:text-[#FFFFF0] hover:border-[#38183A] transition-all duration-300 disabled:opacity-30"
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
                className={`testimonial-card shrink-0 w-[84vw] max-w-[340px] sm:w-[360px] sm:max-w-none md:w-[420px] bg-[#FFFFFF] rounded-3xl border p-6 sm:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.06)] relative group transition-all duration-500 ${activeIndex === idx ? 'border-[#38183A] shadow-xl scale-[1.02]' : 'border-[#38183A]/15 hover:border-[#38183A]/40'}`}
              >
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-[#38183A]/10 text-[#38183A] border border-[#38183A]/20 px-3.5 py-1.5 rounded-full mb-8">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-[9px] uppercase tracking-widest font-semibold">{item.highlight}</span>
                </div>

                <Quote className="w-10 h-10 text-[#38183A]/15 absolute top-10 right-10" />

                <p className="text-sm md:text-base text-[#4B5262] font-normal leading-[1.8] tracking-wide mb-10 min-h-[120px]">
                  "{item.text}"
                </p>
                
                <div className="flex flex-col gap-1.5 pt-6 border-t border-[#38183A]/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-base font-serif font-medium text-[#1F242D]">{item.author}</span>
                    <div className="flex gap-1 shrink-0">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#D97706] fill-[#D97706]" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#38183A] font-semibold">{item.role}</span>
                  <span className="text-xs font-normal text-[#4B5262]">{item.company}</span>
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
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-8 bg-[#38183A]" : "w-2 bg-[#38183A]/20 hover:bg-[#38183A]/40"
              }`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
