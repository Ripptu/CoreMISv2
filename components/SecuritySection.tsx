import React from 'react';
import { ShieldCheck, Server, Lock, FileCheck, CheckCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <RevealOnScroll>
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-4 font-mono text-xs uppercase tracking-widest">
                <ShieldCheck size={16} />
                <span>Enterprise Grade Security</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Ihre Finanzdaten gehören Ihnen. Und bleiben sicher.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Sicherheit ist kein Feature, sondern das Fundament von CoreMIS. Wir erfüllen die strengsten Anforderungen deutscher Datenschutzstandards und Banken-Compliance.
              </p>
              
              {/* Interactive Compliance Checklist */}
              <div className="space-y-4 mb-8">
                {['Zertifizierte Rechenzentren (ISO 27001)', 'DSGVO Konformität garantiert', 'TLS 1.3 High-End Verschlüsselung', 'Regelmäßige Penetration Tests'].map((item, i) => (
                  <RevealOnScroll key={i} delay={i * 100}>
                    <div className="flex items-center gap-3">
                       <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                         <CheckCircle size={12} />
                       </div>
                       <span className="text-sm font-medium">{item}</span>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
              
              {/* DATEV Badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-slow opacity-75 ring-4 ring-green-500/30"></div>
                </div>
                <div>
                   <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Offizielle Schnittstelle</div>
                   <div className="font-bold text-white">DATEV Connect Online</div>
                </div>
              </div>

            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <RevealOnScroll delay={200}>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm h-full hover:bg-slate-800 transition-colors">
                <Server className="text-accent-blue mb-4" size={28} />
                <h3 className="text-lg font-medium mb-2">Server in Frankfurt</h3>
                <p className="text-sm text-slate-400">Physische Datenspeicherung ausschließlich in zertifizierten Rechenzentren in Deutschland.</p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm h-full hover:bg-slate-800 transition-colors">
                <Lock className="text-accent-blue mb-4" size={28} />
                <h3 className="text-lg font-medium mb-2">End-to-End</h3>
                <p className="text-sm text-slate-400">Vollständige Verschlüsselung aller Daten während der Übertragung und im Ruhezustand (AES-256).</p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={400} width="100%">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm sm:col-span-2 hover:bg-slate-800 transition-colors">
                <FileCheck className="text-accent-blue mb-4" size={28} />
                <h3 className="text-lg font-medium mb-2">Backups & Recovery</h3>
                <p className="text-sm text-slate-400">Tägliche, automatisierte Backups und redundante Systeme garantieren 99.9% Verfügbarkeit.</p>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};