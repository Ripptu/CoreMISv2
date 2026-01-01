import React from 'react';
import { ArrowRight, MonitorPlay } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const DemoCTA: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-white border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealOnScroll>
          <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-orange/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
               
               {/* Left Content */}
               <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-8 text-accent-orange">
                     <MonitorPlay size={16} /> Live Demo
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Starten Sie Ihre <br/> 
                    <span className="text-accent-orange">CoreMIS Journey.</span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-md">
                    In 26 Minuten zeigen wir Ihnen, wie CoreMIS Ihre spezifische Struktur abbildet. Keine PowerPoint-Schlacht, sondern direkt im System.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="mailto:info@coremis.ch"
                      className="bg-accent-orange hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-glow flex items-center justify-center gap-2 hover:scale-105 w-full sm:w-auto"
                    >
                      Kontakt aufnehmen <ArrowRight size={20} />
                    </a>
                  </div>
               </div>

               {/* Right Content */}
               <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                  <h3 className="font-bold text-lg md:text-xl mb-6 text-white leading-snug">
                     CoreMIS löst die vier MIS-Probleme, <br className="hidden md:block" />die jedes KMU kennt
                  </h3>
                  <div className="space-y-6">
                     <div className="flex gap-3">
                        <span className="text-accent-orange font-bold shrink-0 mt-0.5 text-lg">(1)</span>
                        <div>
                           <h4 className="font-bold text-white text-sm md:text-base">CFO-Transparenz statt Excel-Wildwuchs.</h4>
                           <p className="text-xs md:text-sm text-slate-400 mt-1 leading-relaxed">
                             CoreMIS konsolidiert Geschäftseinheiten, Kundengruppen und Produktgruppen automatisiert – redundanzfrei, revisionssicher und jederzeit nachvollziehbar.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-3">
                        <span className="text-accent-orange font-bold shrink-0 mt-0.5 text-lg">(2)</span>
                        <div>
                           <h4 className="font-bold text-white text-sm md:text-base">Betriebliches Gesamtbild statt Zahlendschungel.</h4>
                           <p className="text-xs md:text-sm text-slate-400 mt-1 leading-relaxed">
                             CoreMIS integriert ERP-, Finanzbuchhaltung- und weitere Datenquellen zentral – für eine standardisierte, verlässliche Sicht auf Umsatz, Kosten und Ergebnis über das gesamte Unternehmen.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-3">
                        <span className="text-accent-orange font-bold shrink-0 mt-0.5 text-lg">(3)</span>
                        <div>
                           <h4 className="font-bold text-white text-sm md:text-base">Effizienz statt wiederkehrender manueller Aufwand.</h4>
                           <p className="text-xs md:text-sm text-slate-400 mt-1 leading-relaxed">
                             CoreMIS automatisiert Budgeting, Forecasting und Reporting – inklusive integrierter Personal- und Capex-Planung für eine durchgängige betriebliche P&L-Steuerung.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-3">
                        <span className="text-accent-orange font-bold shrink-0 mt-0.5 text-lg">(4)</span>
                        <div>
                           <h4 className="font-bold text-white text-sm md:text-base">Pragmatische Lösung statt System-Overkill.</h4>
                           <p className="text-xs md:text-sm text-slate-400 mt-1 leading-relaxed">
                             CoreMIS bietet CFO-Power ohne Komplexität – schlank, bezahlbar und in wenigen Wochen produktiv.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};