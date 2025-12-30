import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  const handleNav = (target: string) => {
    window.dispatchEvent(new CustomEvent('smooth-scroll-to', { detail: { target: target } }));
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-surface rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 -z-10 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent-orange/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          
          {/* Centered Text Content */}
          <div className="w-full max-w-4xl text-center z-10">
            <RevealOnScroll>
              
              {/* Large Logo */}
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
                  
                  {/* Dynamic Brush Stroke: Precisely positioned behind text */}
                  <svg 
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] -z-10 text-accent-orange overflow-visible" 
                    viewBox="0 0 200 60" 
                    preserveAspectRatio="none"
                  >
                    {/* Path: Starts thick (left), curves naturally, ends thin (right). Positioned to hit the visual center of text. */}
                    <path 
                      d="M5,45 Q90,25 190,35 L195,30 Q90,15 5,35 Z" 
                      fill="currentColor"
                      opacity="0.9"
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