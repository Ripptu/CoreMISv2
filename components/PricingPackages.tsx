import React from 'react';
import { Check, ArrowRight, CalendarCheck, AlertCircle } from 'lucide-react';
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Pakete und Preise
            </h2>
            
            {/* Added Prerequisites Note */}
            <div className="inline-block bg-orange-50 border border-orange-100 rounded-lg px-5 py-3 mt-2">
               <span className="font-bold text-primary text-sm uppercase tracking-wide mr-2">Voraussetzungen:</span>
               <span className="text-primary/80 text-sm font-medium">Saubere Stammdaten und eine professionell geführte Finanzbuchhaltung.</span>
            </div>
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
                   
                   {/* Changed to mailto link */}
                   <a 
                     href={`mailto:info@coremis.ch?subject=Anfrage: ${pkg.title}`}
                     className={`w-full py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
                     pkg.highlight 
                       ? 'bg-accent-orange text-white hover:bg-accent-hover shadow-lg shadow-orange-500/30' 
                       : 'bg-primary text-white hover:bg-black'
                   }`}>
                     Jetzt anfragen <ArrowRight size={16} />
                   </a>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Footer Text Prominent */}
        <RevealOnScroll delay={400}>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white border-2 border-accent-orange/20 shadow-xl shadow-orange-500/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden group hover:border-accent-orange/50 transition-colors">
               
               {/* Decorative background accent */}
               <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-orange/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-orange/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
               
               <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Keine langfristigen Verträge.
               </h3>
               <p className="text-xl md:text-2xl text-secondary">
                  Monatlich kündbar. 
                  <br className="block md:hidden" />
                  <span className="relative inline-block px-2 z-10 md:ml-2 mt-1 md:mt-0">
                    <span className="font-bold text-primary relative z-10">Keine Setup-Falle.</span>
                    {/* Image Brush Stroke */}
                    <img 
                      src="https://static.vecteezy.com/system/resources/thumbnails/049/161/109/small/orange-paint-brushstroke-with-transparent-background-perfect-for-designs-and-projects-png.png"
                      alt=""
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[150%] -z-10 object-fill opacity-90 mix-blend-multiply"
                    />
                  </span>
               </p>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};