import { Database, BarChart3, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Database,
    title: 'ERP systems store data.',
    desc: "But they don't tell teams what to do next. Data sits in silos while decisions are made on gut feel.",
  },
  {
    icon: BarChart3,
    title: 'Dashboards show history.',
    desc: 'Problems become visible after the damage happens. By the time you see the trend, the opportunity is gone.',
  },
  {
    icon: AlertTriangle,
    title: 'Teams rely on intuition.',
    desc: 'Critical decisions are based on experience and spreadsheets — not on continuous, explainable intelligence from your operational data.',
  },
];

export default function ProblemSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[60%] right-[-10%] w-[400px] h-[400px] rounded-full bg-red-400/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">THE PROBLEM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              You do not lack dashboards. You lack a decision system.
            </h2>
          </div>
          <div className="pt-1">
            <p className="text-base text-muted leading-relaxed">
              Mid-sized companies have more operational data than ever. Yet most still rely on systems that report the past, not guide the future. When complexity rises, intuition fails — and revenue leaks.
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div key={p.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-bg-light border border-border flex items-center justify-center flex-shrink-0">
                <p.icon size={20} className="text-navy-800" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-900">{p.title}</h3>
                <p className="text-sm text-muted mt-1 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
