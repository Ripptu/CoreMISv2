import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  page: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ page, onClose }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (page) {
      document.body.style.overflow = 'hidden';
      // Reset scroll position to top when modal opens/changes
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [page]);

  if (!page) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      <div 
        ref={scrollContainerRef}
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-20"
        >
          <X size={20} />
        </button>
        
        <div className="p-8 md:p-12 prose prose-slate max-w-none">
          {page === 'impressum' && (
            <>
              <h2 className="font-serif text-3xl mb-6">Impressum</h2>
              <p>Angaben gemäß § 5 TMG</p>
              <p><strong>CoreMIS GmbH</strong><br/>
              Beispielstraße 123<br/>
              10115 Berlin<br/>
              Deutschland</p>
              
              <p><strong>Vertreten durch:</strong><br/>
              Max Mustermann</p>
              
              <p><strong>Kontakt:</strong><br/>
              Telefon: +49 (0) 123 456789<br/>
              E-Mail: info@coremis-example.com</p>
              
              <p><strong>Registereintrag:</strong><br/>
              Eintragung im Handelsregister.<br/>
              Registergericht: Amtsgericht Berlin-Charlottenburg<br/>
              Registernummer: HRB 12345</p>
              
              <p><strong>Umsatzsteuer:</strong><br/>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/>
              DE 123 456 789</p>
            </>
          )}

          {page === 'datenschutz' && (
            <>
              <h2 className="font-serif text-3xl mb-6">Datenschutzerklärung</h2>
              <h3>1. Datenschutz auf einen Blick</h3>
              <p><strong>Allgemeine Hinweise</strong><br/>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
              
              <h3>2. Hosting</h3>
              <p>Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
              
              <h3>3. Datenerfassung auf dieser Website</h3>
              <p><strong>Cookies</strong><br/>
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.</p>
              
              <p><strong>Kontaktformular</strong><br/>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
              
              <h3>4. Analyse-Tools und Werbung</h3>
              <p>Derzeit nutzen wir keine externen Tracking-Tools wie Google Analytics auf dieser Demoseite.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};