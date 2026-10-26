import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Building2,
  User,
  Mail,
  Phone,
  FileText,
  Sparkles,
} from "lucide-react";

export interface LeadSubmissionSummary {
  nome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  tipo: string;
  plano: string;
  formula: string;
  dorPrincipal: string;
  volumeOuControle: string;
  whatsappUrl: string;
  classification?: {
    tag: string;
    desc: string;
  } | null;
  createdAt?: string;
}

export default function Obrigado() {
  const location = useLocation();

  // Recupera os dados enviados via router state ou sessionStorage
  const stateData = location.state as LeadSubmissionSummary | null;
  let storedData: LeadSubmissionSummary | null = null;
  try {
    const raw = sessionStorage.getItem("favo_last_lead");
    if (raw) storedData = JSON.parse(raw);
  } catch {
    // ignore
  }

  const lead: LeadSubmissionSummary = stateData ||
    storedData || {
      nome: "Cliente Favo",
      empresa: "Sua Empresa",
      email: "",
      whatsapp: "",
      tipo: "assistencia",
      plano: "Assistência Financeira Virtual",
      formula: "Padrão + Suporte",
      dorPrincipal: "Organização e previsibilidade financeira",
      volumeOuControle: "Em avaliação",
      whatsappUrl:
        "https://api.whatsapp.com/send?phone=5548999725750&text=Ol%C3%A1!%20Acabei%20de%20preencher%20o%20formul%C3%A1rio%20no%20site%20da%20Favo%20e%20gostaria%20de%20avan%C3%A7ar%20com%20meu%20atendimento.",
      classification: null,
    };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Dispara evento no dataLayer para Google Ads / Google Tag Manager
    try {
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "favo_lead_conversion",
        lead_plan: lead.plano,
        lead_type: lead.tipo,
      });
    } catch {
      // ignore
    }
  }, [lead.plano, lead.tipo]);

  const firstName = lead.nome ? lead.nome.trim().split(" ")[0] : "Cliente";

  return (
    <div className="w-full min-h-screen bg-[#FFFFF0] text-[#1F242D] relative overflow-hidden font-sans pt-32 pb-24 px-6">
      {/* Glow de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#38183A]/12 via-[#D97706]/5 to-transparent blur-[120px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-honeycomb opacity-[0.4] pointer-events-none -z-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[2.5rem] border border-[#38183A]/15 shadow-[0_24px_60px_rgba(71,47,91,0.08)] p-8 sm:p-12"
        >
          {/* Cabeçalho de Confirmação */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="relative mb-5">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-600 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#D97706] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                ✓
              </span>
            </div>

            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-emerald-700 bg-emerald-100/80 px-4 py-1.5 rounded-full inline-block mb-3">
              Solicitação Recebida com Sucesso
            </span>

            <h1 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D] leading-tight">
              Obrigado, <span className="italic font-medium text-[#38183A]">{firstName}!</span>
            </h1>

            <p className="text-sm sm:text-base text-[#4B5262] mt-3 max-w-xl leading-relaxed">
              Suas respostas já foram salvas com segurança para a equipe da <strong>Favo Gestão Financeira</strong>. Se quiser agilizar seu diagnóstico agora mesmo, clique no botão abaixo para encaminhar este resumo direto ao nosso WhatsApp:
            </p>
          </div>

          {/* CTA Principal de Encaminhamento para o WhatsApp */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#38183A] via-[#38183A] to-[#220D24] text-[#FFFFF0] shadow-xl mb-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D97706]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D97706] font-mono font-semibold block mb-2">
              ATENDIMENTO ÁGIL VIA WHATSAPP (OPCIONAL)
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-light mb-3 text-[#FFFFF0]">
              Deseja iniciar a conversa no WhatsApp agora?
            </h2>
            <p className="text-xs sm:text-sm text-[#FFFFF0]/80 max-w-lg mx-auto mb-6 leading-relaxed">
              Ao clicar abaixo, o WhatsApp abrirá já preenchido com o resumo das informações que você respondeu no formulário para atendimento imediato.
            </p>

            <a
              href={lead.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb859] text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.18em] font-semibold shadow-lg shadow-[#25D366]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Avançar no WhatsApp com Meu Resumo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>

          {/* Resumo Completo do Preenchimento do Formulário */}
          <div className="rounded-3xl bg-[#FAF9F5] border border-[#38183A]/15 p-6 sm:p-8 mb-8">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#38183A]/10">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#D97706]" />
                <h3 className="text-base sm:text-lg font-serif font-medium text-[#1F242D]">
                  Resumo do que você preencheu
                </h3>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#38183A] bg-[#38183A]/10 px-3 py-1 rounded-full">
                {lead.formula}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mb-6">
              <div className="p-3.5 rounded-2xl bg-white border border-[#38183A]/10">
                <span className="text-[10px] uppercase tracking-wider text-[#4B5262] font-semibold flex items-center gap-1.5 mb-1">
                  <User className="w-3.5 h-3.5 text-[#38183A]" /> Nome
                </span>
                <p className="font-medium text-[#1F242D]">{lead.nome || "—"}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#38183A]/10">
                <span className="text-[10px] uppercase tracking-wider text-[#4B5262] font-semibold flex items-center gap-1.5 mb-1">
                  <Building2 className="w-3.5 h-3.5 text-[#38183A]" /> Empresa
                </span>
                <p className="font-medium text-[#1F242D]">{lead.empresa || "—"}</p>
              </div>

              {lead.whatsapp && (
                <div className="p-3.5 rounded-2xl bg-white border border-[#38183A]/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#4B5262] font-semibold flex items-center gap-1.5 mb-1">
                    <Phone className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Informado
                  </span>
                  <p className="font-medium text-[#1F242D]">{lead.whatsapp}</p>
                </div>
              )}

              {lead.email && (
                <div className="p-3.5 rounded-2xl bg-white border border-[#38183A]/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#4B5262] font-semibold flex items-center gap-1.5 mb-1">
                    <Mail className="w-3.5 h-3.5 text-[#D97706]" /> E-mail Profissional
                  </span>
                  <p className="font-medium text-[#1F242D] break-words">{lead.email}</p>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-4 border-t border-[#38183A]/10 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3.5 rounded-2xl bg-white border border-[#38183A]/10">
                <span className="text-[#4B5262] font-medium">Solução selecionada:</span>
                <strong className="text-[#38183A]">{lead.plano} ({lead.formula})</strong>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3.5 rounded-2xl bg-white border border-[#38183A]/10">
                <span className="text-[#4B5262] font-medium">
                  {lead.tipo === "consultoria" ? "Objetivo principal:" : "Maior dificuldade atual:"}
                </span>
                <strong className="text-[#1F242D]">{lead.dorPrincipal || "—"}</strong>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3.5 rounded-2xl bg-white border border-[#38183A]/10">
                <span className="text-[#4B5262] font-medium">
                  {lead.tipo === "consultoria" ? "Faturamento médio mensal:" : "Volume médio mensal:"}
                </span>
                <strong className="text-[#1F242D]">{lead.volumeOuControle || "—"}</strong>
              </div>
            </div>

            {lead.classification && (
              <div className="mt-5 p-4 rounded-2xl bg-[#38183A]/5 border border-[#38183A]/15">
                <span className="text-[#D97706] text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Diagnóstico Preliminar
                </span>
                <p className="text-sm font-serif font-semibold text-[#38183A]">
                  {lead.classification.tag}
                </p>
                <p className="text-xs text-[#4B5262] mt-1 leading-relaxed">
                  {lead.classification.desc}
                </p>
              </div>
            )}
          </div>

          {/* Aviso de Garantia de Retorno */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFFFF0] border border-[#38183A]/10 text-xs text-[#4B5262] mb-8">
            <ShieldCheck className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Caso prefira aguardar, nossa equipe também entrará em contato ativamente pelo WhatsApp ou e-mail informados acima para apresentar a melhor proposta para a <strong>{lead.empresa || "sua empresa"}</strong>.
            </p>
          </div>

          {/* Rodapé de navegação */}
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#38183A] hover:text-[#D97706] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a Página Inicial</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
