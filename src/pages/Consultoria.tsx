import FadeInUp from "../components/FadeInUp";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import ConsultingTimeline from "../components/ConsultingTimeline";
import CaseStudy from "../components/CaseStudy";
import LeadCaptureForm from "../components/LeadCaptureForm";
import TrustBadges from "../components/TrustBadges";
import MagneticButton from "../components/MagneticButton";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Consultoria() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const isInitialLoad = !sessionStorage.getItem('favo_visited');
  const initialDelay = isInitialLoad ? 2.4 : 0.2;

  useGSAP(() => {
    // Split Text animation for title
    if (titleRef.current) {
      const text = new SplitType(titleRef.current, { types: 'lines,words,chars' });
      
      text.lines?.forEach((line) => {
        const wrapper = document.createElement('div');
        wrapper.style.overflow = 'hidden';
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.fromTo(".subtitle", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: initialDelay + 1.0 }
      );

      gsap.from(text.chars, {
        opacity: 0,
        y: "100%",
        rotationZ: 2,
        stagger: 0.02,
        duration: 1.4,
        ease: "power4.out",
        delay: initialDelay
      });
    }

    // High-end section title animations
    const sectionTitles = gsap.utils.toArray('.section-title');
    sectionTitles.forEach((title: any) => {
      const splitTitle = new SplitType(title, { types: 'lines,words' });
      
      splitTitle.lines?.forEach((line) => {
        const wrapper = document.createElement('div');
        wrapper.style.overflow = 'hidden';
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.from(splitTitle.words, {
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
        },
        y: "100%",
        opacity: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out"
      });
    });

  }, { scope: container });

  return (
    <div ref={container} className="w-full min-h-screen pt-40 pb-20 bg-[#fffff0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-serif font-light tracking-widest mb-12 uppercase text-[#472f5b]">
          Consultoria<br/> <span className="text-[#b2893d] italic lowercase">Descomplicada</span>
        </h1>
        <p className="subtitle text-sm md:text-base font-light text-[#2a3a1e] max-w-2xl leading-relaxed mb-32 opacity-0 tracking-wide">
          Nossa Consultoria irá te guiar a encontrar os gargalos do seu financeiro, e trazer ferramentas que possam te auxiliar na construção de um negócio sólido.
        </p>

        {/* Timeline Journey Section */}
        <div className="py-20 border-t border-[#472f5b]/10">
          <FadeInUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.3em] mb-6 block">Como Funciona</span>
              <h2 className="section-title text-4xl md:text-5xl font-serif font-light uppercase tracking-widest text-[#472f5b]">
                Jornada de<br/><span className="italic lowercase text-[#b2893d]">6 Semanas</span>
              </h2>
            </div>
            <p className="text-[#2a3a1e] text-sm font-normal leading-relaxed tracking-wide max-w-sm">
              Um método robusto disfarçado de simplicidade. Acompanhamos o seu negócio ao longo de 6 semanas para destravar os gargalos e implementar melhorias definitivas.
            </p>
          </div>
          <ConsultingTimeline />
          </FadeInUp>
        </div>

        {/* Case Study Section */}
        <FadeInUp>
          <CaseStudy />
        </FadeInUp>

        {/* Practical Details Section */}
        <div className="py-32 border-t border-[#472f5b]/10 mt-16">
          <FadeInUp>
          <div className="flex items-center gap-4 mb-12">
            <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Na prática</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <span className="text-3xl font-serif font-light text-[#b2893d] mb-4 block">04</span>
              <h3 className="text-sm font-serif uppercase tracking-widest font-light text-[#472f5b] mb-4">
                Encontros ao vivo
              </h3>
              <p className="text-xs font-normal text-[#2a3a1e] leading-relaxed tracking-wide">
                Encontros online ao vivo e exclusivos para o seu negócio, com duração de até 1h30min cada.
              </p>
            </div>
            
            <div>
              <span className="text-3xl font-serif font-light text-[#b2893d] mb-4 block">REC</span>
              <h3 className="text-sm font-serif uppercase tracking-widest font-light text-[#472f5b] mb-4">
                Gravações
              </h3>
              <p className="text-xs font-normal text-[#2a3a1e] leading-relaxed tracking-wide">
                Nossos encontros serão gravados e disponibilizados para você rever quando e onde quiser.
              </p>
            </div>

            <div>
              <span className="text-3xl font-serif font-light text-[#b2893d] mb-4 block">06</span>
              <h3 className="text-sm font-serif uppercase tracking-widest font-light text-[#472f5b] mb-4">
                Semanas
              </h3>
              <p className="text-xs font-normal text-[#2a3a1e] leading-relaxed tracking-wide">
                Duração total de 6 semanas de consultoria lado a lado com você.
              </p>
            </div>

            <div>
              <span className="text-3xl font-serif font-light text-[#b2893d] mb-4 block">90</span>
              <h3 className="text-sm font-serif uppercase tracking-widest font-light text-[#472f5b] mb-4">
                Dias de Suporte
              </h3>
              <p className="text-xs font-normal text-[#2a3a1e] leading-relaxed tracking-wide">
                Suporte durante 90 dias via WhatsApp para tirar dúvidas e destravar processos.
              </p>
            </div>
          </div>
        </FadeInUp>
        </div>

        {/* CTA */}
        <div className="py-24 border-t border-[#472f5b]/10">
          <FadeInUp>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="section-title text-4xl font-serif font-light uppercase tracking-widest text-[#472f5b] mb-6">
              Vamos arrumar<br/><span className="italic lowercase text-[#b2893d]">a casa?</span>
            </h2>
            <p className="text-[#2a3a1e] text-sm font-normal max-w-md tracking-wide">
              Deixe-nos entender seu cenário e criar um plano de ação robusto.
            </p>
          </div>
          <LeadCaptureForm type="consultoria" />
          <TrustBadges />
          </FadeInUp>
        </div>

      </div>
    </div>
  );
}
