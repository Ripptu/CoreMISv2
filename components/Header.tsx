import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

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
      window.dispatchEvent(new CustomEvent('smooth-scroll-to', { detail: { target: id } }));
    }
  };

  const navItems = [
    { label: 'Lösungen', id: 'loesungen' },
    { label: 'Funktionsweise', id: 'funktionsweise' },
    { label: 'ROI', id: 'roi' },
    { label: 'Preise', id: 'preise' },
    { label: 'Sicherheit', id: 'sicherheit' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-border py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Nav (Logo removed) */}
        <div className="flex items-center gap-12">
           <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-sm font-medium text-secondary hover:text-accent-orange transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Contact Button */}
        <div className="hidden lg:block">
          <button 
            onClick={() => handleNavigation('kontakt')}
            className="bg-primary hover:bg-black text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
          >
            Kontakt
            <Mail size={14} className="text-accent-orange" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden ml-auto">
            <button onClick={() => handleNavigation('kontakt')} className="text-primary hover:text-accent-orange">
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
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 lg:hidden shadow-xl animate-in fade-in slide-in-from-top-4 max-h-[80vh] overflow-y-auto">
          <button 
            onClick={() => handleNavigation('top')} 
            className="text-left text-base font-medium text-primary py-2 border-b border-surface"
          >
            Startseite
          </button>
          {navItems.map((item) => (
             <button 
                key={item.id}
                onClick={() => handleNavigation(item.id)} 
                className="text-left text-base font-medium text-primary py-2 border-b border-surface"
              >
                {item.label}
              </button>
          ))}
          <button 
            onClick={() => handleNavigation('kontakt')}
            className="bg-primary text-white w-full py-3 rounded-lg text-sm font-bold mt-2 flex justify-center items-center gap-2"
          >
            Kontakt <Mail size={16} />
          </button>
        </div>
      )}
    </header>
  );
};