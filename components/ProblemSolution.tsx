import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { BarChart3, Layers, Target, Zap, Database, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    icon: <BarChart3 size={32} />,
    title: 'Klare P&L Transparenz',
    intro: 'Management Reporting mit Drilldown statt Excel-Insellösungen. CoreMIS bringt P&L-Transparenz auf Knopfdruck.',
    bullets: [
      'Mehrdimensionale GuV/P&L nach Gesellschaft, Bereich & Kostenstelle.',
      'Drilldown bis zur Ursache: Von KPI → Kostenblock → Buchungsebene.',
      'Standardisierte Reports: Einheitliche Logik für EBITDA & Margen.',
      'Rolling Views: Soll/Ist, Budget/Forecast & Vorjahresvergleiche.'
    ]
  },
  {
    icon: <Layers size={32} />,
    title: 'Automatisierte Konsolidierung',
    intro: 'Konsolidierung und Intercompany-Logik für KMU-Gruppen – sauber, nachvollziehbar und revisionssicher.',
    bullets: [
      'Abbildung von Gruppenstrukturen (Holding, Subholdings).',
      'IC-Umsätze, Kosten & Transferpreise sauber eliminiert.',
      'Harmonisierung unterschiedlicher Kontenpläne ohne Excel-Monster.',
      'Skalierbar von 2-3 Gesellschaften bis zur ganzen Gruppe.'
    ]
  },
  {
    icon: <Target size={32} />,
    title: 'Integrierte Planung',
    intro: 'Budget, Forecast und Szenarien – integriert mit Ist-Daten. Finanzplanung und Reporting in einer Logik.',
    bullets: [
      'Budget & Forecast in einem System (Rolling Forecasts, Versionen).',
      'Top-down & Bottom-up Planung auf Gesamt- und Detailstufe.',
      'Treiberbasierte Planung: Umsatz, Margen, Personalkosten.',
      'Integrierte Abweichungsanalyse direkt im Monatsreporting.'
    ]
  },
  {
    icon: <Zap size={32} />,
    title: 'SaaS Modell – schnell produktiv',
    intro: 'Schnelle Einführung ohne komplexes IT-Projekt. Standardisierte Pakete für sofortigen CFO-Impact.',
    bullets: [
      'Fast Track in 3–4 Wochen: Setup, Datenimport & Basis-MIS.',
      'Standardisiert statt übercustomized: Weniger Projekt-Risiko.',
      'Pragmatischer Data Journey Ansatz (Priorität auf ERP/FiBu).',
      'Rollen & Governance: Key User Enablement inklusive.'
    ]
  },
  {
    icon: <Database size={32} />,
    title: 'Daten aus jedem System',
    intro: 'Zentrale Datenbasis für ERP, Finanzbuchhaltung und Excel – als Single Source of Truth für alle Reports.',
    bullets: [
      'ERP & FiBu integriert: Actuals und Planwerte zentral.',
      'Klar definierte Datenquellen pro Datenblock (Ist/Plan).',
      'Sauberes Mapping auf Dimensionen (Kunden, Produkte).',
      'Sichtbare Datenqualität: Vollständigkeit & Konsistenz-Checks.'
    ]
  },
];

interface FeatureCardProps {
  item: typeof features[0];
  idx: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ item, idx }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
      <RevealOnScroll delay={idx * 100} width="100%">
        <div 
          className={`group bg-white p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col items-start relative overflow-hidden ${
            isOpen 
              ? 'border-accent-orange/30 shadow-hover' 
              : 'border-border shadow-soft hover:shadow-hover hover:border-accent-orange/30'
          }`}
        >
          
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
          
          <p className="text-secondary text-base leading-relaxed mb-4 font-medium">
            {item.intro}
          </p>
          
          {/* Toggle Button */}
          <div className="mt-auto w-full pt-2">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-sm font-bold text-accent-orange hover:text-accent-hover transition-colors focus:outline-none"
            >
              {isOpen ? 'Einklappen' : 'Details anzeigen'}
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden w-full"
              >
                <ul className="space-y-3 pt-6 w-full border-t border-slate-100 mt-4">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-secondary/80 leading-snug">
                       <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-orange/60 shrink-0"></div>
                       <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </RevealOnScroll>
    </div>
  );
};

export const ProblemSolution: React.FC = () => {
  return (
    <section id="loesungen" className="py-20 md:py-24 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              CFO-Transparenz, die KMU <br/>
              <span className="text-accent-orange">sofort nutzen</span> können.
            </h2>
            <p className="text-xl font-medium text-secondary">
              Das macht CoreMIS besser:
            </p>
          </div>
        </RevealOnScroll>

        {/* Flexible Grid that centers items nicely */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((item, idx) => (
            <FeatureCard key={idx} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};