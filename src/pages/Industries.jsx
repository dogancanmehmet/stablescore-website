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

const industries = [
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
  {
    icon: Stethoscope,
    name: 'Healthcare',
    shortDesc: 'Ensure critical supply availability and reduce waste.',
    longDesc: 'Hospitals and pharmaceutical distributors prevent critical supply shortages while minimizing expired inventory.',
    useCases: [
      'Critical supply shortage prevention',
      'Expiry risk management',
      'Supplier reliability scoring',
      'Regulatory compliance tracking',
    ],
    metric: 'Higher critical stock availability and reduced waste',
  },
  {
    icon: FlaskConical,
    name: 'Pharma',
    shortDesc: 'Manage batch-level inventory and cold chain risks.',
    longDesc: 'Pharmaceutical companies track batch-level inventory, manage cold chain deviations, and ensure regulatory traceability.',
    useCases: [
      'Batch-level inventory tracking',
      'Cold chain deviation alerts',
      'Regulatory traceability',
      'API shortage prediction',
    ],
    metric: 'Reduced batch waste and compliance risk',
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    shortDesc: 'Optimize spare parts inventory and maintenance schedules.',
    longDesc: 'Energy companies reduce downtime by ensuring critical spare parts availability while optimizing maintenance inventory costs.',
    useCases: [
      'Critical spare parts availability',
      'Maintenance schedule optimization',
      'Vendor consolidation insights',
      'Demand forecasting for parts',
    ],
    metric: 'Lower inventory costs and higher uptime',
  },
];

const caseStudies = [
  {
    industry: 'FMCG Distribution',
    company: 'Leading European Distributor',
    result: 'Reduced stock-out exposure and inventory waste through AI-driven demand sensing and automated replenishment recommendations.',
  },
  {
    industry: 'Manufacturing',
    company: 'Mid-Sized Manufacturer',
    result: 'Accelerated supplier comparison and purchasing decisions by embedding procurement intelligence directly into operational workflows.',
  },
  {
    industry: 'Financial Operations',
    company: 'Financial Services Team',
    result: 'Automated high-volume compliance reviews and reduced manual effort by surfacing only high-risk items for human review.',
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
              Operational intelligence for every sector.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              StableScore adapts to the unique challenges of your industry — from manufacturing floors to hospital supply rooms.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors mt-8"
            >
              Request a Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Industries Grid */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Trusted across industries.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              See how mid-sized companies in your sector use StableScore to drive measurable outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <ind.icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-navy-900 mb-1">{ind.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{ind.shortDesc}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-accent">{ind.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry Detail Sections */}
      {industries.slice(0, 5).map((ind, i) => (
        <section
          key={ind.name}
          className={`w-full py-16 md:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-bg-light'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <ind.icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
                  {ind.name}
                </h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  {ind.longDesc}
                </p>
                <ul className="space-y-3 mb-8">
                  {ind.useCases.map((uc) => (
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
                  Explore {ind.name} solutions <ArrowRight size={14} />
                </Link>
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm font-semibold text-navy-900">{ind.name} Impact</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="bg-bg-light rounded-lg p-5 mb-4">
                    <p className="text-xs text-muted uppercase tracking-wide mb-2">Key Outcome</p>
                    <p className="text-base text-navy-900 leading-relaxed">{ind.metric}</p>
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
          </div>
        </section>
      ))}

      {/* 4. Case Studies by Industry */}
      <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-accent/[0.07] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">CASE STUDIES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Real outcomes by industry.
            </h2>
          </div>

          <div className="space-y-4">
            {caseStudies.map((cs) => (
              <div
                key={cs.industry}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-xs font-bold text-accent-light uppercase tracking-wider mb-1">{cs.industry}</p>
                  <p className="text-sm text-gray-300">{cs.company}</p>
                </div>
                <div className="flex-1">
                  <p className="text-base text-white leading-relaxed">{cs.result}</p>
                </div>
                <Link
                  to="/case-studies"
                  className="text-sm font-medium text-accent-light hover:text-white transition-colors flex-shrink-0"
                >
                  Read case study →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
            See how StableScore fits your industry.
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8">
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
