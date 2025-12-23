import React, { useState } from 'react';
import { Factory, ShoppingBag, Briefcase, TrendingUp, Users, Package } from 'lucide-react';

const industries = [
  {
    id: 'produktion',
    label: 'Produktion',
    icon: <Factory size={20} />,
    title: 'Maschinenauslastung & Deckungsbeitrag',
    kpis: [
      { label: 'OEE (Overall Equipment Effectiveness)', value: '78.4%' },
      { label: 'Ausschussquote', value: '1.2%' },
      { label: 'DB II pro Produktgruppe', value: 'Live' }
    ],
    desc: 'Verknüpfen Sie Finanzdaten mit Produktionsdaten. Sehen Sie genau, welche Maschine profitabel läuft und wo Materialkosten explodieren.'
  },
  {
    id: 'handel',
    label: 'E-Commerce / Handel',
    icon: <ShoppingBag size={20} />,
    title: 'Warenkorb & Lagerumschlag',
    kpis: [
      { label: 'CAC (Cust. Acquisition Cost)', value: 'CHF 14.20' },
      { label: 'Lagerreichweite', value: '24 Tage' },
      { label: 'Retourenquote', value: '12.5%' }
    ],
    desc: 'Tagesaktuelle Sicht auf Margen nach Abzug von Marketingkosten und Retouren. Liquiditätsplanung basierend auf Lagerbestand.'
  },
  {
    id: 'dienstleistung',
    label: 'Dienstleistung / Agentur',
    icon: <Briefcase size={20} />,
    title: 'Projektabrechnung & Billability',
    kpis: [
      { label: 'Billable Utilization', value: '82%' },
      { label: 'Projekt-Marge Ø', value: '22%' },
      { label: 'Offene Forderungen', value: 'CHF 120k' }
    ],
    desc: 'Tracken Sie Projektbudgets gegen erfasste Stunden. Erkennen Sie Over-Servicing bevor das Projekt unprofitabel wird.'
  }
];

export const IndustryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium mb-4">Branchenspezifische Logik</h2>
          <p className="text-secondary">CoreMIS passt sich Ihrem Geschäftsmodell an.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab.id === ind.id 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white text-secondary hover:bg-slate-50 border border-transparent'
              }`}
            >
              {ind.icon}
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm max-w-4xl mx-auto transition-all duration-300">
           <div className="flex flex-col md:flex-row gap-12 items-center">
             
             <div className="flex-1 space-y-6">
               <h3 className="text-2xl font-serif font-medium text-primary">{activeTab.title}</h3>
               <p className="text-secondary leading-relaxed">{activeTab.desc}</p>
               <button className="text-accent-blue font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                 Beispiel-Dashboard ansehen <TrendingUp size={16} />
               </button>
             </div>

             <div className="flex-1 w-full">
               <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 grid gap-4">
                 {activeTab.kpis.map((kpi, i) => (
                   <div key={i} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-slate-50">
                     <span className="text-sm font-medium text-secondary">{kpi.label}</span>
                     <span className="font-mono font-bold text-primary">{kpi.value}</span>
                   </div>
                 ))}
               </div>
             </div>

           </div>
        </div>
      </div>
    </section>
  );
};