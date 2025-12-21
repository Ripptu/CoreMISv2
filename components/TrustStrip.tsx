import React from 'react';
import { Database, Server, Cloud, FileSpreadsheet, HardDrive } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-b border-border/50 bg-background py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-center text-[10px] font-bold text-secondary mb-10 uppercase tracking-[0.2em]">
          Trusted by teams who value speed
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
            <Database size={24} /> SAP
          </div>
          <div className="flex items-center gap-2 font-serif text-xl italic text-primary">
             LucaNet
          </div>
          <div className="flex items-center gap-2 font-sans text-xl font-bold text-primary tracking-tighter">
             DATEV
          </div>
          <div className="flex items-center gap-2 font-serif text-xl text-primary">
             <Cloud size={24} /> Salesforce
          </div>
          <div className="flex items-center gap-2 font-mono text-xl text-primary">
             Oracle
          </div>
        </div>
      </div>
    </section>
  );
};