import React, { useState, useEffect } from 'react';
import { X, FileText, Download } from 'lucide-react';

export const ExitBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left the top of the viewport
      if (e.clientY <= 0 && !hasDismissed) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-in slide-in-from-bottom duration-500">
      <div className="bg-primary text-white border-t-4 border-accent-orange shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-accent-orange shrink-0">
               <FileText size={24} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium leading-tight mb-1">Nicht bereit für eine Demo?</h3>
              <p className="text-sm text-slate-400">Holen Sie sich unsere "CFO Modernization Checklist 2024".</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none bg-white text-primary hover:bg-slate-100 px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-colors">
              <Download size={16} />
              PDF Downloaden
            </button>
            <button 
              onClick={() => {
                setIsVisible(false);
                setHasDismissed(true);
              }}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};