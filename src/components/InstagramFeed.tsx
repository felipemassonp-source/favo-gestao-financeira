import { useRef } from "react";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  const posts = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1554415707-6e8cfc938c22?auto=format&fit=crop&q=80&w=500&h=500",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500&h=500",
      likes: 89,
      comments: 5
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=500&h=500",
      likes: 256,
      comments: 42
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=500&h=500",
      likes: 145,
      comments: 12
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=500&h=500",
      likes: 198,
      comments: 27
    }
  ];

  useGSAP(() => {
    const headerElements = gsap.utils.toArray('.insta-header > *');
    const postsElements = gsap.utils.toArray('.insta-post');

    gsap.from(headerElements, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });

    gsap.from(postsElements, {
      scrollTrigger: {
        trigger: ".insta-grid",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 border-t border-[#472f5b]/10 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="insta-header flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-[#D8B36B] p-1 flex items-center justify-center bg-[#fffff0]">
              <Instagram className="w-6 h-6 text-[#b2893d]" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-light text-[#472f5b] tracking-wider uppercase">@favogestao</h2>
              <p className="text-sm font-normal text-[#2a3a1e] tracking-wide mt-2">Dicas, bastidores e inteligência financeira.</p>
            </div>
          </div>
          <a 
            href="https://instagram.com/favogestao" 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#472f5b]/20 px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-light text-[#472f5b] hover:border-[#D8B36B] hover:text-[#b2893d] transition-colors rounded-full"
          >
            Seguir no Instagram
          </a>
        </div>

        {/* Feed Grid */}
        <div className="insta-grid grid grid-cols-2 md:grid-cols-5 gap-4">
          {posts.map((post) => (
            <a 
              key={post.id}
              href="https://instagram.com/favogestao"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-post group relative aspect-square bg-[#fffff0] overflow-hidden block"
            >
              <img 
                src={post.img} 
                alt="Favo Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#472f5b]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 text-[#fffff0]">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="text-sm font-normal">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-[#fffff0]">
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span className="text-sm font-normal">{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
