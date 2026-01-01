import React from 'react';
import { Target, Database, Import, Rocket, CheckCircle2, FileSpreadsheet, LayoutDashboard, Share2, Search } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const steps = [
  {
    week: 'Woche 1',
    title: 'Zielbild und Struktur',
    points: [
      'Anforderungen Stakeholder (VR/GF/CFO) klären.',
      'Bestehendes MIS analysieren (Keep/Improve/Drop).',
      'Businessmodell strukturieren (Geschäftseinheiten, Kundengruppen, Produktgruppen).'
    ],
    icon: <Target size={24} />,
    visualContent: (
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm w-full max-w-[320px] mx-auto relative overflow-hidden group hover:shadow-md transition-all duration-500">
         <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
            <Share2 size={80} />
         </div>
         {/* Diagram Structure */}
         <div className="flex flex-col items-center gap-4 relative z-10">
            {/* Top Node */}
            <div className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-primary/20">
               Reporting Zielbild
            </div>
            
            {/* Connecting Lines */}
            <div className="w-full h-4 relative">
               <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-slate-300"></div>
               <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-slate-300"></div>
               <div className="absolute left-1/4 top-1/2 h-2 w-px bg-slate-300"></div>
               <div className="absolute right-1/4 top-1/2 h-2 w-px bg-slate-300"></div>
            </div>

            {/* Bottom Nodes */}
            <div className="flex justify-between w-full gap-2">
               <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg flex-1 text-center">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Stakeholder</div>
                  <div className="flex justify-center gap-1">
                     <div className="w-5 h-5 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-[8px] font-bold text-accent-orange">CFO</div>
                     <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-[8px] font-bold text-blue-600">VR</div>
                  </div>
               </div>
               <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg flex-1 text-center">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Dimensionen</div>
                  <div className="space-y-1">
                     <div className="h-1.5 w-10 mx-auto bg-slate-200 rounded-full"></div>
                     <div className="h-1.5 w-8 mx-auto bg-slate-200 rounded-full"></div>
                  </div>
               </div>
            </div>
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
      'Daten strukturieren und priorisieren.'
    ],
    icon: <Database size={24} />,
    visualContent: (
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm w-full max-w-[320px] mx-auto relative overflow-hidden hover:shadow-md transition-all duration-500">
         <div className="flex items-center justify-between gap-4">
            
            {/* Left Column: Sources */}
            <div className="flex flex-col gap-2">
               <div className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  <span className="text-[10px] font-bold text-slate-600">ERP</span>
               </div>
               <div className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  <span className="text-[10px] font-bold text-slate-600">FIBU</span>
               </div>
               <div className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-[10px] font-bold text-slate-600">Excel</span>
               </div>
            </div>

            {/* Middle Arrow */}
            <div className="flex-1 h-px bg-slate-200 relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-slate-300 rotate-45"></div>
            </div>

            {/* Right Column: Logic */}
            <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-accent-orange shadow-sm relative">
               <Search size={24} className="relative z-10" />
               <div className="absolute inset-0 bg-accent-orange/10 rounded-2xl animate-pulse"></div>
            </div>
         </div>
         
         <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
            <span className="text-[9px] font-mono text-slate-400">STATUS: ANALYZING</span>
            <div className="flex gap-1">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce"></div>
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce delay-100"></div>
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce delay-200"></div>
            </div>
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
      'Datenmapping auf CoreMIS.'
    ],
    icon: <Import size={24} />,
    visualContent: (
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm w-full max-w-[320px] mx-auto relative overflow-hidden group hover:shadow-md transition-all duration-500">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-slate-50 to-transparent -z-0 rounded-bl-3xl"></div>
        
        {/* Fake Table Header */}
        <div className="grid grid-cols-12 gap-2 pb-2 border-b border-slate-100 mb-2">
           <div className="col-span-3 h-2 bg-slate-200 rounded w-8"></div>
           <div className="col-span-5 h-2 bg-slate-200 rounded w-12"></div>
           <div className="col-span-4 h-2 bg-slate-200 rounded w-full"></div>
        </div>

        {/* Fake Rows */}
        <div className="space-y-2">
           {[1, 2, 3].map((_, i) => (
             <div key={i} className="grid grid-cols-12 gap-2 items-center">
               <div className="col-span-3 h-3 bg-slate-50 rounded w-full"></div>
               <div className="col-span-5 h-3 bg-slate-50 rounded w-full"></div>
               <div className="col-span-4 h-3 bg-orange-50/50 border border-orange-100/50 rounded w-full relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 bg-accent-orange/10 w-[70%]"></div>
               </div>
             </div>
           ))}
        </div>

        {/* Validation Badge */}
        <div className="mt-4 flex justify-between items-center">
           <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 text-green-700 px-2 py-1 rounded text-[9px] font-bold uppercase">
              <CheckCircle2 size={10} /> Validated
           </div>
           <span className="text-[9px] text-slate-400 font-mono">0 Errors</span>
        </div>
      </div>
    )
  },
  {
    week: 'Woche 4',
    title: 'Enablement und Go-Live',
    points: [
      'Basis-MIS aufsetzen.',
      'Go-Live inkl. Support für die ersten Monatsabschlüsse.',
      'Key-User Schulung (Betrieb, Pflege, Reporting).'
    ],
    icon: <Rocket size={24} />,
    visualContent: (
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm w-full max-w-[320px] mx-auto relative overflow-hidden hover:shadow-md transition-all duration-500">
         
         <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
                  <LayoutDashboard size={14} />
               </div>
               <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase">CoreMIS</div>
                  <div className="text-[10px] font-bold text-primary">CoreMIS Dashboard</div>
               </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
         </div>

         {/* Charts */}
         <div className="grid grid-cols-2 gap-3 mb-2">
            <div className="bg-slate-50 rounded-lg p-2 h-16 flex items-end gap-1">
               <div className="w-1/3 h-[40%] bg-slate-200 rounded-t-sm"></div>
               <div className="w-1/3 h-[70%] bg-slate-200 rounded-t-sm"></div>
               <div className="w-1/3 h-[50%] bg-slate-200 rounded-t-sm"></div>
            </div>
            <div className="bg-slate-50 rounded-lg p-2 h-16 flex items-end gap-1 relative overflow-hidden border border-orange-100/50">
               <div className="w-1/3 h-[30%] bg-orange-200 rounded-t-sm"></div>
               <div className="w-1/3 h-[80%] bg-accent-orange rounded-t-sm shadow-lg"></div>
               <div className="w-1/3 h-[60%] bg-orange-300 rounded-t-sm"></div>
            </div>
         </div>

         <div className="bg-green-50 border border-green-100 text-green-700 text-center py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 mt-2">
            <Rocket size={12} /> SYSTEM LIVE
         </div>

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
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Die <span className="relative inline-block px-2">
                  <span className="relative z-10 font-serif italic text-primary">CoreMIS Journey</span>
                  {/* Image Brush Stroke */}
                  <img 
                    src="https://static.vecteezy.com/system/resources/thumbnails/049/161/109/small/orange-paint-brushstroke-with-transparent-background-perfect-for-designs-and-projects-png.png" 
                    alt=""
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[150%] -z-10 object-contain opacity-90 mix-blend-multiply"
                  />
                </span> <br/>(in 4 Wochen)
            </h2>
          </div>
        </RevealOnScroll>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                {/* 
                  Alternating Logic:
                  Even (0, 2): Text Left, Visual Right -> flex-row
                  Odd (1, 3): Visual Left, Text Right -> flex-row-reverse
                */}
                <div className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side (Text) */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 order-2 md:order-1 ${idx % 2 !== 0 ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'}`}>
                     <div className="text-sm font-bold text-accent-orange uppercase tracking-wider mb-2">{step.week}</div>
                     <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                     <ul className={`space-y-2 inline-block text-left max-w-md ${idx % 2 !== 0 ? '' : 'md:text-right md:inline-block'}`}>
                       {step.points.map((pt, i) => (
                         <li key={i} className={`text-secondary text-base leading-relaxed relative pl-4 ${idx % 2 !== 0 ? '' : 'md:pl-0 md:pr-4'}`}>
                           <span className={`absolute top-2 w-1.5 h-1.5 bg-accent-orange/50 rounded-full ${idx % 2 !== 0 ? 'left-0' : 'left-0 md:left-auto md:right-0'}`}></span>
                           {pt}
                         </li>
                       ))}
                     </ul>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-accent-orange shadow-sm z-10 order-1 md:order-2">
                    {step.icon}
                  </div>

                  {/* Visual Side (Image/Widget) */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 order-3 ${idx % 2 !== 0 ? 'md:pr-16 flex justify-start md:justify-end' : 'md:pl-16 flex justify-start'}`}>
                     {step.visualContent}
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