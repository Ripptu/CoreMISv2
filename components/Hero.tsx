import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-10">
          
          {/* 1. Logo (Top & Much Bigger) */}
          <RevealOnScroll>
            <div className="relative flex justify-center items-center w-full">
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-gradient-radial from-slate-100 to-transparent blur-3xl -z-10"></div>
               
               <img 
                src="https://i.postimg.cc/MGW9YkZf/coremis.png" 
                alt="CoreMIS Logo" 
                className="w-full max-w-4xl object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700" 
              />
            </div>
          </RevealOnScroll>

          {/* 2. Text Content (Below) - Headline Removed, Subtitle Highlighted */}
          <RevealOnScroll delay={200}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              
              <p className="text-xl md:text-3xl text-primary font-medium leading-relaxed mb-10 max-w-2xl">
                CoreMIS ist die <span className="relative inline-block px-1">
                  Finanzsteuerung für den modernen Mittelstand
                  <span className="absolute bottom-1 left-0 w-full h-[0.35em] bg-accent-orange/20 -z-10 -rotate-1 rounded-sm"></span>
                </span>.
                <br className="hidden md:block" />
                <span className="text-secondary text-lg md:text-2xl mt-4 block">
                  Keine Excel-Tapeten mehr. Treffen Sie Entscheidungen basierend auf Echtzeit-Daten.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <button className="btn-core px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 text-lg group w-full sm:w-auto">
                  CoreMIS starten
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-lg font-semibold border border-border text-primary hover:bg-surface transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Play size={18} /> Demo ansehen
                </button>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};