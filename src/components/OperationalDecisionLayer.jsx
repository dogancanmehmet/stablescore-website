import { Database, Search, AlertTriangle, Lightbulb, GitPullRequest, ShieldCheck } from 'lucide-react';

const layers = [
  {
    icon: Database,
    name: 'Data Layer',
    description: 'ERP, CRM, WMS, spreadsheets, operational databases and internal systems.',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Search,
    name: 'Discovery Layer',
    description: 'Finds KPIs, anomalies, operational patterns and decision signals.',
    color: 'bg-indigo-500/10 text-indigo-600',
  },
  {
    icon: AlertTriangle,
    name: 'Predictive Layer',
    description: 'Detects operational risks, deviations and future exposure.',
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: Lightbulb,
    name: 'Decision Layer',
    description: 'Generates explainable recommendations and prioritizes operational actions.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: GitPullRequest,
    name: 'Workflow Layer',
    description: 'Supports approvals, operational follow-up and business workflows.',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: ShieldCheck,
    name: 'Trust Layer',
    description: 'Explainability, traceability, human review and controlled decision support.',
    color: 'bg-navy-900/10 text-navy-900',
  },
];

export default function OperationalDecisionLayer() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Architecture</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
            The Operational Decision Layer
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Most companies already have dashboards, reports and AI tools. What they lack is a continuous decision layer that turns operational data into explainable actions.
          </p>
        </div>

        <p className="text-center text-base text-muted leading-relaxed max-w-3xl mx-auto mb-12">
          StableScore AI connects fragmented operational systems, identifies meaningful signals, explains operational risks and supports teams with recommended next steps.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative space-y-4">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden sm:block" />

            {layers.map((layer, i) => (
              <div
                key={layer.name}
                className="relative flex items-start gap-4 sm:gap-6 bg-bg-light border border-border rounded-2xl p-5 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${layer.color} flex items-center justify-center flex-shrink-0 z-10`}>
                  <layer.icon size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-base font-semibold text-navy-900">{layer.name}</h3>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-wider">
                      Layer {i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
