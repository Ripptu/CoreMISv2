import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Impact: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-12">
          
          <RevealOnScroll delay={0}>
            <div className="border-l-2 border-accent-orange pl-6">
              <div className="text-5xl md:text-6xl font-serif text-primary mb-3">3-4</div>
              <div className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">Wochen bis Go Live</div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="border-l-2 border-slate-200 pl-6">
              <div className="text-5xl md:text-6xl font-serif text-primary mb-3">95%</div>
              <div className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">Weniger Excel-Aufwand</div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="border-l-2 border-slate-200 pl-6">
              <div className="text-5xl md:text-6xl font-serif text-primary mb-3">100%</div>
              <div className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">Datensicherheit</div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="border-l-2 border-slate-200 pl-6">
              <div className="text-5xl md:text-6xl font-serif text-primary mb-3">360°</div>
              <div className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">Betriebliche Finanzsicht</div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};