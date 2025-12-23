import React, { useRef } from 'react';
import { Database, FileCog, BarChart3, Check } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { motion, useScroll, useTransform } from 'framer-motion';

export const DataJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });

  // Calculate the path length for the orange fill based on scroll
  // Map 0 to 1 as we scroll through the section
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white border-y border-border overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 relative">
        <RevealOnScroll>
          <h2 className="text-3xl font-serif font-medium text-center mb-20 md:mb-24">Die CoreMIS Journey</h2>
        </RevealOnScroll>
        
        <div className="relative max-w-4xl mx-auto">
          
          {/* === CONNECTING LINES === */}
          {/* Desktop Center Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] h-full z-0">
             <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
               {/* Background Grey Line */}
               <line x1="1.5" y1="0" x2="1.5" y2="100%" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
               
               {/* Foreground Orange Line (Animated) */}
               <motion.path
                 d="M 1.5 0 L 1.5 5000" // Draw a very long line that gets clipped by pathLength
                 stroke="#F97316"
                 strokeWidth="3"
                 strokeLinecap="round"
                 style={{ pathLength }} 
               />
             </svg>
          </div>

          <div className="space-y-24 md:space-y-36 relative z-10">
            
            {/* Step 1: Left Text, Right Visual */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 group">
                 {/* Text Left (Desktop) / Right (Mobile) */}
                 <div className="md:w-1/2 md:pr-16 text-left md:text-right order-2 md:order-1 pl-20 md:pl-0">
                   <RevealOnScroll>
                    <h3 className="text-2xl font-bold text-primary mb-3">1. Extraktion & Anbindung</h3>
                    <p className="text-secondary text-lg">Automatischer Datenabzug aus DATEV, SAP, ERP oder Bankkonten. Verschlüsselt und revisionssicher.</p>
                   </RevealOnScroll>
                 </div>
                 
                 {/* Checkpoint Icon */}
                 <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-14 h-14 z-10 md:order-2 top-0 md:top-auto">
                   <motion.div 
                     initial={{ backgroundColor: "#FFFFFF", borderColor: "#F1F5F9", scale: 1, color: "#64748B" }}
                     whileInView={{ backgroundColor: "#FFF7ED", borderColor: "#F97316", scale: 1.1, color: "#F97316" }}
                     viewport={{ margin: "-50% 0px -50% 0px" }} // Triggers when in middle of screen
                     transition={{ duration: 0.3 }}
                     className="w-full h-full border-4 rounded-full flex items-center justify-center shadow-lg bg-white"
                   >
                     <Database size={24} />
                   </motion.div>
                 </div>
                 
                 {/* Visual Right (Desktop) / Bottom (Mobile) */}
                 <div className="md:w-1/2 md:pl-16 order-3 pl-20 md:pl-0 w-full">
                   <RevealOnScroll delay={200}>
                     <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-xs font-mono text-secondary max-w-[320px] shadow-sm hover:shadow-md transition-shadow">
                       <div className="flex justify-between border-b border-slate-200 pb-3 mb-3">
                          <span className="font-bold text-slate-400">SOURCE</span>
                          <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2 py-0.5 rounded font-bold">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            CONNECTED
                          </div>
                       </div>
                       <div className="space-y-2">
                         <div className="flex items-center gap-3 bg-white p-2 rounded border border-slate-100"><div className="w-2 h-2 bg-green-500 rounded-full"></div> DATEV Connect Online</div>
                         <div className="flex items-center gap-3 bg-white p-2 rounded border border-slate-100"><div className="w-2 h-2 bg-green-500 rounded-full"></div> SAP Business One</div>
                         <div className="flex items-center gap-3 bg-white p-2 rounded border border-slate-100"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Commerzbank API</div>
                       </div>
                     </div>
                   </RevealOnScroll>
                 </div>
            </div>

            {/* Step 2: Right Text, Left Visual */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 group">
                 
                 {/* Mobile Text */}
                 <div className="md:hidden order-2 pl-20 w-full">
                   <RevealOnScroll>
                     <h3 className="text-2xl font-bold text-primary mb-3">2. Konsolidierung & Logik</h3>
                     <p className="text-secondary text-lg">Mapping auf Ihre BWA-Struktur. Währungsumrechnung. Intercompany-Eliminierung.</p>
                   </RevealOnScroll>
                 </div>

                 {/* Visual Left (Desktop) / Bottom (Mobile) */}
                 <div className="md:w-1/2 md:pr-16 md:text-right flex md:justify-end order-3 md:order-1 pl-20 md:pl-0 w-full">
                    <RevealOnScroll delay={200}>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-xs font-mono text-secondary flex flex-col gap-3 max-w-[320px] w-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-slate-400">
                          <FileCog size={14} />
                          <span className="font-bold">TRANSFORMATION RULES</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                          <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                          <span className="truncate">Map: Acct 4400 {'->'} Umsatzerlöse</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm opacity-60">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="truncate">Eliminate: IC Revenue (Partner A)</span>
                        </div>
                      </div>
                    </RevealOnScroll>
                 </div>

                 {/* Checkpoint Icon */}
                 <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-14 h-14 z-10 order-1 md:order-2 top-0 md:top-auto">
                   <motion.div 
                     initial={{ backgroundColor: "#FFFFFF", borderColor: "#F1F5F9", scale: 1, color: "#64748B" }}
                     whileInView={{ backgroundColor: "#FFF7ED", borderColor: "#F97316", scale: 1.1, color: "#F97316" }}
                     viewport={{ margin: "-50% 0px -50% 0px" }}
                     transition={{ duration: 0.3 }}
                     className="w-full h-full border-4 rounded-full flex items-center justify-center shadow-lg bg-white"
                   >
                     <FileCog size={24} />
                   </motion.div>
                 </div>
                 
                 {/* Text Right (Desktop only) */}
                 <div className="md:w-1/2 md:pl-16 order-3 hidden md:block">
                   <RevealOnScroll>
                     <h3 className="text-2xl font-bold text-primary mb-3">2. Konsolidierung & Logik</h3>
                     <p className="text-secondary text-lg">Mapping auf Ihre BWA-Struktur. Währungsumrechnung. Intercompany-Eliminierung.</p>
                   </RevealOnScroll>
                 </div>
            </div>

            {/* Step 3: Left Text, Right Visual */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 group">
                 {/* Text Left (Desktop) / Right (Mobile) */}
                 <div className="md:w-1/2 md:pr-16 text-left md:text-right order-2 md:order-1 pl-20 md:pl-0">
                   <RevealOnScroll>
                     <h3 className="text-2xl font-bold text-primary mb-3">3. Visualisierung & Steuerung</h3>
                     <p className="text-secondary text-lg">Interaktive Dashboards für GF, CFO und Abteilungsleiter. Jederzeit verfügbar.</p>
                   </RevealOnScroll>
                 </div>
                 
                 {/* Checkpoint Icon */}
                 <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 w-14 h-14 z-10 md:order-2 top-0 md:top-auto">
                   <motion.div 
                     initial={{ backgroundColor: "#FFFFFF", borderColor: "#F1F5F9", scale: 1, color: "#64748B" }}
                     whileInView={{ backgroundColor: "#FFF7ED", borderColor: "#F97316", scale: 1.1, color: "#F97316" }}
                     viewport={{ margin: "-50% 0px -50% 0px" }}
                     transition={{ duration: 0.3 }}
                     className="w-full h-full border-4 rounded-full flex items-center justify-center shadow-lg bg-white"
                   >
                     <BarChart3 size={24} />
                   </motion.div>
                 </div>
                 
                 {/* Visual Right (Desktop) / Bottom (Mobile) */}
                 <div className="md:w-1/2 md:pl-16 order-3 pl-20 md:pl-0 w-full">
                   <RevealOnScroll delay={200}>
                     <div className="bg-darkbg p-5 rounded-2xl shadow-xl border border-slate-800 max-w-[260px] text-white hover:scale-105 transition-transform duration-500">
                       <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-3">
                          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Live Dashboard</div>
                          <div className="flex items-center gap-2">
                             <span className="text-[10px] text-green-400">Live</span>
                             <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                          </div>
                       </div>
                       
                       <div className="flex gap-2 items-end h-24 mb-4 px-1">
                          <div className="w-1/4 bg-slate-700 rounded-sm h-[40%]"></div>
                          <div className="w-1/4 bg-slate-700 rounded-sm h-[60%]"></div>
                          <div className="w-1/4 bg-slate-700 rounded-sm h-[35%]"></div>
                          <div className="w-1/4 bg-accent-orange rounded-sm h-[85%] shadow-[0_0_20px_rgba(249,115,22,0.4)]"></div>
                       </div>
                       
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-400">Profit Margin</span>
                          <span className="font-bold text-accent-orange bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">+12.4%</span>
                       </div>
                     </div>
                   </RevealOnScroll>
                 </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};