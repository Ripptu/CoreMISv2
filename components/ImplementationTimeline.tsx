import React from 'react';
import { Target, Database, Import, Rocket, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const steps = [
  {
    week: 'Woche 1',
    title: 'Zielbild und Struktur',
    points: [
      'Reportinganforderungen Stakeholder (VR/GF/CFO) klären.',
      'Bestehendes MIS analysieren (Keep/Improve/Drop).',
      'Businessmodell strukturieren (Dimensionen: Geschäftseinheiten, Kundengruppen, Produktgruppen).'
    ],
    icon: <Target size={24} />,
    visualTitle: 'Stakeholder Map',
    visualContent: (
      <div className="space-y-2">
         <div className="flex justify-between items-center bg-white p-2 rounded border border-slate-100">
            <span className="text-xs font-bold text-primary">CFO</span>
            <span className="text-[10px] text-slate-400">Cashflow & P&L</span>
         </div>
         <div className="flex justify-between items-center bg-white p-2 rounded border border-slate-100">
            <span className="text-xs font-bold text-primary">Verwaltungsrat</span>
            <span className="text-[10px] text-slate-400">High-Level KPI</span>
         </div>
      </div>
    )
  },
  {
    week: 'Woche 2',
    title: 'Daten und Logik',
    points: [
      'Datenquellen analysieren und validieren (ERP/FiBu/Excel).',
      'Datenqualität einordnen (Vollständigkeit/Konsistenz/Aktualität).',
      'Mapping auf Ihre BWA-Struktur.'
    ],
    icon: <Database size={24} />,
    visualTitle: 'Data Validation',
    visualContent: (
      <div className="space-y-2">
         <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-slate-500">DATEV Export (CSV)</span>
         </div>
         <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-slate-500">SAP Business One</span>
         </div>
         <div className="h-1 w-full bg-slate-100 rounded-full mt-1">
            <div className="h-full bg-accent-orange w-3/4 rounded-full"></div>
         </div>
      </div>
    )
  },
  {
    week: 'Woche 3',
    title: 'Import und Validierung',
    points: [
      'Import Budget • Actuals • Forecast.',
      'Plausibilisierung/Abstimmungen und Anpassungen.',
      'Setup der Basis-Berichte.'
    ],
    icon: <Import size={24} />,
    visualTitle: 'Reconciliation',
    visualContent: (
        <div className="flex justify-between items-end h-16 gap-1 px-2">
           <div className="w-1/3 bg-slate-200 h-full rounded-t-sm relative">
              <span className="absolute bottom-1 left-1 text-[8px]">IST</span>
           </div>
           <div className="w-1/3 bg-accent-orange h-[90%] rounded-t-sm relative">
              <span className="absolute bottom-1 left-1 text-[8px] text-white">PLAN</span>
           </div>
           <div className="w-1/3 bg-slate-300 h-[95%] rounded-t-sm relative">
              <span className="absolute bottom-1 left-1 text-[8px]">FC</span>
           </div>
        </div>
    )
  },
  {
    week: 'Woche 4',
    title: 'Enablement und Go-Live',
    points: [
      'Basis-MIS aufsetzen.',
      'Go-Live inkl. Support für die ersten zwei Monatsabschlüsse.',
      'Key-User Schulung (Betrieb, Pflege, Reporting).'
    ],
    icon: <Rocket size={24} />,
    visualTitle: 'Go Live',
    visualContent: (
       <div className="flex flex-col items-center justify-center h-full py-2">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
             <CheckCircle2 size={20} />
          </div>
          <span className="text-xs font-bold text-primary">System Active</span>
       </div>
    )
  }
];

export const ImplementationTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-white border-t border-border relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Die <span className="relative inline-block px-2">
                  <span className="relative z-10 font-serif italic text-primary">CoreMIS Journey</span>
                  {/* Brush stroke */}
                  <svg 
                    className="absolute left-0 bottom-2 w-full h-[0.5em] -z-10 text-accent-orange" 
                    viewBox="0 0 100 20" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M2 10C20 14 40 16 60 12C75 9 90 8 98 11" 
                      stroke="currentColor" 
                      strokeWidth="14" 
                      fill="none" 
                      strokeLinecap="round" 
                      className="opacity-90"
                    />
                  </svg>
                </span> (in 4 Wochen)
            </h2>
          </div>
        </RevealOnScroll>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                  
                  {/* Left Side: Content */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:pr-16 md:text-right order-2 md:order-1">
                     <div className="text-sm font-bold text-accent-orange uppercase tracking-wider mb-2">{step.week}</div>
                     <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                     <ul className="space-y-2 inline-block text-left">
                       {step.points.map((pt, i) => (
                         <li key={i} className="text-secondary text-base leading-relaxed relative pl-4">
                           <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent-orange/50 rounded-full"></span>
                           {pt}
                         </li>
                       ))}
                     </ul>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-accent-orange shadow-sm z-10 order-1 md:order-2">
                    {step.icon}
                  </div>

                  {/* Right Side: Visual */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-16 order-3">
                     <div className="bg-surface border border-slate-200 rounded-xl p-4 max-w-[280px] shadow-sm rotate-1 hover:rotate-0 transition-transform duration-300">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">
                          {step.visualTitle}
                        </div>
                        {step.visualContent}
                     </div>
                  </div>

                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};