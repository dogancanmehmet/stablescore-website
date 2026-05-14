import { ArrowRight, CheckCircle } from 'lucide-react';

const flow = [
  'Recommendation',
  'Contributing signals',
  'Operational context',
  'Human review',
  'Approved action',
];

export default function ExplainabilitySection() {
  return (
    <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-400/[0.06] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">Trust</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Explainable by Design
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Operational decisions require context, traceability and human oversight.
          </p>
        </div>

        <p className="text-center text-base text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16">
          StableScore AI combines statistical modeling, anomaly detection and explainable AI systems to support operational decision-making in complex environments.
        </p>

        {/* Flow */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-3 flex-1 sm:flex-initial">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={18} className="text-accent-light" />
                  </div>
                  <span className="text-sm font-medium text-white whitespace-nowrap">{step}</span>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight size={16} className="text-accent-light/50 hidden sm:block flex-shrink-0" />
                )}
                {i < flow.length - 1 && (
                  <div className="w-px h-6 bg-accent-light/30 sm:hidden mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
