import React from 'react';
import { Target, Database, Import, Rocket } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const steps = [
  {
    week: 'Woche 1',
    title: 'Zielbild & Struktur',
    desc: 'Wir definieren Ihre Reporting-Anforderungen (VR, GF, CFO). Klärung der Dimensionen (Kst, Ktr, Sparten) und der gewünschten Detailtiefe.',
    icon: <Target size={24} />,
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    week: 'Woche 2',
    title: 'Daten & Logik',
    desc: 'Validierung der Quellen (DATEV, SAP, ERP). Aufbau des Mappings Ihrer BWA/GuV-Struktur auf das CoreMIS Datenmodell.',
    icon: <Database size={24} />,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
  },
  {
    week: 'Woche 3',
    title: 'Import & Validierung',
    desc: 'Initialer Import von Budget, Actuals und Forecast. Abgleich der Ergebnisse mit Ihren Vorsystemen (Reconciliation).',
    icon: <Import size={24} />,
    color: 'bg-purple-50 text-purple-600 border-purple-100'
  },
  {
    week: 'Woche 4',
    title: 'Enablement & Go-Live',
    desc: 'Schulung der Key User. Übergabe der Dashboards. Sie sind produktiv und steuern Ihr Unternehmen datenbasiert.',
    icon: <Rocket size={24} />,
    color: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20'
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
                  <span className="relative z-10 font-serif italic text-primary">CoreMIS Journey.</span>
                  {/* Bolder, organic marker background */}
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
                </span>
            </h2>
            <p className="text-xl text-secondary">
              Kein endloses IT-Projekt. Ein klarer Fahrplan zur Transparenz.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div className="group relative bg-white md:bg-transparent p-6 md:p-0 rounded-2xl border md:border-none border-border shadow-sm md:shadow-none hover:shadow-md md:hover:shadow-none transition-all">
                  
                  {/* Step Marker */}
                  <div className={`w-16 h-16 rounded-2xl ${step.color} border flex items-center justify-center mb-6 relative z-10 mx-auto md:mx-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                    {/* Connector Dot for Line */}
                    <div className="hidden md:block absolute top-1/2 -right-[calc(50%+2rem)] w-full h-1 bg-slate-100 -z-10"></div> 
                  </div>

                  <div className="text-center md:text-left">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{step.week}</div>
                    <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">
                      {step.desc}
                    </p>
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