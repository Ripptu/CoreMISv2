import React, { useEffect } from 'react';
import { Shield, FileText, Scale, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

interface LegalPageProps {
  page: 'impressum' | 'datenschutz' | 'agb';
}

export const LegalPage: React.FC<LegalPageProps> = ({ page }) => {
  
  // Ensure we scroll to top when mounting this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  const getTitle = () => {
    switch(page) {
      case 'impressum': 
        return (
          <>
            Unser <span className="relative inline-block px-1 z-10">
              <span className="font-handwriting italic font-normal text-primary z-10 relative">Impressum</span>
              <span className="absolute bottom-2 left-0 w-full h-[0.3em] bg-accent-orange -z-10 -rotate-2 rounded-sm opacity-90"></span>
            </span>
          </>
        );
      case 'datenschutz':
        return (
          <>
            Datenschutz & <span className="relative inline-block px-1 z-10">
              <span className="font-handwriting italic font-normal text-primary z-10 relative">Privatsphäre</span>
              <span className="absolute bottom-2 left-0 w-full h-[0.3em] bg-accent-orange -z-10 -rotate-2 rounded-sm opacity-90"></span>
            </span>
          </>
        );
      case 'agb':
        return (
          <>
            Nutzungsbedingungen & <span className="relative inline-block px-1 z-10">
              <span className="font-handwriting italic font-normal text-primary z-10 relative">AGB</span>
              <span className="absolute bottom-2 left-0 w-full h-[0.3em] bg-accent-orange -z-10 -rotate-2 rounded-sm opacity-90"></span>
            </span>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      
      {/* Header Section */}
      <div className="max-w-[1280px] mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          {getTitle()}
        </h1>
        <div className="w-24 h-1 bg-border mx-auto rounded-full"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="prose prose-lg prose-slate max-w-none text-primary/80">
          
          {page === 'impressum' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
              <p className="text-xl leading-relaxed font-medium text-primary mb-8">
                Angaben gemäß Informationspflichten.
              </p>
              
              <div className="bg-surface p-8 rounded-2xl border border-border mb-8">
                <h3 className="text-lg font-bold text-primary mb-4">Betreiber & Kontakt</h3>
                <p className="mb-4">
                  <strong>COREMIS GmbH</strong><br/>
                  Im Buck 3<br/>
                  8196 Wil (ZH)<br/>
                  Schweiz
                </p>
                <p>
                  <strong>Web:</strong> www.coremis.ch
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. 
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
                    der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p className="text-sm text-secondary mt-4">
                    © 2025 COREMIS GmbH. Alle Rechte vorbehalten.
                  </p>
                </div>
              </div>
            </div>
          )}

          {page === 'agb' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Intro Card */}
              <div className="bg-surface border border-border rounded-3xl p-8 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Scale size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-border/50 pb-6">
                    <h2 className="text-2xl font-bold text-primary m-0">Endbenutzer-Lizenzvereinbarung (EULA)</h2>
                    <span className="bg-white border border-border px-3 py-1 rounded-full text-xs font-bold text-accent-orange uppercase tracking-wider whitespace-nowrap">
                      Gültig ab 1.12.2025
                    </span>
                  </div>

                  <p className="text-lg leading-relaxed text-primary font-medium mb-4">
                    Diese Vereinbarung regelt die Nutzung der Cloud-Applikation „CoreMIS“ der COREMIS GmbH.
                  </p>
                  <p className="text-sm text-secondary">
                    Mit dem erstmaligen Zugriff auf die Anwendung und dem Klick auf „Ich stimme zu“ akzeptiert der Kunde diese Vereinbarung inkl. deren Anhänge rechtsverbindlich.
                  </p>
                </div>
              </div>

              {/* SECTION 1 & 2: Lizenz */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-0">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-primary mb-4">
                    <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono">01</span>
                    Gegenstand
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    COREMIS gewährt eine persönliche, nicht übertragbare Lizenz zur Eigennutzung der Software (SaaS). Inkludiert sind Updates, Service-Packs und Hotfixes.
                  </p>
                  <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded-lg border border-blue-100 flex gap-2 items-start">
                    <FileText size={14} className="mt-0.5 shrink-0" />
                    Der Datenverarbeitungsvertrag (DPA) ist integraler Bestandteil.
                  </div>
                </div>

                <div className="bg-white p-0">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-primary mb-4">
                    <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono">02</span>
                    Umfang
                  </h3>
                  <ul className="text-sm space-y-2 list-none pl-0">
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0 mt-1" /> Nutzung für eigene betriebliche Zwecke.</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 shrink-0 mt-1" /> Zugriff für Mitarbeiter & Beauftragte.</li>
                    <li className="flex gap-2"><Shield size={16} className="text-accent-orange shrink-0 mt-1" /> Rechte an Quellcode verbleiben bei COREMIS.</li>
                  </ul>
                </div>
              </div>

              <hr className="border-border mb-12" />

              {/* SECTION 3: Nutzungsbedingungen */}
              <div className="mb-12">
                <h3 className="flex items-center gap-3 text-xl font-bold text-primary mb-6">
                  <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono">03</span>
                  Nutzungsbedingungen & Verbote
                </h3>
                <p className="text-sm mb-6">
                  Die Software wird als SaaS bereitgestellt. Der Quellcode wird nicht ausgehändigt. Folgende Handlungen sind streng untersagt:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-sm text-red-900 flex flex-col items-center text-center gap-2">
                    <AlertTriangle className="text-red-500" />
                    <span>Einschleusen von Schadsoftware</span>
                  </div>
                  <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-sm text-red-900 flex flex-col items-center text-center gap-2">
                    <AlertTriangle className="text-red-500" />
                    <span>Reverse Engineering & Dekompilierung</span>
                  </div>
                  <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-sm text-red-900 flex flex-col items-center text-center gap-2">
                    <AlertTriangle className="text-red-500" />
                    <span>Datenmanipulation & Spam</span>
                  </div>
                </div>
                
                <p className="text-xs text-secondary italic">
                  COREMIS hat das Recht, die Einhaltung durch Protokollierung und jährliche Audits zu prüfen.
                </p>
              </div>

              {/* SECTION 4 & 5: Service & Gewährleistung */}
              <div className="bg-slate-50 rounded-3xl p-8 mb-12 border border-slate-100">
                 <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Clock size={18} className="text-accent-orange" /> SLA & Support (§4)
                      </h3>
                      <ul className="text-sm space-y-3">
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                          <span>Verfügbarkeit (Monatsmittel)</span>
                          <span className="font-bold">99.9%</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                          <span>Support Zeiten</span>
                          <span className="font-bold">Mo-Fr, 08:00 - 17:00</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-2">
                          <span>Wartungsankündigung</span>
                          <span className="font-bold">min. 24h voraus</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Shield size={18} className="text-accent-orange" /> Gewährleistung (§5)
                      </h3>
                      <p className="text-sm text-secondary mb-4">
                        Die Software weist die übliche Qualität auf. Fehlerfreiheit kann bei Software nie zu 100% garantiert werden.
                      </p>
                      <div className="text-xs bg-white p-3 rounded border border-slate-200 text-slate-500">
                        <strong>Rechtsmangel:</strong> COREMIS garantiert, dass der Nutzung keine Rechte Dritter entgegenstehen und übernimmt die Abwehr solcher Ansprüche.
                      </div>
                    </div>
                 </div>
              </div>

              {/* SECTION 6: Haftung */}
              <div className="mb-12">
                <h3 className="flex items-center gap-3 text-xl font-bold text-primary mb-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono">06</span>
                  Haftung
                </h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-white border-l-4 border-accent-orange pl-6 py-2">
                    <strong className="block text-primary mb-1">Haftungsumfang</strong>
                    <p className="text-sm text-secondary">
                      Nur für direkte Schäden bei grober Fahrlässigkeit oder Vorsatz. Beschränkt auf den <strong>doppelten Wert der jährlichen Nutzungsgebühr</strong>.
                    </p>
                  </div>
                  <div className="flex-1 bg-white border-l-4 border-slate-200 pl-6 py-2">
                    <strong className="block text-slate-500 mb-1">Ausschluss</strong>
                    <p className="text-sm text-secondary">
                      Keine Haftung für entgangenen Gewinn, Datenverluste oder indirekte Folgeschäden (soweit gesetzlich zulässig).
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 7: Zahlungsverzug */}
              <div className="mb-12">
                <h3 className="flex items-center gap-3 text-xl font-bold text-primary mb-6">
                  <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono">07</span>
                  Zahlung & Verzug
                </h3>
                <div className="relative">
                   {/* Timeline Line */}
                   <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-slate-100"></div>
                   
                   <div className="space-y-6 relative">
                      <div className="flex items-start gap-6">
                         <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shrink-0 z-10 text-xs font-bold text-slate-400">10d</div>
                         <div className="pt-2">
                            <strong className="text-primary block text-sm">Zahlungserinnerung</strong>
                            <span className="text-xs text-secondary">10 Tage nach Fälligkeit.</span>
                         </div>
                      </div>
                      <div className="flex items-start gap-6">
                         <div className="w-10 h-10 rounded-full bg-orange-50 border-2 border-orange-200 flex items-center justify-center shrink-0 z-10 text-xs font-bold text-accent-orange">20d</div>
                         <div className="pt-2">
                            <strong className="text-primary block text-sm">Mahnung</strong>
                            <span className="text-xs text-secondary">20 Tage nach Fälligkeit (mit Verzugszins & Gebühr).</span>
                         </div>
                      </div>
                      <div className="flex items-start gap-6">
                         <div className="w-10 h-10 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center shrink-0 z-10 text-xs font-bold text-red-600">30d</div>
                         <div className="pt-2">
                            <strong className="text-red-600 block text-sm">Deaktivierung</strong>
                            <span className="text-xs text-secondary">Sperrung des Zugangs.</span>
                         </div>
                      </div>
                      <div className="flex items-start gap-6">
                         <div className="w-10 h-10 rounded-full bg-black border-2 border-black flex items-center justify-center shrink-0 z-10 text-xs font-bold text-white">90d</div>
                         <div className="pt-2">
                            <strong className="text-primary block text-sm">Löschung</strong>
                            <span className="text-xs text-secondary">Unwiderrufliche Löschung aller Daten.</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* SECTION 8 & 9: Kündigung & Daten */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                 <div>
                    <h3 className="flex items-center gap-3 text-lg font-bold text-primary mb-3">
                      <span className="text-accent-orange">§8</span> Laufzeit & Kündigung
                    </h3>
                    <div className="bg-surface p-4 rounded-xl text-sm space-y-2">
                       <p><strong>Kunde:</strong> Jederzeit auf Monatsende (durch Einstellung der Zahlung).</p>
                       <p><strong>COREMIS:</strong> 30 Tage Frist auf Monatsende.</p>
                       <p className="text-xs text-secondary mt-2">Ausserordentliche Kündigung aus wichtigem Grund bleibt vorbehalten.</p>
                    </div>
                 </div>
                 <div>
                    <h3 className="flex items-center gap-3 text-lg font-bold text-primary mb-3">
                      <span className="text-accent-orange">§9</span> Datensicherung am Ende
                    </h3>
                    <div className="bg-surface p-4 rounded-xl text-sm space-y-2">
                       <p>Daten werden <strong>90 Tage</strong> nach Vertragsende gelöscht.</p>
                       <p>Kunde kann vorher <strong>Datenexport</strong> anfordern (kostenpflichtig, Vorkasse).</p>
                    </div>
                 </div>
              </div>

              <hr className="border-border mb-12" />

              {/* Remaining Sections Condensed */}
              <div className="space-y-8 text-sm text-secondary">
                 <div>
                    <h4 className="text-primary font-bold text-base mb-2">10. Datenschutz</h4>
                    <p>Einhaltung DSG (Schweiz) & DSGVO (EU). Verarbeitung nur zum Betrieb der Dienste. Kunde ist "Controller", COREMIS ist "Processor". Details im DPA.</p>
                 </div>
                 <div>
                    <h4 className="text-primary font-bold text-base mb-2">11. Änderungen</h4>
                    <p>Änderungen treten 30 Tage nach Mitteilung in Kraft. Zustimmung erfolgt durch aktive Weiternutzung (Click-Wrap).</p>
                 </div>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div>
                       <h4 className="text-primary font-bold text-base mb-2">12. Schlussbestimmungen</h4>
                       <p>Salvatorische Klausel gilt. Abtretung von Rechten nur mit Zustimmung. Höhere Gewalt schliesst Haftung aus.</p>
                    </div>
                    <div>
                       <h4 className="text-primary font-bold text-base mb-2">13. Recht & Gerichtsstand</h4>
                       <p>Schweizer Recht. Gerichtsstand: <strong>Zürich (8001), Schweiz</strong>.</p>
                    </div>
                 </div>
              </div>

            </div>
          )}

          {page === 'datenschutz' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
              <div className="flex items-baseline gap-4 mb-8 border-b border-border pb-6">
                <h2 className="text-2xl font-bold text-primary m-0">Datenverarbeitungsvertrag (DPA)</h2>
                <span className="text-sm text-accent-orange font-bold uppercase tracking-wider">Anhang</span>
              </div>
              
              <p className="text-sm text-secondary mb-4 italic">Gemäss Art. 9 DSG / Art. 28 DSGVO</p>

              <div className="bg-surface p-6 rounded-2xl border border-border space-y-6">
                 
                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">14.</div>
                    <div>
                       <h4 className="font-bold text-primary">Gegenstand</h4>
                       <p className="text-sm text-secondary mt-1">Konkretisierung der datenschutzrechtlichen Regelungen für CoreMIS. Löschung der Daten nach 90 Tagen post-contract.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">15.</div>
                    <div>
                       <h4 className="font-bold text-primary">Art & Zweck</h4>
                       <p className="text-sm text-secondary mt-1">Bereitstellung und Wartung der Software. Verarbeitung von Kontakt-, Nutzungs- und Inhaltsdaten.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">16.</div>
                    <div>
                       <h4 className="font-bold text-primary">Rollen</h4>
                       <p className="text-sm text-secondary mt-1">Kunde = Verantwortlicher (Controller). COREMIS = Auftragsverarbeiter (Processor).</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">18.</div>
                    <div>
                       <h4 className="font-bold text-primary">Sicherheit & Ort</h4>
                       <p className="text-sm text-secondary mt-1">
                         Serverstandort: <strong>Schweiz oder EU</strong>. <br/>
                         Zertifizierung: ISO 27001. <br/>
                         Verschlüsselung: TLS / AES-256.
                       </p>
                    </div>
                 </div>

              </div>

              <div className="mt-8 text-sm text-secondary">
                 <p className="mb-4">
                   <strong>Unterauftragsverhältnisse:</strong> Genehmigt, Liste auf Anfrage verfügbar.
                 </p>
                 <p className="mb-4">
                   <strong>Kontrollrechte:</strong> Kunde darf Audits durchführen (Kosten trägt Kunde).
                 </p>
                 <p>
                   <strong>Gerichtsstand:</strong> Zürich, Schweiz.
                 </p>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};