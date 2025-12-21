import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Note: With GSAP ScrollSmoother's fixed wrapper, window.scrollY might be 0.
    // However, we rely on GSAP's native handling or visual updates.
    // For the header styling, we can keep this or hook into GSAP updates if needed.
    // For simplicity in this architectural change, we rely on standard behavior 
    // where ScrollSmoother usually proxies scroll values.
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Dispatch custom event for GSAP ScrollSmoother to handle
    const event = new CustomEvent('smooth-scroll-to', { detail: { target: id } });
    window.dispatchEvent(event);
    
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    // Dispatch event for top scroll
    const event = new CustomEvent('smooth-scroll-to', { detail: { target: 'top' } });
    window.dispatchEvent(event);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-white/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center transition-colors group-hover:border-accent-orange">
             <div className="w-2 h-2 bg-accent-orange rounded-full group-hover:scale-110 transition-transform"></div>
          </div>
          <span className="font-serif font-semibold text-xl tracking-tight text-primary">
            CoreMIS
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('produkt')}
            className="text-sm font-medium text-primary/60 hover:text-primary transition-colors"
          >
            Produkt
          </button>
          <button 
            onClick={() => scrollToSection('loesungen')}
            className="text-sm font-medium text-primary/60 hover:text-primary transition-colors"
          >
            Lösungen
          </button>
          <button 
            onClick={() => scrollToSection('preise')}
            className="text-sm font-medium text-primary/60 hover:text-primary transition-colors"
          >
            Preise
          </button>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-primary hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 group shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-0.5 ring-2 ring-transparent hover:ring-primary/20 ring-offset-2 ring-offset-white">
            Login
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-accent-orange" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          <button 
            onClick={() => scrollToSection('produkt')} 
            className="text-left text-base font-medium text-primary/70 py-2"
          >
            Produkt
          </button>
          <button 
            onClick={() => scrollToSection('loesungen')} 
            className="text-left text-base font-medium text-primary/70 py-2"
          >
            Lösungen
          </button>
          <button 
            onClick={() => scrollToSection('preise')} 
            className="text-left text-base font-medium text-primary/70 py-2"
          >
            Preise
          </button>
          <button className="bg-primary text-white w-full py-3 rounded-full text-sm font-medium mt-2">
            Login
          </button>
        </div>
      )}
    </header>
  );
};