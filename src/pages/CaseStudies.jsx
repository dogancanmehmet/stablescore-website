import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Landmark, TrendingDown, Search, Lightbulb, TrendingUp } from 'lucide-react';

const cases = [
  {
    slug: 'fmcg-distribution-risk-detection',
    industry: 'FMCG Distribution',
    icon: Building2,
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-500',
    title: 'Detecting stock-out exposure and high-waste inventory',
    hiddenCost: 'Revenue leakage from stock-outs and expired inventory invisible until P&L impact.',
    detected: '30M+ rows analyzed in 30 min. >80% return-rate prediction accuracy.',
    action: 'Emergency reorders and redistribution before expiry.',
    impact: 'Stock-out risks surfaced weeks earlier than reporting cycles.',
  },
  {
    slug: 'procurement-comparison-assistant',
    industry: 'Manufacturing',
    icon: Factory,
    color: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-500',
    title: 'Reducing procurement comparison from days to minutes',
    hiddenCost: 'Analyst hours consumed by manual supplier comparison across files and emails.',
    detected: 'Structured fragmented supplier data and flagged non-standard terms.',
    action: 'Prioritized shortlist with ranked alternatives and negotiation targets.',
    impact: 'Comparison cycles reduced from days to minutes.',
  },
  {
    slug: 'regulated-data-review',
    industry: 'Regulated Operations',
    icon: Landmark,
    color: 'bg-emerald-50 border-emerald-100',
    iconBg: 'bg-emerald-500',
    title: 'Cutting manual review workload with prioritized queues',
    hiddenCost: 'Low-risk reviews consumed disproportionate time while high-priority items waited.',
    detected: 'Anomaly patterns identified; only high-priority items surfaced.',
    action: 'Ranked review queue with pre-populated templates.',
    impact: 'Review workload reduced. Sensitive data stayed controlled.',
  },
];

export default function CaseStudies() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section id="overview" className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Real operational teams. Real revenue protected.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              How StableScore detects hidden risks and turns them into prioritized actions.
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

      {/* 2. Case Cards */}
      <section id="cases" className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {cases.map((cs) => (
              <div
                key={cs.slug}
                id={cs.slug}
                className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className={`${cs.color} px-8 py-5 border-b border-border flex items-center gap-4`}>
                  <div className={`w-10 h-10 rounded-xl ${cs.iconBg} flex items-center justify-center`}>
                    <cs.icon size={20} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{cs.industry}</span>
                    <h2 className="text-xl font-bold text-navy-900 leading-tight">{cs.title}</h2>
                  </div>
                </div>

                {/* Body - 4 columns */}
                <div className="p-8">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingDown size={14} className="text-red-500" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-1">Hidden Cost</p>
                        <p className="text-sm text-navy-800 leading-relaxed">{cs.hiddenCost}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Search size={14} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">What We Detected</p>
                        <p className="text-sm text-navy-800 leading-relaxed">{cs.detected}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Lightbulb size={14} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-1">Suggested Action</p>
                        <p className="text-sm text-navy-800 leading-relaxed">{cs.action}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingUp size={14} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1">Business Impact</p>
                        <p className="text-sm text-navy-800 leading-relaxed">{cs.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="w-full bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            See where your operational risk is hidden.
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8">
            We evaluate your data to identify revenue leakage and prioritized actions.
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
