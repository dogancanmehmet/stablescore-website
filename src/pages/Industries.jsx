import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Factory,
  Building2,
  Landmark,
  Store,
  Plane,
  Stethoscope,
  FlaskConical,
  Zap,
} from 'lucide-react';

const primaryIndustry = {
  icon: Building2,
  name: 'FMCG Distribution',
  shortDesc: 'Reduce stock-outs and inventory waste across channels.',
  longDesc: 'Distributors use StableScore to balance inventory across warehouses, predict demand spikes, and minimize write-offs from expired goods.',
  useCases: [
    'Multi-warehouse stock balancing',
    'Demand spike prediction',
    'Expiry risk alerting',
    'Promotional impact planning',
  ],
  metric: 'Improved stock availability and reduced waste',
};

const adjacentIndustries = [
  {
    icon: Factory,
    name: 'Manufacturing',
    shortDesc: 'Optimize production planning and raw material procurement.',
    longDesc: 'StableScore helps manufacturers synchronize production schedules with supplier lead times, reducing downtime and raw material waste.',
    useCases: [
      'Raw material shortage prediction',
      'Production bottleneck identification',
      'Supplier lead time optimization',
      'Quality defect early warning',
    ],
    metric: 'Faster purchasing decisions and reduced shortages',
  },
  {
    icon: Landmark,
    name: 'Financial Operations',
    shortDesc: 'Automate compliance reviews and risk monitoring.',
    longDesc: 'Financial teams automate high-volume compliance checks, detect operational anomalies, and reduce manual reconciliation effort.',
    useCases: [
      'High-volume compliance automation',
      'Operational anomaly detection',
      'Manual effort reduction',
      'Audit trail generation',
    ],
    metric: 'Reduced manual effort and faster compliance cycles',
  },
  {
    icon: Store,
    name: 'Retail',
    shortDesc: 'Align inventory with real-time demand signals.',
    longDesc: 'Retailers optimize replenishment, reduce markdowns, and align store-level inventory with local demand patterns.',
    useCases: [
      'Store-level replenishment optimization',
      'Markdown reduction',
      'Local demand pattern analysis',
      'Seasonal trend adaptation',
    ],
    metric: 'Better forecast accuracy and inventory alignment',
  },
  {
    icon: Plane,
    name: 'Logistics',
    shortDesc: 'Predict delays and optimize fleet utilization.',
    longDesc: 'Logistics teams predict shipment delays, optimize routes, and balance fleet capacity against dynamic demand.',
    useCases: [
      'Shipment delay prediction',
      'Route optimization',
      'Fleet capacity balancing',
      'Carrier performance scoring',
    ],
    metric: 'Improved on-time delivery and fleet efficiency',
  },
];

const potentialIndustries = [
  {
    icon: Stethoscope,
    name: 'Healthcare',
    shortDesc: 'Support supply planning and inventory visibility in care environments.',
    metric: 'Improved visibility into operational data',
  },
  {
    icon: FlaskConical,
    name: 'Pharma',
    shortDesc: 'Support inventory visibility and operational traceability where applicable.',
    metric: 'Improved operational data visibility',
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    shortDesc: 'Optimize spare parts inventory and maintenance schedules.',
    metric: 'Lower inventory costs and higher uptime',
  },
];

export default function Industries() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">INDUSTRIES</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              FMCG Distribution is our focus. Adjacent industries are next.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              StableScore AI is built for operational environments with structured ERP data and measurable inventory risk. We started with FMCG distribution and are expanding into manufacturing, retail, logistics and regulated operations.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-accent-light transition-colors mt-8"
            >
              See where your operational risk is hidden
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Primary Industry — FMCG */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
              Primary Focus
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <primaryIndustry.icon size={24} className="text-accent" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
                {primaryIndustry.name}
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                {primaryIndustry.longDesc}
              </p>
              <ul className="space-y-3 mb-8">
                {primaryIndustry.useCases.map((uc) => (
                  <li key={uc} className="flex items-start gap-3 text-base text-navy-800">
                    <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {uc}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
              >
                See how it works for distributors <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-semibold text-navy-900">{primaryIndustry.name} Impact</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="bg-bg-light rounded-lg p-5 mb-4">
                <p className="text-xs text-muted uppercase tracking-wide mb-2">Key Outcome</p>
                <p className="text-base text-navy-900 leading-relaxed">{primaryIndustry.metric}</p>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-accent" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full flex-1" style={{ width: `${50 + n * 12}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Adjacent Industries */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Adjacent Markets</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Proven operational patterns. Expanding industries.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {adjacentIndustries.map((ind) => (
              <div
                key={ind.name}
                className="bg-bg-light border border-border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <ind.icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{ind.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{ind.shortDesc}</p>
                <ul className="space-y-2 mb-5">
                  {ind.useCases.slice(0, 2).map((uc) => (
                    <li key={uc} className="flex items-start gap-2 text-sm text-navy-800">
                      <Check size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {uc}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">{ind.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Potential Industries */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Potential Applications</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
              Future operational environments.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {potentialIndustries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white border border-border rounded-2xl p-6 opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-center gap-2 mb-3">
                  <ind.icon size={20} className="text-muted" strokeWidth={1.5} />
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-semibold uppercase tracking-wider rounded-full">
                    Potential
                  </span>
                </div>
                <h3 className="text-base font-semibold text-navy-900 mb-1">{ind.name}</h3>
                <p className="text-sm text-muted leading-relaxed">{ind.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="w-full bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            See where your operational risk is hidden.
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8">
            Book a tailored walkthrough with our industry specialists.
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
