import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { TrendingUp, PieChart, CheckCircle2, Activity } from 'lucide-react';

export const Personas: React.FC = () => {
  return (
    <section id="loesungen" className="py-24 bg-surface/50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealOnScroll>
           <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4">
             Ein Tool. Zwei Perspektiven.
           </h2>
           <p className="text-center text-secondary text-lg mb-20 max-w-2xl mx-auto">
             Jeder Stakeholder braucht einen anderen Blick auf die Zahlen. CoreMIS liefert genau das.
           </p>
        </RevealOnScroll>

        <div className="space-y-32">
          
          {/* Persona 1: CFO */}
          <div className="group">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="md:w-1/2 order-2 md:order-1">
                  <RevealOnScroll>
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-accent-orange px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px] mb-6 border border-orange-100">
                      <PieChart size={14} /> Für den CFO
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                      Schluss mit der <br/> manuellen Konsolidierung.
                    </h3>
                    <div className="relative pl-6 mb-8">
                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-orange rounded-full"></div>
                       <blockquote className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed">
                         "Ich will meine Zeit nicht mit Copy-Paste verbringen, sondern mit der Analyse der Abweichungen."
                       </blockquote>
                    </div>
                    
                    <ul className="space-y-4">
                      {['Automatisierte IC-Eliminierung', 'Drill-Down bis auf Belegebene', 'Revisionssichere Datenhistorie'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-secondary font-medium group-hover:text-primary transition-colors">
                           <CheckCircle2 size={20} className="text-accent-orange" /> {item}
                        </li>
                      ))}
                    </ul>
                  </RevealOnScroll>
               </div>
               
               {/* Visual: CFO Automation Card */}
               <div className="md:w-1/2 w-full order-1 md:order-2 relative perspective-1000">
                  <RevealOnScroll delay={200}>
                    <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-transform duration-700 hover:rotate-y-2 hover:scale-[1.02]">
                       {/* Abstract UI Header */}
                       <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-accent-orange font-bold">CM</div>
                             <div>
                                <div className="text-xs font-bold text-slate-400 uppercase">Prozess Status</div>
                                <div className="text-sm font-bold text-primary">Monatsabschluss</div>
                             </div>
                          </div>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold animate-pulse">Running</span>
                       </div>

                       {/* Animated Progress Bars */}
                       <div className="space-y-6">
                          <div>
                             <div className="flex justify-between text-sm font-medium mb-2">
                                <span className="text-secondary">Datenimport (DATEV)</span>
                                <span className="text-primary font-bold">100%</span>
                             </div>
                             <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-full rounded-full"></div>
                             </div>
                          </div>
                          <div>
                             <div className="flex justify-between text-sm font-medium mb-2">
                                <span className="text-secondary">Mapping Logik</span>
                                <span className="text-primary font-bold">100%</span>
                             </div>
                             <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-full rounded-full delay-100 transition-all duration-1000"></div>
                             </div>
                          </div>
                          <div>
                             <div className="flex justify-between text-sm font-medium mb-2">
                                <span className="text-secondary">IC-Eliminierung</span>
                                <span className="text-primary font-bold">85%</span>
                             </div>
                             <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-accent-orange w-[85%] rounded-full relative overflow-hidden">
                                   <div className="absolute inset-0 bg-white/30 animate-[shimmer_1s_infinite]"></div>
                                </div>
                             </div>
                          </div>
                       </div>
                       
                       {/* Floating Badge */}
                       <div className="absolute -right-6 bottom-8 bg-primary text-white p-4 rounded-xl shadow-xl border border-slate-700 animate-[float_4s_ease-in-out_infinite]">
                          <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Effizienz</div>
                          <div className="text-2xl font-bold text-accent-orange">+ 8 Std.</div>
                          <div className="text-[10px] text-slate-400">pro Woche gespart</div>
                       </div>
                    </div>
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-orange-200/40 to-transparent blur-3xl -z-10"></div>
                  </RevealOnScroll>
               </div>
            </div>
          </div>

          {/* Persona 2: CEO (Reversed) */}
          <div className="group">
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
               <div className="md:w-1/2">
                  <RevealOnScroll>
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px] mb-6 border border-blue-100">
                      <TrendingUp size={14} /> Für den CEO
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                      Entscheidungen auf Fakten, <br/> nicht Bauchgefühl.
                    </h3>
                    <div className="relative pl-6 mb-8">
                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>
                       <blockquote className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed">
                         "Ich brauche am Montagmorgen den Status Quo. Ohne erst in der Buchhaltung anrufen zu müssen."
                       </blockquote>
                    </div>
                    
                    <ul className="space-y-4">
                      {['Tagesaktuelle Liquiditätsvorschau', 'Mobile Verfügbarkeit (Tablet/Phone)', 'Klarheit über Profit Center'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-secondary font-medium group-hover:text-primary transition-colors">
                           <CheckCircle2 size={20} className="text-blue-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </RevealOnScroll>
               </div>

               {/* Visual: CEO Live Dashboard Card */}
               <div className="md:w-1/2 w-full relative perspective-1000">
                  <RevealOnScroll delay={200}>
                    <div className="relative z-10 bg-[#0F172A] rounded-3xl p-8 shadow-2xl border border-slate-700 transform transition-transform duration-700 hover:rotate-y-[-2deg] hover:scale-[1.02] overflow-hidden">
                       
                       {/* Header */}
                       <div className="flex justify-between items-center mb-8">
                         <div className="flex items-center gap-2">
                           <Activity size={18} className="text-green-400" />
                           <span className="text-white font-bold tracking-wide text-sm">LIVE PERFORMANCE</span>
                         </div>
                         <div className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">Updated: Just now</div>
                       </div>

                       {/* Simulated Chart */}
                       <div className="h-32 flex items-end gap-2 mb-6 px-2 border-b border-slate-800 pb-2 relative">
                          <div className="absolute top-1/4 w-full h-px bg-slate-800 border-dashed border-t border-slate-700"></div>
                          {/* Bars */}
                          <div className="w-1/6 bg-slate-700 h-[40%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-slate-700 h-[60%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-slate-700 h-[45%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-slate-700 h-[70%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-slate-600 h-[55%] rounded-t-sm"></div>
                          <div className="w-1/6 bg-blue-500 h-[85%] rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-[pulse_2s_infinite]"></div>
                       </div>

                       {/* Key Metrics Grid */}
                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                             <div className="text-xs text-slate-400 mb-1">EBITDA (YTD)</div>
                             <div className="text-xl font-bold text-white">1.2M €</div>
                             <div className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
                               <TrendingUp size={10} /> +12% vs LY
                             </div>
                          </div>
                          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                             <div className="text-xs text-slate-400 mb-1">Cash Runway</div>
                             <div className="text-xl font-bold text-white">14 Mo.</div>
                             <div className="text-[10px] text-slate-400 mt-1">
                               Stable
                             </div>
                          </div>
                       </div>
                    </div>
                     {/* Background Blob */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-blue-500/20 to-transparent blur-3xl -z-10"></div>
                  </RevealOnScroll>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};