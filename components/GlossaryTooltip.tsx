import React, { useState } from 'react';

interface GlossaryTooltipProps {
  term: string;
  definition: string;
}

export const GlossaryTooltip: React.FC<GlossaryTooltipProps> = ({ term, definition }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="border-b border-dotted border-secondary/50 group-hover:border-primary group-hover:text-primary transition-colors">
        {term}
      </span>
      
      <div 
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-primary text-white text-xs p-3 rounded-lg shadow-xl z-50 transition-all duration-200 pointer-events-none ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="font-serif font-medium mb-1 text-accent-orange">Definition</div>
        {definition}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-primary"></div>
      </div>
    </span>
  );
};