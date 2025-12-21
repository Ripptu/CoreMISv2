import React, { useState } from 'react';
import { Layers, PieChart, Check } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

type TabKey = 'pnl' | 'consolidation' | 'forecast';

const contentData = {
  pnl: {
    title: "Perfekte Dashboards. Jeden einzelnen Tag.",
    desc: "Trainieren Sie CoreMIS einmal mit Ihrer BWA-Struktur. Es behandelt technische Fragen, mappt Buchungskonten und qualifiziert Abweichungen ohne manuellen Aufwand.",
    cardTitle: "Finanzmodell V2",
    items: [
      { label: "Umsatz Reconciliation", status: "MATCHED", color: "green" },
      { label: "Materialaufwand Check", status: "OK", color: "green" },
      { label: "Custom Report Request", status: "GENERATING", color: "orange" }
    ]
  },
  consolidation: {
    title: "Konsolidierung auf Autopilot.",
    desc: "Verbinden Sie mehrere Mandanten oder Gesellschaften. CoreMIS eliminiert Intercompany-Umsätze automatisch und liefert Ihnen den echten Konzernblick.",
    cardTitle: "Holding Konsolidierung",
    items: [
      { label: "IC Elimination Entity A", status: "REMOVED", color: "green" },
      { label: "Währungsumrechnung (USD)", status: "UPDATED", color: "green" },
      { label: "Konzernbericht Q3", status: "READY", color: "orange" }
    ]
  },
  forecast: {
    title: "Blick in die Zukunft.",
    desc: "Basierend auf historischen Daten und offenen Posten berechnet CoreMIS Ihre Liquidität für die nächsten 12 Monate. Keine statische Excel-Tapete mehr.",
    cardTitle: "Liqui-Planung 2024",
    items: [
      { label: "OpOS Analyse", status: "IMPORTED", color: "green" },
      { label: "Runway Calculation", status: "18 MONTHS", color: "green" },
      { label: "Szenario: Best Case", status: "ACTIVE", color: "orange" }
    ]
  }
};

export const ProductValue: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('pnl');

  const activeContent = contentData[activeTab];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Centered Headline Section */}
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Daten einmal verbinden. <br/>
              <span className="italic text-accent-orange text-glow">Für immer steuern.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
              CoreMIS liefert das hybride Modell zwischen Excel-Flexibilität und SAP-Struktur. 
              Verlässlichkeit einer Datenbank, mit der Logik Ihres CFOs.
            </p>
          </div>
        </RevealOnScroll>

        {/* Floating Menu / Toggle Mockup */}
        <RevealOnScroll delay={100}>
          <div className="flex justify-center mb-12 overflow-x-auto pb-4 md:pb-0 px-4 md:px-0 scrollbar-hide">
            <div className="inline-flex flex-nowrap justify-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm min-w-max">
              <button 
                onClick={() => setActiveTab('pnl')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'pnl' ? 'bg-accent-orange text-white shadow-glow' : 'text-slate-400 hover:text-white'}`}
              >
                Automated P&L
              </button>
              <button 
                onClick={() => setActiveTab('consolidation')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'consolidation' ? 'bg-accent-orange text-white shadow-glow' : 'text-slate-400 hover:text-white'}`}
              >
                Consolidation
              </button>
              <button 
                onClick={() => setActiveTab('forecast')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'forecast' ? 'bg-accent-orange text-white shadow-glow' : 'text-slate-400 hover:text-white'}`}
              >
                Forecast
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Large Feature Card */}
        <RevealOnScroll delay={200}>
          <div className="bg-gradient-to-br from-accent-orange to-orange-600 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 text-white relative overflow-hidden shadow-2xl transition-all duration-500">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
              <div className="transition-opacity duration-300 animate-in fade-in slide-in-from-left-4">
                <h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 leading-tight min-h-0">
                  {activeContent.title}
                </h3>
                <p className="text-orange-100 text-base md:text-lg mb-6 md:mb-8 leading-relaxed min-h-0">
                  {activeContent.desc}
                </p>
              </div>

              {/* Inner White Card */}
              <div className="bg-white rounded-3xl p-5 md:p-8 text-primary shadow-xl transition-all duration-300">
                 <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 rounded-full bg-darkbg flex items-center justify-center text-white font-bold shrink-0">
                      CM
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{activeContent.cardTitle}</div>
                      <div className="text-xs text-secondary">Synchronized • Just now</div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    {activeContent.items.map((item, idx) => (
                      <div key={idx} className={`flex justify-between items-center p-3 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-500 delay-${idx*100} ${item.color === 'orange' ? 'bg-orange-50/50 border border-orange-100' : 'bg-slate-50'}`}>
                         <span className="text-sm font-medium">{item.label}</span>
                         <span className={`text-[10px] font-bold px-2 py-1 rounded ${item.color === 'orange' ? 'text-accent-orange bg-white shadow-sm' : 'text-green-600 bg-green-100'}`}>
                           {item.status}
                         </span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};