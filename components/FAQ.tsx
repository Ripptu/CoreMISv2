import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface Question {
  q: string;
  a: React.ReactNode;
}

const questions: Question[] = [
  {
    q: "Für welche Unternehmen ist CoreMIS geeignet?",
    a: (
      <>
        CoreMIS ist für KMU und Unternehmensgruppen im DACH-Raum, die Budget, Forecast und Management Reporting professionalisieren wollen – ohne ein grosses ERP- oder BI-Projekt.
        <br/><br/>
        Besonders passend für Unternehmen, die aus Excel herausgewachsen sind und mehr Transparenz benötigen:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary/90">
          <li>Cashflow-Planung</li>
          <li>Monatsreporting</li>
          <li>Planung nach Dimensionen (z.B. Gesellschaften, Bereiche, Kostenstellen, Produkte, Kunden)</li>
        </ul>
        <br/>
        Typischerweise ab ca. 2-3 Mio. Umsatz bis hin zu komplexen Holdingstrukturen.
      </>
    )
  },
  {
    q: "Welche Probleme löst CoreMIS im Vergleich zu Excel?",
    a: (
      <>
        CoreMIS ersetzt nicht „Excel als Rechenblatt“, sondern die Excel-Insellösungen für Budgetierung, Forecast und MIS-Reporting. Statt manueller Versionen und Copy-Paste liefert CoreMIS:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary/90">
          <li>Eine zentrale Datenbasis (Actuals, Budget, Forecast).</li>
          <li>Standardisierte Berichte und Drilldowns.</li>
          <li>Klare Verantwortlichkeiten und Governance.</li>
        </ul>
        <br/>
        So entsteht CFO-Transparenz: verlässliche Zahlen, schneller betrieblicher Monatsabschluss, standardisiert und mehr Zeit für Steuerung.
      </>
    )
  },
  {
    q: "Wie schnell ist CoreMIS einsatzbereit?",
    a: (
      <>
        CoreMIS ist als SaaS schnell einsatzbereit. Im Einführungspaket „Fast Track“ ist ein produktives Basis-MIS typischerweise in <strong>3–4 Wochen</strong> möglich – unter der Voraussetzung, dass Stammdaten konsistent sind und die Finanzbuchhaltung sauber geführt ist.
        <br/><br/>
        Für mehrere Gesellschaften oder zusätzliche Module (HR/Personal/Capex, Corporate MIS) sind <strong>6–12 Wochen</strong> realistisch.
      </>
    )
  },
  {
    q: "Wie läuft die Einführung ab?",
    a: (
      <>
        Die CoreMIS-Einführung folgt einer standardisierten Journey:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary/90">
          <li>Reporting-Zielbild (Stakeholder-Anforderungen).</li>
          <li>Businessmodell und Dimensionen (Struktur für MIS und Planung).</li>
          <li>Datenquellen und Datenqualität (ERP/Finanzbuchhaltung/Excel).</li>
          <li>Mapping und Logik (Konten, Dimensionen, Intercompany).</li>
          <li>Datenimport und Validierung (Budget/Actuals/Forecast).</li>
          <li>Schulung und Go-Live (Key User Enablement).</li>
        </ul>
        <br/>
        So entsteht schnell ein belastbares Management Reporting System.
      </>
    )
  },
  {
    q: "Welche Datenquellen kann CoreMIS anbinden?",
    a: "CoreMIS verarbeitet Daten aus ERP-Systemen, Finanzbuchhaltung (FiBu), Vorsystemen und Excel-Templates. Je nach Setup erfolgt der Import automatisiert oder standardisiert via Upload. Entscheidend ist die Festlegung der Datenquelle je Datenblock (Actuals, Budget, Forecast) und eine klare Single-Source-of-Truth-Logik – damit das MIS-Reporting konsistent bleibt."
  },
  {
    q: "Unterstützt CoreMIS Konsolidierung und Intercompany?",
    a: "Ja. CoreMIS unterstützt Konsolidierung und Intercompany-Logik als Management-Sicht: Abbildung von Gruppenstrukturen, Währungslogik (falls relevant), IC-Umsätze und Eliminationsregeln. Damit eignet sich CoreMIS besonders für KMU mit mehreren Gesellschaften und für Holdingstrukturen, die monatlich ein konsistentes Corporate MIS benötigen."
  },
  {
    q: "Kann CoreMIS Cashflow-Planung und Liquiditätssteuerung?",
    a: "Ja. CoreMIS unterstützt Cashflow-Planung und Liquiditätssteuerung auf Basis von Planwerten und Ist-Daten. Unternehmen nutzen CoreMIS, um Cashflow-Treiber (z.B. Umsatz, Personalkosten, Investitionen) in Forecast und Budget zu integrieren und daraus eine rollende Liquiditätsvorschau abzuleiten – nachvollziehbar und versioniert."
  },
  {
    q: "Welche Module/Anwendungsfälle deckt CoreMIS ab?",
    a: (
      <>
        CoreMIS deckt zentrale CFO-Anwendungsfälle ab:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary/90">
          <li>Finanzplanung: Budget, Forecast, Szenarien.</li>
          <li>Management Reporting (MIS): P&L/ER, Kosten, KPIs, Drilldowns.</li>
          <li>Corporate MIS: mehrere Gesellschaften, Konsolidierung, IC-Logik.</li>
          <li>Cashflow und Liquidität: Planung und Steuerung.</li>
          <li>Optional: Personal- und Capex-Planung.</li>
        </ul>
        <br/>
        Damit ist CoreMIS ein Werkzeug für CFO-Transparenz in KMU.
      </>
    )
  },
  {
    q: "Gibt es feste Preispakete und was ist enthalten?",
    a: (
      <>
        Ja. CoreMIS bietet Einführungspakete (Fast Track / Professional / Enterprise) mit klaren Lieferergebnissen.
        <br/><br/>
        <strong>Fast Track:</strong> Setup, Abbildung Budget/Actuals/Forecast, Basis-MIS, Key User Schulung und Go-Live Support.
        <br/><br/>
        Für komplexere Strukturen werden Scope und Lieferergebnisse verbindlich definiert (z.B. Anzahl Gesellschaften, Integrationstiefe, Prioritäten, Schnittstellen).
      </>
    )
  },
  {
    q: "Welche Voraussetzungen braucht es für Fixpreis und schnelle Einführung?",
    a: (
      <>
        Für Fixpreis und kurze Einführungszeit braucht es vor allem:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary/90">
          <li>Standardisierte und konsistente Stammdaten.</li>
          <li>Eine professionell geführte Finanzbuchhaltung (saubere Buchungslogik).</li>
          <li>Klare Datenquellen (ERP/Finanzbuchhaltung).</li>
        </ul>
        <br/>
        Wenn diese Voraussetzungen erfüllt sind, ist eine schnelle und pragmatische MIS- und Planungs-Einführung realistisch.
      </>
    )
  },
  {
    q: "Wie unterscheidet sich CoreMIS von BI-Tools (Power BI, Tableau, u.a.m.)?",
    a: (
      <>
        BI-Tools visualisieren Daten – CoreMIS ist zusätzlich ein Steuerungs- und Planungs-System. CoreMIS verbindet:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary/90">
          <li>Actuals/Budget/Forecast in einer Logik.</li>
          <li>Klare Planungs-Workflows.</li>
          <li>Management Reporting mit Governance (Berechtigungen, Dimensionen, Versionen).</li>
        </ul>
        <br/>
        Damit ist CoreMIS besonders stark dort, wo Unternehmen nicht nur Dashboards, sondern ein integriertes CFO-System für Planung und MIS benötigen.
      </>
    )
  },
  {
    q: "Wie läuft eine Demo ab?",
    a: (
      <>
        In einer Demo zeigen wir anhand einer standardisierten Struktur, wie CoreMIS Budget, Forecast und MIS-Reporting abbildet:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary/90">
          <li>Zielbild und wichtigste Reports (VR/GF/CFO).</li>
          <li>Dimensionen (Produkte/Kunden/Bereiche/Gesellschaften).</li>
          <li>Datenquellen (ERP/Finanzbuchhaltung, Excel) und Importlogik.</li>
          <li>Auf Wunsch Personal- und Capex-Planung.</li>
          <li>Beispiel-Report mit Drilldown und Forecast.</li>
        </ul>
        <br/>
        Am Ende erhalten Sie eine klare Empfehlung, welches Einführungspaket passt und welchen Zeitrahmen (z. B. 3–4 Wochen Fast Track) realistisch ist.
      </>
    )
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-primary mb-4">Häufige Fragen (FAQ).</h2>
             <p className="text-secondary">Details zu Inhalten, Prozessen und Voraussetzungen.</p>
          </div>
        </RevealOnScroll>
        
        <div className="space-y-4">
          {questions.map((item, index) => (
            <RevealOnScroll key={index} delay={Math.min(index * 50, 500)}>
              <div className="bg-white border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-sm">
                <button 
                  className="w-full flex justify-between items-start text-left p-6 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`text-lg font-bold pr-8 ${openIndex === index ? 'text-accent-orange' : 'text-primary'}`}>
                    {item.q}
                  </span>
                  <span className={`transition-transform duration-300 mt-1 shrink-0 ${openIndex === index ? 'rotate-180 text-accent-orange' : 'text-slate-400'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="text-secondary p-6 pt-0 leading-relaxed pr-8 border-t border-slate-50 mt-2 text-base">
                    {item.a}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};