import { TrendingUp, FlaskConical, Building2, Award } from 'lucide-react';

const stats = [
  {
    icon: FlaskConical,
    label: 'Proof of Concepts',
    value: 'Multiple',
    detail: 'FMCG, manufacturing, regulated ops',
  },
  {
    icon: TrendingUp,
    label: 'Data Scale',
    value: '30M+',
    detail: 'Rows processed in <30 min',
  },
  {
    icon: Building2,
    label: 'Ecosystem',
    value: 'EU Accelerators',
    detail: 'Startup and innovation programs',
  },
  {
    icon: Award,
    label: 'Technology',
    value: 'Fraunhofer',
    detail: 'Applied AI collaboration',
  },
];

export default function TractionBar() {
  return (
    <section className="w-full bg-navy-900 py-12 md:py-16 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[250px] h-[250px] rounded-full bg-indigo-400/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <s.icon size={20} className="text-accent-light" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">{s.label}</p>
                <p className="text-xl font-bold text-white">{s.value}</p>
                <p className="text-[11px] text-gray-400">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
