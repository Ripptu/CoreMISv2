import React, { useState, useMemo } from 'react';
import { Calculator } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const ROICalculator: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  // Basic State
  const [excelFiles, setExcelFiles] = useState(15);
  const [hoursPerMonth, setHoursPerMonth] = useState(21);
  const [hourlyRate, setHourlyRate] = useState(125); // Slightly adjusted for Swiss context

  const calculations = useMemo(() => {
    // 1. Direct Personnel Cost (The Visible Work)
    const directPersonnelCost = hoursPerMonth * hourlyRate * 12;
    
    // 2. Excel Maintenance Overhead (The "Tech Debt" Cost)
    const maintenanceOverheadPerFile = 0.5; 
    const excelMaintenanceCost = excelFiles * maintenanceOverheadPerFile * hourlyRate * 12;

    const total = directPersonnelCost + excelMaintenanceCost;

    return { 
      total, 
      breakdown: { 
        direct: directPersonnelCost, 
        maintenance: excelMaintenanceCost
      } 
    };
  }, [excelFiles, hoursPerMonth, hourlyRate]);

  // Focus Mode Handlers
  const handleInteractionStart = () => setIsFocused(true);
  const handleInteractionEnd = () => setIsFocused(false);

  // Helper for Swiss Currency Formatting
  const formatCHF = (val: number) => new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF', maximumFractionDigits: 0 }).format(val);

  return (
    <section id="roi" className="py-20 md:py-32 bg-background relative">
      
      {/* FOCUS MODE OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40 transition-opacity duration-500 pointer-events-none ${isFocused ? 'opacity-100' : 'opacity-0'}`}
      ></div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-100/60 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-50">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Text & Result */}
          <RevealOnScroll>
            <div>
               {/* Tag */}
               <div className="inline-flex items-center gap-2 bg-orange-50 rounded-lg px-3 py-1.5 mb-8 border border-orange-100">
                 <Calculator size={16} className="text-accent-orange" />
                 <span className="text-[10px] font-bold tracking-[0.15em] text-accent-orange uppercase">ROI Rechner</span>
               </div>

               <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-[1.1]">
                 Was kostet Sie manuelles <br/>
                 <span className="relative inline-block px-1 z-10 mt-1">
                   <span className="font-serif italic font-bold relative z-10">Reporting?</span>
                   {/* Image Brush Stroke */}
                   <img 
                     src="https://static.vecteezy.com/system/resources/thumbnails/049/161/109/small/orange-paint-brushstroke-with-transparent-background-perfect-for-designs-and-projects-png.png"
                     alt=""
                     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[150%] -z-10 object-contain opacity-90 mix-blend-multiply"
                   />
                 </span>
               </h2>

               <p className="text-base md:text-lg text-secondary leading-relaxed mb-12 max-w-md">
                 Excel generiert linear steigende Kosten. Je mehr Quellen und Komplexität, desto höher der wiederkehrende manuelle Aufwand („Excel Tax“).
               </p>

               {/* Result Box */}
               <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 p-6 md:p-8 border-l-4 border-l-accent-orange relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="text-4xl md:text-6xl font-serif font-medium text-accent-orange mb-2 tracking-tight">
                      {formatCHF(calculations.total)}
                    </div>
                    <div className="text-sm font-medium text-secondary mb-4">
                       Verschwendetes Budget pro Jahr (Personalkosten + Wartung)
                    </div>
                    
                    {/* Small Breakdown for transparency */}
                    <div className="text-[10px] text-slate-400 space-y-1 border-t border-slate-100 pt-3">
                       <div className="flex justify-between">
                         <span>Manuelle Arbeit:</span>
                         <span>{formatCHF(calculations.breakdown.direct)}</span>
                       </div>
                       <div className="flex justify-between">
                         <span>Wartung Excel-Quellen:</span>
                         <span>{formatCHF(calculations.breakdown.maintenance)}</span>
                       </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </div>
            </div>
          </RevealOnScroll>

          {/* RIGHT SIDE: Calculator Card */}
          <RevealOnScroll delay={200}>
            <div 
               className={`bg-white rounded-[32px] p-6 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative transition-transform duration-300 ${isFocused ? 'scale-[1.02] shadow-2xl' : ''}`}
               onMouseEnter={handleInteractionStart}
               onMouseLeave={handleInteractionEnd}
               onTouchStart={handleInteractionStart}
               onTouchEnd={handleInteractionEnd}
            >
               <div className="space-y-8 md:space-y-10 pt-4">
                 
                 {/* STANDARD INPUTS */}
                 <div className="space-y-2 group">
                   <div className="flex justify-between items-end mb-4">
                     <label className="font-medium text-primary text-sm md:text-base">Anzahl Datenquellen</label>
                     <span className="font-mono bg-slate-50 border border-slate-100 px-3 py-1 rounded text-sm min-w-[3rem] text-center">{excelFiles}</span>
                   </div>
                   <input 
                      type="range" min="1" max="50" value={excelFiles} onChange={(e) => setExcelFiles(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                   />
                   <p className="text-[10px] text-slate-400 mt-1">
                     Kalkuliert 30 Min. Wartungsaufwand (Links, Struktur, Versionierung) pro Datei/Monat.
                   </p>
                 </div>

                 <div className="space-y-2 group">
                   <div className="flex justify-between items-end mb-4">
                     <label className="font-medium text-primary text-sm md:text-base">Manuelle Stunden / Monat</label>
                     <span className="font-mono bg-slate-50 border border-slate-100 px-3 py-1 rounded text-sm min-w-[3rem] text-center">{hoursPerMonth} h</span>
                   </div>
                   <input 
                      type="range" min="1" max="100" value={hoursPerMonth} onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                   />
                   <p className="text-xs text-secondary mt-2">Reine Arbeitszeit für Export, Copy-Paste, Formatting.</p>
                 </div>

                 <div className="space-y-2 group">
                   <div className="flex justify-between items-end mb-4">
                     <label className="font-medium text-primary text-sm md:text-base">Stundensatz Controller (Intern)</label>
                     <span className="font-mono bg-slate-50 border border-slate-100 px-3 py-1 rounded text-sm min-w-[3rem] text-center">CHF {hourlyRate}</span>
                   </div>
                   <input 
                      type="range" min="80" max="300" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200"
                   />
                 </div>

               </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};