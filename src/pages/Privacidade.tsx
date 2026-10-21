import { Link } from "react-router-dom";
import { ShieldCheck, Lock, ArrowLeft, Mail, Phone } from "lucide-react";

export default function Privacidade() {
  return (
    <div className="w-full min-h-screen bg-[#FFFFF0] text-[#1F242D] relative overflow-hidden font-sans pt-36 pb-24 px-6">
      <div className="absolute inset-0 bg-honeycomb opacity-[0.35] pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#472F5B] hover:text-[#D97706] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Link>

        <div className="bg-white rounded-[2.5rem] border border-[#472F5B]/15 shadow-sm p-8 sm:p-12 space-y-8">
          <div className="pb-6 border-b border-[#472F5B]/10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D97706] font-semibold flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4" /> LGPD & CONFORMIDADE DE DADOS
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D]">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-sm text-[#333A48] mt-2">
              Favo Gestão Financeira • Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#333A48] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D]">
                1. Quais dados coletamos e com qual finalidade
              </h2>
              <p>
                Ao preencher nossos formulários de diagnóstico financeiro no site, coletamos exclusivamente as informações fornecidas voluntariamente por você: <strong>Nome completo, Nome da empresa, E-mail profissional, WhatsApp</strong> e respostas sobre o cenário atual da rotina financeira (objetivo/dificuldade principal e faixa de movimentação ou faturamento).
              </p>
              <p>
                Esses dados têm <strong>finalidade única e exclusiva</strong> de permitir que nossa equipe de especialistas elabore uma avaliação preliminar do perfil da sua empresa e entre em contato via WhatsApp ou e-mail para apresentar nossas soluções de BPO Financeiro, Assistência Financeira Virtual, Gestão Financeira Estratégica ou Consultoria.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D]">
                2. O que acontece após o envio do formulário
              </h2>
              <p>
                Assim que você envia o formulário, suas respostas são registradas em ambiente seguro com controle de acesso restrito aos gestores autorizados da Favo Gestão Financeira. Na página de confirmação (<code>/obrigado</code>), você visualiza o resumo completo do que preencheu e pode optar por iniciar o atendimento imediatamente pelo WhatsApp ou aguardar o retorno ativo da nossa equipe.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D]">
                3. Compartilhamento e Segurança das Informações
              </h2>
              <p>
                A <strong>Favo Gestão Financeira não vende, aluga ou compartilha seus dados</strong> com terceiros para fins publicitários. Utilizamos conexões criptografadas (HTTPS/TLS) e infraestrutura em nuvem com autenticação restrita. Na prestação de serviços contratados, atuamos sob Contrato de Confidencialidade (NDA) e exclusivamente com perfil de operador secundário bancário.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D]">
                4. Seus Direitos como Titular dos Dados (LGPD)
              </h2>
              <p>
                A qualquer momento, você pode solicitar a confirmação, atualização, correção ou exclusão definitiva dos seus dados de contato da nossa base, bastando entrar em contato pelos nossos canais oficiais abaixo:
              </p>
              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#472F5B]/15 flex flex-col sm:flex-row gap-6 text-xs sm:text-sm mt-3">
                <a
                  href="mailto:favo@favogestaofinanceira.com.br"
                  className="flex items-center gap-2.5 text-[#1F242D] hover:text-[#472F5B] font-medium"
                >
                  <Mail className="w-4 h-4 text-[#D97706]" />
                  <span>favo@favogestaofinanceira.com.br</span>
                </a>
                <a
                  href="https://wa.me/5548999725750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#1F242D] hover:text-[#472F5B] font-medium"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span>(48) 9 9972-5750</span>
                </a>
              </div>
            </section>
          </div>

          <div className="pt-6 border-t border-[#472F5B]/10 flex items-center gap-2.5 text-xs text-[#333A48]">
            <Lock className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>
              Rodovia Francisco Magno Vieira (SC-405), 4397 – sala 202 - Torre Sol - Oka Shopping - Campeche, Florianópolis – SC | CEP: 88065-000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
