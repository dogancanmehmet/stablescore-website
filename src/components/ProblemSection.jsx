import { TrendingDown, Clock, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    stat: 'Revenue Leakage',
    title: 'Invisible until it hits the P&L.',
    desc: 'Stock-outs, waste and delays erode margins before they appear in monthly reports.',
  },
  {
    icon: Clock,
    stat: 'Manual Analysis',
    title: 'Hours lost every week.',
    desc: 'Teams chase signals across spreadsheets and disconnected systems instead of acting.',
  },
  {
    icon: AlertTriangle,
    stat: 'Rising Complexity',
    title: 'Intuition cannot keep up.',
    desc: 'Thousands of SKUs and shifting demand mean critical risks slip through unnoticed.',
  },
];

export default function ProblemSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] rounded-full bg-red-400/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-3">The Cost of Delay</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.1]">
            Revenue leaks before you see it.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div
              key={p.stat}
              className="group relative bg-bg-light border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-400/[0.04] rounded-bl-[80px] rounded-tr-2xl pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <p.icon size={26} className="text-red-500" strokeWidth={1.5} />
              </div>
              <p className="text-[11px] font-bold text-red-500 uppercase tracking-widest mb-2">0{i + 1}</p>
              <h3 className="text-2xl font-bold text-navy-900 mb-3 leading-tight">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
