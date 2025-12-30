import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ImplementationTimeline } from './components/ImplementationTimeline';
import { PricingPackages } from './components/PricingPackages';
import { LicenseCalculator } from './components/LicenseCalculator';
import { ROICalculator } from './components/ROICalculator';
import { SecuritySection } from './components/SecuritySection';
import { FAQ } from './components/FAQ';
import { DemoCTA } from './components/DemoCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LegalPage } from './components/LegalPage';
import { ScrollToTop } from './components/ScrollToTop';
import { Impact } from './components/Impact';
import { PositioningGraph } from './components/PositioningGraph';

const App: React.FC = () => {
  const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);

  const handleNavigateHome = (targetSection?: string) => {
    setLegalPage(null);
    if (targetSection) {
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
            {/* 1. Titelseite */}
            <Hero />
            
            {/* Missing Element Restored: Die 4 Zahlen (Impact) */}
            <Impact />

            {/* 2. CFO-Transparenz (Feature Details) */}
            <ProblemSolution />

            {/* Missing Element Restored: Positioning Graph & 4 Probleme */}
            <PositioningGraph />

            {/* 3. Manuelles Reporting (ROI) */}
            <ROICalculator />

            {/* 4. SAAS Kalkulator Lizenzmodell */}
            <LicenseCalculator />

            {/* 5. Die CoreMIS-Journey */}
            <ImplementationTimeline />

            {/* 6. Pakete und Preise */}
            <PricingPackages />

            {/* 7. Ihre Finanzdaten (Sicherheit) */}
            <SecuritySection />

            {/* 8. FAQs */}
            <FAQ />

            {/* 9. Starten Sie Ihre CoreMIS-Journey (CTA) */}
            <DemoCTA />
          </>
        )}
      </main>
      
      <ScrollToTop />
      {/* 10. Finanzsteuerung neu gedacht (Footer) */}
      <Footer onOpenLegal={setLegalPage} />
    </div>
  );
};

export default App;