import React, { useState, useMemo } from 'react';
import { Calculator, Building2, Banknote, CalendarCheck, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const LicenseCalculator: React.FC = () => {
  const [entities, setEntities] = useState(18); // Default from screenshot
  const [revenue, setRevenue] = useState(300); // Default from screenshot (Mio)
  const [term, setTerm] = useState<12 | 24 | 36>(12);

  const calculations = useMemo(() => {
    // 1. Annual Base Fee (9'600 CHF/Year, which is 800/Month)
    // Covers 1 Entity, up to 50 Mio Revenue.
    const baseAnnual = 9600;

    // 2. Entity Fee (500 CHF/Year per additional entity)
    const additionalEntitiesCount = Math.max(0, entities - 1);
    const entityFeeAnnual = additionalEntitiesCount * 500;

    // 3. Revenue Fee (1'000 CHF/Year per additional 50 Mio started)
    const revenueOverhead = Math.max(0, revenue - 50);
    const revenueSteps = Math.ceil(revenueOverhead / 50);
    const revenueFeeAnnual = revenueSteps * 1000;

    // Total List Price (Annual)
    const totalListAnnual = baseAnnual + entityFeeAnnual + revenueFeeAnnual;

    // 4. Discount based on Term (Vorauszahlung)
    let discountPercent = 0;
    if (term === 12) discountPercent = 0.10; // 10%
    if (term === 24) discountPercent = 0.20; // 20%
    if (term === 36) discountPercent = 0.30; // 30%

    // Discount applies to the Total Annual List Price
    const discountAmountAnnual = totalListAnnual * discountPercent;
    
    // Final Annual Price
    const finalAnnual = totalListAnnual - discountAmountAnnual;
    
    // Monthly Equivalent
    const finalMonthly = finalAnnual / 12;

    return {
      baseAnnual,
      entityFeeAnnual,
      revenueFeeAnnual,
      totalListAnnual,
      discountPercent,
      discountAmountAnnual,
      finalAnnual,
      finalMonthly,
    };
  }, [entities, revenue, term]);

  // Helper for CHF
  const formatCHF = (val: number) => new Intl.NumberFormat('de-CH', { 
    style: 'currency', 
    currency: 'CHF', 
    maximumFractionDigits: 0 
  }).format(val);

  return (
    <section className="py-16 md:py-20 bg-surface border-t border-border relative">
      {/* Smaller Container Width for Compact Look */}
      <div className="max-w-[1024px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* LEFT SIDE: Context (Compact) */}
          <div className="pt-2">
            <RevealOnScroll>
              <div className="mb-6">
                 <div className="inline-flex items-center gap-2 text-accent-orange font-bold text-xs uppercase tracking-widest mb-3">
                   <Calculator size={14} /> SaaS Kalkulator
                 </div>
                 <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight">
                   Individuelles <span className="text-accent-orange">Lizenzmodell.</span>
                 </h2>
                 <p className="text-sm text-secondary leading-relaxed max-w-sm">
                   Unser Preismodell passt sich an. Zahlen Sie nur für die Komplexität, die Sie tatsächlich managen.
                 </p>
              </div>

              {/* Compact Specs Box */}
              <div className="bg-white rounded-xl p-4 border border-border shadow-sm space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block text-sm">Basis-Lizenz (CHF 9'600 / Jahr)</strong>
                    <span className="text-[11px] text-secondary">Inkludiert 1 Gesellschaft & bis 50 Mio. Umsatz.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block text-sm">Fair Scaling (pro Jahr)</strong>
                    <span className="text-[11px] text-secondary">+ CHF 500 / weitere Gesellschaft<br/>+ CHF 1'000 / weitere 50 Mio. Umsatz</span>
                  </div>
                </div>
              </div>

              {/* Compact Service Rates */}
              <div className="border-t border-slate-200 pt-4">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Service Rates</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">Beratung & Schulung</span>
                    <span className="font-mono text-accent-orange font-bold text-xs">CHF 200 / h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">Entwicklung</span>
                    <span className="font-mono text-accent-orange font-bold text-xs">CHF 160 / h</span>
                  </div>
                </div>
              </div>

            </RevealOnScroll>
          </div>

          {/* RIGHT SIDE: Compact Interactive Calculator */}
          <div>
            <RevealOnScroll delay={100}>
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                
                {/* Header - Compact */}
                <div className="bg-primary text-white p-4 flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Konfiguration</div>
                    <div className="font-serif text-lg italic">Ihr Preismodell</div>
                  </div>
                  <CalendarCheck size={20} className="text-accent-orange opacity-80" />
                </div>

                <div className="p-5 space-y-6">
                  
                  {/* Slider 1: Entities */}
                  <div className="space-y-2">
                     <div className="flex justify-between items-center">
                        <label className="font-bold text-primary text-sm flex items-center gap-2">
                           <Building2 size={16} className="text-accent-orange" /> Gesellschaften
                        </label>
                        <span className="font-mono bg-slate-50 text-primary border border-slate-200 px-2 py-0.5 rounded text-sm font-bold min-w-[2.5rem] text-center">
                          {entities}
                        </span>
                     </div>
                     <input 
                        type="range" min="1" max="50" step="1" 
                        value={entities} onChange={(e) => setEntities(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-slate-200 accent-accent-orange"
                     />
                  </div>

                  {/* Slider 2: Revenue */}
                  <div className="space-y-2">
                     <div className="flex justify-between items-center">
                        <label className="font-bold text-primary text-sm flex items-center gap-2">
                          <Banknote size={16} className="text-accent-orange" /> Jahresumsatz
                        </label>
                        <span className="font-mono bg-slate-50 text-primary border border-slate-200 px-2 py-0.5 rounded text-sm font-bold min-w-[2.5rem] text-center">
                          {revenue} M
                        </span>
                     </div>
                     <input 
                        type="range" min="10" max="500" step="10"
                        value={revenue} onChange={(e) => setRevenue(Number(e.target.value))}
                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-slate-200 accent-accent-orange"
                     />
                  </div>

                  {/* Term Buttons - Compact Grid */}
                  <div className="space-y-2">
                    <label className="font-bold text-primary text-xs uppercase tracking-wider text-slate-400">Laufzeit & Rabatt</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[12, 24, 36].map((t) => {
                         const discountMap = { 12: '10%', 24: '20%', 36: '30%' };
                         const isActive = term === t;
                         return (
                           <button
                             key={t}
                             onClick={() => setTerm(t as any)}
                             className={`py-2 rounded-lg border text-xs transition-all flex flex-col items-center justify-center ${
                               isActive 
                                 ? 'border-accent-orange bg-orange-50 text-primary font-bold' 
                                 : 'border-slate-100 bg-white text-secondary hover:border-slate-300'
                             }`}
                           >
                             <span>{t} Mon.</span>
                             <span className={`text-[10px] ${isActive ? 'text-accent-orange' : 'text-slate-400'}`}>-{discountMap[t as 12|24|36]}</span>
                           </button>
                         )
                      })}
                    </div>
                  </div>

                  {/* Result Box - Compact */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs text-secondary">
                       <span>Basisfee (Listenpreis)</span>
                       <span>{formatCHF(calculations.baseAnnual)}</span>
                    </div>
                    {(calculations.entityFeeAnnual > 0 || calculations.revenueFeeAnnual > 0) && (
                       <div className="flex justify-between text-xs text-secondary">
                          <span>Add-ons (pro Jahr)</span>
                          <span>+ {formatCHF(calculations.entityFeeAnnual + calculations.revenueFeeAnnual)}</span>
                       </div>
                    )}
                     <div className="flex justify-between text-xs font-medium text-primary border-t border-slate-200 pt-1 mt-1">
                       <span>Total Listenpreis (Jahr)</span>
                       <span>{formatCHF(calculations.totalListAnnual)}</span>
                    </div>

                    <div className="flex justify-between text-xs text-green-600 font-medium pt-1">
                       <span>Vorauszahlungsrabatt ({calculations.discountPercent * 100}%)</span>
                       <span>- {formatCHF(calculations.discountAmountAnnual)}</span>
                    </div>
                    
                    <div className="h-px bg-slate-200 my-1"></div>

                    <div className="flex justify-between items-end">
                       <span className="font-bold text-sm text-primary">Ø Monatlich</span>
                       <div className="text-right">
                          <span className="block font-bold text-2xl text-accent-orange leading-none">
                            {formatCHF(calculations.finalMonthly)}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">
                            Rechnung: {formatCHF(calculations.finalAnnual)} / Jahr
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