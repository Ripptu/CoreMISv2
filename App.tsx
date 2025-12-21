import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProductValue } from './components/ProductValue';
import { IndustryTabs } from './components/IndustryTabs';
import { DataJourney } from './components/DataJourney';
import { Features } from './components/Features';
import { ROICalculator } from './components/ROICalculator';
import { Impact } from './components/Impact';
import { SecuritySection } from './components/SecuritySection';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ExitBar } from './components/ExitBar';
import { Header } from './components/Header';

const App: React.FC = () => {
  const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | null>(null);

  return (
    <div className="min-h-screen bg-background selection:bg-accent-orange/30 selection:text-primary w-full relative">
      <Header />
      <main className="relative">
        {/* LIGHT SECTION */}
        <Hero />
        <TrustStrip />
        
        {/* DARK SECTION - "Produkt" */}
        <div id="produkt" className="bg-darkbg text-white rounded-t-[40px] md:rounded-t-[80px] mt-12 overflow-hidden scroll-mt-24">
          <ProductValue />
          <Features />
        </div>

        {/* LIGHT SECTION - "Lösungen" */}
        <div id="loesungen" className="bg-background rounded-t-[40px] md:rounded-t-[80px] -mt-12 pt-12 relative z-10 scroll-mt-24">
          <IndustryTabs />
          <Impact />
          <DataJourney />
        </div>

        {/* LIGHT SECTION CONTINUED - "Preise" (ROI) */}
        <div id="preise" className="scroll-mt-24">
          <ROICalculator />
        </div>
        
        <SecuritySection />
        <FAQ />
        
        {/* DARK FOOTER SECTION */}
        <div className="bg-darkbg text-white rounded-t-[40px] md:rounded-t-[80px] overflow-hidden">
          <CTA />
          <Footer onOpenLegal={setLegalPage} />
        </div>
      </main>
      
      {/* Modals & Overlays */}
      <ExitBar />
      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />
    </div>
  );
};

export default App;