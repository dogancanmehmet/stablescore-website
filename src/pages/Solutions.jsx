import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Package,
  ShoppingCart,
  ShieldAlert,
  Zap,
  Database,
  Brain,
  Play,
  Factory,
  Building2,
  Landmark,
  Store,
  Plane,
  X,
} from 'lucide-react';

const solutions = [
  {
    icon: Package,
    title: 'Inventory Intelligence',
    desc: 'Prevent stock-outs and reduce dead stock with demand-aware recommendations.',
    features: [
      'Real-time stock-level monitoring across warehouses',
      'AI-driven reorder point optimization',
      'Dead stock identification with root-cause analysis',
      'Demand forecasting with seasonality awareness',
    ],
    metric: 'Reduce stock-out exposure and inventory waste',
  },
  {
    icon: ShoppingCart,
    title: 'Procurement Intelligence',
    desc: 'Optimize supplier selection, lead times, and purchase orders automatically.',
    features: [
      'Supplier performance scoring and risk ranking',
      'Automated purchase order recommendations',
      'Lead time anomaly detection',
      'Cost-saving opportunity alerts',
    ],
    metric: 'Accelerate purchasing decisions and reduce shortages',
  },
  {
    icon: ShieldAlert,
    title: 'Operational Risk',
    desc: 'Detect anomalies early and mitigate risks before they impact revenue.',
    features: [
      'Multi-signal risk scoring in real time',
      'Early warning alerts with severity levels',
      'Impact estimation on revenue and operations',
      'Automated escalation and action routing',
    ],
    metric: 'Cut risk exposure with proactive alerts',
  },
  {
    icon: Zap,
    title: 'Demand Signals',
    desc: 'Surface hidden demand patterns from sales, marketing, and external data.',
    features: [
      'Unified demand signal engine across channels',
      'External factor correlation (weather, events, trends)',
      'Promotional impact forecasting',
      'New product demand sensing',
    ],
    metric: 'Improve forecast accuracy and planning confidence',
  },
];

const steps = [
  {
    icon: Database,
    title: 'Connect',
    desc: 'Integrate with ERP, CRM, WMS and spreadsheets through a structured onboarding process.',
  },
  {
    icon: Brain,
    title: 'Analyze',
    desc: 'Our AI continuously monitors signals and detects patterns.',
  },
  {
    icon: Play,
    title: 'Act',
    desc: 'Receive prioritized, explainable recommendations and take action.',
  },
];

const industries = [
  { icon: Factory, name: 'Manufacturing', desc: 'Optimize production planning and raw material procurement.' },
  { icon: Building2, name: 'FMCG Distribution', desc: 'Reduce stock-outs and inventory waste across channels.' },
  { icon: Landmark, name: 'Financial Operations', desc: 'Automate compliance reviews and risk monitoring.' },
  { icon: Store, name: 'Retail', desc: 'Align inventory with real-time demand signals.' },
  { icon: Plane, name: 'Logistics', desc: 'Predict delays and optimize fleet utilization.' },
];

const comparison = {
  traditional: ['Reactive firefighting', 'Siloed dashboards', 'Manual spreadsheet analysis', 'Fragmented tools', 'Black box answers'],
  stablescore: ['Proactive recommendations', 'Unified decision layer', 'Continuous AI monitoring', 'One platform', 'Explainable and transparent'],
};

export default function Solutions() {
  return (
    <div className="w-full">
      {/* 1. Page Hero */}
      <section className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">SOLUTIONS</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
                Decision intelligence modules for operational teams.
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                From inventory to procurement, StableScore delivers domain-specific intelligence that turns operational data into clear, explainable, and actionable decisions.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors mt-8"
              >
                Request a Demo
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-bg-light border border-border rounded-2xl p-6 md:p-8">
              <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-4">What we cover</p>
              <div className="space-y-3">
                {solutions.map((s) => (
                  <div key={s.title} className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <s.icon size={18} className="text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{s.title}</p>
                      <p className="text-xs text-muted">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solutions Overview Grid */}
      <section className="w-full bg-bg-light py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Four modules. One decision layer.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Each module works standalone or together to give you complete operational visibility and decision support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-base text-muted leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy-800">
                      <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-sm font-semibold text-accent">{s.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Individual Solution Sections */}
      {solutions.map((s, i) => (
        <section
          key={s.title}
          className={`w-full py-16 md:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-bg-light'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
                  {s.title}
                </h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  {s.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-base text-navy-800">
                      <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                >
                  Explore in a demo <ArrowRight size={14} />
                </Link>
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm font-semibold text-navy-900">{s.title}</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-bg-light rounded-lg p-4">
                      <p className="text-xs text-muted uppercase tracking-wide mb-2">Key Insight</p>
                      <p className="text-sm text-navy-800 leading-relaxed">
                        AI has identified a {s.title.toLowerCase().split(' ')[0]} optimization opportunity that could reduce operational risk.
                      </p>
                    </div>
                    <div className="bg-bg-light rounded-lg p-4">
                      <p className="text-xs text-muted uppercase tracking-wide mb-3">Recent Signals</p>
                      <div className="space-y-2.5">
                        {[1, 2, 3].map((n) => (
                          <div key={n} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <div className="h-2 bg-gray-200 rounded-full flex-1" style={{ width: `${60 + n * 15}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-navy-900 rounded-lg p-4">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">AI Recommendation</p>
                      <p className="text-sm text-white font-medium">
                        Action required: Review {s.title.toLowerCase()} signals and approve recommended next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 4. How It Works */}
      <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-400/[0.06] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">HOW IT WORKS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              From data to decision in three steps.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon size={26} className="text-accent-light" strokeWidth={1.5} />
                </div>
                <div className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%]">
                    <div className="h-px bg-white/20 w-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">INDUSTRIES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Applicable across operational environments.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              StableScore adapts to the unique operational challenges of every sector.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-bg-light border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <ind.icon size={24} className="text-navy-800 mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-navy-900 mb-1">{ind.name}</h3>
                <p className="text-sm text-muted leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Comparison Teaser */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Not another dashboard.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-border overflow-hidden">
            <div className="bg-white p-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-6">Traditional Tools</h3>
              <ul className="space-y-4">
                {comparison.traditional.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted">
                    <X size={16} className="text-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-900 p-8">
              <h3 className="text-lg font-semibold text-white mb-6">StableScore AI</h3>
              <ul className="space-y-4">
                {comparison.stablescore.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-200">
                    <Check size={16} className="text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="w-full bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            See what your data is trying to tell you.
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8">
            Book a live walkthrough tailored to your operations.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors"
          >
            Request a Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
