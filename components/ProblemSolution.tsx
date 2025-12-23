import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { BarChart3, Layers, Target, Zap, Database, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 size={32} />,
    title: 'Klare P&L-Transparenz.',
    desc: 'Nach Geschäftseinheiten, Kundengruppen und Produktgruppen – bis zur konsolidierten Gesamtsicht.',
  },
  {
    icon: <Layers size={32} />,
    title: 'Automatisierte Konsolidierung.',
    desc: 'IC-Eliminierungen inklusive – sauber, schnell und revisionssicher.',
  },
  {
    icon: <Target size={32} />,
    title: 'Integrierte Planung.',
    desc: 'Budgets • Forecasts • Actuals – top-down und bottom-up, inklusive Personal- und Capex-Planung.',
  },
  {
    icon: <Zap size={32} />,
    title: 'SaaS Modell – produktiv in wenigen Wochen.',
    desc: 'Kein aufwendiges IT-Projekt, keine unnötige Komplexität – Standardisierung als Schlüssel.',
  },
  {
    icon: <Database size={32} />,
    title: 'Daten aus jedem relevanten System.',
    desc: 'ERP, Finanzbuchhaltung, Datenbanken oder Excel-Erfassungen – alles zentral zusammengeführt und verarbeitet.',
  },
];

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              CFO-Transparenz, die KMU <br/>
              <span className="text-accent-orange">sofort nutzen können.</span>
            </h2>
            <p className="text-xl font-medium text-secondary">
              Das macht CoreMIS besser:
            </p>
          </div>
        </RevealOnScroll>

        {/* Flexible Grid that centers items nicely (3 top, 2 bottom on large screens) */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
              <RevealOnScroll delay={idx * 100} width="100%">
                <div className="group bg-white p-8 rounded-2xl border border-border shadow-soft hover:shadow-hover hover:border-accent-orange/30 transition-all duration-300 h-full flex flex-col items-start relative overflow-hidden">
                  
                  {/* Subtle Numbering */}
                  <div className="absolute top-4 right-4 text-6xl font-black text-slate-100/50 group-hover:text-orange-50 transition-colors pointer-events-none">
                    0{idx + 1}
                  </div>

                  <div className="mb-6 p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:text-accent-orange group-hover:bg-orange-50 transition-colors duration-300 transform group-hover:scale-110 origin-left border border-slate-100 group-hover:border-orange-100">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent-orange transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-accent-orange transition-colors">
                    Feature Details <ArrowRight size={12} className="ml-1" />
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};