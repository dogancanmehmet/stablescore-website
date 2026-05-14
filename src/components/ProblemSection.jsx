import { Database, BarChart3, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Database,
    title: 'Revenue leakage is invisible until it hits the P&L.',
    desc: 'ERP systems store data but do not alert teams to stock-outs, waste or delays before revenue is lost. By the time the problem is visible, the money is already gone.',
  },
  {
    icon: BarChart3,
    title: 'Manual analysis burns hours every week.',
    desc: 'Teams spend significant time reconciling spreadsheets, checking reports and chasing signals across disconnected systems. Time that could go into decisions goes into data collection.',
  },
  {
    icon: AlertTriangle,
    title: 'Intuition fails when complexity rises.',
    desc: 'With thousands of SKUs, multiple warehouses and shifting demand, no team can monitor everything. Critical risks slip through until they become emergencies.',
  },
];

export default function ProblemSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[60%] right-[-10%] w-[400px] h-[400px] rounded-full bg-red-400/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">THE COST OF DELAY</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Every month, operational risks drain revenue before you see them in reports.
            </h2>
          </div>
          <div className="pt-1">
            <p className="text-base text-muted leading-relaxed">
              Mid-sized operational companies lose money to stock-outs, expired inventory, procurement inefficiencies and delayed decisions. The problem is not lack of data. It is lack of a system that turns data into prioritized, explainable actions before financial damage happens.
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
