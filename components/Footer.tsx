import React from 'react';
import { ArrowUp, Mail, Linkedin, Twitter, Shield, Flag } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (page: 'impressum' | 'datenschutz' | 'agb') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  
  const scrollToTop = () => {
    const event = new CustomEvent('smooth-scroll-to', { detail: { target: 'top' } });
    window.dispatchEvent(event);
  };

  return (
    <footer className="bg-white border-t border-border">
      
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
           
           {/* Brand */}
           <div className="col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                   <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                </div>
                <span className="font-bold text-xl text-primary">CoreMIS</span>
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
             </div>
           </div>

           {/* Links */}
           <div>
             <h4 className="font-bold text-primary mb-6">Produkt</h4>
             <ul className="space-y-3 text-sm text-secondary">
               <li><button onClick={() => window.dispatchEvent(new CustomEvent('smooth-scroll-to', { detail: { target: 'produkt' } }))} className="hover:text-accent-orange transition-colors">Features</button></li>
               <li><button onClick={() => window.dispatchEvent(new CustomEvent('smooth-scroll-to', { detail: { target: 'preise' } }))} className="hover:text-accent-orange transition-colors">Preise</button></li>
               <li><button className="hover:text-accent-orange transition-colors">Sicherheit</button></li>
               <li><button className="hover:text-accent-orange transition-colors">Changelog</button></li>
             </ul>
           </div>

           <div>
             <h4 className="font-bold text-primary mb-6">Unternehmen</h4>
             <ul className="space-y-3 text-sm text-secondary">
               <li><button className="hover:text-accent-orange transition-colors">Über uns</button></li>
               <li><button className="hover:text-accent-orange transition-colors">Karriere</button></li>
               <li><button className="hover:text-accent-orange transition-colors">Partner</button></li>
               <li><button className="hover:text-accent-orange transition-colors">Kontakt</button></li>
             </ul>
           </div>

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