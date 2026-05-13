import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Building2,
  Factory,
  Landmark,
  Store,
  Plane,
  Stethoscope,
  Quote,
} from 'lucide-react';

const featuredCases = [
  {
    industry: 'FMCG Distribution',
    icon: Building2,
    company: 'Leading European Distributor',
    headline: 'Reduced stock-out exposure by 32% and inventory waste by €1.2M.',
    challenge: 'Managing inventory across 12 warehouses and 3,000+ SKUs led to frequent stock-outs in high-velocity products and significant write-offs from expired goods.',
    solution: 'StableScore connected ERP and WMS data to build a unified demand signal engine. AI-generated reorder recommendations replaced manual spreadsheet-based planning.',
    results: [
      'Stock-out exposure reduced by 32%',
      '€1.2M saved in inventory waste',
      'Replenishment planning time cut by 50%',
      'Expiry risk alerts 14 days in advance',
    ],
    stat: '32%',
    statLabel: 'Stock-out reduction',
    color: 'bg-blue-50',
  },
  {
    industry: 'Manufacturing',
    icon: Factory,
    company: 'Mid-Sized Precision Manufacturer',
    headline: 'Accelerated supplier comparison and purchasing decisions by 65%.',
    challenge: 'Procurement teams spent weeks comparing supplier quotes and lead times manually. Critical raw material shortages caused production line stoppages.',
    solution: 'Procurement Intelligence module automated supplier scoring and generated ranked purchase recommendations based on price, lead time, and quality history.',
    results: [
      'Purchasing decisions 65% faster',
      'Raw material shortages down 45%',
      'Supplier consolidation from 47 to 12 vendors',
      '€800K annual procurement savings',
    ],
    stat: '65%',
    statLabel: 'Faster decisions',
    color: 'bg-amber-50',
  },
  {
    industry: 'Financial Operations',
    icon: Landmark,
    company: 'Mid-Market Financial Services Firm',
    headline: 'Automated high-volume compliance reviews and reduced manual effort by 70%.',
    challenge: 'Operations teams manually reviewed thousands of compliance documents monthly. Errors and delays led to regulatory inquiries and customer dissatisfaction.',
    solution: 'StableScore deployed automated document classification and anomaly detection across transaction streams, flagging only high-risk items for human review.',
    results: [
      'Manual effort reduced by 70%',
      'Compliance review SLA improved from 5 days to 1 day',
      'False positive rate cut by 55%',
      'Zero regulatory penalties in 12 months',
    ],
    stat: '70%',
    statLabel: 'Less manual effort',
    color: 'bg-emerald-50',
  },
];

const moreCases = [
  {
    industry: 'Retail',
    icon: Store,
    headline: 'Aligned store inventory with local demand patterns.',
    stat: '25%',
    statLabel: 'Better forecasts',
  },
  {
    industry: 'Logistics',
    icon: Plane,
    headline: 'Predicted delays and optimized fleet utilization.',
    stat: '40%',
    statLabel: 'Delay reduction',
  },
  {
    industry: 'Healthcare',
    icon: Stethoscope,
    headline: 'Ensured critical supply availability across 8 hospitals.',
    stat: '90%',
    statLabel: 'Stock availability',
  },
];

const testimonials = [
  {
    quote: 'StableScore replaced weeks of manual analysis with clear, actionable recommendations. Our procurement team now makes decisions in hours, not days.',
    author: 'Thomas Weber',
    role: 'Head of Procurement',
    company: 'Precision Manufacturer',
  },
  {
    quote: 'For the first time, we can see demand patterns across all channels in one place. The AI alerts have prevented countless stock-outs.',
    author: 'Anna Müller',
    role: 'Supply Chain Director',
    company: 'European Distributor',
  },
  {
    quote: 'The compliance automation alone saved us hundreds of hours per month. Our team can now focus on strategic work instead of manual reviews.',
    author: 'Marcus Chen',
    role: 'COO',
    company: 'Financial Services Firm',
  },
];

export default function CaseStudies() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section id="case-studies" className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">CASE STUDIES</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Real operational outcomes.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              See how mid-sized companies across industries use StableScore to reduce risk, cut waste, and accelerate decisions.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors mt-8"
            >
              Book a Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Case Studies */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {featuredCases.map((cs, i) => (
              <div
                key={cs.industry}
                id={cs.industry.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white border border-border rounded-2xl overflow-hidden"
              >
                <div className={`${cs.color} px-8 py-4 border-b border-border flex items-center gap-3`}>
                  <cs.icon size={18} className="text-navy-800" strokeWidth={1.5} />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">{cs.industry}</span>
                  <span className="text-xs text-muted ml-auto">{cs.company}</span>
                </div>

                <div className="p-8 md:p-10">
                  <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                      <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight mb-6">
                        {cs.headline}
                      </h2>

                      <div className="space-y-5">
                        <div>
                          <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">Challenge</p>
                          <p className="text-sm text-muted leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">Solution</p>
                          <p className="text-sm text-muted leading-relaxed">{cs.solution}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">Key Results</p>
                          <ul className="space-y-2">
                            {cs.results.map((r) => (
                              <li key={r} className="flex items-start gap-2.5 text-sm text-navy-800">
                                <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:border-l lg:border-border lg:pl-10 flex flex-col justify-center">
                      <div className="bg-bg-light rounded-xl p-6 text-center">
                        <p className="text-5xl font-bold text-navy-900">{cs.stat}</p>
                        <p className="text-sm text-muted mt-2">{cs.statLabel}</p>
                      </div>
                      <div className="mt-4 bg-navy-900 rounded-xl p-5">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">AI Insight</p>
                        <p className="text-sm text-white leading-relaxed">
                          StableScore identified the issue {i === 0 ? '14 days' : i === 1 ? '3 weeks' : '48 hours'} before traditional reporting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. More Case Studies */}
      <section id="more-cases" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              More success stories.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              StableScore delivers results across a growing range of industries and use cases.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreCases.map((cs) => (
              <div
                key={cs.industry}
                className="bg-bg-light border border-border rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <cs.icon size={20} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">{cs.industry}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 leading-snug mb-4">
                  {cs.headline}
                </h3>
                <div className="pt-4 border-t border-border">
                  <p className="text-2xl font-bold text-navy-900">{cs.stat}</p>
                  <p className="text-sm text-muted">{cs.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section id="testimonials" className="w-full bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">TESTIMONIALS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              What our customers say.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8"
              >
                <Quote size={24} className="text-accent-light mb-4" />
                <p className="text-base text-white leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries Teaser */}
      <section id="industries-teaser" className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight mb-2">
                Explore by industry.
              </h2>
              <p className="text-base text-muted leading-relaxed">
                See how StableScore adapts to the unique challenges of your sector.
              </p>
            </div>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors flex-shrink-0"
            >
              View Industries
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section id="cta" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
            Ready to write your success story?
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8">
            Book a demo and see how StableScore can deliver measurable outcomes for your operations.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors"
          >
            Book a Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
