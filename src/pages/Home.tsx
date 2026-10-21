import FadeInUp from "../components/FadeInUp";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { Calculator, CheckCircle2, TrendingUp, ShieldCheck, Target, PieChart, Lightbulb, Map } from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import FounderLetter from "../components/FounderLetter";
import WasteCalculator from "../components/WasteCalculator";
import TrustIndicators from "../components/TrustIndicators";
import ComparisonGrid from "../components/ComparisonGrid";
import BeforeAfterReveal from "../components/BeforeAfterReveal";
import OrganicJourney from "../components/OrganicJourney";
import MagneticButton from "../components/MagneticButton";

gsap.registerPlugin(ScrollTrigger, Observer);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const observerSectionRef = useRef<HTMLDivElement>(null);
  
  const isInitialLoad = !sessionStorage.getItem('favo_visited');
  const initialDelay = isInitialLoad ? 2.4 : 0.2;
  
  useGSAP(() => {
    // 1. Split Text Animation for Hero (replaces GSAP SplitText)
    if (heroTextRef.current) {
      const text = new SplitType(heroTextRef.current, { types: 'lines,words,chars' });
      
      // Wrap lines in overflow hidden for a masking effect
      text.lines?.forEach((line) => {
        const wrapper = document.createElement('div');
        wrapper.style.overflow = 'hidden';
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.from(text.chars, {
        y: "100%",
        opacity: 0,
        rotationZ: 3,
        stagger: 0.02,
        duration: 1.4,
        ease: "power4.out",
        delay: initialDelay,
      });

      gsap.from(".hero-sub", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power3.out",
        delay: initialDelay + 1.0,
      });
      
      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        delay: initialDelay + 1.3,
        ease: "power3.out"
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

    // 2. ScrollTrigger for services section cards
    const serviceCards = gsap.utils.toArray('.service-card');
    serviceCards.forEach((card: any, i) => {
      const title = card.querySelector('.service-title');
      let splitChars: HTMLElement[] = [];
      
      if (title) {
        const splitTitle = new SplitType(title, { types: 'chars' });
        splitChars = splitTitle.chars || [];
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: i * 0.1
      });

      tl.from(card, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      if (splitChars.length > 0) {
        tl.from(splitChars, {
          opacity: 0,
          y: 20,
          stagger: 0.04,
          duration: 0.8,
          ease: "power4.out"
        }, "-=0.8");
      }
    });

    // 3. Scroll-Driven Interactive Data Section (Pain Points)
    if (observerSectionRef.current) {
      const sectionElement = observerSectionRef.current;
      const panels = gsap.utils.toArray('.data-panel', sectionElement) as HTMLElement[];
      
      // Ensure correct z-index stacking so newer panels slide OVER older ones
      gsap.set(panels, { zIndex: (i) => i });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement,
          start: "top top",
          end: "+=200%", // Scroll distance equivalent to 2 screen heights
          pin: true,
          scrub: 1,
          pinSpacing: true, // Ensure it pushes the rest of the content down
        }
      });

      panels.forEach((panel, i) => {
        if (i === 0) return; // Skip first panel, it stays in place
        
        // Start panel pushed down
        gsap.set(panel, { yPercent: 100 });
        
        // Animate up to 0%
        tl.to(panel, {
          yPercent: 0,
          ease: "none",
          duration: 1
        });
      });
    }

  }, { scope: container });

  return (
    <div ref={container} className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFFFFF] via-[#fffff0] to-[#fffff0] -z-10"></div>
        
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Gestão para Prestadores de Serviço</span>
        </div>

        <h1 
          ref={heroTextRef} 
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.85] max-w-5xl font-serif relative z-10 uppercase"
          style={{ perspective: "1000px" }}
        >
          <span className="block opacity-100">Finanças</span>
          <span className="block text-[#b2893d] italic lowercase font-serif mt-2 mb-2">descomplicadas</span>
          <span className="block">e Lucrativas.</span>
        </h1>
        <p className="hero-sub mt-12 text-sm md:text-base text-[#2a3a1e] max-w-xl leading-relaxed relative z-10 font-light tracking-wide">
          Trabalhe com tranquilidade enquanto cuidamos dos números. Traduzo a gestão financeira da sua empresa de forma simples, amigável e focada no seu crescimento, para você ter paz de espírito.
        </p>
        <div className="hero-cta mt-16 flex gap-4 relative z-10">
          <MagneticButton>
            <Link to="/consultoria" className="border border-[#472f5b]/20 px-10 py-4 text-[10px] uppercase tracking-[0.2em] hover:border-[#D8B36B] hover:text-[#b2893d] transition-colors font-light rounded-full backdrop-blur-sm">
              Agendar Diagnóstico
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* Interactive Scroll Data Section - Pain Points */}
      <section ref={observerSectionRef} className="h-screen w-full relative flex items-center justify-center bg-[#fffff0] border-t border-[#472f5b]/10">
        <div className="absolute top-12 text-center w-full z-10 text-[#2a3a1e]/70 uppercase tracking-[0.3em] text-[10px] font-medium">
          Continue rolando para descobrir
        </div>
        
        <div className="relative w-full max-w-5xl h-[60vh] mx-auto overflow-hidden">
          {/* Panel 1 */}
          <div className="data-panel absolute inset-0 bg-[#FFFFFF] p-16 border border-[#472f5b]/10 flex flex-col justify-center shadow-xl">
            <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.3em] mb-4">Problema 01</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 uppercase tracking-widest text-[#472f5b]">Falta de Tempo</h2>
            <p className="text-sm text-[#2a3a1e] font-light leading-relaxed max-w-lg tracking-wide">Você passa o dia inteiro atendendo clientes e não tem tempo (nem energia) para olhar as contas. Nós assumimos a rotina financeira para que você foque no que faz de melhor.</p>
          </div>
          {/* Panel 2 */}
          <div className="data-panel absolute inset-0 bg-[#FFFFFF] p-16 border border-[#472f5b]/10 flex flex-col justify-center shadow-xl">
            <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.3em] mb-4">Problema 02</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 uppercase tracking-widest text-[#472f5b]">Mistura de Contas</h2>
            <p className="text-sm text-[#2a3a1e] font-light leading-relaxed max-w-lg tracking-wide">Paga a escola do filho com a conta da empresa e compra material com o cartão pessoal? Organizamos tudo para você finalmente ter clareza sobre o seu pró-labore e o lucro real do negócio.</p>
          </div>
          {/* Panel 3 */}
          <div className="data-panel absolute inset-0 bg-[#FFFFFF] p-16 border border-[#472f5b]/10 flex flex-col justify-center shadow-xl">
            <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.3em] mb-4">Problema 03</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 uppercase tracking-widest text-[#472f5b]">Medo dos Números</h2>
            <p className="text-sm text-[#2a3a1e] font-light leading-relaxed max-w-lg tracking-wide">Planilhas complexas e termos difíceis te assustam? Sem problemas. Traduzo seus resultados de forma simples, amigável e didática, para você ter segurança em cada decisão.</p>
          </div>
        </div>
      </section>

      {/* About Andryelle Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto border-t border-[#472f5b]/10 flex flex-col md:flex-row gap-16 items-center">
        <FadeInUp className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Quem sou eu</span>
          </div>
          <h3 className="section-title text-5xl md:text-6xl font-serif font-light tracking-widest uppercase mb-8">
            Andryelle<br/><span className="italic lowercase text-[#b2893d]">Niederauer</span>
          </h3>
          <div className="space-y-6 text-[#2a3a1e] font-light text-sm tracking-wide leading-relaxed max-w-lg">
            <p>
              Olá! Tudo bem? Sou a Andryelle Niederauer e trago uma bagagem sólida do mundo das finanças há mais de 15 anos. Com formação técnica em administração, experiência como gestora de projetos e atualmente graduanda em Gestão Financeira, sou apaixonada pelo mundo dos números.
            </p>
            <p>
              Depois de uma jornada que inclui experiências em regime CLT e empreendedorismo em diferentes áreas, decidi direcionar minha paixão e conhecimento para ajudar mulheres empreendedoras a crescerem seus negócios de forma saudável e sustentável.
            </p>
            <p>
              Acredito no poder das finanças bem geridas como pilar fundamental para o sucesso de qualquer empreendimento. Minha missão é não apenas oferecer serviços financeiros, mas também fornecer orientação e suporte personalizado para que cada mulher possa alcançar seus objetivos empresariais com confiança e segurança.
            </p>
          </div>
        </FadeInUp>
        <FadeInUp className="flex-1 w-full relative" delay={0.2} parallax={true} parallaxSpeed={0.05}>
           <div className="aspect-[4/5] bg-[#FFFFFF] border border-[#472f5b]/10 p-4 shadow-xl relative z-10">
             <div className="w-full h-full bg-[#fffff0] flex items-center justify-center overflow-hidden">
               <div className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-1000 ease-out">
                 <span className="font-serif italic text-3xl text-[#b2893d]">A.N.</span>
               </div>
             </div>
           </div>
           <div className="absolute top-8 -right-8 w-full h-full border border-[#D8B36B] -z-10"></div>
        </FadeInUp>
      </section>

      {/* Trust Indicators Section */}
      <FadeInUp parallax={true} parallaxSpeed={0.02}>
      <TrustIndicators />
      </FadeInUp>

      {/* Comparison Grid Section */}
      <FadeInUp parallax={true} parallaxSpeed={0.03}>
      <OrganicJourney />

      <BeforeAfterReveal />

      <ComparisonGrid />
      </FadeInUp>

      {/* Services Section with ScrollTrigger */}
      <section className="py-40 px-6 max-w-7xl mx-auto border-t border-[#472f5b]/10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Nossa Expertise</span>
            </div>
            <h3 className="section-title text-5xl md:text-7xl font-serif font-light tracking-widest uppercase">Como Posso<br/><span className="italic lowercase text-[#b2893d]">Ajudar</span></h3>
          </div>
          <p className="text-[#2a3a1e] font-light text-sm max-w-xs tracking-wide leading-relaxed">
            Soluções desenhadas para tirar o peso das suas costas e trazer organização real para o seu dia a dia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#472f5b]/10 border border-[#472f5b]/10">
          <div className="service-card p-16 bg-[#FFFFFF] hover:bg-[#FDFCFB] transition-colors group relative">
            <div className="flex justify-between items-start mb-8">
              <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.2em] block">/ Terceirização</span>
              <Calculator strokeWidth={1} className="w-6 h-6 text-[#b2893d] opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-500 ease-out" />
            </div>
            <h4 className="service-title text-2xl font-serif uppercase tracking-widest font-light mb-6 group-hover:text-[#b2893d] transition-colors text-[#472f5b]">BPO Financeiro</h4>
            <p className="text-xs text-[#2a3a1e] leading-relaxed font-light tracking-wide">
              Delegue a rotina. Cuidamos do seu contas a pagar, receber, fluxo de caixa e conciliação bancária, enquanto você foca no atendimento aos seus clientes.
            </p>
          </div>
          <div className="service-card p-16 bg-[#FFFFFF] hover:bg-[#FDFCFB] transition-colors group relative">
            <div className="flex justify-between items-start mb-8">
              <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.2em] block">/ Planejamento</span>
              <Map strokeWidth={1} className="w-6 h-6 text-[#b2893d] opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-500 ease-out" />
            </div>
            <h4 className="service-title text-2xl font-serif uppercase tracking-widest font-light mb-6 group-hover:text-[#b2893d] transition-colors text-[#472f5b]">Consultoria</h4>
            <p className="text-xs text-[#2a3a1e] leading-relaxed font-light tracking-wide">
              Mão na massa junto com você. Estruturamos metas, planejamos o seu crescimento e organizamos suas finanças de forma simples e muito didática.
            </p>
          </div>
          <div className="service-card p-16 bg-[#FFFFFF] hover:bg-[#FDFCFB] transition-colors group relative">
            <div className="flex justify-between items-start mb-8">
              <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.2em] block">/ Clareza</span>
              <PieChart strokeWidth={1} className="w-6 h-6 text-[#b2893d] opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-500 ease-out" />
            </div>
            <h4 className="service-title text-2xl font-serif uppercase tracking-widest font-light mb-6 group-hover:text-[#b2893d] transition-colors text-[#472f5b]">Diagnóstico</h4>
            <p className="text-xs text-[#2a3a1e] leading-relaxed font-light tracking-wide">
              Não sabe por onde começar? Fazemos um raio-x completo do seu cenário atual e entregamos um plano de ação claro, sem jargões complicados.
            </p>
          </div>
          <div className="service-card p-16 bg-[#FFFFFF] hover:bg-[#FDFCFB] transition-colors group relative">
            <div className="flex justify-between items-start mb-8">
              <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.2em] block">/ Crescimento</span>
              <Lightbulb strokeWidth={1} className="w-6 h-6 text-[#b2893d] opacity-70 group-hover:opacity-100 group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-500 ease-out" />
            </div>
            <h4 className="service-title text-2xl font-serif uppercase tracking-widest font-light mb-6 group-hover:text-[#b2893d] transition-colors text-[#472f5b]">Gestão Estratégica</h4>
            <p className="text-xs text-[#2a3a1e] leading-relaxed font-light tracking-wide">
              Análise dos seus resultados mês a mês. Mostramos onde estão os vazamentos de lucro e como melhorar seus preços de forma amigável e segura.
            </p>
          </div>
        </div>
      </section>

      <FounderLetter />

      {/* Interactive Calculator Section */}
      <FadeInUp parallax={true} parallaxSpeed={0.02}>
        <WasteCalculator />
      </FadeInUp>

      {/* Testimonials / Social Proof Section */}
      <FadeInUp parallax={true} parallaxSpeed={0.04}>
      <Testimonials />
      </FadeInUp>
    </div>
  );
}
