import React from 'react';
import { ArrowUp, Mail, Linkedin, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface FooterProps {
  onOpenLegal: (page: 'impressum' | 'datenschutz' | 'agb' | 'haftung' | 'urheberrecht') => void;
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
               <h3 className="text-xl font-bold mb-6">CoreMIS Insights</h3>
               
               <div className="flex flex-col sm:flex-row gap-3">
                 <input 
                   type="email" 
                   placeholder="ihre@email.com" 
                   className="flex-1 bg-black/30 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-accent-orange/50 transition-all"
                 />
                 <a 
                   href="mailto:info@coremis.ch?subject=Anmeldung%20CoreMIS%20Insights%20Newsletter"
                   className="bg-accent-orange hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-glow hover:scale-105 flex items-center justify-center gap-2 group text-center"
                 >
                   Anmelden <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* MIDDLE SECTION: NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 mb-20">
           
           {/* Column 1: Brand (4 cols) */}
           <div className="lg:col-span-4">
             <RevealOnScroll delay={200}>
               <div className="flex items-center gap-3 mb-6">
                  {/* Logo text */}
                  <span className="font-bold text-2xl tracking-tight">CoreMIS</span>
               </div>
               <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
                 Die cloudbasierte SaaS-Software für pragmatische CFO-Transparenz – Plan- und Istwerte plus MIS in einer betrieblichen Steuerungssicht.
               </p>
               
               {/* Socials */}
               <div className="flex gap-4">
                  {[Linkedin, Mail].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-accent-orange hover:border-accent-orange transition-all duration-300">
                      <Icon size={18} />
                    </button>
                  ))}
               </div>
             </RevealOnScroll>
           </div>

           {/* Column 2: SaaS Lösung (3 cols) */}
           <div className="lg:col-span-3 lg:col-start-6">
             <RevealOnScroll delay={300}>
               <h4 className="font-bold text-white mb-6 text-lg">SaaS Lösung</h4>
               <ul className="space-y-4 text-sm text-slate-400">
                 <li><button className="hover:text-accent-orange transition-colors">Release Updates</button></li>
                 <li><button onClick={() => handleNav('preise')} className="hover:text-accent-orange transition-colors">Lizenzkalkulator</button></li>
                 <li><button onClick={() => handleNav('roi')} className="hover:text-accent-orange transition-colors">Einführungspakete</button></li>
                 <li><button onClick={() => handleNav('roi')} className="hover:text-accent-orange transition-colors">ROI Rechner</button></li>
                 <li><button onClick={() => handleNav('faq')} className="hover:text-accent-orange transition-colors">Häufige Fragen (FAQs)</button></li>
               </ul>
             </RevealOnScroll>
           </div>

           {/* Column 3: Disclaimer / Impressum (3 cols) */}
           <div className="lg:col-span-3">
             <RevealOnScroll delay={400}>
               <h4 className="font-bold text-white mb-6 text-lg">Disclaimer</h4>
               <ul className="space-y-4 text-sm text-slate-400">
                 <li className="font-bold text-white">COREMIS GmbH</li>
                 <li>Geschäftsführer: <br/><span className="text-white">lic.oec. Erich Meyer</span></li>
                 <li>Geschäftsadresse: <br/><span className="text-white">Im Buck 3, CH-8196 Wil ZH</span></li>
                 <li>
                   <a href="mailto:info@coremis.ch" className="text-white hover:text-accent-orange">info@coremis.ch</a>
                 </li>
                 <li>CHE-Nummer: <br/><span className="text-white">CHE-291.947.911</span></li>
                 
                 {/* Disclaimer Links */}
                 <li className="pt-4 flex flex-col gap-2">
                   <button onClick={() => onOpenLegal('haftung')} className="text-left text-white hover:text-accent-orange transition-colors">
                     Haftung für Links
                   </button>
                   <button onClick={() => onOpenLegal('urheberrecht')} className="text-left text-white hover:text-accent-orange transition-colors">
                     Urheberrechte
                   </button>
                 </li>

                 {/* Legal Documents (Popups) */}
                 <li className="pt-4 flex flex-col gap-2">
                    <button 
                      onClick={() => onOpenLegal('agb')}
                      className="text-left text-white hover:text-accent-orange transition-colors"
                    >
                      Endbenutzer Lizenzvereinbarung (EULA)
                    </button>
                    <button 
                      onClick={() => onOpenLegal('datenschutz')}
                      className="text-left text-white hover:text-accent-orange transition-colors"
                    >
                      Datenschutzerklärung (DSGVO)
                    </button>
                 </li>
               </ul>
             </RevealOnScroll>
           </div>
        </div>

        {/* BOTTOM BAR & STATUS */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          <div className="flex flex-col gap-2">
            <div className="text-sm text-slate-500 font-medium">
              © {new Date().getFullYear()} CoreMIS GmbH.
            </div>
            
            <div className="flex gap-4 text-xs text-slate-600">
               <button onClick={() => onOpenLegal('datenschutz')} className="hover:text-slate-400 transition-colors">Datenschutz</button>
               <button onClick={() => onOpenLegal('agb')} className="hover:text-slate-400 transition-colors">AGB</button>
               <button onClick={() => onOpenLegal('impressum')} className="hover:text-slate-400 transition-colors">Impressum</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
             
             {/* Status Box Compact */}
             <div className="bg-[#131825] rounded-lg px-4 py-2 border border-white/5 flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider leading-none mb-0.5">Systems Operational</span>
                   <span className="text-[9px] text-slate-500 flex items-center gap-1"><ShieldCheck size={8} /> ISO 27001 Certified</span>
                </div>
             </div>

             {/* Swiss Made Badge */}
             <div className="hidden md:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                <span className="text-red-500 text-lg font-bold leading-none">+</span>
                <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">Swiss Quality</span>
             </div>

             <button 
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-accent-orange text-white flex items-center justify-center hover:bg-accent-hover hover:-translate-y-1 transition-all shadow-glow ml-auto md:ml-0"
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