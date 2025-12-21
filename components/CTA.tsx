import React from 'react';
import { ArrowRight, Power } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-darkbg text-center">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 md:h-20 bg-gradient-to-b from-transparent to-white/20"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="inline-flex justify-center mb-6 md:mb-8">
           <Power size={48} className="text-white opacity-90 w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
        </div>

        <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-none">
          Turn CoreMIS <span className="italic text-slate-500">on.</span>
        </h2>
        
        <p className="text-2xl md:text-4xl font-serif text-slate-400 italic mb-10 md:mb-12">
          Wake up to revenue.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="bg-primary hover:bg-black text-white px-10 py-5 rounded-full text-lg font-medium transition-all shadow-glow hover:scale-105 flex items-center gap-3 border border-white/10 w-full sm:w-auto justify-center">
            Activate CoreMIS
          </button>
          <button className="text-white hover:text-accent-orange transition-colors flex items-center gap-2 text-sm font-medium">
            Read the manifesto <ArrowRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Bottom Circle Crop Illusion */}
      <div className="absolute -bottom-[50vw] left-1/2 -translate-x-1/2 w-[100vw] h-[50vw] bg-white opacity-5 rounded-t-full blur-3xl pointer-events-none"></div>
    </section>
  );
};