import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  const handleNav = (target: string) => {
    window.dispatchEvent(new CustomEvent('smooth-scroll-to', { detail: { target: target } }));
  };

  return (
    <section className="relative pt-10 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-surface rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 -z-10 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent-orange/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          
          {/* Centered Text Content */}
          <div className="w-full max-w-4xl text-center z-10">
            <RevealOnScroll>
              
              {/* Large Logo - Adjusted to approx 3x original size */}
              <div className="mb-12 flex justify-center">
                <img 
                  src="https://i.postimg.cc/BnmkN7h0/logo-mit-text-PNG.png" 
                  alt="CoreMIS Logo" 
                  className="h-32 md:h-[340px] w-auto object-contain max-w-full"
                />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.05] tracking-tight mb-8">
                CFO-Transparenz <br/>
                in <span className="relative inline-block px-2">
                  <span className="relative z-10 font-serif italic text-primary">4 Wochen.</span>
                  {/* Bolder, organic marker background */}
                  <svg 
                    className="absolute left-0 bottom-1 w-full h-[0.6em] -z-10 text-accent-orange" 
                    viewBox="0 0 100 20" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0 12C15 8 35 5 50 8C65 11 85 10 100 6" 
                      stroke="currentColor" 
                      strokeWidth="12" 
                      fill="none" 
                      strokeLinecap="round" 
                      className="opacity-90"
                    />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-secondary leading-relaxed mb-10 max-w-xl mx-auto font-medium">
                Planen, Steuern und Konsolidieren ohne ERP-Großprojekt. 
                Verwandeln Sie Ihre Finanzdaten von statischen Tabellen in eine dynamische Steuerungszentrale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full items-center">
                 <button 
                   onClick={() => handleNav('demo')}
                   className="btn-core px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-orange hover:shadow-lg transition-all"
                 >
                   Demo vereinbaren <ArrowRight size={20} />
                 </button>
                 <button 
                   onClick={() => handleNav('timeline')}
                   className="px-8 py-4 rounded-xl font-bold text-primary hover:bg-surface transition-all flex items-center gap-2"
                 >
                   Zum 4-Wochen Plan
                 </button>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};