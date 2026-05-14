import { Database, Search, AlertTriangle, Lightbulb, GitPullRequest, ShieldCheck } from 'lucide-react';

const layers = [
  {
    icon: Database,
    name: 'Data',
    description: 'ERP, CRM, WMS, spreadsheets, databases.',
    color: 'bg-blue-500 text-white',
    bg: 'bg-blue-50 border-blue-100',
  },
  {
    icon: Search,
    name: 'Discovery',
    description: 'Finds KPIs, anomalies, patterns.',
    color: 'bg-indigo-500 text-white',
    bg: 'bg-indigo-50 border-indigo-100',
  },
  {
    icon: AlertTriangle,
    name: 'Predictive',
    description: 'Detects risks and deviations.',
    color: 'bg-amber-500 text-white',
    bg: 'bg-amber-50 border-amber-100',
  },
  {
    icon: Lightbulb,
    name: 'Decision',
    description: 'Explainable recommendations.',
    color: 'bg-accent text-white',
    bg: 'bg-accent/5 border-accent/20',
  },
  {
    icon: GitPullRequest,
    name: 'Workflow',
    description: 'Approvals and follow-up.',
    color: 'bg-emerald-500 text-white',
    bg: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: ShieldCheck,
    name: 'Trust',
    description: 'Explainability and human review.',
    color: 'bg-navy-900 text-white',
    bg: 'bg-gray-50 border-gray-200',
  },
];

export default function OperationalDecisionLayer() {
  return (
    <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Architecture</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.1] mb-4">
            Six layers. One decision system.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Most companies have dashboards and AI tools. What they lack is a continuous decision layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {layers.map((layer, i) => (
            <div
              key={layer.name}
              className={`relative ${layer.bg} border rounded-2xl p-7 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${layer.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                  <layer.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Layer {i + 1}</p>
                  <h3 className="text-lg font-bold text-navy-900">{layer.name}</h3>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">{layer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
