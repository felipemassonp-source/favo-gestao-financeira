import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronLeft, MessageCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import { cn } from "../lib/utils";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getStoredAdsAttribution } from "./SEO";
import type { LeadSubmissionSummary } from "../pages/Obrigado";

export type FormType = "bpo" | "assistencia" | "gestao" | "consultoria";

interface LeadCaptureFormProps {
  type: "bpo" | "consultoria";
  badge?: string;
  title?: string;
  subtitle?: string;
  whatsappUrl?: string;
}

const serviceLabels: Record<FormType, { name: string; formula: string; short: string }> = {
  bpo: { name: "BPO Financeiro", formula: "Processo Padrão", short: "BPO" },
  assistencia: { name: "Assistência Financeira Virtual", formula: "Padrão + Suporte", short: "Assistência" },
  gestao: { name: "Gestão Financeira", formula: "Padrão + Suporte + Análise", short: "Gestão Completa" },
  consultoria: { name: "Consultoria Financeira", formula: "Raio-X & 8 Semanas", short: "Consultoria" },
};

export default function LeadCaptureForm({ 
  type, 
  badge = type === "bpo" ? "Pronto para delegar?" : "Vamos arrumar a casa?",
  title = type === "bpo" ? "Recupere suas horas livres e tenha um financeiro impecável." : "Transforme seu faturamento em lucro real e previsível.",
  subtitle = type === "bpo" 
    ? "Preencha o formulário abaixo para iniciarmos seu diagnóstico ou, se preferir atendimento imediato, chame nosso time diretamente no WhatsApp."
    : "Preencha os dados abaixo para nossa equipe avaliar seu cenário ou agende uma conversa direta pelo WhatsApp.",
  whatsappUrl = type === "bpo"
    ? "https://api.whatsapp.com/send?phone=5548999725750&text=Olá,%20gostaria%20de%20um%20diagnóstico%20de%20BPO%20Financeiro%20para%20minha%20empresa."
    : "https://api.whatsapp.com/send?phone=5548999725750&text=Olá,%20gostaria%20de%20conversar%20sobre%20a%20Consultoria%20Estratégica%20da%20Favo."
}: LeadCaptureFormProps) {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<FormType>(
    type === "consultoria" ? "consultoria" : "assistencia"
  );
  const [step, setStep] = useState(1);
  const [customWhatsAppUrl, setCustomWhatsAppUrl] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentServiceInfo = serviceLabels[selectedService];

    try {
      const adsAttribution = getStoredAdsAttribution();
      await addDoc(collection(db, "leads"), {
        nome: formData.nome,
        whatsapp: formData.whatsapp,
        email: formData.email,
        empresa: formData.empresa,
        tipo: selectedService,
        plano: currentServiceInfo.name,
        formula: currentServiceInfo.formula,
        dorPrincipal: formData.dorPrincipal,
        volumeOuControle: formData.volumeOuControle,
        origem: adsAttribution.utm_source || "organico_direto",
        campanha: adsAttribution.utm_campaign || "",
        palavraChave: adsAttribution.utm_term || "",
        gclid: adsAttribution.gclid || "",
        paginaEntrada: adsAttribution.landingPage || window.location.pathname,
        status: "novo",
        createdAt: new Date().toISOString()
      });
    } catch (err) {
      console.error("Error saving lead to Firestore:", err);
    }

    const phone = "5548999725750";
    let text = `Olá! Vim pelo site da Favo e tenho interesse em: *${currentServiceInfo.name}* (${currentServiceInfo.formula}).\n\n`;
    text += `*Meus Dados:*\n`;
    text += `- Nome: ${formData.nome}\n`;
    text += `- Empresa: ${formData.empresa}\n`;
    text += `- E-mail: ${formData.email}\n`;
    text += `- WhatsApp: ${formData.whatsapp}\n\n`;
    
    if (selectedService === "consultoria") {
      text += `*Meu Cenário:*\n`;
      text += `- Objetivo: ${formData.dorPrincipal}\n`;
      text += `- Faturamento: ${formData.volumeOuControle}\n`;
    } else {
      text += `*Meu Cenário:*\n`;
      text += `- Dificuldade: ${formData.dorPrincipal}\n`;
      text += `- Volume mensal: ${formData.volumeOuControle}\n`;
    }
    
    const encodedText = encodeURIComponent(text);
    const finalWhatsApp = `https://wa.me/${phone}?text=${encodedText}`;
    setCustomWhatsAppUrl(finalWhatsApp);

    const summaryPayload: LeadSubmissionSummary = {
      nome: formData.nome,
      empresa: formData.empresa,
      email: formData.email,
      whatsapp: formData.whatsapp,
      tipo: selectedService,
      plano: currentServiceInfo.name,
      formula: currentServiceInfo.formula,
      dorPrincipal: formData.dorPrincipal,
      volumeOuControle: formData.volumeOuControle,
      whatsappUrl: finalWhatsApp,
      classification: getClassification(),
      createdAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem("favo_last_lead", JSON.stringify(summaryPayload));
    } catch {
      // ignore
    }

    setStep(3);
    navigate("/obrigado", { state: summaryPayload });
  };

  const bpoQuestions = {
    q1: {
      label: "Qual a sua maior dificuldade com o financeiro hoje?",
      options: [
        "Falta de tempo para a rotina diária",
        "Mistura de contas Pessoais e da Empresa",
        "Alto índice de Inadimplência",
        "Não consigo visualizar meu lucro real",
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
        "Identificar gargalos e objetivos do negócio",
        "Mapeamento de processos e análise de números",
        "Apresentação de Raio-X financeiro e problemas",
        "Mapa estratégico e ferramentas para negócio sólido",
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
    if (selectedService !== "consultoria") return null;
    const dor = formData.dorPrincipal;
    const faturamento = formData.volumeOuControle;

    if (faturamento === "Até R$ 20.000" || dor.includes("vazamentos")) {
      return {
        tag: "Perfil: Estruturação Essencial",
        desc: "Seu foco inicial será encontrar os gargalos imediatos e organizar processos para estancar desperdícios de caixa."
      };
    }
    
    if (faturamento === "Acima de R$ 100.000" || (faturamento === "De R$ 50.000 a R$ 100.000" && dor.includes("crescimento"))) {
      return {
        tag: "Perfil: Gestão Estratégica",
        desc: "Sua empresa já possui tração. Nosso foco será o Raio-X completo e o mapa estratégico com ferramentas para escalar sem perder margem."
      };
    }

    return {
      tag: "Perfil: Alavancagem",
      desc: "Cenário ideal para mapear processos existentes, analisar números e construir um negócio sólido nos 4 encontros da consultoria."
    };
  };

  const questions = selectedService === "consultoria" ? consultoriaQuestions : bpoQuestions;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#301A3F] via-[#472F5B] to-[#20102B] text-[#FFFFF0] shadow-2xl relative overflow-hidden border border-[#472F5B]/40 p-8 sm:p-14" id="formulario">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D97706]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Unified Header / Banner Section */}
      <div className="max-w-2xl mb-12 relative z-10">
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D97706] bg-white/10 px-4 py-1.5 rounded-full inline-block mb-6">
          {badge}
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-light mb-6 text-[#FFFFF0] leading-tight">
          {title.includes("lucro real") ? (
            <>Transforme seu faturamento em <span className="italic font-medium text-[#D97706]">lucro real e previsível.</span></>
          ) : title.includes("financeiro impecável") ? (
            <>Recupere suas horas livres e tenha um financeiro <span className="italic font-medium text-[#D97706]">impecável.</span></>
          ) : title}
        </h2>
        <p className="text-[#FFFFF0]/80 text-sm sm:text-base leading-relaxed mb-8">
          {subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4.5 rounded-full text-xs uppercase tracking-widest font-semibold shadow-lg hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Falar Direto no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 text-[#1F242D] shadow-xl relative z-10 border border-white/20">
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#472F5B]/10">
          <div>
            <span className="text-[#D97706] text-[10px] uppercase tracking-[0.3em] font-semibold block mb-1">
              {step <= 2 ? `Passo ${step} de 2` : "Solicitação Recebida"}
            </span>
            <h3 className="text-2xl font-serif font-normal text-[#1F242D]">
              {step === 1 ? "Inicie seu Diagnóstico Personalizado" : step === 2 ? "Detalhes do seu Cenário" : "Retorno sobre sua Solicitação"}
            </h3>
          </div>
          <div className="text-xs text-[#4B5262] font-medium hidden sm:block">
            {step === 1 ? "Preenchimento rápido (1 min)" : step === 2 ? "Quase lá!" : "Confirmação Registrada"}
          </div>
        </div>

        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            
            {/* SELETOR DE SOLUÇÃO DE INTERESSE */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-semibold text-[#472F5B] block">
                Solução de Interesse:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {(Object.keys(serviceLabels) as FormType[]).map((key) => {
                  const s = serviceLabels[key];
                  const isSelected = selectedService === key;
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => setSelectedService(key)}
                      className={cn(
                        "p-3 rounded-xl border text-left transition-all duration-300",
                        isSelected
                          ? "bg-[#472F5B] text-[#FFFFF0] border-[#472F5B] shadow-md"
                          : "bg-[#FAF9F5] text-[#1F242D] border-[#472F5B]/15 hover:border-[#472F5B]/40"
                      )}
                    >
                      <span className={cn("text-xs font-semibold block", isSelected ? "text-[#FFFFF0]" : "text-[#1F242D]")}>
                        {s.short}
                      </span>
                      <span className={cn("text-[10px] block mt-0.5", isSelected ? "text-[#D97706]" : "text-[#4B5262]")}>
                        {s.formula}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium text-[#1F242D]">Nome Completo</label>
                <input 
                  required
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="w-full bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-4 py-3.5 text-sm text-[#1F242D] placeholder:text-[#4B5262]/60 focus:outline-none focus:border-[#472F5B] transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium text-[#1F242D]">WhatsApp</label>
                <input 
                  required
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-4 py-3.5 text-sm text-[#1F242D] placeholder:text-[#4B5262]/60 focus:outline-none focus:border-[#472F5B] transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium text-[#1F242D]">E-mail Profissional</label>
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-4 py-3.5 text-sm text-[#1F242D] placeholder:text-[#4B5262]/60 focus:outline-none focus:border-[#472F5B] transition-colors"
                  placeholder="seu@email.com.br"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-medium text-[#1F242D]">Nome da Empresa</label>
                <input 
                  required
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  className="w-full bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-4 py-3.5 text-sm text-[#1F242D] placeholder:text-[#4B5262]/60 focus:outline-none focus:border-[#472F5B] transition-colors"
                  placeholder="Sua marca ou negócio"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button 
                type="submit"
                className="inline-flex items-center gap-3 bg-[#472F5B] hover:bg-[#361F48] text-[#FFFFF0] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Próximo Passo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Resumo dos dados preenchidos no Passo 1 */}
            <div className="p-4 rounded-2xl bg-[#472F5B]/5 border border-[#472F5B]/15 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#4B5262]">
                  Plano selecionado: <strong className="text-[#472F5B]">{serviceLabels[selectedService].name}</strong> ({serviceLabels[selectedService].formula})
                </span>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="text-[11px] text-[#D97706] font-semibold underline hover:text-[#111827] cursor-pointer"
                >
                  Editar Dados
                </button>
              </div>
              <div className="pt-2 border-t border-[#472F5B]/10 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-[#4B5262]">
                <span><strong>Nome:</strong> {formData.nome}</span>
                <span><strong>Empresa:</strong> {formData.empresa}</span>
                <span><strong>WhatsApp:</strong> {formData.whatsapp}</span>
                <span><strong>E-mail:</strong> {formData.email}</span>
              </div>
            </div>

            {/* Question 1 */}
            <div className="space-y-4">
              <label className="text-base font-serif tracking-wide text-[#1F242D] block font-medium">
                1. {questions.q1.label}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {questions.q1.options.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setFormData({...formData, dorPrincipal: opt})}
                    className={cn(
                      "text-left p-4 text-xs font-normal tracking-wide border rounded-xl transition-all duration-300",
                      formData.dorPrincipal === opt 
                        ? "border-[#472F5B] bg-[#472F5B]/10 text-[#472F5B] font-medium shadow-xs" 
                        : "border-[#472F5B]/15 text-[#4B5262] hover:border-[#472F5B]/40 bg-white"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4">
              <label className="text-base font-serif tracking-wide text-[#1F242D] block font-medium">
                2. {questions.q2.label}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {questions.q2.options.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setFormData({...formData, volumeOuControle: opt})}
                    className={cn(
                      "text-left p-4 text-xs font-normal tracking-wide border rounded-xl transition-all duration-300",
                      formData.volumeOuControle === opt 
                        ? "border-[#472F5B] bg-[#472F5B]/10 text-[#472F5B] font-medium shadow-xs" 
                        : "border-[#472F5B]/15 text-[#4B5262] hover:border-[#472F5B]/40 bg-white"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Resumo Dinâmico antes de enviar */}
            {(formData.dorPrincipal || formData.volumeOuControle) && (
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#D97706]/30 text-xs space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D97706] block">
                  Resumo do seu Diagnóstico
                </span>
                <p className="text-[#1F242D]">
                  <strong>{formData.nome}</strong> ({formData.empresa}) • Plano: <strong className="text-[#472F5B]">{serviceLabels[selectedService].name}</strong>
                </p>
                {formData.dorPrincipal && (
                  <p className="text-[#4B5262]">
                    • {selectedService === "consultoria" ? "Objetivo:" : "Dificuldade:"} <strong>{formData.dorPrincipal}</strong>
                  </p>
                )}
                {formData.volumeOuControle && (
                  <p className="text-[#4B5262]">
                    • {selectedService === "consultoria" ? "Faturamento:" : "Volume mensal:"} <strong>{formData.volumeOuControle}</strong>
                  </p>
                )}
              </div>
            )}

            <div className="pt-6 flex items-center justify-between">
              <button 
                type="button"
                onClick={handlePrev}
                className="px-6 py-3.5 border border-[#472F5B]/20 text-[#472F5B] hover:bg-[#472F5B]/5 rounded-full transition-colors flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider"
              >
                <ChevronLeft className="w-4 h-4" /> Voltar
              </button>
              <button 
                type="submit"
                disabled={!formData.dorPrincipal || !formData.volumeOuControle}
                className="inline-flex items-center gap-3 bg-[#472F5B] hover:bg-[#361F48] text-[#FFFFF0] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Enviar Avaliação <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500 py-6 sm:py-10 max-w-xl mx-auto">
            {/* Ícone de Sucesso */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-600 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#D97706] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                ✓
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-emerald-700 bg-emerald-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Solicitação Recebida com Sucesso
              </span>
              <h4 className="text-3xl sm:text-4xl font-serif font-light text-[#1F242D]">
                Obrigado, {formData.nome.split(" ")[0] || "pelo contato"}!
              </h4>
              <p className="text-xs text-[#D97706] font-semibold mt-1">
                Interesse registrado: {serviceLabels[selectedService].name} ({serviceLabels[selectedService].formula})
              </p>
            </div>

            {/* Aviso Destacado Solicitado */}
            <div className="w-full bg-[#FAF9F5] border border-[#472F5B]/15 rounded-3xl p-6 sm:p-8 text-left shadow-xs relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#472F5B] text-[#FFFFF0] flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#D97706]" />
                </div>
                <div className="space-y-2.5">
                  <h5 className="text-base sm:text-lg font-serif font-medium text-[#1F242D]">
                    Entraremos em contato com você em breve
                  </h5>
                  <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                    Nossa equipe de especialistas da Favo já recebeu as informações da <strong>{formData.empresa || "sua empresa"}</strong>. Entraremos em contato diretamente com você pelo <strong>WhatsApp</strong> {formData.whatsapp ? `(${formData.whatsapp})` : ""} ou por <strong>e-mail</strong> {formData.email ? `(${formData.email})` : ""} dando o retorno completo e personalizado sobre a sua solicitação.
                  </p>
                </div>
              </div>

              {/* Informação adicional de retorno */}
              <div className="mt-6 pt-4 border-t border-[#472F5B]/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4B5262]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Retorno via <strong>WhatsApp</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Retorno via <strong>E-mail</strong></span>
                </div>
              </div>
            </div>

            {/* Se for consultoria e tiver perfil classificado */}
            {selectedService === "consultoria" && getClassification() && (
              <div className="bg-[#472F5B]/5 border border-[#472F5B]/15 rounded-2xl p-5 w-full text-left">
                <span className="text-[#D97706] text-[10px] uppercase tracking-[0.2em] font-semibold block mb-1">
                  Diagnóstico Preliminar
                </span>
                <h5 className="text-sm font-serif text-[#472F5B] font-semibold mb-1">
                  {getClassification()?.tag}
                </h5>
                <p className="text-xs font-normal text-[#4B5262] leading-relaxed">
                  {getClassification()?.desc}
                </p>
              </div>
            )}

            {/* Ações: Iniciar no WhatsApp na hora ou Enviar outra solicitação */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              {customWhatsAppUrl && (
                <a
                  href={customWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Abrir Conversa no WhatsApp</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => {
                  setFormData({
                    nome: "",
                    whatsapp: "",
                    email: "",
                    empresa: "",
                    dorPrincipal: "",
                    volumeOuControle: "",
                  });
                  setStep(1);
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#472F5B]/20 text-xs uppercase tracking-wider text-[#472F5B] hover:bg-[#472F5B]/5 font-semibold transition-all"
              >
                Nova Solicitação
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
