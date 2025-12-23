import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { FileSpreadsheet, Unplug, Clock, AlertOctagon } from 'lucide-react';

const problems = [
  {
    icon: <FileSpreadsheet size={32} />,
    title: 'Excel-Chaos',
    desc: 'Verschiedene Versionen, kaputte Formeln und manuelle Übertragungsfehler kosten Nerven und Geld.',
  },
  {
    icon: <Unplug size={32} />,
    title: 'System-Inseln',
    desc: 'DATEV, ERP und Bankkonten sprechen nicht miteinander. Sie verbringen Stunden mit dem Exportieren.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Veraltete Daten',
    desc: 'Wenn der Report am 20. fertig ist, sind die Zahlen schon wieder alt. Steuerung ist nur mit Rückspiegel möglich.',
  },
  {
    icon: <AlertOctagon size={32} />,
    title: 'Mangelnde Transparenz',
    desc: 'Keine Drill-Downs möglich. Woher kommt die Abweichung? Die Antwort dauert meist Tage.',
  },
];

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="max-w-[1280px] mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Kennen Sie diese <span className="text-accent-orange">Schmerzen?</span>
            </h2>
            <p className="text-secondary text-lg">
              Finanzsteuerung im Mittelstand ist oft noch Handarbeit. CoreMIS automatisiert den Prozess.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div className="group bg-white p-8 rounded-xl border border-border shadow-soft hover:shadow-hover hover:border-accent-orange/30 transition-all duration-300 h-full flex flex-col items-start">
                <div className="mb-6 text-slate-400 group-hover:text-accent-orange transition-colors duration-300 transform group-hover:scale-110 origin-left">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};