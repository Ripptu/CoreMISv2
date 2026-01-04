import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer, Download } from 'lucide-react';

interface LegalModalProps {
  page: 'impressum' | 'datenschutz' | 'agb' | 'haftung' | 'urheberrecht' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ page, onClose }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (page) {
      // Save current overflow style (important for GSAP/ScrollSmoother which sets it to hidden)
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Force scroll to top instantly inside the modal when page changes
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
      }

      // Cleanup: Restore the original overflow instead of forcing 'unset'
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [page]);

  if (!page || !mounted) return null;

  // Use createPortal to render outside the root div (fixes positioning issues with GSAP/Lenis)
  return createPortal(
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 print:p-0">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity print:hidden" 
        onClick={onClose}
      ></div>
      <div 
        ref={scrollContainerRef}
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-300 print:max-h-none print:w-full print:shadow-none print:rounded-none"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-20 print:hidden"
        >
          <X size={20} />
        </button>
        
        <div className="p-8 md:p-12 prose prose-slate max-w-none text-primary print:p-0">
          {page === 'impressum' && (
            <>
              <h2 className="font-serif text-3xl mb-6">Impressum</h2>
              <p><strong>COREMIS GmbH</strong><br/>
              Im Buck 3<br/>
              8196 Wil (ZH)<br/>
              Schweiz</p>
              
              <p><strong>Kontakt:</strong><br/>
              Web: www.coremis.ch</p>
              
              <p><strong>Urheberrecht:</strong><br/>
              © 2025 COREMIS GmbH. Alle Rechte vorbehalten.</p>
            </>
          )}

          {page === 'haftung' && (
            <>
              <h2 className="font-serif text-3xl mb-6">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
                ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </>
          )}

          {page === 'urheberrecht' && (
            <>
              <h2 className="font-serif text-3xl mb-6">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
                von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </>
          )}

          {page === 'agb' && (
            <div className="print:p-8">
              {/* Document Header with Logo */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b-2 border-primary pb-8">
                <img 
                  src="https://i.postimg.cc/BnmkN7h0/logo-mit-text-PNG.png" 
                  alt="CoreMIS Logo" 
                  className="h-12 w-auto object-contain print:h-16"
                />
                <div className="text-left md:text-right w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-primary m-0 leading-none">Lizenzvereinbarung</h2>
                    <p className="text-xs font-bold text-accent-orange uppercase tracking-widest mt-2 m-0">EULA</p>
                  </div>
                  <button 
                    onClick={() => window.print()} 
                    className="ml-4 md:ml-0 md:mt-2 text-primary hover:text-accent-orange transition-colors print:hidden flex items-center gap-2 text-sm font-bold bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg" 
                    title="Drucken / Als PDF speichern"
                  >
                     <Download size={16} /> Als PDF speichern
                  </button>
                </div>
              </div>

              <h2 className="font-serif text-3xl mb-2 mt-0">Endbenutzer-Lizenzvereinbarung (EULA)</h2>
              <p className="text-sm text-secondary mb-8">Gültig ab 1. Dezember 2025</p>

              <p>
                Diese Endbenutzer-Lizenzvereinbarung („Vereinbarung“) regelt die Nutzung der webbasierten Software- und 
                Cloud-Applikation „CoreMIS“ („Software“ oder „Dienste“) der COREMIS GmbH, Im Buck 3, 8196 Wil (ZH), Schweiz 
                („COREMIS“), durch den jeweiligen Kunden („Kunde“). Die Software ermöglicht Funktionen im Bereich CFO Services, Finanzplanung und -Steuerung, MIS, Reporting und Datenmanagement.
              </p>
              <p>
                Mit dem erstmaligen Zugriff auf die Anwendung und dem Klick auf „Ich stimme zu“ akzeptiert der Kunde diese 
                Vereinbarung inkl. deren Anhänge rechtsverbindlich.
              </p>
              
              <h3>1 Gegenstand der Lizenz</h3>
              <p>
                COREMIS gewährt dem Kunden für die vom Kunden gültig erworbene(n) Software(s) eine persönliche, nicht übertragbare, nicht abtretbare und nicht unterlizenzierbare Lizenz zur Eigennutzung der Software. Von der Lizenz erfasst sind auch vom Kunden gültig erworbene Aktualisierungen, Service-Packs und dringende Fehlerbehebungen der Software (sog. Hotfixes). Zum Nutzungsrecht zählen auch zur Software gehörende Dokumentationen und Installationsanweisungen, sofern COREMIS solche zur Verfügung stellt oder diese vom Kunden separat erworben wurden.
              </p>
              <p>Der Datenverarbeitungsvertrag (DPA) gemäss Anhang ist integraler Bestandteil dieser Vereinbarung. Das DPA kann über das Benutzerkonto oder die Website von COREMIS jederzeit eingesehen und heruntergeladen werden.</p>

              <h3>2 Umfang der Lizenz</h3>
              <p>Die Software ist urheberrechtlich geschützt. Alleinige Rechtsinhaberin sämtlicher Rechte ist COREMIS.</p>
              <p>Dem Kunden wird ein einfaches, auf die Dauer der Lizenz beschränktes Nutzungsrecht für die von ihm lizenzierte Software für die eigenen betrieblichen Zwecke eingeräumt.</p>
              <p>Die Lizenz der Software beinhaltet die Nutzung der Funktionalitäten, den Zugriff, die Verwendung und die Anzeige daraus generierter Daten.</p>
              <p>Erwirbt und installiert der Kunde eine neuere Version der Software («Update»), verliert er, vorbehaltlich gegenteiliger Abreden, nach ihrer Installation, das Recht, die ältere Version weiter zu benutzen. COREMIS kann dies überprüfen und vom Kunden eine Bestätigung verlangen, dass die ältere Version nicht weiter genutzt wird.</p>
              <p>Die Lizenz ist ausschliesslich für die eigene Nutzung des Kunden. Das heisst, nur der Kunde, seine Mitarbeitenden oder beauftragten Personen dürfen die Software nutzen. Das Zugänglichmachen und die Weitergabe der Software an Dritte ist untersagt, sofern die erworbene Lizenz nicht etwas anderes vorsieht. Alle Verwertungshandlungen, die nicht in dieser Vereinbarung vorgesehen sind und ausserhalb des jeweiligen Lizenzmodells liegen, sowie die Erteilung von Unterlizenzen oder der Verkauf der Software sind nicht erlaubt.</p>
              <p>Der Kunde trägt die alleinige Verantwortung für eine unterbrechungsfreie und sichere Verbindung zum Internet bei Nutzung der Software.</p>
              <p>Die von COREMIS mit der Software verwendeten Komponenten und Programme von Drittanbietern sind nur für die Verwendung mit der Software lizenziert und dürfen vom Kunden nicht in anderem Zusammenhang eingesetzt werden. Es gelten die Lizenzbestimmungen dieser Drittanbieter.</p>
              <p>COREMIS behält sämtliche Rechte an der Software, dem Quellcode, Datenmodellen, Layouts etc., die in dieser Vereinbarung dem Kunden nicht ausdrücklich eingeräumt werden (Urheberrechte, Patentrechte, Markenrechte und alle sonstigen Schutzrechte, Rechte zur Bearbeitung und dergleichen). Feedback oder Verbesserungsvorschläge des Kunden darf COREMIS entschädigungslos nutzen und umsetzen.</p>

              <h3>3 Nutzungsbedingungen</h3>
              <p>Die Software wird als Software-as-a-Service (SaaS) über das Internet bereitgestellt. Der Zugang erfolgt über Browser oder API-Schnittstellen. Die Nutzung erfolgt ausschliesslich über Online-Zugriff.</p>
              <p>Der Quellcode wird nicht ausgehändigt, ausgeliefert oder zugänglich gemacht. Vervielfältigungen, Veränderungen, Dekompilierungen (Reverse Engineering) der Software sind nicht erlaubt.</p>
              <p>Der Kunde darf die Software nicht für rechtswidrige, diskriminierende, sicherheitsgefährdende oder den Betrieb störende Zwecke verwenden. Insbesondere sind untersagt:</p>
              <ul>
                 <li>das Einschleusen von Schadsoftware oder automatisierten Zugriffen,</li>
                 <li>die Nutzung für Spam, Angriffe oder Datenmanipulation,</li>
                 <li>der Versuch, Sicherheitsmechanismen zu umgehen oder fremde Daten auszulesen.</li>
              </ul>
              <p>Die Konfiguration der Software durch den Kunden oder Dritte erfolgen auf eigene Verantwortung des Kunden.</p>
              <p>Der Kunde darf die vereinbarten Beschränkungen des Umfangs der Lizenz nicht umgehen, auch nicht durch Integration eigener Programmbestandteile in die Software.</p>
              <p>Alle Unterlagen und Informationen, die COREMIS dem Kunden zugänglich macht, gelten als geistiges Eigentum oder als vertrauliche Geschäfts- und Betriebsgeheimnisse von COREMIS.</p>
              <p>Der Kunde stellt sicher, dass alle Personen, welche Zugang zur Software haben, die Pflichten dieser Vereinbarung ebenfalls einhalten. Entsprechende Verletzungen durch solche Personen gelten als vom Kunden zu verantwortende Verletzung dieser Vereinbarung.</p>
              <p>Der Kunde verpflichtet sich, die Software ausschliesslich im Rahmen der vereinbarten Funktionen und geltenden Gesetze zu verwenden.</p>
              <p>COREMIS hat das Recht, die Einhaltung der Nutzungsbedingungen fortlaufend zu prüfen (Selbstauskunft des Kunden und Protokollierung der Aktivitäten). Einmal jährlich steht COREMIS das Recht zu, die Einhaltung im Rahmen eines Audits durch eine unabhängige, der Vertraulichkeit verpflichtete Prüfgesellschaft prüfen zu lassen. Der Kunde wird die Prüfgesellschaft im notwendigen Umfang unterstützen. Stellt die Prüfgesellschaft eine nicht vertragsgemässe Nutzung fest, verpflichtet sich der Kunde, alle im Zusammenhang mit dem Audit angefallenen Kosten zu tragen und die zusätzlich erforderlichen Lizenzen rückwirkend seit Nutzungsbeginn zu erwerben. Darüberhinausgehende Ansprüche von COREMIS bleiben vorbehalten (z.B. Schadenersatz).</p>

              <h3>4 Service Level und Verfügbarkeit</h3>
              <p>Wartungen werden mindestens 24 Stunden im Voraus angekündigt.</p>
              <p>Supportanfragen, Störungsmeldungen und Funktionswünsche werden über das Ticketing-System von COREMIS (Service-Portal oder Support-eMail) entgegengenommen. Jedes Ticket wird nach Priorität (Critical, High, Medium, Low) klassifiziert und gemäss Dringlichkeit bearbeitet.</p>
              <p>Der Support steht von Montag bis Freitag, 08:00 – 17:00 Uhr (MEZ) zur Verfügung, ausgenommen an anerkannten Feiertagen am Sitz der COREMIS.</p>
              <p>Feature-Requests werden erfasst und bewertet, begründen jedoch keinen Anspruch auf Umsetzung oder einen bestimmten Zeitplan.</p>
              <p>COREMIS betreibt ein kontinuierliches System-Monitoring und leitet bei Störungen umgehend geeignete Massnahmen zur Wiederherstellung der Dienste ein.</p>

              <h3>5 Gewährleistung</h3>
              <p>Die beschränkten Nutzungsrechte gemäss dieser Vereinbarung bestehen an der Software, im jeweils zur Verfügung gestellten Zustand.</p>
              <p>Die Software weist die für eine solche Software übliche Qualität auf. Fehlerfreiheit wird hingegen nicht gewährleistet. Eine unerhebliche Minderung der Qualität der Software durch Fehler ist kein Mangel. Ebenfalls kein Mangel liegt vor, wenn eine Funktionsbeeinträchtigung der Software, ganz oder teilweise auf Hardwaremängeln, Umgebungsbedingungen, Fehlbedienung o.ä. beruht.</p>
              <p>COREMIS gewährleistet eine Verfügbarkeit der Software von 99.9% im Monatsmittel, ausgenommen planmässige Wartungen, angekündigte Updates und Fälle höherer Gewalt. Es besteht keine Gewährleistung für die ununterbrochene Verfügbarkeit oder Fehlerfreiheit der Software, jedoch die Verpflichtung zur Wiederherstellung resp. Fehlerbehebung im Rahmen der zumutbaren Mittel und Zeit gemäss vorstehender Ziff. 4 (Service Level und Verfügbarkeit).</p>
              <p>COREMIS gewährleistet, dass der vereinbarungsgemässen Nutzung durch den Kunden, keine Rechte Dritter entgegenstehen (sog. Rechtsmangel). Der Kunde verpflichtet sich, COREMIS unverzüglich darüber zu informieren, wenn ein Dritter die Verletzung von Schutzrechten gegenüber dem Kunden geltend macht. Der Kunde ermächtigt COREMIS hiermit, allfällige Auseinandersetzungen mit Dritten allein zu führen. Der Kunde darf von sich aus keine Ansprüche eines Dritten ohne Zustimmung von COREMIS anerkennen. COREMIS wehrt die Ansprüche des Dritten auf eigene Kosten ab, soweit diese nicht auf pflichtwidrigem Verhalten des Kunden beruhen.</p>
              <p>Mit Ausnahme der hier genannten Gewährleistungen wird jegliche Gewährleistung ausgeschlossen.</p>

              <h3>6 Haftung und Haftungsbeschränkung</h3>
              <p>COREMIS haftet dem Kunden nur für direkte Schäden, insbesondere auch aus dem Gebrauch der Software, sofern diese auf grobe Fahrlässigkeit oder Vorsatz zurückzuführen sind. Eine Haftung von COREMIS für leichte oder mittlere Fahrlässigkeit ist ausgeschlossen. Soweit gesetzlich zulässig, ist auch jegliche Haftung für Hilfspersonen der COREMIS ausgeschlossen.</p>
              <p>Eine Haftung für mittelbare Schäden, Folgeschäden und entgangenen Gewinn (z.B. indirekte Folgeschäden wie Ausfallkosten, Mehrkosten, Einkommensverluste, Imageverlust, Rufschädigung, Datenverluste, Schäden durch Betriebsunterbrechungen, Folgekosten für Aufwendungen des Kunden, entgangene Einsparungen etc.) wird – soweit gesetzlich zulässig – ausgeschlossen.</p>
              <p>In jedem Fall ist die Haftung von COREMIS beschränkt auf den doppelten Wert der jährlichen Nutzungsgebühr im Zeitpunkt des Schadenseintritts.</p>
              <p>COREMIS haftet nicht für Ansprüche oder Schäden, die sich aus der Nutzung von Software oder Diensten von Drittanbietern ergeben, welche der Kunde selbst aktiviert oder angebunden hat. Der Kunde ist verpflichtet, COREMIS von allen Ansprüchen aus der Nutzung solcher Dienste freizustellen und jeglichen Schaden zu ersetzen, der COREMIS dadurch entsteht.</p>
              <p>Die unter dieser Ziff. 6 vereinbarten Haftungsbeschränkungen gelten sowohl für vertragliche als auch ausservertragliche Ansprüche.</p>

              <h3>7 Vergütung und Zahlungsmodalitäten</h3>
              <p>Die Nutzung der Software erfolgt gegen Zahlung der vereinbarten monatlichen Lizenzgebühr.</p>
              <p>Die Zahlung erfolgt jeweils im Voraus zum 1. eines Monats (Verfalltag) per Kreditkarte oder Rechnung. Gerät der Kunde mit der Zahlung in Verzug, schuldet er den gesetzlichen Verzugszins von 5% p.a.. Im Falle des Verzugs geht COREMIS in der Regel wie folgt vor:</p>
              <ul>
                 <li>10 Tage nach Fälligkeit: Zahlungserinnerung.</li>
                 <li>20 Tage nach Fälligkeit: Mahnung mit Verzugszins und Mahngebühr.</li>
                 <li>30 Tage nach Fälligkeit: Deaktivierung des Benutzer-Keys.</li>
                 <li>90 Tage nach Fälligkeit: unwiderrufliche Löschung aller Kundendaten.</li>
              </ul>
              <p>Alle Preise verstehen sich exklusive gesetzlicher Mehrwertsteuer.</p>
              
              <h3>8 Dauer und Beendigung</h3>
              <p>Die Lizenz tritt mit der Zustimmung durch den Kunden oder durch eine von ihm beauftragte Person (Click-Wrap) in Kraft und läuft auf unbestimmte Zeit.</p>
              <p>Der Kunde kann die Vereinbarung jeweils ohne Einhaltung einer Kündigungsfrist auf das Ende eines jeden Monats beenden. Eine formelle Mitteilung der Kündigung seitens des Kunden ist nicht erforderlich; die Vereinbarung kann durch Einstellung der monatlichen Zahlungen beendet werden. Der Kunde hat keinerlei Anspruch auf Rückerstattung von bereits geleisteten Zahlungen.</p>
              <p>COREMIS kann die Vereinbarung ihrerseits ordentlich mit einer Frist von 30 Tagen jeweils auf ein Monatsende kündigen. Die Kündigung erfolgt schriftlich per eMail.</p>
              <p>Eine ausserordentliche Kündigung aus wichtigem Grund, ohne Einhaltung der Kündigungsfrist und ohne Abmahnung bleibt beiden Parteien vorbehalten. Ein wichtiger Grund seitens COREMIS liegt insbesondere dann vor, wenn der Kunde in erheblicher Weise gegen diese Vereinbarung verstösst, namentlich den Umfang und die Nutzungsbedingungen der eingeräumten Lizenz missachtet, Immaterialgüterrechte von COREMIS verletzt oder die geschuldete Lizenzgebühr nicht oder nicht vollständig bezahlt.</p>

              <h3>9 Datensicherung</h3>
              <p>90 Tage nach Ende dieser Vereinbarung löscht COREMIS alle Daten des Kunden, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
              <p>Der Kunde kann bis dahin eine Datenexport-Anfrage stellen. Allfällige Kosten von COREMIS für den Datenexport hat der Kunde vor dem Datenexport zu begleichen. Ohne vorgängige Zahlung besteht kein Anspruch auf den Export der Daten.</p>

              <h3>10 Datenschutz und Datenverarbeitung</h3>
              <p>COREMIS verpflichtet sich zur Einhaltung des Schweizer Datenschutzgesetzes (DSG) sowie der EU Datenschutzgrundverordnung (DSGVO; falls und soweit im Einzelfall anwendbar).</p>
              <p>Die Verarbeitung personenbezogener Daten erfolgt ausschliesslich zum Betrieb der Dienste.</p>
              <p>Ein separater Datenverarbeitungsvertrag (DPA), der als Anhang Bestandteil dieser Vereinbarung ist, regelt die Einzelheiten der Verarbeitung personenbezogener Daten im Auftrag gemäss Art. 9 DSG bzw. Art. 28 DSGVO, insbesondere Art, Zweck und Umfang der Verarbeitung, den Speicherort (Serverstandort Schweiz oder EU), die technischen und organisatorischen Schutzmassnahmen sowie Verfahren zu Backup, Wiederherstellung, Zugriff und Löschung.</p>
              <p>Der Kunde bleibt Verantwortlicher seiner Daten („Data Controller“). COREMIS agiert als Auftragsverarbeiter („Processor“).</p>

              <h3>11 Änderungen und Anpassungen dieser Vereinbarung</h3>
              <p>COREMIS kann diese Vereinbarung jederzeit anpassen. Diese Vereinbarung ersetzt allfällige frühere Lizenzvereinbarungen zwischen COREMIS und dem Kunden. Es gilt die jeweils neuste Version der Endbenutzer-Lizenzvereinbarung (EULA), die der Kunde akzeptiert hat. Als akzeptiert gilt eine neue Version auch, wenn sie bei der Zugänglichmachung von neuen Programmversionen („Updates“), von Service-Packs etc. durch den Kunden oder durch eine von ihm beauftragte Person bestätigt wird (Click-Wrap).</p>
              <p>Änderungen dieser Vereinbarung treten frühestens 30 Tage nach Mitteilung in Kraft. Der Kunde wird bei der nächsten Anmeldung über neue Bedingungen informiert und muss diese aktiv akzeptieren (Click-Wrap).</p>
              <p>Bei Nichtzustimmung endet die Vereinbarung automatisch.</p>

              <h3>12 Schlussbestimmungen</h3>
              <p><strong>12.1 Vollständige Vereinbarung</strong><br/>
              Die Rechte des Kunden an der Software sind in dieser Vereinbarung abschliessend geregelt. Allgemeine Geschäftsbedingungen oder Lizenzbedingungen des Kunden sind wegbedungen.</p>
              
              <p><strong>12.2 Salvatorische Klausel</strong><br/>
              Die Ungültigkeit oder Undurchsetzbarkeit einer oder mehrerer Bestimmungen dieser Vereinbarung berührt die Gültigkeit der übrigen Bestimmungen der Vereinbarung nicht. Ungültige oder nicht durchsetzbare Bestimmungen werden durch eine Neuregelung ersetzt, die wirtschaftlich und rechtlich der ungültigen oder nicht durchsetzbaren Bestimmung so nahe wie möglich kommt.</p>
              
              <p><strong>12.3 Abtretungsverbot</strong><br/>
              Der Kunde kann diese Vereinbarung oder Rechte und Pflichten daraus nur mit der schriftlichen Zustimmung von COREMIS auf Dritte übertragen.</p>
              
              <p><strong>12.4 Höhere Gewalt</strong><br/>
              COREMIS haftet nicht für verspätete Erfüllung oder Nichterfüllung ihrer Pflichten aus dieser Vereinbarung, wenn diese auf Ereignisse zurückzuführen sind, welche ausserhalb der zumutbaren Kontrolle von COREMIS liegen, mit der gebotenen Sorgfalt nicht hätten verhindert werden können und beim Abschluss dieser Vereinbarung nicht vorhersehbar waren, wie z.B. Feuer, Explosion, Überschwemmung, Sturm, Streik, Krieg, Terrorakte, Embargo, Aufruhr oder andere zivile Unruhen, das Eingreifen einer staatlichen Behörde durch den Erlass eines Gesetzes oder einer staatlichen Verordnung, Regel, Vorschrift oder Anweisung oder jede Massnahme einer staatlichen oder öffentlichen Behörde, welche die Leistungen von COREMIS beeinträchtigen.</p>

              <h3>13 Anwendbares Recht und Gerichtsstand</h3>
              <p>Diese Vereinbarung untersteht Schweizer Recht, unter Ausschluss der Kollisionsnormen des internationalen Privatrechts und internationaler Abkommen (namentlich des Wiener Kaufrechts).</p>
              <p>Ausschliesslicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit dieser Vereinbarung inkl. ihrer Anhänge ist Zürich (8001), Schweiz.</p>
              <p>COREMIS GmbH – Wil (ZH), Schweiz<br/>
              © 2025 COREMIS GmbH. Alle Rechte vorbehalten.</p>
            </div>
          )}

          {page === 'datenschutz' && (
            <div className="print:p-8">
              {/* Document Header with Logo */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b-2 border-primary pb-8">
                <img 
                  src="https://i.postimg.cc/BnmkN7h0/logo-mit-text-PNG.png" 
                  alt="CoreMIS Logo" 
                  className="h-12 w-auto object-contain print:h-16"
                />
                <div className="text-left md:text-right w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-primary m-0 leading-none">Datenschutz</h2>
                    <p className="text-xs font-bold text-accent-orange uppercase tracking-widest mt-2 m-0">DPA (Data Processing Agreement)</p>
                  </div>
                  <button 
                    onClick={() => window.print()} 
                    className="ml-4 md:ml-0 md:mt-2 text-primary hover:text-accent-orange transition-colors print:hidden flex items-center gap-2 text-sm font-bold bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg"
                    title="Drucken / Als PDF speichern"
                  >
                     <Download size={16} /> Als PDF speichern
                  </button>
                </div>
              </div>

              <h2 className="font-serif text-3xl mb-2 mt-0">Anhang – Datenverarbeitungsvertrag (DPA)</h2>
              <p className="text-sm text-secondary mb-8">Gemäss Art. 9 DSG / Art. 28 DSGVO</p>

              <p>
                zwischen COREMIS GmbH („COREMIS“) und dem jeweiligen Kunden („Kunde“) – gemeinsam die Parteien – der webbasierten Software- und Cloud-Applikation CoreMIS („Software“).
              </p>
              
              <h3>14 Gegenstand und Dauer</h3>
              <p>Dieses DPA konkretisiert die datenschutzrechtlichen Regelungen im Rahmen der Nutzung von CoreMIS als Software-as-a-Service.</p>
              <p>COREMIS verarbeitet personenbezogene Daten ausschliesslich zur Erfüllung des Hauptvertrags (Endbenutzer-Lizenzvereinbarung betreffend die Software). Die Daten werden 90 Tage nach Ende der Vereinbarung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
              
              <h3>15 Art, Umfang und Zweck der Verarbeitung</h3>
              <p>Die Verarbeitung umfasst alle personenbezogenen Daten, die der Kunde im Zusammenhang mit der Nutzung der Software eingibt oder übermittelt.</p>
              <p>COREMIS verarbeitet die Daten, indem sie erhoben, erfasst, geordnet, gespeichert, angepasst, ausgelesen, verwendet, übermittelt oder sonst wie bereitgestellt werden sowie mit anderen Daten abgeglichen oder – sofern erforderlich – eingeschränkt, gelöscht oder vernichtet werden.</p>
              <p>Zweck der Verarbeitung ist die Bereitstellung, Nutzung, Wartung, das Testen und die Weiterentwicklung der Software.</p>
              <p>Datenarten: Identifikations-, Kontakt-, Zugriffs-, Nutzungs- und Inhaltsdaten sowie technische Metadaten.</p>
              <p>Betroffene Personen: Mitarbeitende, Benutzer oder Geschäftspartner des Kunden.</p>

              <h3>16 Rollen der Parteien</h3>
              <p>Der Kunde ist datenschutzrechtlich Verantwortlicher („Controller“) und bleibt Eigentümer seiner Daten.</p>
              <p>COREMIS handelt als Auftragsverarbeiter („Processor“) im Sinne von Art. 9 DSG / Art. 28 DSGVO.</p>

              <h3>17 Pflichten von COREMIS</h3>
              <p>COREMIS verpflichtet sich,</p>
              <ul>
                 <li>die Daten ausschliesslich gemäss den dokumentierten Weisungen des Kunden zu verarbeiten,</li>
                 <li>Mitarbeitende zur Vertraulichkeit zu verpflichten,</li>
                 <li>angemessene technische und organisatorische Massnahmen (TOMs) gemäss Art. 8 DSG / Art. 32 DSGVO umzusetzen,</li>
                 <li>den Kunden unverzüglich über Datenschutzverletzungen zu informieren,</li>
                 <li>den Kunden bei Betroffenenanfragen zu unterstützen,</li>
                 <li>Daten spätestens 90 Tage nach Vertragsende gemäss Ziff. 9 zu löschen oder zurückzugeben.</li>
              </ul>

              <h3>18 Speicherort, Datensicherheit und Backup</h3>
              <p>COREMIS stellt sicher, dass Daten ausschliesslich innerhalb der Schweiz oder der EU verarbeitet und auf Servern in zertifizierten Rechenzentren (mindestens ISO 27001) gespeichert werden. Der Betrieb erfolgt in zertifizierten Rechenzentren (mindestens ISO 27001).</p>
              <p>Es bestehen tägliche Backups, rollenbasierte Zugriffsbeschränkungen, Verschlüsselung (TLS / AES-256) sowie Protokollierung aller administrativen Zugriffe.</p>

              <h3>19 Unterauftragsverhältnisse</h3>
              <p>COREMIS ist berechtigt, Unterauftragsbearbeiter beizuziehen, und verpflichtet sich, entsprechende vertragliche Regelungen sicherzustellen, welche die Einhaltung dieses DPA gewährleisten.</p>
              <p>Der Kunde genehmigt hiermit sämtliche aktuellen und zukünftigen Unterauftragsbearbeiter von COREMIS. Eine aktuelle Liste wird dem Kunden auf Anfrage zur Verfügung gestellt.</p>

              <h3>20 Unterstützung des Kunden</h3>
              <p>COREMIS unterstützt den Kunden auf dessen Kosten bei der Erfüllung seiner gesetzlichen Pflichten (z.B. Auskunfts-, Berichtigungs-, Löschungs- oder Informationspflichten) sowie bei Sicherheits- oder Auditanfragen.</p>

              <h3>21 Beendigung der Verarbeitung</h3>
              <p>Nach Beendigung des Hauptvertrags werden alle personenbezogenen Daten des Kunden nach spätestens 90 Tagen gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
              <p>Auf Wunsch erfolgt stattdessen eine Rückgabe der Daten in einem gängigen elektronischen Format.</p>

              <h3>22 Kontrollrechte</h3>
              <p>Der Kunde ist berechtigt, die Einhaltung dieses DPA und der TOMs durch COREMIS zu prüfen oder prüfen zu lassen. Audits sind mit angemessener Frist anzukündigen und dürfen den Geschäftsbetrieb von COREMIS nicht unverhältnismässig beeinträchtigen.</p>
              <p>Der Kunde trägt sämtliche Kosten der Informations- und Prüfrechte, einschliesslich nachgewiesener interner Kosten von COREMIS.</p>

              <h3>23 Haftung</h3>
              <p>Die Haftung richtet sich nach dem Hauptvertrag (Endbenutzer-Lizenzvereinbarung).</p>

              <h3>24 Schlussbestimmungen und anwendbares Recht</h3>
              <p>Sofern dieses DPA etwas nicht regelt, gelten die Bestimmungen des Hauptvertrags, insbesondere für</p>
              <ul>
                 <li>die Schlussbestimmungen des Hauptvertrags sowie,</li>
                 <li>das anwendbare Recht und der Gerichtsstand (Schweizer Recht, Gerichtsstand Zürich).</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};