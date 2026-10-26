import { Link } from "react-router-dom";
import { Instagram, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="rodape" className="bg-[#FFFFF0] border-t border-[#38183A]/15 py-24 text-[#1F242D]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        {/* Brand & Social */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <Logo size="lg" />
          </Link>
          <p className="text-[#4B5262] text-sm leading-relaxed font-normal mb-8 max-w-xs">
            Transformando dados financeiros em estratégias de alto crescimento e lucro previsível para a sua empresa.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/favogestaofinanceira/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#38183A]/20 flex items-center justify-center text-[#38183A] hover:bg-[#38183A] hover:text-[#FFFFF0] hover:border-[#38183A] transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://wa.me/5548999725750" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#38183A]/20 flex items-center justify-center text-[#38183A] hover:bg-[#38183A] hover:text-[#FFFFF0] hover:border-[#38183A] transition-all duration-300">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold uppercase tracking-[0.2em] text-[10px] mb-6 text-[#38183A]">Navegação</h4>
          <ul className="space-y-4 text-[#4B5262] text-xs font-normal tracking-wide">
            <li><Link to="/" className="hover:text-[#38183A] hover:pl-2 transition-all duration-300 block">Início</Link></li>
            <li><Link to="/gestao-financeira" className="hover:text-[#38183A] hover:pl-2 transition-all duration-300 block">Serviços & Planos</Link></li>
            <li><Link to="/perguntas-frequentes" className="hover:text-[#38183A] hover:pl-2 transition-all duration-300 block">Perguntas Frequentes</Link></li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold uppercase tracking-[0.2em] text-[10px] mb-6 text-[#38183A]">Soluções</h4>
          <ul className="space-y-4 text-[#4B5262] text-xs font-normal tracking-wide">
            <li><Link to="/gestao-financeira" className="hover:text-[#38183A] hover:pl-2 transition-all duration-300 block">BPO (Processo Padrão)</Link></li>
            <li><Link to="/gestao-financeira" className="hover:text-[#38183A] hover:pl-2 transition-all duration-300 block">Assistência Virtual (Padrão + Suporte)</Link></li>
            <li><Link to="/gestao-financeira" className="hover:text-[#38183A] hover:pl-2 transition-all duration-300 block">Gestão Financeira (Padrão + Suporte + Análise)</Link></li>
            <li><a href="#formulario" onClick={(e) => { e.preventDefault(); document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth", block: "center" }); }} className="hover:text-[#38183A] hover:pl-2 transition-all duration-300 block cursor-pointer">Consultoria Financeira (8 Semanas)</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold uppercase tracking-[0.2em] text-[10px] mb-6 text-[#38183A]">Contato</h4>
          <ul className="space-y-4 text-[#4B5262] text-xs font-normal tracking-wide">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
              <a href="mailto:favo@favogestaofinanceira.com.br" className="hover:text-[#38183A] transition-colors break-words">favo@favogestaofinanceira.com.br</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
              <a href="tel:+5548999725750" className="hover:text-[#38183A] transition-colors">48 9 9972-5750</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Rodovia Francisco Magno Vieira (SC-405), 4397 – sala 202 - Torre Sol - Oka Shopping - Campeche, Florianópolis – SC
                <br />
                CEP: 88065-000
              </span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[#38183A]/10 text-[11px] uppercase tracking-widest text-[#333A48] flex flex-col md:flex-row justify-between items-center gap-4 font-normal">
        <p>&copy; {new Date().getFullYear()} Favo Gestão Financeira. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6 text-[#333A48]/85">
          <Link
            to="/privacidade"
            className="hover:text-[#38183A] underline underline-offset-4 transition-colors cursor-pointer"
          >
            Política de Privacidade (LGPD)
          </Link>
          <Link 
            to="/admin" 
            className="hover:text-[#38183A] transition-colors cursor-pointer"
            title="Acesso Interno Favo"
          >
            Acesso Restrito
          </Link>
        </div>
      </div>
    </footer>
  );
}
