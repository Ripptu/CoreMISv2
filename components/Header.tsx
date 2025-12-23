import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  onNavigateHome?: (target?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome(id);
    } else {
      // Fallback for single page if prop not passed (though it should be)
      window.dispatchEvent(new CustomEvent('smooth-scroll-to', { detail: { target: id } }));
    }
  };

  const handleContactClick = () => {
     handleNavigation('footer');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-border py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Nav */}
        <div className="flex items-center gap-8">
           {/* If we are on a subpage (onNavigateHome is passed), clicking CoreMIS could go home. 
               Currently visual logo is hidden, but let's add a "Back to Home" if needed or just keep menu. */}
           
           <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavigation('loesungen')}
              className="text-sm font-medium text-secondary hover:text-accent-orange transition-colors"
            >
              Lösungen
            </button>
            <button 
              onClick={() => handleNavigation('preise')}
              className="text-sm font-medium text-secondary hover:text-accent-orange transition-colors"
            >
              Preise
            </button>
            {/* Added explicit Home button for better UX on legal pages */}
            <button 
               onClick={() => onNavigateHome?.()}
               className="text-sm font-medium text-secondary hover:text-accent-orange transition-colors"
            >
               Home
            </button>
          </div>
        </div>

        {/* Right: Contact Button */}
        <div className="hidden md:block">
          <button 
            onClick={handleContactClick}
            className="bg-primary hover:bg-black text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
          >
            Kontakt
            <Mail size={14} className="text-accent-orange" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden ml-auto">
            <button onClick={handleContactClick} className="text-primary hover:text-accent-orange">
               <Mail size={20} />
            </button>

            <button 
              className="text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          <button 
            onClick={() => handleNavigation('top')} 
            className="text-left text-base font-medium text-primary py-2 border-b border-surface"
          >
            Startseite
          </button>
          <button 
            onClick={() => handleNavigation('loesungen')} 
            className="text-left text-base font-medium text-primary py-2 border-b border-surface"
          >
            Lösungen
          </button>
          <button 
            onClick={() => handleNavigation('preise')} 
            className="text-left text-base font-medium text-primary py-2 border-b border-surface"
          >
            Preise
          </button>
          <button 
            onClick={handleContactClick}
            className="bg-primary text-white w-full py-3 rounded-lg text-sm font-bold mt-2 flex justify-center items-center gap-2"
          >
            Kontakt <Mail size={16} />
          </button>
        </div>
      )}
    </header>
  );
};