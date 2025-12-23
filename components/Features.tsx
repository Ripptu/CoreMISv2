import React, { useRef, useState } from 'react';
import { Search, Zap, SlidersHorizontal, ArrowUpRight, BarChart2, Shield } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

// Lightweight Tilt Component
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    // Max Tilt: 2 degrees (Subtle)
    setRotation({ 
      x: y * -2, 
      y: x * 2 
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
    >
      {children}
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="text-accent-orange text-xs font-bold tracking-[0.2em] uppercase mb-4">The Growth Narrative</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vom ersten Klick <br/>
              bis <span className="text-accent-orange">für immer.</span>
            </h2>
            <p className="text-white/60 max-w-lg mx-auto font-medium">
              CoreMIS ist nicht nur ein Dashboard. Es ist eine Engine, die mit Ihrem Kundenstamm wächst.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(250px,auto)] gap-4 md:gap-6">

          {/* Item 1: Large Wide (Transparenz) */}
          <TiltCard className="md:col-span-4 rounded-3xl bg-[#121212] border border-white/5 overflow-hidden relative group hover:border-white/20 hover:shadow-glow transition-all duration-500 shadow-xl">
             <RevealOnScroll delay={100} width="100%">
               <div className="p-6 md:p-8 h-full flex flex-col justify-between relative z-10 min-h-[280px]">
                 <div className="flex justify-between items-start">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-orange group-hover:scale-110 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                     <Search className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <span className="text-white/10 font-bold text-3xl md:text-4xl group-hover:text-white/30 transition-colors">01</span>
                 </div>
                 <div className="mt-8 max-w-md">
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Transparenz Engine</h3>
                   <p className="text-white/50 text-sm leading-relaxed font-medium">
                     Klare, konsolidierte Zahlen über alle Ebenen hinweg. Keine Blackbox mehr. Wir mappen Ihre Daten live und zeigen Anomalien sofort auf.
                   </p>
                 </div>
               </div>
               {/* Abstract Visual Background */}
               <div className="absolute right-[-10%] bottom-[-20%] w-[300px] h-[300px] bg-gradient-orange opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
             </RevealOnScroll>
          </TiltCard>

          {/* Item 2: Tall Vertical (Support) */}
          <TiltCard className="md:col-span-2 md:row-span-2 rounded-3xl bg-[#121212] border border-white/5 overflow-hidden relative group hover:border-white/20 hover:shadow-glow transition-all duration-500 shadow-xl">
             <RevealOnScroll delay={200} width="100%">
               <div className="p-6 md:p-8 h-full flex flex-col relative z-10 min-h-[300px]">
                 <div className="flex justify-between items-start mb-auto">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-orange group-hover:scale-110 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                     <SlidersHorizontal className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <span className="text-white/10 font-bold text-3xl md:text-4xl group-hover:text-white/30 transition-colors">03</span>
                 </div>
                 
                 {/* Visual Representation of Support/Chat */}
                 <div className="my-8 space-y-3">
                    <div className="bg-white/5 p-3 rounded-lg rounded-tl-none border border-white/5 text-xs text-white/70">
                       Wie hoch ist der Umsatz YTD?
                    </div>
                    <div className="bg-accent-orange p-3 rounded-lg rounded-tr-none text-xs text-white ml-8 shadow-glow">
                       € 2.4M (+12% vs. LY)
                    </div>
                 </div>

                 <div>
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Support & Erfolg</h3>
                   <p className="text-white/50 text-sm leading-relaxed font-medium">
                     CoreMIS erkennt Risiken, beantwortet Fragen mit Kontext und eskaliert komplexe Themen an echte Experten.
                   </p>
                 </div>
               </div>
             </RevealOnScroll>
          </TiltCard>

          {/* Item 3: Small Square (Visual/Metric) */}
          <TiltCard className="md:col-span-2 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-black border border-white/5 overflow-hidden relative group shadow-xl hover:border-white/20 hover:shadow-glow transition-all">
             <RevealOnScroll delay={300} width="100%">
               <div className="p-6 md:p-8 h-full min-h-[180px] flex flex-col items-center justify-center text-center">
                 <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                    4<span className="text-accent-orange">x</span>
                 </div>
                 <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Schnelleres Reporting</p>
               </div>
             </RevealOnScroll>
          </TiltCard>

          {/* Item 4: Small Square (Visual/Metric) */}
          <TiltCard className="md:col-span-2 rounded-3xl bg-[#121212] border border-white/5 overflow-hidden relative group hover:border-white/20 hover:shadow-glow transition-all shadow-xl">
            <RevealOnScroll delay={400} width="100%">
               <div className="p-6 md:p-8 h-full min-h-[180px] flex flex-col justify-between">
                 <Shield className="text-white/40 group-hover:text-accent-orange transition-colors w-8 h-8 md:w-10 md:h-10" />
                 <div className="flex items-end justify-between mt-4">
                    <span className="text-white/50 text-sm font-medium">Datensicherheit</span>
                    <ArrowUpRight className="text-accent-orange opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                 </div>
               </div>
            </RevealOnScroll>
          </TiltCard>

          {/* Item 5: Wide Bottom (Aktivierung) */}
          <TiltCard className="md:col-span-4 rounded-3xl bg-[#121212] border border-white/5 overflow-hidden relative group hover:border-white/20 hover:shadow-glow transition-all duration-500 shadow-xl">
             <RevealOnScroll delay={500} width="100%">
               <div className="p-6 md:p-8 h-full flex flex-col md:flex-row items-center gap-8 relative z-10">
                 <div className="flex-1 w-full">
                   <div className="flex justify-between items-start mb-6">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-orange group-hover:scale-110 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                       <Zap className="w-5 h-5 md:w-6 md:h-6" />
                     </div>
                     <span className="text-white/10 font-bold text-3xl md:text-4xl group-hover:text-white/30 transition-colors">02</span>
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Sofortige Aktivierung</h3>
                   <p className="text-white/50 text-sm leading-relaxed font-medium">
                     Nach dem Mapping wird CoreMIS zum analytischen Partner. Leitet User durch Onboarding und eliminiert Setup-Frust.
                   </p>
                 </div>
                 
                 {/* Visual: Progress Bar */}
                 <div className="flex-1 w-full bg-black/40 p-6 rounded-2xl border border-white/5">
                    <div className="flex justify-between text-xs text-white mb-2">
                       <span className="font-bold tracking-wider">Setup Progress</span>
                       <span className="text-accent-orange">100%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-accent-orange w-full rounded-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                    <div className="mt-4 flex gap-2">
                       <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 text-xs">✓</div>
                       <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 text-xs">✓</div>
                       <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 text-xs">✓</div>
                    </div>
                 </div>
               </div>
             </RevealOnScroll>
          </TiltCard>

        </div>
      </div>
    </section>
  );
};