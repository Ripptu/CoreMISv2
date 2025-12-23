import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { FileSpreadsheet, Layers, RefreshCw, Zap, ArrowRight } from 'lucide-react';

const problems = [
  {
    icon: <FileSpreadsheet size={32} />,
    title: 'CFO-Transparenz statt Excel-Wildwuchs',
    desc: 'CoreMIS konsolidiert Geschäftseinheiten, Kundengruppen und Produktgruppen automatisiert – redundanzfrei, revisionssicher und jederzeit nachvollziehbar.',
  },
  {
    icon: <Layers size={32} />,
    title: 'Betriebliches Gesamtbild statt Zahlendschungel',
    desc: 'CoreMIS integriert ERP-, Finanzbuchhaltung- und weitere Datenquellen zentral – für eine standardisierte, verlässliche Sicht auf Umsatz, Kosten und Ergebnis.',
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Effizienz statt manueller Aufwand',
    desc: 'CoreMIS automatisiert Budgeting, Forecasting und Reporting – inklusive integrierter Personal- und Capex-Planung für eine durchgängige betriebliche P&L-Steuerung.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Pragmatische Lösung statt System-Overkill',
    desc: 'CoreMIS bietet CFO-Power ohne Komplexität – schlank, bezahlbar und in wenigen Wochen produktiv.',
  },
];

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              CoreMIS löst die vier <span className="font-handwriting text-5xl md:text-6xl text-accent-orange px-2 relative top-1">MIS-Probleme,</span>
            </h2>
            <p className="text-secondary text-lg mt-4 font-medium">
              die jedes KMU kennt.
            </p>
          </div>
        </RevealOnScroll>

        {/* Mobile: Horizontal Snap Scroll / Desktop: Grid */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 
          md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:mx-0 md:px-0 md:overflow-visible
          no-scrollbar
        ">
          {problems.map((item, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[85vw] md:w-auto h-full">
              <RevealOnScroll delay={idx * 100} width="100%">
                <div className="group bg-white p-8 rounded-2xl border border-border shadow-soft hover:shadow-hover hover:border-accent-orange/30 transition-all duration-300 h-full flex flex-col items-start relative overflow-hidden">
                  
                  {/* Subtle Numbering */}
                  <div className="absolute top-4 right-4 text-6xl font-black text-slate-100/50 group-hover:text-orange-50 transition-colors pointer-events-none">
                    ({idx + 1})
                  </div>

                  <div className="mb-6 p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:text-accent-orange group-hover:bg-orange-50 transition-colors duration-300 transform group-hover:scale-110 origin-left border border-slate-100 group-hover:border-orange-100">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent-orange transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-accent-orange transition-colors">
                    Lösung <ArrowRight size={12} className="ml-1" />
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          ))}
          
          {/* Mobile Spacer at end to allow last card to be centered fully */}
          <div className="snap-center shrink-0 w-4 md:hidden"></div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex justify-center gap-2 mt-2 md:hidden">
          {problems.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          ))}
        </div>

      </div>
    </section>
  );
};