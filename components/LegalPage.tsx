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
              <span className="font-handwriting italic font-normal text-primary z-10 relative">DPA</span>
              <span className="absolute bottom-2 left-0 w-full h-[0.3em] bg-accent-orange -z-10 -rotate-2 rounded-sm opacity-90"></span>
            </span>
          </>
        );
      case 'agb':
        return (
          <>
            Endbenutzer <span className="relative inline-block px-1 z-10">
              <span className="font-handwriting italic font-normal text-primary z-10 relative">Lizenzvereinbarung</span>
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
              
              <div className="bg-surface p-8 rounded-2xl border border-border mb-12">
                <h3 className="text-lg font-bold text-primary mb-4">Betreiber & Kontakt</h3>
                <p className="mb-4">
                  <strong>COREMIS GmbH</strong><br/>
                  Im Buck 3<br/>
                  8196 Wil (ZH)<br/>
                  Schweiz
                </p>
                <p className="mb-4">
                  <strong>Vertretungsberechtigter Geschäftsführer:</strong><br/>
                  lic.oec. Erich Meyer HSG
                </p>
                <p className="mb-4">
                  <strong>Handelsregister-Nummer:</strong><br/>
                  CHE-291.947.911
                </p>
                <p>
                  <strong>Web:</strong> www.coremis.ch<br/>
                  <strong>Email:</strong> info@coremis.ch
                </p>
              </div>

              {/* Disclaimer Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Disclaimer</h2>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Haftung für Links</h3>
                  <p className="text-base leading-relaxed text-secondary">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Urheberrecht</h3>
                  <p className="text-base leading-relaxed text-secondary">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                  <p className="text-sm text-secondary mt-6 font-medium">
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

              {/* SECTION 1: Gegenstand */}
              <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">1 Gegenstand der Lizenz</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    COREMIS gewährt dem Kunden für die vom Kunden gültig erworbene(n) Software(s) eine persönliche, nicht übertragbare, nicht abtretbare und nicht unterlizenzierbare Lizenz zur Eigennutzung der Software. Von der Lizenz erfasst sind auch vom Kunden gültig erworbene Aktualisierungen, Service-Packs und dringende Fehlerbehebungen der Software (sog. Hotfixes). Zum Nutzungsrecht zählen auch zur Software gehörende Dokumentationen und Installationsanweisungen, sofern COREMIS solche zur Verfügung stellt oder diese vom Kunden separat erworben wurden.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Der Datenverarbeitungsvertrag (DPA) gemäss Anhang ist integraler Bestandteil dieser Vereinbarung. Das DPA kann über das Benutzerkonto oder die Website von COREMIS jederzeit eingesehen und heruntergeladen werden.
                  </p>
              </div>

              {/* SECTION 2: Umfang */}
              <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">2 Umfang der Lizenz</h3>
                  <p className="text-sm leading-relaxed mb-2">Die Software ist urheberrechtlich geschützt. Alleinige Rechtsinhaberin sämtlicher Rechte ist COREMIS.</p>
                  <p className="text-sm leading-relaxed mb-2">Dem Kunden wird ein einfaches, auf die Dauer der Lizenz beschränktes Nutzungsrecht für die von ihm lizenzierte Software für die eigenen betrieblichen Zwecke eingeräumt.</p>
                  <p className="text-sm leading-relaxed mb-2">Die Lizenz der Software beinhaltet die Nutzung der Funktionalitäten, den Zugriff, die Verwendung und die Anzeige daraus generierter Daten.</p>
                  <p className="text-sm leading-relaxed mb-2">Erwirbt und installiert der Kunde eine neuere Version der Software («Update»), verliert er, vorbehaltlich gegenteiliger Abreden, nach ihrer Installation, das Recht, die ältere Version weiter zu benutzen. COREMIS kann dies überprüfen und vom Kunden eine Bestätigung verlangen, dass die ältere Version nicht weiter genutzt wird.</p>
                  <p className="text-sm leading-relaxed mb-2">Die Lizenz ist ausschliesslich für die eigene Nutzung des Kunden. Das heisst, nur der Kunde, seine Mitarbeitenden oder beauftragten Personen dürfen die Software nutzen. Das Zugänglichmachen und die Weitergabe der Software an Dritte ist untersagt, sofern die erworbene Lizenz nicht etwas anderes vorsieht. Alle Verwertungshandlungen, die nicht in dieser Vereinbarung vorgesehen sind und ausserhalb des jeweiligen Lizenzmodells liegen, sowie die Erteilung von Unterlizenzen oder der Verkauf der Software sind nicht erlaubt.</p>
                  <p className="text-sm leading-relaxed mb-2">Der Kunde trägt die alleinige Verantwortung für eine unterbrechungsfreie und sichere Verbindung zum Internet bei Nutzung der Software.</p>
                  <p className="text-sm leading-relaxed mb-2">Die von COREMIS mit der Software verwendeten Komponenten und Programme von Drittanbietern sind nur für die Verwendung mit der Software lizenziert und dürfen vom Kunden nicht in anderem Zusammenhang eingesetzt werden. Es gelten die Lizenzbestimmungen dieser Drittanbieter.</p>
                  <p className="text-sm leading-relaxed">COREMIS behält sämtliche Rechte an der Software, dem Quellcode, Datenmodellen, Layouts etc., die in dieser Vereinbarung dem Kunden nicht ausdrücklich eingeräumt werden (Urheberrechte, Patentrechte, Markenrechte und alle sonstigen Schutzrechte, Rechte zur Bearbeitung und dergleichen). Feedback oder Verbesserungsvorschläge des Kunden darf COREMIS entschädigungslos nutzen und umsetzen.</p>
              </div>

              {/* SECTION 3: Nutzungsbedingungen */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">3 Nutzungsbedingungen</h3>
                <p className="text-sm mb-4">
                  Die Software wird als Software-as-a-Service (SaaS) über das Internet bereitgestellt. Der Zugang erfolgt über Browser oder API-Schnittstellen. Die Nutzung erfolgt ausschliesslich über Online-Zugriff. Der Quellcode wird nicht ausgehändigt, ausgeliefert oder zugänglich gemacht. Vervielfältigungen, Veränderungen, Dekompilierungen (Reverse Engineering) der Software sind nicht erlaubt.
                </p>
                <p className="text-sm mb-4">
                   Der Kunde darf die Software nicht für rechtswidrige, diskriminierende, sicherheitsgefährdende oder den Betrieb störende Zwecke verwenden. Insbesondere sind untersagt:
                </p>
                <ul className="list-disc pl-5 mb-4 text-sm text-secondary">
                  <li>das Einschleusen von Schadsoftware oder automatisierten Zugriffen,</li>
                  <li>die Nutzung für Spam, Angriffe oder Datenmanipulation,</li>
                  <li>der Versuch, Sicherheitsmechanismen zu umgehen oder fremde Daten auszulesen.</li>
                </ul>
                <p className="text-sm mb-4">
                  Die Konfiguration der Software durch den Kunden oder Dritte erfolgen auf eigene Verantwortung des Kunden. Der Kunde darf die vereinbarten Beschränkungen des Umfangs der Lizenz nicht umgehen, auch nicht durch Integration eigener Programmbestandteile in die Software.
                </p>
                <p className="text-sm mb-4">
                  Alle Unterlagen und Informationen, die COREMIS dem Kunden zugänglich macht, gelten als geistiges Eigentum oder als vertrauliche Geschäfts- und Betriebsgeheimnisse von COREMIS.
                </p>
                <p className="text-sm mb-4">
                  COREMIS hat das Recht, die Einhaltung der Nutzungsbedingungen fortlaufend zu prüfen (Selbstauskunft des Kunden und Protokollierung der Aktivitäten). Einmal jährlich steht COREMIS das Recht zu, die Einhaltung im Rahmen eines Audits durch eine unabhängige, der Vertraulichkeit verpflichtete Prüfgesellschaft prüfen zu lassen.
                </p>
              </div>

              {/* SECTION 4: Service Level */}
              <div className="mb-8">
                 <h3 className="text-xl font-bold text-primary mb-4">4 Service Level und Verfügbarkeit</h3>
                 <p className="text-sm mb-2">Wartungen werden mindestens 24 Stunden im Voraus angekündigt.</p>
                 <p className="text-sm mb-2">Supportanfragen, Störungsmeldungen und Funktionswünsche werden über das Ticketing-System von COREMIS (Service-Portal oder Support-eMail) entgegengenommen. Jedes Ticket wird nach Priorität (Critical, High, Medium, Low) klassifiziert und gemäss Dringlichkeit bearbeitet.</p>
                 <p className="text-sm mb-2">Der Support steht von Montag bis Freitag, 08:00 – 17:00 Uhr (MEZ) zur Verfügung, ausgenommen an anerkannten Feiertagen am Sitz der COREMIS.</p>
                 <p className="text-sm">COREMIS betreibt ein kontinuierliches System-Monitoring und leitet bei Störungen umgehend geeignete Massnahmen zur Wiederherstellung der Dienste ein.</p>
              </div>

              {/* SECTION 5: Gewährleistung */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">5 Gewährleistung</h3>
                <p className="text-sm mb-2">Die beschränkten Nutzungsrechte gemäss dieser Vereinbarung bestehen an der Software, im jeweils zur Verfügung gestellten Zustand.</p>
                <p className="text-sm mb-2">Die Software weist die für eine solche Software übliche Qualität auf. Fehlerfreiheit wird hingegen nicht gewährleistet. Eine unerhebliche Minderung der Qualität der Software durch Fehler ist kein Mangel.</p>
                <p className="text-sm mb-2">COREMIS gewährleistet eine Verfügbarkeit der Software von 99.9% im Monatsmittel, ausgenommen planmässige Wartungen, angekündigte Updates und Fälle höherer Gewalt.</p>
                <p className="text-sm">COREMIS gewährleistet, dass der vereinbarungsgemässen Nutzung durch den Kunden, keine Rechte Dritter entgegenstehen (sog. Rechtsmangel). Mit Ausnahme der hier genannten Gewährleistungen wird jegliche Gewährleistung ausgeschlossen.</p>
              </div>

              {/* SECTION 6: Haftung */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">6 Haftung und Haftungsbeschränkung</h3>
                <p className="text-sm mb-4">
                  COREMIS haftet dem Kunden nur für direkte Schäden, insbesondere auch aus dem Gebrauch der Software, sofern diese auf grobe Fahrlässigkeit oder Vorsatz zurückzuführen sind. Eine Haftung von COREMIS für leichte oder mittlere Fahrlässigkeit ist ausgeschlossen. Soweit gesetzlich zulässig, ist auch jegliche Haftung für Hilfspersonen der COREMIS ausgeschlossen.
                </p>
                <p className="text-sm mb-4">
                  Eine Haftung für mittelbare Schäden, Folgeschäden und entgangenen Gewinn (z.B. indirekte Folgeschäden wie Ausfallkosten, Mehrkosten, Einkommensverluste, Imageverlust, Rufschädigung, Datenverluste, Schäden durch Betriebsunterbrechungen, Folgekosten für Aufwendungen des Kunden, entgangene Einsparungen etc.) wird – soweit gesetzlich zulässig – ausgeschlossen.
                </p>
                <p className="text-sm mb-4">
                  In jedem Fall ist die Haftung von COREMIS beschränkt auf den doppelten Wert der jährlichen Nutzungsgebühr im Zeitpunkt des Schadenseintritts.
                </p>
                <p className="text-sm">
                  COREMIS haftet nicht für Ansprüche oder Schäden, die sich aus der Nutzung von Software oder Diensten von Drittanbietern ergeben, welche der Kunde selbst aktiviert oder angebunden hat.
                </p>
              </div>

              {/* SECTION 7: Zahlungsmodalitäten */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">7 Vergütung und Zahlungsmodalitäten</h3>
                <p className="text-sm mb-2">Die Nutzung der Software erfolgt gegen Zahlung der vereinbarten monatlichen Lizenzgebühr.</p>
                <p className="text-sm mb-4">Die Zahlung erfolgt jeweils im Voraus zum 1. eines Monats (Verfalltag) per Kreditkarte oder Rechnung. Gerät der Kunde mit der Zahlung in Verzug, schuldet er den gesetzlichen Verzugszins von 5% p.a.. Im Falle des Verzugs geht COREMIS in der Regel wie folgt vor:</p>
                <ul className="list-disc pl-5 mb-4 text-sm text-secondary">
                  <li>10 Tage nach Fälligkeit: Zahlungserinnerung.</li>
                  <li>20 Tage nach Fälligkeit: Mahnung mit Verzugszins und Mahngebühr.</li>
                  <li>30 Tage nach Fälligkeit: Deaktivierung des Benutzer-Keys.</li>
                  <li>90 Tage nach Fälligkeit: unwiderrufliche Löschung aller Kundendaten.</li>
                </ul>
                <p className="text-sm">Alle Preise verstehen sich exklusive gesetzlicher Mehrwertsteuer.</p>
              </div>

              {/* SECTION 8: Dauer */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">8 Dauer und Beendigung</h3>
                <p className="text-sm mb-2">Die Lizenz tritt mit der Zustimmung durch den Kunden oder durch eine von ihm beauftragte Person (Click-Wrap) in Kraft und läuft auf unbestimmte Zeit.</p>
                <p className="text-sm mb-2">Der Kunde kann die Vereinbarung jeweils ohne Einhaltung einer Kündigungsfrist auf das Ende eines jeden Monats beenden. Eine formelle Mitteilung der Kündigung seitens des Kunden ist nicht erforderlich; die Vereinbarung kann durch Einstellung der monatlichen Zahlungen beendet werden.</p>
                <p className="text-sm mb-2">COREMIS kann die Vereinbarung ihrerseits ordentlich mit einer Frist von 30 Tagen jeweils auf ein Monatsende kündigen. Die Kündigung erfolgt schriftlich per eMail.</p>
                <p className="text-sm">Eine ausserordentliche Kündigung aus wichtigem Grund, ohne Einhaltung der Kündigungsfrist und ohne Abmahnung bleibt beiden Parteien vorbehalten.</p>
              </div>

              {/* SECTION 9: Datensicherung */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">9 Datensicherung</h3>
                <p className="text-sm mb-2">90 Tage nach Ende dieser Vereinbarung löscht COREMIS alle Daten des Kunden, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
                <p className="text-sm">Der Kunde kann bis dahin eine Datenexport-Anfrage stellen. Allfällige Kosten von COREMIS für den Datenexport hat der Kunde vor dem Datenexport zu begleichen.</p>
              </div>

              {/* SECTION 10-13 Condensed */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
                 <h3 className="text-lg font-bold text-primary">Weitere Bestimmungen</h3>
                 <div className="text-sm space-y-4">
                    <p><strong>10 Datenschutz:</strong> Einhaltung DSG (Schweiz) & DSGVO (EU). Verarbeitung nur zum Betrieb der Dienste. Details im DPA (Anhang).</p>
                    <p><strong>11 Änderungen:</strong> COREMIS kann diese Vereinbarung jederzeit anpassen. Änderungen treten frühestens 30 Tage nach Mitteilung in Kraft. Bei Nichtzustimmung endet die Vereinbarung automatisch.</p>
                    <p><strong>12 Schlussbestimmungen:</strong> Salvatorische Klausel gilt. Abtretung von Rechten nur mit Zustimmung. COREMIS haftet nicht für höhere Gewalt (Feuer, Streik, etc.).</p>
                    <p><strong>13 Recht & Gerichtsstand:</strong> Diese Vereinbarung untersteht Schweizer Recht (unter Ausschluss des Wiener Kaufrechts). Ausschliesslicher Gerichtsstand ist Zürich (8001), Schweiz.</p>
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
              
              <p className="text-sm text-secondary mb-4 italic">ANHANG – DATENVERARBEITUNGSVERTRAG (DPA) GEMÄSS ART. 9 DSG / ART. 28 DSGVO</p>

              <div className="bg-surface p-6 rounded-2xl border border-border space-y-6">
                 
                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">14.</div>
                    <div>
                       <h4 className="font-bold text-primary">Gegenstand und Dauer</h4>
                       <p className="text-sm text-secondary mt-1">
                         Dieses DPA konkretisiert die datenschutzrechtlichen Regelungen im Rahmen der Nutzung von CoreMIS als Software-as-a-Service.
                         COREMIS verarbeitet personenbezogene Daten ausschliesslich zur Erfüllung des Hauptvertrags. Die Daten werden 90 Tage nach Ende der Vereinbarung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">15.</div>
                    <div>
                       <h4 className="font-bold text-primary">Art, Umfang und Zweck der Verarbeitung</h4>
                       <p className="text-sm text-secondary mt-1">
                         Die Verarbeitung umfasst alle personenbezogenen Daten, die der Kunde im Zusammenhang mit der Nutzung der Software eingibt oder übermittelt.
                         Zweck ist die Bereitstellung, Nutzung, Wartung, das Testen und die Weiterentwicklung der Software.
                         <br/><strong>Datenarten:</strong> Identifikations-, Kontakt-, Zugriffs-, Nutzungs- und Inhaltsdaten sowie technische Metadaten.
                         <br/><strong>Betroffene:</strong> Mitarbeitende, Benutzer oder Geschäftspartner des Kunden.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">16.</div>
                    <div>
                       <h4 className="font-bold text-primary">Rollen der Parteien</h4>
                       <p className="text-sm text-secondary mt-1">Der Kunde ist datenschutzrechtlich Verantwortlicher („Controller“). COREMIS handelt als Auftragsverarbeiter („Processor“) im Sinne von Art. 9 DSG / Art. 28 DSGVO.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">17.</div>
                    <div>
                       <h4 className="font-bold text-primary">Pflichten von COREMIS</h4>
                       <ul className="text-sm text-secondary mt-1 list-disc pl-5">
                          <li>Daten ausschliesslich gemäss den dokumentierten Weisungen des Kunden zu verarbeiten.</li>
                          <li>Mitarbeitende zur Vertraulichkeit verpflichten.</li>
                          <li>Angemessene technische und organisatorische Massnahmen (TOMs) umsetzen.</li>
                          <li>Den Kunden unverzüglich über Datenschutzverletzungen informieren.</li>
                          <li>Daten spätestens 90 Tage nach Vertragsende löschen oder zurückgeben.</li>
                       </ul>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">18.</div>
                    <div>
                       <h4 className="font-bold text-primary">Speicherort, Datensicherheit und Backup</h4>
                       <p className="text-sm text-secondary mt-1">
                         COREMIS stellt sicher, dass Daten ausschliesslich innerhalb der Schweiz oder der EU verarbeitet und auf Servern in zertifizierten Rechenzentren (mindestens ISO 27001) gespeichert werden.
                         Es bestehen tägliche Backups, rollenbasierte Zugriffsbeschränkungen, Verschlüsselung (TLS / AES-256) sowie Protokollierung aller administrativen Zugriffe.
                       </p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">19.</div>
                    <div>
                       <h4 className="font-bold text-primary">Unterauftragsverhältnisse</h4>
                       <p className="text-sm text-secondary mt-1">COREMIS ist berechtigt, Unterauftragsbearbeiter beizuziehen. Der Kunde genehmigt hiermit sämtliche aktuellen und zukünftigen Unterauftragsbearbeiter. Eine aktuelle Liste wird auf Anfrage zur Verfügung gestellt.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">22.</div>
                    <div>
                       <h4 className="font-bold text-primary">Kontrollrechte</h4>
                       <p className="text-sm text-secondary mt-1">Der Kunde ist berechtigt, die Einhaltung dieses DPA und der TOMs durch COREMIS zu prüfen oder prüfen zu lassen (Audits).</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="font-bold text-primary min-w-[30px]">24.</div>
                    <div>
                       <h4 className="font-bold text-primary">Schlussbestimmungen</h4>
                       <p className="text-sm text-secondary mt-1">Es gelten die Bestimmungen des Hauptvertrags sowie das anwendbare Recht (Schweizer Recht, Gerichtsstand Zürich).</p>
                    </div>
                 </div>

              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};