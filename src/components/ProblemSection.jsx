import { Euro, Timer, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Euro,
    title: 'Thousands of € lost every year.',
    desc: 'Stock-outs and dead stock eat up an average of 8% of SMB annual revenue. Unlike large companies, you cannot afford this loss.',
  },
  {
    icon: Timer,
    title: 'Small team, massive workload.',
    desc: 'Your operations team spends 15+ hours per week in Excel and reports. That time could be spent on growth.',
  },
  {
    icon: AlertTriangle,
    title: 'No warning before the crisis hits.',
    desc: 'Your ERP shows the past, dashboards show the damage. By the time you notice the problem, you have already lost money.',
  },
];

export default function ProblemSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-[60%] right-[-10%] w-[400px] h-[400px] rounded-full bg-red-400/[0.03] blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">THE PROBLEM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Operational chaos is not a luxury for SMBs — it is a threat.
            </h2>
          </div>
          <div className="pt-1">
            <p className="text-base text-muted leading-relaxed">
              For 50-500 employee companies, operational efficiency is vital. But existing tools are either too expensive, too complex, or only show the past.
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div key={p.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                <p.icon size={20} className="text-red-500" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-900">{p.title}</h3>
                <p className="text-sm text-muted mt-1 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-bg-light border border-border rounded-xl p-6 md:p-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: '8%', label: 'Annual revenue lost to stock errors' },
              { stat: '15+', label: 'Weekly hours lost to manual reporting' },
              { stat: '3x', label: 'Slower detection (SMB vs Enterprise)' },
            ].map((s) => (
              <div key={s.stat}>
                <p className="text-3xl font-bold text-navy-900">{s.stat}</p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
