import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { BarChart, Bar } from 'recharts';
import { RevealOnScroll } from './RevealOnScroll';
import { Skeleton } from './Skeleton';

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 550 },
  { name: 'Apr', value: 480 },
  { name: 'May', value: 620 },
  { name: 'Jun', value: 780 },
];

export const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching / calculation delay for the dashboard visual
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden relative">
      
      {/* Background Blends (Advice 2: Use Blending Modes) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-200/30 rounded-full blur-[120px] mix-blend-multiply pointer-events-none -translate-y-1/2 translate-x-1/3 animate-pulse-slow"></div>
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-slate-200/40 rounded-full blur-[100px] mix-blend-multiply pointer-events-none animate-float"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <RevealOnScroll>
            <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start">
              
              {/* Headline */}
              <h1 className="text-5xl md:text-[80px] leading-[1.0] md:leading-[0.95] font-serif text-primary tracking-tight">
                Finanzen <br/>
                <span className="relative inline-block z-10">
                  <span className="italic relative z-10 text-primary">automatisiert</span>
                  
                  {/* Realistic Marker SVG */}
                  <svg 
                    className="absolute -bottom-2 md:-bottom-3 left-[-2%] w-[105%] h-[0.6em] -z-10 text-accent-orange pointer-events-none" 
                    viewBox="0 0 368 30" 
                    fill="none" 
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M4 22C60 18 220 10 364 16" 
                      stroke="currentColor" 
                      strokeWidth="20" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      style={{ mixBlendMode: 'multiply', opacity: 0.85 }}
                    />
                  </svg>
                </span> <br/>
                im Griff.
              </h1>
              
              {/* Text Opacity (Advice 4: Use White/Black with Opacity) */}
              <p className="text-base md:text-xl text-primary/60 leading-relaxed max-w-lg font-sans font-medium">
                CoreMIS bringt Klarheit in Ihre Zahlen. Die intelligente Finanzsteuerung für den Mittelstand, die niemals schläft.
              </p>

              {/* Interactive States (Advice 5: Make it Obvious) */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
                <button className="relative bg-primary text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-xl flex items-center justify-center gap-2 group overflow-hidden hover:scale-105 hover:shadow-2xl ring-offset-2 ring-offset-[#FDFBF7] ring-2 ring-transparent hover:ring-primary/20 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center gap-2">
                    CoreMIS starten
                    <ArrowRight size={18} className="text-accent-orange group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Internal Sheen Effect */}
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                
                <button className="bg-white text-primary border border-primary/10 px-8 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center gap-2 hover:border-primary/30 hover:bg-slate-50 hover:shadow-lg w-full sm:w-auto">
                  <Play size={16} className="fill-current opacity-80" />
                  Demo ansehen
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Content - The "Quinn" Card Visual with Skeleton Loading */}
          <RevealOnScroll delay={200}>
            <div className="relative mt-8 lg:mt-0">
              {/* Main Card with Premium Glass Shadow */}
              <div 
                className="relative z-10 bg-white/80 backdrop-blur-xl rounded-[32px] shadow-premium border border-white/40 p-6 md:p-10 w-full transition-transform duration-500 will-change-transform"
                style={{ transform: `translateY(${offsetY * -0.05}px)` }}
              >
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md shrink-0">
                         <span className="font-serif italic text-accent-orange">C</span>
                       </div>
                       <div>
                         <div className="text-sm font-semibold text-primary">CoreMIS Bot</div>
                         <div className="text-xs text-primary/50 font-medium">Instant Analysis</div>
                       </div>
                    </div>
                    <div className="bg-green-100/50 text-green-700 border border-green-200/50 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      Connected
                    </div>
                 </div>

                 <div className="space-y-6 font-sans">
                    {/* Message Bubble */}
                    <div className="bg-white border border-primary/5 shadow-sm p-4 rounded-2xl rounded-tl-sm text-sm text-primary/70 leading-relaxed">
                       {isLoading ? (
                         <div className="space-y-2">
                           <Skeleton className="h-4 w-full" />
                           <Skeleton className="h-4 w-3/4" />
                         </div>
                       ) : (
                         <>
                           Ich habe Ihre GuV analysiert. Der Umsatz ist im Vergleich zum Vormonat um <span className="text-primary font-bold bg-orange-50 px-1 rounded text-accent-orange">+12.4%</span> gestiegen. Möchten Sie den Cashflow-Forecast sehen?
                         </>
                       )}
                    </div>

                    {/* Reply Bubble */}
                    <div className="flex justify-end">
                       <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-lg shadow-primary/20">
                          {isLoading ? (
                            <div className="w-48 h-4 bg-white/20 rounded animate-pulse" />
                          ) : (
                            "Ja, zeig mir die Liquidität für Q4."
                          )}
                       </div>
                    </div>

                    {/* Chart Card */}
                    <div className="bg-white border border-primary/5 p-5 rounded-2xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                       {/* Subtle highlight on hover */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       
                       {isLoading ? (
                         <div className="flex justify-between items-end h-24">
                            <div className="space-y-2">
                               <Skeleton className="h-3 w-20" />
                               <Skeleton className="h-8 w-32" />
                            </div>
                            <div className="flex gap-1 items-end">
                               <Skeleton className="h-12 w-4" />
                               <Skeleton className="h-16 w-4" />
                               <Skeleton className="h-10 w-4" />
                               <Skeleton className="h-20 w-4 bg-accent-orange/50" />
                            </div>
                         </div>
                       ) : (
                         <>
                           <div className="flex justify-between items-end mb-4 relative z-10">
                              <div>
                                <div className="text-xs text-primary/40 font-bold uppercase tracking-wider mb-1">Forecast Q4</div>
                                <div className="text-2xl font-serif text-primary">€ 1.2M <span className="text-sm text-accent-orange font-sans font-bold italic ml-1">+8%</span></div>
                              </div>
                              <div className="h-8 w-24">
                                 {/* Fixed width/height to prevent crash */}
                                 <BarChart width={96} height={32} data={chartData}>
                                    <Bar dataKey="value" fill="#EA580C" radius={[2,2,0,0]} />
                                 </BarChart>
                              </div>
                           </div>
                           <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden relative z-10">
                              <div className="bg-accent-orange h-full w-[80%] rounded-full animate-[shimmer_2s_infinite]"></div>
                           </div>
                         </>
                       )}
                    </div>
                 </div>
              </div>

              {/* Decorative Elements (Glow) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-radial from-orange-200/40 to-transparent blur-3xl -z-10 mix-blend-multiply"></div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};