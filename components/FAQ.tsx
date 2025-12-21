import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const questions = [
  {
    q: "Für welche Unternehmen ist CoreMIS geeignet?",
    a: "CoreMIS ist optimiert für den Mittelstand (KMU) im DACH-Raum. Ideal für Unternehmen ab 5 Mio. € Umsatz, die aus Excel herausgewachsen sind, aber keine Enterprise-Lösung wie SAP S/4HANA einführen wollen."
  },
  {
    q: "Wie schnell ist CoreMIS einsatzbereit?",
    a: "In der Regel benötigen wir 4 bis 6 Wochen von der Datenanbindung bis zum produktiven Reporting. Da wir auf Standard-Logiken aufsetzen, entfallen lange Konzeptphasen."
  },
  {
    q: "Ist CoreMIS eine Alternative zu Excel?",
    a: "Ja und Nein. Wir ersetzen Excel dort, wo es fehleranfällig wird (Datenhaltung, Konsolidierung, Standard-Reporting). Für Ad-hoc Analysen können Daten aber jederzeit wieder nach Excel exportiert werden."
  },
  {
    q: "Gibt es feste Preispakete?",
    a: "Wir bieten individuelle Angebote basierend auf der Komplexität Ihrer Struktur (Anzahl Gesellschaften, Vorsysteme, User). Das Modell ist eine monatliche SaaS-Gebühr inkl. Hosting und Support."
  },
  {
    q: "Wie läuft eine Demo ab?",
    a: "In 30 Minuten zeigen wir Ihnen das System anhand von Beispieldaten. Wir besprechen Ihre aktuelle Situation und prüfen gemeinsam, ob CoreMIS zu Ihren Anforderungen passt."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-medium mb-12 text-center">Häufige Fragen</h2>
        
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-border pb-4">
              <button 
                className="w-full flex justify-between items-start text-left py-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-medium pr-8 ${openIndex === index ? 'text-primary' : 'text-primary/80'}`}>
                  {item.q}
                </span>
                <span className="text-accent-blue mt-1 flex-shrink-0">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-secondary pb-4 leading-relaxed pr-8">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};