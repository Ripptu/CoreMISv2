import React from 'react';
import { ArrowUp, Mail, Linkedin, Twitter, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface FooterProps {
  onOpenLegal: (page: 'impressum' | 'datenschutz' | 'agb') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  
  const scrollToTop = () => {
    const event = new CustomEvent('smooth-scroll-to', { detail: { target: 'top' } });
    window.dispatchEvent(event);
  };

  const handleNav = (target: string) => {
    window.dispatchEvent(new CustomEvent('smooth-scroll-to', { detail: { target: target } }));
  };

  return (
    <footer id="kontakt" className="bg-[#0B0F19] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      
      {/* 1. DECORATIVE BACKGROUND TYPOGRAPHY */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="text-[18vw] font-bold text-white/[0.02] leading-none font-serif tracking-tighter whitespace-nowrap">
          COREMIS
        </span>
      </div>

      {/* 2. GLOW EFFECTS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: CTA & NEWSLETTER */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 border-b border-white/10 pb-16">
          <RevealOnScroll>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Finanzsteuerung. <br/>
                <span className="text-accent-orange font-serif italic">Neu gedacht.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md">
                Keine Excel-Tapeten mehr. Holen Sie sich die Klarheit, die Ihr Unternehmen verdient. Starten Sie noch heute.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
               <h3 className="text-xl font-bold mb-2">CFO Insights Newsletter</h3>
               <p className="text-slate-400 text-sm mb-6">Updates zu Finance-Tech, Benchmarks & Features.</p>
               
               <div className="flex flex-col sm:flex-row gap-3">
                 <input 
                   type="email" 
                   placeholder="ihre@email.com" 
                   className="flex-1 bg-black/30 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-accent-orange/50 transition-all"
                 />
                 <button className="bg-accent-orange hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-glow hover:scale-105 flex items-center justify-center gap-2 group">
                   Anmelden <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* MIDDLE SECTION: NAVIGATION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 md:gap-8 mb-20">
           
           {/* Column 1: Brand (4 cols) */}
           <div className="col-span-2 lg:col-span-4">
             <RevealOnScroll delay={200}>
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-lg flex items-center justify-center">
                     <span className="font-bold text-accent-orange text-xl">C</span>
                  </div>
                  <span className="font-bold text-2xl tracking-tight">CoreMIS</span>
               </div>
               <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
                 Die intelligente Finanzsteuerung für den Mittelstand. Entwickelt in der Schweiz für höchste Ansprüche an Präzision und Sicherheit.
               </p>
               
               {/* Socials */}
               <div className="flex gap-4">
                  {[Linkedin, Twitter, Mail].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-accent-orange hover:border-accent-orange transition-all duration-300">
                      <Icon size={18} />
                    </button>
                  ))}
               </div>
             </RevealOnScroll>
           </div>

           {/* Column 2: Product (2 cols) */}
           <div className="col-span-1 lg:col-span-2">
             <RevealOnScroll delay={300}>
               <h4 className="font-bold text-white mb-6">Produkt</h4>
               <ul className="space-y-4 text-sm text-slate-400">
                 <li><button onClick={() => handleNav('loesungen')} className="hover:text-accent-orange transition-colors">Lösungen</button></li>
                 <li><button onClick={() => handleNav('funktionsweise')} className="hover:text-accent-orange transition-colors">Funktionsweise</button></li>
                 <li><button onClick={() => handleNav('preise')} className="hover:text-accent-orange transition-colors">Preise & Pakete</button></li>
                 <li><button onClick={() => handleNav('sicherheit')} className="hover:text-accent-orange transition-colors">Sicherheit</button></li>
               </ul>
             </RevealOnScroll>
           </div>

           {/* Column 3: Resources (2 cols) */}
           <div className="col-span-1 lg:col-span-2">
             <RevealOnScroll delay={400}>
               <h4 className="font-bold text-white mb-6">Ressourcen</h4>
               <ul className="space-y-4 text-sm text-slate-400">
                 <li><button onClick={() => handleNav('roi')} className="hover:text-accent-orange transition-colors">ROI Rechner</button></li>
                 <li><button onClick={() => handleNav('faq')} className="hover:text-accent-orange transition-colors">Häufige Fragen</button></li>
                 <li><button className="hover:text-accent-orange transition-colors flex items-center gap-2">API Docs <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white">Soon</span></button></li>
                 <li><button className="hover:text-accent-orange transition-colors">Changelog</button></li>
               </ul>
             </RevealOnScroll>
           </div>

           {/* Column 4: Legal & Status (4 cols) */}
           <div className="col-span-2 lg:col-span-4 lg:pl-12">
             <RevealOnScroll delay={500}>
               <div className="bg-[#131825] rounded-2xl p-6 border border-white/5">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </div>
                    <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">All Systems Operational</span>
                 </div>
                 
                 <div className="space-y-3 text-sm text-slate-400 mb-6">
                   <button onClick={() => onOpenLegal('datenschutz')} className="block hover:text-white transition-colors">Datenschutz (DPA)</button>
                   <button onClick={() => onOpenLegal('agb')} className="block hover:text-white transition-colors">AGB & EULA</button>
                   <button onClick={() => onOpenLegal('impressum')} className="block hover:text-white transition-colors">Impressum</button>
                 </div>

                 <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <ShieldCheck size={16} className="text-slate-500" />
                    <span className="text-xs text-slate-500">ISO 27001 Certified Data Center</span>
                 </div>
               </div>
             </RevealOnScroll>
           </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
          
          <div className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} CoreMIS GmbH.
          </div>

          <div className="flex items-center gap-6">
             {/* Swiss Made Badge */}
             <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                <span className="text-red-500 text-lg font-bold leading-none">+</span>
                <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">Swiss Quality</span>
             </div>

             <button 
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-accent-orange text-white flex items-center justify-center hover:bg-accent-hover hover:-translate-y-1 transition-all shadow-glow"
                aria-label="Nach oben"
             >
                <ArrowUp size={20} strokeWidth={2.5} />
             </button>
          </div>

        </div>

      </div>
    </footer>
  );
};