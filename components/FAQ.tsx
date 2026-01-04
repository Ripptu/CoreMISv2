import React, { useState, useEffect } from 'react';
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
        CoreMIS ist für <strong>KMU und Unternehmensgruppen im DACH-Raum</strong> geeignet, die <strong>Budget, Forecast und Management Reporting (MIS)</strong> professionalisieren wollen. Ideal für Unternehmen, die <strong>aus Excel herausgewachsen</strong> sind und mehr <strong>CFO-Transparenz</strong> benötigen – z.B. nach Gesellschaften, Geschäftsfeldern, Bereichen, Kostenstellen, Produkten oder Kundengruppen. CoreMIS eignet sich typischerweise ab <strong>2 bis 3 Mio. Umsatz</strong> bis hin zu komplexen <strong>Holdingstrukturen</strong>.
      </>
    )
  },
  {
    q: "Welche Probleme löst CoreMIS im Vergleich zu Excel?",
    a: (
      <>
        CoreMIS ersetzt die typischen <strong>Excel-Insellösungen</strong> für <strong>Finanzplanung, Budgetierung, Forecast und MIS-Reporting</strong>. Statt Versionenchaos, Copy/Paste und manueller Abstimmung liefert CoreMIS eine <strong>zentrale Datenbasis</strong> und standardisierte Auswertungen mit Drilldown – für verlässliche Kennzahlen wie <strong>Nettoumsatz, COGS, Bruttomarge und EBITDA</strong>. Das reduziert Fehler, beschleunigt den Monatsabschluss und verbessert die Entscheidungsqualität.
        <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary/90">
           <li>Weniger manuelle Abstimmungen und Fehlerquellen.</li>
           <li>Eine „Single Source of Truth“ für Actuals, Budget, Forecast.</li>
           <li>Klarer Audit-Trail durch Versionen und Regeln.</li>
        </ul>
      </>
    )
  },
  {
    q: "Wie schnell ist CoreMIS einsatzbereit?",
    a: (
      <>
        CoreMIS ist als <strong>SaaS</strong> schnell produktiv. Im Paket <strong>Fast Track</strong> ist ein belastbares <strong>Basis-MIS</strong> inkl. Budget • Actuals • Forecast typischerweise in <strong>3–4 Wochen</strong> möglich – bei konsistenten Stammdaten und sauberer FiBu. Für mehrere Gesellschaften, Corporate MIS und zusätzliche Module sind <strong>6–12 Wochen</strong> realistisch.
      </>
    )
  },
  {
    q: "Wie läuft die Einführung von CoreMIS ab?",
    a: (
      <>
        Die Einführung folgt einer standardisierten <strong>Journey</strong>: Reporting-Zielbild (Stakeholder-Anforderungen) {'->'} Strukturierung des Businessmodells (Dimensionen) {'->'} Festlegung der <strong>Datenquellen</strong> (ERP/FiBu/Excel) {'->'} <strong>Mapping und Logik</strong> (Konten, Dimensionen, Intercompany) {'->'} Datenimport und Validierung {'->'} Schulung und Go-Live. Ziel ist ein praxistaugliches <strong>Management Reporting System</strong> und eine verlässliche Basis für <strong>Budget und Forecast</strong>.
      </>
    )
  },
  {
    q: "Welche Datenquellen kann CoreMIS nutzen (ERP, FiBu, Excel)?",
    a: (
      <>
        CoreMIS verarbeitet Daten aus <strong>ERP-Systemen, Finanzbuchhaltung (FiBu)</strong>, Datenbanken und standardisierten Excel-Imports. Entscheidend ist die klare Festlegung der <strong>Single Source of Truth</strong> je Datenblock (Actuals/Budget/Forecast) sowie ein sauberes <strong>Mapping</strong> auf Kontenplan und Dimensionen. So entstehen konsistente Auswertungen für <strong>MIS, Finanzplanung und Forecast</strong>.
      </>
    )
  },
  {
    q: "Gibt es Schnittstellen oder automatischen Datenimport?",
    a: (
      <>
        Ja – je nach Setup kann CoreMIS Daten automatisiert übernehmen (z.B. über standardisierte Schnittstellen/Exports oder API-basierte Anbindungen). Wenn keine direkte Schnittstelle vorhanden ist, funktioniert der Import pragmatisch über standardisierte Templates mit klaren Mapping-Regeln. Ziel ist immer: <strong>Automatisierung dort, wo sie Nutzen bringt</strong>, ohne ein grosses IT-Projekt.
        <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary/90">
           <li>Priorität 1: ERP-/Vorsystem-Daten.</li>
           <li>Priorität 2: FiBu-Daten.</li>
           <li>Ergänzung: Templates für Planwerte / Strukturdaten.</li>
        </ul>
      </>
    )
  },
  {
    q: "Unterstützt CoreMIS Konsolidierung und Intercompany (IC)?",
    a: (
      <>
        Ja. CoreMIS unterstützt <strong>Gruppenstrukturen, Intercompany-Logik</strong> und definierte Eliminationsregeln für ein belastbares <strong>Corporate MIS</strong>. Damit lassen sich konsolidierte P&L/GuV-Sichten, IC-Umsätze und IC-Kosten sowie gruppenweite Kennzahlen nachvollziehbar abbilden – besonders relevant für KMU mit mehreren Gesellschaften.
      </>
    )
  },
  {
    q: "Unterstützt CoreMIS Transferpreise und interne Wertströme?",
    a: (
      <>
        Ja. CoreMIS kann <strong>Transferpreis-Logiken</strong> und interne Wertströme als Management-Sicht abbilden, um die <strong>Leistungsfähigkeit von Beschaffung, Lager/Veredelung und Vertrieb</strong> zu analysieren. Das ist besonders hilfreich, wenn interne Leistungsbeiträge (z.B. Transferpreise, IC-Umsätze, Warenaufwand) transparent gemacht und im MIS steuerbar werden sollen.
      </>
    )
  },
  {
    q: "Welche Reports liefert CoreMIS standardmässig (Basis-MIS)?",
    a: (
      <>
        CoreMIS liefert ein praxiserprobtes <strong>Basis-MIS</strong> für CFO und Management: P&L/GuV, Kosten- und Ergebnisanalysen, Abweichungen (Ist vs. Budget/Forecast), Trends sowie Drilldowns nach Dimensionen (z.B. Gesellschaft, Bereich, Kostenstelle, Produktgruppe, Kundengruppe). Damit wird das <strong>Monatsreporting</strong> schneller, konsistenter und weniger manuell.
      </>
    )
  },
  {
    q: "Unterstützt CoreMIS Budget, Forecast und Szenarien?",
    a: (
      <>
        Ja. CoreMIS ist für <strong>integrierte Finanzplanung</strong> ausgelegt: Budget, Forecast (rolling) und Szenarien laufen in einer konsistenten Logik zusammen – inklusive Top-down und Bottom-up Planung. Dadurch werden Planungen nachvollziehbar, versioniert und direkt mit Ist-Daten im MIS vergleichbar.
      </>
    )
  },
  {
    q: "Gibt es HR- und Capex-Planung?",
    a: (
      <>
        Ja, optional. CoreMIS kann <strong>Personalplanung (HR)</strong> und <strong>Investitionsplanung (Capex)</strong> integrieren, damit CFO und Management die wichtigsten Treiber im Forecast und Budget abbilden können. Das ist besonders relevant, wenn Personalkosten, Headcount, Investitionsprogramme oder Abschreibungen wesentliche Ergebnis- und Cashflow-Treiber sind.
      </>
    )
  },
  {
    q: "Kann CoreMIS Cashflow-Planung und Liquiditätssteuerung?",
    a: (
      <>
        Ja. CoreMIS unterstützt <strong>Cashflow-Planung</strong> und eine rollierende Liquiditätssicht, indem Ist-Daten mit Budget- und Forecast-Werten verbunden werden. So lassen sich Cashflow-Treiber (Umsatz, Kosten, Capex) transparent machen und als Grundlage für Liquiditätssteuerung, Finanzierungsgespräche und CFO-Entscheide nutzen.
      </>
    )
  },
  {
    q: "Was unterscheidet CoreMIS von BI-Tools wie Power BI?",
    a: (
      <>
        BI-Tools visualisieren Daten; CoreMIS verbindet zusätzlich <strong>Finanzplanung (Budget/Forecast)</strong> und <strong>Management Reporting (MIS)</strong> in einer Governance: Dimensionen, Mapping, Versionierung und definierte Kennzahlenlogik. CoreMIS ist damit besonders geeignet, wenn nicht nur Dashboards, sondern ein integriertes <strong>CFO-System</strong> für Steuerung, Planung und Monatsreporting gesucht wird.
      </>
    )
  },
  {
    q: "Ist CoreMIS ein ERP-Ersatz?",
    a: (
      <>
        Nein. CoreMIS ersetzt kein ERP, sondern ergänzt es als <strong>CFO- und MIS-Lösung</strong> für Planung, Forecast, Konsolidierung und Management Reporting. Das ERP bleibt führend für operative Prozesse; CoreMIS sorgt für eine steuerungsorientierte Sicht auf die Zahlen – mit klarer Logik, Struktur und Transparenz.
      </>
    )
  },
  {
    q: "Wie werden Datenqualität und Datenquellen abgesichert?",
    a: (
      <>
        Zu Beginn werden Datenquellen je Datenblock festgelegt und die <strong>Datenqualität</strong> (Vollständigkeit, Konsistenz, Aktualität) eingeordnet. Mapping-Regeln, Kontrollsummen und Validierungen sorgen dafür, dass Reports nachvollziehbar sind. Das Ziel ist eine belastbare <strong>Single Source of Truth</strong> für CFO-Transparenz und MIS.
      </>
    )
  },
  {
    q: "Wie sicher sind meine Daten (Datenschutz/Hosting)?",
    a: (
      <>
        CoreMIS ist als SaaS auf sichere Datenverarbeitung ausgelegt (Zugriffskontrolle, Rollen/Berechtigungen, nachvollziehbare Datenstände). Je nach Setup werden Hosting, Datenstandort (z.B. Schweiz/EU) und Datenschutzanforderungen (z.B. DSGVO) transparent geklärt. Ziel ist ein professioneller Betrieb, der den Anforderungen von KMU, Management und VR gerecht wird.
      </>
    )
  },
  {
    q: "Wie funktioniert Rollen- und Berechtigungsmanagement?",
    a: (
      <>
        CoreMIS unterstützt eine klare Rollenlogik, damit CFO, Controller und Management genau die Sichten erhalten, die sie benötigen. Zugriffe können nach Verantwortlichkeiten strukturiert werden (z.B. Gesellschaften, Bereiche, Reports), sodass Governance und Vertraulichkeit im Management Reporting sichergestellt sind.
      </>
    )
  },
  {
    q: "Gibt es feste Preispakete und was ist enthalten?",
    a: (
      <>
        Ja. CoreMIS bietet definierte <strong>Einführungspakete</strong> (Fast Track / Professional / Enterprise) mit klaren Lieferergebnissen wie Setup, Abbildung Budget/Actuals/Forecast, Basis-MIS, Schulung und Go-Live Support. Das schafft Planbarkeit und verhindert eine „Setup-Falle“, wie sie bei grossen IT-Projekten oft entsteht.
      </>
    )
  },
  {
    q: "Was kostet CoreMIS und gibt es langfristige Verträge?",
    a: (
      <>
        CoreMIS wird als <strong>SaaS-Lizenzmodell</strong> betrieben; die Kosten hängen vom gewählten Umfang (Anzahl Gesellschaften und Umsatz) ab. Viele KMU schätzen, dass SaaS planbare Kosten und schnelle Skalierung ermöglicht. Typisch sind transparente Konditionen – inklusive klarer Einführungs-Pakete und einem Betrieb, der auf <strong>Monatsreporting, Budget und Forecast</strong> ausgelegt ist.
      </>
    )
  },
  {
    q: "Wie läuft eine Demo ab?",
    a: (
      <>
        In der Demo zeigen wir CoreMIS entlang Ihrer Anforderungen: Reporting-Zielbild (CFO/GL/VR), Dimensionen (Produkte/Kunden/Bereiche/Gesellschaften), Datenquellen (ERP/FiBu) sowie ein Beispiel für MIS-Reporting und Planung/Forecast. Danach erhalten Sie eine konkrete Empfehlung für das passende Paket (z.B. Fast Track) und einen realistischen Zeitplan bis zum Go-Live.
      </>
    )
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [displayQuestions, setDisplayQuestions] = useState<Question[]>(questions);

  useEffect(() => {
    // Randomize questions on mount so a different one is on top each time
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setDisplayQuestions(shuffled);
    setOpenIndex(0); // Open the first question of the new shuffled list
  }, []);

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-primary mb-4">Häufige Fragen (FAQ).</h2>
             <p className="text-secondary">Antworten auf die wichtigsten CoreMIS Fragen.</p>
          </div>
        </RevealOnScroll>
        
        <div className="space-y-4">
          {displayQuestions.map((item, index) => (
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