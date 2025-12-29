import React from 'react';
import { ArrowRight, MonitorPlay, CheckCircle2 } from 'lucide-react';
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
               
               <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-8 text-accent-orange">
                     <MonitorPlay size={16} /> Live Demo
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Starten Sie Ihre <br/> 
                    <span className="text-accent-orange">CFO-Journey.</span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-md">
                    In 30 Minuten zeigen wir Ihnen, wie CoreMIS Ihre spezifische Struktur abbildet. Keine PowerPoint-Schlacht, sondern direkt im System.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-accent-orange hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-glow flex items-center justify-center gap-2 hover:scale-105">
                      Termin wählen <ArrowRight size={20} />
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
                      Kontakt aufnehmen
                    </button>
                  </div>
               </div>

               <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-6">Was Sie in der Demo erwartet:</h3>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent-orange/20 text-accent-orange flex items-center justify-center shrink-0 font-bold border border-accent-orange/20">1</div>
                        <div>
                           <h4 className="font-bold text-white">Zielbild & Dimensionen</h4>
                           <p className="text-sm text-slate-400 mt-1">Wir klären, welche KPIs und Dimensionen (Sparten, Kostenstellen) Sie steuern wollen.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent-orange/20 text-accent-orange flex items-center justify-center shrink-0 font-bold border border-accent-orange/20">2</div>
                        <div>
                           <h4 className="font-bold text-white">Datenimport & Drilldown</h4>
                           <p className="text-sm text-slate-400 mt-1">Sehen Sie live, wie Daten aus DATEV/ERP importiert und bis auf Belegebene analysiert werden.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent-orange/20 text-accent-orange flex items-center justify-center shrink-0 font-bold border border-accent-orange/20">3</div>
                        <div>
                           <h4 className="font-bold text-white">Paket-Empfehlung</h4>
                           <p className="text-sm text-slate-400 mt-1">Am Ende erhalten Sie eine klare Empfehlung: Fast Track oder Professional.</p>
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