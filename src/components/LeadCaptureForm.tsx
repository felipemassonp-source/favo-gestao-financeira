import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronLeft, ShieldCheck, Lock, FileText } from "lucide-react";
import { cn } from "../lib/utils";

type FormType = "bpo" | "consultoria";

interface LeadCaptureFormProps {
  type: FormType;
}

export default function LeadCaptureForm({ type }: LeadCaptureFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    empresa: "",
    dorPrincipal: "",
    volumeOuControle: "",
  });

  const handleNext = () => setStep(2);
  const handlePrev = () => setStep(1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phone = "5551999999999";
    let text = `Olá! Vim pelo site e tenho interesse na *${type === "bpo" ? "Gestão Financeira (BPO)" : "Consultoria Financeira"}*.\n\n`;
    text += `*Meus Dados:*\n`;
    text += `- Nome: ${formData.nome}\n`;
    text += `- Empresa: ${formData.empresa}\n`;
    text += `- E-mail: ${formData.email}\n\n`;
    
    if (type === "bpo") {
      text += `*Meu Cenário:*\n`;
      text += `- Dificuldade: ${formData.dorPrincipal}\n`;
      text += `- Volume mensal: ${formData.volumeOuControle}\n`;
    } else {
      text += `*Meu Cenário:*\n`;
      text += `- Objetivo: ${formData.dorPrincipal}\n`;
      text += `- Faturamento: ${formData.volumeOuControle}\n`;
    }
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
    setStep(3);
  };

  const bpoQuestions = {
    q1: {
      label: "Qual a sua maior dificuldade com o financeiro hoje?",
      options: [
        "Falta de tempo para a rotina diária",
        "Mistura de contas Pessoais e da Empresa",
        "Alto índice de Inadimplência",
        "Não consigo visualizar meu lucro",
      ],
      field: "dorPrincipal"
    },
    q2: {
      label: "Qual o volume médio de movimentações mensais?",
      options: [
        "Até 50 movimentações",
        "De 51 a 150 movimentações",
        "Mais de 150 movimentações",
        "Ainda não sei estimar",
      ],
      field: "volumeOuControle"
    }
  };

  const consultoriaQuestions = {
    q1: {
      label: "Qual o seu principal objetivo com a consultoria?",
      options: [
        "Organizar as finanças do zero",
        "Melhorar minha precificação",
        "Planejar o crescimento da empresa",
        "Socorro financeiro (Sair do vermelho)",
      ],
      field: "dorPrincipal"
    },
    q2: {
      label: "Qual o seu faturamento médio mensal?",
      options: [
        "Até R$ 20.000",
        "De R$ 20.000 a R$ 50.000",
        "De R$ 50.000 a R$ 100.000",
        "Acima de R$ 100.000",
      ],
      field: "volumeOuControle"
    }
  };

  const getClassification = () => {
    if (type !== "consultoria") return null;

    const dor = formData.dorPrincipal;
    const faturamento = formData.volumeOuControle;

    if (faturamento === "Até R$ 20.000" || dor === "Socorro financeiro (Sair do vermelho)") {
      return {
        tag: "Perfil: Estruturação Essencial",
        desc: "Seu foco inicial deve ser organizar a casa, separar contas e criar controles básicos para garantir que a operação respire com saúde."
      };
    }
    
    if (faturamento === "Acima de R$ 100.000" || (faturamento === "De R$ 50.000 a R$ 100.000" && dor === "Planejar o crescimento da empresa")) {
      return {
        tag: "Perfil: Gestão Estratégica",
        desc: "Sua empresa já possui tração. O trabalho agora será em blindar o caixa, otimizar margens de lucro e projetar cenários para expansão segura."
      };
    }

    return {
      tag: "Perfil: Alavancagem",
      desc: "Você tem um cenário promissor. Nosso foco será ajustar sua precificação, mapear custos invisíveis e fazer você ver a cor do dinheiro que produz."
    };
  };

  const questions = type === "bpo" ? bpoQuestions : consultoriaQuestions;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto bg-[#FFFFFF] border border-[#472f5b]/10 shadow-2xl relative overflow-hidden" id="formulario">
        <div className="flex flex-col md:flex-row h-full">
        
        {/* Left Side - Context */}
        <div className="w-full md:w-5/12 bg-[#472f5b] p-10 md:p-12 flex flex-col justify-between text-[#fffff0] relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[#866428] text-[10px] uppercase tracking-[0.3em] mb-6 block">
              Passo {step} de 2
            </span>
            <h3 className="text-3xl font-serif font-light leading-tight mb-4">
              {step === 1 ? "Vamos iniciar o seu diagnóstico." : step === 2 ? "Entendendo o seu cenário." : "Tudo certo!"}
            </h3>
            <p className="text-sm font-normal text-[#fffff0] leading-relaxed tracking-wide">
              {type === "bpo" 
                ? "Queremos entender exatamente como a Favo pode assumir sua rotina financeira e devolver o seu tempo."
                : "Para desenharmos o melhor plano de ação, precisamos entender o momento atual da sua empresa."}
            </p>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 border border-[#D8B36B]/20 rounded-full opacity-50"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-[#D8B36B]/20 rounded-full opacity-50"></div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-7/12 p-10 md:p-12 bg-[#FFFFFF]">
          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-light text-[#472f5b]">Nome Completo</label>
                  <input 
                    required
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full bg-transparent border-b border-[#472f5b]/20 py-3 text-sm text-[#472f5b] placeholder:text-[#472f5b]/60 focus:outline-none focus:border-[#D8B36B] transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-light text-[#472f5b]">WhatsApp</label>
                  <input 
                    required
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full bg-transparent border-b border-[#472f5b]/20 py-3 text-sm text-[#472f5b] placeholder:text-[#472f5b]/60 focus:outline-none focus:border-[#D8B36B] transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-light text-[#472f5b]">E-mail Profissional</label>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-[#472f5b]/20 py-3 text-sm text-[#472f5b] placeholder:text-[#472f5b]/60 focus:outline-none focus:border-[#D8B36B] transition-colors"
                  placeholder="seu@email.com.br"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-light text-[#472f5b]">Nome da Empresa</label>
                <input 
                  required
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  className="w-full bg-transparent border-b border-[#472f5b]/20 py-3 text-sm text-[#472f5b] placeholder:text-[#472f5b]/60 focus:outline-none focus:border-[#D8B36B] transition-colors"
                  placeholder="Sua marca"
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-4 bg-[#472f5b] text-[#fffff0] py-4 text-xs uppercase tracking-[0.2em] font-light hover:bg-[#2a3a1e] transition-colors"
                >
                  Próximo Passo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              
              {/* Question 1 */}
              <div className="space-y-4">
                <label className="text-sm font-serif tracking-wide text-[#472f5b] block">
                  1. {questions.q1.label}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {questions.q1.options.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({...formData, dorPrincipal: opt})}
                      className={cn(
                        "text-left p-4 text-xs font-normal tracking-wide border transition-all duration-300",
                        formData.dorPrincipal === opt 
                          ? "border-[#D8B36B] bg-[#D8B36B]/5 text-[#472f5b]" 
                          : "border-[#472f5b]/10 text-[#2a3a1e] hover:border-[#472f5b]/30"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div className="space-y-4">
                <label className="text-sm font-serif tracking-wide text-[#472f5b] block">
                  2. {questions.q2.label}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {questions.q2.options.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({...formData, volumeOuControle: opt})}
                      className={cn(
                        "text-left p-4 text-xs font-normal tracking-wide border transition-all duration-300",
                        formData.volumeOuControle === opt 
                          ? "border-[#D8B36B] bg-[#D8B36B]/5 text-[#472f5b]" 
                          : "border-[#472f5b]/10 text-[#2a3a1e] hover:border-[#472f5b]/30"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <button 
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-4 border border-[#472f5b]/20 text-[#472f5b] hover:bg-[#472f5b]/5 transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  type="submit"
                  disabled={!formData.dorPrincipal || !formData.volumeOuControle}
                  className="flex-1 flex items-center justify-center gap-4 bg-[#D8B36B] text-[#472f5b] py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#c2a160] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Enviar Avaliação
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500 py-10">
              <div className="w-20 h-20 bg-[#D8B36B]/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-[#866428]" />
              </div>
              <h4 className="text-3xl font-serif font-light text-[#472f5b]">Análise Recebida!</h4>
              
              {type === "consultoria" && getClassification() && (
                <div className="bg-[#472f5b]/5 border border-[#472f5b]/10 p-6 w-full max-w-md my-4">
                   <span className="text-[#866428] text-[10px] uppercase tracking-[0.2em] font-medium block mb-3">
                     Diagnóstico Preliminar
                   </span>
                   <h5 className="text-lg font-serif text-[#472f5b] mb-2 uppercase tracking-widest">{getClassification()?.tag}</h5>
                   <p className="text-xs font-normal text-[#2a3a1e] leading-relaxed">
                     {getClassification()?.desc}
                   </p>
                </div>
              )}

              <p className="text-sm font-normal text-[#2a3a1e] tracking-wide leading-relaxed max-w-sm">
                Nossa equipe especialista analisará seu perfil em detalhes e entrará em contato via WhatsApp em breve.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
