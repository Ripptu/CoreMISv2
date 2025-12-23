import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // If GSAP Smoother is active, we should try to use it, but window.scrollTo works via the bridge in index.html usually.
    // However, direct dispatch is safer if we want to trigger the listener in index.html
    const event = new CustomEvent('smooth-scroll-to', { detail: { target: 'top' } });
    window.dispatchEvent(event);
  };

  if (!mounted) return null;

  // Use Portal to render outside the GSAP smooth-wrapper so position:fixed works relative to viewport
  return createPortal(
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[9999] p-4 rounded-full bg-accent-orange text-white shadow-orange border border-white/20 hover:scale-110 transition-all duration-300 transform group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Nach oben scrollen"
    >
      <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
    </button>,
    document.body
  );
};