import React from 'react';
import { Check, ArrowRight, CalendarCheck } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const packages = [
  {
    title: 'Einführungspaket "Fast Track"',
    subtitle: 'Für KMU mit einer Gesellschaft, die schnell Ergebnisse wollen.',
    price: 'CHF 9\'600.–',
    priceType: 'Fixpreis',
    features: [
      'Setup CoreMIS als SaaS und Userverwaltung',
      'Abbilden von Budget • Actuals • Forecast für die Gesellschaft',
      'Basis-MIS',
      'Schulung für Key User (CFO/Controller/Leiter RW)',
      'Go-Live Support (1 Monatsabschluss)'
    ],
    timeframe: 'in 3-4 Wochen',
    highlight: false
  },
  {
    title: 'Einführungspaket "Professional"',
    subtitle: 'Für KMU mit mehreren Gesellschaften und erhöhter Komplexität.',
    price: 'CHF 19\'200.–',
    priceType: 'Fixpreis',
    features: [
      'Setup CoreMIS als SaaS und Userverwaltung',
      'Abbilden von Budget • Actuals • Forecast für bis zu drei Gesellschaften',
      'Basis-MIS + Personal- und Capex-Planung',
      'Schulungen für Key User und Management (VR/C-Level)',
      'Go-Live Support (2 Monatsabschlüsse)'
    ],
    timeframe: 'in 6-8 Wochen',
    highlight: true,
    badge: 'Bestseller'
  },
  {
    title: 'Einführungspaket "Enterprise"',
    subtitle: 'Für KMU mit Holdingstruktur und internationalem Setup.',
    price: 'Kostendach',
    priceType: 'nach gemeinsamen Lieferergebnissen',
    features: [
      'Setup CoreMIS als SaaS und Userverwaltung',
      'Abbilden von Budget • Actuals • Forecast für alle Gesellschaften',
      'Schnittstellen zu ERP/FiBu-Systemen (optional)',
      'Personal- und Capex-Planung',
      'Onsite-Workshops und individuelle Schulungen',
      'Go-Live Support gemäss Anforderung'
    ],
    timeframe: 'in 10-12 Wochen',
    highlight: false
  }
];

export const PricingPackages: React.FC = () => {
  return (
    <section id="preise" className="py-24 bg-surface border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Pakete und Preise
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-16">
          {packages.map((pkg, idx) => (
            <RevealOnScroll key={idx} delay={idx * 150}>
              <div 
                className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col h-full ${
                  pkg.highlight 
                    ? 'border-accent-orange shadow-orange ring-1 ring-accent-orange/20 z-10 scale-105 md:scale-105' 
                    : 'border-border shadow-soft hover:shadow-hover'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`font-bold text-primary mb-3 leading-tight ${pkg.highlight ? 'text-xl' : 'text-lg'}`}>{pkg.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed min-h-[40px] mb-6">{pkg.subtitle}</p>
                  
                  <div className="bg-surface rounded-xl p-4 mb-2">
                    <div className="text-xs font-bold uppercase text-secondary mb-1">{pkg.priceType}</div>
                    <div className="text-3xl font-bold text-primary tracking-tight">{pkg.price}</div>
                  </div>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-primary font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-border">
                   <div className="flex items-center justify-center gap-2 text-accent-orange font-bold text-sm mb-4 bg-orange-50 py-2 rounded-lg">
                     <CalendarCheck size={16} />
                     CFO-Transparenz {pkg.timeframe}
                   </div>
                   
                   <button className={`w-full py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
                     pkg.highlight 
                       ? 'bg-accent-orange text-white hover:bg-accent-hover shadow-lg shadow-orange-500/30' 
                       : 'bg-primary text-white hover:bg-black'
                   }`}>
                     Jetzt anfragen <ArrowRight size={16} />
                   </button>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Footer Text from Slide */}
        <RevealOnScroll delay={400}>
          <div className="text-center max-w-3xl mx-auto border-t border-border pt-12">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Keine langfristigen Verträge.
            </h3>
            <p className="text-xl text-secondary">
              Monatlich kündbar. Keine Setup-Falle.
            </p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};