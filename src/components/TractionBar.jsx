import { TrendingUp, FlaskConical, Building2, Award } from 'lucide-react';

const stats = [
  {
    icon: FlaskConical,
    label: 'Proof of Concepts',
    value: 'Multiple PoCs',
    detail: 'Across FMCG, manufacturing and regulated operations',
  },
  {
    icon: TrendingUp,
    label: 'Data Scale Tested',
    value: '30M+ rows',
    detail: 'Operational datasets processed in under 30 minutes',
  },
  {
    icon: Building2,
    label: 'Ecosystem Support',
    value: 'EU Accelerators',
    detail: 'Backed by European startup and innovation programs',
  },
  {
    icon: Award,
    label: 'Technology Partner',
    value: 'Fraunhofer Aligned',
    detail: 'Collaboration on applied AI for operational systems',
  },
];

export default function TractionBar() {
  return (
    <section className="w-full bg-navy-900 py-10 md:py-14 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[250px] h-[250px] rounded-full bg-indigo-400/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <s.icon size={18} className="text-accent-light" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</p>
                <p className="text-lg font-bold text-white mt-0.5">{s.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
