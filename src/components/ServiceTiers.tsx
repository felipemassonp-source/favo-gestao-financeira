import { useState } from "react";
import { cn } from "../lib/utils";
import MachineXServiceCards from "./MachineXServiceCards";

export interface PlanData {
  id: "bpo" | "assistencia" | "gestao";
  name: string;
  badge: string;
  formula: string;
  description: string;
  isPopular?: boolean;
  idealFor: string;
  features: string[];
}

export const operationalPlans: PlanData[] = [
  {
    id: "bpo",
    name: "BPO",
    badge: "Processo Padrão",
    formula: "PROCESSO PADRÃO",
    description: "Organização essencial e rotina de conciliação para empresas que buscam controle rigoroso sem agendamentos bancários diretos.",
    idealFor: "Ideal para empresas que preferem manter os agendamentos no banco internamente, mas querem rotina e conciliação 100% organizadas.",
    features: [
      "Organização de contas a pagar (sem agendamento bancário)",
      "Organização de contas a receber",
      "Conciliação bancária",
      "Envio de relatório semanal com contas a pagar",
      "Envio de relatório semanal com contas a receber e inadimplência",
      "Fechamento de financeiro mensal",
    ]
  },
  {
    id: "assistencia",
    name: "Assistência Financeira Virtual",
    badge: "Recomendado • Processo Padrão + Suporte",
    formula: "PROCESSO PADRÃO + SUPORTE",
    isPopular: true,
    description: "Operação delegada no dia a dia com agendamentos no banco, emissão fiscal, boletos e gestão ativa de cobrança.",
    idealFor: "Ideal para empresários e negócios que querem delegar o operacional bancário, emissão de notas e controle de cartões.",
    features: [
      "Gestão de contas a pagar (com agendamento bancário)",
      "Gestão de contas a receber",
      "Conciliação bancária",
      "Gestão de inadimplência (com ou sem cobrança)",
      "Emissão de notas fiscais e boletos",
      "Gestão de cartão de crédito",
      "Apoio para captação de documentos de fornecedores",
      "Fechamento de financeiro mensal",
      "Relatórios mensais de receitas e despesas",
      "Reunião mensal de apresentação de resultados",
    ]
  },
  {
    id: "gestao",
    name: "Gestão Financeira",
    badge: "Processo Padrão + Suporte + Análise",
    formula: "PROCESSO PADRÃO + SUPORTE + ANÁLISE",
    description: "A inteligência financeira integral da sua empresa: toda a rotina delegada somada a projeções futuras, gráficos, análise de caixa e metas.",
    idealFor: "Ideal para empresas que exigem visão executiva de alto nível, controle orçamentário profundo e projeções para crescer com segurança.",
    features: [
      "Gestão de contas a pagar (com agendamento bancário)",
      "Gestão de contas a receber",
      "Conciliação bancária",
      "Gestão de inadimplência (com ou sem cobrança)",
      "Emissão de notas fiscais e boletos",
      "Gestão de cartão de crédito",
      "Apoio para captação de documentos de fornecedores",
      "Fechamento de financeiro mensal",
      "Relatórios mensais de receitas e despesas",
      "Projeções futuras",
      "Análise de geração de caixa mensal",
      "Gráfico de resultados",
      "Controle e elaboração mensal de metas",
      "Reunião mensal de planejamento e demonstração de resultados",
    ]
  }
];

const comparisonMatrix = [
  { feature: "Para quem é indicado", bpo: "Empresas que pagam contas internamente", assistencia: "Empresas que querem delegar a rotina bancária", gestao: "Empresas em expansão com foco em metas" },
  { feature: "O que fica com o cliente", bpo: "Agendar e pagar no banco", assistencia: "Apenas aprovar os agendamentos no app", gestao: "Apenas aprovar os agendamentos no app" },
  { feature: "Organização de contas a pagar", bpo: "Sem agendamento bancário", assistencia: "Com agendamento bancário", gestao: "Com agendamento bancário" },
  { feature: "Organização / Gestão de contas a receber", bpo: true, assistencia: true, gestao: true },
  { feature: "Conciliação bancária diária", bpo: true, assistencia: true, gestao: true },
  { feature: "Relatório semanal de contas a pagar e a receber", bpo: true, assistencia: true, gestao: true },
  { feature: "Gestão de inadimplência (com/sem cobrança)", bpo: "Apenas relatório", assistencia: true, gestao: true },
  { feature: "Emissão de notas fiscais e boletos", bpo: false, assistencia: true, gestao: true },
  { feature: "Gestão e controle de cartão de crédito", bpo: false, assistencia: true, gestao: true },
  { feature: "Apoio na captação de documentos de fornecedores", bpo: false, assistencia: true, gestao: true },
  { feature: "Fechamento de financeiro mensal", bpo: true, assistencia: true, gestao: true },
  { feature: "Relatórios mensais de receitas e despesas", bpo: false, assistencia: true, gestao: true },
  { feature: "Reunião mensal de apresentação de resultados", bpo: false, assistencia: true, gestao: "Com planejamento estratégico" },
  { feature: "Projeções futuras de caixa", bpo: false, assistencia: false, gestao: true },
  { feature: "Análise de geração de caixa mensal", bpo: false, assistencia: false, gestao: true },
  { feature: "Gráfico executivo de resultados", bpo: false, assistencia: false, gestao: true },
  { feature: "Controle e elaboração mensal de metas", bpo: false, assistencia: false, gestao: true },
];

export default function ServiceTiers() {
  const [showMatrix, setShowMatrix] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("formulario-bpo") || document.getElementById("formulario");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="planos-servicos" className="w-full">
      {/* Header da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#38183A] font-mono block mb-4">
          ESCOPO SOB MEDIDA
        </span>

        <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D] tracking-tight leading-[1.15] text-balance">
          Três níveis de serviço. <br className="hidden sm:block" />
          <span className="italic text-[#D97706] font-medium">A mesma excelência</span> para o seu caixa.
        </h2>

        <p className="mt-4 text-sm md:text-base text-[#4B5262] font-normal leading-relaxed max-w-2xl mx-auto">
          Entenda com transparência total o que está incluso em cada modelo: desde a organização padrão até a gestão analítica completa com metas e projeções.
        </p>

        {/* Botão de Alternância para Matriz Comparativa */}
        <div className="mt-8 inline-flex p-1.5 rounded-full bg-white border border-[#38183A]/15 shadow-xs max-w-full">
          <button
            onClick={() => setShowMatrix(false)}
            className={cn(
              "px-4 sm:px-5 py-2.5 text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer",
              !showMatrix ? "bg-[#38183A] text-[#FFFFF0] shadow-sm" : "text-[#4B5262] hover:text-[#1F242D]"
            )}
          >
            Visualizar Cards
          </button>
          <button
            onClick={() => setShowMatrix(true)}
            className={cn(
              "px-4 sm:px-5 py-2.5 text-[11px] sm:text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer",
              showMatrix ? "bg-[#38183A] text-[#FFFFF0] shadow-sm" : "text-[#4B5262] hover:text-[#1F242D]"
            )}
          >
            Comparativo Completo
          </button>
        </div>
      </div>

      {/* CARDS DOS 3 SERVIÇOS (COM ANIMAÇÃO DECK MACHINEX BY KOTO) */}
      {!showMatrix ? (
        <MachineXServiceCards className="px-0 py-0" />
      ) : (
        /* TABELA MATRIZ COMPARATIVA DETALHADA */
        <div className="bg-white rounded-3xl border border-[#38183A]/15 shadow-xl overflow-hidden">
          <div className="px-5 py-2.5 bg-[#FAF9F5] border-b border-[#38183A]/10 text-[11px] text-[#4B5262] sm:hidden flex items-center justify-between">
            <span>Deslize a tabela para o lado para comparar</span>
            <span className="text-[#38183A] font-semibold">→</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-[#FAF9F5] border-b border-[#38183A]/15">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-[#38183A] w-2/5">
                    Funcionalidade / Escopo
                  </th>
                  <th className="py-5 px-4 text-xs font-bold uppercase tracking-wider text-[#1F242D] text-center w-1/5">
                    <div>BPO</div>
                    <span className="text-[10px] font-normal text-[#4B5262] block lowercase">Processo Padrão</span>
                  </th>
                  <th className="py-5 px-4 text-xs font-bold uppercase tracking-wider text-[#1F242D] text-center w-1/5">
                    <div>Assistência Virtual</div>
                    <span className="text-[10px] font-normal text-[#4B5262] block lowercase">Padrão + Suporte</span>
                  </th>
                  <th className="py-5 px-4 text-xs font-bold uppercase tracking-wider text-[#D97706] text-center w-1/5 bg-[#D97706]/10">
                    <div>Gestão Financeira</div>
                    <span className="text-[10px] font-normal text-[#D97706] block lowercase">Padrão + Suporte + Análise</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#38183A]/10 text-xs">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF9F5]/50"}>
                    <td className="py-4 px-6 font-medium text-[#1F242D]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.bpo === "string" ? (
                        <span className="text-[11px] text-[#4B5262] font-medium">{row.bpo}</span>
                      ) : row.bpo ? (
                        <span className="inline-flex w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 items-center justify-center font-bold">✓</span>
                      ) : (
                        <span className="text-gray-300 font-bold">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.assistencia === "string" ? (
                        <span className="text-[11px] text-[#4B5262] font-medium">{row.assistencia}</span>
                      ) : row.assistencia ? (
                        <span className="inline-flex w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 items-center justify-center font-bold">✓</span>
                      ) : (
                        <span className="text-gray-300 font-bold">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-[#D97706]/5">
                      {typeof row.gestao === "string" ? (
                        <span className="text-[11px] text-[#D97706] font-semibold">{row.gestao}</span>
                      ) : row.gestao ? (
                        <span className="inline-flex w-5 h-5 rounded-full bg-[#D97706] text-white items-center justify-center font-bold">✓</span>
                      ) : (
                        <span className="text-gray-300 font-bold">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-[#FAF9F5] border-t border-[#38183A]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#333A48] text-center sm:text-left">
              ✦ Todos os planos operam com perfil bancário de operador secundário (a Favo agenda e somente o titular autoriza no app do banco).
            </span>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#38183A] text-[#FFFFF0] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#2B112D] transition-all cursor-pointer shrink-0"
            >
              Solicitar Proposta no Formulário
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
