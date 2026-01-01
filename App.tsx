import React, { useState, Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load below-the-fold components to reduce initial bundle size and network requests
const ProblemSolution = lazy(() => import('./components/ProblemSolution').then(module => ({ default: module.ProblemSolution })));
const ImplementationTimeline = lazy(() => import('./components/ImplementationTimeline').then(module => ({ default: module.ImplementationTimeline })));
const PricingPackages = lazy(() => import('./components/PricingPackages').then(module => ({ default: module.PricingPackages })));
const LicenseCalculator = lazy(() => import('./components/LicenseCalculator').then(module => ({ default: module.LicenseCalculator })));
const ROICalculator = lazy(() => import('./components/ROICalculator').then(module => ({ default: module.ROICalculator })));
const SecuritySection = lazy(() => import('./components/SecuritySection').then(module => ({ default: module.SecuritySection })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const DemoCTA = lazy(() => import('./components/DemoCTA').then(module => ({ default: module.DemoCTA })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const LegalPage = lazy(() => import('./components/LegalPage').then(module => ({ default: module.LegalPage })));
const LegalModal = lazy(() => import('./components/LegalModal').then(module => ({ default: module.LegalModal })));
const Impact = lazy(() => import('./components/Impact').then(module => ({ default: module.Impact })));
const PositioningGraph = lazy(() => import('./components/PositioningGraph').then(module => ({ default: module.PositioningGraph })));

const App: React.FC = () => {
  const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | 'agb' | null>(null);
  const [modalPage, setModalPage] = useState<'haftung' | 'urheberrecht' | null>(null);

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

  const handleOpenLegal = (page: 'impressum' | 'datenschutz' | 'agb' | 'haftung' | 'urheberrecht') => {
    if (page === 'haftung' || page === 'urheberrecht') {
      setModalPage(page);
    } else {
      setLegalPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-accent-orange/20 selection:text-primary w-full relative font-sans text-primary flex flex-col">
      <Header onNavigateHome={handleNavigateHome} />
      
      <main className="relative flex-grow">
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white"><div className="animate-pulse w-12 h-12 rounded-full bg-slate-100"></div></div>}>
          {legalPage ? (
            <LegalPage page={legalPage} />
          ) : (
            <>
              {/* 1. Titelseite (Loaded Immediately) */}
              <Hero />
              
              {/* 2. Impact Stats */}
              <Impact />

              {/* 3. CFO-Transparenz (Feature Details) */}
              <ProblemSolution />

              {/* 4. Positioning Graph & 4 Probleme */}
              <PositioningGraph />

              {/* 5. Manuelles Reporting (ROI) */}
              <ROICalculator />

              {/* 6. SAAS Kalkulator Lizenzmodell */}
              <LicenseCalculator />

              {/* 7. Die CoreMIS-Journey */}
              <ImplementationTimeline />

              {/* 8. Pakete und Preise */}
              <PricingPackages />

              {/* 9. Ihre Finanzdaten (Sicherheit) */}
              <SecuritySection />

              {/* 10. FAQs */}
              <FAQ />

              {/* 11. Starten Sie Ihre CoreMIS-Journey (CTA) */}
              <DemoCTA />
            </>
          )}
        </Suspense>
      </main>
      
      <ScrollToTop />
      {/* 12. Finanzsteuerung neu gedacht (Footer) */}
      <Suspense fallback={null}>
        <Footer onOpenLegal={handleOpenLegal} />
        <LegalModal page={modalPage} onClose={() => setModalPage(null)} />
      </Suspense>
    </div>
  );
};

export default App;