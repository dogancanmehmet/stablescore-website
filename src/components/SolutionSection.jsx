import { Search, TrendingUp, ClipboardList, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Detect Revenue Risks Early',
    desc: 'Identify stock-out exposure, dead stock and procurement gaps before they hit your P&L.',
  },
  {
    icon: TrendingUp,
    title: 'Prioritize by Financial Impact',
    desc: 'Rank operational risks by estimated revenue impact so your team fixes what matters most first.',
  },
  {
    icon: ClipboardList,
    title: 'Recommend Next Best Action',
    desc: 'Get clear, prioritized actions with confidence scores — not raw data dumps.',
  },
  {
    icon: MessageCircle,
    title: 'Explain Every Decision',
    desc: 'Understand the root cause, contributing signals and expected outcome before you act.',
  },
];

export default function SolutionSection() {
  return (
    <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-400/[0.06] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-12">
          <div>
            <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">OUR SOLUTION</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              A decision layer that protects revenue and reduces manual analysis.
            </h2>
          </div>
          <div>
            <p className="text-base text-gray-300 leading-relaxed">
              StableScore connects to your ERP and operational systems to continuously monitor signals, detect risks, explain root causes and recommend the next best action — so your team stops reacting and starts deciding.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-accent-light" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
