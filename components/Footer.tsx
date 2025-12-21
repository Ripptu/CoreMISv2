import React from 'react';
import { ArrowUp, Twitter, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (page: 'impressum' | 'datenschutz') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  
  const scrollToTop = () => {
    // Dispatch custom event for App.tsx (GSAP) to handle
    const event = new CustomEvent('smooth-scroll-to', { detail: { target: 'top' } });
    window.dispatchEvent(event);
  };

  return (
    <footer className="bg-background text-primary pt-24 pb-12 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Row */}
        <div className="flex justify-between items-center mb-20 md:mb-32">
          <div className="text-sm font-medium tracking-tight">
            © {new Date().getFullYear()} CoreMIS
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider group hover:text-accent-orange transition-colors"
          >
            Back to top
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-accent-orange transition-colors">
              <ArrowUp size={20} />
            </div>
          </button>
        </div>

        {/* Big Typography CTA */}
        <div className="mb-24 md:mb-40">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-8">Have a project in mind?</div>
          <h2 className="text-[14vw] leading-[0.8] font-serif font-medium tracking-tighter text-primary">
            LET'S <span className="text-accent-orange italic">TALK</span>
          </h2>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-t border-border pt-12">
          
          {/* Social Pills */}
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <button className="h-14 px-8 rounded-full border border-border text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all">
              LinkedIn
            </button>
            <button className="h-14 px-8 rounded-full border border-border text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all">
              Twitter
            </button>
            <button className="h-14 px-8 rounded-full border border-border text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all">
              Email
            </button>
          </div>

          {/* Legal / Credits */}
          <div className="text-left md:text-right text-xs text-secondary space-y-2 w-full md:w-auto">
             <div className="flex gap-6 md:justify-end mb-2 font-bold text-primary">
                <button onClick={() => onOpenLegal('datenschutz')} className="hover:text-accent-orange transition-colors uppercase">Datenschutz</button>
                <button onClick={() => onOpenLegal('impressum')} className="hover:text-accent-orange transition-colors uppercase">Impressum</button>
             </div>
             <p className="opacity-60">Designed & Developed for Finance Leaders.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};