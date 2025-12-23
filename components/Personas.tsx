import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Users, TrendingUp, PieChart } from 'lucide-react';

export const Personas: React.FC = () => {
  return (
    <section id="loesungen" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealOnScroll>
           <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-20">
             Ein Tool. Drei Perspektiven.
           </h2>
        </RevealOnScroll>

        <div className="space-y-24">
          
          {/* Persona 1: CFO */}
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 text-accent-orange font-bold uppercase tracking-widest text-xs mb-4">
                    <PieChart size={16} /> Für den CFO
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-6">Schluss mit der manuellen Konsolidierung.</h3>
                  <blockquote className="border-l-4 border-accent-orange pl-4 text-lg italic text-secondary mb-6">
                    "Ich will meine Zeit nicht mit Copy-Paste verbringen, sondern mit der Analyse der Abweichungen."
                  </blockquote>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-primary font-medium">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Automatisierte IC-Eliminierung
                    </li>
                    <li className="flex items-center gap-3 text-primary font-medium">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Drill-Down bis auf Belegebene
                    </li>
                    <li className="flex items-center gap-3 text-primary font-medium">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Revisionssichere Datenhistorie
                    </li>
                  </ul>
               </div>
               <div className="md:w-1/2 relative">
                  <div className="bg-surface rounded-2xl p-8 border border-border shadow-soft aspect-[4/3] flex items-center justify-center">
                     <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">85%</div>
                        <div className="text-sm text-secondary">Weniger manueller Aufwand</div>
                     </div>
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl -z-10"></div>
               </div>
            </div>
          </RevealOnScroll>

          {/* Persona 2: CEO (Reversed) */}
          <RevealOnScroll delay={100}>
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
               <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 text-accent-orange font-bold uppercase tracking-widest text-xs mb-4">
                    <TrendingUp size={16} /> Für den CEO
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-6">Entscheidungen auf Fakten, nicht Bauchgefühl.</h3>
                  <blockquote className="border-l-4 border-accent-orange pl-4 text-lg italic text-secondary mb-6">
                    "Ich brauche am Montagmorgen den Status Quo. Ohne erst in der Buchhaltung anrufen zu müssen."
                  </blockquote>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-primary font-medium">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Tagesaktuelle Liquidität
                    </li>
                    <li className="flex items-center gap-3 text-primary font-medium">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Mobile Verfügbarkeit
                    </li>
                    <li className="flex items-center gap-3 text-primary font-medium">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Klarheit über Profit Center
                    </li>
                  </ul>
               </div>
               <div className="md:w-1/2 relative">
                  <div className="bg-surface rounded-2xl p-8 border border-border shadow-soft aspect-[4/3] flex items-center justify-center">
                     <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-sm text-secondary">Verfügbarkeit der KPIs</div>
                     </div>
                  </div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
               </div>
            </div>
          </RevealOnScroll>

           {/* Persona 3: Owner */}
          <RevealOnScroll delay={200}>
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 text-accent-orange font-bold uppercase tracking-widest text-xs mb-4">
                    <Users size={16} /> Für den Inhaber
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-6">Unabhängigkeit und Werterhalt.</h3>
                  <blockquote className="border-l-4 border-accent-orange pl-4 text-lg italic text-secondary mb-6">
                    "Das Unternehmen muss auch ohne mich steuerbar sein. CoreMIS schafft die nötige Struktur."
                  </blockquote>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-primary font-medium">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Skalierbare Prozesse
                    </li>
                    <li className="flex items-center gap-3 text-primary font-medium">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Erhöhung des Unternehmenswerts
                    </li>
                    <li className="flex items-center gap-3 text-primary font-medium">
                       <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Risikominimierung
                    </li>
                  </ul>
               </div>
               <div className="md:w-1/2 relative">
                  <div className="bg-surface rounded-2xl p-8 border border-border shadow-soft aspect-[4/3] flex items-center justify-center">
                     <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">100%</div>
                        <div className="text-sm text-secondary">Transparenz</div>
                     </div>
                  </div>
               </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};