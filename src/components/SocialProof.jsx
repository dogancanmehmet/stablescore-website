import { Quote, Building2, Factory, Landmark } from 'lucide-react';

const scenarios = [
  {
    context: 'Illustrative scenario — FMCG Distribution',
    quote: 'Instead of waiting for weekly reports, the team now sees which product groups are at risk of stock-out across warehouses, with root-cause context on demand shifts and lead-time gaps.',
    role: 'Operations team perspective',
    icon: Building2,
  },
  {
    context: 'Illustrative scenario — Manufacturing',
    quote: 'Procurement went from collecting supplier offers across files and emails to having structured comparisons with decision-relevant differences highlighted for review.',
    role: 'Procurement team perspective',
    icon: Factory,
  },
  {
    context: 'Illustrative scenario — Regulated Environment',
    quote: 'Sensitive operational data stays within the company infrastructure while the team gets structured signal detection and explainable review workflows.',
    role: 'Compliance team perspective',
    icon: Landmark,
  },
];

export default function SocialProof() {
  return (
    <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-accent/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[10%] w-[300px] h-[300px] rounded-full bg-purple-400/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">USE CASE SCENARIOS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            How operational teams use StableScore.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((s) => (
            <div
              key={s.context}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <s.icon size={18} className="text-accent-light" strokeWidth={1.5} />
                <span className="text-[10px] font-semibold text-accent-light uppercase tracking-wider">
                  {s.context}
                </span>
              </div>
              <Quote size={20} className="text-accent-light/60 mb-3" />
              <p className="text-sm text-white leading-relaxed mb-6 flex-1">
                {s.quote}
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
