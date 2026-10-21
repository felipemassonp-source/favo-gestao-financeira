import React, { useState } from 'react';
import { Calculator, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WasteCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(150);

  const hoursPerMonth = hoursPerWeek * 4;
  const wastedMoney = hoursPerMonth * hourlyRate;

  return (
    <section className="py-24 bg-[#fffff0] relative border-y border-[#472f5b]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-5 h-5 text-[#866428]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#866428]">
              Calculadora de Desperdício
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#472f5b] mb-6">
            Quanto custa fazer o <span className="italic text-[#866428]">financeiro sozinho?</span>
          </h2>
          <p className="text-sm font-normal text-[#2a3a1e] tracking-wide leading-relaxed">
            Muitos empresários acham que estão economizando ao não terceirizar o financeiro. 
            Use a calculadora abaixo e descubra quanto o seu negócio realmente perde enquanto você paga boletos.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center bg-[#FFFFFF] p-8 md:p-12 border border-[#472f5b]/10 shadow-sm relative z-10">
          
          {/* Controles */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-xs uppercase tracking-widest font-medium text-[#472f5b]">
                  Horas gastas por semana
                </label>
                <span className="text-2xl font-serif text-[#866428]">{hoursPerWeek}h</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-1 bg-[#472f5b]/10 rounded-lg appearance-none cursor-pointer accent-[#866428]"
              />
              <p className="text-xs text-[#2a3a1e] font-light">Tempo gasto com planilhas, conciliação e bancos.</p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-xs uppercase tracking-widest font-medium text-[#472f5b]">
                  Valor da sua hora (R$)
                </label>
                <span className="text-2xl font-serif text-[#866428]">R$ {hourlyRate}</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="500" 
                step="10"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-1 bg-[#472f5b]/10 rounded-lg appearance-none cursor-pointer accent-[#866428]"
              />
              <p className="text-xs text-[#2a3a1e] font-light">O quanto você ganharia se estivesse vendendo ou focado no negócio.</p>
            </div>
          </div>

          {/* Resultado */}
          <div className="w-full lg:w-1/2 bg-[#472f5b] text-[#fffff0] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#866428]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h3 className="text-sm uppercase tracking-widest font-light mb-8 text-[#866428]">Seu Prejuízo Invisível</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#866428]/20 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-[#866428]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-light text-[#fffff0]/70 mb-1">Tempo Perdido por Mês</p>
                  <p className="text-4xl font-serif">{hoursPerMonth} horas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#866428]/20 flex items-center justify-center shrink-0 mt-1">
                  <DollarSign className="w-5 h-5 text-[#866428]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-light text-[#fffff0]/70 mb-1">Dinheiro deixado na mesa</p>
                  <p className="text-4xl font-serif text-[#866428]">R$ {wastedMoney.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#fffff0]/10 relative z-10">
              <p className="text-xs font-light tracking-wide leading-relaxed mb-6 text-[#fffff0]/80">
                A Favo custa uma fração desse valor. Ao terceirizar, você não apenas economiza, mas compra de volta o seu tempo para faturar mais.
              </p>
              <Link 
                to="/bpo" 
                className="inline-flex items-center justify-center gap-3 bg-[#866428] text-[#fffff0] px-6 py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#6b4f1f] transition-colors w-full sm:w-auto"
              >
                Parar de Perder Dinheiro <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
