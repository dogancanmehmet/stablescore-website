import { Search, TrendingUp, ClipboardList, MessageCircle, Clock, CreditCard, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Search,
    title: 'Detect Risks Early',
    desc: 'Catch stock-outs, supplier delays, and demand shifts before they hit your revenue.',
    stat: '14 days',
    statLabel: 'Advance warning',
  },
  {
    icon: TrendingUp,
    title: 'Reveal Hidden Opportunities',
    desc: 'Reduce dead stock, prevent over-ordering, and improve your margins.',
    stat: '€1.2M',
    statLabel: 'Avg. annual savings',
  },
  {
    icon: ClipboardList,
    title: 'Ready Action List',
    desc: 'AI answers "What should I do?" You just approve and execute.',
    stat: '65%',
    statLabel: 'Faster decisions',
  },
  {
    icon: MessageCircle,
    title: 'Know Why Every Time',
    desc: 'Not a black box. See the reasoning behind every recommendation.',
    stat: '100%',
    statLabel: 'Transparent AI',
  },
];

export default function SolutionSection() {
  return (
    <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-400/[0.06] blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-12">
          <div>
            <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">OUR SOLUTION</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Enterprise power, SMB simplicity.
            </h2>
          </div>
          <div>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              StableScore delivers the functional power of SAP and Oracle solutions, in a simplicity that SMBs can actually use. No code. No IT team.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock size={16} className="text-accent-light" />
                48-hour setup
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CreditCard size={16} className="text-accent-light" />
                Starting at €299/month
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Rocket size={16} className="text-accent-light" />
                ROI in 30 days
              </div>
            </div>
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
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{f.desc}</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-lg font-bold text-white">{f.stat}</p>
                <p className="text-xs text-gray-400">{f.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
