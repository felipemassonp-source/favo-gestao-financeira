import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#FFFFFF] border-t border-[#472f5b]/10 py-24 text-[#472f5b]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        {/* Brand & Social */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <Logo />
          </Link>
          <p className="text-[#2a3a1e] text-sm leading-relaxed font-light mb-8 max-w-xs">
            Transformando dados financeiros em estratégias de alto crescimento para a sua empresa.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/favogestao" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#472f5b]/20 flex items-center justify-center text-[#472f5b] hover:bg-[#D8B36B] hover:text-[#fffff0] hover:border-[#D8B36B] transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#472f5b]/20 flex items-center justify-center text-[#472f5b] hover:bg-[#D8B36B] hover:text-[#fffff0] hover:border-[#D8B36B] transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#472f5b]/20 flex items-center justify-center text-[#472f5b] hover:bg-[#D8B36B] hover:text-[#fffff0] hover:border-[#D8B36B] transition-all duration-300">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-light uppercase tracking-[0.2em] text-[10px] mb-6 text-[#b2893d]">Navegação</h4>
          <ul className="space-y-4 text-[#2a3a1e] text-xs font-normal tracking-wide">
            <li><Link to="/" className="hover:text-[#472f5b] hover:pl-2 transition-all duration-300 block">Início</Link></li>
            <li><Link to="/gestao-financeira" className="hover:text-[#472f5b] hover:pl-2 transition-all duration-300 block">Gestão Financeira</Link></li>
            <li><Link to="/consultoria" className="hover:text-[#472f5b] hover:pl-2 transition-all duration-300 block">Consultoria</Link></li>
            <li><a href="/#contato" className="hover:text-[#472f5b] hover:pl-2 transition-all duration-300 block">Fale Conosco</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-light uppercase tracking-[0.2em] text-[10px] mb-6 text-[#b2893d]">Soluções</h4>
          <ul className="space-y-4 text-[#2a3a1e] text-xs font-normal tracking-wide">
            <li><Link to="/gestao-financeira" className="hover:text-[#472f5b] hover:pl-2 transition-all duration-300 block">BPO Financeiro</Link></li>
            <li><Link to="/consultoria" className="hover:text-[#472f5b] hover:pl-2 transition-all duration-300 block">Consultoria Estratégica</Link></li>
            <li><Link to="/consultoria" className="hover:text-[#472f5b] hover:pl-2 transition-all duration-300 block">Diagnóstico Financeiro</Link></li>
            <li><Link to="/gestao-financeira" className="hover:text-[#472f5b] hover:pl-2 transition-all duration-300 block">Análise de Dados</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-light uppercase tracking-[0.2em] text-[10px] mb-6 text-[#b2893d]">Contato</h4>
          <ul className="space-y-4 text-[#2a3a1e] text-xs font-normal tracking-wide">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#b2893d] shrink-0" />
              <a href="mailto:contato@favogestao.com.br" className="hover:text-[#472f5b] transition-colors">contato@favogestao.com.br</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#b2893d] shrink-0" />
              <a href="tel:+5511999999999" className="hover:text-[#472f5b] transition-colors">+55 (11) 99999-9999</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#b2893d] shrink-0" />
              <span>Av. Paulista, 1000 - SP</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-[#472f5b]/10 text-[10px] uppercase tracking-widest text-[#2a3a1e] flex flex-col md:flex-row justify-between items-center gap-4 font-light">
        <p>&copy; {new Date().getFullYear()} Favo Gestão Financeira. Todos os direitos reservados.</p>
        <p>CNPJ: 00.000.000/0001-00</p>
      </div>
    </footer>
  );
}
