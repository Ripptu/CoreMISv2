import React from 'react';
import { ArrowUp, Mail, Linkedin, Twitter } from 'lucide-react';

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
    <footer id="kontakt" className="bg-white border-t border-border">
      
      {/* Newsletter Strip */}
      <div className="bg-primary py-12 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-white">
             <h3 className="text-xl font-bold mb-1">Immer informiert bleiben.</h3>
             <p className="text-slate-400 text-sm">Release-Updates & CFO Insights direkt in Ihr Postfach.</p>
           </div>
           <div className="flex w-full md:w-auto gap-2">
             <input 
               type="email" 
               placeholder="Ihre E-Mail Adresse" 
               className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-accent-orange w-full md:w-80"
             />
             <button className="bg-accent-orange hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-bold transition-colors">
               Anmelden
             </button>
           </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
           
           {/* Brand & Logo */}
           <div className="col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 relative">
                   <img 
                     src="https://i.postimg.cc/c1F6x2bJ/6aeba13c-44fb-40da-a15c-6a534a48ab66.png" 
                     alt="CoreMIS Logo" 
                     className="w-full h-full object-contain"
                   />
                </div>
                <span className="font-bold text-2xl text-primary">CoreMIS</span>
             </div>
             <p className="text-sm text-secondary leading-relaxed mb-6">
               Die intelligente Finanzsteuerung für den Mittelstand. Pragmatisch, sicher, skalierbar.
             </p>
             <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-secondary hover:text-accent-orange hover:bg-orange-50 transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-secondary hover:text-accent-orange hover:bg-orange-50 transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-secondary hover:text-accent-orange hover:bg-orange-50 transition-colors">
                  <Mail size={18} />
                </button>
             </div>
           </div>

           {/* Navigation Links (Matching Navbar) */}
           <div className="col-span-1 md:col-span-2">
             <h4 className="font-bold text-primary mb-6">Navigation</h4>
             <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3 text-sm text-secondary">
                  <li><button onClick={() => handleNav('top')} className="hover:text-accent-orange transition-colors">Home</button></li>
                  <li><button onClick={() => handleNav('loesungen')} className="hover:text-accent-orange transition-colors">Lösungen</button></li>
                  <li><button onClick={() => handleNav('funktionsweise')} className="hover:text-accent-orange transition-colors">Funktionsweise</button></li>
                  <li><button onClick={() => handleNav('roi')} className="hover:text-accent-orange transition-colors">ROI Rechner</button></li>
                </ul>
                <ul className="space-y-3 text-sm text-secondary">
                  <li><button onClick={() => handleNav('preise')} className="hover:text-accent-orange transition-colors">Preise & Pakete</button></li>
                  <li><button onClick={() => handleNav('sicherheit')} className="hover:text-accent-orange transition-colors">Sicherheit</button></li>
                  <li><button onClick={() => handleNav('faq')} className="hover:text-accent-orange transition-colors">FAQ</button></li>
                </ul>
             </div>
           </div>

           {/* Legal */}
           <div>
             <h4 className="font-bold text-primary mb-6">Rechtliches</h4>
             <ul className="space-y-3 text-sm text-secondary">
               <li><button onClick={() => onOpenLegal('impressum')} className="hover:text-accent-orange transition-colors">Impressum</button></li>
               <li><button onClick={() => onOpenLegal('datenschutz')} className="hover:text-accent-orange transition-colors">Datenschutz</button></li>
               <li><button onClick={() => onOpenLegal('agb')} className="hover:text-accent-orange transition-colors">AGB (EULA)</button></li>
             </ul>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-secondary font-medium flex items-center gap-2">
            © {new Date().getFullYear()} CoreMIS GmbH. 
            <span className="flex items-center gap-1 ml-4 text-xs bg-surface px-2 py-1 rounded border border-border">
               Swiss Quality Standards <div className="w-3 h-3 bg-red-600 rounded-sm relative flex items-center justify-center text-white text-[8px] font-bold">+</div>
            </span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-accent-orange transition-colors"
          >
            Nach oben <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};