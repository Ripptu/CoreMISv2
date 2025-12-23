import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-white via-surface to-white">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-orange-100/40 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* 1. Text Content (Left) */}
          <div className="flex-1 text-center md:text-left z-10">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-primary leading-[1.05] tracking-tight mb-8">
                CoreMIS: <br/>
                <span className="font-sans text-primary">MIS-Power für </span>
                <span className="relative inline-block z-10 font-serif font-normal text-primary px-1">
                   KMU.
                   {/* Handwritten Marker Style Stroke */}
                   <span className="absolute bottom-3 left-0 w-full h-[0.35em] bg-accent-orange/80 -z-10 -rotate-1 rounded-sm mix-blend-multiply"></span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-secondary leading-relaxed mb-10 max-w-xl mx-auto md:mx-0 font-medium">
                Automatisiertes Budgeting, Forecasting und Reporting – ohne Excel-Chaos und ohne Overkill-Ansätze – in wenigen Wochen eingeführt.
              </p>

              {/* CLAIM instead of buttons */}
              <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start w-full items-center">
                 <div className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
                    Zahlen <span className="text-accent-orange mx-1">•</span> Klar <span className="text-accent-orange mx-1">•</span> Im Griff
                 </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* 2. Visual / Logo Integration (Right) */}
          <div className="flex-1 w-full max-w-lg md:max-w-none relative flex justify-center md:justify-end">
             <RevealOnScroll delay={200}>
               <div className="relative">
                  {/* New Logo Image */}
                  <img 
                    src="https://i.postimg.cc/c1F6x2bJ/6aeba13c-44fb-40da-a15c-6a534a48ab66.png" 
                    alt="CoreMIS Icon" 
                    className="w-[300px] md:w-[450px] lg:w-[500px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700" 
                  />

                 {/* Decorative Elements behind */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full -z-10 blur-3xl opacity-60"></div>
               </div>
             </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};