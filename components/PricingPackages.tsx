import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const packages = [
  {
    title: 'Fast Track',
    price: 'CHF 99',
    period: 'monatlich',
    desc: 'Für kleine Teams, die sofort Klarheit brauchen.',
    duration: 'Go-Live in 1 Woche',
    features: [
      'Standard BWA-Mapping',
      'DATEV Connect Online',
      '1 User Lizenz',
      'Tägliche Aktualisierung',
      'E-Mail Support'
    ],
    cta: 'Jetzt starten',
    highlight: false
  },
  {
    title: 'Professional',
    price: 'CHF 299',
    period: 'monatlich',
    desc: 'Der Standard für wachsende Unternehmen.',
    duration: 'Go-Live in 3-4 Wochen',
    features: [
      'Individuelles Konten-Mapping',
      'Bis zu 3 Gesellschaften (Konsolidiert)',
      '5 User Lizenzen',
      'Liquiditäts-Forecast',
      'Prio Support & Onboarding'
    ],
    cta: 'Anfragen',
    highlight: true,
    badge: 'Meistgewählt'
  },
  {
    title: 'Enterprise',
    price: 'Individuell',
    period: '',
    desc: 'Für komplexe Gruppenstrukturen.',
    duration: 'Custom Setup',
    features: [
      'Unlimitierte Gesellschaften',
      'Holding-Strukturen & Währungen',
      'Dedizierter Account Manager',
      'Custom Reports & API Access',
      'SLA Garantie'
    ],
    cta: 'Kontakt aufnehmen',
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
              Fixpreise. <br/>Keine Setup-Falle.
            </h2>
            <p className="text-secondary text-lg">
              Transparente SaaS-Gebühren statt teurer Berater-Tagessätze. Monatlich kündbar.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, idx) => (
            <RevealOnScroll key={idx} delay={idx * 150}>
              <div 
                className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${
                  pkg.highlight 
                    ? 'border-accent-orange shadow-orange ring-1 ring-accent-orange/20' 
                    : 'border-border shadow-soft hover:shadow-hover'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-2">{pkg.title}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-sm text-secondary">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed h-10">{pkg.desc}</p>
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

                <div className="mt-auto border-t border-border pt-6">
                   <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
                     {pkg.duration}
                   </div>
                   <button className={`w-full py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
                     pkg.highlight 
                       ? 'bg-accent-orange text-white hover:bg-accent-hover' 
                       : 'bg-surface text-primary hover:bg-border'
                   }`}>
                     {pkg.cta} <ArrowRight size={16} />
                   </button>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};