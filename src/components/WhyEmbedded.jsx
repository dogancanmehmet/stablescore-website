import { TrendingUp, BookOpen, Puzzle, Repeat, Fingerprint } from 'lucide-react';

const points = [
  {
    icon: TrendingUp,
    title: 'Learns patterns',
    body: 'Understands recurring operational behaviors.',
  },
  {
    icon: BookOpen,
    title: 'Builds memory',
    body: 'Creates traceable decision context over time.',
  },
  {
    icon: Puzzle,
    title: 'Connects systems',
    body: 'Combines signals across ERP and operations.',
  },
  {
    icon: Repeat,
    title: 'Enables workflows',
    body: 'Integrates into review and approval processes.',
  },
  {
    icon: Fingerprint,
    title: 'Adapts to you',
    body: 'Learns company-specific structures.',
  },
];

export default function WhyEmbedded() {
  return (
    <section className="w-full bg-bg-light py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Why It Sticks</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.1]">
            Why StableScore becomes embedded.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.slice(0, 3).map((p) => (
            <div
              key={p.title}
              className="bg-white border border-border rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <p.icon size={24} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mt-5 max-w-3xl mx-auto">
          {points.slice(3).map((p) => (
            <div
              key={p.title}
              className="bg-white border border-border rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <p.icon size={24} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
