import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const PositioningGraph: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <RevealOnScroll>
            <div>
               <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                 Der <span className="text-accent-orange">Sweet Spot</span> der Finanzsteuerung.
               </h2>
               <p className="text-secondary text-lg leading-relaxed mb-8">
                 Traditionelle BI-Tools sind mächtig, aber teuer und komplex. Excel ist flexibel, aber fehleranfällig. 
                 <br/><br/>
                 CoreMIS vereint das Beste aus beiden Welten: <strong>Die Power einer Datenbank mit der Einfachheit, die Sie brauchen.</strong>
               </p>
               <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                    <span className="text-primary font-medium">Schneller als Enterprise-Software</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                    <span className="text-primary font-medium">Sicherer als Excel</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-orange"></div>
                    <span className="text-primary font-medium">Fokussierter als generische BI</span>
                  </li>
               </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="relative aspect-square md:aspect-[4/3] bg-surface rounded-2xl border border-border p-8 flex items-center justify-center">
               
               {/* Coordinate System SVG */}
               <svg viewBox="0 0 400 400" className="w-full h-full text-slate-300">
                  {/* Axes */}
                  <line x1="40" y1="360" x2="380" y2="360" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                  <line x1="40" y1="360" x2="40" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                  
                  {/* Labels */}
                  <text x="380" y="390" textAnchor="end" className="text-[10px] fill-secondary font-bold uppercase tracking-wider">Komplexität / Kosten</text>
                  <text x="30" y="15" textAnchor="start" className="text-[10px] fill-secondary font-bold uppercase tracking-wider" style={{writingMode: 'vertical-rl'}}>Funktionsumfang / Value</text>

                  {/* Competitors (Dots) */}
                  <circle cx="340" cy="60" r="8" className="fill-slate-400 opacity-50" />
                  <text x="340" y="85" textAnchor="middle" className="text-[10px] fill-slate-500">SAP / Oracle</text>

                  <circle cx="320" cy="340" r="8" className="fill-slate-400 opacity-50" />
                  <text x="320" y="325" textAnchor="middle" className="text-[10px] fill-slate-500">Excel (Manuell)</text>

                  <circle cx="120" cy="300" r="8" className="fill-slate-400 opacity-50" />
                  <text x="120" y="325" textAnchor="middle" className="text-[10px] fill-slate-500">Einfache Tools</text>

                  {/* CoreMIS - Sweet Spot (Top Left: High Value, Low Complexity) */}
                  <g className="animate-[pulse_3s_infinite]">
                    <circle cx="100" cy="80" r="16" className="fill-accent-orange/20" />
                    <circle cx="100" cy="80" r="8" className="fill-accent-orange" />
                  </g>
                  <text x="100" y="120" textAnchor="middle" className="text-sm font-bold fill-primary">CoreMIS</text>

                  {/* Grid Lines (Subtle) */}
                  <path d="M40 280 H380 M40 200 H380 M40 120 H380" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <path d="M120 360 V20 M200 360 V20 M280 360 V20" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
               </svg>

            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};