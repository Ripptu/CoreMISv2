import React, { useRef, useState } from 'react';
import { Shield, Lock, Server, Database, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

// 3D Tilt Card Component
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    setRotation({ 
      x: y * -3, // Subtle tilt X
      y: x * 3   // Subtle tilt Y
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transform-gpu transition-all duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
    >
      {children}
    </div>
  );
};

export const SecuritySection: React.FC = () => {
  return (
    <section id="sicherheit" className="py-24 md:py-32 bg-[#050A10] text-white relative overflow-hidden border-t border-white/5">
      
      {/* Cool Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none"></div>
      
      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Text Content */}
          <RevealOnScroll>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <Shield size={14} className="fill-emerald-400/20" />
                Enterprise Grade Security
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6 leading-tight">
                Ihre Finanzdaten gehören Ihnen. Und bleiben sicher.
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                Sicherheit ist kein Feature, sondern das Fundament von CoreMIS. Wir erfüllen die strengsten Anforderungen des <strong>Schweizer Datenschutzgesetzes (DSG)</strong> sowie der <strong>EU-DSGVO</strong>. Die Auftragsverarbeitung (AVV) ist fester Bestandteil unserer Lizenz.
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  'Zertifizierte Rechenzentren (ISO 27001)', 
                  'DSGVO Konformität garantiert', 
                  'TLS 1.3 High-End Verschlüsselung', 
                  'Regelmäßige Penetration Tests'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                     <CheckCircle2 size={20} className="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                     <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* DATEV Badge */}
              <div className="inline-block">
                <div className="bg-[#0F1623] border border-white/10 rounded-xl p-1 pr-6 flex items-center gap-4 hover:border-emerald-500/30 transition-colors cursor-default group shadow-lg">
                   <div className="bg-[#1A2332] p-3 rounded-lg group-hover:bg-emerald-500/10 transition-colors relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Offizielle Schnittstelle</span>
                      <span className="font-bold text-white text-sm tracking-wide">DATEV Connect Online</span>
                   </div>
                </div>
              </div>

            </div>
          </RevealOnScroll>

          {/* RIGHT SIDE: Bento Grid Cards with 3D Tilt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            
            {/* Card 1 */}
            <TiltCard className="bg-[#0F1623] border border-white/5 p-8 rounded-3xl hover:border-white/10 group h-full shadow-xl">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300 border border-white/5">
                <Server size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Server in Frankfurt</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Physische Datenspeicherung ausschließlich in zertifizierten Rechenzentren in Deutschland (EU).
              </p>
            </TiltCard>
            
            {/* Card 2 */}
            <TiltCard className="bg-[#0F1623] border border-white/5 p-8 rounded-3xl hover:border-white/10 group h-full shadow-xl">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300 border border-white/5">
                <Lock size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">End-to-End</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Vollständige Verschlüsselung aller Daten während der Übertragung und im Ruhezustand (AES-256).
              </p>
            </TiltCard>
            
            {/* Card 3 (Wide) */}
            <div className="md:col-span-2">
              <TiltCard className="bg-[#0F1623] border border-white/5 p-8 rounded-3xl hover:border-white/10 group h-full shadow-xl">
                <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300 border border-white/5">
                     <Database size={24} strokeWidth={1.5} />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-white mb-2">Backups & Recovery</h3>
                     <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                       Tägliche, automatisierte Backups und redundante Systeme garantieren 99.9% Verfügbarkeit. 
                       Ihre Daten sind gegen Ausfälle mehrfach abgesichert.
                     </p>
                   </div>
                </div>
              </TiltCard>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};