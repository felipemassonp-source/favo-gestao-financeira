import React from 'react';
import { Quote } from 'lucide-react';

export default function FounderLetter() {
  return (
    <section className="py-24 bg-[#fffff0] relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#472f5b]/5 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image side */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto md:ml-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-[#866428]/30 translate-x-4 translate-y-4"></div>
              {/* Image Placeholder - A profissional de finanças */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Andryelle - Especialista Financeira" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#472f5b] text-[#fffff0] p-6 shadow-xl z-20">
                <p className="text-[10px] uppercase tracking-widest font-light mb-1 text-[#D8B36B]">Fundadora</p>
                <p className="text-sm font-serif tracking-wide">Andryelle</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="w-full md:w-1/2">
            <Quote className="w-12 h-12 text-[#866428]/20 mb-8" />
            
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#472f5b] mb-8 leading-tight">
              "Já vi negócios incríveis estagnarem não por falta de clientes, mas por <span className="italic text-[#866428]">caos financeiro.</span>"
            </h2>
            
            <div className="space-y-6 text-sm font-normal text-[#2a3a1e] leading-relaxed tracking-wide max-w-lg">
              <p>
                A Favo não nasceu para ser apenas uma terceirização de planilhas. Nasceu porque acredito que você abriu sua empresa para ter liberdade e impacto, não para ser refém de conciliações bancárias na sexta-feira à noite.
              </p>
              <p>
                Quando o dono do negócio perde o controle dos números, ele perde a paz. Começa a misturar contas, precificar pelo "feeling" e trabalhar dobrado sem ver a cor do dinheiro no fim do mês.
              </p>
              <p>
                Nossa missão na Favo é assumir os bastidores. Nós organizamos a casa, trazemos clareza e previsibilidade, para que você possa voltar a focar naquilo que faz de melhor: <span className="font-medium text-[#472f5b]">fazer sua empresa crescer.</span>
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[#472f5b]/10">
              <p className="text-2xl font-serif font-light italic text-[#472f5b]">Andryelle</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-light text-[#866428] mt-2">CEO & Especialista Financeira</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
