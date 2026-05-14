import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Landmark } from 'lucide-react';

const cases = [
  {
    slug: 'fmcg-distribution-risk-detection',
    industry: 'FMCG Distribution',
    icon: Building2,
    title: 'Detecting stock-out exposure and high-waste inventory patterns',
    problem: 'Distribution teams rely on fragmented ERP reports and manual planning sheets. By the time a stock problem appears in monthly reporting, lost sales or waste have already occurred.',
    hiddenCost: 'Revenue leakage from stock-outs and expired inventory was invisible until it hit the P&L. Teams spent hours each week manually reconciling stock levels across warehouses.',
    detected: 'StableScore AI analyzed 30M+ rows of operational data in under 30 minutes and identified product-location combinations with stock-out exposure. >80% accuracy in predicting high-return inventory segments.',
    suggestedAction: 'Emergency reorder for at-risk product groups; redistribution of slow-moving stock before expiry; supplier lead-time renegotiation for flagged SKUs.',
    businessImpact: 'Stock-out risks surfaced weeks earlier than traditional reporting. Procurement team moved from reactive firefighting to prioritized action. Foundation established for automated replenishment recommendations.',
  },
  {
    slug: 'procurement-comparison-assistant',
    industry: 'Manufacturing & Procurement',
    icon: Factory,
    title: 'Reducing manual effort in offer collection and supplier comparison',
    problem: 'Procurement teams spent days collecting supplier offers, normalizing terms and comparing parameters across files, emails and ERP records.',
    hiddenCost: 'Significant analyst hours consumed by repetitive data entry and manual comparison. Delayed purchasing decisions led to rushed orders at premium prices.',
    detected: 'StableScore AI structured fragmented supplier data, identified decision-relevant differences and highlighted terms that deviated from historical benchmarks.',
    suggestedAction: 'Prioritized supplier shortlist with ranked alternatives; flagged non-standard terms for legal review; recommended negotiation targets based on historical data.',
    businessImpact: 'Procurement comparison cycles reduced from days to minutes for standard offers. Team capacity reallocated from document handling to strategic supplier management.',
  },
  {
    slug: 'regulated-data-review',
    industry: 'Regulated Operations',
    icon: Landmark,
    title: 'Supporting structured review of operational and compliance-related data',
    problem: 'Regulated teams reviewed large volumes of operational data manually, with no systematic way to prioritize high-risk items or maintain decision traceability.',
    hiddenCost: 'Analysts spent disproportionate time on low-risk reviews while high-priority items waited in queue. Audit preparation required reconstructing decision trails from scattered files.',
    detected: 'StableScore AI applied private-first analytics to structure internal data, identify anomaly patterns and surface only high-priority items requiring human judgment.',
    suggestedAction: 'Ranked review queue by risk score; pre-populated review templates with detected signals; maintained traceable decision log for audit readiness.',
    businessImpact: 'Manual review workload reduced by surfacing high-priority items first. Review consistency improved across team members. Sensitive data remained within controlled environment.',
  },
];

export default function CaseStudies() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section id="overview" className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              See how operational teams stop revenue leakage.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Real anonymized examples of how StableScore AI detects hidden operational risks, explains root causes and recommends actions with measurable business impact.
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

      {/* 2. Disclaimer */}
      <section className="w-full bg-bg-light py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted">
            All case studies are anonymized to protect customer confidentiality. Results depend on data quality, process maturity and deployment scope.
          </p>
        </div>
      </section>

      {/* 3. Cases */}
      <section id="cases" className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((cs) => (
              <div
                key={cs.slug}
                id={cs.slug}
                className="bg-white border border-border rounded-2xl overflow-hidden"
              >
                <div className="bg-accent/[0.03] px-8 py-4 border-b border-border flex items-center gap-3">
                  <cs.icon size={18} className="text-navy-800" strokeWidth={1.5} />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">{cs.industry}</span>
                </div>

                <div className="p-8 md:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight mb-10">
                    {cs.title}
                  </h2>

                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-1">
                      <p className="text-[10px] font-bold text-navy-900 uppercase tracking-wider mb-2">Problem</p>
                      <p className="text-sm text-muted leading-relaxed">{cs.problem}</p>
                    </div>
                    <div className="md:col-span-1">
                      <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-2">Hidden Cost</p>
                      <p className="text-sm text-muted leading-relaxed">{cs.hiddenCost}</p>
                    </div>
                    <div className="md:col-span-1">
                      <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-2">What StableScore Detected</p>
                      <p className="text-sm text-muted leading-relaxed">{cs.detected}</p>
                    </div>
                    <div className="md:col-span-1">
                      <p className="text-[10px] font-bold text-navy-900 uppercase tracking-wider mb-2">Suggested Action</p>
                      <p className="text-sm text-muted leading-relaxed">{cs.suggestedAction}</p>
                    </div>
                    <div className="md:col-span-1 bg-green-50 rounded-xl p-4">
                      <p className="text-[10px] font-bold text-green-700 uppercase tracking-wider mb-2">Business Impact</p>
                      <p className="text-sm text-navy-800 leading-relaxed">{cs.businessImpact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="w-full bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            See where your operational risk is hidden.
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8">
            We will evaluate your operational data to identify revenue leakage, decision bottlenecks and prioritized actions.
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
