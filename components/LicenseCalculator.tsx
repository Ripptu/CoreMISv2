import React, { useState, useMemo } from 'react';
import { Calculator, Building2, Banknote, CalendarCheck, CheckCircle2, Info } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const LicenseCalculator: React.FC = () => {
  const [entities, setEntities] = useState(18); // Default from screenshot example
  const [revenue, setRevenue] = useState(300); // Default from screenshot example (Mio)
  const [term, setTerm] = useState<12 | 24 | 36>(12);

  const calculations = useMemo(() => {
    // 1. Basisfee (Includes 1 Entity, up to 50 Mio Revenue)
    const baseFee = 800;

    // 2. Additional Entities (500 per additional entity)
    const additionalEntitiesCount = Math.max(0, entities - 1);
    const entityFee = additionalEntitiesCount * 500;

    // 3. Additional Revenue (1000 per additional 50 Mio started)
    // Formula: (Revenue - 50) / 50, rounded up.
    const revenueOverhead = Math.max(0, revenue - 50);
    const revenueSteps = Math.ceil(revenueOverhead / 50);
    const revenueFee = revenueSteps * 1000;

    // Subtotal Monthly
    const subtotalMonthly = baseFee + entityFee + revenueFee;

    // 4. Discount (Vorauszahlung)
    let discountPercent = 0;
    if (term === 12) discountPercent = 0.10; // 10%
    if (term === 24) discountPercent = 0.20; // 20%
    if (term === 36) discountPercent = 0.30; // 30%

    const discountAmount = subtotalMonthly * discountPercent;
    const finalMonthly = subtotalMonthly - discountAmount;
    
    const totalContractValue = finalMonthly * term;

    return {
      baseFee,
      entityFee,
      revenueFee,
      revenueSteps,
      subtotalMonthly,
      discountPercent,
      discountAmount,
      finalMonthly,
      totalContractValue
    };
  }, [entities, revenue, term]);

  // Helper for CHF
  const formatCHF = (val: number) => new Intl.NumberFormat('de-CH', { 
    style: 'currency', 
    currency: 'CHF', 
    maximumFractionDigits: 0 
  }).format(val);

  return (
    <section className="py-20 md:py-24 bg-surface border-t border-border relative">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Context & Text */}
          <div className="lg:col-span-5">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1.5 mb-6 shadow-sm">
                 <Calculator size={16} className="text-accent-orange" />
                 <span className="text-[10px] font-bold tracking-[0.15em] text-primary uppercase">SaaS Modell</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Individuelles <br/>
                <span className="relative inline-block px-2 z-10">
                   <span className="relative z-10">Lizenzmodell.</span>
                   {/* Thick Orange Stroke */}
                   <span className="absolute bottom-2 left-0 w-full h-[0.3em] bg-accent-orange/20 -z-10 -rotate-1 rounded-sm"></span>
                </span>
              </h2>

              <p className="text-lg text-secondary leading-relaxed mb-8">
                Unser Preismodell passt sich Ihrem Wachstum an. Sie zahlen nur für die Komplexität, die Sie tatsächlich managen.
              </p>

              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block text-sm">Basis-Lizenz (CHF 800)</strong>
                    <span className="text-xs text-secondary">Inkludiert 1 Gesellschaft & bis CHF 50 Mio. Umsatz.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block text-sm">Fair Scaling</strong>
                    <span className="text-xs text-secondary">CHF 500 pro weitere Gesellschaft.<br/>CHF 1'000 je weitere 50 Mio. Umsatz.</span>
                  </div>
                </div>
              </div>

              {/* Service Rates Footer (from screenshot) */}
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Service & Individualisierung</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary font-medium">Beratung & Schulung</span>
                    <span className="font-mono text-accent-orange font-bold">CHF 200 / h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary font-medium">Entwicklung & Anbindung</span>
                    <span className="font-mono text-accent-orange font-bold">CHF 160 / h</span>
                  </div>
                </div>
              </div>

            </RevealOnScroll>
          </div>

          {/* RIGHT SIDE: Interactive Calculator */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={200}>
              <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden">
                
                {/* Header Bar */}
                <div className="bg-primary text-white p-6 md:p-8 flex justify-between items-center">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Kalkulation</div>
                    <div className="font-serif text-2xl italic">Ihre Konfiguration</div>
                  </div>
                  <CalendarCheck size={32} className="text-accent-orange opacity-80" />
                </div>

                <div className="p-6 md:p-10 space-y-10">
                  
                  {/* SLIDER 1: Entities */}
                  <div className="space-y-4">
                     <div className="flex justify-between items-end">
                        <div className="flex items-center gap-2">
                          <Building2 size={20} className="text-accent-orange" />
                          <label className="font-bold text-primary">Anzahl Gesellschaften</label>
                        </div>
                        <span className="font-mono bg-slate-50 text-primary border border-slate-200 px-3 py-1 rounded text-lg font-bold min-w-[3rem] text-center">
                          {entities}
                        </span>
                     </div>
                     <input 
                        type="range" min="1" max="50" step="1" 
                        value={entities} onChange={(e) => setEntities(Number(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200 accent-accent-orange"
                     />
                     <div className="text-xs text-secondary flex justify-between">
                       <span>1 (Inklusive)</span>
                       <span>50+</span>
                     </div>
                  </div>

                  {/* SLIDER 2: Revenue */}
                  <div className="space-y-4">
                     <div className="flex justify-between items-end">
                        <div className="flex items-center gap-2">
                          <Banknote size={20} className="text-accent-orange" />
                          <label className="font-bold text-primary">Jahresumsatz (CHF)</label>
                        </div>
                        <span className="font-mono bg-slate-50 text-primary border border-slate-200 px-3 py-1 rounded text-lg font-bold min-w-[3rem] text-center">
                          {revenue} Mio.
                        </span>
                     </div>
                     <input 
                        type="range" min="10" max="500" step="10"
                        value={revenue} onChange={(e) => setRevenue(Number(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200 accent-accent-orange"
                     />
                     <div className="text-xs text-secondary flex justify-between">
                       <span>&lt; 50 Mio. (Inklusive)</span>
                       <span>500 Mio.+</span>
                     </div>
                  </div>

                  {/* TOGGLE: Term Length (Discounts) */}
                  <div className="space-y-4">
                    <label className="font-bold text-primary flex items-center gap-2">
                      Laufzeit & Vorauszahlung
                      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold uppercase">Rabatt sichern</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[12, 24, 36].map((t) => {
                         const discountMap = { 12: '10%', 24: '20%', 36: '30%' };
                         const isActive = term === t;
                         return (
                           <button
                             key={t}
                             onClick={() => setTerm(t as any)}
                             className={`relative py-3 rounded-xl border-2 transition-all duration-200 ${
                               isActive 
                                 ? 'border-accent-orange bg-orange-50 text-primary' 
                                 : 'border-slate-100 bg-white text-secondary hover:border-slate-300'
                             }`}
                           >
                             <div className="font-bold text-sm md:text-base">{t} Monate</div>
                             <div className={`text-xs font-bold mt-1 ${isActive ? 'text-accent-orange' : 'text-slate-400'}`}>
                               {discountMap[t as 12|24|36]} Rabatt
                             </div>
                             {isActive && (
                               <div className="absolute -top-2 -right-2 bg-accent-orange text-white rounded-full p-1">
                                 <CheckCircle2 size={12} />
                               </div>
                             )}
                           </button>
                         )
                      })}
                    </div>
                  </div>

                  {/* CALCULATION RESULT */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
                    {/* Breakdown Lines */}
                    <div className="flex justify-between text-sm text-secondary">
                       <span>Basisfee (inkl. 1 Entity / 50M)</span>
                       <span>{formatCHF(calculations.baseFee)}</span>
                    </div>
                    {calculations.entityFee > 0 && (
                      <div className="flex justify-between text-sm text-secondary">
                         <span>+ {entities - 1} weitere Gesellschaften</span>
                         <span>{formatCHF(calculations.entityFee)}</span>
                      </div>
                    )}
                    {calculations.revenueFee > 0 && (
                      <div className="flex justify-between text-sm text-secondary">
                         <span>+ Umsatz-Upgrade ({calculations.revenueSteps}x Stufe)</span>
                         <span>{formatCHF(calculations.revenueFee)}</span>
                      </div>
                    )}
                    
                    <div className="h-px bg-slate-200 my-2"></div>

                    <div className="flex justify-between text-sm items-center">
                       <span className="text-secondary">Listenpreis (monatlich)</span>
                       <span className="line-through text-slate-400 decoration-slate-400 decoration-1">
                         {formatCHF(calculations.subtotalMonthly)}
                       </span>
                    </div>

                    <div className="flex justify-between text-sm items-center text-green-600 font-medium">
                       <span>Rabatt ({calculations.discountPercent * 100}%)</span>
                       <span>- {formatCHF(calculations.discountAmount)}</span>
                    </div>

                    <div className="h-px bg-slate-200 my-2"></div>

                    {/* Final Total */}
                    <div className="flex justify-between items-end">
                       <span className="font-serif font-bold text-xl text-primary">Total monatlich</span>
                       <div className="text-right">
                          <span className="block font-bold text-3xl text-accent-orange leading-none">
                            {formatCHF(calculations.finalMonthly)}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-1 block">
                            zzgl. MwSt. • Jährliche Verrechnung ({formatCHF(calculations.totalContractValue)})
                          </span>
                       </div>
                    </div>
                  </div>

                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};