import { TrendingUp, BookOpen, Puzzle, Repeat, Fingerprint } from 'lucide-react';

const points = [
  {
    icon: TrendingUp,
    title: 'Learns operational patterns',
    body: 'Understands recurring operational behaviors and decision dynamics.',
  },
  {
    icon: BookOpen,
    title: 'Builds explainable decision memory',
    body: 'Creates traceable operational context over time.',
  },
  {
    icon: Puzzle,
    title: 'Connects fragmented systems',
    body: 'Combines signals across ERP, operational and business systems.',
  },
  {
    icon: Repeat,
    title: 'Supports repeatable workflows',
    body: 'Integrates into operational review and decision processes.',
  },
  {
    icon: Fingerprint,
    title: 'Creates organization-specific intelligence',
    body: 'Adapts to company-specific operational structures and priorities.',
  },
];

export default function WhyEmbedded() {
  return (
    <section className="w-full bg-bg-light py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-400/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Strategic Positioning</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
            Why StableScore Becomes Embedded
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Operational intelligence becomes more valuable as it adapts to workflows, context and decision history.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <p.icon size={22} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-navy-900 mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
