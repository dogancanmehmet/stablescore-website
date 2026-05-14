import { Search, TrendingUp, ClipboardList, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Detect Revenue Risks',
    desc: 'Catch stock-out exposure and waste before it hits your P&L.',
    color: 'from-red-500/10 to-orange-500/10',
    iconColor: 'text-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Prioritize by Impact',
    desc: 'Rank risks by estimated financial impact. Fix what matters first.',
    color: 'from-amber-500/10 to-yellow-500/10',
    iconColor: 'text-amber-600',
  },
  {
    icon: ClipboardList,
    title: 'Get Clear Actions',
    desc: 'Receive prioritized next steps with confidence scores.',
    color: 'from-emerald-500/10 to-green-500/10',
    iconColor: 'text-emerald-600',
  },
  {
    icon: MessageCircle,
    title: 'Understand the Why',
    desc: 'See root cause, contributing signals and expected outcome.',
    color: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-600',
  },
];

export default function SolutionSection() {
  return (
    <section className="w-full bg-navy-900 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-400/[0.06] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">The Solution</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1]">
            A decision layer that protects revenue.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <f.icon size={24} className={f.iconColor} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
