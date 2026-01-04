import React, { useState, useMemo } from 'react';
import { Calculator, Building2, Banknote, CalendarCheck, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const LicenseCalculator: React.FC = () => {
  const [entities, setEntities] = useState(5); // Default adjusted to 5
  const [revenue, setRevenue] = useState(30); // Default adjusted to 30 Mio
  const [term, setTerm] = useState<1 | 12 | 24 | 36>(1); // Changed default to 1 as requested

  const calculations = useMemo(() => {
    // 1. Base Fee (Monthly)
    const baseMonthly = 800;

    // 2. Entity Fee (Monthly) - 40 CHF per additional entity
    const additionalEntitiesCount = Math.max(0, entities - 1);
    const entityFeeMonthly = additionalEntitiesCount * 40;

    // 3. Revenue Fee (Monthly) - 80 CHF per additional 50 Mio
    // Base includes up to 50M.
    const revenueOverhead = Math.max(0, revenue - 50);
    const revenueSteps = Math.ceil(revenueOverhead / 50);
    const revenueFeeMonthly = revenueSteps * 80;

    // 4. Discount Logic
    let discountPercent = 0;
    if (term === 1) discountPercent = 0;     // Standard
    if (term === 12) discountPercent = 0.10; // 10%
    if (term === 24) discountPercent = 0.20; // 20%
    if (term === 36) discountPercent = 0.30; // 30%

    // "Scaling Fee" (formerly Add-ons)
    const scalingFeeMonthly = entityFeeMonthly + revenueFeeMonthly;
    
    // Total List Price (Monthly)
    const totalListMonthly = baseMonthly + scalingFeeMonthly;

    // Discount applies to the TOTAL price now (as requested: "Rabatt auf den Gesamtpreis berechnen")
    const discountAmountMonthly = totalListMonthly * discountPercent;

    // Final Price (Monthly)
    const finalMonthly = totalListMonthly - discountAmountMonthly;
    
    return {
      baseMonthly,
      scalingFeeMonthly,
      totalListMonthly,
      discountPercent,
      discountAmountMonthly,
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
    <section id="lizenzrechner" className="py-16 md:py-24 bg-surface border-t border-border relative">
      <div className="max-w-[1024px] mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          
          {/* LEFT SIDE: Context */}
          <div className="pt-2">
            <RevealOnScroll>
              <div className="mb-8">
                 <div className="inline-flex items-center gap-2 text-accent-orange font-bold text-sm uppercase tracking-widest mb-3">
                   <Calculator size={16} /> SaaS Kalkulator
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                   Lizenzmodell.
                 </h2>
                 <p className="text-lg text-secondary leading-relaxed max-w-sm">
                   Unser Preismodell passt sich an. Zahlen Sie nur für die Grösse und Komplexität, die Sie tatsächlich managen.
                 </p>
              </div>

              {/* Title above specs */}
              <h4 className="text-accent-orange font-bold text-sm uppercase tracking-widest mb-4">
                KALKULATOR AUF MONATSPREISE AUFBAUEND
              </h4>

              {/* Specs Box - Increased Fonts */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    {/* Increased to text-lg */}
                    <strong className="text-primary block text-lg mb-1">Basisfee (CHF 800 / Monat)</strong>
                    {/* Increased to text-base */}
                    <span className="text-base text-secondary leading-snug block">
                      Inkludiert 1 Gesellschaft und bis zu <br className="block sm:hidden" />CHF&nbsp;50&nbsp;Mio. Umsatz.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    {/* Increased to text-lg */}
                    <strong className="text-primary block text-lg mb-1">Scaling Fee</strong>
                    {/* Increased to text-base */}
                    <span className="text-base text-secondary leading-snug block">
                      + CHF 40 / weitere Gesellschaft<br/>
                      + CHF 80 / weitere 50 Mio. Umsatz
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Rates - Increased Fonts */}
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Service Rates</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-lg">
                    <span className="text-primary">Beratung & Schulung</span>
                    <span className="font-bold text-accent-orange tracking-tight">CHF 200 / h</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-primary">Entwicklung</span>
                    <span className="font-bold text-accent-orange tracking-tight">CHF 160 / h</span>
                  </div>
                </div>
              </div>

            </RevealOnScroll>
          </div>

          {/* RIGHT SIDE: Interactive Calculator */}
          <div>
            <RevealOnScroll delay={100}>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform transition-all hover:scale-[1.01]">
                
                {/* Header */}
                <div className="bg-primary text-white p-5 md:p-6 flex justify-between items-center">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Konfiguration</div>
                    <div className="font-serif text-2xl italic">Ihr Preis</div>
                  </div>
                  <CalendarCheck size={28} className="text-accent-orange opacity-80" />
                </div>

                <div className="p-5 md:p-8 space-y-8">
                  
                  {/* Slider 1: Entities */}
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        {/* Label increased */}
                        <label className="font-bold text-primary text-base md:text-lg flex items-center gap-2">
                           <Building2 size={20} className="text-accent-orange" /> Gesellschaften
                        </label>
                        <span className="font-mono bg-slate-50 text-primary border border-slate-200 px-3 py-1 rounded text-base md:text-lg font-bold min-w-[3.5rem] text-center">
                          {entities}
                        </span>
                     </div>
                     <div className="py-2">
                       <input 
                          type="range" min="1" max="50" step="1" 
                          value={entities} onChange={(e) => setEntities(Number(e.target.value))}
                          className="w-full h-2 md:h-3 rounded-lg appearance-none cursor-pointer bg-slate-200 accent-accent-orange touch-action-manipulation"
                       />
                     </div>
                  </div>

                  {/* Slider 2: Revenue */}
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        {/* Label increased */}
                        <label className="font-bold text-primary text-base md:text-lg flex items-center gap-2">
                          <Banknote size={20} className="text-accent-orange" /> Jahresumsatz
                        </label>
                        <span className="font-mono bg-slate-50 text-primary border border-slate-200 px-3 py-1 rounded text-base md:text-lg font-bold min-w-[4rem] text-center">
                          {revenue} M
                        </span>
                     </div>
                     <div className="py-2">
                       <input 
                          type="range" min="10" max="500" step="10"
                          value={revenue} onChange={(e) => setRevenue(Number(e.target.value))}
                          className="w-full h-2 md:h-3 rounded-lg appearance-none cursor-pointer bg-slate-200 accent-accent-orange touch-action-manipulation"
                       />
                     </div>
                  </div>

                  {/* Vorauszahlungsrabatt Options */}
                  <div className="space-y-4">
                    <label className="font-bold text-primary text-xs uppercase tracking-wider text-accent-orange">Vorauszahlungsrabatt</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[1, 12, 24, 36].map((t) => {
                         const discountMap = { 1: 'Standard', 12: '10 %', 24: '20 %', 36: '30 %' };
                         const isActive = term === t;
                         const label = discountMap[t as 1|12|24|36];
                         const hasDiscount = t > 1;
                         
                         return (
                           <button
                             key={t}
                             onClick={() => setTerm(t as any)}
                             className={`py-3 px-1 rounded-xl border text-sm transition-all flex flex-col items-center justify-center ${
                               isActive 
                                 ? 'border-accent-orange bg-orange-50 text-primary font-bold shadow-md' 
                                 : 'border-slate-100 bg-white text-secondary hover:border-slate-300'
                             }`}
                           >
                             <span className="whitespace-nowrap">{t} Mt.</span>
                             <span className={`text-[10px] md:text-xs font-bold mt-1 ${isActive && hasDiscount ? 'text-accent-orange' : 'text-slate-400'}`}>
                               {hasDiscount ? `-${label}` : label}
                             </span>
                           </button>
                         )
                      })}
                    </div>
                  </div>

                  {/* Result Box - Adjusted padding and font sizes for mobile to prevent cutoff */}
                  <div className="bg-slate-50 rounded-xl p-4 md:p-6 border border-slate-200 space-y-3 md:space-y-4">
                    <div className="flex justify-between text-sm md:text-base text-secondary">
                       <span>Basisfee</span>
                       <span className="font-mono">{formatCHF(calculations.baseMonthly)}</span>
                    </div>
                    {(calculations.scalingFeeMonthly > 0) && (
                       <div className="flex justify-between text-sm md:text-base text-secondary">
                          <span>Scaling Fee</span>
                          <span className="font-mono">+ {formatCHF(calculations.scalingFeeMonthly)}</span>
                       </div>
                    )}
                     <div className="flex justify-between text-sm md:text-base font-medium text-primary border-t border-slate-200 pt-3 mt-2">
                       <span>Total Listenpreis</span>
                       <span className="font-mono">{formatCHF(calculations.totalListMonthly)}</span>
                    </div>

                    {calculations.discountAmountMonthly > 0 && (
                      <div className="flex justify-between text-sm md:text-base text-green-600 font-medium pt-1">
                        <span className="mr-2">Rabatt ({calculations.discountPercent * 100}%)</span>
                        <span className="font-mono whitespace-nowrap">- {formatCHF(calculations.discountAmountMonthly)}</span>
                      </div>
                    )}
                    
                    <div className="h-px bg-slate-200 my-2"></div>

                    {/* Adjusted alignment to baseline and added gap */}
                    <div className="flex justify-between items-baseline gap-4 md:gap-8 pt-2">
                       <span className="font-bold text-lg md:text-xl text-primary mb-1">Monatlich</span>
                       <div className="text-right">
                          <span className="block font-bold text-4xl md:text-5xl text-accent-orange leading-none font-mono">
                            {formatCHF(calculations.finalMonthly)}
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