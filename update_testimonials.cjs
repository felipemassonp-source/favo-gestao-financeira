const fs = require('fs');

let content = `import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, Quote, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    const cards = gsap.utils.toArray('.testimonial-card');
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 border-t border-[#472f5b]/10 overflow-hidden bg-[#fffff0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[#866428] text-[10px] uppercase tracking-[0.3em] mb-6 block font-medium">Casos Reais</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-[#472f5b]">
            Empresários que voltaram a <br/><span className="italic text-[#866428]">dormir tranquilos.</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card break-inside-avoid bg-[#FFFFFF] border border-[#472f5b]/10 p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative group hover:border-[#866428]/30 transition-colors duration-500">
              
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-[#866428]/10 text-[#866428] px-3 py-1.5 rounded-full mb-6">
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="text-[9px] uppercase tracking-widest font-semibold">{item.highlight}</span>
              </div>

              <Quote className="w-8 h-8 text-[#866428]/20 absolute top-8 right-8" />

              <p className="text-[13px] text-[#2a3a1e] font-light leading-[1.8] tracking-wide mb-8">
                "{item.text}"
              </p>
              
              <div className="flex flex-col gap-1 pt-6 border-t border-[#472f5b]/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-serif text-[#472f5b]">{item.author}</span>
                  <div className="flex gap-1 shrink-0">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-[#D8B36B] fill-[#D8B36B]" />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#866428]">{item.role}</span>
                <span className="text-xs font-light text-[#2a3a1e]">{item.company}</span>
              </div>
            </div>
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
`

fs.writeFileSync('./src/components/Testimonials.tsx', content, 'utf8');
