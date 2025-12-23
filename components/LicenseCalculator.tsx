import React, { useState, useMemo } from 'react';
import { CreditCard, Check, Users, Building2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const LicenseCalculator: React.FC = () => {
  const [users, setUsers] = useState(3);
  const [entities, setEntities] = useState(1);
  const [plan, setPlan] = useState<'standard' | 'pro'>('pro');

  const pricing = useMemo(() => {
    const baseFee = plan === 'standard' ? 99 : 199;
    const perUser = plan === 'standard' ? 29 : 49;
    const perEntity = plan === 'standard' ? 39 : 59;

    const total = baseFee + (users * perUser) + ((entities - 1) * perEntity);
    return { total, perUser, perEntity, baseFee };
  }, [users, entities, plan]);

  return (
    <section className="py-20 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Transparente <span className="relative inline-block">
                Preise
                <span className="absolute bottom-1 left-0 w-full h-[0.3em] bg-accent-orange/20 -z-10"></span>
              </span>
            </h2>
            <p className="text-secondary text-lg">
              Keine versteckten Setup-Gebühren. Monatlich kündbar.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-6 md:p-10 shadow-sm border border-slate-100">
            
            {/* Plan Switch */}
            <div className="flex justify-center mb-12">
               <div className="bg-slate-100 p-1.5 rounded-full inline-flex relative">
                  <div className={`absolute top-1.5 bottom-1.5 w-[50%] bg-white rounded-full shadow-sm transition-transform duration-300 ${plan === 'pro' ? 'translate-x-[100%]' : 'translate-x-0'}`}></div>
                  <button 
                    onClick={() => setPlan('standard')}
                    className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors w-32 ${plan === 'standard' ? 'text-primary' : 'text-slate-500'}`}
                  >
                    Standard
                  </button>
                  <button 
                    onClick={() => setPlan('pro')}
                    className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors w-32 ${plan === 'pro' ? 'text-primary' : 'text-slate-500'}`}
                  >
                    Pro
                  </button>
               </div>
            </div>

            <div className="space-y-10">
              {/* Users Slider */}
              <div className="space-y-4">
                 <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <Users size={20} className="text-accent-orange" />
                      <label className="font-bold text-primary">Nutzer (Lizenzen)</label>
                    </div>
                    <span className="font-mono bg-orange-50 text-accent-orange border border-orange-100 px-3 py-1 rounded text-lg font-bold min-w-[3rem] text-center">
                      {users}
                    </span>
                 </div>
                 <input 
                    type="range" min="1" max="50" value={users} onChange={(e) => setUsers(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                 />
                 <div className="flex justify-between text-xs text-slate-400 font-medium">
                   <span>1 User</span>
                   <span>50 Users</span>
                 </div>
              </div>

              {/* Entities Slider */}
              <div className="space-y-4">
                 <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <Building2 size={20} className="text-accent-orange" />
                      <label className="font-bold text-primary">Mandanten / Gesellschaften</label>
                    </div>
                    <span className="font-mono bg-orange-50 text-accent-orange border border-orange-100 px-3 py-1 rounded text-lg font-bold min-w-[3rem] text-center">
                      {entities}
                    </span>
                 </div>
                 <input 
                    type="range" min="1" max="20" value={entities} onChange={(e) => setEntities(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                 />
                 <div className="flex justify-between text-xs text-slate-400 font-medium">
                   <span>1 Entity</span>
                   <span>20 Entities</span>
                 </div>
              </div>
            </div>

            {/* Features List based on Plan */}
            <div className="mt-12 pt-8 border-t border-slate-100 grid md:grid-cols-2 gap-4">
               {plan === 'standard' ? (
                 <>
                   <div className="flex gap-2 items-center text-sm text-secondary"><Check size={16} className="text-green-500" /> Standard Reporting</div>
                   <div className="flex gap-2 items-center text-sm text-secondary"><Check size={16} className="text-green-500" /> DATEV Anbindung</div>
                   <div className="flex gap-2 items-center text-sm text-secondary"><Check size={16} className="text-green-500" /> Tägliche Updates</div>
                   <div className="flex gap-2 items-center text-sm text-slate-400 line-through decoration-slate-300"><Check size={16} className="text-slate-300" /> KI-Analysen</div>
                 </>
               ) : (
                 <>
                   <div className="flex gap-2 items-center text-sm text-secondary"><Check size={16} className="text-green-500" /> Alles aus Standard</div>
                   <div className="flex gap-2 items-center text-sm text-secondary"><Check size={16} className="text-green-500" /> KI-Analysen & Bot</div>
                   <div className="flex gap-2 items-center text-sm text-secondary"><Check size={16} className="text-green-500" /> Holding-Konsolidierung</div>
                   <div className="flex gap-2 items-center text-sm text-secondary"><Check size={16} className="text-green-500" /> Prio Support</div>
                 </>
               )}
            </div>
          </div>

          {/* Output Card */}
          <div className="lg:col-span-5 relative">
             <div className="sticky top-24">
               <div className="bg-darkbg text-white rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden relative">
                  {/* Decor */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/20 rounded-full blur-[80px] pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Geschätzter Preis</div>
                    <div className="flex items-baseline gap-2 mb-8">
                       <span className="text-5xl md:text-6xl font-bold">{pricing.total}€</span>
                       <span className="text-slate-400">/ monatlich</span>
                    </div>

                    <div className="space-y-4 mb-8">
                       <div className="flex justify-between text-sm text-slate-300 border-b border-white/10 pb-2">
                         <span>Grundgebühr ({plan})</span>
                         <span>{pricing.baseFee}€</span>
                       </div>
                       <div className="flex justify-between text-sm text-slate-300 border-b border-white/10 pb-2">
                         <span>{users} Nutzer x {pricing.perUser}€</span>
                         <span>{users * pricing.perUser}€</span>
                       </div>
                       {entities > 1 && (
                         <div className="flex justify-between text-sm text-slate-300 border-b border-white/10 pb-2">
                           <span>{entities - 1} zus. Mandanten</span>
                           <span>{(entities - 1) * pricing.perEntity}€</span>
                         </div>
                       )}
                    </div>

                    <button className="w-full bg-white text-primary hover:bg-accent-orange hover:text-white transition-all py-4 rounded-xl font-bold flex items-center justify-center gap-2 group">
                       <CreditCard size={18} />
                       Jetzt Angebot anfordern
                    </button>
                    <p className="text-center text-[10px] text-slate-500 mt-4">
                      Zzgl. MwSt. Jährliche Zahlweise.
                    </p>
                  </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};