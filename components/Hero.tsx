import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-surface rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 -z-10 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent-orange/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="z-10 order-2 lg:order-1 text-left">
            <RevealOnScroll>
              
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-primary leading-[1.05] tracking-tight mb-8">
                MIS-Power <br/>
                für <span className="relative inline-block px-2">
                  <span className="relative z-10 font-serif italic text-primary">KMU</span>
                  
                  {/* Image Brush Stroke: Behind KMU */}
                  <img 
                    src="https://static.vecteezy.com/system/resources/thumbnails/049/161/109/small/orange-paint-brushstroke-with-transparent-background-perfect-for-designs-and-projects-png.png" 
                    alt=""
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[150%] -z-10 object-contain opacity-90 mix-blend-multiply"
                  />
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6 max-w-xl font-medium">
                Automatisiertes Budgeting, Forecasting und Reporting – 
                ohne Excel-Chaos und ohne Overkill-Ansätze – 
                in wenigen Wochen eingeführt.
              </p>

              <p className="text-xl md:text-2xl font-bold text-accent-orange mb-10">
                Zahlen • Klar • Im Griff
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start w-full items-center">
                 <a 
                   href="mailto:info@coremis.ch"
                   className="btn-core px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-orange hover:shadow-lg transition-all"
                 >
                   Demo vereinbaren <ArrowRight size={20} />
                 </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Logo Image */}
          <div className="z-10 order-1 lg:order-2 flex justify-center lg:justify-end">
            <RevealOnScroll delay={200}>
                <img 
                  src="https://i.postimg.cc/BnmkN7h0/logo-mit-text-PNG.png" 
                  alt="CoreMIS Logo" 
                  className="h-48 md:h-[400px] w-auto object-contain max-w-full drop-shadow-sm"
                />
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};