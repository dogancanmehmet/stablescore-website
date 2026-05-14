import { ArrowRight, CheckCircle } from 'lucide-react';

const flow = [
  { label: 'Signal', desc: 'Anomaly detected' },
  { label: 'Context', desc: 'Root cause mapped' },
  { label: 'Review', desc: 'Human validates' },
  { label: 'Action', desc: 'Decision executed' },
];

export default function ExplainabilitySection() {
  return (
    <section className="w-full bg-navy-900 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-400/[0.06] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">Trust</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-4">
            Explainable by design.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Every recommendation includes context, traceability and human oversight.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {flow.map((step, i) => (
            <div key={step.label} className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <CheckCircle size={18} className="text-accent-light" />
                </div>
                <p className="text-[10px] font-bold text-accent-light uppercase tracking-widest mb-1">Step {i + 1}</p>
                <h3 className="text-xl font-bold text-white mb-1">{step.label}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
              {i < flow.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight size={16} className="text-accent-light/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
