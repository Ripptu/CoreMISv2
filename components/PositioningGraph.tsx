import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { CheckCircle2, Clock, TrendingDown, Unlock } from 'lucide-react';
import { motion } from 'framer-motion';

export const PositioningGraph: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Row: Title & Graph */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16">
          
          {/* Left: Title Text */}
          <RevealOnScroll>
            <div>
               <div className="text-accent-orange font-bold tracking-widest uppercase text-xs mb-6">
                  Der Sweet Spot
               </div>
               <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-[1.1]">
                 Professionelle Finanzsteuerung – <br />
                 <span className="relative inline-block px-2 z-10 mt-2">
                   <span className="font-serif italic font-bold relative z-10 text-primary">
                     schneller • pragmatischer • günstiger
                   </span>
                   {/* Image Brush Stroke */}
                   <img 
                     src="https://static.vecteezy.com/system/resources/thumbnails/049/161/109/small/orange-paint-brushstroke-with-transparent-background-perfect-for-designs-and-projects-png.png"
                     alt=""
                     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[160%] -z-10 object-fill opacity-90 mix-blend-multiply"
                   />
                 </span>
               </h2>
               
               <p className="text-lg text-primary font-medium border-l-4 border-accent-orange pl-4 py-1 mt-6">
                 CoreMIS liefert in kurzer Zeit CFO-Expertise zum fairen Preis.
               </p>
            </div>
          </RevealOnScroll>

          {/* Right: Graph Area */}
          <RevealOnScroll delay={200}>
            <div className="relative aspect-square md:aspect-[4/3] bg-surface rounded-[32px] border border-border p-8 md:p-12 flex items-center justify-center shadow-inner">
               
               {/* Coordinate System SVG */}
               <svg viewBox="0 0 400 400" className="w-full h-full text-slate-300 overflow-visible">
                  {/* Axes Lines */}
                  <line x1="40" y1="360" x2="380" y2="360" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                  <line x1="40" y1="360" x2="40" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                  
                  {/* Axis Arrows Definitions */}
                  <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                    </marker>
                  </defs>

                  {/* Axis Labels - BIGGER & ALIGNED */}
                  <text x="380" y="395" textAnchor="end" className="text-sm fill-secondary font-bold uppercase tracking-wider">Komplexität / Kosten</text>
                  
                  {/* Rotated Axis Label */}
                  <text 
                    transform="rotate(-90)" 
                    x="-20" 
                    y="15" 
                    textAnchor="end" 
                    className="text-sm fill-secondary font-bold uppercase tracking-wider"
                  >
                    Funktionsumfang / Value
                  </text>

                  {/* Competitor: Enterprise (Top Right) */}
                  <g className="opacity-60 hover:opacity-100 transition-opacity cursor-default">
                    <circle cx="340" cy="60" r="14" className="fill-slate-300" />
                    <text x="340" y="95" textAnchor="middle" className="text-base font-bold fill-slate-500">Enterprise Software</text>
                    <text x="340" y="115" textAnchor="middle" className="text-sm font-medium fill-slate-400">(teuer und träge)</text>
                  </g>

                  {/* Competitor: Excel (Bottom Right) */}
                  <g className="opacity-60 hover:opacity-100 transition-opacity cursor-default">
                    <circle cx="320" cy="340" r="14" className="fill-slate-300" />
                    <text x="320" y="305" textAnchor="middle" className="text-base font-bold fill-slate-500">Excel (manuell)</text>
                    <text x="320" y="325" textAnchor="middle" className="text-sm font-medium fill-slate-400">(fehleranfällig)</text>
                  </g>

                  {/* Competitor: Simple Tools (Bottom Left) */}
                  <g className="opacity-60 hover:opacity-100 transition-opacity cursor-default">
                    <circle cx="100" cy="300" r="14" className="fill-slate-300" />
                    <text x="100" y="335" textAnchor="middle" className="text-base font-bold fill-slate-500">Reine Reporting Tools</text>
                    <text x="100" y="355" textAnchor="middle" className="text-sm font-medium fill-slate-400">(zu eindimensional)</text>
                  </g>

                  {/* CoreMIS - Sweet Spot (Top Left) */}
                  <g className="cursor-pointer group">
                    {/* Animated Ripples */}
                    <motion.circle 
                      cx="100" cy="80" r="12" 
                      className="fill-accent-orange/30"
                      initial={{ opacity: 0, r: 10 }}
                      animate={{ opacity: [0, 0.5, 0], r: [10, 60] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.circle 
                      cx="100" cy="80" r="12" 
                      className="fill-accent-orange/20"
                      initial={{ opacity: 0, r: 10 }}
                      animate={{ opacity: [0, 0.4, 0], r: [10, 80] }}
                      transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
                    />
                    
                    {/* Core Pulse */}
                    <motion.circle 
                      cx="100" cy="80" r="14" 
                      className="fill-accent-orange shadow-lg" 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <text x="100" y="120" textAnchor="middle" className="text-lg font-bold fill-primary">CoreMIS</text>
                    <text x="100" y="140" textAnchor="middle" className="text-sm font-medium fill-accent-orange uppercase tracking-wide">The Sweet Spot</text>
                  </g>

                  {/* Grid Lines (Subtle) */}
                  <path d="M40 280 H380 M40 200 H380 M40 120 H380" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
                  <path d="M120 360 V20 M200 360 V20 M280 360 V20" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />
               </svg>

            </div>
          </RevealOnScroll>
        </div>

        {/* Bottom Row: 4 Points Split in 2 Columns */}
        <RevealOnScroll delay={300}>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Item 1 */}
              <div className="flex gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full bg-surface border border-slate-100 flex items-center justify-center text-accent-orange shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-colors">
                   <CheckCircle2 size={18} />
                </div>
                <div>
                   <h4 className="font-bold text-primary text-lg">Belastbare Zahlen statt Interpretationen.</h4>
                   <p className="text-sm text-secondary leading-relaxed mt-1">
                     Umsatz, GP, EBITDA, EBIT bis zum Unternehmensergebnis – klar, standardisiert und entscheidungsrelevant für Management und Kapitalgeber.
                   </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full bg-surface border border-slate-100 flex items-center justify-center text-accent-orange shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-colors">
                   <Clock size={18} />
                </div>
                <div>
                   <h4 className="font-bold text-primary text-lg">Einführung in Wochen statt Monaten.</h4>
                   <p className="text-sm text-secondary leading-relaxed mt-1">
                     <strong>Fast Track:</strong> 3-4 Wochen. <strong>Professional:</strong> 6-8 Wochen. <br/>
                     Schnell produktiv und sofort nutzbar, ohne jahrelange IT-Projekte.
                   </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full bg-surface border border-slate-100 flex items-center justify-center text-accent-orange shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-colors">
                   <TrendingDown size={18} />
                </div>
                <div>
                   <h4 className="font-bold text-primary text-lg">Bruchteil der Kosten grosser MIS-Systeme.</h4>
                   <p className="text-sm text-secondary leading-relaxed mt-1">
                     Mehr Funktionsumfang als Excel und PowerBI – aber deutlich schlanker und günstiger als komplexe Enterprise-Lösungen.
                   </p>
                </div>
              </div>

               {/* Item 4 */}
              <div className="flex gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full bg-surface border border-slate-100 flex items-center justify-center text-accent-orange shrink-0 group-hover:bg-accent-orange group-hover:text-white transition-colors">
                   <Unlock size={18} />
                </div>
                <div>
                   <h4 className="font-bold text-primary text-lg">Fair, pragmatisch & ohne Bindung.</h4>
                   <p className="text-sm text-secondary leading-relaxed mt-1">
                     SaaS-Modell, monatlich kündbar, transparente Preise – keine Komplexität, kein Lock-in.
                   </p>
                </div>
              </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};