import { Instagram, ArrowUpRight } from "lucide-react";
import post1Img from "../assets/instagram/post1.jpg";
import post2Img from "../assets/instagram/post2.jpg";
import post3Img from "../assets/instagram/post3.jpg";
import post4Img from "../assets/instagram/post4.jpg";

interface InstagramPost {
  id: number;
  image: string;
  link: string;
  title: string;
  alt: string;
}

const posts: InstagramPost[] = [
  {
    id: 1,
    image: post1Img,
    link: "https://instagram.com/favogestaofinanceira",
    title: "O que Marcelo Távola, Bárbara Bruna, Micha Menezes e a Favo têm em comum?",
    alt: "Post Favo - O que grandes nomes do mercado têm em comum com a Favo",
  },
  {
    id: 2,
    image: post2Img,
    link: "https://instagram.com/favogestaofinanceira",
    title: "3 erros financeiros que travam seu crescimento",
    alt: "Post Favo - 3 erros financeiros que travam o crescimento do seu negócio",
  },
  {
    id: 3,
    image: post3Img,
    link: "https://instagram.com/favogestaofinanceira",
    title: "Aqui, a gente não trabalha com achismo",
    alt: "Post Favo - Gestão baseada em dados: achismo não constrói margem",
  },
  {
    id: 4,
    image: post4Img,
    link: "https://instagram.com/favogestaofinanceira",
    title: "A diferença entre quem fatura 7 dígitos e quem trava nos 6",
    alt: "Post Favo - A verdadeira diferença do fluxo de caixa inteligente",
  },
];

export default function InstagramFeed() {
  return (
    <section id="instagram-feed" className="py-24 border-t border-[#111827]/10 bg-[#FAF9F5] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header Editorial */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#D97706] font-mono block mb-3">
              COMUNIDADE & BASTIDORES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#111827] tracking-tight leading-[1.2]">
              Acompanhe a Favo no <span className="italic font-medium text-[#D97706]">Instagram</span>
            </h2>
            <p className="text-[#4B5262] text-sm sm:text-base font-normal mt-3">
              Bastidores, análises financeiras práticas e dicas de gestão de alto nível para empresários.
            </p>
          </div>

          <a 
            href="https://instagram.com/favogestaofinanceira" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#111827]/15 bg-[#FFFFFF] text-[#111827] text-xs font-medium uppercase tracking-[0.15em] hover:bg-[#111827] hover:text-[#FAF9F5] hover:border-[#111827] transition-all duration-300 shadow-sm"
          >
            <div className="w-6 h-6 rounded-full bg-[#D97706]/10 flex items-center justify-center text-[#D97706] group-hover:bg-[#D97706] group-hover:text-[#FAF9F5] transition-colors duration-300">
              <Instagram className="w-3.5 h-3.5" />
            </div>
            <span>@favogestaofinanceira</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#4B5262] group-hover:text-[#FAF9F5] transition-colors duration-300" />
          </a>
        </div>

        {/* Curated Static Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a 
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm hover:shadow-xl transition-all duration-500 block"
            >
              <img 
                src={post.image} 
                alt={post.alt} 
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Elegant Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-[#111827]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 flex items-center justify-center text-[#FAF9F5] mb-3 transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <Instagram className="w-6 h-6 text-[#D97706]" />
                </div>
                <p className="text-white text-xs font-serif font-light mb-3 max-w-[220px] line-clamp-2 leading-relaxed">
                  {post.title}
                </p>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#FAF9F5] flex items-center gap-1.5 bg-[#FFFFFF]/10 px-3.5 py-1.5 rounded-full border border-white/15">
                  Ver no Instagram
                  <ArrowUpRight className="w-3 h-3 text-[#D97706]" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
