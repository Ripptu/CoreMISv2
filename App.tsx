import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { PositioningGraph } from './components/PositioningGraph';
import { DataJourney } from './components/DataJourney';
import { PricingPackages } from './components/PricingPackages';
import { LicenseCalculator } from './components/LicenseCalculator';
import { ROICalculator } from './components/ROICalculator';
import { SecuritySection } from './components/SecuritySection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LegalPage } from './components/LegalPage';

const App: React.FC = () => {
  const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);

  const handleNavigateHome = (targetSection?: string) => {
    setLegalPage(null);
    if (targetSection) {
      // Allow React to render the home view first
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('smooth-scroll-to', { detail: { target: targetSection } }));
      }, 50);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-accent-orange/20 selection:text-primary w-full relative font-sans text-primary flex flex-col">
      <Header onNavigateHome={handleNavigateHome} />
      
      <main className="relative flex-grow">
        {legalPage ? (
          <LegalPage page={legalPage} />
        ) : (
          <>
            <Hero />
            <ProblemSolution />
            <PositioningGraph />
            <DataJourney />
            <ROICalculator />
            <PricingPackages />
            <LicenseCalculator />
            <SecuritySection />
            <FAQ />
          </>
        )}
      </main>
      
      <Footer onOpenLegal={setLegalPage} />
    </div>
  );
};

export default App;