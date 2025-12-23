import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { PositioningGraph } from './components/PositioningGraph';
import { Personas } from './components/Personas';
import { PricingPackages } from './components/PricingPackages';
import { ROICalculator } from './components/ROICalculator';
import { SecuritySection } from './components/SecuritySection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { Header } from './components/Header'; // Ensure Header is used

const App: React.FC = () => {
  const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | null>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-accent-orange/20 selection:text-primary w-full relative font-sans text-primary">
      <Header />
      <main className="relative">
        <Hero />
        <ProblemSolution />
        <PositioningGraph />
        <Personas />
        <ROICalculator />
        <PricingPackages />
        <SecuritySection />
        <FAQ />
        <Footer onOpenLegal={setLegalPage} />
      </main>
      
      {/* Modals & Overlays */}
      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />
    </div>
  );
};

export default App;